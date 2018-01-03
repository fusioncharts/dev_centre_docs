---
permalink: gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html
title: Creating Real-time Angular Gauge | FusionCharts
description: In this section, understand and use the various methods available for data streaming, use a JavaScript API to update the gauge, etc.
heading: Creating Real-time Angluar Gauge
chartPresent: true
---

The angular gauge is a real-time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data periodically and auto-updates to reflect the current state of data. There are two different ways to update the angular gauge; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

In this section, you will learn how to:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html#understanding-data-streaming-and-the-various-methods-for-data-streaming">Understand and use the various methods available for data streaming</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html#building-an-example-of-a-real-time-gauge-that-streams-data-from-an-url">Build an example of a real-time gauge that can stream data from an URL</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html#using-the-javascript-api-to-update-the-gauge">Use the JavaScript API to update the gauge</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html#configuring-events-associated-with-real-time-updates">Configure events associated with real-time updates</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges.html#troubleshooting">Troubleshoot real-time gauges</a>

## Understanding Data Streaming and the Various Methods for Data Streaming

When you use the real-time data format you need to create a data provider (primarily a server side script) at your server. Next, need to specify the URL of this data provider and the time interval (in seconds) after which the gauge will look for new data. The data provider must then output the new data in the real-time data format.

### Real-time Data Format

The real-time data format for the angular gauge depends on:

* Whether you've multiple dials on the chart or a single dial?

* If you've multiple pointers, whether you want to provide data by pointer numerical index or by their defined IDs?

* Commands for the chart - like stop update

### Simple Example

#### Updating a Single Pointer

In the simplest form, if you're looking to update the value of a gauge, you need to output the data in following format:

```javascript
&value=34
```

Here, the output is a single value, 34. So, when the gauge will read this value, it will update itself by setting its value to 34 (if a data range is provided by the gauge, the value will first be checked to verify if it falls within the defined range).

#### Updating Multiple Pointers

If you have multiple dials defined, you can update them all in a single update as shown in the following output from the real-time data provider page:

```javascript
&value=34|25|54
```

Here, we're specifying three values in the real-time update. So, assuming that we've 3 dials or pointers defined in the chart, each one of them will take the values in sequence and update itself. Therefore, the first dial will now show 34, second one will show 25, and the third one will show 54. The sequence of dials is determined by the order in which they are defined in the JSON/XML data.

### Updating using Named ID of the Dial/Pointer

Another way to update dials is by defining a unique ID for each dial and then passing the updated value to the ID.

To define an ID for each dial, you can use the code snippet shown below:

```javascript
"dial": [{
    ...
    "id": “CPU1Temp”
    ...
}, {
    ...
    "id": “CPU2Temp”
    ...
}]
```

You can now update each of these named dials as shown in the following output in your real-time data stream:

```javascript
&CPU1Temp=23&CPU2Temp=34
```

This will change the value of dial 1 (with id as `CPU1Temp`) to 23 and dial 2 to 34.

### Stopping Real-time Updates from the Server

If you wish to stop the gauge from polling the server for any more real-time updates, you can send the following command from server to do so:

```javascript
&stopUpdate=1
```

After stopping the update, it can be restarted again by using client-side JavaScript.

## Building an Example of a Real-time Gauge that streams data from an URL

A real-time angular gauge configured to stream data from an URL looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-creating-real-time-gauges-example-1.js %}

In the above gauge, observe that both the dials update themselves every 10 seconds.

