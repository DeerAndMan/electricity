const CompressionPlugin = require('compression-webpack-plugin');//引入compression-webpack-plugin

module.exports = {
    // lintOnSave: false, // 取消Eslint严格模式
    // assetsDir: 'static', // 静态资源(js、css、img、fonts)目录
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : '././',
    productionSourceMap: false,

    devServer: { // 修改启动端口
        // hot: true, // 目标主机
        // open: true,
        port: 14041,
        // overlay: {
        //     warnings: true,
        //     errors: true
        // },
    },
    /*  */
    // chainWebpack: config => {
    //     config.plugin('html').tap(args => {
    //         args[0].title = 'Electricity 园区用电'
    //         return args
    //     })
    //     config
    //         .plugin('webpack-bundle-analyzer')
    //         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // },
    pwa: {
        iconPaths: { // ICON 图标
            favicon32: 'areaxdatetime.svg',
            favicon16: 'areaxdatetime.svg',
            appleTouchIcon: 'areaxdatetime.svg',
            maskIcon: 'areaxdatetime.svg',
            msTileImage: 'areaxdatetime.svg'
        }
    },
    /* 开启Gzip压缩 */
    configureWebpack:config =>{ //打包时对js/css文件进行压缩
        if(process.env.NODE_ENV === 'production'){ //生产环境
            config.plugins.push(
                new CompressionPlugin({
                    /* [file]被替换为原始资产文件名。
                    [path]替换为原始资产的路径。
                    [dir]替换为原始资产的目录。
                    [name]被替换为原始资产的文件名。
                    [ext]替换为原始资产的扩展名。
                    [query]被查询替换。 */
                    filename: '[path][base].gz', // "[path].gz[query]",
                    //压缩算法
                    algorithm: 'gzip',
                    //匹配文件
                    test: /\.js$|\.css$|\.html$/, // /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
                    //压缩超过此大小的文件,以字节为单位
                    threshold: 10240,
                    minRatio: 0.8,
                    //删除原始文件只保留压缩后的文件
                    deleteOriginalAssets: false
                })
            )
        }
    }
}