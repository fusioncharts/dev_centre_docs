---
title: LED Gauge | FusionCharts
description: An LED gauge has a horizontal/vertical scale. It uses bars that change color. This section talks about basics of LED gauges along with their useful elements
heading: LED Gauge
---

An LED Gauge is similar to an angular gauge chart, but with a horizontal/vertical scale instead of a circular one. It uses bars that change color, or marks out different regions in different colors to indicate whether data is within preset parameters. You can select the colors to suit your requirements, such as green for satisfactory, yellow for caution, and red for alarm.

LED gauges are of two types - horizontal and vertical. The horizontal LED gauge has the bar placed horizontally, while the vertical LED has it vertically. LED Gauges are used in financial applications like management dashboards, factory operation output reports, etc.

## Basics of LED gauges

The LED gauge (horizontal/vertical) is defined by its minimum and maximum values. Within that scale, you can create various ranges to classify your data. For example, you might define a range called "Best" that consists of values between 60 and 100. You might also define a range called "Weak" that consists of values between 30 and 60. For each range, you define a color, which helps in visually distinguishing the ranges from each other.

A horizontal LED gauge rendered to indicate fuel levels looks like the following:

**<chart>**

A vertical LED gauge rendered to indicate fuel levels looks like the following:

**<chart>**

## Elements of LED gauges

In the image below, you can see the basic elements of an LED gauge.

**IMAGE**

## Color range

You can create various ranges within the minimum and maximum values of an LED gauge. You can create as many ranges as you need. For each range, you need to specify the minimum and maximum limits, a name (rendered as the label for the range), and the hex code for the color of the range.

In the sample LED gauges shown above, the lower limit is 0 and the upper limit is 100. The range limits and the colors for each range have been defined as the following:

* 0-45: `#e44a00`

* 45-75: `#f8bd19`

* 75-100: `#6baa01`

## LED bars and gaps

The LED bars are the actual data indicators in an LED gauge. The LED bars fill up the container in a ratio that suggests the chart value.

## Tick marks

Tick marks are the calibration marks on the horizontal (or vertical, for the vertical LED) scale to help interpret the reading. There are two types of tick marks which you can draw on the chart:

* Major tick marks – These are the bigger lines below the scale.

* Minor tick marks – These are the smaller lines enclosed within the bigger lines.

## Chart value

The chart value indicates the value of the gauge in numeric terms.

## Annotations

Annotations let you draw your own custom shapes, text, or load images on the chart.

## Create an LED gauge

To create an LED gauge use the attributes given below:

* Specify the type using the `type` attribute. To render a horizontal LED gauge, set `hled` and to render a vertical LED gauge, set `vled`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Use the lowerLimit attribute to specify the lower limit, or the minimum value, of the gauge scale.

* Use the upperLimit attribute to specify the upper limit, or the maximum value, of the gauge scale.

* Use the lowerLimitDisplay attribute to specify the label to be displayed with the lower limit value on the gauge scale.

* Use the upperLimitDisplay attribute to specify the label to be displayed with the upper limit value on the gauge scale.

* Use the numberSuffix attribute to specify the character which will be appended at the end of a number.

Refer to the code below:

 ```

{
    "chart": {
        "caption": "Fuel Level Indicator",
        "lowerLimit": "0",
        "upperLimit": "100",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": "%",
        "valueFontSize": "12",
        "showhovereffect": "1",
        "origW": "400",
        "origH": "150",
        "ledSize": "3",
        "ledGap": "2",
        "manageResize": "1",
        "theme": "fint"
    },
    "annotations": {
        "showbelow": "1",
        "groups": [
            {
                "id": "indicator",
                "items": [
                    {
                        "id": "bgRectAngle",
                        "type": "rectangle",
                        "alpha": "90",
                        "radius": "1",
                        "fillColor": "#6baa01",
                        "x": "$gaugeCenterX - 20",
                        "tox": "$gaugeCenterX + 20",
                        "y": "$gaugeEndY + 25",
                        "toy": "$gaugeEndY + 45"
                    }
                ]
            }
        ]
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "45",
                "code": "#e44a00"
            },
            {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f8bd19"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }
        ]
    },
    "value": "92"
}

```

The chart will look as shown below:

**<chart>8*

## Specify the background color

Use the `gaugeFillColor` attribute to specify the hex code of the color to be applied to the gauge background.

Refer to the code below:

```

{
    "chart": {
       
        "gaugeFillColor": "#444444"
       
    },

```

The chart will look as shown below:

