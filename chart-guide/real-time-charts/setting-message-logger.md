---
permalink: chart-guide/real-time-charts/setting-message-logger.html
title: Setting Message Logger | FusionCharts
description: FusionCharts Suite XT uses the concept of streaming and showing real-time messages on the chart using the message logger.
heading: Setting Message Logger
chartPresent: true
---

FusionCharts Suite XT uses the concept of streaming and showing real-time messages on the chart using the message logger. The message logger can be effectively used to show necessary real-time information or live error bugs.

The message logger is essentially a scrollable text-based scrollable window that can listen to messages streamed the from server and then do one of the following:

* Display the message in the message logger window

* Pass it to custom JavaScript functions (defined by you) for further actions

A simple message logger looks as shown in the image below:

![image Message logger](/assets/images/advanced-charting-real-time-charts-setting-message-logger-image-1.png)

In the above image, we have a real-time column chart that monitors the footfalls at Bakersfield Central. Overlapping this chart is the message logger that contains messages that were streamed to the message logger by the server.

The FusionCharts Suite XT message logger has the following features:

* Message logger is supported by all real-time charts and gauges. The non real-time charts do not support the message logger.

* Each real time update of the chart can have one message to be added to the logger.

* Because it is a scrollable, the message logger can contain any number of messages.

* The cosmetics of this message logger are fully customizable.

* Messages streamed to the message logger can either be displayed in the in-built logger or passed to any JavaScript function present in the same page. This helps you build your custom client-side loggers, without having to worry about retrieving real time data from the server.

* The message logger be switched on or off by setting `useMessageLog` to 0 or 1 in the `chart` object of the JSON data (or in the `<chart>` element of the XML data) for the chart.

* Additionally, end users can also show/hide the logger at client-side by pressing Shift + M.

* You can also use client-side JavaScript to show/hide the message logger for a chart.

* Messages streamed to the logger can be of 4 types - `INFO`, `ERROR`, `LITERAL`, or `LINK`. You can decide the type for each message that you send to the logger. Messages displayed in the logger are formatted based on their type.

* The logger can be cleared dynamically at run-time (to get rid of existing messages) either by sending a `&clearLog=1` flag in the real-time data stream, or by using client-side JavaScript.

* The message logger window in JavaScript Real-time charts and gauges shows a close button that allows you to close the logger.

In this section, you will be shown how you can:

* <a href="/chart-guide/real-time-charts/setting-message-logger#setting-up-the-message-logger" class="smoth-scroll">Set up the message logger</a>

* <a href="/chart-guide/real-time-charts/setting-message-logger#clearing-the-message-logger-from-the-server" class="smoth-scroll">Send real-time updates that can be streamed to the message logger</a>

* <a href="/chart-guide/real-time-charts/setting-message-logger#handling-messages-in-javascript" class="smoth-scroll">Handle messages in JavaScript</a>

* <a href="/chart-guide/real-time-charts/setting-message-logger#using-the-client-side-javascript-api" class="smoth-scroll">Use the client-side JavaScript API to manipulate the message logger</a>

## Setting up the Message Logger

The following two steps are involved in configuring and using the message logger.

1. Configure your JSON data to to use the message logger by setting its functional and cosmetic properties.

2. Configure the real-time data provider page to broadcast/stream messages to the logger.

### Configuring the Message Logger

The following code snippet enables the use of the message logger for a real-time chart:

```javascript

{
   "chart": {
   ...
   "useMessageLog": "1",
   "showRTMenuItem": “1”
   ...
   }
}
```

