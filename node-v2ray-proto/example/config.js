
const core     = require('../core_pb').v2ray.core
const app      = require('../core_pb').v2ray.core.app
const router   = require('../core_pb').v2ray.core.app.router
const proxyman = require('../core_pb').v2ray.core.app.proxyman
const net      = require('../core_pb').v2ray.core.common.net
const utils    = require('../utils')

const {
  dokodemo,
  socks,
  freedom,
} = core.proxy

/**
 * 
 * @param {import('../core_pb').v2ray.core.Config} config 
 */
function withDefaultApps(config) {
  config.app.push(utils.ToTypedMessage(new app.dispatcher.Config()))
  config.app.push(utils.ToTypedMessage(new proxyman.InboundConfig()))
  config.app.push(utils.ToTypedMessage(new proxyman.OutboundConfig()))
  return config
}

exports.DefaultMaxRuleCount = 300
exports.DefaultAPIPort      = 3001
exports.DefaultAPITag       = 'tag'
exports.DefaultCheckPort    = 3002
exports.DefaultAPIProxyFlag = 'apiproxy'

/**
 * 生成 v2ray 启动时的配置
 * @typedef {Object} Options
 * @property {number} [MaxRuleCount]
 * @property {number} [APIPort]
 * @property {string} [APITag]
 * @property {number} [CheckPort] 用以检查服务是否启动成功的端口
 * @property {string} [APIProxyFlag]
 */
exports.DefaultOptions = /**@type {Options} */(null)

/**
 * @param {Options} options
 */
exports.genV2rayConfig = function getConfig(options={}) {

  let { 
    MaxRuleCount = exports.DefaultMaxRuleCount,
    APIPort      = exports.DefaultAPIPort,
    APITag       = exports.DefaultAPITag,
    CheckPort    = exports.DefaultCheckPort,
    APIProxyFlag = exports.DefaultAPIProxyFlag
  } = options;
  
  let rules = [
    new router.RoutingRule({ inboundTag: [APITag], tag: APITag, }),
    new router.RoutingRule({ inboundTag: ['test'], tag: 'test' }),
  ]
  
  for(let s = 0; s < MaxRuleCount; s++){
    let tag  = APIProxyFlag + s
    let item = new router.RoutingRule({ inboundTag: [ tag ], tag: tag })
    rules.push(item)
  }
  
  let config = new core.Config({
    
    app: [
      
      // 开启 api 服务
      new app.commander.Config({
        tag    : APITag,
        service: [

          new proxyman.command.Config({}),
          
        ].map(v=>utils.ToTypedMessage(v))
      }),

      // 设置路由
      new router.Config({ rule: rules }),

      // 设置日志
      new app.log.Config({
        errorLogLevel: core.common.log.Severity.Warning, 
        accessLogType: core.app.log.LogType.Console, 
        errorLogType: core.app.log.LogType.Console 
      }),
      
    ].map(v=>utils.ToTypedMessage(v)),
    
    inbound:[

      // api
      new core.InboundHandlerConfig({
        tag             : APITag,
        receiverSettings: utils.ToTypedMessage(new proxyman.ReceiverConfig({
          portRange: new net.PortRange({ From: APIPort, To: APIPort }),
        })),
        proxySettings: utils.ToTypedMessage(new dokodemo.Config({
          address    : utils.NewIPOrDomain('127.0.0.1'),
          port       : 0,
          networkList: new net.NetworkList({ network: [ net.Network.TCP ] }),
        })),
      }),

      // check 
      new core.InboundHandlerConfig({
        // tag: CheckTag,
        receiverSettings: utils.ToTypedMessage(new proxyman.ReceiverConfig({
          portRange: new net.PortRange({ From: CheckPort, To: CheckPort }),
          listen   : utils.NewIPOrDomain('127.0.0.1'),
        })),
        proxySettings: utils.ToTypedMessage(new socks.ServerConfig({
          authType: socks.AuthType.NO_AUTH,
        })),
      }),
      
    ],

    outbound: [

      new core.OutboundHandlerConfig({
        tag          : 'out-default',
        proxySettings: utils.ToTypedMessage(new freedom.Config({}))
      })

    ]
    
  })
  
  config = withDefaultApps(config)

  return config
  
}
