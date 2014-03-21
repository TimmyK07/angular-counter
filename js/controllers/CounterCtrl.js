/*global angular:true */
/*jshint globalstrict:true */

"use strict";

angular.module("counterApp").controller("CounterCtrl", ["$scope",
    function($scope) {
        $scope.increment = function() {
            $scope.counter.count++;
        };

        $scope.decrement = function() {
            $scope.counter.count--;
        };
    }
]);
