/**
 *  This factory provides a common way for
 *    directives to store application data
 *    between page calls.
 *
 *  The factory defaults to using the browser's
 *    localStorage. In case the user's browser does
 *    not support localStorage, a pageCache object
 *    is used as a backup. Note that this will not
 *    work in-between pageviews. Have a backup plan
 *    for any features using the cache in-between
 *    page views.
 *
 *  Note that localStorage can only handle strings. The
 *    setter function here will convert non-strings
 *    to stringified objects or arrays. If the calling
 *    getter expects non-strings, be sure to convert
 *    the string into JSON via angular.fromJson(). See
 *    entityFieldsCacheFactory for an example.
 */
angular.module('Example').
factory('cacheFactory', function() {

  var pageCache = {},
      methods   = {},
      available = false;

  // Store value to cache and localstorage
  methods.set = function(key, value) {
    if (_.isString(key)) {
      if (!_.isString(value)) {
        value = angular.toJson(value);
      }
      pageCache[key] = value;
      if (available) {
        localStorage.setItem(key, value);
      }
    }
  };

  methods.get = function(key) {
    if (available && localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else if (pageCache[key]) {
      return pageCache[key];
    } else {
      return null;
    }
  };

  methods.removeFromLocalStorage = function(key) {
    delete pageCache[key];
    if (available) {
      localStorage.removeItem(key);
    }
  };

  methods.clearLocalStorage = function() {
    pageCache = {};

    if (available) {
      // Check for REDIRECT_TARGET, which should live through login
      //   page clears. REDIRECT_TARGET is cleared directly on every
      //   non-login page.
      var hasRedirect = localStorage.getItem('REDIRECT_TARGET'); // will be null or redirect string
      if (hasRedirect) {
        pageCache.REDIRECT_TARGET = hasRedirect;
      }
      localStorage.clear();
      if (hasRedirect) {
        methods.set('REDIRECT_TARGET', pageCache.REDIRECT_TARGET);
      }
    }
  };

  // helper methods
  methods.storageAvailable = function() {
    try {
      var x = 'storage_test';
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      return true;
    }
    catch (e) {
      return false;
    }
  };
  available = methods.storageAvailable();

  return methods;
});