**<chart>**

## Use a single color for LED fill and background

When you divide the LED scale into color ranges, the LED bars in each zone take up the fill color of that color range. You can, however, render the LED background using a single fill color (the color of the range to which the current value belongs).

Use the following attributes to apply a single color for the LED fill and the LED background:

* Set the value of the `useSameFillColor` attribute to `1`, to specify whether a single fill color will be applied to the activated LED bars. 

* Set the value of the `useSameFillBgColor` attribute to `1`, to specify whether a single color will be applied to the entire LED background.

Refer to the code below:

```
{
    "chart": {
     
        "useSameFillColor": "1",
        "useSameFillBgColor": "1"       
    },

```

The chart will look as shown below:

**<chart>**

## Show/Hide the gauge border

Set the value of the `showGaugeBorder` attribute to specify whether the border for the LED gauge should be displayed

Refer to the code below:

```

{
    "chart": {
       
        "showGaugeBorder": "0"

    },

```

The chart will look as shown below:

**<chart>**

## Customize gauge border properties

Use the following attributes to customize the gauge border:

* Use the `gaugeBorderColor` attribute to specify the hex code of the color to be used to render the entire border of the gauge.

* Use the `gaugeBorderThickness` attribute to specify the thickness, in pixels, for the gauge border.

* Use the `gaugeBorderAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) for the gauge border.

Refer to the code below:

```

