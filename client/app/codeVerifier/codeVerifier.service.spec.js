'use strict';

describe('Service: codeVerifier', function () {

  // load the service's module
  beforeEach(module('admissionsApp'));

  // instantiate service
  var codeVerifier;
  beforeEach(inject(function (_codeVerifier_) {
    codeVerifier = _codeVerifier_;
  }));

  it('should do something', function () {
    expect(!!codeVerifier).toBe(true);
  });

});
