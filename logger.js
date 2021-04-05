const chalk = require('chalk');

let LOG_TYPES = {
  NONE: 0,
  ERROR: 1,
  NORMAL: 2,
  DEBUG: 3
};

let logType = process.env.NODE_ENV === 'production' ? LOG_TYPES.NORMAL : LOG_TYPES.DEBUG;

const setLogType = (type) => {
  if (typeof type !== 'number') return;

  logType = type;
};

const logTime = () => {
  let nowDate = new Date();
  return nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString([], { hour12: false });
};

const log = (...args) => {
  if (logType < LOG_TYPES.NORMAL) return;

  console.log(logTime(), process.pid, chalk.bold.green('[INFO]'), ...args);
};

const error = (...args) => {
  if (logType < LOG_TYPES.ERROR) return;

  console.log(logTime(), process.pid, chalk.bold.red('[ERROR]'), ...args);
};

const debug = (...args) => {
  if (logType < LOG_TYPES.DEBUG) return;

  console.log(logTime(), process.pid, chalk.bold.blue('[DEBUG]'), ...args);
};

module.exports = {
  LOG_TYPES,
  setLogType,
  log, error, debug
};