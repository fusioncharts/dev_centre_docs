---
permalink: gauge-and-widgets-guide/cylinder-gauge/real-time-gauges.html
title: Real-time Cylinder Gauge | FusionCharts
description: Real-time Cylinder Gauge can continuously request and render new data without involving a page refresh.
heading: Real-time Cylinder Gauge
chartPresent: true
---

The gauges in the FusionCharts Suite XT are real-time gauges that can continuously request and render new data without involving a page refresh. The gauges achieve this functionality in two ways:

* Using JavaScript API

* Using server-side scripts

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/real-time-gauges.html#configuring-real-time-updates-using-javascript-api">Configure real-time updates using JavaScript API</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/real-time-gauges.html#configuring-real-time-updates-using-server-side-script">Configure real-time updates using server-side script</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/real-time-gauges.html#configuring-real-time-events">Configure real-time events</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/real-time-gauges.html#troubleshooting-real-time-gauges">Troubleshoot real-time gauges</a>

## Configuring Real-time Updates using JavaScript API

### Real-time Data Format

The real-time data format for gauges depends on the data value to be passed.

In the simplest form, if you're looking to update the cylinder gauge, you need to pass a single value to the `value` attribute using the JSON key-value pair format. If this data is within the acceptable range of the chart, the chart will be updated to depict this value.

However, to dynamically pass values to the gauge, you use the JavaScript API.

A cylinder gauge configured to receive real-time updates using the JavaScript API looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-example-1.js %}

The cylinder gauge exposes the following JavaScript APIs:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`feedData(strData)`</td>
    <td>`strData`</td>
    <td>This method feeds real-time data to the chart using the JavaScript API. The data has to be in the same format as provided by real-time data provider page.</td>
  </tr>
  <tr>
    <td>`getData()`     </td>
    <td>`None`</td>
    <td>This method returns the data currently being shown by the gauge.</td>
  </tr>
  <tr>
    <td>`setData(value)`

</td>
    <td>`value`</td>
    <td>This method sets the data for the chart. The value should be within the limits of the gauge.</td>
  </tr>
</table>


## Configuring Real-time Updates using Server-side Script

Another way to update a chart in real-time is by using server-side script.

A cylinder gauge configured to receive real-time updates using the server-side script looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-example-2.js %}

The new attributes that need to be added for receiving real-time updates from the server are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataStreamURL`</td>
    <td>This attribute is used to set the path of the page which is supposed to relay real-time data to the chart. If you have special characters as a part of the data stream URL, like __?__ or __&amp;__, you will have to URL Encode the entire `dataStreamURL`.<br/>
    This page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security measures will restrict it from accessing the data and hence the real-time feature won't work.<br/>
    Example: dataStreamURL='liveQuote.aspx?name=xyz'</td>
  </tr>
  <tr>
    <td>`refreshInterval`</td>
    <td>This attribute is used to specify the number of seconds after which the chart will look for new data. This process will happen continuously - i.e., if you specify 5 seconds here, the chart will look for new data every 5 seconds.</td>
  </tr>
  <tr>
    <td>`dataStamp`</td>
    <td>This attribute is used to set a constantly changing data stamp that can be added to the real-time data URL, so as to maintain a state.
For more information, read the {% linkTo tutorials/chart-guide/real-time-charts/adding-data-stamp.md %} article. </td>
  </tr>
</table>


### Stopping and Restarting Real-time Updates

You can stop the chart from polling the server for any more real-time updates. To do this, you use the `stopUpdate` command as shown below:

```javascript
"stopUpdate": “1”;
```

To restart updates from the server, use the `startUpdate` command from the server as shown below:

```javascript
"startUpdate": “1”;
```

A cylinder gauge configured to allow stopping and restarting real-time updates from the server, looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-example-3.js %}

The cylinder gauge exposes the following JavaScript APIs for stop update and restart update:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`stopUpdate()`</td>
    <td>None</td>
    <td>This method stops the chart from self-updating.</td>
  </tr>
  <tr>
    <td>`restartUpdate()`</td>
    <td>None</td>
    <td>If you've stopped the update of the chart, you can resume the update using this method.</td>
  </tr>
</table>


## Configuring Real-time Events

You can use the `realTimeUpdateCompete` and the `realTimeUpdateError`  events to track real-time updates on charts and gauges.

### The `realTimeUpdateComplete` Event

This event is raised when a real-time gauge or chart completes updating data.

A cylinder gauge configured to listen to the `realTimeUpdateComplete` event looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-example-4.js %}

Given below is a brief description of the `realTimeUpdateComplete` event:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`realTimeUpdateComplete`</td>
    <td>This event is raised every time the real-time gauge updates itself with new data. This event is raised in any of the following cases:<br/>
    Real-time update using `datastreamURL`<br/>
    Real-time update using JavaScript API (using `setData`, `feedData`, `setDataForId` functions)<br/>
    Real-time update of the gauge through user interaction (through edit mode)<br/><br/>
    The event arguments provided in the advanced model are:<br/>
    `eventObject`: This object contains the `eventId`, `eventType`, and `sender` properties.<br/>
    `argumentsObject`: This object contains the values of the updated data and the previous data.</td>
  </tr>
</table>


### The `realTimeUpdateError` Event

This event is raised when an error occurs while updating data in a real-time gauge or chart. This event passes the HTTP Status (as number) of the error occurred as shown below:

A cylinder gauge configured to listen to the `realTimeUpdateError` event looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-example-5.js %}

Given below is a brief description of the `realtimeUpdateError` event:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`realtimeUpdateError`</td>
    <td>This event is raised when an error occurs while performing real-time update using `datastreamURL`.
    The event arguments provided in the advanced model are:<br/>
    1. `eventObject` : This object contains `eventId`, `eventType` and `sender` properties.<br/>
    2. `argumentsObject` : This object contains the property listed below:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. `httpStatus` : It contains the HTTP Error status value  as number (e.g., 404)</td>
  </tr>
</table>


## Troubleshooting Real-time Gauges

While accessing any of the JavaScript methods listed above, if you get an error like "... is not a function of ...", make sure that you are NOT running the chart from local file system (C:\ , D:\\). Instead, run the chart from behind a server (localhost - IIS, Apache etc.). This is because, by default, security settings do not allow the chart to perform JavaScript interactions on the local file system.