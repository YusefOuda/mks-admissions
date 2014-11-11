'use strict';

describe('Controller: SecondCtrl', function () {

  // load the controller's module
  beforeEach(module('admissionsApp'));

  var SecondCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecondCtrl = $controller('SecondCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
