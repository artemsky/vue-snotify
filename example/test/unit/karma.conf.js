// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: [
      {pattern: 'specs/**/*.spec.ts', watch: false}
    ],
    preprocessors: {
      'specs/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    plugins: [
      // Launchers
      'karma-chrome-launcher',

      // Test Libraries
      'karma-jasmine',

      // Preprocessors
      'karma-webpack',
      'karma-sourcemap-loader',

      // Reporters
      'karma-spec-reporter',
      'karma-coverage'
    ],
    port: 9876,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
};
