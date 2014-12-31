(function(){
  'use strict';

  var room = angular.module('teamstream');

  room.factory('Room', ['$http', function($http){
    function getOnlineUsers(projectId){
      return $http.get('/project/room/users/'+projectId);
    }

    function goOffline(projectId, email){
      return $http.put('/project/offline/'+projectId, {email: email});
    }

    return {
      getOnlineUsers: getOnlineUsers,
      goOffline: goOffline
    };
  }]);
})();
