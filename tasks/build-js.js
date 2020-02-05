/**
 * Build custom js
 */
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');

module.exports = function (options) {
  const babelConfig = {
    presets: ['@babel/preset-env'],
  };

  options.error.title = 'JS compiling error';

  return () => {
    return browserify({
      entries: `./js/${options.mainJs}`,
    })
      .transform('babelify', babelConfig)
      .bundle().on('error', notify.onError(options.error))
      .pipe(source(options.publicJs))
      .pipe(gulp.dest(`../${options.dest}/js`));
  };
};
