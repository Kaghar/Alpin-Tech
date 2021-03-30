export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alpin-tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a landing page for Pyramid agency' },
      
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/hooper.js' },
    { src: './plugins/hooperSlide.js' },
    { src: './plugins/hooperDots.js' },
    { src: './plugins/hooperCtrls.js' },



  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    apiPrefix: 'content-api',
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     postcss: {
            preset: {
                stage: 1,
                autoprefixer: {
                    grid: true
                }
            }
        }
  },


  // Style resources configuration: https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: [
        '~/assets/scss/main.scss',
    ]
  },
  // vvvvvvvvvvvvvvvvvvvv  this script is added for IE reaching content, might not be needed on build? yet to be tested 
  script: [
  {
    src:
      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.min.js'
  }
  ],
  // ^^^^^^^^^^^^^^^^^^^^^ this script is added for IE reaching content, might not be needed on build? yet to be tested

}
