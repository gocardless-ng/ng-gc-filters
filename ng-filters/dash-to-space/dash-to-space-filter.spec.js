'use strict';

describe('pluralize', function() {
  beforeEach(module('ngDashToSpace'));

  it('strips dashes', inject(function(dashToSpaceFilter) {
    expect(dashToSpaceFilter('payment-options')).toEqual('payment options');
  }));

});
