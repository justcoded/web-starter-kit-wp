/**
 * Lint ES
 */
'use strict';

const CLIEngine = require('eslint').CLIEngine;

const global = require('../gulp-config.js');

module.exports = function (options) {
  const fixJs = global.isFixJs();
  const cli = new CLIEngine({
    fix: fixJs,
    useEslintrc: true,
  });

  return done => {
    const report = cli.executeOnFiles(['./js/**/*.js']);
    const formatter = cli.getFormatter();

    if (formatter(report.results) !== '') console.log(formatter(report.results));

    CLIEngine.outputFixes(report);

    return done();
  };
};
