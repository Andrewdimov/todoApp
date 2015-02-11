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
          response.success = false;
      }
      callback(response);
      
      //$http.post('/api/authenticate', { username: username })
      //    .success(function (response) {
      //        callback(response);
      //    });

    };
    return service;
  });
