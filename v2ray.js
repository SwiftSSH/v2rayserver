const { spawn, spawnSync } = require('child_process');
const https = require('https');
const url = require('url');
const V2rayAPI = require('./v2ray_api');
const fs = require('fs');
const context = require('./context');
const utils = require("./utils");
const extend = require('xtend');
const constants = require("./constants");

function V2RAY({ v2rayPath, configPath, host, port, APIAddr, APIPort, ProxyFlag }) {
    this.v2rayPath = v2rayPath;
    this.host = host;
    this.port = port;
    this.configTemplate = require(configPath);
    this.running = false;
    this.v2rayProc = null;
    this.APIAddr = APIAddr;
    this.APIPort = APIPort;
    this.ProxyFlag = ProxyFlag;
    this.running = false;
    this.message = "Something went wrong";
    this.apiLoaded = false;
    this.restarting = false;
    this.code = 1;
    context.nodeEvent.on('restart', this.restart.bind(this));
    context.nodeEvent.on('command', this.cmd.bind(this));
};

V2RAY.prototype.cmd = function (command) {
    try { 
        this[command]();
    } catch (e) {}
};

V2RAY.prototype.getAPI = function () {
    let { inbounds } = this.config();
    let conf = inbounds.filter((inb) => (inb.protocol === constants.protocols.DOKODEMO))[0];
    let api = new V2rayAPI({ 
        APIAddr: this.APIAddr || conf.listen, 
        APIPort: this.APIPort || conf.port, 
        ProxyFlag:  this.ProxyFlag || conf.tag
    });

    api.init();
    return api;
};

V2RAY.prototype.restart = function() {
    if(!this.restarting) {
        console.log("Restarting v2ray Service after 10 seconds");
        this.restarting = true;
        setTimeout(() => {
            this.stop();
            this.start();
        }, 10 * 1000);
    }
};

V2RAY.prototype.config = function () {
    let v2_template_config = extend(context.store.getSettings('v2_template_config') || this.configTemplate, {});
    var inbounds = context.store.getInbounds(true)
        .filter((inbound) => inbound.enable);
    v2_template_config.inbounds = v2_template_config.inbounds.concat(inbounds);
    return v2_template_config;
};

V2RAY.prototype.start = async function(freshStart) {
    let executable = `${this.v2rayPath}/v2ray`;
    let executable2 = `${this.v2rayPath}/v2ctl`;

    if(freshStart && !fs.existsSync(executable)) {
        console.log("Installing v2ray service");
        return utils.installV2RAY().then(() => {
            console.log("Done installing V2ray");
            this.start();
        });
    }

    fs.chmodSync(executable, 0o765);
    fs.chmodSync(executable2, 0o765);

    this.v2rayProc = spawn(executable, ["-config=stdin:", "-format", "json"]);
    this.v2rayProc.stdout.on('data', (data) => {
        this.running = true;
        if(!this.apiLoaded) {
            context.instances.set('v2rayApi', this.getAPI());
            this.apiLoaded = true;
        }
        console.log(`${data}`);
        // console.log(this.log(`${data}`));
    });
    
    this.v2rayProc.stderr.on('data', (data) => {
        this.message = `${data}`.split("\n")[0];
        this.code = 3;
        console.log(this.message)
    });
  
    this.v2rayProc.stdin.on('error', (e) => {
        console.log("error", e.message)
        this.message = e.message;
        this.restarting = false
    });

    this.v2rayProc.on('close', (params) => {
        this.running = false;
        this.restarting = false
    });

    this.v2rayProc.stdin.write(JSON.stringify(this.config()));
    this.v2rayProc.stdin.end();
    this.code = 0;
    this.restarting = false
    context.instances.set('v2rayService', this);
    context.data.set('v2rayVersion', await this.version());
};

V2RAY.prototype.log = function log(logStr) {
    let data = logStr.split(" ");
    let clean = (str) => str.replace(/\n/g, "").replace(/\[/g,"")
    .replace(/\]/g,"");
    
    let output = {
        log: logStr,
        date: data[0], time: data[1],
        status: data[3],
        source: {
            ip: data[2].split(':')[0],
            port: data[2].split(':')[1]
        }
    };

    if(output.status === 'accepted') {
        let lastVal = data[data.length - 1];
        output[lastVal.includes('@') ? 'email': 'tag'] = clean(lastVal);
        output.target = {
            protocol: data[4].split(':')[0],
            address: data[4].split(':')[1],
            port: data[4].split(':')[2]
        }
    } else {
        output.message = clean(`${data[data.length - 2]} ${data[data.length - 1]}`),
        output.ref = data[data.length - 3].split(":")[0];
    }

    return output;
};

V2RAY.prototype.stop = function() {
    if(this.v2rayProc) {
        this.v2rayProc.kill();
        this.code = 1;
        this.restarting = false;
        console.log("V2RAY service stopped");
    }
};

V2RAY.prototype.version = function () {
    return new Promise((resolve, reject) => {
        try {
            let Proc = spawn(`${this.v2rayPath}/v2ray`, ["-version"]);
            Proc.stdout.on('data', (data) => {
                let result = data.toString();
                let v2ray_version = result.split(' ')[1];
                resolve(v2ray_version);
            });
        } catch (error) { 
            reject(error)
        }
    });
};

V2RAY.prototype.getCert = function () {
    return new Promise((resolve) => {
        let Proc = spawn(`${this.v2rayPath}/v2ctl`, ["cert", "-ca"]);
        Proc.stdout.on('data', (data) => {
            let result = data.toString();
            resolve(JSON.parse(result));
        });
    });
};

V2RAY.prototype.getTraffic = function(type, tag, reset = false) {
    let output = {down: 0, up: 0 };
    [{ bound: "downlink", key: "down" },{ bound: "uplink", key: "up"}]
    .forEach(({ bound, key }) => {
        let command = spawnSync(`./bin/v2ctl`, [
            "api", "--server=127.0.0.1:10085", 
            "StatsService.QueryStats", 
            `pattern: "${type}>>>${tag}>>>traffic>>>${bound}"`, `reset: ${reset}`
            //"StatsService.GetStats",
            //`name: "${type}>>>${tag}>>>traffic>>>${bound}"`, `reset: ${reset}`
        ]);
        try { 
            let result = command.stdout.toString()
            .split("\n");
            output[key] = Number(result[2].replace(/\s/g, '')
            .split(":")[1] || 0);
        } catch(e) {}
    });

    return output;
};

V2RAY.prototype.testConnection = function (httpProxyPort, callback) {
    const HttpsProxyAgent = require('https-proxy-agent');
    let startTime = Date.now();
    var options = url.parse('https://google.com/generate_204');
    options.agent = new HttpsProxyAgent(`http://127.0.0.1:${httpProxyPort}`);
    https.get(options, (res) => {
        let endTime = Date.now();
        if(res.statusCode == 204 || res.statusCode == 200) {
            callback(null, null, endTime - startTime);
        } else {
            callback(res.statusCode, null, null);
        }
    }).on('error', (e) => {
        callback(null, e.message);
    });
};

module.exports = V2RAY;
