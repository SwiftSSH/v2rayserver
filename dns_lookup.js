let dns = require("dns");

function defaultA(hosts, done) {
    let results = [];
    let lookup = function() {
        let host = hosts.shift();
        if(!host) {
            done(results);
        } else {
            dns.resolve4(host, function(err, ipv4) {
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
    'health.go.ug', 'meduweb.com', 
    'splashlearn.com', 'www.edx.org', 
    'www.examuganda.com', 'www.who.int',
    'www.alison.com', 'www.researchgate.net',
    'masaka.somesa.ug'
];

defaultA(defaultHosts, console.log)
