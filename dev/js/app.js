// jscs:disable
angular.module('Example', [
  'gettext',
  'ngSanitize',
  'ui.calendar',
  'ui.sortable',
  'ngCookies',
  'ngFileUpload',
  'ngPromiseExtras'])
.config(function(
  pageContextFactoryProvider,
  $compileProvider,
  $httpProvider) {

  // Disable angular debugger in stage and prod
  var env = pageContextFactoryProvider.$get().getEnvironment();
  if (_.indexOf(['stage', 'prod'], env) > -1) {
    $compileProvider.debugInfoEnabled(false);
  }

  $httpProvider.useApplyAsync(true);

  // Ensure english is default language used by moment
  moment.locale('en');
});
