'use strict';

angular.module('ngSafeString', [])
.filter('safeString', [
  function safeString() {

    return function safeStringFilter(input) {
      return angular.isString(input) ? input : '';
    };

  }
]);
