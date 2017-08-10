<template>
  <div>
    <div id="home">
      {{ value }}
    </div>
    <Bottom></Bottom>
  </div>

</template>
<script>
import Bottom from '~/components/Bottom'

export default {
  name: 'home',
  // layout: 'main',
  components: {
    Bottom
  },
  data: () => ({
    value: 'home'
  })
}
</script>
<style scoped>
</style>
