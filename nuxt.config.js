export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ana Maria Hoyos - Artist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      'data-preloader': '1',
      class: 'sm-spacer-left loaded'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/arty/plugins/magnific-popup/magnific-popup.min.css',
    '@/assets/arty/plugins/owl-carousel/owl.carousel.min.css',
    '@/assets/arty/plugins/owl-carousel/owl.theme.default.min.css',
    '@/assets/arty/plugins/justified-gallery/justified-gallery.min.css',
    '@/assets/arty/plugins/sal/sal.min.css',
    '@/assets/arty/css/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/arty/plugins/themify/themify-icons.min.css',
    '@/assets/arty/plugins/simple-line-icons/css/simple-line-icons.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes() {
      const fs = require('fs')
      const path = require('path')
      return fs.readdirSync('./assets/content/section').map((file) => {
        return {
          route: `/section/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/section/${file}`)
        }
      })
    }
  }
}
