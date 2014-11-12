'use strict';

angular.module('admissionsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bankingChallenge', {
        url: '/',
        templateUrl: 'app/bankingChallenge/bankingChallenge.html',
        controller: 'BankingChallengeCtrl'
      });
  });