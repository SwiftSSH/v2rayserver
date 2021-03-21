const V2RAY = require('./v2ray');
const path = require('path');
const BuildConfig = require('./scrap/client_config');

let v2rayService = new V2RAY({
    v2rayPath: path.join(__dirname, "bin"),
    configPath: path.join(__dirname, "v2ray_config.js"),
});

function check(host, callback) {
    let v2RayConfig = BuildConfig({
        add: host,
        aid:  64,
        id: 'aec153d6-3659-491b-8ef6-722fc65f5617',
        host: 'ind.koodeyo.com',
        net: 'ws',
        path: '/ws/v1/17743',
        port: 443,
        ps: 'http',
        tls: 'tls',
        type: 'none',
        v: '2',
        protocol: 'vmess'
    });

    v2rayService.startHostChecker(v2RayConfig).then(() => {
        setTimeout(() => {
            v2rayService.testConnection(10809, function(errorCode, error, ms) {
                if(ms) {
                  callback(true, ms);
                } else if(error) {
                  callback();
                } else {
                  callback();
                }
            });
        }, 200);
    });
}

function start(hosts, callback) {
    let results = [];

    let run = function () {
        let host = hosts.shift();
        if(!host) {
            return callback(results);
        } else {
            check(host, function(working, ms) {
                results.push({ host, working, ms });
                run();
            });  
        } 
    }

    run();
}

let hosts = [
    // 'www.google.com', 
    'health.go.ug', 
    //'meduweb.com', 
    // 'splashlearn.com', 'www.edx.org', 
    // 'www.examuganda.com', 'www.who.int',
    // 'www.alison.com', 'www.researchgate.net',
    // 'www.masaka.somesa.ug',
];  

start(hosts, function(results) {
    console.log(results)
    v2rayService.stop();
});

// 104.18.29.134 -splashlearn 
// 104.31.80.19 - examuganda.com
// 104.26.13.49 -health.go.ug
// 104.27.157.3 - somesa.ug
// 104.21.78.150 
// 172.67.223.81
// 104.26.5.2 coronavirus.co
// 104.27.156.3
// 104.18.6.65
// 104.18.17.210
// 104.17.33.105
// 104.26.13.49
// 104.26.12.49
// 104.18.28.134
// 104.21.78.150
// 172.67.223.81
// 104.26.12.49
// 104.21.78.150
// 104.17.33.105
// 216.58.208.34
// 44.227.76.166
// somesa.ug
// 104.21.19.155
// 74.125.130.156
// 104.21.78.150
// 104.18.29.134
// www.examuganda.com
// health.go.ug
// pulse.man.co.ug
// mtn.co.ug
// mymtn.mobi
// speedtest.mtn.co.ug
// yellowpix.mtn.co.ug
