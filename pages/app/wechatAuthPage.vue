<template>
  <div>
    wechatAuthPage
    <br> {{ info }}
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
import { handleApi } from '~/utils/handle'

export default {
  name: 'wechatAuthPage',
  async asyncData (context) {
    const params = {
      code: context.query.code,
      state: context.query.state
    }
    const response = await axios.post('ajax/weixin/auth/login', params)
    const callback = data => {
      console.log(context.query)
      context.redirect(context.query.red)
    }
    handleApi({
      context,
      response,
      callback
    })
    return {
      info: response.data
    }
  }
}
</script>
<style scoped>

</style>
