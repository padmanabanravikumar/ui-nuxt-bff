// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    adminProxyUrl: 'https://675ab411099e3090dbe5aa5c.mockapi.io',
    orderProxyUrl: 'https://675ab411099e3090dbe5aa5c.mockapi.io'
  }
})
