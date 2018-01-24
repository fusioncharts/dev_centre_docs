---
permalink: troubleshooting/debugger.html
title: Using the FusionCharts Suite XT Debugger | FusionCharts
description: When building charts with FusionCharts Suite XT, if you run into errors, you can use our troubleshooting to trace such errors
heading: Using the FusionCharts Suite XT Debugger
chartPresent: false
---


When building charts with FusionCharts Suite XT, if you run into errors, you can use (/api/fusioncharts/namespaces/debugger) to trace such errors, and track the flow of events of the charts to investigate further.

Possible errors that Harry’s developers may encounter:

  * The location (`<div>` container) where the chart was supposed to render remains blank, even after the render() call.
  * Chart may get rendered but show messages such as “No data to display” or “Error in loading data.”
  * There may be JavaScript runtime errors on the page. preventing the scripts on page to complete execution.
  * To trap these errors and to know what is happening within the charts, you can enable the (/api/fusioncharts/namespaces/debugger). That will assist you in finding the root cause of such unintended behavior.

### Enabling the debugger

To enable the FusionCharts debugger, copy the following code block in your page where you've the charts defined. Typically, this goes in the `<head>`element of the page.

```html
<script type="text/javascript">
FusionCharts['debugger'].outputTo(function (message) {
    console.log(message);
});
FusionCharts['debugger'].enable(true);
</script>
```

Now refresh the page in the browser. Note that users of Internet Explorer (version 8 and 9) need to  first enable the Developer Tools and then reload the page in order for this to work.

In the above code block, we instructed the browser to log all messages received from FusionCharts debugger in the browser’s console. Once this script executes, you can see the internal messages of the chart logged within the console. You can open the JavaScript Console of your browser using the menu, or by pressing F12. If your browser does not have a JavaScript Console, refer to "Using debugger with older browsers" for a workaround.

An example of a message logged in the console could be: “13 `[chartobject-1]` fired `chartrollover` event, if you hovered over an existing chart in the page. The number #13 and the `chart Id object-1` maybe different based on your specifications.


### Getting additional information from the debugger logs

