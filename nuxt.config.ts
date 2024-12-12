// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  serverHandlers: [{
    route: '/api/orders',
    handler: '~/server/middleware/proxy/orders.ts'
  }, {
    route: '/api/admin',
    handler: '~/server/middleware/proxy/admin.ts'
  }],
  ssr: false
})
