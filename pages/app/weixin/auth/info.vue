<template>
  <div class="body">
    微信登入才能看见我
    <br>
    <div>
      {{ info }}
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Bottom from '~/components/Bottom'

export default {
  name: 'info',
  middleware: 'apitest',
  head: {
    title: '微信'
  },
  components: {
    Bottom
  },
  asyncData ({ info }) {
    return {
      info
    }
  }
}
</script>
