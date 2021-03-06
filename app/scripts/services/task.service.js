'use strict';

/**
 * @ngdoc service
 * @name todoApp.TaskService
 * @description
 * # TaskService
 * Factory in the todoApp.
 */
(function() {
angular.module('todoApp')
  .factory('TaskService', TaskService);
  
  TaskService.$inject = ['localStorageService'];
  
  function TaskService(localStorageService) {
      
    var service = {
        taskList: localStorageService.get('taskList') || [],
        addTask: addTask,
        setState: setState,
        removeTask: removeTask
    };
    
    return service;
    
    function addTask(task) {
      task.date = new Date();
      task.state = '2';
      service.taskList.push(task);
      localStorageService.set('taskList', service.taskList);
    };

    function setState(index,state) {
      service.taskList[index].state = state;
        localStorageService.set('taskList', service.taskList);
    };

    function removeTask(index) {
      service.taskList.splice(index, 1);
        localStorageService.set('taskList', service.taskList);
    };
    
  };
})();