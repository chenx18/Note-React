
// http-proxy-middleware 过去写法
// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(proxy("/api", {
//     target: "http://183.62.157.202:20000",
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": ""
//     }
//   }))
// }


// 如启动时报错如下
//  proxy is not a function
//  error Command failed with exit code 1.

// 修改为一下写法 https://www.npmjs.com/package/http-proxy-middleware
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { 
    target: 'http://183.62.157.202:20000',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }));
};

