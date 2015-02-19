'use strict';

/**
 * @ngdoc service
 * @name todoApp.AuthService
 * @description
 * # AuthService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('AuthService', AuthService);
  
  AuthService.$inject = ['localStorageService'];
  
  function AuthService(localStorageService) {
    var service = {
        Login: Login
    }
    
    return service;
    
    function Login(username, callback) {
      
      var response = {
          message: null,
          hint: null,
          success: false,
      };
      
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
  };