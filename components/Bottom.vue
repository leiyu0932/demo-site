<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/app/home">
        <i class="pai ip-shouyeicon" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="/app/content/items">
        <i class="pai ip-liebiao" slot="icon"></i>
        列表
      </mt-tab-item>
      <mt-tab-item id="/app/user/login">
        <i class="pai ip-jingxuan" slot="icon"></i>
        登入
      </mt-tab-item>
      <mt-tab-item id="/app/user">
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
      console.log(10)
      // this.selected = this.$router.currentRoute.path
    }
  }
</script>

<style>

</style>
