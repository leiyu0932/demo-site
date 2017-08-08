<template>
  <div>
    <nuxt/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/home">
        <i class="pai ip-shouyeicon" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="/2">
        <i class="pai ip-liebiao" slot="icon"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="/3">
        <i class="pai ip-jingxuan" slot="icon"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="/user">
        <i class="pai ip-wode" slot="icon"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      selected: ''
    }),
    watch: {
      selected () {
        console.log(this.selected)
        this.$router.push(this.selected)
      }
    },
    created () {
      this.selected = this.$router.currentRoute.path
    },
    updated () {
      console.log(0)
      // this.selected = this.$router.currentRoute.path
    }
  }
</script>

<style>

</style>
