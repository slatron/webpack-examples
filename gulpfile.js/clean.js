var del   = require('del'),
    paths = require('./config').paths;

function clean(cb) {
  return del(paths.APP_ALL, cb);
}

exports.clean = clean;
