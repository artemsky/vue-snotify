const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const babel = utils.requireJSON('../.babelrc');

module.exports = {
  loaders: {...utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
    js: `babel-loader?${JSON.stringify(
      {
        ...babel, ...{
          "plugins": [
            "syntax-class-properties",
            "transform-class-properties",
            "transform-runtime",
            "transform-object-rest-spread",
          ]
        }
      }
      )}`},
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
