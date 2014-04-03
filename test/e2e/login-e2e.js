/**
 * Created by crivas on 4/2/2014.
 */

'use strict';

describe('login test', function () {

    beforeEach(function () {
        browser.get('#/login');
        browser.waitForAngular();
    });

    it('should show login when you navigate to login', function () {
        expect(browser.getCurrentUrl()).toContain('#/login');
    });

    it('should contain a login button with the text submit', function () {
        expect(browser.$('.btn')).toBeDefined(); // does it exist?;
        expect(browser.$('.btn').getText()).toBe('Submit'); // what is the text of that button?;
    });

    it('logged in confirmation should be visible when entering correct username and password and clicking submit', function () {
        browser.$('#exampleInputUser').sendKeys('uptime'); // type into input fields
        browser.$('#exampleInputPassword').sendKeys('uptime'); // type into input fields
        browser.$('.btn').click();
        expect(browser.$('.logged-in').isDisplayed()).toBe(true); // all elements have the property method isDisplayed
    });

    it('logged in confirmation should be hidden when entering wrong username and password and clicking submit', function () {
        browser.$('#exampleInputUser').sendKeys('dfasdfsf'); // type into input fields
        browser.$('#exampleInputPassword').sendKeys('dfasfsdfe'); // type into input fields
        browser.$('.btn').click(); // simulate clicking the submit button
        expect(browser.$('.logged-in').isPresent()).toBe(false); // all elements have the property method isPresent
    });

});