/*global angular:true */
/*jshint globalstrict:true */

"use strict";

angular.module("counterApp").controller("CounterCtrl", ["$scope",
    function($scope) {
        $scope.incrementCounter = function() {
            $scope.counter.increment();
        };

        $scope.decrementCounter = function() {
            $scope.counter.decrement();
        };
    }
]);
