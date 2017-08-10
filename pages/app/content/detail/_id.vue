<template>
  <div class="detail">
    <nuxt-link :to="'/app/content/items'">返回</nuxt-link>
    <h3>{{ info.title }}</h3>
    <p>{{ info.body }}</p>
    <img :src="info.picture.src" alt="">
  </div>
</template>

<script>
import axios from '~/utils/axiosCross'

export default {
  validate ({ params }) {
    console.log(params)
    return !isNaN(+params.id)
  },
  async asyncData ({ params, error, redirect }) {
    try {
      const { data } = await axios.get(`app/content/detail?id=${+params.id}`)
      console.log(data)
      if (data.status === 401) {
        redirect('/app/user/login')
      }
      return {
        info: JSON.parse(data.data.rows).nodes[0].node
      }
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
.detail {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
