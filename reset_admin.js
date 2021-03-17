const { store } = require('./context');
store.resetAdmin("admin");
process.kill(0);