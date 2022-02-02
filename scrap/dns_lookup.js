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
    'ababet.ug',
    'www.ababet.ug',
];

defaultA(defaultHosts, console.log)
