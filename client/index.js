(function(){
  'use strict';

  angular.module('teamstream', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',              {url:'/',            templateUrl:'/views/home/home.html',         controller:'HomeCtrl'})
        .state('register',          {url:'/register',    templateUrl:'/views/users/users.html',       controller:'UsersCtrl'})
        .state('login',             {url:'/login',       templateUrl:'/views/users/users.html',       controller:'UsersCtrl'})
        .state('dashboard',         {url:'/dashboard',   templateUrl:'/views/dash/dash.html',         controller:'DashCtrl'})
        .state('project',           {
          url:'/project/{pid}',
          views: {
           '@': {
            templateUrl:'/views/project/project.html',
            controller: 'ProjectCtrl'
           },
           'list@project': {
              templateUrl: '/views/project/stream-list.html',
              controller:'StreamListCtrl'
            }
           // 'view@project': {
           //    templateUrl: '/views/project/stream-view.html',
           //    controller:'StreamViewCtrl'
           //  }
          }
        });
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      window.socket = io.connect();
      window.socket.on('online', function(){
        if($rootScope.rootuser && socket.connected){
          //$http.put('/users/' + $rootScope.rootuser._id, {socketId:socket.io.engine.id});
          $rootScope.$apply();
        }
      });

      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();


