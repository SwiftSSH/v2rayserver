module.exports = Object.freeze({
    protocols: {
        VMESS: 'vmess',
        VLESS: 'vless',
        TROJAN: 'trojan',
        SHADOWSOCKS: 'shadowsocks',
        DOKODEMO: 'dokodemo-door',
        MTPROTO: 'mtproto',
        SOCKS: 'socks',
        HTTP: 'http',
        TCP:'tcp',
        UDP:'udp'
    },
    security: {
        TLS: 'tls'
    },
    REQUESTS_STATUS: {
        REJECTED: 'rejected', 
        BLOCKED: 'blocked',
        ACCEPTED: 'accepted'
    },
    status: {
        TIMEOUT: 'timeout',
        AGENT_TIMEOUT: 'agent timeout',
        BARNED: "barned",
        MAX_TRAFFIC: 'maximum traffic'
    },
    env: {
        PRODUCTION: 'production',
        DEVELOPMENT: 'development'
    },
    SECRET_KEY: "VGGVknJ6z21gEyKIUFaz7mJ0P2fzaWIL",
    JOB_INTERVAL: 30,
    MAX_MULT_CONN_ATTEMPS: 50,
    MAX_IPS_PER_USER: 1,
    MAX_DAIRY_TRAFFIC: '5 GB',
    MAX_INBOUND_USERS: 100
});