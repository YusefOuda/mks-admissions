'use strict';

angular.module('admissionsApp')
  .service('routeService', function ($state, cookieService, userService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.routeUser = function() {
      var userCookie = cookieService.getCookie();
      if (userCookie) {
      	userService.getUser(userCookie)
        	.success(function(user){
          	$state.go(user.current_challenge);
        	});
      } else {
      	$state.go('first');
      }
      return userCookie;
    };
  });
