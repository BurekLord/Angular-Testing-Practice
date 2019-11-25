// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-mocha-reporter'),
            require('karma-jasmine-diff-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-jasmine-given'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],

        autoWatch: true,
        singleRun: false,
        restartOnFileChange: true,

        basePath: '',
        frameworks: ['jasmine-given', 'jasmine', '@angular-devkit/build-angular'],
        // dodo ja
        angularCli: {
            environment: 'dev'
        },

        port: 9876,
        // browsers: ['Chrome'],
        browsers: ['ChromeHeadless'],

        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        colors: true,
        logLevel: config.LOG_INFO,
        // reporters: ['progress', 'kjhtml'],
        reporters: ['jasmine-diff', 'mocha'],
        jasmineDiffReporter: {
            color: {
                expectedBg: 'bgMagenta',
                expectedWhitespaceBg: 'bgMagenta',
                actualBg: 'bgBlue',
                actualWhitespaceBg: 'bgBlue'
            },
            legacy: true
        },
        mochaReporter: {
            output: 'minimal'
        },

        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage/isolation-session'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
    });
};