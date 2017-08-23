<template>
  <div id="user" class="body">
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
import Bottom from '~/components/Bottom'

export default {
  name: 'user',
  components: {
    Bottom
  },
  // middleware: 'auth'
  async asyncData ({ isServer, req }) {
    // xsrfCookieName: 'XSRF-TOKEN'
    const config = {}
    if (isServer && req && req.headers.cookie) {
      const cookie = req.headers.cookie
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        cookie
      }
    }
    let { data } = await axios.get('ajax/user/info', config)
    return {
      sss: data
    }
  },
  beforeCreate () {
    console.log(process.env.NODE_ENV)
  },
  methods: {
    async logout () {
      let { data } = await axios.get('ajax/user/logout')
      console.log(data)
      if (data.status === 200) {
        console.log(data.data.session.name)
        this.$router.push('/app/user/login')
      }
    }
  }
}
</script>
