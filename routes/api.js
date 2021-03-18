const express = require('express');
const router = express.Router();
const context = require('../context');

router.get('/me', function(req, res) {
    let user = res.locals.user || {};
    if(res.locals.user) {
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
    if(res.locals.user) {
        users = context.store.getUsersByAgentId(res.locals.user.id);
    } else if(res.locals.admin) {
        users = context.store.getAgents();
    }
    let uFinal = users.map((user) => {
        delete user.password;
        return user;
    }); 
    res.json(uFinal);
});

router.post('/traffic/reset/:userId', async function(req, res) {
    await context.store.updateUser(req.params.userId, {'up': 0, 'down': 0 });
    res.json({ msg: 'Reset traffic successfully', success: true })
});

module.exports = router;