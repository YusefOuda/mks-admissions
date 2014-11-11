'use strict';

describe('Service: cookieService', function () {

  // load the service's module
  beforeEach(module('admissionsApp'));

  // instantiate service
  var cookieService;
  beforeEach(inject(function (_cookieService_) {
    cookieService = _cookieService_;
  }));

  it('should do something', function () {
    expect(!!cookieService).toBe(true);
  });

});
