const express = require('express');
const router = express.Router();
const utils = require("../utils");
const { store, instances } = require('../context');
const extend = require("xtend");

router.get('/inbounds', function(req, res) {
    res.json(store.getInbounds());
});

router.get('/users', function(req, res) {
    res.json(utils.getUsers());
});

router.post('/ctl/:command', function(req, res) {
    let service = instances.get('v2rayService');
    try { 
        if(service) {
            service[req.params.command]();
        }
    } catch (e) {}
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

router.post('/inbound/add', JsonBody, function(req, res) {
    let success = store.addInbound(req.body);
    res.json({ msg: success ? 'Successfully added': 'Port exists', success });
});

router.post('/inbound/add/user/:in_id', JsonBody, function(req, res) {
    let inbound = store.getInbound(req.params.in_id);
    let users = store.getUsersByInboundId(req.params.in_id);
    if(inbound) {
        if(users.length < inbound.maximum_users){
            let user = extend(req.body, {
                inboundId: inbound.id
            });
            let userId = store.addUser(user);
            return res.json({ userId, msg: userId ? 'Successfully added user': 'Failed to add user', success: true });
        } else {
            return res.json({ msg: "Failed to add user, inbound user limit exceeded", success: false });
        }
    }
    res.json({ msg: 'Inbound not found', success: false });
});

router.post('/inbound/update/user/:uid', JsonBody, function(req, res) {
    let success = store.updateUser(req.params.uid, req.body);
    return res.json({ msg: success ? 'user successfully updated': 'Failed to update user', success });
});

router.post('/inbound/del/user/:uid', function(req, res) {
    let success = store.removeUser(req.params.uid);
    return res.json({ msg: success ? 'Successfully deleted': 'Failed to delete user', success });
});

router.post('/inbound/update/:in_id', JsonBody, function(req, res) {
    let success = store.updateInbound(req.params.in_id, req.body);
    res.json({ msg: success ? 'Successfully updated' : 'port exists', success })
});

router.post('/inbound/del/:in_id', async function(req, res) {
    let success = await store.removeInbound(req.params.in_id);
    res.json({ msg: success ? 'Successfully deleted': 'Failed to delete', success })
});

router.post('/reset_traffic/:in_id', JsonBody, function(req, res) {
    let success = store.updateInbound(req.params.in_id, {'up': 0, 'down': 0});
    res.json({ msg: 'Reset traffic successfully', success: true})
});

router.post('/reset_all_traffic', JsonBody, function(req, res) {
    let success = store.updateAllInbounds({'up': 0, 'down': 0});
    res.json({ msg: 'Reset traffic successfully', success: true })
});

router.use(function (req, res) {
    res.status(404).send("404");
});

module.exports = router;