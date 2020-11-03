angular.module('Example').
filter('stripHTML', function() {
  return function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
});
