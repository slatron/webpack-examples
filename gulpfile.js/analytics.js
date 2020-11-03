var gulp  = require('gulp'),
    paths = require('./config').paths;

function analytics(cb) {
  return gulp.src(paths.DEV_ANALYTICS)
    .pipe(gulp.dest(paths.APP_ASSETS_JS), cb);
}

exports.analytics = analytics;
