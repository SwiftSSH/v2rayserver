
const core        = require('../core_pb').v2ray.core
const protocol    = require('../core_pb').v2ray.core.common.protocol
const internet    = require('../core_pb').v2ray.core.transport.internet
const vmess       = require('../core_pb').v2ray.core.proxy.vmess
const shadowsocks = require('../core_pb').v2ray.core.proxy.shadowsocks
const socks       = require('../core_pb').v2ray.core.proxy.socks
const proxyman    = require('../core_pb').v2ray.core.app.proxyman
const utils       = require('../utils')
const tools       = require('./Utils')
const Conf      = require('./config')

/**
 * @typedef {import('./v2rayN.type').Config} V2rayNConfig
 */

/**
 * @param {string} share_string 
 */
function GenOutboundConfig(share_string) {
  let [ protocol, args ] = share_string.split('://')
  switch(protocol){
    case 'vmess': {
      let config = Conf.ToConfig(protocol,args)
      return GenVMessOutboundConfig(config)
    }
    case 'ss': {
      let config = Conf.ToConfig(protocol,args)
      return GenSSOutboundConfig(config);
    }
    case 'socks': {
      let config = Conf.ToConfig(protocol,args)
      return GenSocksOutboundConfig(config);
    }
    default: 
      throw new Error(`${protocol} 协议暂不支持`)
  }
}

/**
 * @param {V2rayNConfig['vmess']} vnext 
 */
function GenVMessOutboundConfig(vnext) {
  
  let user = new protocol.User({
		email  : 'xxxx',
		account: utils.ToTypedMessage(new vmess.Account({
			id              : vnext.id,
			alterId         : Number(vnext.aid),
			securitySettings: new protocol.SecurityConfig({ type: protocol.SecurityType.AUTO })
		})),
	})

	let proxyConfig = new vmess.outbound.Config({
    Receiver: [
      new protocol.ServerEndpoint({
        address: utils.NewIPOrDomain(vnext.add),
        port   : Number(vnext.port),
        user   : [ user ]
      })
    ]
	})
  
	let streamConfig = function streamConfig() {
    switch(vnext.net) {
      case "ws": 
        {
          let wsConfig = new internet.websocket.Config({
            path  : vnext.path,
            header: [
              new internet.websocket.Header({ key: 'Host', value: vnext.host })
            ]
          })
          return new internet.StreamConfig({
            protocol         : internet.TransportProtocol.WebSocket,
            transportSettings: [
              new internet.TransportConfig({
                protocol: internet.TransportProtocol.WebSocket,
                settings: utils.ToTypedMessage(wsConfig),
              })
            ]
          })
        }
      case "kcp": 
        {
          let kcpConfig = new internet.kcp.Config({
            headerConfig: utils.ToTypedMessage(utils.SelectHackHeader(vnext.type || '')),
          })
          return new internet.StreamConfig({
            protocol         : internet.TransportProtocol.MKCP,
            transportSettings: [
              new internet.TransportConfig({
                protocol: internet.TransportProtocol.MKCP,
                settings: utils.ToTypedMessage(kcpConfig),
              })
            ]
          })
        }
      case "tcp": 
        {
          return new internet.StreamConfig({
            protocol: internet.TransportProtocol.TCP,
          })
        }
      case "h2": 
        {
          let httpConfig = new internet.http.Config({
            host: (vnext.host || '').split(','),
            path: vnext.path,
          })
          return new internet.StreamConfig({
            protocol         : internet.TransportProtocol.HTTP,
            transportSettings: [
              new internet.TransportConfig({
                protocol: internet.TransportProtocol.HTTP,
                settings: utils.ToTypedMessage(httpConfig)
              })
            ]
          })
        }
      }
  }()

  if(vnext.tls === 'tls'){
    streamConfig.securityType     = utils.GetMessageType(internet.tls.Config) || ''
    let tlsConf = utils.ToTypedMessage(new internet.tls.Config({
      allowInsecure: false,
    }))
    if(tlsConf !== null){
      streamConfig.securitySettings = [ tlsConf ]
    }
  }

	let senderConfig = new proxyman.SenderConfig({
		streamSettings: streamConfig,
	})

	let config = new core.OutboundHandlerConfig({
		senderSettings: utils.ToTypedMessage(senderConfig),
		proxySettings : utils.ToTypedMessage(proxyConfig),
	})

  return config
  
}

/**
 * @param {V2rayNConfig['ss']} vnext 
 */
function GenSSOutboundConfig(vnext) {
  
  let account = utils.ToTypedMessage(new shadowsocks.Account({
		password:   vnext.id,
		cipherType: tools.getCipherType(vnext.security),
		ota:        shadowsocks.Account.OneTimeAuth.Disabled,
	}))
  
	let proxyConfig = new shadowsocks.ClientConfig({
    server: [
      new protocol.ServerEndpoint({
        address: utils.NewIPOrDomain(vnext.add),
        port: Number(vnext.port),
        user: [new protocol.User({ account: account })]
      })
    ],
	})

	let config = new core.OutboundHandlerConfig({
		proxySettings : utils.ToTypedMessage(proxyConfig),
	})

  return config
  
}

/**
 * @param {V2rayNConfig['socks']} vnext 
 */
function GenSocksOutboundConfig(vnext) {

	let proxyConfig = new socks.ClientConfig({
    server: [
      new protocol.ServerEndpoint({
        address: utils.NewIPOrDomain(vnext.add),
        port: Number(vnext.port),
      })
    ],
	})

	let config = new core.OutboundHandlerConfig({
		proxySettings : utils.ToTypedMessage(proxyConfig),
	})

  return config
  
}


module.exports = {
  GenOutboundConfig,
  GenVMessOutboundConfig,
  GenSSOutboundConfig,
  GenSocksOutboundConfig,
  ...require('./config'),
}
