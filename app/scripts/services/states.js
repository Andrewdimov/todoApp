'use strict';

/**
 * @ngdoc service
 * @name todoApp.states
 * @description
 * # states
 * Constant in the todoApp.
 */
angular.module('todoApp')
  .constant('states ', [
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
  ]);
