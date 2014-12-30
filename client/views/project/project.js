(function(){
  'use strict';
  var project = angular.module('teamstream');

  project.controller('ProjectCtrl', ['$scope', '$stateParams', 'Project', function($scope, $stateParams, Project){
    $scope.projectId = $stateParams.pid;
    $scope.project = {};
    $scope.barIsVisible = true;
    $scope.activity = [
      'Dave hit the jackpot',
      'Joe made a new note.',
      'Epsilon meowed because she wanted out.'
    ];

    Project.findOne($scope.projectId).then(function(res){
      $scope.project = res.data;
    });

    //sidebar toggle
    $scope.toggleSidebar = function(){
      if($scope.barIsVisible){
        $('#side-bar').animate({right: '-300px'});
        $('#toggle').animate({right: '-5px'});
      }
      else{
        $('#side-bar').animate({right: '0px'});
        $('#toggle').animate({right: '290px'});
      }
      //toggle
      $scope.barIsVisible = !$scope.barIsVisible;
    };

  }]);
})();
