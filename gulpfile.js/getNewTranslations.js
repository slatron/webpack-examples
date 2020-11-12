var gulp    = require('gulp'),
    gettext = require('gulp-angular-gettext'),
    paths   = require('./config').paths;

function getNewTranslations(cb) {
  return gulp.src([
      paths.DEV_HTML,
      paths.DEV_JS,
      paths.DEV_EXCLUDE_MIGRATION_PAGES,
      paths.DEV_EXCLUDE_MIGRATION_COMPONENTS,
    ])
   .pipe(gettext.extract('template.pot'))
   .pipe(gulp.dest(paths.DEV_TRANSLATION_FILES), cb);
}

exports.getNewTranslations = getNewTranslations;
