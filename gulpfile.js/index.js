var gulp = require('gulp'),

// import tasks from sibling .js files
// - This helps to keep each task in its own file
// ========================================
{ clean } = require('./clean'),
{ lint } = require('./lint'),
{ styles } = require('./styles'),
{ scripts } = require('./scripts'),
{ analytics } = require('./analytics'),
{ images } = require('./images'),
{ html } = require('./html'),
{ fonts } = require('./fonts'),
{ favicon } = require('./favicon'),
{ units } = require('./units'),
{ webpack } = require('./webpack'),

// Traslation Tasks
{ mergePo } = require('./mergePo'),
{ getNewTranslations } = require('./getNewTranslations'),
{ processTranslations } = require('./processTranslations');


// Export tasks for command line usage
// ========================================
exports.clean = clean;
exports.lint = lint;
exports.getNewTranslations = getNewTranslations;
exports.processTranslations = processTranslations;
exports.styles = styles;
exports.scripts = scripts;
exports.analytics = analytics;
exports.images = images;
exports.html = html;
exports.fonts = fonts;
exports.favicon = favicon;
exports.units = units;
exports.mergePo = mergePo;
exports.webpack = webpack;

// Define default "gulp" task to build full application
// ====================================================
function build(cb) {
  gulp.parallel(styles, scripts, analytics, images, html, fonts, favicon)(cb);
}
exports.default = gulp.series(gulp.parallel(lint, clean, processTranslations), build, webpack);
