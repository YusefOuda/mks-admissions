'use strict';

angular.module('admissionsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('technicalInterview', {
        url: '/',
        templateUrl: 'app/technicalInterview/technicalInterview.html',
        controller: 'TechnicalinterviewCtrl'
      });
  });