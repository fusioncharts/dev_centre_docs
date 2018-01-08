---
permalink: gauge-and-widgets-guide/angular-gauge/logging-real-time-messages.html
title: Logging Real-time Messages | FusionCharts
description: This section talks about message logger which can be used effectively to show some necessary real-time information or live error logs.
heading: Logging Real-time Messages
chartPresent: true
---

FusionCharts Suite XT introduces a new concept of streaming and showing real-time messages in the gauge using Message Logger. The message logger can be effectively used to show some necessary real-time information or live error logs.

Essentially, the message logger is a text based scrollable window that can listen to messages streamed from the server and then either display the messages in the message logger window or pass them to custom JavaScript functions (defined by you) for further actions.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/angular-gauge/logging-real-time-messages#setting-up-the-message-logger" class="smoth-scroll">Setup the message logger</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/logging-real-time-messages#streaming-messages-using-the-message-logger" class="smoth-scroll">Stream messages using the message logger</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/logging-real-time-messages#handling-messages-in-javascript" class="smoth-scroll">Handle messages using the JavaScript API</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/logging-real-time-messages#configuring-the-message-logger-using-javascript-api" class="smoth-scroll">Configure the message logger using JavaScript API</a>

<p class="text-info">To use message logger, you first need to make sure that you're using a real-time chart from FusionWidgets XT pack - i.e., charts which update themselves in real-time. Examples are real-time line chart, column chart, angular gauge, linear gauges etc.</p>

## Setting up the Message Logger

A real-time angular gauge configured to set up the message logger looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-logging-real-time-messages-example-1.js %}

In the above gauge, you will see a small icon menu appear at the bottom-left of the gauge. The message logger, which does not appear by default, appears when you click this icon and select the `Show Log` option from the menu rendered. To close the message logger window, click the close button in the top-right corner of the window or click anywhere outside the window.

