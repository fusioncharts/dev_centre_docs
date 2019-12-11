---
title: Cylinder Gauge | FusionCharts
description: The cylinder gauge is represented by a vertical cylinder, whose fill level is defined by the data value being plotted.
heading: Cylinder Gauge
---

The cylinder gauge is represented by a vertical cylinder, whose fill level is defined by the data value you plot. You can use it to report inventory levels, fuel levels, etc. The cylinder gauge is a real-time chart, which can update its data after intervals you specify, without any page refreshes. What makes a cylinder gauge different from other gauges is that this gauge can only be rendered with one fill color. You cannot create a cylinder gauge with color ranges.

{% embed_chartAnatomy cylinder-gauge.json %}

## Simple cylinder gauge example

You can use the cylinder gauge shown below, to monitor the diesel level in the generator at Bakersfield Central.

{% embed_all gauges-and-widgets-cylinder-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/MWnVr/) to edit the above gauge.

## Elements of cylinder gauges

In the image below, you can see the basic elements of a cylinder gauge:

![Cylinder-gauge](/images/cylinder-gauge-introduction-1.jpg)

### Cylinder fill

The cylinder is the main component in a cylinder chart. You can understand the value being illustrated by looking at the percentage of cylinder filled.

### Tick marks

Tick marks are the calibration marks on the vertical scale to the left/right of the cylinder, which help you interpret the reading. There are two types of tick marks which you can draw on the chart:

* Major tick marks – These are the bigger lines on the tick mark scale.

* Minor tick marks – These are the smaller lines enclosed within the bigger lines.

### Chart value

The value display box helps you display the current value of the cylinder fill.

### Annotations

Annotations are graphical elements that you can create and position anywhere on a gauge. You can configure these elements in a number of ways, to customize your chart. Although annotations are non-chart elements, you can render them on the chart, to improve the visual representation of data.

With this, you have seen what is a cylinder gauge and the the basic components that make up a cylinder gauge.

## Simple cylinder gauge example

The cylinder gauge is a real-time chart, which can update its data after specified intervals, without requiring any page refreshes. In this section, you will be shown how you can create a simple cylinder gauge.

### Create a cylinder gauge

Use the following attributes to create a simple cylinder gauge:

* Specify the type using the `type` attribute. To render Cylinder gauge, set `cylinder`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Use the `lowerLimit` attribute to specify the lower limit, or the minimum value, of the gauge scale.

* Use the `upperLimit` attribute to specify the upper limit, or the maximum value, of the gauge scale.

* Use the `lowerLimitDisplay` attribute to specify the label to be displayed with the lower limit value on the gauge scale.

* Use the `upperLimitDisplay` attribute to specify the label to be displayed with the upper limit value on the gauge scale.

* Use the `numberSuffix` attribute to specify the character(s) to be appended to the end of a number.

Refer to the code below:

