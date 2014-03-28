/*global angular:true */
/*jshint globalstrict:true */

"use strict";

/**
 * Using the "counterApp" module, add on the "CounterCtrl" which handles interaction
 * with a specific counter. Function provided act on the "counter" in the current scope.
 *
 * @param  {Object} $scope   The current Angular scope for this controller
 */
angular.module("counterApp").controller("CounterCtrl", ["$scope",
    function($scope) {

        /**
         * Increments the counter, using the counter in the current scope
         * of this controller.
         */
        $scope.incrementCounter = function() {
            $scope.counter.increment();
        };

        /**
         * Decrements the counter, using the counter in the current scope
         * of this controller.
         */
        $scope.decrementCounter = function() {
            $scope.counter.decrement();
        };
    }
]);
