const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // Khi deploy Vue app vào thư mục gốc (httpdocs)
  publicPath: '/',

  // Fix 404 khi reload trang hoặc vào subpath
  devServer: {
    historyApiFallback: true
  }
})
