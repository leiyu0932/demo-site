<template>
  <div id="user">
    {{ $store.state.authUser }}
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'user',
  layout: 'main',
  middleware: 'auth'
  // async asyncData ({ params }) {
  //   let { data } = await axios.get('http://php.test.huandengpai.com/api/nodejs/user/test')
  //   return {
  //     sss: data
  //   }
  // }
}
</script>
<style scoped>
</style>
