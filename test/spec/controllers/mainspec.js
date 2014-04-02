/**
 * Created by crivas on 4/2/2014.
 */

'use strict';

describe('Verify Successful Login', function () {

    // load the controller's module
    beforeEach(module('angularTestApp'));

    var LoginCtrl,
        scope,
        user;

    beforeEach(inject(function ($controller, $rootScope, usersList) { // 'beforeEach' function is literally called before each 'it' function
        scope = $rootScope.$new(); // instantiate new scope
        user = usersList; // custom dependency
        LoginCtrl = $controller('LoginCtrl', { // reference to login controller
            $scope: scope // save new scope to login controller
        });
    }));;

    it('should return oh hello!', function () {
        expect(scope.hello()).toBe('oh hello!');
    });

    it('should have a defined login method', function () {
        expect(scope.login).toBeDefined();
    });

    it('returns true if username is uptime and password is uptime', function () {
        scope.credentials.username = 'uptime';
        scope.credentials.password = 'uptime';
        expect(scope.login()).toBe(true);
    });

    it('returns true if username is Bender and password is Rodriguez', function () {
        scope.credentials.username = 'Bender';
        scope.credentials.password = 'Rodriguez';
        expect(scope.login()).toBe(true);
    });

    it('returns false if username is Amy and password is Wong', function () {
        scope.credentials.username = 'Amy';
        scope.credentials.password = 'Wong';
        expect(scope.login()).toBe(false);
    });

    it('returns true if dynamic username matches password', function () {
        var n = Math.ceil(Math.random() * user.length - 1),
            randomUser = user[n];
        scope.credentials = randomUser;
        expect(scope.login()).toBe(true);
    });

});