```json
{
    "chart": { 
        "lowerLimit": "0",
        "upperLimit": "120",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/MWnVr/) to edit the above gauge.

> The cylinder gauge shown above has a maximum capacity of 120 liters, and is configured to show that 75 liters of diesel is left in the generator.

You have several options to configure and customize the cylinder gauge to suit your requirements.

## Set cylinder fill color

Use the `cylFillColor` attribute to specify the hex code of the fill color for the cylinder.

Refer to the code below:

```json
{
    "chart": {    
        "cylFillColor": "#1aaf5d"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/QseLf/) to edit the above gauge.

> If you do not customize the fill color, the cylinder gauge will use the default color as the fill color instead.

## Customize cylinder origin, radius, and height

Use the following attributes to customize the cylinder origin, radius, and height:

* Use the `cylOriginX` attribute to specify the origin x-coordinate of the cylinder.

* Use the `cylOriginY` attribute to specify the origin y-coordinate of the cylinder.

* Use the `cylRadius` attribute to specify the radius of the cylinder.

* Use the `cylHeight` attribute to specify the height of the cylinder.

Refer to the code below:

```json
{
    "chart": { 
        "cyloriginx": "50",
        "cyloriginy": "260",
        "cylradius": "40",
        "cylheight": "150"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/AN44L/) to edit the above gauge.

> If you don't customize the origin, radius, and height, the cylinder gauge will automatically calculate the best-fit coordinates and size for the cylinder. 

## Configure chart value display

Set the value of the `showValue` attribute to `0` to hide the data values below the gauge. 

Refer to the code below:

```json
{
    "chart": { 
        "showValue": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/ZWTxT/) to edit the above gauge.

> By default, the attribute takes `1` as the value, and displays data values below the gauge. 

## Hide tick marks and tick values

Use the following attributes to hide tick marks and values:

* Set the value of the `showTickMarks` attribute to `0`, to hide the tick marks. 

* Set the value of the `showTickValues` attribute to `0`, to hide the tick values. 

Refer to the code below:

```json
{
    "chart": { 
        "showTickMarks": "0",
        "showTickValues": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/T85UH/) to edit the above gauge.

## Position tick marks and tick values

Set the value of the `ticksOnRight` attribute to `0`, to render the tick marks on the left side of the gauge.

Refer to the code below:

```json
{
    "chart": { 
        "ticksOnRight": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/L3Hs4/) to edit the above gauge.

> By default, the tick marks and tick values are rendered to the right of the gauge.

## Customize the number of tick marks

Use the following attributes to customize the number of tick marks:

* Use the `majorTMNumber` attribute to specify the number of major tick marks.

* Use the `minorTMNumber` attribute to specify the number of minor tick marks. Note that minor tick marks refer to the tick marks between two major tick marks.

Refer to the code below:

```json
{
    "chart": { 
        "majorTMNumber": "9",
        "minorTMNumber": "1"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/9BJrS/) to edit the above gauge.

## Disable auto adjustment of tick marks

Set the value of the `adjustTM`attribute to `0`, to disable automatic distribution of tick marks by the gauge, to ensure the best view.

Refer to the code below:

```json
{
    "chart": { 
        "adjustTM": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/qtk9z/) to edit the above gauge.

> Unless you manually disable the automatic distribution of tick marks, the cylinder gauge can automatically calculate and display the best feasible number of major tick marks.

## Configure tick value step

Set the value of the `tickValueStep` attribute to **n**, to only display every **n**<sup>th</sup> tick value on the gauge. 

Refer to the code below:

```json
{
    "chart": { 
        "tickValueStep": "2"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/LNxHB/) to edit the above gauge.

> The cylinder gauge always displays the upper and lower limits of the scale.

## Configure tick mark cosmetics

Use the following attributes to configure the major and minor tick marks:

* Use the `majorTMColor` attribute to specify the hex code of the color to be used to render the major tick marks.

* Use the `majorTMAalpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the major tick marks.

* Use the `majorTMHeight` attribute to specify the height (in pixels) of the major tick marks.

* Use the `majorTMThickness` attribute to specify the thickness (in pixels) of the major tick marks.

* Use the `minorTMColor` attribute to specify the hex code of the color to be used to render the minor tick marks.

* Use the `minorTMAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the minor tick marks.

* Use the `minorTMHeight` attribute to specify the height (in pixels) of the minor tick marks.

* Use the `minorTMThickness` attribute to specify the thickness (in pixels) of the minor tick marks.

* Use the `tickMarkDistance` attribute to specify the distance (in pixels) between the gauge and the tick marks.

Refer to the code below:

```json
{
    "chart": { 
        "majorTMColor": "#1aaf5d",
        "majorTMAlpha": "100",
        "majorTMHeight": "10",
        "majorTMThickness": "2",
        "minorTMColor": "#1aaf5d",
        "minorTMAlpha": "100",
        "minorTMHeight": "7",
        "minorTMThickness": "1",
        "tickmarkDistance": "5"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/em5cg/) to edit the above gauge.

## Apply hover effects

Use the following attributes to configure hover/touch effects for the cylinder gauge and boost visualization:

* Use the `cylFillHoverColor` attribute to specify the hex code for the color to be used to fill the cylinder when you hover the mouse pointer over it. 

* Use the `cylFillHoverAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the cylinder when you hover the mouse pointer over it.

Refer to the code below:

```json
{
    "chart": { 
        "cylFillHoverColor": "#0099fd",
        "cylFillHoverAlpha": "85"
    },
}
```

The gauge will look like as shown below:

![Cylinder](/gif/gauges-and-widgets-cylinder.gif)

Click [here](http://jsfiddle.net/fusioncharts/cSkE3/) to edit the above gauge.

## Build a real-time cylinder gauge

You can build real-time cylinder gauges that continuously request and render new data without involving a page refresh, by using JavaScript API, or server-side scripts. 

## Real time data format

When you invoke the data provider page on the server end, it outputs the new data in the real time data format. The real time data format depends on:

* The value you want to pass.

* Whether you are using message logger for the gauge.

* The use of commands for the gauge, such as stop update.

Use the following JavaScript API methods used to update a pointer:

* Use the `feedData(strData)` method to feed real time data to the gauge using JavaScript. The data has to be in the same format as provided by the real time data provider page.

* Use the `getData()` method to return the data currently being shown by the gauge.

* Use the `setData(value)` method to set the data for the gauge. The value should be within the limits of the gauge.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "110"
},
"events": {
    "rendered": function(evtObj, argObj) {
        var fuelVolume = 110,
            gaugeRef = evtObj.sender;
        gaugeRef.chartInterval = setInterval(function() {

            (fuelVolume < 10) ? (fuelVolume = 110) : "";
            var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
            gaugeRef.feedData("&value=" + consVolume);
            fuelVolume = consVolume;
        }, 3000);
    },
    "disposed": function(evt, arg) {
        clearInterval(evt.sender.chartInterval);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/77kv6s1h/) to edit the above gauge.

## Configure real time updates using server-side script

Use the following parameters to configure real time updates using server-side scripts:

* Use the `dataStreamURL` parameter to set the path of the page, which is supposed to relay real time data to the chart. If you have special characters as a part of the data stream URL, such as **?** or **&**, you need to URL Encode the entire `dataStreamURL`. Note that the target page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real time feature won't work.

* Use the `refreshInterval` parameter to specify the number of seconds after which The gauge will look  for new data. This process will happen continuously.

* Use the `dataStamp` parameter to add a constantly changing data stamp that can be added to the real time data URL, so as to maintain a state. For more information, read <this article>.

Refer to the code below:

```json
{
    "chart": {
        "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-php-1.php",
        "refreshInterval": "2",
        "refreshInstantly": "1"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/wcb7b8g3/) to edit the above gauge.

## Stop/restart updates

Use the following JavaScript API methods to stop and restart real time updates to an cylinder gauge:

* Use the `stopUpdate()` method to stop the chart from self-updating.

* Use the `restartUpdate()` method to resume real time updates to the chart, if you stopped it earlier.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "110"
},
events: {
    "beforeRender": function(evt, args) {
        // creating div for controllers
        var controllers = document.createElement('div'),
            isStopped = false,
            gaugeRef = evt.sender;
        controllers.setAttribute('id', 'controllers');

        // Create checkbox inside div
        controllers.innerHTML = '<input type="button" value="Stop Update" id="toggleBtn" style="margin-left:5px;margin-top:5px;font-size:13px;padding:2px;" />';
        args.container.parentNode.insertBefore(controllers, args.container.nextSibling);

        // setting css styles for controllers div
        controllers.style.cssText = "text-align: center;";
        var btn = document.getElementById('toggleBtn'),
            startStopUpdate = function() {
                if (!isStopped) {
                    isStopped = true
                    btn.value = "Restart Update";
                    gaugeRef.stopUpdate();
                } else {
                    isStopped = false;
                    btn.value = "Stop Update";
                    gaugeRef.restartUpdate();
                }
            }

        btn.addEventListener && btn.addEventListener("click", startStopUpdate);

    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/389fyhdg/) to edit the above gauge.

## Configure real time events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real time updates on gauges. 

### Use the `realTimeUpdateComplete` event

The `realTimeUpdateComplete` event is raised whenever the real time cylinder gauge updates itself with new data, or more specifically, in the following cases:

* Real time update using `datastreamURL`

* Real time update using JavaScript API (using `setData`, `feedData`, and `setDataForId` functions)

* Real time update of the gauge through user interaction (through edit mode)

The event arguments provided in the advanced model are as follows:

* The `eventObject` argument contains the `eventId`, `eventType`, and `sender` properties.

* The `argumentsObject` argument contains the values of the updated data and the previous data.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "110"
},
"events": {
    "rendered": function(evtObj, argObj) {
        var gaugeRef = evtObj.sender,
            fuelVolume = 110;
        gaugeRef.chartInterval = setInterval(function() {
            (fuelVolume < 10) ? (fuelVolume = 110) : "";
            var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
            gaugeRef.feedData("&value=" + consVolume);
            fuelVolume = consVolume;
        }, 1000);
    },
    //Using real time update event to update the annotation
    //showing available volume of Diesel
    "realTimeUpdateComplete": function(evt, arg) {
        var annotations = evt.sender.annotations,
            dataVal = evt.sender.getData(),
            colorVal = (dataVal >= 70) ? "#6caa03" : ((dataVal <= 25) ? "#e44b02" : "#f8bd1b");
        //Updating value
        annotations && annotations.update('rangeText', {
            "text": "Available Volume: " + dataVal + " ltrs"
        });
        //Changing background color as per value
        annotations && annotations.update('rangeBg', {
            "fillcolor": colorVal
        });
    },
    "disposed": function(evt, arg) {
        clearInterval(evt.sender.chartInterval);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/beo34buz/) to edit the above gauge.

### Use the `realTimeUpdateError` event

The `realTimeUpdateError` event is raised when an error occurs while performing real time update using `datastreamURL`. The event arguments provided in the advanced model are as follows:

* The `eventObject` argument contains `eventId`, `eventType` and `sender` properties.

* The `argumentsObject` argument contains the `httpStatus` property, which in turn contains the HTTP Error status value as number.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "110"
},
"events": {
    'beforeRender': function(evt, args) {

        // creating div for controllers
        var controllers = document.createElement('div'),
            container = document.getElementById('chart-container');
        // Create checkbox inside div

        controllers.innerHTML = '<div id="chart-message"></div>';

        controllers.setAttribute('id', 'controllers');
        // setting css styles for controllers div
        controllers.style.cssText = "text-align: center;min-height: 50px;color : #cc0000;font-family : Arial, Helvetica, sans-serif;font-size : 14px;margin-top : 10px;";
        args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
    },

    //Using real time update error event
    "realtimeUpdateError": function(evtObj, argObj) {
        var msgDiv = document.getElementById('chart-message');
        msgDiv.innerHTML = "<b>Error Occured !</b><br> Status Code : " + argObj.httpStatus;
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-cylinder-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/9d8e05pb/) to edit the above gauge.

## Troubleshoot real time gauges

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\). Instead, run the chart from behind a server (localhost - IIS, Apache, etc.). This is because the default security settings do not allow the chart to perform JavaScript interaction on the local file system, unless otherwise specifically set.