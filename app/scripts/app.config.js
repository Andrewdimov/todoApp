'use strict';

/**
 * @ngdoc service
 * @name todoApp.states
 * @description
 * # states
 * Constant in the todoApp.
 */
angular.module('todoApp')
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })