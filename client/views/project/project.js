(function(){
  'use strict';
  var project = angular.module('teamstream');

  project.controller('ProjectCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    $scope.projectId = $stateParams.pid;
  }]);
})();
