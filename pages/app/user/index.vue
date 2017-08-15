<template>
  <div class="body">
    <div id="user">
      {{ sss }}
      <br>
      <a @click="logout">登出</a>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
// import Cookies from '~/utils/js.cookie'
import Bottom from '~/components/Bottom'

export default {
  name: 'user',
  // layout: 'main',
  components: {
    Bottom
  },
  // middleware: 'auth'
  async asyncData ({ isServer, params, req, redirect }) {
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
      sss: data,
      redi: redirect
    }
  },
  beforeCreate () {
    console.log(process.env.NODE_ENV)
  },
  mounted () {
    window.sss = this
    console.log(this)
  },
  methods: {
    async logout () {
      let { data } = await axios.get('ajax/user/logout')
      console.log(data)
      if (data.status === 200) {
        console.log(data.data.session.name)
        // Cookies.remove(data.data.session.name)
        this.$router.push('/app/user/login')
        // console.log(this)
      }
    }
  }
}
</script>
<style scoped>

</style>
