'use strict';

angular.module('ngDashToSpace', [
  'ngSafeString'
]).filter('dashToSpace', [
  'safeStringFilter',
  function dashToSpace(safeStringFilter) {

    return function dashToSpaceFilter(input) {
      return safeStringFilter(input).replace(/-/g, ' ');
    };

  }
]);