Given below is a brief description of the attributes used in the code snippet above:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useMessageLog`</td>
    <td>It is used to specify whether the message logger will be used for a real-time chart/gauge. Setting this attribute to `1` will enable use of the message logger, setting it to `0`  (default) disables using it.

The message logger, however, will become visible only when it listens to the first message streamed from the server. </td>
  </tr>
  <tr>
    <td>`showRTMenuItem`</td>
    <td>It is used to specify whether the real-time update-related menu items will be shown in the chart’s context menu. Setting this attribute to `1` will show them, setting it to `0` (default) will hide them.

The context menu appears as a button in the bottom-left corner of the chart (you can refer to the image shown above).</td>
  </tr>
</table>


When the first message is streamed to the chart from server, the message logger is displayed as shown in the image below:

![image alt text](/assets/images/advanced-charting-real-time-charts-setting-message-logger-image-2.png)

A close button appears at the top-right corner of the message logger window that you can use to close the message logger. Or you can click anywhere outside the message logger window. To re-open the message logger, click the `Show Log` option from the context menu, as shown in the image below:

![image alt text](/assets/images/advanced-charting-real-time-charts-setting-message-logger-image-3.png)

Given below is a brief description of the attributes used to configure the functional and cosmetic properties of the message logger:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`messageLogWPercent`</td>
    <td>It is used to specify the width percent of the message logger window with respect to the width of the entire chart. So, if you set it to 80, the message logger window will take up 80% of chart width. </td>
  </tr>
  <tr>
    <td>`messageLogHPercent`</td>
    <td>It is used to specify the height percent of the message logger window with respect to the height of the entire chart.</td>
  </tr>
  <tr>
    <td>`messageLogShowTitle`</td>
    <td>It is used to specify whether a title will be shown for the message logger. Setting this attribute to `1` will show the title, setting it to `0` will hide it.</td>
  </tr>
  <tr>
    <td>`messageLogTitle`</td>
    <td>It is used to specify the title for the message logger, if you have set the `messageLogShowTitle` to 1. The title displays at the top left corner of chart.</td>
  </tr>
  <tr>
    <td>`messageLogColor`</td>
    <td>It is used to specify the hex code of the color that will be applied to the entire message log window.</td>
  </tr>
  <tr>
    <td>`messageGoesToLog`</td>
    <td>The messages streamed to the chart can either be displayed in the message log window or can be passed to JavaScript functions(which we'll see next). This attribute is used to specify whether the messages should be logged in the built-in log window. Setting this attribute to `1` displays messages in the log window, setting it `0` passes them to JavaScript functions.</td>
  </tr>
  <tr>
    <td>`messageGoesToJS`</td>
    <td>It is used to specify whether each message streamed from the server will be passed to a local JavaScript function. Setting this attribute to `1` will pass the message to the JavaScript function, setting it to `0` will show it in the built-in log window.</td>
  </tr>
  <tr>
    <td>`messageJSHandler`</td>
    <td>It is used to specify the name of the JavaScript function that will handle messages from the server. This helps you to create custom functions to react to the messages streamed.</td>
  </tr>
  <tr>
    <td>`messagePassAllToJS`</td>
    <td>It is used to specify whether all parameters of a message envelope will be passed to the custom JavaScript function. Setting this attribute to `1` will pass all the parameters to the function.</td>
  </tr>
</table>


<p class="text-info">The `messageGoesToJS` attribute is used to pass only the "Message Text" parameter to the JavaScript function, whereas, the `messagePassAllToJS` is used to pass all the four parameters to the JavaScript function.</p>

### Streaming Messages

Each real-time update of the chart can contain one message to be added to the message logger. The messages to be logged should be provided in the real-time data stream and not in the JSON/XML data. Real-time data stream refers to the data provided by the URL specified in the `dataStreamURL` attribute.

Given below is a brief description of the attributes to log messages provided in the real-time data stream:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`msgId`</td>
    <td>It is used to specify a unique ID for each message, which is used to track messages in the custom JavaScript function and take the required actions. The ID is NOT displayed in the message logger window.</td>
  </tr>
  <tr>
    <td>`msgTitle`</td>
    <td>It is used to specify the message title that can be displayed in the message logger window or passed to the JavaScript function.</td>
  </tr>
  <tr>
    <td>`msgText`</td>
    <td>It is used to specify the message text.</td>
  </tr>
  <tr>
    <td>`msgType`</td>
    <td>It is used to specify the message type. Possible values are `INFO`, `ERROR`, `LITERAL`, or `LINK`.
    Each message type is rendered using a different formatting style to aid instant interpretation. `INFO` messages are shown using normal font properties. `ERROR` messages are highlighted in a shade of red. `LITERAL` type messages are shown in code-like blocks. `LINK` messages serve as clickable links.</td>
  </tr>
  <tr>
    <td>`msgGoesToLog`</td>
    <td>The messages streamed to the chart can either be displayed in the message log window or can be passed to JavaScript functions(which we'll see next). This attribute is used to specify whether the messages should be logged in the built-in log window. Setting this attribute to `1` displays messages in the log window, setting it `0` passes them to JavaScript functions.
    By default, this attribute takes its value from the `messageGoesToLog` attribute defined for the `chart` object. </td>
  </tr>
  <tr>
    <td>`msgGoesToJS`</td>
    <td>It is used to specify whether each message streamed from the server will be passed to a local JavaScript function. Setting this attribute to `1` will pass the message to the JavaScript function, setting it to `0` will show it in the built-in log window.
    By default, this attribute takes its value from the  `messageGoesToJS` attribute of the `chart` object. </td>
  </tr>
  <tr>
    <td>`clearLog`</td>
    <td>It is used to clear the message history for the chart currently rendered. To clear message history, set this attribute to `1` and return it as a part of the data stream. Setting it to `0` will not clear the message history.</td>
  </tr>
</table>


In the next section, we will look at different examples of real-time updates that can be streamed to the message logger.

## Examples of Real-time Update

### Simple Example

An example of a real-time update string passed to the message logger (contained in the column chart shown above) is given below:

```javascript
&label=13%3A18%3A46&value=12&msgTitle=Footfall at : &msgText=13%3A18%3A46 hrs is  13 Customers"
```

In this update, the `&label` and `&value` parameters are absorbed by the chart for data update.

The `&msgTitle` and `&msgText` parameters are absorbed by the message logger. `&msgTitle` is set to "Footfall at : " and `&msgText` is set to "13:18:46 hrs is  13 Customers".

When a chart (with `useMessageLog` set to `1`) accepts this data stream, the message logger, as shown in the image below, is displayed:

![image alt text](/assets/images/advanced-charting-real-time-charts-setting-message-logger-image-4.png)

<p class="text-info">Note: If you are passing any special characters as part of your message text or title (like &, % etc.), you will need to URL Encode the text/title. </p>

### Changing the Message Type

A real-time chart that plots the footfalls at Bakersfield Central is shown below:

{% embed_all advanced-charting-real-time-charts-setting-message-logger-example-1.js %}

We have configured this chart to display an `ERROR` message in the message logger whenever the number of footfalls goes below 9. Open the message logger to look at the messages displayed for each real-time update.

To specify the message type, you can provide data in the following format:

```javascript
&label=14%3A46%3A12&value=6&msgTitle=Footfall at : &msgText=14%3A46%3A12 hrs is  6 Customers WARNING !!!&msgType=ERROR
```





### Creating Messages with Links

To display messages of type `LINK`, you can provide the following data:

```javascript
&msgTitle=Check Dashboards for details&msgText=http%3A%2F%2Fwww%2Efusioncharts%2Ecom%3Fid%3D34&msgType=LINK
```

Because we want to link the message to `http://www.fusioncharts.com?id=34`,  the `&msgText` contains the URL Encoded link.

