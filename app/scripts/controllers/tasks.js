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
      
    $scope.states = [
        {
            id: 1,
            name: 'In Progress'
        },
        {
            id: 2,
            name: 'New'
        },
        {
            id: 3,
            name: 'Done'
        }
    ];
    
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todo.date = new Date();
      $scope.todo.state = '2';
      $scope.todos.push($scope.todo);
      $scope.todo = [];
      $scope.showForm = false;
    };

    $scope.setState = function (index,state) {
      $scope.todos[index].state = state;
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });