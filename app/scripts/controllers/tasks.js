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
    $scope.taskList = service.taskList;
    $scope.states = TaskService.states;
   
    $scope.addTask = function(){
      service.addTask($scope.task);
      $scope.task = [];
      $scope.showForm = false;
    }

//    $scope.setState = service.setState($scope.index,$scope.state);
//
//    $scope.removeTask = service.removeTask($scope.index);

    $scope.states = service.states;
  });