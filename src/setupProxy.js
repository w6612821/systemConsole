/*
 * @Author: jianwen.Wang
 * @Date: 2020-09-28 14:28:16
 * @LastEditTime: 2020-12-02 11:44:45
 * @LastEditors: jiawen.wang
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:7001',
            changeOrigin: true,
            secure: false, // 接受运行在 https 上的服务
            pathRewrite: {
                "^/": "/"
            }
        }
        ));
}