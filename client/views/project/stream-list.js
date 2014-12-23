/*jshint camelcase: false */
(function(){
  'use strict';
  var streamList = angular.module('teamstream');

  streamList.controller('StreamListCtrl', ['$scope', 'Project', function($scope, Project){
    $scope.streamList = [];
    $scope.selectedStream = null;
    $scope.streamForm = {projectId: $scope.projectId};
    $scope.segmentForm = {};
    $scope.replyForm = {};
    $scope.segments = [];

    $scope.getStreams = function(){
      Project.getStreams($scope.projectId).then(function(res){
        $scope.streamList = res.data;

        //get first segment
        if($scope.streamList.length >= 1){
          $scope.selectedStream = $scope.streamList[0].id;
          $scope.getSegments($scope.streamList[0].id);
        }

      }, function(res){
        console.log('You have no streams yet, try adding one.');
        $scope.streamList = [];
      });
    };

    $scope.getSegments = function(sid){
      $scope.selectedStream = sid;
      Project.getSegments(sid).then(function(res){
        $scope.segments = res.data;
      }, function(res){
        console.log('There are currently no segments in this stream. Try adding one.');
      });
    };

    $scope.selectStream = function(sid){
      $scope.getSegments(sid);
    };

    $scope.createStream = function(){
      Project.createStream($scope.streamForm).then(function(res){
        $scope.getStreams(); //needs to be taken out later
        $scope.streamForm.name = '';
      });
    };

    $scope.createSegment = function(){
      $scope.segmentForm.streamId = $scope.selectedStream;
      Project.createSegment($scope.segmentForm).then(function(res){
        $scope.getSegments($scope.selectedStream);
        $scope.segmentForm = {};
      });
    };

    $scope.createReply = function(segId){
      $scope.replyForm.segId = segId;
      Project.createReply($scope.replyForm).then(function(res){
        $scope.getSegments($scope.selectedStream);
        $scope.replyForm = {};
      });
    };

    $scope.getStreams();

    //UI RELATED
    $scope.showReplys = function($event){
      $($event.target).closest('.seg-messages').find('.seg-reply').toggle();
      $($event.target).find('span, i').toggle();
    };

    socket.emit('joinRoom', {projectId:$scope.projectId});

  }]);
})();
