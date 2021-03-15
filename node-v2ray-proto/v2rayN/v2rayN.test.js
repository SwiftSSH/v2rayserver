const V2rayN = require('./')
const UUID   = require('uuid').v4

describe('mocha',()=>{
  describe('ToVNext',()=>{
    it('vmess',()=>{
      let uuid = UUID()
      let config = V2rayN.ToVNext('vmess',{
        'add': '127.0.0.1',
        'port': '5002',
        'aid': '64',
        'id': uuid,
      })
    })
  })
})