By default, the debugger logs the the name of the event that occurred, along with the id of the chart that fired the event. By configuring the (/api/fusioncharts/namespaces/debugger#static-outputFormat) of the `debugger`, this log can be made even more informative, with details of every parameter of the events.

To get these additional details, we tweak the code that enables the `debugger` by setting its `outputFormat` to `verbose`.

```html
<script type="text/javascript">
FusionCharts['debugger'].outputTo(function (id, sender,
    eventName, eventArgs) {
    console.log(id + ': 'eventName + ' from ' + sender,
    eventArgs);
});
FusionCharts['debugger'].outputFormat('verbose');
FusionCharts['debugger'].enable(true);
</script>
```

Setting the `outputFormat` to `verbose` would pass the `eventArgs` as an additional parameter. This parameter is an object that contains all the parameters of the event.

Within the console, you can click on this object to further inspect its contents. In case your browser does not support inspecting objects and instead shows it as [`object Object`], the section in this article about using Firebug Lite would show you how to use an alternative JavaScript console.

### Spotting errors using the debugger

When the chart renders without an error, the debugger log would log things such as when the chart was initialized, when it was rendered and so on.

```
1 [FusionCharts] fired "ready" event.
2 [myChart] fired "beforeinitialize" event.
3 [myChart] fired "beforedataupdate" event.
4 [myChart] fired "dataupdated" event.
5 [myChart] fired "initialized" event.
6 [myChart] fired "beforerender" event.
7 [myChart] fired "internal.loaded" event.
8 [myChart] fired "internal.drawstart" event.
9 [myChart] fired "dataloaded" event.
10 [myChart] fired "internal.domelementcreated" event.
11 [myChart] fired "loaded" event.
12 [myChart] fired "drawcomplete" event.
13 [myChart] fired "rendercomplete" event.
```

This log of an error-free chart shows the expected lifecycle of a chart where the framework is ready, when the chart is initialized along with its data, and when it is being updated and goes on to complete its rendering process.

However, if it encounters something unexpected, the (/api/fusioncharts/namespaces/debugger#event-error) and (/api/fusioncharts/namespaces/debugger#event-warning) events will be logged. The additional argument of these events would contain the error code and the error message that can be looked up in our documentation to determine the probable cause of the error and its possible resolution. Other than this, there can be logs such as `dataLoadError`, `dataInvalid`, etc. that would be indicative of the nature of error a chart has faced.

The `event Id` is another useful parameter that can reflect possible issues with the implementation of charts. For example, if the (/api/fusioncharts/fusioncharts-events#static-event-ready) event is logged after a chart has been initialised, it is an indication that charts were created even before the page was ready.

The absence of an expected event is also a way to trace source of error. Say, you have coded the charts to be disposed when someone switches the tab, but upon switching the tab, the (/api/fusioncharts/fusioncharts-events#event-disposed) event is not logged. This would indicate a possible issue with the logic and if left unchecked may cause the browser to leak memory and crash.

A quick hack to check if the `debugger` works is to create a chart that contains intended errors in the initialization code..

```html
<script type="text/javascript">
FusionCharts.ready(function () {
  var myChart = FusionCharts({
    type: "Column2D",
    width: "100%",
    height: "100%"
  });
});
</script>
```

The code above may appear correct at first, but a deeper look would reveal that we have not provided the new keyword while calling the (/api/fusioncharts) constructor. This error can be readily spotted since an error event will be logged with error id 25081840 ((/api/fusioncharts/namespaces/debugger#static-Error-25081840)). The error message would clearly outline a `RuntimeException` saying “Use the `new` keyword while creating a new FusionCharts object”.


### Using debugger with older browsers

Older browsers, such as Internet Explorer 6, do not support a JavaScript Console. The following code block provides a workaround to simulate a basic console for logging messages.

```html
<script type="text/javascript">
FusionCharts.ready(function () {
  // Create a div element
  var logger = document.createElement('pre');
  // Append the logger element to the page body
  (document.body || document.documentElement)
    .appendChild(logger);
  // Style the element to make it visually prominent
  // and position it fixed on top of the page.
  logger.setAttribute('style',
    'position:absolute;right:0;top:0;' +
    'width:400px;height:200px;overflow:auto;' +
    'background:#666;color:#fff;');

  FusionCharts['debugger'].enable(function (msg) {
      // Configure the debugger to append its logs to the
      // logger HTML element.
      logger.appendChild(document.createTextNode(msg + '\n'));
  });
});
</script>
```

Including the above code snippet right after the inclusion of `fusioncharts.js` would create a small area on the top right corner of your page. This area would serve the purpose to show the output from debugger.

#### Using Firebug Lite

Internet Explorer 7 through 10 does not support inspecting objects logged to the console. This implies that the console may turn out to be pretty much useless for using the debugger with verbose output format. And the custom console that we previously implemented might become too complicated if we attempt to replicate all features of a JavaScript Console.

The debugger allows you to circumvent these limitations by incorporating the ability to automatically add Firebug Lite into your page. Firebug Lite is very powerful for debugging on older Internet Explorer browsers and on mobile device browsers that do not have a JavaScript Console. (Visit http://getfirebug.com/firebuglite for more information on this very popular component.)

To enable Firebug Lite, we need to replace the script block that we previously used to enable the debugger with one that instead uses (/api/fusioncharts/namespaces/debugger#static-enableFirebugLite) to the one below.

```html
<script type="text/javascript">
FusionCharts['debugger'].enableFirebugLite();
</script>
```

Firebug Lite component would appear as a tiny button in the bottom right corner of the page.

#### Some useful references

If you are new to debugging JavaScript, the following articles can help you learn about debugging in browsers.

  * Chrome Developer Tools: [https://developer.chrome.com/devtools/docs/javascript-debugging](https://developer.chrome.com/devtools/docs/javascript-debugging)
  * Internet Explorer Dev Center: [http://msdn.microsoft.com/library/ie/bg182326(v=vs.85)](http://msdn.microsoft.com/library/ie/bg182326)
  * Mozilla Developer Network: [https://developer.mozilla.org/en/docs/Debugging_JavaScript](https://developer.mozilla.org/en/docs/Debugging_JavaScript)
