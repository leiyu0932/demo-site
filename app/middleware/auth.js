import axios from 'axios'

export default async function ({ store, redirect, error }) {
  if (!store.state.authUser) {
    let { data } = await axios.get('http://php.test.huandengpai.com/api/nodejs/user/test')
    if (data.status === 200) {
      store.state.authUser = data
    } else if (data.status === 301) {
      return redirect('/app/login')
    } else {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }
}
