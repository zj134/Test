module.exports = {
    devServer: {
        port: 8080,   // 前端vue端口号修改
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:9090',//后端接口地址
        //         changeOrigin: true,//是否允许跨越
        //         pathRewrite: {
        //             '^/': '/'//重写,
        //         }
        //     }
        //
        // }
    }
}