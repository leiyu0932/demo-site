import axios from '~/utils/axiosCross'
import Cookies from '~/utils/js.cookie'

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
  // nuxtServerInit ({ context.commit }, { req }) {
  // console.log(req)
  // 不需要 跨域
  // let { data } = await axios.get('http://php.test.huandengpai.com/api/nodejs/user/test')
  // console.log(data)
  // if (data.status !== 301) {
  //   context.commit('SET_USER', data)
  // }
  // },
  async login (context, { username, password }) {
    try {
      // const params = new URLSearchParams()
      // params.append('username', '18611739966')
      // params.append('password', '123456')
      const params = {
        username: 18611739966,
        password: 123456
      }
      // axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      // axios.defaults.withCredentials = true
      // console.log(params)
      const response = await axios.post('ajax/user/login', params)
      console.log(window.location.origin)
      if (window.location.origin === 'http://localhost:3001') {
        Cookies.set(response.data.data.session.name, response.data.data.session.id, { expires: 7, path: '' })
      }
      context.commit('SET_USER', response.data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async reg ({ context }, { username, password }) {
    try {
      const params = {
        username,
        password
      }
      const response = await axios.post('ajax/user/reg', params)
      if (process.env.NODE_ENV === 'development') {
        Cookies.set(response.data.data.session.name, response.data.data.session.id, { expires: 7, path: '' })
      }
      context.commit('SET_USER', response.data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }

}
