'use strict';

/**
 * @ngdoc overview
 * @name app2App
 * @description
 * # app2App
 *
 * Main module of the application.
 */
angular
  .module('app2App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/position.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
