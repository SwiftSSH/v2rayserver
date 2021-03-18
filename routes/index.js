const express = require('express');
const router = express.Router();
const context = require('../context');
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const rateLimit = require("express-rate-limit");
const { SECRET_KEY } = require('../constants');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10
});

router.post('/register', limiter, async function(req, res) {
  return res.json({ success: false, msg:  "Service unavailable" });
  let { username, password } = req.body;
  if(!username || !password) 
    return res.json({ success: false, msg:  "Some data is missing" });
  let index = context.pendingUsers.findIndex((user) => user.username == username);
  if(index >= 0) 
    return res.json({ success: false, msg:  "Account pending, please wait for confirmation" });
  context.pendingUsers.push({ username, password });
  res.json({ success: true, msg:  "Successfully registered, please wait for confirmation" });
});

router.post('/login', limiter, async function(req, res) {
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
  res.render('dashboard', { 
    title: 'SwiftSSH', 
    pendingUsers: JSON.stringify(context.pendingUsers) 
  });
});

router.get('/servers', function(req, res) {
  res.render('servers', { title: 'SSH/SSL servers' });
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

