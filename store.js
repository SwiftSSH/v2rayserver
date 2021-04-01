const Configstore = require('configstore');
const uuid = require('uuid');
const utils = require("./utils");
const constants = require("./constants");
const moment = require('moment');
const extend = require("xtend");
const bcrypt = require("bcryptjs");
const xtend = require('xtend');
const config = new Configstore("v2rayStore");

function Store() {
    this.usersPrefix = 'users';
    this.inbounds = "inbounds";
    this.admin = "admin";
    this.v2rayConfig = "v2rayConfig";
    this.nginxConfig = "nginxConfig";
    this.settings = "settings";
    this.serverDetails = "details";
    this.requestsInfo = "requests_info";
    this.routingRules = "routing_rules";
    this.jobInterval = setInterval(() => {
        this.handleExpiredAccounts();
        this.updateTraffic();
    }, 5000);
}

Store.prototype.updateRequestsCount = function(key, value=1) {
    let scheme = [
        constants.REQUESTS_STATUS.ACCEPTED,
        constants.REQUESTS_STATUS.REJECTED,
        constants.REQUESTS_STATUS.BLOCKED
    ];
    if(scheme.indexOf(key) >=0) {
        let info = this.getRequestsInfo();
        info.requestsCount[key] += value;
        info.requestsCount.total = scheme.map((_key) => info.requestsCount[_key])
        .reduce((a, b) => a + b, 0);
        config.set(`${this.requestsInfo}`, info);
    }
};

Store.prototype.resetRequestsInfo = function() {
    let info = this.getRequestsInfo();
    info.requestsCount = {
        rejected: 0, 
        blocked: 0,
        accepted: 0,
        total: 0
    };
    config.set(`${this.requestsInfo}`, info);
};

Store.prototype.getRequestsInfo = function() {
    return config.get(`${this.requestsInfo}`) || {
        requestsCount: {
            rejected: 0, 
            blocked: 0,
            accepted: 0,
            total: 0
        }
    };
};

Store.prototype.getRoutingRules = function (onlyEnabled) {
    let rules = config.get(this.routingRules) || [];
    if(rules.length === 0) {
        let defaultRules = require('./route_rules')
        .map((rule) => {
            rule.default = true;
            return rule;
        });
        config.set(this.routingRules, defaultRules);
        rules = config.get(this.routingRules);
    }
    if(onlyEnabled)
        return rules.filter((r) => r.enable);
    return rules;
};

Store.prototype.getRoutingRulesFormated = function(onlyEnabled=false) {
    let raw = this.getRoutingRules(onlyEnabled);
    let rules = [];
    raw.forEach((rule) => {
        let obj = {};
        rule.fields.forEach((field) => {
            obj[field.key] = field.value;
        });
        rules.push(obj);
    });
    return rules;
};

Store.prototype.removeRoutingRule = function (position, refresh=false) {
    let rules = this.getRoutingRules();
    let rule = rules[position];
    if(rule && rule.default) return;
    rules.splice(position, 1);
    config.set(this.routingRules, rules);
    this.restart();
};

Store.prototype.updateRoutingRule = function (position, data) {
    let rules = this.getRoutingRules();
    rules[position] = extend(rules[position], data);
    config.set(this.routingRules, rules);
    this.restart();
};

Store.prototype.addRoutingRule = function (data) {
    let rules = this.getRoutingRules();
    rules.push(data);
    config.set(this.routingRules, rules);
    this.restart();
};

Store.prototype.updateTraffic = function () {
    function getTraffic(type, tag) {
        const { instances } = require("./context");
        let service = instances.get('v2rayService');
        let traffic = service.getTraffic(type, tag);
        return traffic;
    }

    let processTraffic = function(data, traffic) {
        let today = moment().format('YYYY-MM-DD');
        data.traffic = data.traffic || {};
        let trafficToday = data.traffic[today] || { up: 0, down: 0 };;
        data.traffic[today] = {
            up: trafficToday.up + traffic.up,
            down: trafficToday.down + traffic.down,
        };
        return {
            traffic: data.traffic,
            up: data.up + traffic.up,
            down: data.down + traffic.down
        };
    };

    let users = this.getEnabledUsers();
    let inbounds = this.getInbounds(true);

    inbounds.forEach((inbound) => { 
        let traffic = getTraffic("inbound", inbound.tag);
        this.updateInbound(inbound.id, processTraffic(inbound, traffic));
    });

    users.forEach((user) => {
        let traffic = getTraffic("user", user.email);
        this.updateUser(user.id, processTraffic(user, traffic));
    });
};

