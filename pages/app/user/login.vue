<template>
  <div class="container">
    <form @submit.prevent="login">
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
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
    async login () {
      try {
        await this.$store.dispatch('login', {
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
  // async created () {
  //   console.log(this)
  //   const response = await axios.get('nodejs/user/test')
  //   console.log(response.data)
  //   const callback = data => {
  //     context.store.commit('SET_USER', data)
  //     context.redirect('/app/user')
  //   }
  //   handle({
  //     context: {
  //
  //     },
  //     response,
  //     callback
  //   })
  // }
}
</script>
<style scoped>
  input{
    margin: 20px;
    border: 1px solid #000
  }
  button{
    font-size: 20px
  }
</style>
