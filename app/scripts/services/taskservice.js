'use strict';

/**
 * @ngdoc service
 * @name todoApp.taskservice
 * @description
 * # taskservice
 * Factory in the todoApp.
 */
angular.module('todoApp')
  .factory('TaskService', function ($rootScope, localStorageService) {
    
    var service = {};
    $rootScope.todo = [];
    
    service.getList = function(){
      $rootScope.todos = localStorageService.get('todos') || [];
      $rootScope.$watch('todos', function () {
        localStorageService.set('todos', $rootScope.todos);
      }, true);  
    };
    $rootScope.addTodo = function () {
      $rootScope.todo.date = new Date();
      $rootScope.todo.state = '2';
      $rootScope.todos.push($rootScope.todo);
      $rootScope.todo = [];
      $rootScope.showForm = false;
    };

    $rootScope.setState = function (index,state) {
      $rootScope.todos[index].state = state;
    };

    $rootScope.removeTodo = function (index) {
      $rootScope.todos.splice(index, 1);
    };
    return  service;
  });
