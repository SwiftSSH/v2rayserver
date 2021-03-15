const express = require('express');
const router = express.Router();
const { store, data } = require('../context');
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = require('../constants');
const extend = require('xtend');

router.post('/login', async function(req, res) {
  let { username, password } = req.body;
  let admin = store.getAdmin(username);
  let success = false;

  let setToken = function (username, isDefaultUser) {
    const token = jwt.sign({ username, isDefaultUser }, SECRET_KEY, {
      expiresIn: '1h'
    });
    res.cookie('v2-access', token, { httpOnly: true });
  };

  if(admin) {
    const isMatch = await bcrypt.compare(password, admin.password);
    if (isMatch) {
      success = true;
      setToken(username, false);
    }
  } else if(username === 'admin' && password === 'admin') {
    success = true;
    setToken(null, true);
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

router.get('/', async function(req, res) {
  let info = extend(data.get("server_info"), {
    loadbalancerinfo: await utils.loadbalancerinfo()
  });
  res.render('index', { 
    title: 'system status', 
    status: JSON.stringify(info)
  });
});

router.get('/logout', function(req, res) {
  res.clearCookie('v2-access', { path: '/' });
  res.setHeader('set-cookie', 'v2-access=; max-age=0');
  res.redirect('/');
});

router.get('/clients', function(req, res) {
  res.render('clients', { title: 'clients' });
});

router.get('/accounts', function(req, res) {
  res.render('accounts', { 
    title: 'accounts', 
    inbounds: JSON.stringify(store.getInbounds()), 
    users: JSON.stringify(utils.getUsers()) 
  });
});

router.get('/setting', function(req, res, next) {
  res.render('setting', { 
    title: 'panel settings', 
    nginx_config: utils.getNginxConfig(),
    settings: JSON.stringify(utils.getSettings()),
  });
});

module.exports = router;

