module.exports = {
  task: {
    lintHtml: 'lint-html',
    lintJs: 'lint-js',
    fixJs: 'fix-js',
    buildHtml: 'build-html',
    buildJs: 'build-js',
    buildStyles: 'build-styles',
    buildStylesCustom: 'build-styles-custom',
    buildStylesVendors: 'build-styles-vendors',
    buildImages: 'build-images',
    cleanBuild: 'clean-build',
    browserSync: 'browser-sync',
    watch: 'watch',
    build: 'build',
  },
  folder: {
    tasks: 'tasks',
    // dev: 'develop',
    build: 'public',
    temp: '.temp',
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    buildJs: 'jquery.main.js',
    vendorJs: 'vendor.js',
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
  buildJs: {
    externalLibs: {
      jquery: 'jQuery',
    },
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
    return process.argv[process.argv.length - 1] === this.task.build;
  },
  isFixJs() {
    return process.argv[process.argv.length - 1] === this.task.fixJs;
  }
};
