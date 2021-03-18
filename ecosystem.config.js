module.exports = {
  "apps" : [{
    "name"      : "V2RAY SERVER",
    "script"    : "app.js",
  }],
  "deploy" : {
    "production" : {
      "user" : "paul",
      // Multi host is possible, just by passing IPs/hostname as an array
      "host" : ["139.180.136.130"],
      "ref"  : "origin/test",
      "repo" : "git@github.com:SwiftSSH/v2rayserver.git",
      "path" : "/home/paul/v2rayserver",
      "post-deploy" : "pip3 install -r requirements.txt && npm install && npm run pm2-restart",
      "env"  : {
        "NODE_ENV": "production"
      }
    }
  }
};

