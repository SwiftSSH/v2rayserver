const Configstore = require('configstore');
const uuid = require('uuid');
const utils = require("./utils");
const constants = require("./constants");
const cron = require('node-cron');
const moment = require('moment');
const extend = require("xtend");

function Store() {
    this.config = new Configstore("v2rayStore");
    this.usersPrefix = 'users';
    this.inbounds = "inbounds";
    this.admin = "admin";
    this.v2rayConfig = "v2rayConfig";
    this.nginxConfig = "nginxConfig";
    this.settings = "settings";
    this.serverDetails = "details";
    cron.schedule('* * * * *', () => {
        //'running a task every minute'
        this.removeExpiredAccounts();
    });
}

function getTraffic(type, tag) {
    const { instances } = require("./context");
    let service = instances.get('v2rayService');
    let traffic = {};
    if(service) {
        traffic = service.getTraffic(type, tag);
    }
    return traffic;
}

Store.prototype.updateAdmin = function(username, data = {}) {
    let admin = this.getAdmin(username);
    this.config.delete(`${this.admin}.${username}`);
    this.config.set(`${this.admin}.${data.username}`, extend(admin, data));
};

Store.prototype.getAdmin = function(username) {
    return this.config.get(`${this.admin}.${username}`);
};

Store.prototype.getSettings = function(key) {
    return this.config.get(`${this.settings}.${key}`);
};

Store.prototype.resetSettings = function() {
    this.config.delete(this.settings);
};

Store.prototype.updateSettings = function(key, value) {
    this.config.set(`${this.settings}.${key}`, value);
};

Store.prototype.removeExpiredAccounts = function () {
    let users = this.getUsers();
    let inbounds = this.getInbounds();
    var now = moment().utc();
    let xUsers = users.filter((user) => user.timestamp && now.isAfter(user.timestamp));
    let xInbounds = inbounds.filter((inbound) => inbound.timestamp && now.isAfter(inbound.timestamp));
    xUsers.forEach((xuser) => {
        this.removeUser(xuser.id);
    });
    xInbounds.forEach((xinbound) => {
        this.removeInbound(xinbound.id);
    });
};

Store.prototype.getService = function () {
    const { instances } = require("./context");
    return instances.get('v2rayApi');
};

Store.prototype.restart = function () {
    const { instances } = require("./context");
    let v2ray = instances.get('v2rayService');
    v2ray.restart();
};

Store.prototype.addUser = function (user) {
    let userId = user.id || uuid.v4();
    user.id = userId;
    user.email = user.email || userId;
    user.level = 0;
    user.up = 0;
    user.down = 0;
    user.timestamp = utils.formatExpiryDate(user.expires);
    if(this.isUserRegistered(user.email, user.id)) return false;
    this.config.set(`${this.usersPrefix}.${userId}`, user);
    // let service = this.getService();
    // service.AddUser(user.inboundId, user)
    // .then(console.log)
    // .catch((err) => console.log(err.message));
    this.restart();
    return user.id;
};

Store.prototype.isUserRegistered = function (email, Id) {
    let users = this.getUsers();
    return users.filter((u) => u.email === email || u.id === Id)[0];
};

Store.prototype.getUser = function(option) {
    let users = this.getUsers();
    return users.filter((user) => user.email === option || user.id === option)[0];
};

Store.prototype.removeUser = function(emailOrId) {
    let user = this.getUser(emailOrId);
    if(user) {
        this.config.delete(`${this.usersPrefix}.${user.id}`);
        // let service = this.getService();
        // service.RemoveUser(user.inboundId, { email: user.email || user.id  })
        // .then(console.log)
        // .catch((err) => console.log(err.message));
        this.restart();
        return true;
    }
    return false;
};

Store.prototype.updateUser = function(emailOrId, data = {}) {
    let user = this.getUser(emailOrId);
    if(data.expires) {
        data.timestamp = utils.formatExpiryDate(data.expires);
    }
    if(user) {
        this.config.set(`${this.usersPrefix}.${user.id}`, extend(user, data));
        this.restart();
        return true;
    } 
    return false;
};

Store.prototype.getUsers = function() {
    let users = this.getAll(this.usersPrefix);
    return users.map((user) => {
        return extend(user, getTraffic("user", user.email));
    });
};

Store.prototype.getAll = function(prefix) {
    let values = this.config.get(prefix);
    let output = [];
    if(values) {
        Object.keys(values).forEach((key) => {
            output.push(values[key]);
        });
    }
    return output;
};

