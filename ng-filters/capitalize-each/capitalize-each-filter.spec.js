'use strict';

describe('capitalizeEach', function() {
  beforeEach(module('ngCapitalizeEach'));

  it('should capitalize each word', inject(function(capitalizeEachFilter) {
    expect(capitalizeEachFilter('i am here')).toEqual('I Am Here');
  }));

});
