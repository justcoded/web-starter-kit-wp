module.exports = {
  task: {
    lintHtml: 'lint-html',
    lintJs: 'lint-js',
    fixJs: 'fix-js',
    buildHtml: 'build-html',
    buildJs: 'build-js',
    buildJsVendors: 'build-js-vendors',
    buildStyles: 'build-styles',
    buildStylesCustom: 'build-styles-custom',
    buildStylesVendors: 'build-styles-vendors',
    buildImages: 'build-images',
    cleanBuild: 'clean-build',
    copyFiles: 'copy-files',
    copyFilesProd: 'copy-files-production',
    browserSync: 'browser-sync',
    watch: 'watch',
    prod: 'build',
  },
  folder: {
    tasks: 'tasks',
    src: 'src',
    dev: 'develop',
    build: 'public',
    temp: '.temp',
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    buildJs: 'jquery.main.js',
    vendorJs: 'vendor.js',
    vendorJsComp: 'vendor-compile.js',
    vendorJsTemp: 'vendor.temp.js',
    mainStylesSrc: 'styles.scss',
    mainStyles: 'styles.css',
    vendorStylesSrc: 'vendor.scss',
    vendorStyles: 'vendor.css',
  },
  buildHtml: {
    templates: 'html/templates',
  },
  buildStyles: {
    // Sorting type css media queries: 'desktop-first' || 'mobile-first'
    sortType: 'desktop-first',
  },
  error: {
    sound: true,
    title: '< SYSTEM ERROR >',
    icon: './system_files/icons/error_icon.png',
    wait: true,
  },
  getFilesForStylesCustom() {
    return {
      files: [],
      isGcmq: false,
    };
  },
  isProduction() {
    return process.argv[process.argv.length - 1] === this.task.prod;
  },
  isFixJs() {
    return process.argv[process.argv.length - 1] === this.task.fixJs;
  }
};
