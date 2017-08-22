<template>
  <div>
    wechatAuthPage
    <br> {{ info }}
  </div>
</template>
<script>
// import axios from '~/utils/axiosCross'

export default {
  name: 'wechatAuthPage',
  async asyncData ({ query }) {
    // const { data } = await axios.get('xxx')
    // if (data.status === 200) {
    //   redirect(query.red)
    // }
    console.log(query)
    return {
      info: query
    }
  }
}
</script>
<style scoped>

</style>
