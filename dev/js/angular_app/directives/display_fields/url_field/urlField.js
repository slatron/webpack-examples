angular.module('Example').
directive('urlField', function(pathsData) {
  'use strict';

  return {
    restrict: 'E',
    scope: {
      urlFull: '@'
    },
    controllerAs: 'urlFieldVM',
    bindToController: true,
    templateUrl: [
      pathsData.directives,
      'display_fields/url_field/urlField.html'
    ].join(''),

    controller: function($scope) {
      var vm = this;

      this.$onInit = function() {
        vm.stopClickPropagation = stopClickPropagation;
        /**
        *   Need to watch the scope as the vm may not
        *     be available on directive initialization
        **/
        $scope.$watch(function() {
          return vm.urlFull;
        }, function(newVal, oldVal) {
          vm.urlClean = _cleanUrl(vm.urlFull);
        });

      };

      function _cleanUrl(url) {
        var domain;
        if (url.indexOf('://') > -1) {
          domain = url.split('/')[2];
        }
        else {
          domain = url.split('/')[0];
        }
        return domain.replace('www.', '');
      }

      function stopClickPropagation(e) {
        e.stopPropagation();
      }
    }
  };
});
