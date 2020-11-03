var exec           = require('child_process').exec,
    getLanguageArg = require('./utils/getLanguageArg'),
    code           = getLanguageArg();

function mergePo(cb) {
  if (code === '') {
    console.log('Please provide a language code argument after $ gulp mergePo --language');
  } else {
    exec('msgmerge --output-file=po/' + code + '.po --no-fuzzy-matching po/' + code + '_new_translations.po po/' + code + '.po', function(err, stdout, stderr) {
      if (err) {
        console.log('error: ', err);
      }
      console.log(stderr);
    });
  }
  cb();
}

exports.mergePo = mergePo;
