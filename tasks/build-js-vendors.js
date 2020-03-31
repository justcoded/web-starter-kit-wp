/**
 * Build js vendor (concatenate vendors array)
 */
'use strict';

const gulp = require('gulp');
const filesExist = require('files-exist');
const concat = require('gulp-concat');
const { rollup } = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');
const vendorFiles = require(`../vendor_entries/${global.file.vendorJs}`);

module.exports = function () {

  return async (done) => {
    try {
      const bundle = await rollup({
        input: `./vendor_entries/${global.file.vendorJsComp}`,
        treeshake: false,
        plugins: [
          resolve(),
          babel(),
        ],
        onwarn(warning, warn) {
          throw new Error(warning.message);
        },
      });

      const tempJs = await bundle.write({
        file: `./${global.folder.temp}/js/${global.file.vendorJsTemp}`,
        format: 'iife',
        name: 'vendor',
        sourcemap: false,
      });
      const tempJsFileName = tempJs.output[0].fileName;

      gulp.src(filesExist([...vendorFiles, `./${global.folder.temp}/js/${tempJsFileName}`]))
        .pipe(concat(global.file.vendorJs))
        .pipe(gulp.dest(`../${global.folder.build}/js`));
    } catch (error) {
      notifier.error(error, 'Vendor JS compiling error', done);
    }
  };
};
