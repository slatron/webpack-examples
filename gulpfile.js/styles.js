var gulp         = require('gulp'),
    paths        = require('./config').paths,
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss     = require('gulp-clean-css'),
    rename       = require('gulp-rename');

function styles(cb) {
  return gulp.src(paths.DEV_STYLES)
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(paths.APP_ASSETS_CSS))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.APP_ASSETS_CSS), cb);
}

exports.styles = styles;
