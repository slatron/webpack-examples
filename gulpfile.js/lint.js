var gulp   = require('gulp'),
    eslint = require('gulp-eslint'),
    paths  = require('./config').paths;

function lint(cb) {
  return gulp.src(
      [
        paths.DEV_JS_ENTRY,
        paths.DEV_JS_LOCAL,
        paths.DEV_EXCLUDE_TRANSLATIONS,
        paths.DEV_EXCLUDE_UNIT_TESTS
      ],
      {base: 'dev/js'}
    )
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError(), cb);
}

exports.lint = lint;
