const path = require('path')
// optimizeFonts: false,

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname,'styles')]
  }
}