Store.prototype.handleExpiredAccounts = function () {
    let xUsers = this.getUsers(false, false)
    .filter((user) => user.timestamp && this.isExpired(user.timestamp));
    xUsers.forEach((xuser) => {
        if(xuser.onDeleteTimestamp) {
            if(this.isExpired(xuser.onDeleteTimestamp)) {
                if(xuser.agent) {
                    let agentUsers = this.getUsersByAgentId(xuser.id);
                    agentUsers.forEach((auser) => { 
                        config.delete(`${this.usersPrefix}.${auser.id}`);
                    });
                } else {
                    config.delete(`${this.usersPrefix}.${xuser.id}`);
                }
            }
        } else {
            if(xuser.agent) {
                let agentUsers = this.getUsersByAgentId(xuser.id);
                this.updateUser(xuser.id, { 
                    status: constants.status.TIMEOUT,
                    onDeleteTimestamp: utils.formatExpiryDate(5)
                });
                /** the most efficient way is removing the whole inbound but
                * it calls for reload which is not cool for the system.
                * so we can iterate each user
                */
                agentUsers.forEach((auser) => { 
                    this.updateUser(auser.id, { 
                        enable: false, 
                        status: constants.status.AGENT_TIMEOUT
                    });
                });
            } else {
                this.updateUser(xuser.id, { 
                    enable: false, 
                    status: constants.status.TIMEOUT,
                    onDeleteTimestamp: utils.formatExpiryDate(5)
                });
            }
        }
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
    user.timestamp = utils.formatExpiryDate(user.expires);
    
    if(!user.agent) {
        if(this.isUserRegistered(user.email, user.id)) return false;
        user.email = userId;
    } else {
        let agents = this.getAgents();
        let index = agents.findIndex((agent) => agent.username == user.username);
        if(index >= 0) return false;
        user.password = await bcrypt.hash(user.password ? user.password.toString() : '12345', await bcrypt.genSalt(10))
    }
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

Store.prototype.getUser = function(option, onlyAgents=false) {
    let users = this.getUsers(onlyAgents, false);
    return users.filter((user) => user.email == option || user.id == option || user.username == option)[0];
};

Store.prototype.removeUser = function(emailOrId, refresh=true, serviceRemove=true) {
    let user = this.getUser(emailOrId);
    if(user) {
        config.delete(`${this.usersPrefix}.${user.id}`);
        let inbound = this.getInbound(user.inboundId);
        if(user.agent) {
            this.removeInbound(user.inboundId);
        } else {
            if(serviceRemove && inbound.protocol == constants.protocols.VMESS) { 
                let service = this.getService();
                service.RemoveUser(user.inboundId, { email: user.email || user.id  })
                .then(console.log)
                .catch((err) => {
                    console.log(err.message);
                    this.restart();
                });
            } else {
                if(refresh) this.restart();
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

Store.prototype.renewSub = async function(userId, data={}) {
    let agent = this.getUser(userId, true);
    let expires = data.expires || agent.expires;
    let agentUsers = this.getUsersByAgentId(userId);
    let success = await this.updateUser(userId, { 
        status: null,
        onDeleteTimestamp: null,
        expires,
        timestamp: utils.formatExpiryDate(expires)
    });
    if(success) {
        agentUsers.forEach((auser) => { 
            this.updateUser(auser.id, { 
                enable: true, 
                status: null
            });
        });
    }
    return true;
};

Store.prototype.unBarnUser = async function(emailOrId) {
    return await this.updateUser(emailOrId, {
        enable: true,
        barned: false,
        status: null,
        mult_conn_attempts: 0
    }, false, true);
};

Store.prototype.updateUser = async function(emailOrId, data={}, refresh=false, byForce=false) {
    let user = this.getUser(emailOrId);
    // prevent agent to user switch
    delete data.agent;
    let proxyUserAdded = false;
    if(user) {
        if(user.barned && !byForce) {
            // only admin will unbarn
            return false;
        }
        function resetTimeout(timeout) {
            delete user.status;
            delete user.onDeleteTimestamp;
            data.timestamp = utils.formatExpiryDate(timeout);
        }
        
        if(!user.agent) {
            if(typeof data.enable === 'boolean') {
                if(data.enable && !user.enable) {
                    if(user.status == constants.status.TIMEOUT) {
                        resetTimeout(data.expires && data.expires !== user.expires ? data.expires : user.expires);
                        data.enable = true;
                    } else if(user.status == constants.status.BARNED) {
                        delete user.status;
                    }
                    this.proxyAddUser(user); 
                    proxyUserAdded = true;
                } else if(!data.enable && user.enable) {
                    this.proxyRemoveUser(user.inboundId, user.id);
                    refresh = false;
                }
            } 
            if(data.inboundId && data.inboundId !== user.inboundId) {
                if(user.enable) {
                    this.proxyRemoveUser(user.inboundId, user.id);
                    user.inboundId = data.inboundId;
                    if(!proxyUserAdded) {
                        proxyUserAdded = true
                        this.proxyAddUser(user); 
                    } 
                }
            }
            if(data.expires && data.expires !== user.expires) {
                if(user.status == constants.status.TIMEOUT) {
                    data.enable = true;
                    if(!proxyUserAdded) {
                        proxyUserAdded = true
                        this.proxyAddUser(user); 
                    } 
                }
                resetTimeout(data.expires);
            }
        } else {
            if(data.maximum_users)
                this.updateInbound(user.inboundId, { maximum_users: data.maximum_users });
            if(data.password)
                data.password = await bcrypt.hash(data.password.toString(), await bcrypt.genSalt(10));
            if(data.expires && data.expires !== user.expires)
                data.timestamp = utils.formatExpiryDate(data.expires);
        }
        config.set(`${this.usersPrefix}.${user.id}`, extend(user, data)); 
        if(refresh || data.id && (data.id !== user.id))
            this.restart();
        return true;
    } 
    return false;
};

Store.prototype.getUsers = function(onlyAgents=false, onlyProxed=true) {
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
    return agents.map((agent) => {
        let users = this.getUsersByAgentId(agent.id);
        let inbound = this.getInbound(agent.inboundId);
        agent.maximum_users = 0;
        if(inbound) {
            agent.up = inbound.up;
            agent.down = inbound.down;
            agent.maximum_users = inbound.maximum_users;
        }
        agent.total_users_added = users.length;
        return agent;
    });
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

Store.prototype.removeInbound = function (id, refresh=true) {
    let inbound = this.getInbound(id);
    if(inbound) {
        let users = this.getUsersByInboundId(id);
        users.map((user) => this.removeUser(user.id, false, false));
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

Store.prototype.getEnabledUsers = function(onlyAgents=false, onlyProxed=true) {
    let users = this.getUsers(onlyAgents, onlyProxed);
    return users.filter((user) => user.enable && !user.barned);
};

Store.prototype.getInbounds = function (onlyEnabled=false) {
    let inbounds = this.getAll(this.inbounds)
    if(onlyEnabled) 
        inbounds = inbounds.filter((inbound) => inbound.enable);
    return inbounds.map((inbound) => {
        let users = this.getUsersByInboundId(inbound.id);
        let field = this.getField(inbound.protocol);
        if(onlyEnabled) 
            users = users.filter((user) => user.enable && !user.barned);
        inbound.settings[field] = users;
        return inbound;
    });
};

Store.prototype.updateInbound = function(id, data={}, refresh=false) {
    let inbound = this.getInbound(id);
    if(inbound) {
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
            (data.protocol && data.protocol !== inbound.protocol) ||
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

Store.prototype.isExpired = function(timestamp) {
    var now = moment().utc();
    return now.isAfter(timestamp);
};

module.exports = Store;