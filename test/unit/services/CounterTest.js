"use strict";

describe("CounterTest", function() {
    // before each test, load the counterApp.services module
    beforeEach(module("counterApp.services"));

    it("should exist", inject(function(Counter) {
        expect(Counter).toBeDefined();
    }));

    describe("a new Counter", function() {
        var counter;

        beforeEach(inject(function(Counter) {
            counter = new Counter();
        }));

        it("should have 0 for initial count", function() {
            expect(counter.getCount()).toEqual(0);
        });

        it("should increment the count on increment()", function() {
            // initially 0
            expect(counter.getCount()).toEqual(0);

            counter.increment();

            // now it should be 1
            expect(counter.getCount()).toEqual(1);
        });

        it("should decrement the count on decrement()", function() {
            // initially 0
            expect(counter.getCount()).toEqual(0);

            counter.decrement();

            // now it should be -1
            expect(counter.getCount()).toEqual(-1);
        });
    });

});
