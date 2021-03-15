const V2RAY = require('./v2ray');
const path = require('path');
const BuildConfig = require('./client_config');

let v2rayService = new V2RAY({
    v2rayPath: path.join(__dirname, "bin")
});

function check(host, callback) {
    let v2RayConfig = BuildConfig({
        add: host,
        aid: 32,
        id: '57a9d674-d03d-4430-a9a6-37feb8db16f5',
        host: 'koodeyo.com',
        net: 'ws',
        path: '/ws',
        port: 443,
        ps: 'http',
        tls: 'tls',
        type: 'none',
        v: '2',
        protocol: 'vmess'
    });

    v2rayService.start(v2RayConfig).then(() => {
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
    'www.abcya.com ',
    'www.funbrain.com',
    'www.splashlearn.com',
    'www.storylineonline.net',
    'www.highlightkids.com',
    'www.coolmath4kids.com',
    'www.mathgametime.com',
    'www.uniteforliteracy.com',
    'www.literactive.com',
    'www.sciencekids.co.nz',
    'www.switchzoo.com',
    'www.turtlediary.com',
    'www.e-learningforkids.org',
    'etutoring.gayazahs.sc.ug'   
];  

start(hosts, function(results) {
    console.log(results)
    v2rayService.stop();
});

console.log(`www.abcya.com 
www.funbrain.com
www.splashlearn.com
www.storylineonline.net
www.highlightkids.com
www.coolmath4kids.com
www.mathgametime.com
www.uniteforliteracy.com
www.literactive.com
www.sciencekids.co.nz
www.switchzoo.com
www.turtlediary.com
www.e-learningforkids.org
etutoring.gayazahs.sc.ug`.split("\n"))