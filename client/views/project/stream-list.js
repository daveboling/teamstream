/*jshint camelcase: false */
(function(){
  'use strict';
  var streamList = angular.module('teamstream');

  streamList.controller('StreamListCtrl', ['$scope', '$rootScope', 'Project', function($scope, $rootScope, Project){
    $scope.streamList = [];
    $scope.selectedStream = null;
    $scope.streamForm = {projectId: $scope.projectId};
    $scope.segmentForm = {};
    $scope.replyForm = {};
    $scope.segments = [];
    $scope.toggleButton = true;

    $scope.getStreams = function(){
      Project.getStreams($scope.projectId).then(function(res){
        $scope.streamList = res.data;

        //get first segment
        if($scope.streamList.length >= 1 && !$scope.selectedStream){
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
      $scope.toggleButton = true;
        $scope.segments = res.data;
      }, function(res){
        console.log('There are currently no segments in this stream. Try adding one.');
      });
    };

    $scope.getArchivedSegments = function(sid){
      $scope.selectedStream = sid;
      Project.getArchivedSegments(sid).then(function(res){
      $scope.toggleButton = false;
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
        var action = $rootScope.rootuser.username + ' created a new stream called ' + $scope.streamForm.name;
        socket.emit('updateStreams', {activity: action, projectId: $scope.projectId});
        $scope.getStreams(); //needs to be taken out later
        $scope.streamForm.name = '';
      });
    };

    $scope.createSegment = function(){
      $scope.segmentForm.streamId = $scope.selectedStream;
      Project.createSegment($scope.segmentForm).then(function(res){
        var action = $rootScope.rootuser.username + ' created a new segment in ' + $('.current-selected span').text();
        socket.emit('updateSegments', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
        $scope.getSegments($scope.selectedStream);
        $scope.segmentForm = {};
      });
    };

    $scope.createReply = function(segId){
      $scope.replyForm.segId = segId;
      Project.createReply($scope.replyForm).then(function(res){
        var action = $rootScope.rootuser.username + ' replied in ' + $('.current-selected span').text();
        socket.emit('updateReplies', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
        $scope.getSegments($scope.selectedStream);
        $scope.replyForm = {};
      });
    };

    $scope.editSegment = function(segmentId, body){
      Project.editSegment({body: body, segmentId: segmentId}).then(function(res){
        var action = $rootScope.rootuser.username + ' edited a segment in ' + $('.current-selected span').text();
        socket.emit('updateSegments', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
        $scope.getSegments($scope.selectedStream);
      });
    };

    $scope.editReply = function(replyId, body){
      Project.editReply({body: body, replyId: replyId}).then(function(res){
        var action = $rootScope.rootuser.username + ' edited a reply in ' + $('.current-selected span').text();
        socket.emit('updateReplies', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
        $scope.getSegments($scope.selectedStream);
      });
    };

    $scope.editStream = function(streamId, name){
      Project.editStream({streamId: streamId, name: name}).then(function(res){
        var action = $rootScope.rootuser.username + ' edited ' + $('.current-selected span').text();
        socket.emit('updateStreams', {activity: action, projectId: $scope.projectId});
        $scope.getStreams();
      });
    };

    $scope.deleteSegment = function(segmentId){
      alertify.confirm('Deletion will remove all replies and attachments too. Are you sure?', function(e){
        if (e){
          Project.deleteSegment(segmentId).then(function(res){
            var action = $rootScope.rootuser.username + ' deleted a segment in ' + $('.current-selected span').text();
            socket.emit('updateSegments', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
            $scope.getSegments($scope.selectedStream);
          });
        }
      });

    };

    $scope.deleteStream = function(streamId, streamName){
      alertify.confirm('Deletion will remove all segments, attachments and replies. Are you sure?', function(e){
        if (e){
          Project.deleteStream(streamId).then(function(res){
            var action = $rootScope.rootuser.username + ' deleted stream: ' + streamName;
            socket.emit('updateStreams', {activity: action, projectId: $scope.projectId});
            $scope.selectedStream = null;
            $scope.getStreams();
          });
        }
      });
    };

    $scope.deleteReply = function(replyId){
      alertify.confirm('Are you sure you want to delete this reply?', function(e){
        if (e){
          Project.deleteReply(replyId).then(function(res){
            var action = $rootScope.rootuser.username + ' deleted a reply in ' + $('.current-selected span').text();
            socket.emit('updateReplies', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
            $scope.getSegments($scope.selectedStream);
          });
        }
      });
    };

    $scope.upload = function(segId, file){
      Project.addAttachment(segId, file).then(function(res){
        var action = $rootScope.rootuser.username + ' uploaded a file in ' + $('.current-selected span').text();
        socket.emit('updateSegments', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});
        $scope.getSegments($scope.selectedStream);
      });
    };

    $scope.toggleArchive = function(segment){
      Project.toggleArchive(segment).then(function(res){
          var segStatus = segment.is_archived ? ' unarchived' : ' archived',
          action = $rootScope.rootuser.username + segStatus + ' ' + segStatus + ' a segment in ' + $('.current-selected span').text();
          socket.emit('updateSegments', {streamId: $scope.selectedStream, activity: action, projectId: $scope.projectId});

          //return to live segments
          $scope.getSegments($scope.selectedStream);

          alertify.success('Segment successfully ' + segStatus + '.');
      });
    };

    $scope.getStreams(); //executes immediately upon entering page

    //UI RELATED
    $scope.showReplys = function($event){
      $($event.target).closest('.seg-messages').find('.seg-reply').toggle();
      $($event.target).find('span, i').toggle();
    };

    socket.emit('joinRoom', {projectId:$scope.projectId});

    socket.off('updateStreams');
    socket.on('updateStreams', function(data){
      $scope.getStreams();
    });

    socket.off('updateSegments');
    socket.on('updateSegments', function(streamId){
      //if user is currently viewing the stream, update only that one
      if($scope.selectedStream === streamId){
        $scope.getSegments(streamId);
      }

    });

    socket.off('updateReplies');
    socket.on('updateReplies', function(streamId){
      //if user is currently viewing the stream, update only that one
      if($scope.selectedStream === streamId){
        $scope.getSegments(streamId);
      }

    });


    //tinymce options
    $scope.tinymceOptions = {
        resize: false,
        width: '100%',
        height: 350
    };



  }]);
})();


