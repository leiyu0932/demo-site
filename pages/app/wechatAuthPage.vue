<template>
  <div>
    wechatAuthPage
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'

export default {
  name: 'wechatAuthPage',
  async asyncData (redirect, query) {
    const { data } = await axios.get('app/home')
    if (data.status === 200) {
      redirect(query.red)
    }
    return {
      info: data
    }
  }
}
</script>
<style scoped>

</style>
