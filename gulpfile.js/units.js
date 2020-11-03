var karma = require('karma').server;

function units(cb) {
  return karma.start({
    configFile: __dirname + '/../units.conf.js'
  }, cb);
}

exports.units = units;
