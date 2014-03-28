"use strict";

/*
 * This file is used to create the modules used within the application. This
 * could also be used to house the code for the application, but that logic has
 * been distributed within the controllers and services files themselves.
 */

// Create the counterApp module, the main module for the application.
// This module depends on the services.
angular.module("counterApp", ["counterApp.services"]);

// Create the counterApp.services module, which contains all the services for the application.
// This module has no dependencies.
angular.module("counterApp.services", []);
