(function(){
  'use strict';
  var project = angular.module('teamstream');

  project.controller('ProjectCtrl', ['$scope', '$stateParams', 'Project', function($scope, $stateParams, Project){
    $scope.projectId = $stateParams.pid;
    $scope.project = {};

    Project.findOne($scope.projectId).then(function(res){
      $scope.project = res.data;
    });

  }]);
})();
