const express = require('express');
const router = express.Router();
const request = require('request');
const utils = require("../utils");
const context = require("../context");
const bcrypt = require("bcryptjs");
const fs = require('fs');

router.use(function(req, res, next) {
  if(res.locals.admin) {
    return next()
  }
  res.send({ success: false, msg: "Authentication Error" })
});

router.get('/status', async function (req, res) {
  res.json(context.data.get("server_info"));
});

router.get('/loadbalancerinfo', function (req, res) {
  utils.loadbalancerinfo()
  .then((inf) => res.json(inf))
  .catch(() => {
    res.json({ success: false })
  });
});

router.get('/settings', function(req, res) {
  res.json(utils.getSettings(true));
});

router.post('/setting/default', function(req, res) {
  context.store.resetSettings();
  context.nodeEvent.emit("restart");
  return res.json({ success: true, msg: `Done successfully`});
});

router.post('/setting/update/:setting_id', function(req, res) {
  let { key, value } = req.body;
  if (key == 'cert_file' || key == 'key_file') {
    if(!fs.existsSync(value)) {
      return res.json({ success: false, msg: `File ${value} does not exist.`});
    }
  }
  context.store.updateSettings(key, function () {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }());

  if(key == 'v2_template_config') {
    context.nodeEvent.emit("restart");
  }
  
  res.json({ success: true, msg: "update success, please determine if you need to restart the panel."});
});

router.post('/user/update', async function(req, res) {
  let { old_username, old_password, username, password} = req.body;
  let update = async function(admin, isMatch) {
    context.store.updateAdmin(old_username, { 
      username: username ? username : admin.username, 
      password: password ? await bcrypt.hash(password.toString(), await bcrypt.genSalt(10)) : admin.password
    });
    res.json({ success: true, msg: "update success"});
  };

  let admin = context.store.getAdmin(old_username);

  if(admin) {
    const isMatch = await bcrypt.compare(old_password, admin.password);
    if(isMatch) {
      return update(admin, isMatch);
    }
  } else if(old_username === 'admin' && old_password === 'admin') {
    return update();
  }
  res.json({ success: false, msg: "old username or old password wrong"});
});

router.get('/get_v2ray_versions', function(req, res) {
  request({
    url: 'https://api.github.com/repos/v2fly/v2ray-core/releases',
    headers: {
      'User-Agent': 'request'
    }
  }, function (error, response, body) {
    if(error) {
      return res.json({ success: false, msg: "Failed to check v2ray version from Github, please try again after a while"});
    }
    const info = JSON.parse(body);
    res.json({ obj: info.map((i) => i.tag_name), success: true, msg: "Get v2ray version success" })
  });
});

router.post('/install_v2ray/:version', function(req, res) {
  utils.installV2RAY(req.params.version).then(() => {
    res.json({ success: true, msg: "Switch v2ray version success"});
    context.nodeEvent.emit("restart");
  }).catch((error) => {
    res.json({ success: false, msg: "Switch v2ray-core version failed."})
  });
});

module.exports = router;