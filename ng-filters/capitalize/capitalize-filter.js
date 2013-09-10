'use strict';

angular.module('ngCapitalize', [
  'ngSafeString'
]).filter('capitalize', [
  'safeStringFilter',
  function capitalize(safeStringFilter) {

    return function capitalizeFilter(input) {
      input = safeStringFilter(input);
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    };

  }
]);
