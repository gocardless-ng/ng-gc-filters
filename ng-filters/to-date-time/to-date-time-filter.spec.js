'use strict';

describe('toDateTime', function() {
  beforeEach(module('ngToDateTime'));

  it('formats date to start of day', inject(function(toDateTimeFilter) {
    expect(toDateTimeFilter('2013-10-10')).toEqual('2013-10-10T00:00:00');
  }));

  it('formats date to end of day', inject(function(toDateTimeFilter) {
    expect(toDateTimeFilter('2013-10-10', true)).toEqual('2013-10-10T23:59:59');
  }));

  it('returns empty string', inject(function(toDateTimeFilter) {
    expect(toDateTimeFilter([])).toEqual('');
  }));
});
