(function(){
  'use strict';

  var dashFactory = angular.module('teamstream');

  dashFactory.factory('Project', ['$http', function($http){
    function getAll(){
      return $http.get('/projects');
    }

    return {getAll: getAll};
  }]);
})();
