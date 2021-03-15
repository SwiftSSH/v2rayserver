const ejs = require('ejs');
const utils = require("./utils");
const { execSync } = require('child_process');
const fs = require("fs");

function NGINX() {}

NGINX.prototype.restart = function() {
  this.reconfig().then(() => {
    if(fs.existsSync('/etc/nginx/sites-enabled/default')) {
      fs.rmSync('/etc/nginx/sites-enabled/default');
    }
    execSync('/etc/init.d/nginx restart');
  });
};

NGINX.prototype.reconfig = async function() {
  let nginx_config = utils.getNginxConfig();
  let template = ejs.compile(nginx_config);
  let config_str = template(this.getData());
  return fs.writeFileSync(`/etc/nginx/sites-enabled/${nginx_config.server_name[0]}`, config_str);
};

NGINX.prototype.getData = function () {
  return { 
    server_name: ["koodeyo.com"],
    ssl_certificate: "/etc/letsencrypt/live/ind.koodeyo.com/fullchain.pem",
    ssl_certificate_key: "/etc/letsencrypt/live/ind.koodeyo.com/privkey.pem",
    panelPort: 5000
  };
};

module.exports = NGINX;

let nginx = new NGINX();

