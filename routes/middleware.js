const jwt = require("jsonwebtoken");
const url = require('url');
const context = require('../context');
const { SECRET_KEY } = require('../constants');
const packageJson = require('../package.json');

module.exports = function (req, res, next) {
  var path = url.parse(req.url).pathname;
  res.locals.requestPath = path;
  res.locals.v2rayVersion = context.data.get('v2rayVersion');
  const token = req.cookies["v2-access"];
  if(token) {
    return jwt.verify(token, SECRET_KEY, function(err, decoded) {
      if(decoded) {
        res.locals.username = decoded.username;
        res.locals.isDefaultUser = decoded.isDefaultUser;
        res.locals.panelVersion = packageJson.version;
        req.authenticated = true;
      }
      next();
    });
  } 
  next();
};
  