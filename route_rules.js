module.exports = [{"remark":"SYSTEM API CALLS (dokodemo-door)","enable":true,"fields":[{"key":"inboundTag","value":["api"],"dataType":"object"},{"key":"outboundTag","value":"api","dataType":"string"},{"key":"type","value":"field","dataType":"string"}]},{"remark":"BLOCK BITTORRENT","enable":true,"fields":[{"key":"outboundTag","value":"blocked","dataType":"string"},{"key":"protocol","value":["bittorrent"],"dataType":"object"},{"key":"type","value":"field","dataType":"string"}]},{"remark":"BLOCK PRIVATE IPS","enable":true,"fields":[{"key":"ip","value":["geoip:private"],"dataType":"object"},{"key":"outboundTag","value":"blocked","dataType":"string"},{"key":"type","value":"field","dataType":"string"}]},{"remark":"BLOCK ADS","enable":true,"fields":[{"key":"domain","value":["geosite:category-ads-all"],"dataType":"object"},{"key":"outboundTag","value":"blocked","dataType":"string"},{"key":"type","value":"field","dataType":"string"}]},{"remark":"BLOCK ADULT CONTENT","enable":false,"fields":[{"key":"domain","value":["geosite:category-porn"],"dataType":"object"},{"key":"outboundTag","value":"blocked"},{"key":"type","value":"field"}]}];