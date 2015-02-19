'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the todoApp    
 */
angular.module('todoApp')
  .controller('TasksCtrl', function ($scope, TaskService, states) {
    var service = TaskService;
    $scope.taskList = service.taskList;
    $scope.states = TaskService.states;
    $scope.states = states;
   
    $scope.addTask = function(){
      service.addTask($scope.task);
      $scope.task = [];
      $scope.showForm = false;
    }

    $scope.setState =  function(index, state){
      service.setState(index,state);
    };

    $scope.removeTask = function(index){
        service.removeTask(index);
    }

  });