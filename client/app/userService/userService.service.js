'use strict';

angular.module('admissionsApp')
  .service('userService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getUser = function(id) {
      return $http.get('/api/users/' + id);
    };

    this.createUser = function(user) {
      return $http.post('/api/users/', user);
    };

    this.updateUser = function(user) {
      return $http.put('/api/users/' + user._id, user);
    };
  });
