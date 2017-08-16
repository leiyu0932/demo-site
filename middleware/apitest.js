import axios from '~/utils/axiosCross'
import { handle } from '~/utils/handle'

export default async function (context) {
  const response = await axios.get('ajax/demo/api8')
  console.log(response.data.status)
  const callback = data => {
    console.log('处理200')
  }
  const notLogin = data => { }
  handle({
    context,
    response,
    callback,
    notLogin
  })
}
