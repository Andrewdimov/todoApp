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
  
  TasksCtrl.$inject = ['$scope', 'TaskService', 'states'];
      
  function TasksCtrl($scope, TaskService, states) {
    var service = TaskService;
    var vm = this;
    
    vm.taskList = service.taskList;
    vm.states = TaskService.states;
    vm.states = states;
    vm.setState = setState;
    vm.addTask = addTask;
    vm.removeTask = removeTask;
    
    function addTask(){
      service.addTask($scope.task);
      $scope.task = [];
      vm.showForm = false;
    }

    
    function setState(index, state){
      service.setState(index,state);
    };

    function removeTask(index){
        service.removeTask(index);
    }
  };