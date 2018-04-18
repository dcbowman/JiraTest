'use strict';

angular.module('myApp.backlog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/backlog', {
    templateUrl: 'backlog/backlog.html',
    controller: 'BacklogCtrl'
  });
}])

.controller('BacklogCtrl', [function() {

}]);