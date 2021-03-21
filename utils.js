const path = require('path');
let unzip = require('unzipper');
let fs = require('fs');
let request = require('request');
let progress = require('request-progress');
const moment = require('moment');
const extend = require("xtend");

module.exports = {
    installV2RAY(version = "v4.34.0") {
        let tmpFile = path.resolve(__dirname, 'v2ray.zip');
        let targetPath = path.resolve(__dirname, 'bin');
        return new Promise((resolve, reject) => {
          progress(
            request(`https://github.com/v2fly/v2ray-core/releases/download/${version}/v2ray-linux-64.zip`), 
          {}).on('progress', function ({ percent }) {
            console.log('progress', percent);
          })
          .on('error', reject)
          .on('end', () => {
            fs.access(tmpFile, fs.F_OK, (err) => {
                if (err) return reject();
                ['v2ray', 'v2ctl', 'geoip.dat', 'geosite.dat'].forEach((file) => {
                    try { 
                        fs.unlinkSync(path.join(targetPath, file));
                    } catch(e) {}
                });
                fs.createReadStream(tmpFile)
                .pipe(unzip.Extract({ path: targetPath }))
                .promise()
                .then(() => {
                  fs.unlinkSync(tmpFile);
                  resolve()
                });
            })
          }).pipe(fs.createWriteStream(tmpFile));
        });
    },

    formatExpiryDate(timeStr = 0) {
        let unit, UnitString;
        if(typeof timeStr == 'number') {
            unit = timeStr;
            UnitString = timeStr > 1 ? 'days' : 'day';
        } else {
            [unit, UnitString] = timeStr.split(" ");
        }
        var timeout = moment();
        timeout.add(unit, UnitString);
        return timeout.utc();
    },

    getUsers() {
        const { store, instances } = require('./context');
        let service = instances.get("v2rayService");
        return store.getUsers().map((user) => {
            let inbound = store.getInbound(user.inboundId);
            if(!inbound) return user;
            return extend(inbound, {
                id: user.id,
                alterId: user.alterId,
                inboundId: inbound.id,
                remark: user.remark,
                expires: user.expires,
                enable: user.enable,
                timestamp: user.timestamp,
                onDeleteTimestamp: user.onDeleteTimestamp,
                up: user.up,
                down: user.down,
                status: user.status,
                mult_conn_attempts: user.mult_conn_attempts || 0,
                maximum_ips: user.maximum_ips,
                lastAccessed: user.lastAccessed,
                barned: user.barned,
                isOnline: service.isUserOnline(user.id)
            });
        });
    },

    getSettings(hasNginx) {
        const { store } = require('./context');
        let defaultSettings = [
            {"id": 1, "key": "address", "name": "address", "value": "", "value_type": "text", "tip": "", "need_restart": true},
            {"id": 2, "key": "domain", "name": "domain", "value": "", "value_type": "text", "tip": "", "need_restart": true},
            {"id": 3, "key": "port", "name": "port", "value": 65432, "value_type": "text", "tip": "", "need_restart": true},
            {"id": 4, "key": "cert_file", "name": "cert_file", "value": "", "value_type": "text", "tip": "", "need_restart": true},
            {"id": 5, "key": "key_file", "name": "key_file", "value": "", "value_type": "text", "tip": "", "need_restart": true},
            {"id": 6, "key": "v2_template_config", "name": "v2_template_config", "value": require("./v2ray_config.js"), "value_type": "textarea", "tip": "", "need_restart": false},
            {"id": 7, "key": "nginx_config", "name": "nginx_config", "value": "", "value_type": "textarea", "tip": "", "need_restart": false}
        ];

        return defaultSettings.map((setting) => {
            let storeVal = store.getSettings(setting.key);
            if(storeVal && setting.key !== 'nginx_config') {
                setting.value = storeVal;
            } 
            if(hasNginx && setting.key === 'nginx_config') {
                setting.value = this.getNginxConfig();
            }
            return setting;
        });
    },

    getNginxConfig() {
        const { store } = require('./context');
        return store.getSettings("nginx_config") 
        || fs.readFileSync("./ngnix_config.ejs").toString()
    },

    rePopulateNginxConfigFile(str, noReload) {}    
}