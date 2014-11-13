'use strict';

angular.module('admissionsApp')
  .controller('SecondCtrl', function ($scope, $state, Modal, codeVerifier, userService, cookieService, intercomService, routeService) {

  $scope.userCookie = routeService.routeUser();


    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');
    $scope.editor.getSession().setUseWrapMode(true);

    $scope.submit = function() {
      var code = $scope.editor.getValue();

      var checkCorrectness = function(userAnswer) {
        console.log(userAnswer);
        var isCorrect = false;

        var cohorts = {
            austin: ["10","11","12"],
            sanFrancisco: ["3","4","5"]
          };

        for(var location in cohorts) {
          for(var i = 0; i < cohorts[location].length; i++) {
            if (cohorts[location][i] === userAnswer)
              isCorrect = true;
          }
        }

        return isCorrect;
      };

      var methodToCheck = 'getCohortChoice()';
      codeVerifier.runSandbox(code, methodToCheck, function (answer) {
        $scope.userAnswer = answer;
        var answerModal;
        if (checkCorrectness($scope.userAnswer)){
          answerModal = Modal.confirm.correct(function() {
            userService.updateUser({
              _id: $scope.userCookie,
              cohort_choice: $scope.userAnswer,
              current_challenge: 'behavioralInterview'
            })
              .success(function(data) {
                intercomService.updateUser({
                  app_id: 'idn465wg',
                  email: data.email,
                  current_challenge: data.current_challenge,
                  cohort_choice: data.cohort_choice
                });
              });
            routeService.routeUser();
          });
        }else {
          answerModal = Modal.confirm.incorrect();
        }
        answerModal({cohort_choice: $scope.userAnswer});
      });
    };
  });
