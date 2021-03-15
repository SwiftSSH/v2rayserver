const proto = require('protobufjs')
const root = require('../core_pb')

/**
 * 
 * @param {any} msg_any 
 */
function ToTypedMessage(msg_any) {
  
  if(!msg_any){ return null }

  let msg = /**@type {{ constructor: protobuf.Type }} */(msg_any)
  
  let settings = msg.constructor.encode(msg).finish()
  proto
  
  let typedMessage = new root.v2ray.core.common.serial.TypedMessage({
    type: GetMessageType(msg.constructor),
    value: settings,
  })

  return typedMessage
}

/**@type {{[k:string]:any}} */
let TypeNameMap = {}

void function init() {
  /**
   * 
   * @param {string} prefix 
   * @param {object} base 
   */
  function loop(prefix='', base=root) {
    Object.keys(base).forEach(key=>{
      let new_base = base[key]
      let name = `${prefix}.${key}`
      if(typeof new_base !== 'function'){
        return loop(name, new_base)
      }
      TypeNameMap[name.slice(1)] = new_base
    })
  }
  loop()
}()

/**
 * 
 * @param {any} type 
 */
function GetMessageType(type) {
  for(let k in TypeNameMap){
    if(type === TypeNameMap[k]){
      return k
    }
  }
  return null
}

module.exports = {
  ToTypedMessage,
  GetMessageType,
}
