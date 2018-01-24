---
permalink: chart-guide/real-time-charts/listening-to-events.html
title: Listening to Events | FusionCharts
description: The FusionCharts JavaScript Class API provides a number of events for real-time charts.
heading: Listening to Events
chartPresent: true
---

The FusionCharts JavaScript Class API provides a number of events for real-time charts. These events are categorized into two broad groups - simple events and advanced events. Each event provides arguments to the event-listeners.

In the advanced model, two event parameters are passed to the event listener function. The first parameter, `eventObject` is is structurally common for all events. The second parameter, `argumentsObject` contains event specific properties.

In this section, you will be introduced to the:

* <a href="/chart-guide/real-time-charts/listening-to-events#event-parameters-in-the-simple-model" class="smoth-scroll">Event parameters in the simple model</a>

* <a href="/chart-guide/real-time-charts/listening-to-events#event-parameters-in-the-advanced-model" class="smoth-scroll">Event parameters in the advanced model</a>

* <a href="/chart-guide/real-time-charts/listening-to-events#real-time-events" class="smoth-scroll">Real-time events</a>

## Event Parameters in the Simple Model

In the simple events model, most events (except the `FC_Exported` and the `FC_Resized` events) provide the DOM Id of the source chart - the chart that raised the event.

## Event Parameters in the Advanced Model

In the advanced model, two event parameters are passed to the event listener function. The first parameter, `eventObject` is is structurally common for all events. The second parameter, `argumentsObject` contains event specific properties.

The details of these objects are explained below:

* `eventObject`, the first argument, provides details of the event. This object has the following three properties:

* eventId : An unique id given to the event.

* eventType : A string containing the name or the event type e.g. "rendered" etc.

* sender : A FusionCharts JavaScript Object reference to the chart that has raised the event.

* `argumentsObject`, the second argument, contains details of the event fired.  Depending on the type of event raised, the properties of the object vary.

For more information on simple and advanced events and the `argumentsObject` for each event, refer to the [FusionCharts Events API](/api/fusioncharts/fusioncharts-events) page.

## Real-time Events

### The realtimeUpdateComplete Event

The FusionCharts JavaScript Class API `realTimeUpdateComplete`  event is raised every time a real-time chart or gauge updates itself  with new data.

A real-time column chart configured to listen to the `realTimeUpdateComplete` event is shown below:

{% embed_all advanced-charting-real-time-charts-listening-to-events-example-1.js %}

The above chart shows the real-time statistics of footfalls at the Bakersfield Central outlet. The chart is updated with new data every five seconds. Whenever there is a data update, the `realTimeUpdateComplete` event is fired. The event is configured to then retrieve the last data updated and display it in an HTML table rendered below the chart.





More details pertaining to this event are given in the table below:

<table>
  <tr>
    <th>Name (Advanced model)</th>
    <th>Name (Simple model)</th>
    <th>When is it raised?</th>
    <th>Event parameters</th>
  </tr>
  <tr>
    <td>`realtimeUpdateComplete`</td>
    <td>FC_ChartUpdated
</td>
    <td>This event is raised whenever data is updated in real-time using:
<br/>the data provider page specified in the `datastreamURL` attribute
<br/>JavaScript API (using `setData`, `feedData`, `setDataForId` functions)</td>
    <td>The event argument provided by `FC_ChartUpdated` function (simple event model) is the `DOMId` of the chart raising the event.

The event arguments provided in the advanced model are:
<br/>`eventObject` : This object contains the `eventId`, `eventType`, and `sender` properties.
<br/>
`argumentsObject`: This is passed as a blank object.</td>
  </tr>
</table>


### The realtimeUpdateError Event

The `realTimeUpdateError` event is raised when an error occurs while performing a real-time update from the data provider page specified using the `dataStreamURL` attribute.



A real-time column chart configured to listen to the `realTimeUpdateError` event is shown below:



{% embed_all advanced-charting-real-time-charts-listening-to-events-example-2.js %}













In the above data, the URL to a fake data provider page has passed as value to the `dataStreamURL` attribute. We have done this to trigger the `realTimeUpdateError` event. When this event is raised, a custom error message and the error status code are displayed.

More details pertaining to this event are given in the table below:

<table>
  <tr>
    <th>Name (Advanced model)         </th>
    <th>Name (Simple model)     </th>
    <th>When is it raised?</th>
    <th>Event parameters</th>
  </tr>
  <tr>
    <td>`realtimeUpdateError`</td>
    <td>Not available
</td>
    <td>This event is raised when an error occurs while performing real-time update using `datastreamURL`.</td>
    <td>The event arguments provided in the advanced model are:
<br/>`eventObject` : This object contains `eventId`, `eventType` and `sender` properties.

<br/>`argumentsObject`: This object contains the property listed below:
<br/>`httpStatus`: The HTTP Error status value is specified as a number (e.g., 404)

</td>
  </tr>
</table>