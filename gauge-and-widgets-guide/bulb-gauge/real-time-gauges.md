---
permalink: gauge-and-widgets-guide/bulb-gauge/real-time-gauges.html
title: Real-time Bulb Gauge | FusionCharts
description: The bulb gauge is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes.
heading: Real-time Bulb Gauge
chartPresent: true
---

The bulb gauge is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data periodically, and auto-updates to reflect the current state of data. There are two different ways to update the bulb gauge; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

In this section, you will be shown how you can,

* <a href="/gauge-and-widgets-guide/bulb-gauge/real-time-gauges#configuring-real-time-updates-using-javascript-api" class="smoth-scroll">Configure real-time updates using JavaScript API</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/real-time-gauges#configuring-real-time-updates-using-server-side-scripts" class="smoth-scroll">Configure real-time updates using server-side script</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/real-time-gauges#stoppingrestarting-updates" class="smoth-scroll">Stop/restart updates</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/real-time-gauges#configuring-real-time-events" class="smoth-scroll">Configure real-time events</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/real-time-gauges#troubleshooting-real-time-gauges" class="smoth-scroll">Troubleshoot real-time gauges</a>

## Configuring Real-time Updates Using JavaScript API

### Real-time Data Format

The data provider page on the server’s end, when invoked by the bulb gauge, will output the new data in the real-time data format.

The real-time data format for gauges depends on:

* the value to be passed

* whether you are using the message logger for the gauge

* the use of commands for the gauge - like stop update etc.

In the simplest form, if you're looking to update the bulb gauge, you need to output the data in the following format:

```javascript
&amp;value=-5
```

Here, the output is a single value, -5. So, when the gauge will read this value, it will update the chart by setting its value to 25 (if a data range is provided by the gauge, the value will first be checked to verify if it falls within the defined range).

A bulb gauge configured for real-time updates using JavaScript API looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-1.js %}

Given below is a brief description of the JavaScript API used to configure real-time updates:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`feedData(strData)`</td>
    <td>strData</td>
    <td>This method is used to feed real-time data to the gauge using JavaScript. The data has to be in the same format as provided by the real-time data provider page.</td>
  </tr>
  <tr>
    <td>`getData()`</td>
    <td>None</td>
    <td>This method is used to return the data currently being shown by the gauge.</td>
  </tr>
  <tr>
    <td>`setData(value)`</td>
    <td>value</td>
    <td>This method is used to set the data value for the gauge. The value should be within the limits of the gauge.</td>
  </tr>
</table>


## Configuring Real-time Updates Using Server-side Scripts

A bulb gauge configured for real-time updates using server-side script looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-2.js %}

Given below is a brief description of the attributes needed to configure real-time updates from the server:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataStreamURL`</td>
    <td>This parameter sets the path of the page which is supposed to relay real-time data to the chart. If you have special characters as a part of the data stream URL, like __?__ or __&amp;__, you will have to URL Encode the entire `dataStreamURL`.<br/>
    This page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real-time feature won't work.<br/>
    Example: `dataStreamURL='liveQuote.aspx?name=xyz'`</td>
  </tr>
  <tr>
    <td>`refreshInterval`</td>
    <td>For this parameter, we can specify the number of seconds after which the chart will look for new data. This process will happen continuously - i.e., if we specify 5 seconds here, the chart will look for new data after every 5 seconds.</td>
  </tr>
  <tr>
    <td>`dataStamp`</td>
    <td>Constantly changing data stamp that can be added to the real-time data URL, so as to maintain a state. For more information, read the (/chart-guide/real-time-charts/adding-data-stamp) article.</td>
  </tr>
</table>


## Stopping/Restarting Updates

A bulb gauge configured to stop receiving real-time updates looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-3.js %}

Given below is a brief description of the JavaScript API used to stop and restart receiving real-time updates:

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
    <td>If you've stopped the real-time update of the chart, you can resume the update using this method.</td>
  </tr>
</table>


## Configuring Real-time Events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real-time updates on gauges.

A real-time bulb gauge configured to listen to the `realTimeUpdateComplete` event looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-4.js %}

Given below is a brief description of the `realTimeUpdateComplete` event:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`realtimeUpdateComplete`</td>
    <td>This event is raised every time the real-time gauge updates itself with new data. This event is raised in any of the following cases:<br/>
    Real-time update using `datastreamURL`<br/>
    Real-time update using JavaScript API (using `setData`, `feedData`, `setDataForId` functions)<br/>
    Real-time update of the gauge through user interaction (through edit mode)<br/><br/>
    The event arguments provided in the advanced model are:<br/>
    `eventObject`: This object contains the `eventId`, `eventType`, and `sender` properties.<br/>
    `argumentsObject`: This object contains the values of the updated data and the previous data.</td>
  </tr>
</table>


A bulb gauge configured to listen to the `realTimeUpdateError` event looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-real-time-gauges-example-5.js %}

Given below is a brief description of the `realTimeUpdateError` event:

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

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\\). Instead, run the chart from behind a server (localhost - IIS, Apache etc.). This is because the default security settings do not allow the chart to perform JavaScript interactions on the local file system.