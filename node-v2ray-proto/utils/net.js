const net    = require('../core_pb').v2ray.core.common.net
const ipaddr = require('ipaddr.js')

function NewIPOrDomain(addr='') {

  if(ipaddr.isValid(addr)){

    let ip = new Uint8Array(ipaddr.parse(addr).toByteArray())
    
    return new net.IPOrDomain({
      ip: ip,
    })
    
  }
  
  return new net.IPOrDomain({
    domain: addr
  })
  
}

module.exports = {
  NewIPOrDomain,
}
