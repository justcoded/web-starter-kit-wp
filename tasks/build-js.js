/**
 * Build js
 */
'use strict';

const { rollup } = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

module.exports = function () {

  return async (done) => {
    try {
      const bundle = await rollup({
        input: `./js/${global.file.mainJs}`,
        plugins: [
          resolve(),
          babel(),
        ],
        onwarn(warning, warn) {
          // skip certain warnings
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' 
            || warning.code === 'THIS_IS_UNDEFINED' 
            || warning.code === 'NON_EXISTENT_EXPORT'
          )
            return;

          throw new Error(warning.message);
        },
      });

      await bundle.write({
        file: `../${global.folder.build}/js/${global.file.buildJs}`,
        format: 'iife',
        name: 'main',
        sourcemap: false,
      });
    } catch (error) {
      notifier.error(error, 'Main JS compiling error', done);
    }
  };
};
