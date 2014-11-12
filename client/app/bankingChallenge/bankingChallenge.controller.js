'use strict';

angular.module('admissionsApp')
  .controller('BankingChallengeCtrl', function ($scope, $state, cookieService, userService, intercomService) {
    $scope.routeUser = function() {
      var userCookie = cookieService.getCookie();
      userService.getUser(userCookie)
        .success(function(user){
          $state.go(user.current_challenge);
        })
        .error(function() {
          $state.go('first');
        });
    };

    $scope.routeUser();

    $scope.submit = function() {
      //Ideally, find a way to return a value out of the iframe that lets this submit route you, and otherwise
      //It can alert or modal that there is an unfinished step.

      //If this isn't possible, load a confirmation modal that makes sure people understand that they need to set up their appointment
      //and will not be able to return.
      userService.updateUser($scope.userCookie, 'technicalInterview')
        .success(function(data) {
          intercomService.updateUser({
            app_id: 'idn465wg',
            email: data.email,
            current_challenge: data.current_challenge
          });
        });
      $scope.routeUser();
    };
  });
