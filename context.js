let { EventEmitter } = require('events');
let Store = require('./store');
let store = new Store();
let data = new Map();
let nodeEvent = new EventEmitter();
let pendingUsers = new Array();

module.exports = {
    store, data, nodeEvent, pendingUsers
};