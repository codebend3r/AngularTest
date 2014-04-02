'use strict';

var myApp = angular.module('angularTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
