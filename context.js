let Store = require('./store');
let { EventEmitter } = require('events');

module.exports = {
    instances: new Map(),
    store: new Store(),
    data: new Map(),
    nodeEvent: new EventEmitter()
}