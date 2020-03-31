/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');

const global = require('../gulp-config.js');

module.exports = function (options) {

  return () => {
    gulp.watch(`./html/**/*.html`, gulp.series(global.task.buildHtml, global.task.lintHtml));

    gulp.watch(`./scss/**/*.scss`, gulp.series(global.task.buildStyles, global.task.buildStylesCustom));

    gulp.watch(`./js/**/*.js`, gulp.series(global.task.lintJs, global.task.buildJs));

    gulp.watch(`./vendor_entries/**/*.js`, gulp.series(global.task.buildJsVendors));

    gulp.watch(`./vendor_entries/**/*.scss`, gulp.series(global.task.buildStylesVendors));

    gulp.watch([`../${global.folder.build}/**`, `!../${global.folder.build}/**/*.map`])
      .on('change', options.browserSyncInstance.reload)
      .on('unlink', options.browserSyncInstance.reload)
      .on('add', options.browserSyncInstance.reload);
  };
};
