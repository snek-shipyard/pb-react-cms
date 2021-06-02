/* craco.config.js */
const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@API': path.resolve(__dirname, 'src/api'),
      '@Types': path.resolve(__dirname, 'src/types')
    }
  }
}
