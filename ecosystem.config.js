module.exports = {
  "apps" : [{
    "name"      : "V2RAY SERVER",
    "script"    : "app.js",
    "env_production" : {
      "NODE_ENV": "production"
    }
  }],
  "deploy" : {
    "production" : {
      "user" : "paul",
      // Multi host is possible, just by passing IPs/hostname as an array
      "host" : ["142.93.211.124"],
      "ref"  : "origin/main",
      "repo" : "git@github.com:SwiftSSH/v2rayserver.git",
      "path" : "/home/paul/v2rayserver",
      // "pre-setup" : "pip3 install -r requirements.txt",
      "post-deploy" : "pip3 install -r requirements.txt && npm install && npm run pm2-restart",
      "env"  : {
        "NODE_ENV": "production"
      }
    }
  }
};

//pm2 start pouchdb-server -- --port 5984 --host 0.0.0.0