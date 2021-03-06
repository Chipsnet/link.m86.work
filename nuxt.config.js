export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'link.m86.work',
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
      "nuxt-font-loader"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      ["@nuxtjs/google-adsense", {
          id: "ca-pub-7860710257272145",
      }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  fontLoader: {
      url: "https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
  },

  server: {
      host: "0.0.0.0"
  }
}
