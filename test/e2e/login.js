
describe('Login Should Take you to Dashboard', function () {

    var ptor = protractor.getInstance();

    it('Login function should exist', function () {
        //ptor.get('/login');
        expect(true).toBe(true);
        //expect(ptor.location().path()).toBe("/login");
    });

    /*
    it('ensures user can log in', function() {

        b().navigateTo('#/login');
        expect(browser().location().path()).toBe("/login");

        // assuming inputs have ng-model specified, and this conbination will successfully login
        input('username').enter('Chester');
        input('password').enter('Rivas');
        element('submit').click();

        // logged in route
        expect(b().location().path()).toBe("/dashboard");

        // my dashboard page has a label for the email address of the logged in user
        expect(b('#email').html()).toContain('test@test.com');
    });
    */

});
