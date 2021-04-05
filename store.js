const Configstore = require('configstore');
const uuid = require('uuid');
const utils = require("./utils");
const constants = require("./constants");
const moment = require('moment');
const extend = require("xtend");
const bcrypt = require("bcryptjs");
const config = new Configstore("v2rayStore");
const Logger = require('./logger');
const instances = require("./instances");
const defaultRules = require('./route_rules');

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
}

Store.prototype.callJobs = function () {
    this.updateTraffic().then(() => {
        this.handleAccountStats()
        .then(this.handleTrafficStats.bind(this));
    });
};

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
        let _rules = defaultRules.map((rule) => {
            rule.default = true;
            return rule;
        });
        config.set(this.routingRules, _rules);
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

Store.prototype.removeRoutingRule = function (position) {
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

Store.prototype.updateTraffic = async function () {
    /**
     * update traffic by users and Inbounds
     */
    let processTraffic = function(data, traffic) {
        let today = moment().format('YYYY-MM-DD');
        data.traffic = data.traffic || {};
        let trafficToday = data.traffic[today] || { up: 0, down: 0 };
        data.traffic[today] = {
            up: trafficToday.up + traffic.up,
            down: trafficToday.down + traffic.down,
        };
        return {
            traffic: data.traffic
        };
    };

    let service = instances.get('v2rayService');
    let users = this.getEnabledUsers();
    let inbounds = this.getInbounds(true);

    inbounds.forEach((inbound) => { 
        let traffic = service.getTraffic("inbound", inbound.tag);
        // Logger.debug(`inbound ${inbound.id} traffic`, traffic)
        this.updateInbound(inbound.id, processTraffic(inbound, traffic));
    });

    users.forEach((user) => {
        let traffic = service.getTraffic("user", user.email);
        // Logger.debug(`user ${user.id} traffic`, traffic)
        this.updateUser(user.id, processTraffic(user, traffic));
    });
};

Store.prototype.handleTrafficStats = function () {
    /**
     * calculate traffic, disable/enable users and inbounds
     *  that exceed max traffic per day
     */
    let today = moment();
    let users = this.getUsers(false, true);
    let inbounds = this.getInbounds();

    let hasMaxTraffic = function (data) {
        let trafficToday = data.traffic[today.format('YYYY-MM-DD')] || { up: 0, down: 0 };
        let maxDailyTraffic = utils.formatTrafficToBytes(data.maximum_daily_traffic || constants.MAX_DAIRY_TRAFFIC);
        let totalTraffic = (trafficToday.up + trafficToday.down);
        return totalTraffic >= maxDailyTraffic;
    };

    let enableOnNewDate = function (data) {
        if(data.status === constants.status.MAX_TRAFFIC && data.maximumTrafficDate) {
            return today.isAfter(moment(data.maximumTrafficDate));
        }
    }

     inbounds.forEach((inbound) => { 
        if(inbound.traffic) {
            if(hasMaxTraffic(inbound) && inbound.enable) {
                return this.updateInbound(inbound.id, { 
                    enable: false, 
                    maximumTrafficDate: today,
                    status: constants.status.MAX_TRAFFIC
                });
            }

            if(enableOnNewDate(inbound) && !inbound.enable) {
                this.updateInbound(inbound.id, { 
                    enable: true, 
                    maximumTrafficDate: null,
                    status: null
                });
            }
        }
    });

    users.forEach((user) => {
        if(user.traffic) {
            if(hasMaxTraffic(user)) {
                return this.updateUser(user.id, { 
                    enable: false, 
                    maximumTrafficDate: today,
                    status: constants.status.MAX_TRAFFIC
                });
            }
    
            if(enableOnNewDate(user) && !user.enable) {
                this.updateUser(user.id, { 
                    enable: true, 
                    maximumTrafficDate: null,
                    status: null
                });
            }
        }
    });
};

Store.prototype.handleAccountStats = async function () {
    /***
     * enable/disable expired accounts 
     * delete all that exceed on-delete timestamp
     */
    let expiredAccounts = this.getUsers(false, false)
    .filter((user) => user.timestamp && this.isExpired(user.timestamp));
    expiredAccounts.forEach((xuser) => {
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
                /** the most efficient way is removing the whole agent inbound but
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
    return instances.get('v2rayApi');
};

Store.prototype.restart = function () {
    let v2ray = instances.get('v2rayService');
    v2ray.restart();
};

Store.prototype.addUser = async function (user={}) {
    user.id = uuid.v4();
    user.email = (user.email || user.id).toString();
    user.enable = typeof user.enable == 'boolean' ? user.enable : true;
    user.timestamp = utils.formatExpiryDate(user.expires);
    
    if(!user.agent) {
        user.level = 0;
        user.alterId = 64;
        user.email = user.id;
    } else {
        if(this.isUserRegistered(user.email)) return false;
        if(this.isUserRegistered(user.username)) return false;
        user.password = await bcrypt.hash(user.password ? user.password.toString() : '12345', await bcrypt.genSalt(10))
    }
    
    config.set(`${this.usersPrefix}.${user.id}`, user);
    if(!user.agent) {
        let inbound = this.getInbound(user.inboundId);
        if(inbound.protocol == constants.protocols.VMESS) { 
            let service = this.getService();
            service.AddUser(user.inboundId, user)
            .then(Logger.log)
            .catch((err) => {
                Logger.error(err.message)
                this.restart();
            });
        } else {
            this.restart();
        }
    }
    return user.id;
};

Store.prototype.isUserRegistered = function (emailOrusername) {
    let users = this.getUsers(false, false);
    return users.filter((u) => u.email == (emailOrusername || u.username == emailOrusername))[0];
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
                .then(Logger.log)
                .catch((err) => {
                    Logger.error(err.message);
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
    let inbound = this.getInbound(user.inboundId);
    if(inbound.enable) {
        service.AddUser(user.inboundId, user)
        .then(Logger.log)
        .catch((err) => {
            Logger.error(err.message);
            this.restart();
        });
    }
};

Store.prototype.proxyRemoveUser = function (inboundId, userId) {
    let service = this.getService();
    let inbound = this.getInbound(inboundId);
    if(inbound.enable) {
        service.RemoveUser(inboundId, { email: userId  })
        .then(Logger.log)
        .catch((err) => {
            Logger.error(err.message)
            this.restart();
        });
    }
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
    let users = () => {
        let users = this.getAll(this.usersPrefix);
        if(onlyProxed) {
            return users.filter((user) => !user.agent);
        } else if(onlyAgents) {
            return users.filter((user) => user.agent);
        } else {
            return users;
        } 
    };
    let today = moment().format('YYYY-MM-DD');
    return users().map((user) => {
        if(user.traffic) {
            user.up = user.traffic[today] ? user.traffic[today].up : 0;
            user.down = user.traffic[today] ? user.traffic[today].down : 0;
        } else {
            user.up = 0;
            user.down = 0;
        }
        user.maximum_daily_traffic = user.maximum_daily_traffic || constants.MAX_DAIRY_TRAFFIC;
        return user;
    });
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
    .then(Logger.log)
    .catch((err) => {
        Logger.error(err.message);
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

Store.prototype.resetTraffic = function (dataId, Type='Inbound', date=moment().format('YYYY-MM-DD')) {
    let data = this[`get${Type}`](dataId);
    data.traffic[date] = { 'up': 0, 'down': 0 };
    this[`update${Type}`](dataId, {
        traffic: data.traffic,
        maximumTrafficDate: null,
        status: data.status === constants.status.MAX_TRAFFIC ? null : data.status
    });
};

Store.prototype.resetAllTraffic = function (date) {
    let users = this.getUsers();
    let inbounds = this.getInbounds();
    users.forEach((user) => {
        this.resetTraffic(user.id, 'User', date);
    });
    inbounds.forEach((inbound) => {
        this.resetTraffic(inbound.id, 'Inbound', date);
    });
};

Store.prototype.getInbounds = function (onlyEnabled=false) {
    let inbounds = this.getAll(this.inbounds)
    if(onlyEnabled) 
        inbounds = inbounds.filter((inbound) => inbound.enable);
    return inbounds.map((inbound) => {
        let today = moment().format('YYYY-MM-DD');
        inbound.up = inbound.traffic[today] ? inbound.traffic[today].up : 0;
        inbound.down = inbound.traffic[today] ? inbound.traffic[today].down : 0;
        inbound.maximum_daily_traffic = inbound.maximum_daily_traffic || constants.MAX_DAIRY_TRAFFIC;
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
        if(typeof data.dynamicPort === 'boolean' && inbound.protocol == constants.protocols.VMESS) {
            if(!data.dynamicPort && inbound.dynamicPort && inbound.detour) { 
                delete inbound.detour;
                delete data.detour;
                refresh = true;
            } else {
                data.detour = { to: "dynamicPort" };
                refresh = true;
            }
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
        certificates: [
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

    if(inbound.protocol == constants.protocols.VMESS && inbound.dynamicPort) 
        inbound.detour = { to : "dynamicPort" };
    if(typeof inbound.maximum_users !== 'number')
        inbound.maximum_users = constants.MAX_INBOUND_USERS;

    inbound.enable = typeof inbound.enable == 'boolean' ? inbound.enable : true;
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
    //     .then(Logger.log)
    //     .catch((err) => Logger.error(err.message));
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