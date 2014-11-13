'use strict';

angular.module('admissionsApp')
  .controller('BankingChallengeCtrl', function ($scope, $state, userService, intercomService, routeService) {
    $scope.userCookie = routeService.routeUser();

    $scope.submit = function() {
      //When you click the submit button, it will update what page you should route to by changing the current_challenge on
      //both the user database and the intercom data layer.
      userService.updateUser({
        _id: $scope.userCookie,
        current_challenge: 'technicalInterview'
      })
        .success(function(data) {
          intercomService.updateUser({
            app_id: 'idn465wg',
            email: data.email,
            current_challenge: data.current_challenge
          });
        });
      routeService.routeUser();
    };
  });
