(function(){
  'use strict';
  var dash = angular.module('teamstream');

  dash.controller('DashCtrl', ['$scope', '$state', 'Project', function($scope, $state, Project){
    $scope.projects = [];
    //get all projects for this user
    Project.getAll().then(function(res){
      $scope.projects = res.data;
    }, function(res){
      console.log('No projects for this user.');
    });

    $scope.viewProject = function(id){
      $state.go('project', {pid: id});
    };

  }]);
})();
