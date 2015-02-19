'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AuthController
 * @description
 * # AuthController
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AuthController', AuthCtrl)
  
  AuthCtrl.$inject = ['$scope', '$location', 'AuthService'];
      
  function AuthCtrl($scope, $location, AuthService) {
    var vm = this;
    vm.login = login;
    vm.error = null;
    vm.hint = null;
    vm.dataLoading = false;
    
    function login() {
      vm.dataLoading = true;
      AuthService.Login($scope.username, function (response) {

        if (response.success) {
          $location.path('/tasks');
        } else {
          vm.error = response.message;
          vm.hint = response.hint;
          vm.dataLoading = false;
          $scope.loginForm.$invalid = true;
        }
      });
    };
  };
