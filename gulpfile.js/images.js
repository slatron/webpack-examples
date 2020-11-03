var gulp  = require('gulp'),
    paths = require('./config').paths;

function images(cb) {
  return gulp.src([
      'dev/images/*.gif',
      'dev/images/*.png',
      'dev/images/*.svg',
      'dev/images/*.jpg',
      'dev/images/**/*.png'
    ])
    .pipe(gulp.dest(paths.APP_ASSETS_IMAGES), cb);
}

exports.images = images;
