// Vue.config.js 配置选项


const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    indexPath: 'index.html', // 相对于打包路径index.html的路径
    outputDir: 'dist',
    assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD,

    // 配置 webpack-dev-server 行为。

    devServer: {

        open: true,

        host: '192.168.0.102',
        // host: 'localhost',

        port: 8888,

        https: false,

        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

        proxy: {

            '/api': {

                target: "https://baidu.com",

                changeOrigin: true,

                secure: false,

                pathRewrite: {

                    "^/api": ""

                }

            }

        }, // string | Object

        before: app => { }

    },


    //  调整内部的 webpack 配置

    configureWebpack: () => {
    }, //(Object | Function)

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve(__dirname, 'src'))
    },

}