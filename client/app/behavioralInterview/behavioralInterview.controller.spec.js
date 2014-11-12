'use strict';

describe('Controller: BehavioralinterviewCtrl', function () {

  // load the controller's module
  beforeEach(module('admissionsApp'));

  var BehavioralinterviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BehavioralinterviewCtrl = $controller('BehavioralinterviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
