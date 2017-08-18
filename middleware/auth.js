import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default async function (context) {
  if (!context.store.state.authUser) {
    const config = {}
    if (context.isServer && context.req && context.req.headers.cookie) {
      const cookie = context.req.headers.cookie
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        cookie
      }
    }
    const response = await axios.get('ajax/user/info', config)
    console.dir(response.data)
    const callback = data => {
      context.store.commit('SET_USER', data)
      context.redirect('/app/user')
    }
    const notLogin = data => { }
    handleApi({
      context,
      response,
      callback,
      notLogin
    })
  } else {
    context.redirect('/app/user')
  }
  // error({
  //   message: 'You are not connected',
  //   statusCode: 403
  // })
}
