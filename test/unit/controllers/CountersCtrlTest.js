"use strict";

describe("CountersCtrl", function() {
    var $scope, controller;

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

    // before each test, load the counterApp module
    beforeEach(module("counterApp"));

    // before each test, create a new CountersCtrl
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller("CountersCtrl", {
            $scope: $scope,
            Counter: Counter
        });
    }));

    it("should exist", function() {
        expect(controller).toBeDefined();
    });

    it("should create a new counter on addCounter()", function() {
        // expect empty counters to start
        expect($scope.counters).toBeTruthy();
        expect($scope.counters.length).toEqual(0);

        // add a counter
        $scope.addCounter();

        // expect a counter to exist in the counters array
        expect($scope.counters).toBeTruthy();
        expect($scope.counters.length).toEqual(1);
        expect($scope.counters[0].count).toEqual(0);
    });

    describe("with a single counter", function() {
        beforeEach(function() {
            $scope.addCounter();
        });

        it("should remove the counter on removeCounter()", function() {
            // expect a counter to exist in the counters array
            expect($scope.counters).toBeTruthy();
            expect($scope.counters.length).toEqual(1);
            expect($scope.counters[0].count).toEqual(0);

            // remove the 0th counter
            $scope.removeCounter(0);

            // expect no counters to exist
            expect($scope.counters).toBeTruthy();
            expect($scope.counters.length).toEqual(0);
        });
    });

    describe("with multiple counters", function() {
        beforeEach(function() {
            $scope.addCounter();
            $scope.addCounter();
            $scope.addCounter();
        });

        it("should remove the correct counter on removeCounter()", function() {
            // expect 3 counters
            expect($scope.counters).toBeTruthy();
            expect($scope.counters.length).toEqual(3);

            // change the counters so we can know which one is which
            $scope.counters[0].count = 0;
            $scope.counters[1].count = 1;
            $scope.counters[2].count = 2;

            // expect the values to align
            expect($scope.counters[0].count).toEqual(0);
            expect($scope.counters[1].count).toEqual(1);
            expect($scope.counters[2].count).toEqual(2);

            // remove the 1st counter
            $scope.removeCounter(1);

            // expect two counters to exist (the first and third one originally)
            expect($scope.counters).toBeTruthy();
            expect($scope.counters.length).toEqual(2);
            expect($scope.counters[0].count).toEqual(0);
            expect($scope.counters[1].count).toEqual(2);
        });
    });

});
