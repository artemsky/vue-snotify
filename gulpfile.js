/* eslint-disable */
const gulp = require('gulp'),
  path = require('path'),
  rollup = require('gulp-rollup'),
  rename = require('gulp-rename'),
  del = require('del'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  replace = require('rollup-plugin-replace'),
  vue = require('rollup-plugin-vue'),
  babel = require('rollup-plugin-babel'),
  cjs = require('rollup-plugin-commonjs'),
  node = require('rollup-plugin-node-resolve'),
  inject = require('gulp-inject-string');

const {version, license, author, name} = require('./package.json');
const banner =
  '/**\n' +
  ' * ' + name + ' v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' ' + author.name + ' <' + author.email + '>\n' +
  ' * @license ' + license + '\n' +
  ' */\n';

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'src');
const tmpFolder = path.join(rootFolder, '.tmp');
const distFolder = path.join(rootFolder, 'dist');

/**
 * 1. Delete /dist folder
 */
gulp.task('clean:dist', function () {

  // Delete contents but not dist folder to avoid broken npm links
  // when dist directory is removed while npm link references it.
  return deleteFolders([distFolder + '/**', '!' + distFolder]);
});

/**
 * 2. Clone the /src folder into /.tmp. If an npm link inside /src has been made,
 *    then it's likely that a node_modules folder exists. Ignore this folder
 *    when copying to /.tmp.
 */
gulp.task('copy:source', function () {
  return gulp.src([`${srcFolder}/**/*`, `!${srcFolder}/node_modules`])
    .pipe(gulp.dest(tmpFolder));
});


/**
 * 3. Run rollup inside the /build folder to generate our Flat ES module and place the
 *    generated file into the /dist folder
 */
gulp.task('rollup:fesm', function () {
  return gulp.src(`${tmpFolder}/**/*.js`)
  // transform the files here.
    .pipe(rollup(generateRollupOptions({
      format: 'es',
    })))
    .pipe(inject.prepend(banner))
    .pipe(rename('vue-snotify.js'))
    .pipe(gulp.dest(distFolder));
});

/**
 * 4. Run rollup inside the /build folder to generate our UMD module and place the
 *    generated file into the /dist folder
 */
gulp.task('rollup:umd', function () {
  return gulp.src(`${tmpFolder}/**/*.js`)
  // transform the files here.
    .pipe(rollup(generateRollupOptions({
      format: 'umd',
      exports: 'named',
      moduleName: 'ng-snotify',
    })))
    .pipe(inject.prepend(banner))
    .pipe(gulp.dest(distFolder));
});


/**
 * 5. Copy package.json from /src to /dist
 */
gulp.task('copy:manifest', function () {
  return gulp.src([`${srcFolder}/package.json`])
    .pipe(gulp.dest(distFolder));
});

/**
 * 6. Copy README.md from / to /dist
 */
gulp.task('copy:readme', function () {
  console.log(path.join(rootFolder, 'README.MD'));
  return gulp.src([path.join(rootFolder, 'README.MD')])
    .pipe(gulp.dest(distFolder));
});

/**
 * 7. Delete /.tmp folder
 */
gulp.task('clean:tmp', function () {
  return deleteFolders([tmpFolder]);
});

/**
 * 8. Compile styles into separate bundle
 */
gulp.task('styles:build', function () {
  return gulp.src([`${srcFolder}/styles/*.scss`])
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: ["last 2 versions", "safari >= 7"], cascade: false})
    ]))
    .pipe(gulp.dest(`${distFolder}/styles`));
});

/**
 * 9. Copy styles sources to our dist folder
 */
gulp.task('styles:copy', function () {
  return gulp.src([`${srcFolder}/styles/**`])
    .pipe(gulp.dest(`${distFolder}/styles`));
});

/**
 * 9. Copy manifest, readme, to our dist folder
 */
gulp.task('copy', gulp.parallel('copy:manifest', 'copy:readme'));

gulp.task('compile', gulp.series(
  'copy:source',
  gulp.parallel('rollup:fesm', 'rollup:umd'),
  'clean:tmp',
  (done) => {
    console.log('LIBRARY: compilation finished successfully');
    done();
  }
));

/**
 * Watch for any change in the /src folder and compile files
 */
gulp.task('watch', function () {
  gulp.watch(`${srcFolder}/**/*`, gulp.parallel('compile'));
  gulp.watch(`${srcFolder}/styles/**`, gulp.parallel('styles:build'));
});

gulp.task('clean', gulp.parallel('clean:dist', 'clean:tmp'));

gulp.task('styles:build', gulp.parallel('styles:build', 'styles:copy', (done) => {
  console.log('STYLES: compilation finished successfully');
  done();
}));

gulp.task('build', gulp.series(
  'clean',
  'compile',
  'copy',
  'styles:build'
));

gulp.task('default', gulp.series(
  'build',
  'watch'
));


/**
 * Deletes the specified folderva
 * @param folders
 */
function deleteFolders(folders) {
  return del(folders);
}

/**
 * Generate configuration object for rollup
 * @param options
 * @returns {*}
 */
function generateRollupOptions(options) {
  return Object.assign({
    // Bundle's entry point
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
    entry: `${tmpFolder}/index.js`,

    // Allow mixing of hypothetical and actual files. "Actual" files can be files
    // accessed by Rollup or produced by plugins further down the chain.
    // This prevents errors like: 'path/file' does not exist in the hypothetical file system
    // when subdirectories are used in the `src` directory.
    allowRealFiles: true,

    // A list of IDs of modules that should remain external to the bundle
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
    external: [
      'vue',
      'Vue'
    ],

    // Format of generated bundle
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
    format: 'umd',

    // Export mode to use
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#exports
    exports: 'named',

    // The name to use for the module for UMD/IIFE bundles
    // (required for bundles with exports)
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#modulename
    // moduleName: 'vue-snotify',

    // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals
    globals: {
      vue: 'Vue'
    },

    plugins: [
      node({
        extensions: ['.js', '.vue']
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      cjs(),
      vue({
        compileTemplate: true
      }),
      babel({
          babelrc: false,
          "presets": [
            [
              "env",
              {
                "modules": false,
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7", "not ie <= 8"]
                }
              }
            ],
            "stage-2"
          ],
          "plugins": [
            "syntax-class-properties",
            "transform-class-properties",
            "transform-object-rest-spread"
          ],
          "env": {
            "test": {
              "presets": ["env", "stage-2"],
              "plugins": [
                "istanbul"
              ]
            }
          }
        }
      )
    ]

  }, options)
}
