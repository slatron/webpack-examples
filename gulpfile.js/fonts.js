var gulp        = require('gulp'),
    paths       = require('./config').paths;

function fonts(cb) {
  return gulp.src(
    [
      'dev/fonts/*.eot',
      'dev/fonts/*.svg',
      'dev/fonts/*.ttf',
      'dev/fonts/*.woff'
    ])
    .pipe(gulp.dest(paths.APP_FONTS), cb);
}

exports.fonts = fonts;
