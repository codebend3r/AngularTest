/**
 * Created by crivas on 4/2/2014.
 */

'use strict';

myApp.factory('usersList', function(){
    return [
        {
            username: 'uptime',
            password: 'uptime'
        },
        {
            username: 'Bender',
            password: 'Rodriguez'
        },
        {
            username: 'Philip',
            password: 'Fry'
        },
        {
            username: 'Turanga',
            password: 'Leela'
        },
        {
            username: 'Hermes',
            password: 'Conrad'
        }
    ]
});

myApp.controller('LoginCtrl', function ($scope, usersList) {

    $scope.title = 'Uptime Login';

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.hello = function() {
        return 'oh hello!';
    };

    $scope.loggedIn = false;

    $scope.login = function () {
        usersList.forEach(function(element){
            if ($scope.credentials.username === element.username && $scope.credentials.password === element.password) {
                $scope.loggedIn = true;
                return $scope.loggedIn;
            }
        });
        return $scope.loggedIn;
    };

});
