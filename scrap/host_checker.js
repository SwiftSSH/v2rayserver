const V2RAY = require('../v2ray');
const path = require('path');
const BuildConfig = require('./client_config');

let v2rayService = new V2RAY({
    v2rayPath: path.join(__dirname, "..", "bin"),
    configPath: path.join(__dirname, "..", "v2ray_config.js"),
});

function check(host, callback) {
    let v2RayConfig = BuildConfig({
        add: host,
        aid:  64,
        id: '15c58a93-48b8-4ecf-ddc7-d7f8520b14c8',
        host: 'd23n5jelsw3qy6.cloudfront.net',
        net: 'ws',
        path: '/',
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
    '104.18.28.242',
    '104.18.29.242',
    '104.18.28.242' 
];  

hosts = `sp-ad-cf.audio.tidal.com
ab-pr-cf.audio.tidal.com
en-pr-cf.audio.tidal.com
sp-pr-cf.audio.tidal.com
cs-pr-cf.audio.tidal.com
exflow.tidal.com
kanyewest.tidal.com
igotthekeys.tidal.com
famous.tidal.com
assets.tidal.com
chains.tidal.com
thebeatles.tidal.com
magazine-resources.tidal.com
resources.tidal.com
partnerapidocs.tidal.com
developer.tidal.com
lookdeeper.tidal.com
desiigner.tidal.com
offer.tidal.com
info.tidal.com
megantheestallion.tidal.com
dm.tidal.com
cmsapi.tidal.com
shining.tidal.com
everythingislove.tidal.com
store.tidal.com
fenty.tidal.com
my.tidal.com`.split('\n')

start(hosts, function(results) {
    console.log(results)
    v2rayService.stop();
});
