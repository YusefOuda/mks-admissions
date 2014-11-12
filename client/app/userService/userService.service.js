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

    this.updateUser = function(id, current_challenge, cohort_choice) {
      if(cohort_choice){
        return $http.put('/api/users/' + id, {cohort_choice: cohort_choice, current_challenge: current_challenge});
      }
      return $http.put('/api/users/' + id, {current_challenge: current_challenge});
    };
  });
