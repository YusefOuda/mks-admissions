'use strict';

angular.module('admissionsApp')
  .controller('MainCtrl', function ($scope, Modal, codeVerifier, userService) {
    
    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');

    $scope.submit = function() {
      var code = $scope.editor.getValue();

      var methodToCheck = 'getContactInfo()';
      codeVerifier.runSandbox(code, methodToCheck, function (answer) {
        $scope.userAnswer = answer;
        var answerModal;
        if (codeVerifier.checkCorrectness($scope.userAnswer)){
          answerModal = Modal.confirm.correct(function() {
            $scope.userAnswer.current_challenge = 2;
            userService.createUser($scope.userAnswer);
          });
        }else {
          answerModal = Modal.confirm.incorrect();
        }
        answerModal($scope.userAnswer);
      });
    };
  });
