'use strict';

myApp.factory('usersList', function(){
    return [
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

myApp.controller('LoginCtrl', function ($scope, $location, usersList) {

    $scope.header = 'Uptime Login';

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.hello = function() {
        return 'oh hello!';
    };

    $scope.login = function () {
        var success = false;
        if ($scope.credentials.username === 'uptime' && $scope.credentials.password === 'uptime') {
            success = true;
            return success;
        } else {
            usersList.forEach(function(element){
                if ($scope.credentials.username === element.username && $scope.credentials.password === element.password) {
                    success = true;
                    return success;
                }
            });
            return success;
        }
    };

});
