let Store = require('./store');
let { EventEmitter } = require('events');

module.exports = {
    instances: new Map(),
    store: new Store(),
    data: new Map(),
    pendingUsers: new Array(),
    nodeEvent: new EventEmitter()
}