'use strict';

/**
 * @ngdoc service
 * @name todoApp.taskservice
 * @description
 * # taskservice
 * Factory in the todoApp.
 */
angular.module('todoApp')
  .factory('TaskService', function (localStorageService) {
      
    var service = {
        taskList: localStorageService.get('taskList') || [],
        addTask: addTask,
        setState: setState,
        removeTask: removeTask,
        states: [
          { id: 1,  name: 'In Progress'},
          { id: 2, name: 'New'},
          { id: 3, name: 'Done'}
        ]
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
    };

    function removeTask(index) {
      service.taskList.splice(index, 1);
    };
    
    (function(){
      service.$watch('taskList', function () {
        localStorageService.set('taskList', service.taskList);
      }, true);  
    })();
    
  });
