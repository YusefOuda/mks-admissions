'use strict';

angular.module('admissionsApp')
  .controller('BehavioralinterviewCtrl', function ($scope, $state, cookieService, userService) {
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
    	$scope.routeUser();
    }
  });
