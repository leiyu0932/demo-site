<template>
  <div>
    wechatAuthPage
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'

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
    console.log(response.data)
    if (response.data.status === 200) {
      this.$router.push(this.query.red)
    }
  }
}
</script>
<style scoped>

</style>
