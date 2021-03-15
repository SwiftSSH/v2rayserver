
export interface VNext {
  /**
   * version
   */
  v:string
  /**
   * remark
   */
  ps?:string
  /**
   * server address
   */
  add:string
  port:string
  /**
   * VMess_ID
   */
  id:string
  /**
   * alertid
   */
  aid:string
  /**
   * network
   */
  net: 'ws'|'kcp'|'tcp'|'h2'
  /**
   * 伪装类型
   */
  type: string
  /**
   * 伪装的域名
   * - http host中间逗号(,)隔开
   * - ws host
   * - h2 host
   */
  host:string
  /**
   * ws/h2 stream path
   */
  path:string
  /**
   * tls
   */
  tls:'tls'
}

export interface Config {
  'vmess': Partial<VNext>
  'ss': {
    /**加密函数 */
    security: string
    /**密码 */
    id: string
    add: string
    port: string
    /**备注 */
    ps?: string
  }
  'socks': {
    add: string
    port: string
    /**备注 */
    ps?: string
  }
}

export interface ToVNext {
  <T extends keyof Config>(type:T,config:Config[T]):string
}
