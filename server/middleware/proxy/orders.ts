import { defineEventHandler } from 'h3'
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: 'https://675ab411099e3090dbe5aa5c.mockapi.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api/orders': ''
  },
  pathFilter: [
    '/api/orders'
  ],
  logger: console
});

export default defineEventHandler(async (event) => {
  await new Promise((resolve, reject) => {
    const next = (err?: Error) => {
      if (err) {
        console.error('Proxy error:', err.message);
        reject(err)
      } else {
        resolve(true)
      }
    }

    apiProxy(event.node.req, event.node.res, next)
  })
})