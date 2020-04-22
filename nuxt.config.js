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
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~plugins/i18n.js' }
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
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'zh',
          code: 'tw',
          iso: 'zh-hant',
          file: 'tw.js'
        },
        {
          name: 'en',
          code: 'en',
          iso: 'en-us',
          file: 'en.js'
        },
    ],
    baseUrl: 'https://www.moshi.com/',
    seo: true,
    langDir: 'locales/',
    defaultLocale: 'tw',
    vueI18nLoader: true,
    lazy: true,
    }]
  ],
  router: {
    middleware: ['locale-redirect'],
    linkExactActiveClass: 'active-link',
  },
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
    transpile: ['vue-notifications'],
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
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
}
