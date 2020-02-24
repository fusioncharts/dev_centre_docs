---
title: Thermometer Gauge | FusionCharts
description: Thermometer gauge, is used to display temperatures. The fill level of the thermometer indicates the temperature data that you wish to depict.
heading: Thermometer Gauge
---

> This chart type belongs to **FusionWidgets XT**.

A thermometer gauge is used to display temperatures. The fill level of the thermometer indicates the temperature data that you want to display. The thermometer gauge is a real-time gauge, which can update its data at every specified interval, without requiring any page refreshes. The thermometer gauge does NOT need a predefined color range. Instead, it takes in the fill color as an attribute and uses that color to fill up the thermometer.

{% embed_chartAnatomy thermometer-gauge.json %}

## Simple Thermometer Gauge Example

You can use the thermometer gauge shown below as a real-time temperature monitor for the fictional Central Cold Store.

{% embed_all gauges-and-widgets-thermometer-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/3BNH3/) to edit the above gauge.

## Elements of Thermometer Gauges

In the image below, you can see the basic elements of a thermometer gauge labeled:

![Thermometer-gauge](/images/thermometer-gauge-introduction-1.png)

### Thermometer Fill

You can decipher the value being illustrated, by looking at the fill level in a thermometer gauge.

### Thermometer Border

You can put a border around the thermometer.

### Tick Marks

You can read the temperature values easily by looking at the calibration marks (or tick marks) on the vertical scale to the right of the thermometer. You can draw two types of tick marks on the thermometer gauge:

* Major tick marks – These are the bigger lines on the tick mark scale.

* Minor tick marks – These are the smaller lines enclosed within the bigger lines.

### Value Display

You can display the current temperature value indicated by the thermometer fill, on the chart value display box.

### Annotations

With annotations, you can draw your own custom shapes, add text, or even load images on the chart.

## Create a Thermometer Gauge

Use the following attributes to create a simple thermometer gauge:

* Specify the type using the `type` attribute. To render Thermometer gauge, set `thermometer`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Use the `lowerLimit` attribute to specify the lower limit (or the minimum value) of the gauge scale.

* Use the `upperLimit` attribute to specify the upper limit (or the maximum value) of the gauge scale.

* Use the attribute `numberSuffix`to specify the character to be appended to the end of each value.

* Use the attribute `thmFillColor` to specify the hex code of the color to be used as the fill color for the thermometer.

* Use the attribute `thmOriginX` to specify the horizontal origin for the thermometer gauge. Note that you can define this as the starting coordinate on an imaginary x-axis.

Refer to the code below:

```json
{
    "chart": { 
        "lowerLimit": "-10",
        "upperLimit": "0",
        "numberSuffix": "°C",
        "thmFillColor": "#008ee4",
        "thmOriginX": "100"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/LZWyr/) to edit the above gauge.

## Customize the Gauge Fill

Use the following attributes to customize the gauge fill:

* Use the `gaugeFillColor` attribute to specify the hex code of the color to be used as the fill color for the thermometer gauge.

* Use the `gaugeFillAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) for the gauge fill. 

Refer to the code below:

```json
{
    "chart": { 
        "gaugeFillColor": "#008ee4",
        "gaugeFillAlpha": "70"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/6UFzr/) to edit the above gauge.

## Customize the Gauge Borders

Use the following attributes to customize the thermometer gauge border :

* Set the value of the `showGaugeBorder` attribute to `1`, to show the gauge border.

* Use the `gaugeBorderColor`attribute to specify the hex code of the color to be used to render the entire gauge border.

* Use the `gaugeBorderThickness` attribute to specify the thickness (in pixels) of the gauge border.

* Use the `gaugeBorderAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the gauge border.

Refer to the code below:

