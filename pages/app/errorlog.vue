<template>
  <div>
    errorlog
    <br> {{ msg }}
    <nuxt-link to="/app/home">首页</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'errorlog',
  computed: {
    msg () {
      return this.$store.state.msg
    }
  }
}
</script>
<style scoped>

</style>
