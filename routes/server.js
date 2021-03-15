const express = require('express');
const router = express.Router();
const request = require('request');
const utils = require("../utils");
const { instances, store, data } = require("../context");
const bcrypt = require("bcryptjs");
const fs = require('fs');
const extend = require('xtend');

router.get('/status', async function (req, res) {
  let info = extend(data.get("server_info"), {
    loadbalancerinfo: await utils.loadbalancerinfo()
  });
  res.json(info);
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
  store.resetSettings();
  let service = instances.get('v2rayService');
  if(service) {
    service.restart();
  }
  return res.json({ success: true, msg: `Done successfully`});
});

router.post('/setting/update/:setting_id', function(req, res) {
  let { key, value } = req.body;

  if (key == 'cert_file' || key == 'key_file') {
    if(!fs.existsSync(value)) {
      return res.json({ success: false, msg: `File ${value} does not exist.`});
    }
  }

  store.updateSettings(key, function () {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }());

  if(key == 'v2_template_config') {
    let service = instances.get('v2rayService');
    if(service) {
      service.restart();
    }
  }
  
  res.json({ success: true, msg: "update success, please determine if you need to restart the panel."});
});

router.post('/user/update', async function(req, res) {
  let { old_username, old_password, username, password} = req.body;
  let update = async function() {
    store.updateAdmin(old_username, { 
      username, 
      password: await bcrypt.hash(password, await bcrypt.genSalt(10))
    });
    res.json({ success: true, msg: "update success"});
  };

  let admin = store.getAdmin(old_username);

  if(admin) {
    const isMatch = await bcrypt.compare(old_password, admin.password);
    if(isMatch) {
      return update();
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
    let service = instances.get('v2rayService');
    res.json({ success: true, msg: "Switch v2ray version success"});
    if(service) {
      service.restart();
    }
  }).catch((error) => {
    res.json({ success: false, msg: "Switch v2ray-core version failed."})
  });
});

module.exports = router;