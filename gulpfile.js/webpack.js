var run = require('gulp-run-command').default;

// TODO: This will have to be aware of the --prod flag to trigger --mode development
const webpack = async() => run('webpack --mode development')();

exports.webpack = webpack;
