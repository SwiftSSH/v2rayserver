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
    SECRET_KEY: "VGGVknJ6z21gEyKIUFaz7mJ0P2fzaWIL",
    security: {
        TLS: 'tls'
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