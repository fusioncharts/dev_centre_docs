---
permalink: advanced-chart-configurations/events/handling-events.html
title: Handling Events | FusionCharts
description: Level up chart engagement. Master events with FusionCharts XT. Find guide & examples included. Unlock interactive charts & level up your engagement now!
heading: Handling Events
chartPresent: true
---

FusionCharts Suite XT includes an exhaustive set of events that let you interact with the product’s various [charts, gauges, and maps](http://www.fusioncharts.com/charts/) at different stages of their lifecycle—for example, when a chart completes rendering, when chart data is updated, when a data plot is clicked, and so on.

To configure events for charts, you need to:

- Decide the event you want to configure and the response you want when it is triggered
- Create an event listener that ‘listens’ for the event being triggered and executes the required response

This article describes how events in FusionCharts Suite XT are handled.

A simple example to understand this would be to use the `renderComplete` event to render a message every time, like the event name says, the chart completes rendering.

Start with a simple column 2D chart, as shown below:

{% embed_chart advanced-charting-events-handling-events-example-1.js %}

The data structure for this column 2D chart is given below:

{% embed_data advanced-charting-events-handling-events-example-1.js %}

Now, read on to understand how the `renderComplete` event will be handled for the above column 2D chart.

## Defining the Listener Function

To configure the `renderComplete` event for the column 2D chart, first define the listener function for the event in the JSON/XML code for the chart.

A listener function is a JavaScript function that accepts two optional arguments: `eventObj` and `eventArgs`. These arguments receive information specific to the event to which the listener is attached.

> For more details on the arguments passed to the event listeners, read the [FusionCharts API reference for event listeners](/api/fusioncharts/fusioncharts-typedefs#eventlistener).

The code snippet to define an event listener is shown below:

```javascript
var myEventListener = function(eventObj, eventArgs) {
  console.log(
    eventObj.eventType +
      " was raised by the chart whose ID is " +
      eventObj.sender.id
  );
};
```

The listener definition here uses the `eventObj` object to extract the type of event triggered and the ID of the chart on which the event is triggered.

Now for the listener function to perform its intended task, it has to be attached to an event. In context to the example above, this listener function will have to be attached to the `renderComplete` event.
This is done using the `addEventListener()` function, available on every instance of the chart.

For the `renderComplete` event in the above example, the listener is added right before the chart is rendered.

> It is not mandatory for all events to be registered before the `renderComplete` event is called. They can be registered just before you need to call them.

The `addEventListener()` function takes the following two parameters:

| Parameter  | Type                                                                                | Description                                                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | string, Array[string]                                                               | The name of the event to which a listener will be attached. The event name is not case sensitive. To register multiple events in the same registration call, provide them as an array of event names. |
| `listener` | [FusionCharts~eventListener](/api/fusioncharts/fusioncharts-typedefs#eventlistener) | The listener function that will be executed when the event is fired.                                                                                                                                  |

Once the listener function is defined, the line of code shown below is used to attach the listener function to the event:

```javascript
revenueChart.addEventListener(“renderComplete”, myEventListener);
```

Your column 2D chart is now configured to listen to the `renderComplete` event.

{% embed_chart advanced-charting-events-handling-events-example-2.js %}

Open the JavaScript console (the listener function is configured to log a message in the console) to see the following message:

**renderComplete event was raised by the chart whose ID is chartobject-2.**

The complete data structure of the chart, with the listener definition, is given below:

```javascript
FusionCharts.ready(function() {
  var revenueChart = new FusionCharts({
    type: "column2d",
    renderAt: "chart-container",
    width: "400",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Quarterly Revenue for FY2013-2014",
        subCaption: "Harry's SuperMart",
        xAxisName: "Quarter",
        yAxisName: "Revenue",
        numberPrefix: "$",
        theme: "fusion"
      },
      data: [
        {
          label: "Q1",
          value: "420000"
        },
        {
          label: "Q2",
          value: "810000"
        },
        {
          label: "Q3",
          value: "720000"
        },
        {
          label: "Q4",
          value: "550000"
        }
      ]
    }
  });

  var myEventListener = function(eventObj, eventArgs) {
    console.log(
      eventObj.eventType +
        " was raised by the chart whose ID is " +
        eventObj.sender.id
    );
  };

  revenueChart.addEventListener("renderComplete", myEventListener);
  revenueChart.render();
});
```

### Embedding the Listener Function Inside the Event Listener

In the example above, the listener function is defined separately using the `myEventListener` variable. An alternative way to do this is to embed the anonymous function inside the event listener.

This is how the code will then be re-written:

```javascript
revenueChart.addEventListener("renderComplete", function(eventObj, eventArgs) {
  console.log(
    eventObj.eventType +
      " was raised by the chart whose ID is " +
      eventObj.sender.id
  );
});
```

### Passing Event Listeners During Chart Creation

Another more unified way to pass all event listeners for a chart is to do so while creating the chart. This is done by passing all events using the `events` property within the object passed as the constructor parameter.

The `renderComplete` event for the above column 2D chart can thus be configured as:

```javascript
events:{
    'renderComplete': function(eventObj, args) {
        console.log(eventObj.eventType + " was raised by the chart whose ID is " + eventObj.sender.id);
    }
}
```

## Listening to Events Triggered for All Charts on a Page

Events can be attached to the `windows.FusionCharts` object. Attaching events to the FusionCharts constructor causes the event listener to be attached to all the charts on a page-the ones that are already created as well as the ones that will be created later.

Add the following code lines to the JS code for the above column 2D chart configured for the `renderComplete` event:

```javascript
FusionCharts.addEventListener("renderComplete", function(eventObj, eventArgs) {
  console.log(
    eventObj.eventType +
      " was raised by the chart whose ID is " +
      eventObj.sender.id
  );
});
```

When the JavaScript console is opened on a page with multiple charts, a list of messages in the console show that the`renderComplete` event has been triggered for all charts on the page.

## Listening to Multiple Events Triggered for One Chart

To listen to multiple events for one chart **using just one event listener**, use the code snippet shown below:

```javascript
var myEventListener = function (eventObj, eventArgs) {
   console.log(eventObj.eventType + " was raised by the chart whose ID is " + eventObj.sender.id);
};

myChart.addEventListener("initialized", myEventListener);
myChart.addEventListener("dataUpdated", myEventListener);
myChart.addEventListener("renderComplete", myEventListener);
myChart.addEventListener("disposed", myEventListener);

});
```

The above code configures four events, to be triggered during different stages of the chart’s lifecycle.

To optimize the above code, the last four lines of event attachment can be reduced to a single code line, where event names are passed as an array to the `addEventListener()` function. Use of the `myEventListener` variable can also be eliminated by passing the listener directly as an anonymous function.

This is how the revised code then looks:

```javascript
revenueChart.addEventListener(
  ["initialized", "dataUpdated", "renderComplete", "disposed"],
  function(eventObj, eventArgs) {
    console.log(
      eventObj.eventType +
        " was raised by the chart whose ID is " +
        eventObj.sender.id
    );
  }
);
```

## Cancelling Event Listeners

The `preventDefault()` function is used to cancel the execution of the listener function of an event. The function is used with the `eventObj` parameter—`eventObj.preventDefault()`—of the listener function.

For example, if you were to use this function with the `beforeRender` event of the chart, the result will be that the chart won’t render.

## Removing Event Listeners

To curb needless memory consumption by charts on a page, it is advisable to remove all event listeners that are not required.

The two functions that you can use to remove event listeners are:

- `removeEventListener()`
- `detachHandler()`

### The `removeEventListener()` Function

Event listeners attached globally on all charts can be removed by calling the `removeEventListener()` function on the `FusionCharts` object.

The `removeEventListener()` function takes the following two parameters:

| Parameter  | Type                  | Description                                                                                                                                                             |
| ---------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | string, Array[string] | The name of the event whose listener has to be removed. To remove listeners for multiple events (using the same listener) at once, provide the event names as an array. |
| `listener` | function              | The listener function that will be removed.                                                                                                                             |

### The `detachHandler()` Function

The `detachHandler()` function is used to remove/stop a listener from listening to an event.

One of the applications of this function is to restrict listening to an event only for the first instance of trigger.

The code snippet below shows how you can use this function:

```javascript
var func = function(eventObj) {
  console.log("Data was updated for the first time in chart");
  // Call detachHandler to stop listening to this event
  eventObj.detachHandler(a, b);
};

revenueChart.addEventListener("dataUpdated", func);
revenueChart.addEventListener("renderComplete", func);
```

The above code executes the listener when the `dataUpdated` event is triggered for the first time; after this execution, the listener detaches itself from the event.
