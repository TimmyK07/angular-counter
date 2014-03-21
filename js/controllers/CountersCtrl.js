/*global angular:true */
/*jshint globalstrict:true */

"use strict";

angular.module("counterApp").controller("CountersCtrl", ["$scope",
    function($scope) {
        $scope.counters = [];

        $scope.numCounters = function() {
            return $scope.counters.length;
        };

        $scope.addCounter = function() {
            $scope.counters.push({
                count: 0
            });
        };
    }
]);
