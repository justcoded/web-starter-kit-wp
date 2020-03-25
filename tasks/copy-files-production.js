/**
 * Copy folders to the production folder
 */
'use strict';

const gulp = require('gulp');

const global = require('../gulp-config.js');

module.exports = function () {

  return (done) => {
    gulp.src(`../${global.folder.build}/css/**`, { buffer: false, })
      .pipe(gulp.dest(`../${global.folder.prod}/css`));

    gulp.src(`../${global.folder.build}/js/**`, { buffer: false, })
      .pipe(gulp.dest(`../${global.folder.prod}/js`));

    gulp.src(`../${global.folder.build}/**/*.html`, { buffer: false, })
      .pipe(gulp.dest(`./html_compiled`));

    done();
  };
};
