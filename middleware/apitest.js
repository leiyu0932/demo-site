import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default async function (context) {
  const config = {}
  if (context.isServer && context.req && context.req.headers.cookie) {
    const cookie = context.req.headers.cookie
    console.log(cookie)
    config.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      cookie
    }
  }
  const response = await axios.get('ajax/weixin/auth/info?p1=a&p2=b', config)
  console.log(response.data.status)
  // 默认回调函数
  const callback = data => {
    console.log('处理200')
  }
  // 需要微信登入的话传递回调页面
  const callbackPage = '/app/weixin/auth/info'

  // 需要覆盖未登入401处理的话如下第一
  // const notLogin = data => { }
  handleApi({
    context,
    response,
    callback,
    callbackPage
  })
}
