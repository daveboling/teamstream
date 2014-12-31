(function(){
  'use strict';
  var project = angular.module('teamstream');

  project.controller('ProjectCtrl', ['$scope', '$stateParams', '$rootScope', 'Project', 'Room', function($scope, $stateParams, $rootScope, Project, Room){
    $scope.projectId = $stateParams.pid;
    $scope.project = {};
    $scope.barIsVisible = true;
    $scope.onlineUsers = [];
    $scope.activity = [
      'Dave hit the jackpot',
      'Joe made a new note.',
      'Epsilon meowed because she wanted out.'
    ];

    Project.findOne($scope.projectId).then(function(res){
      $scope.project = res.data;
    });

    $scope.addCollaborator = function(email){
      Project.addCollaborator({email: email, projectId: $scope.projectId}).then(function(res){
        alert('User has been added to the project');
      }, function(res){
        alert('Sorry, no user found at that e-mail');
      });
    };

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

    //get online users
    Room.getOnlineUsers($scope.projectId).then(function(res){
      $scope.onlineUsers = res.data;
    });

    //remove online status for a user
    window.onbeforeunload = function(e){
        e = e || window.event; //Did an event happen?

        if(e){
          //Don't need to do anything with returned promise
          Room.goOffline($scope.projectId, $rootScope.rootuser.email);
        }
    };

    //socket event to reflect when a user goes offline


  }]);
})();
