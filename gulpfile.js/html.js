var gulp        = require('gulp'),
    paths       = require('./config').paths,
    headString  = require('./config').HTML_HEAD,
    htmlreplace = require('gulp-html-replace'),
    getProdTag  = require('./utils/getProdTag'),
    tag         = getProdTag(),
    prod        = tag.length ? true : false;

function html(cb) {
  return gulp.src([paths.DEV_HTML, paths.DEV_EXCLUDE_MIGRATION_PAGES])
    .pipe(prod ? htmlreplace({
      js: 'assets/js/' + paths.OUT_JS_FILENAME + '.' + tag + '.js',
      head: headString
    }) : htmlreplace({
      js: 'assets/js/main.js',
      head: headString
    }))
    .pipe(gulp.dest(paths.APP), cb);
}

exports.html = html;
