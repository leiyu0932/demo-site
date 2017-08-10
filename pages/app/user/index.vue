<template>
  <div>
    <div id="user">
      {{ sss }}
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
import Bottom from '~/components/Bottom'

export default {
  name: 'user',
  // layout: 'main',
  components: {
    Bottom
  },
  // middleware: 'auth'
  async asyncData ({ isServer, params, req }) {
    // xsrfCookieName: 'XSRF-TOKEN'
    if (isServer && req) {
      // axios.headers['Cookie'] = req.headers.cookie
      console.log(req.headers.cookie)
      // const cookie = req.headers.cookie
      // let { data } = await axios({
      //   method: 'get',
      //   url: 'nodejs/user/test',
      //   headers: {
      //     'X-Requested-With': 'XMLHttpRequest',
      //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //     cookie
      //   }
      // })
      return {
        sss: 'ss'
      }
    }
    let { data } = await axios.get('nodejs/user/test')
    return {
      sss: data
    }
  }
}
</script>
<style scoped>
</style>
