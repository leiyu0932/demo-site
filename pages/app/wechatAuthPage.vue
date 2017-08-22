<template>
  <div>
    wechatAuthPage
  </div>
</template>
<script>
export default {
  name: 'wechatAuthPage',
  middleware: 'wechatAuth',
  asyncData ({ query }) {
    return {
      red: query.red
    }
  }
  // mounted () {
  //   this.$router.push(this.red)
  // }
}
</script>
<style scoped>

</style>
