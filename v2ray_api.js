
const core     = require('./node-v2ray-proto/core_pb').v2ray.core
const command  = require('./node-v2ray-proto/core_pb').v2ray.core.app.proxyman.command
const proxyman = require('./node-v2ray-proto/core_pb').v2ray.core.app.proxyman
const vmess    = require('./node-v2ray-proto/core_pb').v2ray.core.proxy.vmess
const socks    = require('./node-v2ray-proto/core_pb').v2ray.core.proxy.socks
const protocol = require('./node-v2ray-proto/core_pb').v2ray.core.common.protocol
const net      = require('./node-v2ray-proto/core_pb').v2ray.core.common.net
const utils    = require('./node-v2ray-proto/utils');
const grpc     = require('@grpc/grpc-js');
const grpcClient  = grpc.makeGenericClientConstructor({});

class V2rayAPI {
  constructor(options={}){
    this.APIAddr   = options.APIAddr || '127.0.0.1'
    this.APIPort   = options.APIPort || 3001
    this.ProxyPort = 0
    this.initTask  = this.init()
    this.client    = /**@type {import('@grpc/grpc-js/src/make-client').ServiceClient} */(null)
    this.rpcImpl   = /**@type {any} */(null)
  }

  async init(){
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
    return client;
  }

  async AddInbound(tag, port){
    let proxyConfig = utils.ToTypedMessage(new socks.ServerConfig({ clients: [], authType: socks.AuthType.NO_AUTH }))
    let inboundConfig = new command.AddInboundRequest({
      inbound: new core.InboundHandlerConfig({
        tag: tag,
        proxySettings: proxyConfig,
        receiverSettings: utils.ToTypedMessage(new proxyman.ReceiverConfig({
          portRange: new net.PortRange({ From: port, To: port }),
          listen: utils.NewIPOrDomain('0.0.0.0'),
        //   streamSettings: {},
        //   sniffingSettings: {}
        })),
      })
    })
    let client = await this.gethsClient()
    let res = await client.addInbound(inboundConfig)
    return res;
  }

  async RemoveInbound(tag){
    let hsClient = await this.gethsClient()
    let res = await hsClient.removeInbound(new command.RemoveInboundRequest({
      tag: tag,
    }))
    return res
  }

  async AddUser(tag, user){
    let req = new command.AlterInboundRequest({
      tag: tag,
      operation: utils.ToTypedMessage(new command.AddUserOperation({
        user: new protocol.User({
          email: user.email,
          level: 0,
          account: utils.ToTypedMessage(new vmess.Account(user))
        })
      }))
    })
    let client = await this.gethsClient()
    let res = await client.alterInbound(req)
    return res;
  }

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

module.exports = V2rayAPI;