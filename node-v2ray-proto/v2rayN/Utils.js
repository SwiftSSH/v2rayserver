
/**
 * base64 编码
 */
exports.encode = (url='')=>Buffer.from(url).toString('base64')

/**
 * base64 解码
 */
exports.decode = (url='')=>Buffer.from(url,'base64').toString()

exports.urlEncode = (url='')=>encodeURI(url)

const shadowsocks = require('../core_pb').v2ray.core.proxy.shadowsocks

/**
 * @returns {import('../core_pb').v2ray.core.proxy.shadowsocks.CipherType}
 */
exports.getCipherType = (name='')=>{
  let match = /**@type {any} */(name.toUpperCase())
  let type = shadowsocks.CipherType[match]
  // @ts-ignore
  return type || shadowsocks.CipherType.UNKNOWN
}
