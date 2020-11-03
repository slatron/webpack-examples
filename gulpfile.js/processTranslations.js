var gulp    = require('gulp'),
    gettext = require('gulp-angular-gettext'),
    paths   = require('./config').paths;

function processTranslations(cb) {
  return gulp.src([paths.SOURCE_TRANSLATIONS, paths.EXCLUDE_NEW_TRANSLATIONS])
		.pipe(gettext.compile({module: 'Example'}))
		.pipe(gulp.dest(paths.DEST_TRANSLATION_MODULES), cb);
}

exports.processTranslations = processTranslations;
