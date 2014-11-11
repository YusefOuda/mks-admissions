'use strict';

angular.module('admissionsApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.editor = ace.edit('editor');
    $scope.editor.getSession().setMode('ace/mode/javascript');

    $scope.submit = function() {
      console.log($scope.editor.getValue());
    };
  });
