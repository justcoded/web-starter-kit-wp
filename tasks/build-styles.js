/**
 * Build styles for application from SASS
 */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const gcmq = require('postcss-sort-media-queries');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

sass.compiler = require('sass');

module.exports = function () {
  const production = global.isProduction();
  const plugins = [
    autoprefixer(),
  ];

  production ? plugins.push(gcmq({ sort: global.buildStyles.sortType, })) : null;

  return () => {
    return gulp.src(`./scss/${global.file.mainStylesSrc}`)
      .pipe(gulpif(!production, sourcemaps.init({ loadMaps: true, })))
      .pipe(sass.sync({ sourceMap: !production, }))
      .on('error', (error) => notifier.error(error.message, 'Main Sass compiling error', done))
      .pipe(postcss(plugins))
      .pipe(gulpif(!production, sourcemaps.write('./')))
      .pipe(gulp.dest(`../${global.folder.build}/css`));
  };
};
