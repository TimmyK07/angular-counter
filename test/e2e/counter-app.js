"use strict";

describe("Counter App", function() {

    // get the index page
    browser.get("index.html");

    it("should display heading", function() {
        // the "$()" is the same as element(by.css())
        expect($(".heading").getText()).toEqual("Angular Counters");
    });

    it("should display the add counter button", function() {
        expect($("#add-counter").getText()).toEqual("Add Counter");
    });

    it("should NOT display any counters", function() {
        expect($(".counter").isPresent()).toBeFalsy();
    });

    describe("clicking Add Counter", function() {
        beforeEach(function() {
            $("#add-counter").click();
        });

        it("should display a counter", function() {
            expect($(".counter").isPresent()).toBeTruthy();
        });
    });

});
