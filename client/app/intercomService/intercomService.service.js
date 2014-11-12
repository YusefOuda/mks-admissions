'use strict';

angular.module('admissionsApp')
  .service('intercomService', function ($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.pageRefresh = function(user) {
    	$window.Intercom('boot', user);
    }
  });
