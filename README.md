Angular Test

Includes
- working karma for unit testing
- working protractor for e2e testing

Installation Instructions

<pre>
npm install

bower install

npm install grunt --save-dev
npm install -g grunt-cli
</pre>

<h3>Install Karma and Jasmine</h3>
<pre>
npm install -g karma
npm install karma-jasmine --save-dev
// launchers are optional
npm install karma-phantomjs-launcher --save-dev
npm install karma-chrome-launcher --save-dev // install both chrome and chrome canary
npm install karma-IE-launcher --save-dev
npm install karma-firefox-launcher --save-dev
// install code coverage
npm install karma-coverage --save-dev
</pre>

<h3>Install Protractor</h3>
<pre>
npm install protractor -g
webdriver-manager update
npm install grunt-protractor-runner
</pre>