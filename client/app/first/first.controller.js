'use strict';

angular.module('admissionsApp')
  .controller('FirstCtrl', function ($scope, $state, Modal, codeVerifier, userService, cookieService, intercomService) {
    
    $scope.routeUser = function() {
      var userCookie = cookieService.getCookie();
      userService.getUser(userCookie)
        .success(function(user){
          $state.go(user.current_challenge);
        });
    };

    $scope.routeUser();
    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');

    $scope.submit = function() {
      var code = $scope.editor.getValue();

      var checkCorrectness = function(userAnswer) {
        var objectLength = Object.keys(userAnswer).length;
        var isCorrect = false;
        if (objectLength === 4) {
          if (userAnswer.hasOwnProperty('fullName') && userAnswer.hasOwnProperty('email') &&
            userAnswer.hasOwnProperty('skype') && userAnswer.hasOwnProperty('github')) {
            isCorrect = true;
          }
        }
        return isCorrect;
      };

      var methodToCheck = 'getContactInfo()';
      codeVerifier.runSandbox(code, methodToCheck, function (answer) {
        $scope.userAnswer = answer;
        var answerModal;
        if (checkCorrectness($scope.userAnswer)){
          answerModal = Modal.confirm.correct(function() {
            $scope.userAnswer.current_challenge = 'second';
            userService.createUser($scope.userAnswer)
              .success(function(data) {
                cookieService.setCookie(data._id);
                intercomService.createUser({
                  app_id: 'idn465wg',
                  email: data.email,
                  fullName: data.fullName,
                  current_challenge: data.current_challenge
                })
                $scope.routeUser();
              });
          });
        }else {
          answerModal = Modal.confirm.incorrect();
        }
        answerModal($scope.userAnswer);
      });
    };
  });