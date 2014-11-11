'use strict';

angular.module('admissionsApp')
  .controller('MainCtrl', function ($scope, Modal) {
    
    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');

    $scope.submit = function() {
      var code = $scope.editor.getValue();

      var wrapCode = function (code) {
        var result = code + ";\ntry {";
        result += "postMessage({ answer: getContactInfo() });";
        result += "} catch (e) {" +
          "var trace = printStackTrace({e: e});" +
          "postMessage({ error: { name: e.name, message: e.message}, trace: trace });" +
        "}";
        result += "; postMessage('__terminate__');\n";
        return result;
      };

      var sandbox = $.sandbox({
        timeout: 5000,
        scripts: [
          '//'+ window.location.host +'/components/stacktrace.js',
          'data:application/javascript,' + encodeURIComponent(wrapCode(code))
        ],
        callback: function(data, error) {
          if (data && data.error)
            console.log("error: ", data.error);
          if (data && data.answer)
            console.log("data: ", data.answer);
        }
      });

    //Ask Yusef how this code works. 
    //There is a promise somewhere, or asynchronous thing
    //That you need to have call your modal function.
    //For now, you're using dummy values.

      $scope.testInfo = {
        full_name: "Brian Patterson",
        email: "brianpatterson2013@gmail.com"
      }

      var ngModalsAreFuckinWeird = Modal.confirm.delete();
      ngModalsAreFuckinWeird();


    };
  });
