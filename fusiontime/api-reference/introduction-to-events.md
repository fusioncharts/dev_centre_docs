---
title: 'Introduction to Events in FusionTime | FusionCharts'
description: Explore FusionTime's API events: learn how to manage chart interactions with detailed documentation on event handling in FusionTime by FusionCharts. Check now!
heading: Introduction to Events
---

A FusionCharts Time-Series chart emits events in order to allow developers to hook into certain occurrences that happen in the lifecycle of the chart. Events are triggered by the chart to send a signal to the outside world that a change in its state has occurred. Interacting with various chart components (using a mouse, for example) may also emit events. Developers can programmatically listen to these events and customize their implementations as desired.

In a time-series chart, the spread of time axis can change from multiple user interactions - zooming, panning on chart canvas, selecting some standard range from SRS, specifying a valid range from CRS, dragging the handle bar of the mask in time navigator, or as a result of any other method; and whenever it changes, this event is fired.

So, if a developer wants to be notified of **any** change in spread of the time axis, he can use this event.

An exhaustive list of events triggered by FusionCharts Time-series can be found on the [events](/fusiontime/api/fusiontime-events) page.

## Adding an event

An event can be added by:

- Using the `FusionCharts#addEventListener` API

- Using the `events` object in the input JSON to FusionCharts

### Using the `FusionCharts#addEventListener` API

The FusionCharts#addEventListener API accepts an event name as its first parameter followed by a developer defined function which will be called by FusionCharts whenever the event occurs.

As an example, the `selectionChange` event on an instance of FusionCharts stored in the `myChart` variable can be listened to by a function called `myListenerFunction` in the following way:

```javascript
... // Define the chart instance
var myChart = new FusionCharts({

// chart configuration

});
myChart.render();

// Listening to 'selectionChange' event
myChart.addEventListener('selectionChange', myListenerFunction);
```

Here,

- `myChart` is the name of the FusionCharts instance

- `selectionChange` event is being listened to

- `myListenerFunction` is the listener function for the event.

#### Listener function

It is a developer defined function which is called by FusionCharts when a specified event occurs. It is provided one argument - the event object. In the example below, the event object is stored in the `eventObj` parameter:

```javascript
var myListenerFunction = function(eventObj) {
  // Do something with eventObj here
};
```

Here,

- `myListenerFunction` is the name of the listener function

- `eventObj` is a parent object of eventArgs which has a lot of information on the rendered chart. Of particular interest might be the

### Using events object

In this approach, the event name with its listener function can be directly defined in the JSON data passed to FusionCharts. As an example,

```javascript
var myChart = new FusionCharts({
	dataSource: {
	...
	},
	// Define the events inside the events object
	events: {
		selectionChange : myListenerFunction,
	dataPlotClick : myListenerFunction2
	}
});
```

Here,

- We have defined two events inside the events object - `selectionChange` and `dataPlotClick`

- The listener function for `selectionChange` is `myListenerFunction`

- The listener function for `dataPlotClick` is `myListenerFunction2`

## Removing an event

Any events added to an instance of FusionCharts Time-series is automatically removed when the chart instance is disposed. However, one can manually remove an event by using the `FusionCharts#removeEventListener` API.

Using this approach, an event listener function can be removed from an instance of FusionCharts Time-series. It accepts a single parameter which should be a reference to the same function that was added as a listener to the chart.

Refer to the code below for an example implementation:

```javascript
// Define the chart instance
var myChart = new FusionCharts({
  // chart configurations
});
myChart.render();
// Define listener function
var myListenerFunction = function(eventObj) {
  // Do something with eventObj
};
// Remove 'selectionChange' event from myChart
myChart.removeEventListener("selectionChange", myListenerFunction);
```

Here,

- `myChart` is the name of the FusionCharts instance

- `myListenerFunction` is a listener function

- `selectionChange` is the event which will not be listened to any futher

## Listen to an event just once - using `detachHandler`

Often, it is quite convenient to listen to an event just once. Or there are cases where it is inconvenient to keep around a reference to the function that was added as a listener to some event.

In such cases, the listener function itself can invoke the `detachHandler` method which is available on the event object that it receives as a parameter. Upon invoking `detachHandler` the listener function will not be called for subsequent triggers of the event.

Here's an example to show how to use `detachHandler` in order to listen to the selectionChange event only once:

```javascript
var myChart = new FusionCharts({
  // chart configurations
});
myChart.render();
// Listening to 'selectionChange' event. myChart contains an instance of FusionCharts
// Time-series
myChart.addEventListener("selectionChange", function(eventObj) {
  eventObj.detachHandler();
  // Do something with eventObj and eventArgs
});
```
