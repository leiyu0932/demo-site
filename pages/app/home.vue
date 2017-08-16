<template>
  <div>
    <div id="home">
      {{ info.status }}
      <br>
      <mt-button @click.native="handleClick1">点击弹出this.$toast</mt-button>
      <mt-button @click.native="handleClick2">点击弹出带有 icon 的 this.$toast</mt-button>
      <mt-button @click.native="handleClick4">点击弹出this.$indicator</mt-button>
      <mt-button @click.native="handleClick5">带文字的可配置spinner</mt-button>
      <mt-button @click.native="handleClick7">alert</mt-button>
      <mt-button @click.native="handleClick8">confirm</mt-button>
      <!-- <mt-button @click.native="handleClick9">prompt</mt-button> -->
      <br>
      <a href="http://elemefe.github.io/mint-ui/#/">其他详细功能演示(需翻墙)</a>
      <br>
      <a href="http://mint-ui.github.io/docs/#/">使用文档(需翻墙)</a>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import axios from '~/utils/axiosCross'
import Bottom from '~/components/Bottom'

export default {
  name: 'home',
  // layout: 'main',
  middleware: 'apitest',
  components: {
    Bottom
  },
  async asyncData () {
    const { data } = await axios.get('app/home')
    // console.log(process.env.NODE_ENV)
    return {
      info: data
    }
  },
  head: {
    title: 'Home'
  },
  methods: {
    handleClick1 () {
      this.$toast({
        message: '提示信息可以配置位置时间内容',
        position: 'center',
        duration: 1000
      })
    },
    handleClick2 () {
      this.$toast({
        message: '操作成功',
        iconClass: 'pai ip-shouyeicon'
      })
    },
    handleClick4 () {
      this.$indicator.open()
      setTimeout(() => {
        this.$indicator.close()
      }, 1000)
    },
    handleClick5 () {
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        this.$indicator.close()
      }, 1000)
    },
    handleClick7 () {
      this.$messagebox('提示', '操作成功')
    },
    handleClick8 () {
      this.$messagebox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
    }
    // handleClick9 () {
    //   this.$messagebox.prompt('请输入姓名').then(({ value, action }) => {
    //     this.$messagebox('提示', '操作成功')
    //   })
    // }
  }
}
</script>
<style scoped>
#home {
  font-size: 20px;
  text-align: center;
}

.mint-button {
  width: 80%;
  margin: 10px auto;
}
</style>
