---
permalink: gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs.html
title: Real-time Bullet Graph | FusionCharts
description: The bullet graph is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes.
heading: Real-time Bullet Graph
chartPresent: true
---

The bullet graph (horizontal and vertical bullet) is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data periodically, and auto-updates to reflect the current state of data. There are two different ways to update the bullet; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

In this section, you will be shown how you can,

* <a href="/gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs#configuring-real-time-updates-using-javascript-api" class="smoth-scroll">Configure real-time updates using JavaScript API</a>

* <a href="/gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs#configuring-real-time-updates-using-server-side-scripts" class="smoth-scroll">Configure real-time updates using server-side script</a>

* <a href="/gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs#stoppingrestarting-updates" class="smoth-scroll">Stop/restart updates</a>

* <a href="/gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs#configuring-real-time-events" class="smoth-scroll">Configure real-time events</a>

* <a href="/gauge-and-widgets-guide/bullet-graph/real-time-bullet-graphs#troubleshooting-real-time-graphs" class="smoth-scroll">Troubleshoot real-time graphs</a>

## Configuring Real-time Updates Using JavaScript API

### Real-time Data Format

The real-time data format for bullet chart depends on the data value to be passed.

In the simplest form, if you're looking to update the bullet chart, you need to pass a single value to the `value` attribute using the JSON key-value pair format. If this data is within the acceptable range of the chart, the chart will be updated to depict this value.

However, to dynamically pass values to the gauge, you use the JavaScript API.

A bullet graph configured for real-time updates using JavaScript API looks like this:
<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
      <div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
        <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
        <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
      </div>  <div style="padding-left: 2px; margin-top: -25px;">
      {% embed_severalCharts {"source": "gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-1.js", "id": "1", "totalCharts": "5"} %}
    </div></div><br/>
  
As you can see above, 5 real-time horizontal charts are rendered at a time to showcase a Daily Sales Tracker of salesperson for Stereo Exchange Ltd, New York.

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
    <td>This method is used to feed real-time data to the bullet using JavaScript. The data has to be in the same format as provided by the real-time data provider page.</td>
  </tr>
  <tr>
    <td>`getData()`</td>
    <td>None</td>
    <td>This method is used to return the data currently being shown by the gauge.</td>
  </tr>
  <tr>
    <td>`setData(value)`</td>
    <td>value</td>
    <td>This method is used to set the data value for the gauge. The value should be within the limits of the bullet.</td>
  </tr>
</table>


## Configuring Real-time Updates Using Server-side Scripts

A horizontal bullet configured for real-time updates using server-side script looks like this:

<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
      <div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
        <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
        <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
      </div>  <div style="padding-left: 2px; margin-top: -25px;">
{% embed_chart gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-2.js %}
    </div></div><br/>

The data structure needed to render the above chart is given below:

{% embed_data gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-2.js %}

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

A horizontal bullet configured to stop receiving real-time updates looks like this:

<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
      <div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
        <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
        <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
      </div>  <div style="padding-left: 2px; margin-top: -25px;">
{% embed_chart gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-3.js %}
    </div></div><br/>

The data structure needed to render the above chart is given below:

{% embed_data gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-4.js %}

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

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real-time updates on bullets.

Following is an implementation of `realTimeUpdateComplete` event in Real-time bullet graph:

<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
      <div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
        <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
        <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
      </div>  <div style="padding-left: 2px; margin-top: -25px;">
{% embed_chart gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-4.js %}
    </div></div><br/>

Given below is a brief description of the `realTimeUpdateComplete` event:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`realtimeUpdateComplete`</td>
    <td>This event is raised every time the real-time bullet updates itself with new data. This event is raised in any of the following cases:<br/>
    Real-time update using `datastreamURL`<br/>
    Real-time update using JavaScript API (using `setData`, `feedData`, `setDataForId` functions)<br/><br/>
    The event arguments provided in the advanced model are:<br/>
    `eventObject`: This object contains the `eventId`, `eventType`, and `sender` properties.<br/>
    `argumentsObject`: This object contains the values of the updated data and the previous data.</td>
  </tr>
</table>


A horizontal bullet configured to listen to the `realTimeUpdateError` event is implemented below:

<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
      <div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
        <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
        <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
      </div>  <div style="padding-left: 2px; margin-top: -25px;">
{% embed_chart gauge-and-widgets-guide-bullet-graph-real-time-bullet-graphs-example-5.js %}
    </div></div><br/>

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

## Troubleshooting Real-time Graphs

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`,

* Make sure that you are NOT running the chart from the local file system (C:\ , D:\\). Instead, run the chart from a server (localhost - IIS, Apache etc.). This is because the default security settings do not allow the chart to perform JavaScript interactions on the local file system.