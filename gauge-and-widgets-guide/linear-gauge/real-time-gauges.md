---
permalink: gauge-and-widgets-guide/linear-gauge/real-time-gauges.html
title: Real-time Linear Gauge | FusionCharts
description: This section of linear gauge talks about configuring real-time updated using Javascript API or server-side script, etc
heading: Real-time Linear Gauge
chartPresent: true
---

The linear gauge is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data every n seconds, and silently updates itself to reflect the current state of data. There are two different ways to update the linear gauge; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/real-time-gauges.html#configuring-real-time-updates-using-javascript-api">Configure real-time updates using JavaScript API</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/real-time-gauges.html#real-time-updates-using-server-side-script">Configure real-time updates using server-side script</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/real-time-gauges.html#stoppingrestarting-updates">Stop and restart updates</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/real-time-gauges.html#configuring-real-time-events">Configure events associated with real-time gauges</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/real-time-gauges.html#troubleshooting">Troubleshoot real-time gauges</a>

## Configuring Real-time Updates using JavaScript API

### Real-time Data Format

The real-time data format for linear gauge depends on:

* Whether you've multiple pointers on the chart or a single pointer?

* If you've multiple pointers, whether you want to provide data by pointer numerical index or by their defined IDs?

* Whether you're using Message Logger for the chart?

* Commands for the chart - like stop update

### Simple Example

#### Updating a Single Pointer

In the simplest form, if you're looking to update the value of a gauge, you need to output the data in following format:

```javascript
&value=75
```

Here, the output is a single value, 75. So, when the gauge will read this value, it will update the chart by setting its value to 75 (if a data range is provided by the gauge, the value will first be checked to verify if it falls within the defined range).

A linear gauge configured to update the value of a single pointer looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-1.js %}

Given below is a brief description of the JavaScript API methods used to configure real-time updates:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter </th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`feedData(strData)`</td>
    <td>strData</td>
    <td>This method feeds real-time data to the gauge using JavaScript. The data has to be in the same format as provided by the real-time data provider page.</td>
  </tr>
</table>


#### Updating Multiple Pointers

If you have multiple pointers defined, you can update them all in a single update as shown in the following output from the real-time data provider page:

```javascript
&value=34|25
```

Here, we are specifying two values in the real-time update. So, assuming that we have two pointers defined for the gauge , each one of them will take the values in sequence and update itself. Therefore, the first pointer will now show 34 and second one will show 25. The sequence of the pointers is determined by the order in which they are defined in the JSON/XML data.

A linear gauge configured to update multiple pointers looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-2.js %}


#### Updating Pointer(s) using the Named ID

Another way to update pointers is by defining a unique ID for each pointer and then passing the updated data value to the ID.

To define unique IDs for pointers, you can use the code snippet shown below:

```javascript
"pointers": {
       "pointer": [
        {
            ...
            "id": "gGrovePointer",
            ...
        },
        {
            ...
            "id": "bFieldPointer",
            ...
        }
    ]
}
```

You can now update each of these named pointers as shown in the following output in your real-time data stream:

```javascript
&gGrovePointer=65&bFieldPointer=80
```

This will change the value of pointer 1 (having the id `gGrovePointer`) to 65 and pointer 2 (having the id `bFieldPointer`) to 80.

A linear gauge configured to update the values of multiple pointers using named IDs looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-3.js %}

Given below is a brief description of the JavaScript API methods used to update pointers using their IDs:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter </th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`feedData(strData)`</td>
    <td>strData</td>
    <td>This method feeds real-time data to the gauge using JavaScript. The data has to be in the same format as provided by the real-time data provider page.</td>
  </tr>
  <tr>
    <td>`getData(pointerIndex)`</td>
    <td>pointerIndex</td>
    <td>This method returns the data for the given pointer index on the chart. The first pointer is represented by index 1, second by 2, and so on.</td>
  </tr>
  <tr>
    <td>`getDataForId(pointerId)`</td>
    <td>pointerId</td>
    <td>This method returns the data for the given pointer using its defined ID. </td>
  </tr>
  <tr>
    <td>`setData(pointerIndex, value)`  </td>
    <td>pointerIndex, value</td>
    <td>This method sets the data for the given pointer index on the chart. The first pointer is represented by index 1, second by 2 and so on.</td>
  </tr>
  <tr>
    <td>`setDataForId(pointerId, value)`    </td>
    <td>pointerId, value</td>
    <td>This method returns the data for the given pointer using its defined ID. 
    </td>
  </tr>
</table>


<p class="text-info">You can call the JavaScript APIs of a chart only after it has rendered.</p>

### Retrieving Data from the Gauge

We can retrieve data from gauge once the data has been updated.

A linear gauge configured to retrieve updated data looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-4.js %}

The data structure needed to retrieve updated data is as follows:


## Real-time Updates using Server-side Script

An LED gauge updated in real-time using a server-side script looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-5.js %}

Given below is a brief description of the attributes used to configure real-time updates using server-side scripts:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataStreamURL`</td>
    <td>This parameter sets the path of the page which is supposed to relay real-time data to the chart. If you have special characters as a part of the data stream URL, like __?__ or __&amp;__, you will have to URL Encode the entire `dataStreamURL` attribute. This page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real-time feature won't work.<br/>
    Example: `dataStreamURL='liveQuote.aspx?name=xyz'`</td>
  </tr>
  <tr>
    <td>`refreshInterval`</td>
    <td>For this parameter, we can specify the number of seconds after which the chart will look for new data. This process will happen continuously - i.e., if we specify 5 seconds here, the chart will look for new data after every 5 seconds.</td>
  </tr>
  <tr>
    <td>`dataStamp`</td>
    <td>Constantly changing data stamp that can be added to the real-time data URL, so as to maintain a state. For more information, read the {% linkTo tutorials/chart-guide/real-time-charts/adding-data-stamp.md %} article.
    </td>
  </tr>
</table>


## Stopping/Restarting Updates

An LED gauge configured to stop and restart receiving real-time updates looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-6.js %}

Given below is a brief description of the JavaScript API used to stop and restart receiving real-time updates:

<table>
  <tr>
    <th>Function Name</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`stopUpdate()`</td>
    <td>`None`</td>
    <td>This method is used to stop the gauge from self-updating.</td>
  </tr>
  <tr>
    <td>`restartUpdate()`</td>
    <td>`None`</td>
    <td>If you have stopped the gauge from updating itself in real-time, this method is used to restart the updates.
    </td>
  </tr>
</table>


## Configuring Real-time Events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real-time updates on gauges.

A real-time linear gauge configured to listen to the `realTimeUpdateComplete` event looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-real-time-gauges-example-7.js %}

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
  <tr>
    <td>`realtimeUpdateError`</td>
    <td>This event is raised when an error occurs while performing real-time update using `datastreamURL`.
    The event arguments provided in the advanced model are:<br/>
    1. `eventObject` : This object contains `eventId`, `eventType` and `sender` properties.<br/>
    2. `argumentsObject` : This object contains the property listed below:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. `httpStatus` : It contains the HTTP Error status value  as number (e.g., 404)</td>
  </tr>
</table>


## Troubleshooting

While accessing any of the JavaScript methods listed above, if you get an error like "... is not a function of ...", make sure that you are NOT running the chart from local file system (C:\ , D:\\). Instead, run the chart from behind a server (localhost - IIS, Apache etc.). This is because the default security settings do not allow JavaScript interactions on local file system, unless otherwise specifically set.