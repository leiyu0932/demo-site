import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // async nuxtServerInit ({ commit }, { req }) {
  //   // 不需要 跨域
  //   let { data } = await axios.get('http://php.test.huandengpai.com/api/nodejs/user/test')
  //   console.log(data)
  //   if (data.status !== 301) {
  //     commit('SET_USER', data)
  //   }
  // },
  async login ({ commit }, { username, password }) {
    try {
      // const params = new URLSearchParams();
      // params.append('username', username);
      // params.append('password', password);
      const params = {
        username,
        password
      };
      axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.defaults.withCredentials = true;
      console.log(params)
      const { data } = await axios.get('/api/nodejs/user/login.json?username=18611739966&password=123456')
      // const { data } = await axios.post('http://php.test.huandengpai.com/api/nodejs/user/login.json', params)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