{
    "chart": {
        "gaugeBorderColor": "#AAAAAA",
        "gaugeBorderThickness": "7",
        "gaugeBorderAlpha": "70"
       
    },

```

The chart will look as shown below:

**<chart>**

## Configure LED bar size and gap

By default, the gauge determines the bar size and the gap automatically, based on the data provided by you. However, you can explicitly specify the bar size and gap. Use the following attributes to do so:

* Use the `ledSize` attribute to specify the size (in pixels) of the LED bar.

* Use the `ledGap` attribute to specify the gap (in pixels) between two consecutive LED bars.

Refer to the code below:

```

{
    "chart": {
        "ledSize": "5",
        "ledGap": "1"       
    },

```

The chart will look as shown below:

**<chart>**

> Note: To make the LEDs appear continuous, you can set `ledGap` to `0`.

## Show/hide chart value

Set the value of the `showValue` attribute to `1`, to specify whether the current data value, or the chart value, should be displayed.

Refer to the code below:

```

{
    "chart": {
       
        "showValue": "1"
    },

```

The chart will look as shown below:

**<chart>**

## Show/hide tick marks and tick values

Use the following attributes to show/hide tick marks and tick values:

* Set the value of the `showTickMarks` attribute to `1`, to display tick marks on the LED gauge.

* Set the value of the `showTickValues` attribute to to `1`, to display tick marks on the LED gauge.

Refer to the code below:

```

{
    "chart": {
       
        "showTickMarks": "1",
        "showTickValues": "1"

    },

```

The chart will look as shown below:

**<chart>**

## Configure tick marks and tick values

By default, the tick marks and values are placed below the gauge in the horizontal LED gauge and to the right in the vertical LED gauge. However, you can explicitly configure the position of tick marks and tick values as required. Use the following attributes to configure tick marks and tick values:

* Set the value of the `ticksBelowGauge` attribute to `1`, to render tick marks and values below the gauge. Note that this attribute is only applicable to the horizontal LED gauge.

* Set the value of the `ticksOnRight` attribute to `1`, to specify whether the tick marks and values will be rendered to the right of the gauge. Note that this attribute is only applicable to the vertical LED gauge.

* Use the `tickMarkDistance` attribute to specify the distance (in pixels) between the tick marks and the gauge scale.

* Use the `tickValueDistance` attribute to specify the distance (in pixels) between the tick marks and the tick values.

* Set the value of the `adjustTM` attribute `1`, to automatically adjust major tick marks, to ensure better distribution of the chart scale.

* Use the `majorTMNumber` attribute to specify the number of major tick marks to be rendered.

* Use the `majorTMHeight` attribute to specify the height of major tick marks.

* Use the `minorTMNumber` attribute to specify the number of minor tick marks.

* Use the `minorTMHeight` attribute to specify the height of minor tick marks.

* Use the `tickValueStep` attribute to specify the value of `n`, to show only every n-th tick value.

Refer to the code below:

```

{
    "chart": {
       
        "adjustTM": "1",
        "ticksBelowGauge": "1",
        "tickMarkDistance": "5",
        "tickValueDistance": "2",
        "majorTMNumber": "9",
        "majorTMHeight": "12",
        "minorTMNumber": "4",
        "minorTMHeight": "7",
        "tickValueStep": "2"
    
    },

```

The chart will look as shown below:

**<chart>**

## Configure tick mark and tick value cosmetics

You can also use FusionCharts Suite XT to configure the cosmetics of major and minor tick marks. Use the following attributes to do so:

* Use the `majorTMColor` attribute to specify the hex code of the color to be used to render the major tick marks.

* Use the `majorTMAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the major tick marks.

* Use the `majorTMThickness` attribute to specify the thickness (in pixels) of the major tick marks.

* Use the `minorTMColor` attribute to specify the hex code of the color to be used to render the minor tick marks.

* Use the `minorTMAlpha` attribute to specify the transparency (between `0` for transparent and `100` for opaque) of the minor tick marks.

* Use the `minorTMThickness` attribute to specify the thickness (in pixels) of the minor tick marks.

Refer to the code below:

```

{
    "chart": {
        
        "majorTMNumber": "5",
        "minorTMNumber": "5",
        "tickMarkDistance": "5",
        "majorTMColor": "#0000CC",
        "majorTMAlpha": "60",
        "majorTMThickness": "2",
        "minorTMColor": "#0000CC",
        "minorTMAlpha": "30",
        "minorTMThickness": "2",
       
    },

```

The chart will look as shown below:

**<chart>**

## Configure hover effects

Using FusionCharts Suite XT, you can display hover effects for the gauge. Set the value of the `showHoverEffect` attribute to `1`, to enable hover effects for an LED gauge. 

Refer to the code below:

```

{
    "chart": {
       
        "showHoverEffect": "1"

    },

```

The chart will look as shown below:

**<chart>**

## Real time LED gauge

The LED gauge is a real time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data every n seconds, and silently updates itself to reflect the current state of data. There are two different ways you can update the LED gauge; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

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

```
**INSERT CODE**

```

The chart will look as shown below:

**<chart>**

## Configure real time updates using server-side script

Use the following parameters to configure real time updates using server-side scripts:

* Use the `dataStreamURL` parameter to set the path of the page, which is supposed to relay real time data to the chart. If you have special characters as a part of the data stream URL, such as **?** or **&**, you need to URL Encode the entire `dataStreamURL`. Note that the target page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real time feature won't work.

* Use the `refreshInterval` parameter to specify the number of seconds after which the chart will look for new data. This process will happen continuously.

* Use the `dataStamp` parameter to add a constantly changing data stamp that can be added to the real time data URL, so as to maintain a state. For more information, read <this article>.

Refer to the code below:

```
**INSERT CODE**
```

The chart will look as shown below:

**<chart>**

## Stop/restart updates

Use the following JavaScript API methods to stop and restart real time updates to an LED gauge:

* Use the stopUpdate() method to stop the chart from self-updating.

* Use the restartUpdate() method to resume real time updates to the chart, if you stopped it earlier.

Refer to the code below:

```
**INSERT CODE**
```

The chart will look as shown below:

**<chart>**

## Configure real time events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real time updates on gauges. 

### Use the `realTimeUpdateComplete` event

The `realTimeUpdateComplete` event is raised whenever the real time LED gauge updates itself with new data, or more specifically, in the following cases:

* Real time update using `datastreamURL`

* Real time update using JavaScript API (using `setData`, `feedData`, and `setDataForId` functions)

* Real time update of the gauge through user interaction (through edit mode)

The event arguments provided in the advanced model are as follows:

* The `eventObject` argument contains the `eventId`, `eventType`, and `sender` properties.

* The `argumentsObject` argument contains the values of the updated data and the previous data.

Refer to the code below:

```
**INSERT CODE**
```

The chart will look as shown below:

**<chart>**

### Use the `realTimeUpdateError` event

The `realTimeUpdateError` event is raised when an error occurs while performing real time update using `datastreamURL`. The event arguments provided in the advanced model are as follows:

* The `eventObject` argument contains `eventId`, `eventType` and `sender` properties.

* The `argumentsObject` argument contains the `httpStatus` property, which in turn contains the HTTP Error status value as number.

Refer to the code below:

```
**INSERT CODE**
```

The chart will look as shown below:

**<chart>**

## Troubleshoot real time gauges

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\). Instead, run the chart from behind a server (localhost - IIS, Apache, etc.). This is because the default security settings do not allow the chart to perform JavaScript interaction on the local file system, unless otherwise specifically set.