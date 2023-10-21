export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CROWD',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'CROWD / C-lock-row',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'CROWD',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://clockrow.github.io/crowd/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'CROWD',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'CROWD / C-lock-row',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://clockrow.github.io/crowd/twitter_card.png',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@C_lock_row' },
      { name: 'twitter:creator', content: '@C_lock_row' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        href: './favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: './favicon.png',
      },
    ],
    script: [
      {
        async: true,
        src: 'https://platform.twitter.com/widgets.js',
        charset: 'utf-8',
      },
    ],
  },

  // __dangerouslyDisableSanitizers: ['script'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  router: {
    base: '/crowd/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/vuetify'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    // '@aceforth/nuxt-optimized-images',
    '@nuxt/image',
  ],

  // optimizedImages: {
  //   optimizeImages: true
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
  ],

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6LdGW_MeAAAAAMjCynEYxHAk5uO2Yh1L9BCPn4iz', // Site key for requests
    version: 2, // Version
    language: 'ja',
    size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   defaultAssets: true,
  //   theme: {
  //     dark: false,
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
