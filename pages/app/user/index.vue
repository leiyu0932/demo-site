<template>
  <div v-if="sss" id="user" class="body">
    <div>
      {{ sss }}
      <br>
      <a @click="logout">登出</a>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'
import Bottom from '~/components/Bottom'

export default {
  name: 'user',
  components: {
    Bottom
  },
  // middleware: 'auth'
  async asyncData (context) {
    // xsrfCookieName: 'XSRF-TOKEN'
    const config = {}
    if (context.isServer && context.req && context.req.headers.cookie) {
      const cookie = context.req.headers.cookie
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        cookie
      }
    }
    let response = await axios.get('ajax/user/info', config)
    let sss = null
    const callback = data => {
      sss = data
    }
    handleApi({
      context,
      response,
      callback
    })
    return {
      sss
    }
  },
  methods: {
    async logout () {
      let { data } = await axios.get('ajax/user/logout')
      console.log(data)
      if (data.status === 200) {
        console.log(data.data.session.name)
        this.$store.commit('SET_USER', null)
        this.$router.push('/app/user/login')
      }
    }
  }
}
</script>
