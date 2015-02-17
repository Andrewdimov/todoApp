'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TasksCtrl', function ($scope, TaskService) {
   var service = TaskService;
   service.getList();
//   
//   $scope.addTodo = service.addTodo();
//
//   $scope.setState = service.setState(index,state);
//
//   $scope.removeTodo = service.removeTodo(index);
    
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
  });