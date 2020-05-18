module.exports = {
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      scss: {
        prependData: `@import '@/assets/sass/_helpers.scss';`,
      },
    },
  },
}