Store.prototype.getUsersByInboundId = function(inboundId) {
    let users = this.getUsers();
    return users.filter((user) => user.inboundId === inboundId);
};

Store.prototype.getInbound = function (option) {
    let inbounds = this.getInbounds();
    return inbounds.filter((inbound) => (inbound.id === option || inbound.port === option))[0];
};

Store.prototype.removeInbound = function (id) {
    let inbound = this.getInbound(id);
    if(inbound) {
        this.config.delete(`${this.inbounds}.${inbound.id}`);
        let users = this.getUsersByInboundId(id);
        users.map((user) => this.removeUser(user.id));
        // if(constants.protocols.VMESS === inbound.protocol) {  
        //     let service = this.getService();
        //     service.RemoveInbound(inbound.id)
        //     .then(console.log)
        //     .catch((err) => console.log(err.message));
        // }
        this.restart();
        return true;
    } 
    return false;
};

Store.prototype.getField = function (protocol) {
    if(constants.protocols.HTTP === protocol || constants.protocols.SOCKS === protocol) 
        return 'accounts';
    if(constants.protocols.VMESS === protocol || constants.protocols.VLESS === protocol 
        || constants.protocols.TROJAN === protocol) 
        return 'clients';
};

Store.prototype.getInbounds = function () {
    let inbounds = this.getAll(this.inbounds);
    return inbounds.map((inbound) => {
        let users = this.getUsersByInboundId(inbound.id);
        let field = this.getField(inbound.protocol);
        if(field) {
            inbound.settings[field] = users.concat(inbound.settings[field]);
        }
        return extend(inbound, getTraffic("inbound", inbound.tag));
    });
};

Store.prototype.updateInbound = function(id, data = {}, noRefresh) {
    let inbound = this.getInbound(id);
    if(data.expires) {
        data.timestamp = utils.formatExpiryDate(data.expires);
    }
    if(inbound) {
        if(inbound.streamSettings.security === constants.security.TLS) {
            let tlsSettings = inbound.streamSettings.tlsSettings;
            inbound.streamSettings.tlsSettings = extend(
                tlsSettings, 
                this.tlsSettings(tlsSettings)
            )
        }
        this.config.set(`${this.inbounds}.${inbound.id}`, extend(inbound, data));
        if(!noRefresh) {
            this.restart();   
        }
        return true;
    } 
};

Store.prototype.updateAllInbounds = function(data = {}) {
    let inbounds = this.getInbounds();
    inbounds.forEach((inbound) => {
        this.updateInbound(inbound.id, data, true);
    });
    this.restart();
};

Store.prototype.tlsSettings = function(tlsSettings) {
    let cert = this.getSettings("cert_file");
    let certkey = this.getSettings("key_file");
    let domain = this.getSettings("domain");
    let certs = tlsSettings.certificates[0];
    return {
        serverName: tlsSettings.serverName || domain,
        certificates:[
            {
                certificateFile: certs.certificateFile ? certs.certificateFile : cert,
                keyFile: certs.keyFile ? certs.keyFile : certkey
            }
        ]
    };
};

Store.prototype.addInbound = function(inbound) {
    // return console.log(JSON.stringify(inbound))
    let isPresent = this.getInbound(inbound.port);
    if(isPresent) return false;

    if(inbound.protocol === constants.protocols.VMESS) {
        inbound.detour = { 
            to: "dynamicPort",
        };
    }

    inbound.up = 0;
    inbound.down = 0;
    inbound.timestamp = utils.formatExpiryDate(inbound.expires);
    inbound.id = uuid.v4();
    inbound.tag = inbound.id;
    inbound.port = parseInt(inbound.port);

    if(typeof inbound.maximum_users !== 'number') {
        inbound.maximum_users = 5;
    }

    if(inbound.streamSettings.security === constants.security.TLS) {
        let tlsSettings = inbound.streamSettings.tlsSettings;
        inbound.streamSettings.tlsSettings = extend(
            tlsSettings, 
            this.tlsSettings(tlsSettings)
        )
    }

    this.config.set(`${this.inbounds}.${inbound.id}`, inbound);

    // if(inbound.protocol === constants.protocols.VMESS) {
    //     let service = this.getService();
    //     service.AddInbound(inbound.id, inbound.port)
    //     .then(console.log)
    //     .catch((err) => console.log(err.message));
    // }
    
    this.restart();
    return true;
};

module.exports = Store;