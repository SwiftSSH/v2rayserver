const Configstore = require('configstore');
const uuid = require('uuid');
const utils = require("./utils");
const constants = require("./constants");
const cron = require('node-cron');
const moment = require('moment');
const extend = require("xtend");
const bcrypt = require("bcryptjs");
const config = new Configstore("v2rayStore");

function Store() {
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
    config.delete(`${this.admin}.${username}`);
    config.set(`${this.admin}.${data.username}`, extend(admin, data));
};

Store.prototype.resetAdmin = function(username) {
    config.delete(`${this.admin}.${username}`);  
};

Store.prototype.getAdmin = function(username) {
    return config.get(`${this.admin}.${username}`);
};

Store.prototype.getSettings = function(key) {
    return config.get(`${this.settings}.${key}`);
};

Store.prototype.resetSettings = function() {
    config.delete(this.settings);
};

Store.prototype.updateSettings = function(key, value) {
    config.set(`${this.settings}.${key}`, value);
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

Store.prototype.addUser = async function (user) {
    let userId = user.id || uuid.v4();
    user.id = userId;
    user.email = (user.email || userId).toString();
    user.level = 0;
    user.up = 0;
    user.down = 0;
    user.alterId = 64;

    if(!user.agent) {
        user.timestamp = utils.formatExpiryDate(user.expires);
    } else {
        user.password = await bcrypt.hash(user.password ? user.password.toString() : '12345', await bcrypt.genSalt(10))
    }
    if(this.isUserRegistered(user.email, user.id)) return false;
    config.set(`${this.usersPrefix}.${userId}`, user);
    // let service = this.getService();
    // service.AddUser(user.inboundId, user)
    // .then(console.log)
    // .catch((err) => console.log(err.message));
    if(!user.agent) this.restart();
    return user.id;
};

Store.prototype.isUserRegistered = function (email, Id) {
    let users = this.getUsers();
    return users.filter((u) => u.email == email || u.id == Id)[0];
};

Store.prototype.getUser = function(option) {
    let users = this.getUsers(false, false);
    return users.filter((user) => user.email == option || user.id == option || user.username == option)[0];
};

Store.prototype.removeUser = function(emailOrId) {
    let user = this.getUser(emailOrId);
    if(user) {
        config.delete(`${this.usersPrefix}.${user.id}`);
        // let service = this.getService();
        // service.RemoveUser(user.inboundId, { email: user.email || user.id  })
        // .then(console.log)
        // .catch((err) => console.log(err.message));
        if(!user.agent) this.restart();
        return true;
    }
    return false;
};

Store.prototype.updateUser = async function(emailOrId, data = {}) {
    let user = this.getUser(emailOrId);
    if(user) {
        if(data.expires && !user.agent) {
            data.timestamp = utils.formatExpiryDate(data.expires);
        }
        if(user.agent && data.password) {
            data.password = await bcrypt.hash(user.password.toString(), await bcrypt.genSalt(10))
        }
        config.set(`${this.usersPrefix}.${user.id}`, extend(user, data));
        if(!user.agent) this.restart();
        return true;
    } 
    return false;
};

Store.prototype.getUsers = function(onlyAgents = false, onlyProxed = true) {
    let users = this.getAll(this.usersPrefix);
    if(onlyProxed) {
        let all = users.filter((user) => !user.agent);
        return all.map((user) => {
            //return extend(user, getTraffic("user", user.email));
            return user;
        });
    } else if(onlyAgents) {
        return users.filter((user) => user.agent);
    } else {
        return users;
    }
};

Store.prototype.getAgents = function() {
    let agents = this.getUsers(true, false);
    return agents;
};

Store.prototype.getAll = function(prefix) {
    let values = config.get(prefix);
    let output = [];
    if(values) {
        Object.keys(values).forEach((key) => {
            output.push(values[key]);
        })
    }
    return output;
};

Store.prototype.getUsersByInboundId = function(inboundId) {
    let users = this.getUsers();
    return users.filter((user) => (user.inboundId == inboundId && !user.agent));
};

Store.prototype.getUsersByAgentId = function(agentId) {
    let users = this.getUsers();
    return users.filter((user) => (user.agentId == agentId && !user.agent));
};

Store.prototype.getInbound = function (option) {
    let inbounds = this.getInbounds();
    return inbounds.filter((inbound) => (inbound.id == option || inbound.port == option))[0];
};

Store.prototype.removeInbound = function (id) {
    let inbound = this.getInbound(id);
    if(inbound) {
        config.delete(`${this.inbounds}.${inbound.id}`);
        let users = this.getUsersByInboundId(id);
        users.map((user) => this.removeUser(user.id));
        // if(constants.protocols.VMESS == inbound.protocol) {  
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
    if(constants.protocols.HTTP == protocol || constants.protocols.SOCKS == protocol) 
        return 'accounts';
    if(constants.protocols.VMESS == protocol || constants.protocols.VLESS == protocol 
        || constants.protocols.TROJAN == protocol) 
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
        return inbound;
        // return extend(inbound, getTraffic("inbound", inbound.tag));
    });
};

Store.prototype.updateInbound = function(id, data = {}, noRefresh) {
    let inbound = this.getInbound(id);
    if(data.expires) {
        data.timestamp = utils.formatExpiryDate(data.expires);
    }
    if(inbound) {
        if(inbound.streamSettings.security == constants.security.TLS) {
            let tlsSettings = inbound.streamSettings.tlsSettings;
            inbound.streamSettings.tlsSettings = extend(
                tlsSettings, 
                this.tlsSettings(tlsSettings)
            )
        }
        config.set(`${this.inbounds}.${inbound.id}`, extend(inbound, data));
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
    let isPresent = this.getInbound(inbound.port);
    if(isPresent) return false;

    if(inbound.protocol == constants.protocols.VMESS) {
        inbound.detour = { to : "dynamicPort" };
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

    if(inbound.streamSettings.security == constants.security.TLS) {
        let tlsSettings = inbound.streamSettings.tlsSettings;
        inbound.streamSettings.tlsSettings = extend(
            tlsSettings, 
            this.tlsSettings(tlsSettings)
        )
    }

    config.set(`${this.inbounds}.${inbound.id}`, inbound);

    // if(inbound.protocol == constants.protocols.VMESS) {
    //     let service = this.getService();
    //     service.AddInbound(inbound.id, inbound.port)
    //     .then(console.log)
    //     .catch((err) => console.log(err.message));
    // }
    
    this.restart();
    return true;
};

module.exports = Store;