Given below is a brief description of the attributes used to set up the message logger for a real-time angular gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useMessageLog`</td>
    <td>It is used to specify whether the message logger should be enabled for the gauge. Setting this attribute to 1 enables the message logger, setting it to 0 (default) disables it.</td>
  </tr>
  <tr>
    <td>`showRTMenuItem`</td>
    <td>It is used to specify whether the real-time update-related menu items (like Start/Stop Update) will be shown in the message logger menu.</td>
  </tr>
  <tr>
    <td>`messageLogWPercent`</td>
    <td>It is used to specify the width of the message logger window with respect to the entire gauge width. So, if you set this attribute to 80, the message logger window will take up 80% of the space occupied by the gauge.</td>
  </tr>
  <tr>
    <td>`messageLogHPercent`</td>
    <td>It is used to specify the height of the message logger window with respect to the entire gauge height. </td>
  </tr>
  <tr>
    <td>`messageLogShowTitle`</td>
    <td>It is used to specify whether a title will be shown for the message logger window. </td>
  </tr>
  <tr>
    <td>`messageLogTitle`</td>
    <td>It is used to specify the title for the message logger, if you have opted to show it. The title is rendered at the top-left corner of the gauge. Examples include "Error Log", “Server History”, etc. </td>
  </tr>
  <tr>
    <td>`messageLogColor`</td>
    <td>It is used to specify the hex code of the color that will be applied to the entire message log window, e.g. #FFFFFF.</td>
  </tr>
  <tr>
    <td>`messageGoesToLog`</td>
    <td>It is used to specify whether the messages streamed to the gauge should be logged in the in-built message log window. FusionCharts Suite XT allows the messages steamed to the gauge to be displayed in the message log window or can be passed to a JavaScript function.</td>
  </tr>
  <tr>
    <td>`messageGoesToJS`</td>
    <td>It is used to specify whether the messages streamed from the server should be passed to a local JavaScript function. </td>
  </tr>
  <tr>
    <td>`messageJSHandler`</td>
    <td>It is used to specify the name of the JavaScript function that will handle the messages streamed from the server, if you have opted to do so. This helps you create your custom functions to react to messages streamed from the server. </td>
  </tr>
  <tr>
    <td>`messagePassAllToJS`</td>
    <td>It is used to specify whether whether all parameters of a message envelope will be passed to the the custom JavaScript function.  A message envelope contains the following four parameters: Message ID, Message Title, Message Text, and Message Type.

<p class="text-info">The `messageGoesToJS` attribute is used to pass only the Message Text parameter to the JavaScript function, whereas, the `messagePassAllToJS` is used to pass all the four parameters to the JavaScript function.</p>
    </td>
  </tr>
</table>


## Streaming Messages using the Message Logger

Each real-time update of the chart can result in addition of message(s) to the logger.

A real-time angular gauge configured to stream messages using the message logger looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-logging-real-time-messages-example-2.js %}

Given below is a brief description of the attributes in the real-time data stream that help you stream messages:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`msgId`</td>
    <td>It is used to specify a unique ID for each message. This is useful when you need to track your messages in your custom JavaScript function and need to refer to this ID to take actions. This ID is not displayed in the logger window; it is directly passed to the JavaScript function.</td>
  </tr>
  <tr>
    <td>`msgTitle`</td>
    <td>It is used to specify the title for the message that will be displayed in the message logger window. The title can also be passed to other JavaScript functions.</td>
  </tr>
  <tr>
    <td>`msgText`</td>
    <td>It is used to contain the actual text of the message that will be displayed on the message logger window. The text of the message can also be passed to other JavaScript functions.</td>
  </tr>
  <tr>
    <td>`msgType`</td>
    <td>It is used to specify the type for each message streamed. This is required because each message type is rendered using a different text style in the message logger to aid instant interpretation. The message types that can be streamed are `INFO`, `ERROR`, `LITERAL`, and `LINK`. `INFO` is rendered using normal font properties, `ERROR` is highlighted in a shade of red, `LITERALS` are rendered in code-like blocks, and `LINK` renders as a clickable link.</td>
  </tr>
  <tr>
    <td>`msgGoesToLog`</td>
    <td>It is used to specify whether the messages streamed from the server will be made visible in the message logger of the gauge.  By default, this attribute takes its value from the `messageGoesToLog` attribute defined for the `chart` object.</td>
  </tr>
  <tr>
    <td>`msgGoesToJS`</td>
    <td>It is used to specify whether the messages streamed from the server should be passed to the JavaScript handler. By default, this attribute takes its value from the `messageGoesToJS`  attribute defined for the `chart` object. </td>
  </tr>
  <tr>
    <td>`clearLog`</td>
    <td>It is used to specify whether you want to clear the message history currently showing in the gauge. To clear the message history, set the value of this attribute to 1 and return it as a part of the data stream. </td>
  </tr>
</table>


<p class="text-info">The messages to be logged should be provided in the real-time data stream and not in the JSON data. Real-time data stream refers to the data provided by the URL specified in the `dataStreamURL` attribute. </p>

### Examples of a Real-time Update

Shown below is an example of real-time update string passed by the server to the message logger:

```javascript
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84
```

Here, we first have the `&value` parameter which is absorbed by the gauge for data update. Next, we have the `msgTitle` and the `msgText` parameters which get absorbed by the message logger. Here, we have set the date & time as the title and the text "Server Utilization: ", along with the value 84, as the message.

Take a look at the chart rendered above to see how this update appears in the actual message logger.

<p class="text-info">If you are passing any special characters as a part of your message text or title (like &, % etc.), you will need to URL Encode the text/title. </p>

### Changing Message Type

Shown below is a simple example of message type ERROR:

```javascript
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84&msgType=ERROR
```

A real-time angular gauge configured to read this message looks like this: When a chart reads this, it'll display the message as under:

{% embed_all gauge-and-widgets-guide-angular-gauge-logging-real-time-messages-example-2.js %}


### Creating Messages with an External Link

To create and render a message as a link, you will need to set the URL Encoded link as the value for the `msgText` attribute and set the `msgType` to LINK, as shown below:

```javascript
&value=84&msgTitle=24-07-2014 02:22:51&msgText=http%3A%2F%2Fwww%2Efusioncharts%2Ecom%3Fid%3D34&msgType=LINK
```

In the above example, we're linking the message to http://www.fusioncharts.com?id=34 - we've URL Encoded the link, as it contains special characters (? in this case).

<p class="text-info">When specifying a link message type, the link itself is shown as the message text. You cannot change the message text. </p>

### Linking Custom Text

To render custom text as a link, set the `msgType` attribute to INFO and provide the entire link in HTML code to the `msgText` attribute, as shown in the example below:

```html
&value=84&msgTitle=24-07-2014 02:22:51&msgText=<A HREF='http://www.fusioncharts.com?id=34'><U>Server CPU Utilization : 84</U></A>&msgType=INFO
```

After URL Encoding

```javascript
&value=84&msgTitle=24-07-2014%2002:22:51&msgText=%3CA%20HREF='http://www.fusioncharts.com?id=34'%3E%3CU%3EServer%20CPU%20Utilization%20:%2084%3C/U%3E%3C/A%3E&msgType=INFO
```

To specify a link, you will need to output the HTML code for the link as `msgText`. Add the `<u>` tag in the HTML code if you need to underline the link. Finally, URLEncode the entire `msgText` parameter and then stream to the chart.

### Clearing Message Logger from the Server

You can instruct the gauge to clear the contents of the visible message logger by sending the command shown below:

```javascript
&clearLog=1
```

You can also send send it as a part of a message stream, as shown below:

```javascript
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84&msgType=ERROR&clearLog=1
```

This will clear all the contents of the existing message logger and start afresh.

<p class="text-warning">If you send `&clearLog=1` with each real-time update, the chart will not show any messages in the logger, as the log is being cleared with each update. As such, take caution to send this command only when the log needs to be cleared. </p>

## Handling Messages in JavaScript

You have seen how you can log messages streamed from the server in the in-built visual logger of the gauge. FusionCharts Suite XT also gives you the option to pass the entire, or partial, message envelope to your custom JavaScript functions present in the page (that contains) the gauge.

A real-time angular gauge configured to handle messages using custom JavaScript functions looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-logging-real-time-messages-example-3.js %}


A simple implementation of the `myFunction` is as follows:

```javascript
var myFunction = function(strMsgId, strMsgTitle, strMsgText, strMsgType){
            //This method is invoked when the chart streams real-time message to JS.
            //Order of parameters - strMsgId, strMsgTitle, strMsgText, strMsgType
            //- strMsgId - The ID allotted to each message by your server-side code.
            //- strMsgTitle - Title given to each message by your server-side code.
            //- strMsgText - Text of each message.
            //- strMsgType - Type of each message - INFO, ERROR, LITERAL or LINK
           alert("A message was streamed from server. \nMessage Id: " + strMsgId + "\nMessage Title: " + strMsgTitle + "\nMessage Text: " + strMsgText + "\nMessage Type: " + strMsgType);
        }
