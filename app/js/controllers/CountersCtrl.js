"use strict";

/**
 * Using the "counterApp" module, add on the "CountersCtrl" which allows adding
 * and removing of counters. The counters are kept on an internal array, and
 * interaction on a counter is handled by the "CounterCtrl".
 *
 * @param  {Object} $scope    The current Angular scope for this controller
 * @param  {Function} Counter The counter model constructor function
 */
angular.module("counterApp").controller("CountersCtrl", ["$scope", "Counter",
    function($scope, Counter) {
        // used to store the counters
        $scope.counters = [];

        /**
         * Creates a new Counter, and adds it to our internal array of counters
         */
        $scope.addCounter = function() {
            var counter = new Counter();
            $scope.counters.push(counter);
        };

        /**
         * Takes in the index of the counter to remove, and removes the counter
         *
         * @param  {Number} index The index of the counter to remove
         */
        $scope.removeCounter = function(index) {
            $scope.counters.splice(index, 1);
        };
    }
]);
