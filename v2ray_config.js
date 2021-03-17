module.exports = {
  "log": {
    "loglevel": "warning",
    // "access": "./log/access.log",
    // "error": "./log/error.log",
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
      "statsInboundDownlink": true
		}
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
      "protocol": "vmess",
      "port": "20000-40000",
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