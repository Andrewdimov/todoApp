'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('AuthCtrl', function ($scope, $location, AuthService) {

      $scope.login = function () {
        $scope.dataLoading = true;
        AuthService.Login($scope.username, function (response) {
            
          if (response.success) {
            $location.path('/tasks');
          } else {
            $scope.error = response.message;
            $scope.dataLoading = false;
            $scope.loginForm.$invalid = true;
          }
        });
      };
  });
