module.exports = {
  "apps" : [{
    "name"      : "V2RAY SERVER",
    "script"    : "app.js",
    "env_development": {
      "PORT": 5000,
      "NODE_ENV": "development",
      "DOMAIN": "koodeyo.com",
    },
    "env_production" : {
      "PORT": 65433,
      "NODE_ENV": "production",
      "DOMAIN": "ind.koodeyo.com",
      "SSL_CERT": "/etc/letsencrypt/live/ind.koodeyo.com/fullchain.pem",
      "SSL_KEY": "/etc/letsencrypt/live/ind.koodeyo.com/privkey.pem"
    }
  }],
  "deploy" : {
    "production" : {
      "user" : "paul",
      // Multi host is possible, just by passing IPs/hostname as an array
      "host" : ["142.93.211.124"],
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

//pm2 start pouchdb-server -- --port 5984 --host 0.0.0.0