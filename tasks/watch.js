/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');
const del = require('del');
const path = require('path');

const global = require('../gulp-config.js');

module.exports = function (options) {
  const filesList = global.getFilesToCopy();

  async function cleaning(file) {
    const config = {
      force: true,
    };

    const filePathSrc = path.relative(path.resolve(global.folder.prod), file).split(`${global.folder.prod}/`)[1];
    const filePathBuild = `../${global.folder.build}/${filePathSrc}`;

    await del(filePathBuild, config);
  }

  return () => {
    gulp.watch(`./html/**/*.html`, gulp.series(global.task.buildHtml, global.task.lintHtml));

    gulp.watch(`./scss/**/*.scss`, gulp.series(global.task.buildStyles, global.task.buildStylesCustom));

    gulp.watch(`./js/**/*.js`, gulp.series(global.task.lintJs, global.task.buildJs));

    gulp.watch(`./vendor_entries/**/*.js`, gulp.series(global.task.buildJsVendors));

    gulp.watch(`./vendor_entries/**/*.scss`, gulp.series(global.task.buildStylesVendors));

    gulp.watch(filesList)
      .on('unlink', (file) => cleaning(file))
      .on('add', gulp.series(global.task.copyFiles));

    gulp.watch([`../${global.folder.build}/**`, `!./${global.folder.build}/**/*.map`])
      .on('change', options.browserSyncInstance.reload)
      .on('unlink', options.browserSyncInstance.reload)
      .on('add', options.browserSyncInstance.reload);
  };
};
