'use strict';

/**
 * @ngdoc service
 * @name todoApp.AuthService
 * @description
 * # AuthService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('AuthService', function (localStorageService) {
    var service = {};

    service.Login = function (username, callback) {
    var response = {}; 
      var storeName = localStorageService.get('username');
      
      if (!storeName || username === storeName)
      {
          localStorageService.set('username', username);
          response.success = true;
      }
      else
      {
          response.message = 'Username is not correct';
          response.hint = 'Your username for this device is ' + storeName;
          response.success = false;
      }
      callback(response);
    };
    return service;
  });
