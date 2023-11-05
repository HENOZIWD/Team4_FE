const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/papago',
    createProxyMiddleware({
      target: 'https://openapi.naver.com/v1/',
      changeOrigin: true,
    }),
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://k0babfb5beefaa.user-app.krampoline.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};
