'use strict';

describe('pluralize', function() {
  beforeEach(module('ngSafeString'));

  it('returns striing', inject(function(safeStringFilter) {
    expect(safeStringFilter('payment')).toEqual('payment');
  }));

  it('returns empty string', inject(function(safeStringFilter) {
    expect(safeStringFilter([])).toEqual('');
  }));
});
