'use strict';

describe('Service: intercomService', function () {

  // load the service's module
  beforeEach(module('admissionsApp'));

  // instantiate service
  var intercomService;
  beforeEach(inject(function (_intercomService_) {
    intercomService = _intercomService_;
  }));

  it('should do something', function () {
    expect(!!intercomService).toBe(true);
  });

});
