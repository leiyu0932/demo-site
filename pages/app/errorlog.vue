<template>
  <div>
    errorlog
    <br> {{ info }}
    <nuxt-link to="/app/home">首页</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'errorlog',
  asyncData ({ query }) {
    return {
      info: query.msg
    }
  }
}
</script>
<style scoped>

</style>
