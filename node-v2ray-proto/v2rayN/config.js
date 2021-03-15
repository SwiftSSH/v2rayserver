const Utils = require('./Utils')
const url = require('url')

/**
 * @typedef {import('./v2rayN.type').Config} V2rayNConfig
 */

/**
 * @template {keyof V2rayNConfig} T
 * @param {T} type
 * @param {V2rayNConfig[T]} config
 */
function ToVNext(type, config) {
  let PROTOCOL = `${type}://`;
  config.ps = config.ps || config.add
  switch (type) {
    case "vmess": {
      let vmess = /**@type {V2rayNConfig['vmess']} */ (config);
      let json = JSON.stringify(vmess);
      json = Utils.encode(json);
      return PROTOCOL + json;
    }
    case "ss": {
      let ss = /**@type {V2rayNConfig['ss']} */ (config);
      let remark = Utils.urlEncode(ss.ps);
      let url = `${ss.security}:${ss.id}@${ss.add}:${ss.port}`;
      url = Utils.encode(url);
      return PROTOCOL + `${url}#${remark}`;
    }
    case "socks": {
      let socks = /**@type {V2rayNConfig['socks']} */ (config);
      let remark = Utils.urlEncode(socks.ps);
      let url = `${socks.add}:${socks.port}`;
      url = Utils.encode(url);
      return PROTOCOL + `${url}#${remark}`;
    }
    default:
      throw new Error(`不支持的类型:${type}`);
  }
}

/**
 * @template {keyof V2rayNConfig} T
 * @param {T} protocol
 * @param {string} args
 * @returns {V2rayNConfig[T]}
 */
function ToConfig(protocol, args) {
  let config = /**@type {any} */(null)
  switch(protocol){
    case 'vmess': {
      args = Utils.decode(args)
      return JSON.parse(args)
    }
    case 'ss':
    case 'socks': {
      args = args.split('#')[0]
      args = Utils.decode(args)
      let conf = url.parse(protocol+'://'+args)
      if(protocol==='ss'){
        let [ crypto_method, password ] = conf.auth.split(':')
        return /**@type {V2rayNConfig['ss']} */({
          add: conf.hostname,
          port: conf.port,
          security: crypto_method,
          id: password,
        })
      }else if(protocol==='socks'){
        return /**@type {V2rayNConfig['socks']} */({
          add: conf.hostname,
          port: conf.port,
        })
      }
      break
    }
    default: 
      throw new Error(`${protocol} 协议暂不支持`)
  }
}

module.exports = {
  ToConfig,
  ToVNext,
}
