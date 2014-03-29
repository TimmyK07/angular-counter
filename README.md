# angular-counter [![Build Status](https://travis-ci.org/dylants/angular-counter.svg?branch=master)](https://travis-ci.org/dylants/angular-counter) #

A very (very) simple counter app using Angular.js

## Overview ##

The purpose of this application was to model something very simple in Angular.js, to get a
better understanding of how it works. The app displays a list of counters, allowing you to
add a new counter to the page, or remove and existing counter. Each counter keeps track of
it's count, and the user can increment and decrement the count. That's pretty much it :)

## Technical Details ##

Angular is pretty flexible on how one can structure the application, but I chose to break
up the files based on the angular style guide: 
<a href="https://github.com/mgechev/angularjs-style-guide">https://github.com/mgechev/angularjs-style-guide</a>

### index.html ###

Since this application is only one page, a single HTML file is used, index.html. This file
pulls in all the required dependencies (angular, along with the counter app files), and
then structures the page. The <code>ng-app</code> directive is set within the &lt;body&gt;
tag, and points to the <code>counterApp</code> Angular module. It then sets the
<code>ng-controller</code> for <code>CountersCtrl</code> and <code>CounterCtrl</code>,
along with the <code>ng-click</code> actions for the buttons.

### app.js ###

The Angular modules are initialized in the <code>app.js</code> file, where a
<code>counterApp</code> is created which depends on the second module,
<code>counterApp.services</code>. The <code>counterApp.services</code> module is also
created, but has no dependencies, noted by the <code>[]</code>. These modules
can then be referenced in other files to add controllers, services, etc. 

### Counter.js ###

The only Angular service for this application is the counter, which is a model used to
store the count variable. This Angular service is a factory, which returns the
<code>Counter</code> model. Operations on the <code>Counter</code> model allow the user
to get the current count, and increment/decrement the count.

### CountersCtrl.js ###

The outer Angular controller is meant to add and remove <code>Counter</code>s. This
<code>CountersCtrl</code> is injected with the <code>Counter</code> service, which it uses
to create new <code>Counter</code> models. These models are added to an array. The
<code>removeCounter</code> function takes in the index of the counter to remove, and
removes that counter from the array.

### CounterCtrl.js ###

Within the index.html file, the <code>ng-repeat</code> directive is used to iterate
over all the <code>Counter</code>s within the <code>CountersCtrl</code>. For each
counter, a <code>CounterCtrl</code> is specified to gain access to that counter. The
<code>CounterCtrl</code> then has operations to increment/decrement the counter, calling
the <code>Counter</code> services increment/decrement functions.

Note that within this same scope in the index.html file, the <code>removeCounter</code>
function is located. This uses the <code>CountersCtrl</code> function since the
<code>CounterCtrl</code> does not have this function (parent scope).
