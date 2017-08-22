import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default async function (context) {
  const response = await axios.get('ajax/weixin/demo/auth?p1=a&p2=b')
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
