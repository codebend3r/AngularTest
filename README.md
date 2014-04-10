Angular Test

PoC for getting started with unit testing and e2e test.

Getting Started
===============

Download Node (<http://nodejs.org/>) - note\* NPM is included in the node.js

Download RubyInstaller (<http://rubyinstaller.org/>) note\* RubyInstaller includes gems

Install NPM
------------

    npm install

Install Compass and SASS
------------

    gem install compass
    gem install sass

Install Yeoman
------------

    npm install -g yo

Install Bower (Optional)
------------

    bower install

Install Grunt (Optional)
------------

    npm install grunt --save-dev
    npm install -g grunt-cli

Install Karma and Protractor
------------

Karma

    npm install -g karma
    npm install karma-jasmine --save-dev

Karma Launchers (Optional)

    npm install karma-phantomjs-launcher --save-dev
    npm install karma-chrome-launcher --save-dev // installs both chrome and chrome canary
    npm install karma-IE-launcher --save-dev
    npm install karma-firefox-launcher --save-dev

Karma Coverage

    npm install karma-coverage --save-dev

Protractor

    npm install protractor -g
    webdriver-manager update
    npm install grunt-protractor-runner

Running Tasks
------------

Run Server
    grunt server

Run Karma
    grunt karma

Run Protractor
    grunt protractor

**NOTE - you just run grunt server then grunt protractor until we figure out how to make it into one task