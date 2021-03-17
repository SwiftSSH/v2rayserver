const express = require('express');
const router = express.Router();
const context = require('../context');
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = require('../constants');

router.post('/login', async function(req, res) {
  let { username, password } = req.body;
  let admin = context.store.getAdmin(username);
  let user = context.store.getUser(username);
  let success = false;
  let data = { admin: false, isDefaultUser: false };

  let setToken = function () {
    const token = jwt.sign(data, SECRET_KEY, {
      expiresIn: '1h'
    });
    res.cookie('v2-access', token, { httpOnly: true });
  };

  if(admin) {
    const isMatch = await bcrypt.compare(password.toString(), admin.password);
    if (isMatch) {
      success = true;
      data.username = username;
      data.admin = true
    }
  } 
  
  if((user && user.enable) && user.agent) {
    const isMatch = await bcrypt.compare(password.toString(), user.password);
    if (isMatch) {
      success = true;
      delete user.password;
      data.user = user;
    }
  } else if(!admin && (username === 'admin' && password === 'admin')) {
    success = true;
    data.username = username;
    data.isDefaultUser = true;
    data.admin = true;
  }

  if(success) {
    setToken();
  }
  
  res.json({ success, msg: success ? "Login success" : "username or password wrong" });
});

router.use(function(req, res, next) {
  if(req.authenticated) {
    next();
  } else {
    res.render('login', { title: 'login' });
  }
});

function midleware(req, res, next) {
  if(req.authenticated && !res.locals.admin) {
    res.redirect("/dashboard");
  } else {
    next();
  }
}

router.get('/', midleware, async function(req, res) {
  res.render('index', { 
    title: 'system status', 
    status: JSON.stringify(context.data.get("server_info"))
  });
});

router.get('/logout', function(req, res) {
  res.clearCookie('v2-access', { path: '/' });
  res.setHeader('set-cookie', 'v2-access=; max-age=0');
  res.redirect('/');
});

router.get('/clients', midleware, function(req, res) {
  res.render('clients', { title: 'clients' });
});

router.get('/dashboard', function(req, res) {
  res.render('users_dashboard', { title: 'Dashboard' });
});

router.get('/accounts', midleware, function(req, res) {
  res.render('accounts', { 
    title: 'accounts', 
    inbounds: JSON.stringify(context.store.getInbounds()), 
    users: JSON.stringify(utils.getUsers()) 
  });
});

router.get('/setting', midleware, function(req, res, next) {
  res.render('setting', { 
    title: 'panel settings', 
    nginx_config: utils.getNginxConfig(),
    settings: JSON.stringify(utils.getSettings()),
  });
});

module.exports = router;

