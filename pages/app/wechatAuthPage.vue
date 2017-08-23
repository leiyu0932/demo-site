<template>
  <div>
    wechatAuthPage
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
import { handleAjax } from '~/utils/handle'

export default {
  name: 'wechatAuthPage',
  // middleware: 'wechatAuth',
  asyncData ({ query }) {
    return {
      query
    }
  },
  async mounted () {
    const response = await axios.get(`ajax/weixin/auth/login?code=${this.query.code}&state=${this.query.state}`)
    const callback = data => {
      this.$router.replace(this.query.red)
    }
    handleAjax({
      router: this.$router,
      response,
      callback
    })
  }
}
</script>
<style scoped>

</style>
