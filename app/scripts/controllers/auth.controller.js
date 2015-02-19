'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AuthCtrl', AuthCtrl)
  
  AuthCtrl.$inject = ['$scope', '$location', 'AuthService'];
      
  function AuthCtrl($scope, $location, AuthService) {
    var vm = this;
    
    vm.login = function () {
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
