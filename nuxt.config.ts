// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  icon: {
    localApiEndpoint: '/icon-api/',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      // { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'fr', file: 'fr-FR.js', name: 'Français' },
      // { code: 'eu', file: 'eu.js' , name: 'Euskara' },
    ],
    compilation: {
      strictMessage: false,
    },
  }
})
