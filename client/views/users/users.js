(function(){
  'use strict';

  angular.module('teamstream')
    .controller('UsersCtrl', ['$rootScope', '$scope', '$state', '$http', 'User', 'GooglePlus', function($rootScope, $scope, $state, $http, User, GooglePlus){
      $scope.user = {};
      $scope.mode = $state.current.name;
      $scope.pageHeader = $scope.mode === 'login' ? 'Login to teamstream' : 'Register on teamstream';

      $scope.submit = function(){
        if($scope.mode === 'register'){
          User.register($scope.user).then(function(response){
            $state.go('login');
          }, function(){
            alertify.log('User already exists or password/name length is less than 3 characters.');
            $('#login-register form').fadeIn(200);
            $scope.user = {};
          });
        }else{
          User.login($scope.user).then(function(response){
            $rootScope.rootuser = response.data;
            $state.go('home');
          }, function(){
            $('#login-register form').fadeIn(100);
            alertify.log('Incorrect login information, email or password.');
            $scope.user = {};
          });
        }
      };

      $scope.google = function(){
        GooglePlus.login().then(function(authResult){
            $('#login-register form').fadeOut(100);
            GooglePlus.getUser().then(function(user){
                $scope.user = {username: user.name, email: user.email, password: user.id};
                $scope.submit();
            });
        }, function(err){
            console.log(err);
        });
      };

    }]);
})();
