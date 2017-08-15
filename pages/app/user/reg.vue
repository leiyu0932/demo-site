<template>
  <div class="container">
    <h2>注册</h2>
    <form @submit.prevent="reg">
      <p>Username:
        <input type="text" v-model="formUsername" name="username" />
      </p>
      <p>Password:
        <input type="password" v-model="formPassword" name="password" />
      </p>
      <button type="submit">注册</button>
      <nuxt-link to="/app/user/login">登入</nuxt-link>
    </form>
  </div>
</template>
<script>
// import axios from '~/utils/axiosCross'
// import { handle } from '~/utils/handle'

export default {
  name: 'login',
  layout: 'main',
  middleware: 'auth',
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async reg () {
      try {
        await this.$store.dispatch('reg', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        // this.$router.push('/app/user')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
<style scoped>
input {
  margin: 20px;
  border: 1px solid #000
}

button {
  font-size: 20px;
}
</style>
