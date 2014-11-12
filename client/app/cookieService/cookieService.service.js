'use strict';

angular.module('admissionsApp')
  .service('cookieService', function ($cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.setCookie = function(id) {
        $cookies.userCookie = id;
    };

    this.getCookie = function() {
        return $cookies.userCookie;
    };

  });
