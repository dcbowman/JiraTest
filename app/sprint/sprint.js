'use strict';

angular.module('myApp.sprint', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sprint', {
    templateUrl: 'sprint/sprint.html',
    controller: 'SprintCtrl'
  });
}])

.controller('SprintCtrl', $scope [function($scope) {
	$scope.date ='4/17/08'
}]);