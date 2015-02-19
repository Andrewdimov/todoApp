'use strict';

/**
 * @ngdoc config
 * @description
 * # routes
 * Routes in the todoApp.
 */
angular.module('todoApp')
  .config(config);
  
  config.$inject = ['$routeProvider'];
  
  function config ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksController',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }