'use strict';

/**
 * @ngdoc function
 * @name app2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app2App
 */
angular.module('app2App')
  .controller('MainCtrl', function ($scope) {
  	$scope.hieu={}
  $scope.alert = function(name){
  	alert(name)
  };
  $scope.stopPropagation = function(name,$event){
  	$scope.alert(name);
  	$event.stopPropagation();
  }
  });
