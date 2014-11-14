'use strict';

describe('Controller: TechnicalinterviewCtrl', function () {

  // load the controller's module
  beforeEach(module('admissionsApp'));

  var TechnicalinterviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechnicalinterviewCtrl = $controller('TechnicalinterviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
