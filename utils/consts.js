// 基础地址
export const BASE_URL = 'http://node.leiwangxing.com'

// 接口地址
export const API_URL = BASE_URL + '/api'

// timeout
export const TIMEOUT = 5000

// 微信授权baseurl
export const WECHATAUTHBASEURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'

// 微信appid
export const WECHATAUTHAPPID = 'wx8053316eaf7612e8'

// 微信授权url
export const WECHATAUTHURL = `${WECHATAUTHBASEURL}?appid=${WECHATAUTHAPPID}`

// 微信授权后缀参数
export const WECHATAUTHSUFFIX = '&response_type=code&scope=snsapi_userinfo&state=demosite#wechat_redirect'

// 处理微信授权完成后的page
export const WECHATAUTHPAGE = '/app/wechatAuthPage'
