'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:todoList
 * @description
 * # todoList
 */
angular.module('todoApp')
  .directive('todoList', function () {
    return {
      templateUrl: 'tasks.html',
      restrict: 'E',
      controller: function($scope, localStorageService) {
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function () {
          localStorageService.set('todos', $scope.todos);
        }, true);

        $scope.addTodo = function () {
          $scope.todo.date = new Date;
          $scope.todos.push($scope.todo);
          $scope.todo = [];
        };

        $scope.removeTodo = function (index) {
          $scope.todos.splice(index, 1);
        };
      }
    };
  });
