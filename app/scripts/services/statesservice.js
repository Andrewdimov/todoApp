'use strict';

/**
 * @ngdoc service
 * @name todoApp.statesService
 * @description
 * # statesService
 * Constant in the todoApp.
 */
angular.module('todoApp')
  .constant("statesService",  [
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