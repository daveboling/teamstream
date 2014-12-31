(function(){
  'use strict';

  angular.module('teamstream')
    .controller('NavCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User){
      $scope.logout = function(){
        window.dispatchEvent(new CustomEvent('logout', {}));
        User.logout().then(function(){
          $rootScope.rootuser = null;
          $state.go('home');
        });
      };
    }]);
})();
