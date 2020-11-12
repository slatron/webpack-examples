var gulp         = require('gulp'),
    paths        = require('./config').paths,
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss     = require('gulp-clean-css'),
    rename       = require('gulp-rename');

function styles(cb) {
  return gulp.src([paths.DEV_STYLES, paths.DEV_EXCLUDE_MIGRATION_CSS])
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: [
        'since 2015-01-01', // Year the project started
        'safari >= 5',      // To handle webkit driver in Jenkins smoke-tests
        'ie >= 8'           // IE support from the original browser support list
      ]
    }))
    .pipe(gulp.dest(paths.APP_ASSETS_CSS))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.APP_ASSETS_CSS), cb);
}

exports.styles = styles;
