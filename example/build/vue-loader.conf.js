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
            "transform-runtime"
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
