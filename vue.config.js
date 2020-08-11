module.exports = {
  devServer: {
    port: 3333,
    open: true,
    // proxy:{},
    host: '0.0.0.0',
    hot: true
  },
  // css要了另外写在外面
  css: {
    loaderOptions: {
      sass: {
        // prependData
        prependData: `@import "~@/assets/scss/_variable.scss";`,
      },
    },
  },
}