const express = require('express');
const router = express.Router();
const context = require('../context');
const instances = require('../instances');

let adminCheck = function(req, res, next) {
    if(res.locals.admin) {
      return next();
    }
    res.send({ success: false, msg: "Authentication Error" })
};

router.get('/me', function(req, res) {
    let user = res.locals.user || {};
    if(res.locals.user) {
        let agent = context.store.getUser(res.locals.user.id, true);
        user.onDeleteTimestamp = agent.onDeleteTimestamp;
        user.timestamp = agent.timestamp;
        user.inbound = { maximum_users: 0 };
        let inbound = context.store.getInbound(res.locals.user.inboundId);
        if(inbound)
            inbound.settings.clients = [];
            user.inbound = inbound;
    }
    res.json(user);
});

router.get('/me/users', function(req, res) {
    let users = [];
    let service = instances.get("v2rayService");
    if(res.locals.user) {
        users = context.store.getUsersByAgentId(res.locals.user.id);
    } else if(res.locals.admin) {
        users = context.store.getAgents();
    }
    let uFinal = users.map((user) => {
        delete user.password;
        user.isOnline = service.isUserOnline(user.id);
        return user;
    }); 
    res.json(uFinal);
});

router.get('/me/users/active', function(req, res) {
    if(res.locals.user) {
        let service = instances.get("v2rayService");
        let users = context.store.getUsersByAgentId(res.locals.user.id);
        res.json({ 
            activeUsers: users.filter((user) => service.isUserOnline(user.id))
            .map((user) => user.id)
        });
    }
});

router.post('/user/subscription/renew/:userId', adminCheck, async function(req, res) {
    await context.store.renewSub(req.params.userId, req.body);
    res.json({ msg: "Subscription renewed successfully", success: true });
});

router.post('/traffic/reset/:userId', async function(req, res) {
    context.store.resetTraffic(req.params.userId, 'User');
    res.json({ msg: 'Reset traffic successfully', success: true })
});

module.exports = router;