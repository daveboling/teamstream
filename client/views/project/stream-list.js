(function(){
  'use strict';
  var streamList = angular.module('teamstream');

  streamList.controller('StreamListCtrl', ['$scope', 'Project', function($scope, Project){
    $scope.streamList = [];

    $scope.getStreams = function(){
      Project.getStreams($scope.projectId).then(function(res){
        $scope.streamList = res.data;

        //get first segment
        if($scope.streamList.length >= 1){
          $scope.getSegments($scope.streamList[0].id);
        }

      }, function(res){
        console.log('You have no streams yet, try adding one.');
        $scope.streamList = [];
      });
    };

    $scope.getSegments = function(sid){
      Project.getSegments(sid).then(function(res){
        $scope.segments = res.data;
      }, function(res){
        console.log('There are currently no segments in this stream. Try adding one.');
      });
    };

    $scope.getStreams();


  }]);
})();
