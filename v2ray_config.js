module.exports = {
  "log": {
    "loglevel": "warning",
    "access": "./log/access.log",
    "error": "./log/error.log",
  },
  "policy": {
		"levels": {
			"0": {
        "statsUserUplink": true,
        "statsUserDownlink": true
			}
		},
		"system": {
      "statsInboundUplink": true,
      "statsInboundDownlink": true,
      "statsOutboundUplink": true,
      "statsOutboundDownlink": true
		}
	},
  "dns": {
    "server": [
    "1.1.1.1",
    "1.0.0.1",
    "8.8.8.8",
    "8.8.4.4",
    "localhost"
    ]
  },
  "api": {
    "services": [
      "HandlerService",
      "StatsService"
    ],
    "tag": "api"
  },
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": 10085,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "127.0.0.1"
      },
      "tag": "api"
    },
    {
      "port": "10086", 
      "protocol": "vmess",
      "settings": {
        "clients": []
      },
      "tag": "users_account",
      "detour": { 
        "to": "dynamicPort"   
      }
    },
    {
      "protocol": "vmess",
      "port": "20000-30000",
      "tag": "dynamicPort",  
      "settings": {
        "default": {
          "alterId": 64
        }
      },
      "allocate": {            
        "strategy": "random", 
        "concurrency": 3,  
        "refresh": 5
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    },
    {
      "protocol": "blackhole",
      "settings": {},
      "tag": "blocked"
    }
  ],
  "routing": {
    "rules": [
      {
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "type": "field"
      },
      {
        "domain": [
          "geosite:category-ads-all"
        ],
        "outboundTag": "blocked",
        "type": "field"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "blocked",
        "type": "field"
      },
      {
        "outboundTag": "blocked",
        "protocol": [
          "bittorrent"
        ],
        "type": "field"
      }
    ]
  },
  "stats": {}
}