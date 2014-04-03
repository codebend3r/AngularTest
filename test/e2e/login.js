/**
 * Created by crivas on 4/2/2014.
 */

'use strict';

describe('e2e Login Test', function () {

    beforeEach(function () {
        browser.get('#/login');
        //browser.waitForAngular();
    });

    it('should show login when you navigate to login', function () {
        expect(browser.getCurrentUrl()).toContain('#/login');
    });

    it('should contain a login button with the text submit', function () {
        expect(browser.$('.btn')).toBeDefined(); // does it exist?;
        expect(browser.$('.btn').getText()).toBe('Submit'); // what is the text of that button?;
    });

    it('logged in confirmation should be visible when entering correct username and password and clicking submit', function () {
        browser.$('#exampleInputUser').sendKeys('uptime');
        browser.$('#exampleInputPassword').sendKeys('uptime');
        browser.$('.btn').click();
        expect(browser.$('.logged-in').isDisplayed()).toBe(true);
    });

    it('logged in confirmation should be hidden when entering wrong username and password and clicking submit', function () {
        browser.$('#exampleInputUser').sendKeys('dfasdfsf');
        browser.$('#exampleInputPassword').sendKeys('dfasfsdfe');
        browser.$('.btn').click();
        expect(browser.$('.logged-in')).toBeDefined();
    });

});