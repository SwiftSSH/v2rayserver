module.exports = function(config) {
  return {
    "dns": {
      // Static hosts, similar to hosts file.
      "hosts": {
        // Match v2ray.com to another domain on CloudFlare. This domain will be used when querying IPs for v2ray.com.
        "domain:v2ray.com": "www.examuganda.com",
        "domain:shadowsocks.org": "www.meduweb.com"
      },
      "servers": [
        "1.1.1.1",
        "8.8.8.8",
        "8.8.4.4",
        "localhost"
      ]
    },
    "inbounds": [
      {
        "port": 10808,
        "protocol": "socks",
        "listen": "127.0.0.1",
        "settings": {
          "auth": "noauth",
          "udp": true,
          "userLevel": 8
        },
        "sniffing": {
          "destOverride": [
            "http",
            "tls"
          ],
          "enabled": true
        },
        "tag": "socks"
      },
      {
        "port": 10809,
        "listen": "127.0.0.1",
        "protocol": "http",
        "settings": {
          "userLevel": 8
        },
        "tag": "http"
      }
    ],
    "outbounds": [
      {
        "protocol": config.protocol,
        "settings": {
          "vnext": [
            {
              "address": config.add,
              "port": parseInt(config.port),
              "users": [
                {
                  "alterId": parseInt(config.aid),
                  "id": config.id,
                  "security": config.type
                }
              ]
            }
          ]
        },

        "streamSettings": function () {
          if(config.net == 'ws') {
            return {
              "network": config.net,
              "security": config.tls,
              "tlsSettings": function() {
                if(config.tls) {
                  return {
                    "allowInsecure": true,
                    "serverName": config.host
                  };
                }
              }(),
              "wsSettings": {
                "headers": {
                  "Host": config.host
                },
                "path": config.path
              }
            }
          }
        }(),
        "tag": "proxy"
      },
      {
        "protocol": "freedom",
        "settings": {
          "domainStrategy": "AsIs"
        },
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "settings": {},
        "tag": "block"
      }
    ],
    "policy": {
      "levels": {
        "0": {
          "bufferSize": 4096,
          "connIdle": 300,
          "downlinkOnly": 0,
          "handshake": 4,
          "uplinkOnly": 0
        }
      }
    },
    "routing": {
      "domainStrategy": "AsIs",
      "rules": [
        {
          "network": "tcp,udp",
          "outboundTag": "proxy",
          "type": "field"
        }
      ]
    }
  }
};