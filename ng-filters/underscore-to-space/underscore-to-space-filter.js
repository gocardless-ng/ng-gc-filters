'use strict';

angular.module('ngUnderscoreToSpace', [
  'ngSafeString'
]).filter('underscoreToSpace', [
  'safeStringFilter',
  function underscoreToSpace(safeStringFilter) {

    return function underscoreToSpaceFilter(input) {
      return safeStringFilter(input).replace(/_/g, ' ');
    };

  }
]);
