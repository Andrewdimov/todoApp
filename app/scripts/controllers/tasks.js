'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the todoApp    
 */
angular.module('todoApp')
  .controller('TasksCtrl', TasksCtrl);
      
  function TasksCtrl($scope, TaskService, statesService) {
    var service = TaskService;
    var vm = this;
    
    vm.taskList = service.taskList;
    vm.states = TaskService.states;
    vm.states = statesService;
    vm.setState = setState;
    vm.addTask = addTask;
    vm.removeTask = removeTask;
    
    function addTask(){
      service.addTask($scope.task);
      $scope.task = [];
      $scope.showForm = false;
    }

    
    function setState(index, state){
      service.setState(index,state);
    };

    function removeTask(index){
        service.removeTask(index);
    }
  };