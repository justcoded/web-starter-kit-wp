/**
 * Build js
 */
'use strict';

const webpack = require('webpack');
const path = require('path');

const notifier = require('../helpers/notifier');
const global = require('../gulp-config.js');

module.exports = function () {
  return (done) => {
    try {
      const config = {
        mode: 'none',
        entry: `./js/${global.file.mainJs}`,
        output: {
          path: path.resolve(`../${global.folder.build}`, `js/`),
          filename: global.file.buildJs,
        },
        optimization: {
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/](node_modules|vendor_entries)[\\/]/,
                filename: global.file.vendorJs,
              },
            },
          },
          minimize: false,
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
            }
          ]
        },
        externals: global.buildJs.externalLibs,
      };

      webpack(config, (error, stats) => {
        if (stats) {
          return done();
        }

        if (error) {
          throw new Error(error);
        }

        console.log(
          stats.toString({
            version: false,
            hash: false,
            chunks: false,
            colors: true,
          })
        );
      });
    } catch (error) {
      notifier.error(error, 'JS compiling error', done);
    }
  };
};
