var app = angular.module('plunker', ['ngRoute']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/position', {
    templateUrl: 'position.html',
    controller: 'MainCtrl'
  })
  .when('/vertical', {
    templateUrl: 'vertical-align.html',
    controller: 'MainCtrl'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
})