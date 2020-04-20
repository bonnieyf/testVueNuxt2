
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {  rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#444',height:"2px",duration:5000 },
  /*
  ** Global CSS
  */
  css: [
    'bulma',
    './assets/sass/web.sass',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n.js',
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://v4-be-dev.moshi.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    middleware: 'i18n',
    linkExactActiveClass: 'active-link',
    routes: [{
      path: '/:lang',
      children: [
        {
          path: 'home',
          component: '_lang/index.vue'
        },
        {
          path: 'connect',
          component: '_lang/connect.vue'
        },
        {
          path: 'protect',
          component: '_lang/protect.vue'
        },
        {
          path: 'product',
          component: '_lang/product.vue'
        },
      ]
    }]
  },
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
}
