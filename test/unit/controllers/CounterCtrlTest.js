"use strict";

describe("CounterCtrl", function() {
    var $scope, controller;

    // before each test, load the counterApp module
    beforeEach(module("counterApp"));

    // before each test, create a new scope and use it to 
    // create a new CounterCtrl.
    // (Note that we must separate out the module loading from the
    // injector, which means these must exist in separate beforeEach's)
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller("CounterCtrl", {
            $scope: $scope
        });
    }));

    it("should exist", function() {
        expect(controller).toBeDefined();
    });

    describe("with a counter in scope", function() {

        // quickly define a counter to use in our controller
        function Counter() {
            this.count = 0;
            this.increment = function() {
                this.count++;
            };
            this.decrement = function() {
                this.count--;
            };
        }

        // before each test, setup the new Counter object
        beforeEach(function() {
            $scope.counter = new Counter();
        });

        it("should increment the count on incrementCounter call", function() {
            // initially the count is 0
            expect($scope.counter.count).toEqual(0);

            // call incrementCounter()
            $scope.incrementCounter();

            // now the count should be 1
            expect($scope.counter.count).toEqual(1);
        });

        it("should decrement the count on decrementCounter call", function() {
            // initially the count is 0
            expect($scope.counter.count).toEqual(0);

            // call decrementCounter()
            $scope.decrementCounter();

            // now the count should be -1
            expect($scope.counter.count).toEqual(-1);
        });
    });
});
