// 判定现在的环境
const env = process.env.NODE_ENV

/**
 * 配置多环境
 * url api 接口地址
 * staticServer 静态资源地址
 * dev 开发环境
 * qa 测试环境
 * prod 生产环境
 */

const kanjiaServer = {
  dev: 'https://172.16.182.151/',
  qa: 'https://api.new.zmgongzuoshi.top/java',
  prod: 'https://api.new.sunlands.site/java'
}

const url = {
  dev: 'https://api.new.sunlands.site/api/s1',
  qa: 'https://api.new.zmgongzuoshi.top/api/s1',
  prod: 'https://api.new.sunlands.site/api/s1'
}

const staticServer = {
  dev: 'https://r.sunlands.site/activity-coming',
  qa: 'https://r.sunlands.site/activity-coming',
  prod: 'https://r.sunlands.site/activity-coming'
}

module.exports = {
  baseUrl: url[env],
  staticUrl: staticServer[env],
  kanjiaUrl: kanjiaServer[env]
}
