'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TasksCtrl', function ($scope, localStorageService) {
      
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todo.date = new Date();
      $scope.todos.push($scope.todo);
      $scope.todo = [];
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });