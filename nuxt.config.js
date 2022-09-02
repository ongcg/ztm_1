export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ztm-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyA0zXryYDS3CQh1AHIUQ2zyZIptTXNJGeA",
          authDomain: "ztm-2-ea401.firebaseapp.com",
          projectId: "ztm-2-ea401",
          storageBucket: "ztm-2-ea401.appspot.com",
          messagingSenderId: "744734004634",
          appId: "1:744734004634:web:c9859873ef42d866ee1623",
          measurementId: "G-JCLKD0G235"
      },
      services: {
        firestore: true
      }
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Oswald: true,
      'Lilita One': true,
      'Josefin Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  }
}