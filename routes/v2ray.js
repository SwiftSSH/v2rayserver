const express = require('express');
const router = express.Router();
const utils = require("../utils");
const context = require('../context');
const extend = require("xtend");
const constants = require('../constants');

let adminCheck = function(req, res, next) {
    if(res.locals.admin) {
      return next();
    }
    res.send({ success: false, msg: "Authentication Error" })
};

router.get('/info', adminCheck, function (req, res) {
    let service = context.instances.get("v2rayService");
    let connections = service ? service.getClients() : [];
    res.json(extend(context.store.getRequestsInfo(), {
        ips: connections.map((connection) => {
            return connection.ips.length;
        }).reduce((a, b) => a + b, 0),
        activeConnections: connections.length,
        clients: connections.map((connection) => connection.userId)
    }));
});

router.get('/inbounds', adminCheck, function(req, res) {
    res.json(context.store.getInbounds());
});

router.get('/users', adminCheck, function(req, res) {
    res.json(utils.getUsers());
});

router.post('/ctl/:command', adminCheck, function(req, res) {
    context.nodeEvent.emit("command", req.params.command);
    res.json({ success: true, msg: `${req.params.command} succeeded` });
});

function JsonBody(req, res, next) {
    let body = {};
    for (const key in req.body) {
        if (Object.hasOwnProperty.call(req.body, key)) {
            const value = req.body[key];
            try { 
                body[key] = JSON.parse(value);
            } catch(e) {
                body[key] = value;
            }
        }
    }
    req.body = body;
    next();
}

router.post('/inbound/add', JsonBody, adminCheck, function(req, res) {
    let success = context.store.addInbound(req.body);
    res.json({ msg: success ? 'Successfully added': 'Port exists', success });
});

router.post('/inbound/add/user/:in_id', JsonBody, async function(req, res) {
    let user = extend(req.body, {
        maximum_ips: (req.body.maximum_ips && res.locals.admin) ? req.body.maximum_ips : constants.MAX_IPS_PER_USER,
        agent: (req.body.agent && res.locals.admin)
    });

    if(res.locals.user) {
        user.agentId = res.locals.user.id;
        user.inboundId = res.locals.user.inboundId;
        let agent = context.store.getUser(user.agentId);
        if(agent.status == constants.status.TIMEOUT) {
            return res.json({ msg: "Subscription timeout", success: false });
        }
    } else {
        user.inboundId = req.body.inboundId || req.params.in_id.toLowerCase();
    }

    let inbound = context.store.getInbound(user.inboundId);
    let users = context.store.getUsersByInboundId(user.inboundId);

    if(inbound) {
        if(inbound && (users.length < inbound.maximum_users)){
            let userId = await context.store.addUser(user);
            return res.json({ userId, msg: userId ? 'Successfully added user': 'Failed to add user', success: true });
        } else {
            return res.json({ msg: "Failed to add user, inbound user limit exceeded", success: false });
        }
    }
    res.json({ msg: 'Inbound not found', success: false });
});

router.post('/inbound/update/user/:uid', JsonBody, async function(req, res) {
    if(res.locals.user) {
        delete req.body.maximum_ips;
        delete req.body.barned;
        delete req.body.status,
        delete req.body.mult_conn_attempts;
        let agent = context.store.getUser(res.locals.user.id, true);
        if(agent.status == constants.status.TIMEOUT) {
            return res.json({ msg: "Subscription timeout", success: false });
        }
    } else {
        let agent = context.store.getUser(req.params.uid, true);
        if(agent && req.body.expires !== agent.expires && agent.onDeleteTimestamp) {
            await context.store.renewSub(req.params.uid, req.body);
            return res.json({ msg: 'successfully updated subscription', success: true });
        }
    }
    let success = await context.store.updateUser(req.params.uid, req.body);
    return res.json({ msg: success ? 'user successfully updated': 'Failed to update user', success });
});

router.post('/inbound/del/user/:uid', function(req, res) {
    if(res.locals.user) {
        let users = context.store.getUsersByAgentId(res.locals.user.id);
        if(users.findIndex((user) => user.id == req.params.uid) < 0) {
            return res.json({ msg: 'user not found', success: false });
        }
    }
    let success = context.store.removeUser(req.params.uid);
    return res.json({ msg: success ? 'Successfully deleted': 'Failed to delete user', success });
});

router.post('/inbound/unbarn/user/:uid', adminCheck, async function(req, res) {
    let success = await context.store.unBarnUser(req.params.uid);
    return res.json({ msg: success ? 'Successfully unblocked user': 'Failed to unblock user', success });
});

router.post('/inbound/update/:in_id', JsonBody, adminCheck, function(req, res) {
    let success = context.store.updateInbound(req.params.in_id, req.body);
    res.json({ msg: success ? 'Successfully updated' : 'port exists', success })
});

router.post('/inbound/del/:in_id', adminCheck, async function(req, res) {
    let success = await context.store.removeInbound(req.params.in_id);
    res.json({ msg: success ? 'Successfully deleted': 'Failed to delete', success })
});

router.post('/reset_traffic/:in_id', JsonBody, adminCheck, function(req, res) {
    context.store.updateInbound(req.params.in_id, {'up': 0, 'down': 0});
    res.json({ msg: 'Reset traffic successfully', success: true})
});

router.post('/reset_all_traffic', JsonBody, adminCheck, function(req, res) {
    context.store.updateAllInbounds({'up': 0, 'down': 0});
    res.json({ msg: 'Reset traffic successfully', success: true })
});

router.post('/reset_requests', JsonBody, adminCheck, function(req, res) {
    context.store.resetRequestsInfo();
    res.json({ msg: 'Reset requests successfully', success: true })
});

router.get('/routing/rules', adminCheck, function(req, res) {
    res.json(context.store.getRoutingRules());
});

router.get('/routing/rules/formated', adminCheck, function(req, res) {
    res.json(context.store.getRoutingRulesFormated());
});

router.post('/routing/add', JsonBody, adminCheck, function(req, res) {
    context.store.addRoutingRule(req.body);
    res.json({ msg: 'Rule added successfully', success: true })
});

router.post('/routing/update/:position', JsonBody, adminCheck, function(req, res) {
    context.store.updateRoutingRule(req.params.position, req.body);
    res.json({ msg: 'Rule updated successfully', success: true });
});

router.post('/routing/del/:position', adminCheck, function(req, res) {
    context.store.removeRoutingRule(req.params.position);
    res.json({ msg: 'Rule deleted successfully', success: true });
});

module.exports = router;