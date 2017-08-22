import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default async function (context) {
  const params = {
    code: context.query.code,
    state: context.query.state
  }
  const response = await axios.post('ajax/weixin/auth/login', params)
  // console.log(response.data)
  const callback = data => {
    context.redirect(context.query.red)
  }
  handleApi({
    context,
    response,
    callback
  })
}
