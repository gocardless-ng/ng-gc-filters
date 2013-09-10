'use strict';

angular.module('ngToDateTime', [
  'gc.utils'
])
.filter('toDateTime', [
  'utils',
  function toDateTime(utils) {

    return function toDateTimeFilter(input, endOfDay) {
      return utils.getFormattedDateTime(input, endOfDay);
    };

  }
]);
