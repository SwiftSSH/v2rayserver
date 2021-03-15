
const headers = require('../core_pb').v2ray.core.transport.internet.headers

/**
 * 选择伪装的 header 头
 * @param {string} name 
 */
function SelectHackHeader(name) {

  switch(name){
    case 'srtp': 
      return new headers.srtp.Config()
    case 'utp': 
      return new headers.utp.Config()
    case 'wechat-video': 
      return new headers.wechat.VideoConfig()
    case 'dtls': 
      return new headers.tls.PacketConfig()
    default: 
      return null
  }
  
}

module.exports = {
  SelectHackHeader
}
