/*global angular:true */
/*jshint globalstrict:true */

"use strict";

angular.module("counterApp").controller("CountersCtrl", ["$scope", "Counter",
    function($scope, Counter) {
        $scope.counters = [];

        $scope.numCounters = function() {
            return $scope.counters.length;
        };

        $scope.addCounter = function() {
            var counter = new Counter();
            $scope.counters.push(counter);
        };

        $scope.removeCounter = function(index) {
            $scope.counters.splice(index, 1);
        };
    }
]);
