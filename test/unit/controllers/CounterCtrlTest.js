"use strict";

var assert = chai.assert;

describe("CounterCtrl", function() {
    var scope, controller;

    // before each test, load the counterApp module
    beforeEach(module("counterApp"));

    // before each test, create a new scope and use it to 
    // create a new CounterCtrl.
    // 
    // Note that we must separate out the module loading from the
    // injector, which means these must exist in separate beforeEach's
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller("CounterCtrl", {
            $scope: scope
        });
    }));

    it("should exist", function() {
        assert.ok(controller);
    });
});