```

<p class="text-info">In place of a custom function you can also use JavaScript’s native function (e.g `alert`) to show messages streamed from the server to the client. But in that case you will only be able to show the value of  the `msgText` parameter passed from the server.</p>

## Configuring the Message Logger using JavaScript API

FusionCharts Suite XT allows you to configure the message logger. Using its client-side JavaScript API, you can:

➔     Show/hide the logger

➔     Clear the logger

A real-time angular gauge with its message logger configured using JavaScript API looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-logging-real-time-messages-example-4.js %}

In order to manipulate the message logger using JavaScript API you need to get a reference of the gauge. Once this reference  is obtained, you can use any of API methods on the gauge’s logger (provided it's set to on)

Given below is a brief description of the JavaScript API methods used to configure the message logger:

<table>
  <tr>
    <th>Method Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLog()`</td>
    <td>It is used to show the log, if it has been hidden.</td>
  </tr>
  <tr>
    <td>`hideLog()`</td>
    <td>It is used to hide the log, if it has been shown.</td>
  </tr>
  <tr>
    <td>`clearLog()`</td>
    <td>It is used to clear the contents of the log.</td>
  </tr>
</table>


<p class="text-info">Note: Here we have used the `feedData()` method of the FusionCharts API to provide real-time update. You can pass these updates from the server through data-provider pages using the `dataStreamURL` attribute. </p>

<p class="text-info">You can call the JavaScript APIs of a chart only after it has rendered. You can use the `Rendered` event listener to check if a chart has rendered. </p>
