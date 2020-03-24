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
          throw new Error(warning.message);
        },
      });

      await bundle.write({
        file: `../${global.folder.build}/js/${global.file.publicJs}`,
        format: 'iife',
        name: 'main',
        sourcemap: false,
      });
    } catch (error) {
      notifier.error(error, 'Main JS compiling error', done);
    }
  };
};
