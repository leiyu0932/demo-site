module.exports = {
  srcDir: 'app/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/app/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_34k2qe0ajxtro1or.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/app/',
    build: {
      vendor: ['axios', 'mint-ui']
    },
    babel:{
      "plugins": [["component", [
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]]],
      "comments": true
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/mint-ui', ssr: true }
  ]
}
