var gulp        = require('gulp'),
    paths       = require('./config').paths;

function favicon(cb) {
  return gulp.src('dev/favicon.ico')
    .pipe(gulp.dest(paths.APP), cb);
}

exports.favicon = favicon;