Given below is a brief description of the attributes used to configure real-time updates from an URL:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataStreamURL`</td>
    <td>This parameter sets the path of the page which is supposed to relay real-time data to the chart. If you have special characters as a part of your data stream URL, like __?__ or __&amp;__, you will have to URL Encode the entire `dataStreamURL`. This page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real-time feature won't work. Example: `dataStreamURL='liveQuote.aspx?name=xyz'`</td>
  </tr>
  <tr>
    <td>`refreshInterval`</td>
    <td>For this parameter, we can specify the number of seconds after which the chart will look for new data. This process will happen continuously - i.e., if we specify 5 seconds here, the chart will look for new data every 5 seconds.</td>
  </tr>
  <tr>
    <td>`dataStamp`</td>
    <td>Constantly changing data stamp that can be added to the real-time data URL, so as to maintain a state. Data stamp is basically a token of information that is passed with each update to the chart and back to the server, which helps to easily identify the last data sent to the gauge. For more information, read the {% linkTo tutorials/chart-guide/real-time-charts/adding-data-stamp.md %} article.</td>
  </tr>
</table>


In the above data, note that we have set the `dataStreamURL` attribute to [http://static.fusioncharts.com/sampledata/php/serverLoad.php](http://static.fusioncharts.com/sampledata/php/serverLoad.php) and the `refreshInterval` attribute to `10`. Which means that after every 10 seconds the chart will fetch data from the URL and update the two dials.

For example, the `serverLoad.php` data provider will return two random values within 100% in the format shown below:

```javascript
&value=84|14
```

Because we have defined unique IDs for both dials, It can also return data in the format shown below:

```javascript
&fd_dial=84&clth_dial=14
```

<p class="text-warning">The data provider page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, the cross-domain security might restrict data access and hence the real-time feature won't work.</p>

## Using the JavaScript API to Update the Gauge

The FusionCharts JavaScript Class provides a rich and powerful API collection that eases the implementation and management of charts using its powerful functions, properties, and events, because of the highly enhanced JavaScript architecture that it uses.

A real-time angular gauge configured to use JavaScript API for real-time updates looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-creating-real-time-gauges-example-2.js %}

Given below is a brief description of the JavaScript API methods used to configure the real-time angular gauge to receive real-time updates:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`feedData(strData)`</td>
    <td>It is used to feed real-time data to the gauge using JavaScript. The data has to be in the same format as that provided by the real-time data provider page.  </td>
  </tr>
  <tr>
    <td>`getData(dialIndex)`</td>
    <td>It is used to get the data for a given dial index on the gauge. The first dial is represented by index 1, the second by 2, and so on. </td>
  </tr>
  <tr>
    <td>`getDataForId(dialId)`</td>
    <td>It is used to get the data for a given dial using its defined ID.</td>
  </tr>
  <tr>
    <td>`setData(dialIndex, value)`</td>
    <td>It is used to set data for a given dial index on the chart. The first dial is represented by index 1, the second by 2, and so on.</td>
  </tr>
  <tr>
    <td>`setDataForId(dialId, value)`</td>
    <td>It is used to set data for a given dial using its defined ID.</td>
  </tr>
  <tr>
    <td>`stopUpdate()`</td>
    <td>It is used to stop the gauge from self-updating.</td>
  </tr>
  <tr>
    <td>`restartUpdate()`</td>
    <td>It is used to resume self-update of the gauge, if you have stopped it.</td>
  </tr>
</table>


## Configuring Events associated with Real-time Updates

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real-time updates on gauges.

A real-time angular gauge configured to listen to the `realTimeUpdateComplete` event looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-creating-real-time-gauges-example-3.js %}

Given below is a brief description of the `realTimeUpdateComplete` and the `realTimeUpdateError` events:

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
    <td>`realTimeUpdateError`</td>
    <td>This event is raised when an error occurs while performing real-time update using `datastreamURL`.
    The event arguments provided in the advanced model are:<br/>
    1. `eventObject` : This object contains `eventId`, `eventType` and `sender` properties.<br/>
    2. `argumentsObject` : This object contains the property listed below:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;a. `httpStatus` : It contains the HTTP Error status value  as number (e.g., 404)</td>
  </tr>
</table>


## Troubleshooting

If the chart renders initially, but does not update in real-time, do the following:

*  Check if you have specified a correct and valid path for the `dataStreamURL` attribute in the JSON/ XML data..

* Check if you have specified a valid value for the `refreshInterval` attribute in the data.

* Check if the `dataStreamURL` attribute is returning the correct data.  To test this, just open your browser and run this page. It should return the data in text format.

* Make sure the output data does not contain any carriage returns (new-line characters) or HTML elements. In many scripting languages, these are automatically added. If they are, you will  need to remove them.

* You also need to make sure that the page which provides the incremental data update to the charts must be hosted on the same sub-domain in which the charts are hosted - otherwise, owing to security restrictions, the charts won't be able to receive the updates. Due to security restrictions, charts are allowed to retrieve data only from the same sub-domain in which the charts are residing. Data can only be loaded from a domain that is an exact match to the location of the charts, including sub-domains. For this reason, a chart residing at `server1.mydomain.com` will not be able to access data from `mydomain.com`.

<p class="text-info">If you wish to load data from a different domain, you can set up a proxy page at the same sub-domain that will actually request data from the distant domain and then relay it to the charts. You must be able to upload and run a server-side script on a server in the same domain as the charts. In this method, a chart accesses the script, which loads the information, retrieves it and returns the information back to the chart. This method is best feasible if the server hosting the data is not under your control (for example, a public source or a web service).</p>

While accessing any of the JavaScript API methods listed above, if you get an error like `"... is not a function of ..."`,

* Make sure you are not calling the JavaScript API method before the chart has loaded and rendered. You need to use an event listener for the `rendered` event of the gauge to track the loading of the gauge.

* Make  sure that you have provided all the required `.js` files of the FusionCharts library and no other JavaScript error is encountered.
