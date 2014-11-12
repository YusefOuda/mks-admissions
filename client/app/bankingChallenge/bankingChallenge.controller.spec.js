'use strict';

describe('Controller: BankingChallengeCtrl', function () {

  // load the controller's module
  beforeEach(module('admissionsApp'));

  var BankingchallengeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BankingchallengeCtrl = $controller('BankingChallengeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
