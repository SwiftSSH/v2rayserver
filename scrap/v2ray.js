'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');

const configPath = path.resolve('/etc/v2ray/config.json');

class V2rayService extends Service {
  async getConfig() {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
  async post(data) {
    const { service } = this;
    const res = await service.v2ray.getConfig();
    const bool = res.inbounds.some(item => item.port === data.port);
    if (bool) {
      return {
        status: 501,
        msg: 'port已存在',
      };
    }
    res.inbounds.push(data);
    service.v2ray.writeConfig(res);
    return {
      status: 200,
    };
  }
  async put(port, data) {
    const { service } = this;
    const res = await service.v2ray.getConfig();
    const inbounds = res.inbounds.filter(item => item.port !== port);
    inbounds.push(data);
    res.inbounds = inbounds;
    service.v2ray.writeConfig(res);
    return {
      status: 200,
    };
  }
  async delete(port) {
    const { service } = this;
    const res = await service.v2ray.getConfig();
    res.inbounds = res.inbounds.filter(item => item.port !== port);
    service.v2ray.writeConfig(res);
    return {
      status: 200,
    };
  }

  async putLog(body) {
    const { service } = this;
    const res = await service.v2ray.getConfig();
    res.log = body;
    service.v2ray.writeConfig(res);
    return {
      status: 200,
    };
  }

  writeConfig(data) {
    fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
  }
}

module.exports = V2rayService;
