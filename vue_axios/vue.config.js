const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api1': {//匹配所有以'/api1'开头的请求路径
        target:'http://localhost:5000',//代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/apil': ''}
      },
      '/api2': {//匹配所有以'/api2'开头的请求路径
        target:'http://localhost:5001',//代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
  
})
