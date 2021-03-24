module.exports = {
  "log": {
    "loglevel": "warning"
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
      "port": "40000-60000",
      "tag": "dynamicPort",  
      "settings": {
        "default": {
          "alterId": 64
        }
      },
      "allocate": {            
        "strategy": "random", 
        "concurrency": 2,  
        "refresh": 3
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
    "rules": []
  },
  "stats": {}
}