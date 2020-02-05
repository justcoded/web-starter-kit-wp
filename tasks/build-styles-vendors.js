/**
 * Build styles for vendor from SASS
 */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const notify = require('gulp-notify');

sass.compiler = require('sass');

module.exports = function (options) {
  const plugins = [
    cssimport(),
  ];

  options.error.title = 'Sass compiling error';

  return () => {
    return gulp.src(`./vendor_entries/vendor.scss`)
      .pipe(sass.sync())
      .on('error', notify.onError(options.error))
      .pipe(postcss(plugins))
      .pipe(gulp.dest(`../${options.dest}/css`));
  };
};
