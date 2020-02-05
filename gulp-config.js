module.exports = {
  folder: {
    tasks: 'tasks',
    build: 'public',
    temp: '.temp',
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    publicJs: 'jquery.main.js',
    vendorJs: 'vendor.js',
    vendorJsTemp: 'vendor.temp.js',
    mainStyles: 'styles.css',
    vendorStyles: 'vendor.css',
  },
  buildHtml: {
    templates: 'html/templates',
    dest: 'public',
  },
  buildStyles: {
    // Sorting type css media queries: 'desktop-first' || 'mobile-first'
    sortType: 'desktop-first',
  },
  task: {
    lintHtml: 'lint-html',
    lintJs: 'lint-js',
    buildHtml: 'build-html',
    buildJs: 'build-js',
    buildJsVendors: 'build-js-vendors',
    buildStyles: 'build-styles',
    buildStylesCustom: 'build-styles-custom',
    buildStylesVendors: 'build-styles-vendors',
    cleanBuild: 'clean-build',
    browserSync: 'browser-sync-server',
    watch: 'watch',
  },
  error: {
    icon: './sys_icon/error_icon.png',
    wait: true,
  },
  getFilesForStylesCustom: function () {
    return {
      files: [],
      isGcmq: false,
    };
  },
};
