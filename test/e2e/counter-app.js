"use strict";

describe("Counter App", function() {

    // get the index page
    browser.get("index.html");

    it("should display heading", function() {
        // the "$()" is the same as element(by.css())
        expect($(".heading").getText()).toEqual("Angular Counters");
    });

    it("should display the add counter button", function() {
        expect($("p button").getText()).toEqual("Add Counter");
    });

});
