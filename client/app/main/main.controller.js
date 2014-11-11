'use strict';

angular.module('admissionsApp')
  .controller('MainCtrl', function ($scope, Modal) {
    
    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');

    $scope.submit = function() {
      var code = $scope.editor.getValue();

      var wrapCode = function (code) {
        var result = code + ';\ntry {';
        result += 'postMessage({ answer: getContactInfo() });';
        result += '} catch (e) {' +
          'var trace = printStackTrace({e: e});' +
          'postMessage({ error: { name: e.name, message: e.message}, trace: trace });' +
        '}';
        result += '; postMessage("__terminate__");\n';
        return result;
      };

      var sandbox = $.sandbox({
        timeout: 5000,
        scripts: [
          '//'+ window.location.host +'/components/stacktrace.js',
          'data:application/javascript,' + encodeURIComponent(wrapCode(code))
        ],
        callback: function(data, error) {
          if (data && data.error) {
            $scope.syntaxError = data.error;
          }
          if (data && data.answer) {
            $scope.userAnswer = data.answer;
            checkCorrectness($scope.userAnswer);
          }
        }
      });

      var checkCorrectness = function(answer) {
        var objectLength = Object.keys(answer).length;
        if (objectLength === 4) {
          if (answer.hasOwnProperty('fullName') && answer.hasOwnProperty('email') 
            && answer.hasOwnProperty('skype') && answer.hasOwnProperty('github')) {
            $scope.isCorrect = true;
          } else {
            $scope.isCorrect = false;
          }
        } else {
          $scope.isCorrect = false;
        }
      };

    //Ask Yusef how this code works. 
    //There is a promise somewhere, or asynchronous thing
    //That you need to have call your modal function.
    //For now, you're using dummy values.

      $scope.testInfo = {
        fullName: 'Brian Patterson',
        email: 'brianpatterson2013@gmail.com'
      };

      var ngModals = Modal.confirm.correct();
      // var badModal = Modal.confirm.incorrect();
      ngModals($scope.testInfo);
    };
  });
