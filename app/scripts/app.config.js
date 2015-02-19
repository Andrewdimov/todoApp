'use strict';

/**
 * @ngdoc config
 * @description
 * # config
 * Config in the todoApp.
 */
angular.module('todoApp')
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])