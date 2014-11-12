'use strict';

angular.module('admissionsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('behavioralInterview', {
        url: '/',
        templateUrl: 'app/behavioralInterview/behavioralInterview.html',
        controller: 'BehavioralInterviewCtrl'
      });
  });