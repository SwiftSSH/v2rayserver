module.exports = Object.freeze({
    MAX_MULT_CONN_ATTEMPS: 100,
    MAX_IPS_PER_USER: 1,
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
    SECRET_KEY: "VGGVknJ6z21gEyKIUFaz7mJ0P2fzaWIL",
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
        BARNED: "barned"
    },
    env: {
        PRODUCTION: 'production',
        DEVELOPMENT: 'development'
    }
});