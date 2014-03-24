/*global angular:true */
/*jshint globalstrict:true */

"use strict";

function Counter() {
    var count;

    count = 0;

    this.getCount = function() {
        return count;
    };

    this.increment = function() {
        count++;
    };

    this.decrement = function() {
        count--;
    };
}

angular.module("counterApp.services").factory("Counter", function() {
    return Counter;
});
