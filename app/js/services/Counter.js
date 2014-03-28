/*global angular:true */
/*jshint globalstrict:true */

"use strict";

/**
 * Counter model used to store a count, exposing the count and functions
 * to increment and decrement this count.
 */
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

/**
 * Use the factory service here to return our Counter model. Even though this
 * is a "factory" it will only return this once, and cache the result. This
 * means that future requests for the "Counter" service will return the original
 * returned "Counter" function.
 *
 * The idea is that the code which depends on the "Counter" service will use
 * it to new up counters (e.g. new Counter()).
 *
 * @return {Function} The Counter model constructor function
 */
angular.module("counterApp.services").factory("Counter", function() {
    return Counter;
});
