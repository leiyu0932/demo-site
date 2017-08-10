<template>
  <div class="container">
    <!-- <h2>{{ items }}</h2> -->
    <ul class="items">
      <li v-for="item in items">
        <nuxt-link :to="'/app/content/detail/'+item.article.id">{{ item.article.title }}</nuxt-link>
        <p>{{ item.article.body }}</p>
      </li>
    </ul>
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from '~/utils/axiosCross'
import Bottom from '~/components/Bottom'

export default {
  components: {
    Bottom
  },
  async asyncData () {
    const { data } = await axios.get('app/content/items')
    console.log(JSON.parse(data.data))
    const info = JSON.parse(data.data)
    const itemsKey = info.json_info.list_key
    return {
      items: JSON.parse(data.data).rows[itemsKey]
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
