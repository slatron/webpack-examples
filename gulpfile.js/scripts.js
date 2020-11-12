var gulp       = require('gulp'),
    paths      = require('./config').paths,
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat-util'),
    ngAnnotate = require('gulp-ng-annotate'),
    gulpif     = require('gulp-if'),
    getProdTag = require('./utils/getProdTag'),
    tag        = getProdTag(),
    prod       = tag.length ? true : false;

function scripts(cb) {
  return gulp.src(
      /**
      * Gather angular-base first,
      * then vendor files,
      * then util files,
      * then main angular app declaration,
      * then all angular modules
      * then exclude unit test specs
      */
      [
        'dev/js/angular_base/jquery.js',
        'dev/js/angular_base/jquery-ui.js',
        'dev/js/angular_base/angular.js',
        'dev/js/angular_base/moment.js',
        paths.DEV_D3,
        paths.DEV_VENDOR,
        paths.DEV_JS_ENTRY,
        paths.DEV_JS_LOCAL,
        paths.DEV_LANGUAGES,
        paths.DEV_EXCLUDE_MIGRATION_PAGES,
        paths.DEV_EXCLUDE_MIGRATION_COMPONENTS,
        paths.DEV_EXCLUDE_UNIT_TESTS
      ],
      {base: 'dev/js'}
    )
    .pipe(
      prod ?
        concat(paths.OUT_JS_FILENAME + '.' + tag + '.js') :
        concat(paths.OUT_JS_FILENAME + '.js')
    )
    .pipe(ngAnnotate())
    .pipe(gulpif(prod, uglify()))
    .pipe(gulp.dest(paths.APP_ASSETS_JS), cb);
}

exports.scripts = scripts;
