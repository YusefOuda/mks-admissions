'use strict';

describe('Service: routeService', function () {

  // load the service's module
  beforeEach(module('admissionsApp'));

  // instantiate service
  var routeService;
  beforeEach(inject(function (_routeService_) {
    routeService = _routeService_;
  }));

  it('should do something', function () {
    expect(!!routeService).toBe(true);
  });

});
