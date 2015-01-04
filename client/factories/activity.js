(function(){
  'use strict';

  var activitesFactory = angular.module('teamstream');

  activitesFactory.factory('Activity', ['$http', function($http){
    function getActivities(projectId){
      return $http.get('/project/'+projectId+'/activities');
    }

    return {
     getActivities: getActivities
    };

  }]);
})();
