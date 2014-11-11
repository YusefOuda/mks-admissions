'use strict';

angular.module('admissionsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('first', {
        url: '/',
        templateUrl: 'app/first/first.html',
        controller: 'FirstCtrl'
      });
  });