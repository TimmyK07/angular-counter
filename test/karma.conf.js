module.exports = function(config) {
    "use strict";

    config.set({

        basePath: "../",

        files: [
            // angular code
            "bower_components/angular/angular.js",

            // test code
            "bower_components/angular-mocks/angular-mocks.js",

            // source code
            "app/js/**/*.js",

            // test files
            "test/unit/**/*.js"
        ],

        autoWatch: true,

        frameworks: ["jasmine"],

        browsers: ["Chrome", "Firefox"],

        plugins: [
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });
};
