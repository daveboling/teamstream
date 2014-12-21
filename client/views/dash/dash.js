(function(){
  'use strict';
  var dash = angular.module('teamstream');

  dash.controller('DashCtrl', ['$scope', 'Project', function($scope, Project){
    console.log('we made it');
    $scope.projects = [];
    //get all projects for this user
    Project.getAll().then(function(res){
      $scope.projects = res.data;
    }, function(res){
      console.log('No projects for this user.');
    });

  }]);
})();
