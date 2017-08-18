import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default async function (context) {
  const response = await axios.get('ajax/demo/api6?a=1&b=2')
  console.log(response.data.status)
  const callback = data => {
    console.log('处理200')
  }
  const notLogin = data => { }
  handleApi({
    context,
    response,
    callback,
    notLogin
  })
}