```json
{
    "chart": { 
        "showGaugeBorder": "1",
        "gaugeBorderColor": "#008ee4",
        "gaugeBorderThickness": "2",
        "gaugeBorderAlpha": "60"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/8r7RV/) to edit the above gauge.

## Manually Set the Thermometer Radius and Height

You can let the gauge automatically calculate the best thermometer radius and height based on the data you provide, or explicitly set them yourself. Use the following attributes to manually set the thermometer radius and height:

* Use the `thmBulbRadius` attribute to specify the thermometer bulb radius (in pixels).

* Use the `thmHeight` attribute to specify the height (in pixels) of the scale for the thermometer.

Refer to the code below:

```json
{
    "chart": { 
        "thmBulbRadius": "35",
        "thmHeight": "150"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/gpX6k/) to edit the above gauge.

## Hide the Temperature Value

Set the value of the `showValue` attribute to `0`, to hide temperature values on the gauge. Note that by default, the gauge displays the temperature values.

Refer to the code below:

```
{
    "chart": {     
        "showValue": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/V73nQ/) to edit the above gauge.

## Show/hide Tick Marks and Tick Values

Use the following attributes to hide the tick marks and tick values. Note that by default, the gauge displays everything:

* Set the value of the `showTickMarks` attribute to `0` to hide the tick marks.

* Set the value of the `showTickValues` attribute `0` to hide the tick values.

Refer to the code below:

```
{
    "chart": {     
        "showTickMarks": "0",
        "showTickValues": "0"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/tQ985/) to edit the above gauge.

## Configure Tick Marks and Tick Values

Use the following attributes to configure the tick marks and tick values:

* Set the value of the `ticksOnRight` attribute to `0` to render the tick marks and values on the left side of the gauge. Note that by default, these are rendered to the right and the value of this attribute is `1`.

* Use the `tickMarkDistance` attribute to specify the distance (in pixels) between the tick marks and the gauge scale.

* Use the `tickValueDistance` attribute to specify the distance (in pixels) between the tick marks and the tick values.

* Set the value of the `adjustTM`attribute to `0` to prevent the gauge from automatically adjusting the number of major tick marks. By default, the gauge does this, to ensure better distribution of the chart scale. 

* Use the `majorTMNumber` attribute to specify the number of major tick marks to be rendered.

* Use the `minorTMNumber` attribute to specify the number of minor tick marks to be rendered.

* Use the `majorTMHeight` attribute to specify the height of major tick marks.

* Use the `minorTMHeight` attribute to specify the height of minor tick marks.

* Set the value of the `tickValueStep` attribute to n, to only show every n<sup>th</sup> tick value on the gauge scale.

Refer to the code below:

```json
{
    "chart": { 
        "adjustTM": "1",
        "ticksOnRight": "0",
        "tickMarkDistance": "5",
        "tickValueDistance": "2",
        "majorTMNumber": "9",
        "majorTMHeight": "12",
        "minorTMNumber": "4",
        "minorTMHeight": "7",
        "tickValueStep": "2"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/JZ36w/) to edit the above gauge.

## Customize Tick Marks

Use the following attributes to customize the cosmetic properties of tick marks:

* Use the `majorTMColor` attribute to specify the hex code of the color to be used to render the major tick marks.

* Use the `majorTMAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the major tick marks.

* Use the `majorTMThickness` attribute to specify the thickness (in pixels) of the major tick marks.

* Use the `minorTMColor` attribute to specify the hex code of the color to be used to render the minor tick marks.

* Use the `minorTMAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the minor tick marks.

* Use the `minorTMThickness` attribute to specify the thickness (in pixels) of the minor tick marks.

Refer to the code below:

```json
{
    "chart": { 
        "majorTMColor": "#666666",
        "majorTMAlpha": "100",
        "majorTMThickness": "2",
        "minorTMColor": "#666666",
        "minorTMAlpha": "50",
        "minorTMThickness": "2"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/uHBcn/) to edit the above gauge.

## Configure Hover Effects

Set the value of the `showHoverEffect` attribute `1`, to enable hover/touch effects for the thermometer gauge.

Refer to the code below:

```json
{
    "chart": { 
        "showhovereffect": "1"
    },
}
```

The gauge will look like as shown below:

![Thermometer](/gif/gauges-and-widgets-thermometer.gif)

Click [here](http://jsfiddle.net/fusioncharts/hyvLk5d8/) to edit the above gauge.

## Configure Realtime Updates Using JavaScript API

When you invoke the data provider page on the server end, it outputs the new data in the real time data format. The real time data format depends on:

* The value you want to pass.

* Whether you are using message logger for the gauge.

* The commands you use for the gauge, such as stop update.

In the simplest form, if you want to update the thermometer gauge, you have to output the data in the following format:

```json
&value=-5
```

Here, the output is a single value, -5. So, when the gauge reads this value, it will update the chart by setting its value to -5 (if you have provided a data range for the gauge, it will first check the value to verify if it falls within the defined range).

Use the following JavaScript API methods to update a thermometer gauge:

* Use the `feedData(strData)` method to feed real time data to the gauge using JavaScript. The data has to be in the same format as provided by the real time data provider page.

* Use the `getData()` method to return the data currently being shown by the gauge.

* Use the `setData(value)` method to set the data for the gauge. The value should be within the limits of the gauge.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "-6"
},
"events": {
    "rendered": function(evt, arg) {
        evt.sender.dataUpdate = setInterval(function() {
            var value,
                prevTemp = evt.sender.getData(),
                mainTemp = (Math.random() * 10) * (-1),
                diff = Math.abs(prevTemp - mainTemp);

            diff = diff > 1 ? (Math.random() * 1) : diff;
            if (mainTemp > prevTemp) {
                value = prevTemp + diff;
            } else {
                value = prevTemp - diff;
            }
            evt.sender.feedData("&value=" + value);
        }, 3000);
    },
    "disposed": function(evt, arg) {
        clearInterval(evt.sender.dataUpdate);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/gfqnj2oc/) to edit the above gauge.

## Configure Realtime Updates Using Server-side Script

Use the following parameters to configure real time updates using server-side scripts:

* Use the `dataStreamURL` parameter to set the path of the page, which is supposed to relay real time data to the chart. If you have special characters as a part of the data stream URL, such as **?** or **&**, you need to URL Encode the entire `dataStreamURL` (for example: `dataStreamURL='liveQuote.aspx?name=xyz'`). Note that the target page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real time feature won't work.

* Use the `refreshInterval` parameter to specify the number of seconds after which The gauge will look  for new data. This process will happen continuously.

* Use the `dataStamp` parameter to add a constantly changing data stamp that can be added to the real time data URL, so as to maintain a state. For more information, read <this article>.

Refer to the code below:

```json
{
    "chart": {
        "dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-thermometer-gauge-real-time-gauges-php-1.php",
        "refreshInterval": "5"
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/zc2Ldvjs/) to edit the above gauge.

## Stop/Restart Updates

Use the following JavaScript API methods to stop and restart real time updates to a thermometer gauge:

* Use the `stopUpdate()` method to stop the chart from self-updating.

* Use the `restartUpdate()` method to resume real time updates to the chart, if you stopped it earlier.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "-6"
},
"events": {
    'beforeRender': function(evt, args) {
        // creating div for controllers
        var controllers = document.createElement('div');

        // Create button inside div
        controllers.innerHTML = '<input id="btnSU" type="submit" name="Submit" value="Stop Update" >';
        args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
        controllers.setAttribute('id', 'controllers');
    },
    "renderComplete": function(evtObj, argObj) {
        var flag = 0,
            btn = document.getElementById("btnSU"),
            startStopUpdate = function() {
                if (flag === 0) {
                    btn.value = "Restart Update";
                    evtObj.sender.stopUpdate();
                    flag = 1;
                } else {
                    btn.value = "Stop Update";
                    evtObj.sender.restartUpdate();
                    flag = 0;
                }

            };
        btn.addEventListener && btn.addEventListener("click", startStopUpdate);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/pt2t929n/) to edit the above gauge.

## Configure Realtime Events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real time updates on gauges. 

### Use the `realTimeUpdateComplete` Event

The `realTimeUpdateComplete` event is raised whenever the real time thermometer gauge updates itself with new data, or more specifically, in the following cases:

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
    "value": "-6"
},
"events": {
    "rendered": function(evt, arg) {
        evt.sender.dataUpdate = setInterval(function() {
            var value,
                prevTemp = evt.sender.getData(),
                mainTemp = (Math.random() * 10) * (-1),
                diff = Math.abs(prevTemp - mainTemp);

            diff = diff > 1 ? (Math.random() * 1) : diff;
            if (mainTemp > prevTemp) {
                value = prevTemp + diff;
            } else {
                value = prevTemp - diff;
            }

            evt.sender.feedData("&value=" + value);

        }, 3000);
        updateAnnotation = function(evtObj, argObj) {
            var code,
                chartObj = evtObj.sender,
                val = chartObj.getData(),
                annotations = chartObj.annotations;

            if (val >= -4.5) {
                code = "#00FF00";
            } else if (val < -4.5 && val > -6) {
                code = "#ff9900";
            } else {
                code = "#ff0000";
            }
            annotations.update("background", {
                "fillColor": code
            });
        };
    },
    "renderComplete": function(evt, arg) {
        updateAnnotation(evt, arg);
    },
    "realtimeUpdateComplete": function(evt, arg) {
        updateAnnotation(evt, arg);
    },
    "disposed": function(evt, arg) {
        clearInterval(evt.sender.dataUpdate);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/hmx9wxtg/) to edit the above gauge.

### Use the `realTimeUpdateError` Event

The `realTimeUpdateError` event is raised when an error occurs while performing real time update using `datastreamURL`. The event arguments provided in the advanced model are as follows:

* The `eventObject` argument contains `eventId`, `eventType` and `sender` properties.

* The `argumentsObject` argument contains the `httpStatus` property, which in turn contains the HTTP Error status value as number.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "value": "-6"
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
        controllers.style.cssText = "min-height: 50px;color : #cc0000;font-family : Arial, Helvetica, sans-serif;font-size : 14px;margin-top : 10px;text-align: center;";
        args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
    },
    "realtimeUpdateError": function(evtObj, argObj) {

        document.getElementById('chart-message').innerHTML = "<b>Error Occured !</b><br> Status Code : " + argObj.httpStatus;
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-thermometer-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/16nftft4/) to edit the above gauge.

## Troubleshoot Realtime Gauges

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\). Instead, run the chart from behind a server (localhost - IIS, Apache, etc.). This is because the default security settings do not allow the chart to perform JavaScript interaction on the local file system, unless you specifically set them otherwise.