
const core     = require('../core_pb').v2ray.core
const command  = require('../core_pb').v2ray.core.app.proxyman.command
const proxyman = require('../core_pb').v2ray.core.app.proxyman
const vmess    = require('../core_pb').v2ray.core.proxy.vmess
const dokodemo = require('../core_pb').v2ray.core.proxy.dokodemo
const socks    = require('../core_pb').v2ray.core.proxy.socks
const protocol = require('../core_pb').v2ray.core.common.protocol
const net      = require('../core_pb').v2ray.core.common.net
const utils    = require('../utils')
const grpc     = require('@grpc/grpc-js')
const v2rayN   = require('../v2rayN')
const v2config = require('./config')
// @ts-ignore
const grpcClient      = grpc.makeGenericClientConstructor({})

const apiproxyPortStart  = 4000
let   apiProxyPortCursor = 0
const apiProxyPorts      = /**@type {{[k:string]:number}} */({})

class V2ray {
  /**
   * @typedef {Object} Options
   * @property {string} [APIAddr] 
   * @property {number} [APIPort] 
   * @property {string} [VNext] 
   * @property {string} [ProxyFlag] 
   * @param {Options} [options] 
   */
  constructor(options={}){
    this.APIAddr   = options.APIAddr || '127.0.0.1'
    this.APIPort   = options.APIPort || 3001
    this.ProxyFlag = options.ProxyFlag || v2config.DefaultAPIProxyFlag
    this.VNext     = options.VNext
    this.ProxyPort = 0
    this.initTask  = this.init()
    this.client    = /**@type {import('@grpc/grpc-js/src/make-client').ServiceClient} */(null)
    this.rpcImpl   = /**@type {any} */(null)
  }
  async initVNext(){

    let port = 0
    port = this.ProxyPort || apiProxyPorts[this.VNext]
    if(port){
      this.ProxyPort = port
      return
    }

    let v2proxy = new V2ray({ APIAddr: this.APIAddr, APIPort: this.APIPort })
    apiProxyPortCursor++
    let tag = `${this.ProxyFlag}${apiProxyPortCursor}`
    port = apiproxyPortStart + apiProxyPortCursor
    
    let hsClient = await v2proxy.gethsClient()
    let config = new command.AddInboundRequest({
      inbound: new core.InboundHandlerConfig({
        tag             : tag,
        receiverSettings: utils.ToTypedMessage(new proxyman.ReceiverConfig({
          portRange: new net.PortRange({ From: port, To: port }),
        })),
        proxySettings: utils.ToTypedMessage(new dokodemo.Config({
          address    : utils.NewIPOrDomain('127.0.0.1'),
          port       : 0,
          networkList: new net.NetworkList({ network: [ net.Network.TCP ] }),
        })),
      })
    })

    await Promise.all([
      hsClient.addInbound(config),
      // v2proxy.AddInbound(tag,port),
      v2proxy.AddOutbound(tag,this.VNext)
    ])

    v2proxy.Close()
    
    this.ProxyPort = apiProxyPorts[this.VNext] = port
    return
  }
  async init(){
    if(this.VNext){
      await this.initVNext()
    }
    // @ts-ignore
    let client = this.client = new grpcClient(`${this.APIAddr}:${this.ProxyPort || this.APIPort}`, grpc.credentials.createInsecure(),{
      'grpc.keepalive_timeout_ms': 5e3,
      'grpc.keepalive_time_ms': 1e3,
    })
    // @ts-ignore
    this.rpcImpl = function(method, requestData, callback){
      let name = method.name
      let path = utils.GetMessageType(this.constructor)
      if( path !== null ){
        name = `/${path}/${name}`
      }
      // @ts-ignore
      client.makeUnaryRequest(name, arg => arg, arg => arg, requestData, { deadline: Date.now()+10e3 }, callback)
    }
  }
  Close(){
    this.client.close()
  }
  async gethsClient(){
    await this.initTask
    let client = new command.HandlerService(this.rpcImpl)
    return client
  }
  /**
   * @param {string} tag 
   * @param {number} port 
   */
  async AddInbound(tag, port){
    let proxyConfig = utils.ToTypedMessage(new socks.ServerConfig({ authType: socks.AuthType.NO_AUTH }))
    let inboundConfig = new command.AddInboundRequest({
      inbound: new core.InboundHandlerConfig({
        tag: tag,
        proxySettings: proxyConfig,
        receiverSettings: utils.ToTypedMessage(new proxyman.ReceiverConfig({
          portRange: new net.PortRange({ From: port, To: port }),
          listen: utils.NewIPOrDomain('127.0.0.1'),
        })),
      })
    })
    let client = await this.gethsClient()
    let res = await client.addInbound(inboundConfig)
    return res
  }
  /**
   * @param {string} tag 
   */
  async RemoveInbound(tag){
    let hsClient = await this.gethsClient()
    let res = await hsClient.removeInbound(new command.RemoveInboundRequest({
      tag: tag,
    }))
    return res
  }
  /**
   * @param {string} vnext 
   * @param {string} tag 
   */
  async AddOutbound(tag, vnext,){
    let outboundConfig = v2rayN.GenOutboundConfig(vnext)
    outboundConfig.tag = tag
    let hsClient = await this.gethsClient()
    let res = hsClient.addOutbound(new command.AddOutboundRequest({
      outbound: outboundConfig,
    }))
    return res
  }
  /**
   * @param {string} tag 
   */
  async RemoveOutbound(tag){
    let hsClient = await this.gethsClient()
    let res = await hsClient.removeOutbound(new command.RemoveOutboundRequest({
      tag: tag,
    }))
    return res
  }
  /**
   * @param {string} tag 
   * @param {import('./v2ray.type').IUser} user 
   */
  async AddUser(tag, user){
    let req = new command.AlterInboundRequest({
      tag: tag,
      operation: utils.ToTypedMessage(new command.AddUserOperation({
        user: new protocol.User({
          email: user.email,
          account: utils.ToTypedMessage(new vmess.Account({
            id: user.uuid,
            alterId: user.aid
          }))
        })
      }))
    })
    let client = await this.gethsClient()
    let res = await client.alterInbound(req)
    return res
  }
  /**
   * 
   * @param {string} tag 
   * @param {{email:string}} user 
   */
  async RemoveUser(tag, user){
    let req = new command.AlterInboundRequest({
      tag: tag,
      operation: utils.ToTypedMessage(new command.RemoveUserOperation({
        email: user.email,
      }))
    })
    let client = await this.gethsClient()
    let res = await client.alterInbound(req)
    return res
  }
}

module.exports = V2ray;