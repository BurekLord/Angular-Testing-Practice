// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            // MILE: mocha reporter is better looking
            require('karma-mocha-reporter'),
            // MILE: jasmine diff
            require('karma-jasmine-diff-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],

        // TRIGGER
        autoWatch: true,
        singleRun: false,
        restartOnFileChange: true,

        // BUILD
        frameworks: [ 'jasmine', '@angular-devkit/build-angular' ],
        basePath: '',

        // RUN
        port: 9876,
        // MILE: dont open the browser
        browsers: [ 'ChromeHeadless' ],
        // browsers: [ 'Chrome' ],

        // REPORT
        colors: true,
        logLevel: config.LOG_INFO,

        // MILE: jasmine-diff goes before so that it will work properly
        // MILE: mocha is a prettier reporter then 'progress'
        reporters: [ 'jasmine-diff', 'mocha' ],
        // reporters: ['progress', 'kjhtml'],

        // MILE: change the color of errors for jasmine-diff
        jasmineDiffReporter: {
            color: {
                expectedBg: 'bgMagenta',
                expectedWhitespaceBg: 'bgMagenta',
                actualBg: 'bgBlue',
                actualWhitespaceBg: 'bgBlue'
            }
        },

        // MILE: minimal mocha logs
        mochaReporter: {
            output: 'minimal'
        },

        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/llama-date'),
            reports: [ 'html', 'lcovonly', 'text-summary' ],
            fixWebpackSourcePaths: true
        }
    });
};
