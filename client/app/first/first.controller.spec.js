'use strict';

describe('Controller: FirstCtrl', function () {

  // load the controller's module
  beforeEach(module('admissionsApp'));

  var FirstCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirstCtrl = $controller('FirstCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
