var config = {

  paths: {
    DEV: 'dev',
    DEV_PORT: '2701',
    DEV_ANALYTICS: 'dev/js/analytics/analytics.js',
    DEV_ALL: 'dev/**/*',
    DEV_HTML: 'dev/**/*.html',
    DEV_JS: 'dev/js/**/*.js',
    DEV_JS_ENTRY: 'dev/js/app.js',
    DEV_JS_LOCAL: 'dev/js/angular_app/**/*.js',
    DEV_STYLES: 'dev/scss/**/*.scss',
    DEV_EXCLUDE_UNIT_TESTS: '!**/*Spec.js',
    DEV_EXCLUDE_TRANSLATIONS: '!dev/js/angular_app/translations/*.js',
    DEV_EXCLUDE_MIGRATION_PAGES: '!dev/pages/**/*',
    DEV_EXCLUDE_MIGRATION_COMPONENTS: '!dev/components/**/*',
    DEV_EXCLUDE_MIGRATION_CSS: '!dev/scss/main-react.scss',
    DEV_D3: 'dev/js/vendor/d3/*.js',
    DEV_VENDOR: 'dev/js/vendor/*.js',
    DEV_LANGUAGES: 'dev/js/vendor/lang/*.js',
    DEV_TRANSLATION_FILES: 'pot/',
    SOURCE_TRANSLATIONS: 'po/**/*.po',
    EXCLUDE_NEW_TRANSLATIONS: '!po/**/*_new_translations.po',
    DEST_TRANSLATION_MODULES: 'dev/js/angular_app/translations',
    OUT_JS_FILENAME: 'main',
    APP: 'app',
    APP_ALL: 'app/**/*',
    APP_ASSETS: 'app/assets',
    APP_ASSETS_JS: 'app/assets/js',
    APP_ASSETS_CSS: 'app/assets/css',
    APP_ASSETS_IMAGES: 'app/assets/images',
    APP_FONTS: 'app/fonts'
  },

  HTML_HEAD: '<head>\n' +
    '    <meta charset="utf-8" />\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>\n' +
    '    <title>Wellspring by Wellspring Worldwide</title>\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1" />\n' +
    '    <script src="assets/js/analytics.js"></script>\n' +
    '    <link rel="stylesheet" href="assets/css/main.min.css" />\n' +
    '    <link rel="apple-touch-icon" ng-href="assets/images/icon-120x120.png" />\n' +
    '    <link rel="apple-touch-icon" sizes="76x76" ng-href="assets/images/icon-76x76.png" />\n' +
    '    <link rel="apple-touch-icon" sizes="120x120" ng-href="assets/images/icon-120x120.png" />\n' +
    '    <link rel="apple-touch-icon" sizes="152x152" ng-href="assets/images/icon-152x152.png" />\n' +
    '    <link rel="apple-touch-icon" sizes="180x180" ng-href="assets/images/icon-180x180.png" />\n' +
    '    <link rel="icon" sizes="192x192" ng-href="assets/images/icon-192x192.png" />\n' +
  '  </head>\n'

};

module.exports = config;
