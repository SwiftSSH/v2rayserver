const jwt = require("jsonwebtoken");
const url = require('url');
const context = require('../context');
const { SECRET_KEY } = require('../constants');
const packageJson = require('../package.json');

module.exports = function (req, res, next) {
  var path = url.parse(req.url).pathname;
  res.locals.requestPath = path;
  res.locals.v2rayVersion = context.data.get('v2rayVersion');
  res.locals.panelVersion = packageJson.version;
  const token = req.cookies["v2-access"];
  if(token) {
    return jwt.verify(token, SECRET_KEY, function(err, decoded) {
      if(decoded) {
        for (const key in decoded) {
          if (Object.hasOwnProperty.call(decoded, key)) {
            res.locals[key] = decoded[key];
          }
        }
        req.authenticated = true;
      }
      next();
    });
  } 
  next();
};
  