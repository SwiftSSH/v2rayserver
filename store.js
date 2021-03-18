const Configstore = require('configstore');
const uuid = require('uuid');
const utils = require("./utils");
const constants = require("./constants");
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
    setInterval(() => {
        this.removeExpiredAccounts();
        this.updateTraffic();
    }, (6 * 1000) * 10);
}

Store.prototype.updateTraffic = function () {
    console.log("updateTraffic");
    function getTraffic(type, tag) {
        const { instances } = require("./context");
        let service = instances.get('v2rayService');
        let traffic = service.getTraffic(type, tag);
        return traffic;
    }
    let users = this.getUsers();
    let inbounds = this.getInbounds();
    inbounds.forEach((inbound) => { 
        let traffic = getTraffic("inbound", inbound.tag);
        // console.log("inbound", traffic)
        if(traffic.up == 0)
            delete traffic.up;
        if(traffic.down == 0)
            delete traffic.down;
        this.updateInbound(inbound.id, traffic);
    });
    users.forEach((user) => {
        let traffic = getTraffic("user", user.email);
        // console.log("user", traffic)
        if(traffic.up == 0)
            delete traffic.up;
        if(traffic.down == 0)
            delete traffic.down;
        this.updateUser(user.id, traffic)
    });
};

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
    let userId = uuid.v4();
    user.id = userId;
    user.email = (user.email || userId).toString();
    user.level = 0;
    user.up = 0;
    user.down = 0;
    user.alterId = 64;
    user.enable = typeof user.enable == 'boolean' ? user.enable : true;
    if(!user.agent) {
        user.timestamp = utils.formatExpiryDate(user.expires);
    } else {
        user.password = await bcrypt.hash(user.password ? user.password.toString() : '12345', await bcrypt.genSalt(10))
    }
    if(this.isUserRegistered(user.email, user.id)) return false;
    config.set(`${this.usersPrefix}.${userId}`, user);
    if(!user.agent) {
        let inbound = this.getInbound(user.inboundId);
        if(inbound.protocol == constants.protocols.VMESS) { 
            let service = this.getService();
            service.AddUser(user.inboundId, user)
            .then(console.log)
            .catch((err) => {
                console.log(err.message)
                this.restart();
            });
        } else {
            this.restart();
        }
    }
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
        let inbound = this.getInbound(user.inboundId);
        if(!user.agent) {
            if(inbound.protocol == constants.protocols.VMESS) { 
                let service = this.getService();
                service.RemoveUser(user.inboundId, { email: user.email || user.id  })
                .then(console.log)
                .catch((err) => {
                    console.log(err.message);
                    this.restart();
                });
            } else {
                this.restart();
            }
        }
        return true;
    }
};

Store.prototype.proxyAddUser = function (user) {
    let service = this.getService();
    service.AddUser(user.inboundId, user)
    .then(console.log)
    .catch((err) => {
        console.log(err.message);
        this.restart();
    });
};

Store.prototype.proxyRemoveUser = function (inboundId, userId) {
    let service = this.getService();
    service.RemoveUser(inboundId, { email: userId  })
    .then(console.log)
    .catch((err) => {
        console.log(err.message)
        this.restart()
    });
};

Store.prototype.updateUser = async function(emailOrId, data={}, refresh=false) {
    let user = this.getUser(emailOrId);
    if(user) {
        if(!user.agent) {
            if(typeof data.enable === 'boolean') {
                if(data.enable && !user.enable) 
                    this.proxyAddUser(user); 
                if(!data.enable && user.enable) 
                    this.proxyRemoveUser(user.inboundId, user.email || user.id);
                    refresh = false;
            } 
            if(data.expires) 
                data.timestamp = utils.formatExpiryDate(data.expires);
        } else {
            if(data.password) 
                data.password = await bcrypt.hash(user.password.toString(), await bcrypt.genSalt(10))
        }
        config.set(`${this.usersPrefix}.${user.id}`, extend(user, data)); 
        if(refresh || data.id && (data.id !== user.id))
            this.restart();
        return true;
    } 
    return false;
};

Store.prototype.getUsers = function(onlyAgents = false, onlyProxed = true) {
    let users = this.getAll(this.usersPrefix);
    if(onlyProxed) 
        return users.filter((user) => !user.agent);
    else if(onlyAgents) 
        return users.filter((user) => user.agent);
    else 
        return users;
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
    return users.filter((user) => ((user.inboundId == inboundId) && !user.agent));
};

Store.prototype.getUsersByAgentId = function(agentId) {
    let users = this.getUsers();
    return users.filter((user) => (user.agentId == agentId && !user.agent));
};

Store.prototype.getInbound = function (option) {
    let inbounds = this.getInbounds();
    return inbounds.filter((inbound) => (inbound.id == option || inbound.port == option))[0];
};

Store.prototype.proxyRemoveInbound = function (inboundId) {
    let service = this.getService();
    service.RemoveInbound(inboundId)
    .then(console.log)
    .catch((err) => {
        console.log(err.message);
        this.restart();
    }); 
};

Store.prototype.removeInbound = function (id) {
    let inbound = this.getInbound(id);
    if(inbound) {
        let users = this.getUsersByInboundId(id);
        users.map((user) => this.removeUser(user.id));
        config.delete(`${this.inbounds}.${inbound.id}`);
        this.proxyRemoveInbound(inbound.id);
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

Store.prototype.getInbounds = function (onlyEnabled=false) {
    let inbounds = this.getAll(this.inbounds)
    return inbounds.map((inbound) => {
        let users = this.getUsersByInboundId(inbound.id);
        let field = this.getField(inbound.protocol);
        if(onlyEnabled) 
            users = users.filter((user) => user.enable);
        inbound.settings[field] = users;
        return inbound;
    });
};

Store.prototype.updateInbound = function(id, data={}, refresh=false) {
    let inbound = this.getInbound(id);
    if(inbound) {
        if(data.expires) 
            data.timestamp = utils.formatExpiryDate(data.expires);
        if(inbound.streamSettings.security == constants.security.TLS) {
            let tlsSettings = inbound.streamSettings.tlsSettings;
            inbound.streamSettings.tlsSettings = extend(
                tlsSettings, 
                this.tlsSettings(tlsSettings)
            )
        }
        config.set(`${this.inbounds}.${inbound.id}`, extend(inbound, data));

        if(typeof data.enable === 'boolean') {
            if(!data.enable && inbound.enable) {
                this.proxyRemoveInbound(inbound.id);
                return true;
            }
        } 

        if((data.port && data.port !== inbound.port) || 
            (data.protocol && data.protocol !== inbound.protocol)||
            (data.listen && data.listen !== inbound.listen) || refresh
        ) {
            this.restart();   
        }
        return true;
    } 
};

Store.prototype.updateAllInbounds = function(data = {}, refresh=false) {
    let inbounds = this.getInbounds();
    inbounds.forEach((inbound) => {
        this.updateInbound(inbound.id, data);
    });
    if(refresh) {
        this.restart();
    }
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

    if(inbound.protocol == constants.protocols.VMESS) 
        inbound.detour = { to : "dynamicPort" };
    if(inbound.expires) 
        inbound.timestamp = utils.formatExpiryDate(inbound.expires);
    if(typeof inbound.maximum_users !== 'number')
        inbound.maximum_users = 5;

    inbound.enable = typeof inbound.enable == 'boolean' ? inbound.enable : true;
    inbound.up = 0;
    inbound.down = 0;
    inbound.id = uuid.v4();
    inbound.tag = inbound.id;
    inbound.port = parseInt(inbound.port);

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