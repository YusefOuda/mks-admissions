'use strict';

angular.module('admissionsApp')
  .service('intercomService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.createUser = function(user) {
    	window.Intercom('boot', user);
    }

    this.updateUser = function(user) {
    	window.Intercom('update', user);;
    }
  });
