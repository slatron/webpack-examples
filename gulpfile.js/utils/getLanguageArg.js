module.exports = function() {
  var code = '';
  var languageIdx = process.argv.indexOf('--language');

  // The next arg after '--language' is the value
  if (languageIdx > -1) {
    code = process.argv.length > (languageIdx+1) ? process.argv[languageIdx+1] : '';
  }

  return code;
};
