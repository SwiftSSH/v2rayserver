global.delay = ms => new Promise(res => setTimeout(res, ms));
const Express = require('express');
const V2RAY = require('./v2ray');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const authMiddleWare = require("./routes/middleware");
const Logger = require('./logger');
const context = require('./context');
let app = Express();
let PORT = process.env.PORT || 5000;

let v2rayService = new V2RAY({
  v2rayPath: path.join(__dirname, "bin"),
  configPath: path.join(__dirname, "v2ray_config.js"),
  APIAddr: '127.0.0.1',
  APIPort: 10085,
  ProxyFlag: 'api'
});

app.use(cookieParser());
app.use(authMiddleWare);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static(path.join(__dirname, 'static')));
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
app.use('/server', require('./routes/server'));
app.use('/v2ray', require('./routes/v2ray'));

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.render('error');
});

app.listen(PORT, function () {
  Logger.log(`Panel is listening on port ${PORT}`);
  v2rayService.start(true).then(() => {
    Logger.log("v2ray core fully started")
    require("./server_info");
    cron.schedule('* * * * * *', () => {
      context.store.callJobs();
    });
  });
});

process.on('uncaughtException', function (err) {
  Logger.error(err);
});