## Clearing the Message Logger from the Server

You can send an instruction to the chart from the server to clear the contents of the visible message logger. To do this, you need to send the following command:

```javascript
&clearLog=1
```

You can send it as a part of the message stream, as shown in the example below:

```javascript
&label=14%3A46%3A12&value=6&msgTitle=Footfall at : &msgText=14%3A46%3A12 hrs is  6 Customers WARNING !!!&msgType=ERROR&clearLog=1
```

This will clear all the contents of the existing message logger and start afresh.

<p class="text-info">If you send &clearLog=1 with each real-time update, the chart will not show any messages in the logger, because the log will be cleared with each update. Therefore, be careful to send this command only when the log needs to be cleared. </p>

Additionally, you can also clear the message logger using client-side JavaScript API.

## Handling Messages in JavaScript

You can pass the entire (or partial) message envelope to custom JavaScript functions present in the page that contains chart.

A real-time column chart configured to pass all parameters from the message envelope to your custom JavaScript function is shown below:

{% embed_all advanced-charting-real-time-charts-setting-message-logger-example-2.js %}

The `useMessageLog`, `messageGoesToJS`, `messageJSHandler`, and `messagePassAllToJS` attributes (described earlier in this article) are used to pass all parameters from the message envelope to your function.





## Using the Client-side JavaScript API

Using the client-side JavaScript API, you can manipulate the message logger to show/hide the logger or clear the message history.

To do any of these actions, you will need to get a reference to the chart. To get the reference to a chart, you can use the DOMID of the chart and pass it using any of the following ways:

```javascript
var chartRef = FusionCharts("myChartId");
```

or

```javascript
var chartRef = FusionCharts.items["myChartId"];
```

The legacy function getChartFromId() still works as show below:

```javascript
var chartRef =  getChartFromId("myChartId");
```

However, note that `getChartFromId()` has been deprecated.

<p class="text-info">You can call the JavaScript APIs of a chart only after it has rendered. You can use the [rendered](/api/fusioncharts/fusioncharts-events#event-rendered) [event listener](/api/fusioncharts/fusioncharts-typedefs#eventListener) to check if a chart has rendered.</p>

Once you have obtained the reference to the chart, you can use any of the functions below on the chart's logger:

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartRef.showLog()`</td>
    <td>It is used to show the message logger, if it is not already visible.</td>
  </tr>
  <tr>
    <td>`chartRef.hideLog()`</td>
    <td>It is used to hide the message logger, if it is already visible.</td>
  </tr>
  <tr>
    <td>`chartRef.clearLog()`</td>
    <td>It is used to clear the contents of the message logger.</td>
  </tr>
</table>


If you get JavaScript errors when accessing the above functions, make sure that:

* you have enabled the message logger for the chart as mentioned in `Setting up the Message Logger` and `Configuring the Message Logger` section above.

* you are accessing these functions after the chart has rendered (you can use the [rendered](/api/fusioncharts/fusioncharts-events#event-rendered) [event listener](/api/fusioncharts/fusioncharts-typedefs#eventListener) to track if a chart has finished rendering).