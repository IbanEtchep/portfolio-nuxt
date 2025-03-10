// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],
  content: {
    locales: ['en', 'fr', 'eu'],
    defaultLocale: 'en'
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'fr', file: 'fr-FR.js', name: 'Français' },
      { code: 'eu', file: 'eu.js' , name: 'Euskara' },
    ],
    compilation: {
      strictMessage: false,
    }
  }
})
