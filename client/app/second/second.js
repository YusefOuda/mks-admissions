'use strict';

angular.module('admissionsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('second', {
        url: '/',
        templateUrl: 'app/second/second.html',
        controller: 'SecondCtrl'
      });
  });