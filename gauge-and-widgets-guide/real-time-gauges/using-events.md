---
permalink: gauge-and-widgets-guide/real-time-gauges/using-events.html
title: Using Events | FusionCharts
description: Real-time gauges are used when single value is of interest. FusionCharts offers two real-time events, realTimeUpdateComplete() & realTimeUpdateError()s
heading: Using Events
chartPresent: true
---

Real-time gauges are used when a single value is of interest and has to be monitored constantly. For example, if you want to monitor the forex rate, you can use a real-time gauge to display the current currency value, at every set interval. Based on the rates, if you intend to trade or take suitable action, you can use events to track the updates and trigger appropriate functions.

To know more about how to configure a real-time gauge, click [here]{% linkTo tutorials/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges.md %}.

FusionCharts Suite XT offers two real-time events:

* `realTimeUpdateComplete()`

* `realTimeUpdateError()`


## The `realtimeUpdateComplete()` Event

This event is triggered every time the gauge updates itself with new data, in one of the following ways:

- through `datastreamURL`

- through JavaScript API methods [`setData()`, `feedData()`, `setDataForId()`]

- through user interaction (Angular and Linear gauges provide an `edit mode` in which the

   user can directly update the value on the gauge)

A real-time thermometer gauge configured to listen to the `realTimeUpdateComplete()` event is shown below:

{% embed_all advanced-charting-real-time-gauges-using-events-example-1.js %}

The gauge displays the current temperature at Central Cold Store. When the temperature changes, the event `realTimeUpdateComplete()` is triggered. Consequently, the gauge and the annotation are updated.

A brief description of the `realTimeUpdateComplete()` event is as follows:

<table>
  <tr>
    <th>Event Name</th>
    <th>Parameters</th>
  </tr>
  <tr>
    <td>`realtimeUpdateComplete(eventObject, argumentsObject)`</td>
    <td>`eventObject`: contains the `eventId`, `eventType`, and `sender` properties.<br/>

`argumentsObject`: contains the following properties:

* `prevData` :  previous value fed to the gauge
* `source`     : method in which data is fed to the gauge - `feeddata` or `XmlHttpRequest`
* `updateObject` : contains the actual data received 
* `url`   : the URL of data source if the `source` is XmlHttpRequest; else `null`</td>
  </tr>
</table>


## The `realTimeUpdateError()` Event

This event is triggered when an error occurs while a gauge is updated in real-time, using `datastreamURL`.

A thermometer gauge configured to listen to the `realTimeUpdateError()` event is shown below:

{% embed_all advanced-charting-real-time-gauges-using-events-example-2.js %}

Here, the URL is set to `thermometerData.php`  which does not exist. Hence, the page returns an error and this is captured by the `realTimeUpdateError()` event that displays an error message.

A brief description of the `realTimeUpdateError()` event is as follows:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Parameters</th>
  </tr>
  <tr>
    <td>`realtimeUpdateError(eventObject,  argumentsObject)`</td>
    <td>`eventObject`: contains `eventId`, `eventType` and `sender` properties. <br/>

`argumentsObject`: contains the following properties:

* `httpStatus`: the HTTP Error status value  as a number (for example, 404)
* `error`: kind of error
* `source`:  method using which data is fed to the gauge- `feeddata` or `xmlHttpRequest`
* `url`: the URL of data source if the `source` is `xmlhttpRequest`; else `null`</td>
  </tr>
</table>
