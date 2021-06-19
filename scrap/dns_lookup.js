let dns = require("dns");

function defaultA(hosts, done) {
    let results = [];
    let ips = [];

    let lookup = function() {
        let host = hosts.shift();
        if(!host) {
            done(results, ips);
        } else {
            dns.resolve4(host, function(err, ipv4=[]) {
                ips = ips.concat(ipv4);
                let answer = { resolve4: ipv4, address: host };
                dns.resolve6(host, function(err, ipv6) {
                    answer.resolve6 = ipv6;
                    results.push(answer);
                    setTimeout(lookup, 1000);
                }); 
            });
        }
    }
    lookup();
}

let defaultHosts = [
    'who.int',
    'coronavirus.com',
    'unicef.org',
    'ncov2019.live',
    'cdc.gov',
    'somesa.ug',
    'storylineonline.net',
    'mathgametime.com',
    'uniteforliteracy.com',
    'e-learningforkids.org',
    'allinonehomeschool.com',
    'switchzoo.com',
    'turtlediary.com',
    'splashlearn.com',
    'sciencekids.co.nz',
    'highlightkids.com',
    'abcya.com',
    'pbskids.org',
    'starfall.com',
    'funbrain.com',
    'literactive.com',
    'passuneb.com',
    'examuganda.com',
    'revisenow.net',
    'scholar.google.com',
    'researchgate.net',
    'abcmouse.com',
    'africanstorybook.org/',
    'akelius.com/en/language-course',
    'e-limu.org/hadithi-hadithi/',
    'digitallibrary.io/',
    'internetofgoodthings.org',
    'readingiq.com',
    'storyweaver.org.in/',
    'adventureacademy.com',
    'alison.com',
    'cousera.org',
    'duolingo.com',
    'edx.org',
    'learningequality.org/kolibri',
    'syafunda.co.za'  
];

defaultA(defaultHosts, console.log)
