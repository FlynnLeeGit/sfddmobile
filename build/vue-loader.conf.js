var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var saladConf = require('../localConfig').saladConf

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [require('postcss-salad')(saladConf)],
  transformToRequire: {
    img: 'src',
    // for webp support
    source: 'srcset'
  }
}
