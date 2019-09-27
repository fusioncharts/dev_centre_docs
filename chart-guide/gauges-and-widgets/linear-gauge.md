---
title: Linear Gauge | FusionCharts
description: A linear gauge uses a horizontal scale to display the data range. This section talks about basics of a linear gauge and its elements
heading: Linear Gauge
---

> This chart type belongs to **FusionWidgets XT**.

A linear gauge uses a horizontal scale to display the data range along with a fully configurable data pointer (or multiple pointers) to indicate the data value on the scale. The FusionCharts Suite XT linear gauge is a real-time gauge, which can update its data at specified intervals, without requiring any page refreshes.

## Basics of a linear gauge

A simple linear gauge looks like the following:

{% embed_all gauges-and-widgets-linear-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/R8fe6/) to edit the above gauge.

You can use a linear gauge to display a specific data point, using a pointer. The pointer moves on a horizontal named color scale to indicate whether the monitored data is within the defined limits.

The gauge scale extends between predefined minimum and maximum values. Within that scale, you can create various ranges to classify the data. For example, you may define a range called `Best` that consists of values between `60` and `100`. Or you may create a range called `Weak`that consists of values between `30` and `60`. For each range, you define a color, which helps visually distinguish the ranges from each other.

You can make use of configuration options to configure the linear gauge into just about any kind of sliding gauge, meter, or mechanism for output. You can build different kinds of gauges, including factory/instrument gauges, range meter, slider, tank/ vessel fill indicator, Volt/ Amp/ Ohm Meter, and more.

## Elements of the linear gauge

### Horizontal Scale

The linear gauge scale is defined by minimum and maximum values. Within that scale, you can create as many number of ranges as required, to classify your data. For each range, you will have to specify the minimum and maximum limits, a name for the range (than can be rendered as the label for the range), and the hex code for the color to be used for the range.

In the sample linear gauge shown above, the lower limit is `0` and the upper limit is `100`. The range limits and names have been defined as:

- 0%-35%: Low

- 35%-70%: Moderate

- 70%-100%: High

The colors specified for each range are green, yellow, and red respectively.

> Each color range should have its own unique range value and should not overlap with adjoining color ranges. If you define a range as 0-35, the next range should have its minimum value as 35. Similarly, if you set the upper limit of the chart as 100, the last range should have maximum value as 100.

### Data Pointers

Data pointers point to the current data value on the linear gauge scale. For the pointer, you can define the number of sides (for the shape), as well as configure its border, background, and radius. You can also create and configure the cosmetics for multiple pointers for the same gauge scale, each pointing to a different value.

### Tick Marks

Tick marks are calibration marks on the horizontal scale to help interpret the reading. There are two types of tick marks, which you can draw on the gauge:

- Major tick marks – These are the bigger lines below the gauge scale.

- Minor tick marks – These are the smaller lines enclosed within the bigger lines.

For all the tick marks, you can specify the color and the height, as well as show/hide the values.

### Trend Points and Trend Zones

Trend points are used to represent a single target value on the gauge scale, against which the current value can be compared. Similarly, trend zones are used to represent a range on the scale.

For example, you can use a trend point to mark the percentage of CPU utilization that is recommended (say, 85%). You can also use a trend zone to show a recommended range (say, 70-85%).

### Annotations

Using annotations, you can draw custom shapes, text, or load images on the linear gauge.

## Simple Linear Gauge Example

The linear gauge is used to display a specific data point over a horizontal scale using a slider component - also called as the pointer - to indicate the data value. In the example given below, you can see how to create a linear gauge that indicates the server utilization at food.hsm.com.

To create a linear gauge, you need to:

- Specify the type using the `type` attribute. To render a horizontal Linear gauge, set `hlinear` and to render a vertical Linear gauge, set `vlinear`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

- Define the lower and upper limits (also known as the minimum and maximum values) for the gauge scale. For our example, since you are plotting the server utilization in percentage, set the lower limit to 0 and the upper limit to 100.

- Divide the gauge scale into three regions to indicate three utilization limits for the server - low, moderate, and high. The result might look like the values given in the table below:

| Range   | Server Utilization Level | Color for the Range |
| ------- | ------------------------ | ------------------- |
| 0-35%   | Low                      | Green e.g. #8cba02  |
| 35-70%  | Moderate                 | Yellow e.g. #f6bd11 |
| 70-100% | High                     | Red e.g. #ff6650    |

- Decide a data value for the pointer to point to. For this example, set the data value to 75.

- Specify the lower limit, or the minimum value, of the gauge scale, using the `lowerLimit` attribute.

- Specify the upper limit, or the maximum value, of the gauge scale, using the `upperLimit` attribute.

- Specify the character (if any) to be appended to the end of the number, using the `numberSuffix`attribute.

- Specify the character (if any) to be displayed before every number, using the `numberPrefix`attribute.

- Specify the minimum value for a color range using the `minValue` attribute.

- Specify the maximum value for a color range using the `maxValue` attribute.

- Specify the label to be rendered for a color range using the `label` attribute.

- Specify the current pointer value using the `value` attribute.

Refer to the code below:

```json
{
   "chart": {
      "theme": "fusion",
      "caption": "Server CPU Utilization",
      "subcaption": "food.hsm.com",
      "lowerLimit": "0",
      "upperLimit": "100",
      "numberSuffix": "%",
      "chartBottomMargin": "40",
      "valueFontSize": "11",
      "valueFontBold": "0"
   },
   "colorRange": {
      "color": [
         {
            "minValue": "0",
            "maxValue": "35",
            "label": "Low"
         },
         {
            "minValue": "35",
            "maxValue": "70",
            "label": "Moderate"
         },
         {
            "minValue": "70",
            "maxValue": "100",
            "label": "High"
         }
      ]
   },
   "pointers": {
      "pointer": [
         {
            "value": "75"
         }
      ]
   },
   "trendPoints": {
      "point": [
         {
            "startValue": "70",
            "displayValue": " ",
            "dashed": "1",
            "showValues": "0"
         },
         {
            "startValue": "85",
            "displayValue": " ",
            "dashed": "1",
            "showValues": "0"
         },
         {
            "startValue": "70",
            "endValue": "85",
            "displayValue": " ",
            "alpha": "40"
         }
      ]
   },
   "annotations": {
      "origw": "400",
      "origh": "190",
      "autoscale": "1",
      "groups": [
         {
            "id": "range",
            "items": [
               {
                  "id": "rangeBg",
                  "type": "rectangle",
                  "x": "$chartCenterX-115",
                  "y": "$chartEndY-35",
                  "tox": "$chartCenterX +115",
                  "toy": "$chartEndY-15",
                  "fillcolor": "#0075c2"
               },
               {
                  "id": "rangeText",
                  "type": "Text",
                  "fontSize": "11",
                  "fillcolor": "#ffffff",
                  "text": "Recommended Utilization Range : 70% - 85%",
                  "x": "$chartCenterX",
                  "y": "$chartEndY-25"
               }
            ]
         }
      ]
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/R8fe6/) to edit the above gauge.

You can configure the functional and cosmetic properties of the linear gauge to improve its visual representation.

## Configure Pointer Properties

Use the following attributes to configure the cosmetic properties of the pointer:

- Specify the hex code for the color to be applied to the pointer border, using the `borderColor`attribute.

- Specify the thickness (in pixels) for the pointer border using the `borderThickness`attribute.

- Specify the hex code for the color to be applied to the background of the pointer, using the `bgColor`attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) for the background of the pointer, using the `bgAlpha` attribute.

- Specify the radius (in pixels) of the pointer, using the `radius`attribute.

- Specify the number of sides for the pointer to determine its shape, using the `sides` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
           ...
        ]
    },
    "pointers": {
        "pointer": [{
            "borderColor": "#333333",
            "borderThickness": "2",
            "borderAlpha": "60",
            "bgColor": "#0075c2",
            "bgAlpha": "75",
            "radius": "6",
            "sides": "4",
            "value": "75"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/6a9Tb/) to edit the above gauge.

## Add tool text and a link to the pointer

Use the following attributes to add a tool-text and an external link for the pointer:

- Specify the tooltip text to be rendered when you hover the mouse pointer over the pointer, using the `toolText` attribute.

- Specify the URL of the target that will open if you click the pointer, using the `link` attribute. Note that you need to define the link to the external URL using the FusionCharts link format.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "pointers": {
        "pointer": [{
            "toolText": "Customer satisfaction $value%",
            "link": "http://www.fusioncharts.com"
        }]
    }
}
```

> To add multiple pointers to a gauge, you simply need to create multiple instances of the `pointer` object, which belongs to the `pointers` object. Refer to the example given above.

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/VLRJ2/) to edit the above gauge.

## Adding Multiple Pointers

A linear gauge rendered with two pointers, showing the server CPU utilization for a transaction server and a web server looks like this:

{% embed_chart gauges-and-widgets-linear-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/K99bA/) to edit the above gauge.

To add multiple pointers, you only need to create multiple instances of the `pointer` object, which belongs to the `pointers` object.

## Configure the pointer value

Use the following attributes to configure the pointer value:

- Hide the pointer value, by setting the value of the `showValue` attribute to `0`.

- Display the value above the pointer, by setting the value of the `valueAbovePointer` attribute to `1`.

Refer to the code below:

```javascript
{
    "chart": {  },
    "colorRange": {
        "color": [ ]
    },
    "pointers": {
        "pointer": [{
            "showValue": "1",
            "valueAbovePointer": "1"
        }, {
            "showValue": "0"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/Mn2d5/) to edit the above gauge.

> The gauge shown above is rendered with two check boxes below it: **Show Value** and **Place Value Above Pointer**. If you select the **Show Value** checkbox, the value of the pointer is shown; if you clear it, the value is hidden. If you select the **Place Value Above Pointer** checkbox, the value is placed above the pointer; if you clear it, the value is shown below.

## Configure pointer position

You can configure the linear gauge to show the pointer along the top edge or the bottom edge of the gauge. Set the value of the `pointerOnTop` attribute to `0` to show it at the bottom, or to `1` to show it at the top.

Refer to the code below:

```javascript
{
   "chart": {
      "pointerOnTop": "0"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ZVKw9/) to edit the above gauge.

The gauge shown above is rendered with two check boxes below it: **Pointer on Top** and **Pointer at Bottom**. If you select the **Pointer on Top** check box, the pointer is shown along the top edge of the gauge; if you select the **Pointer at Bottom** checkbox, the pointer is shown along the bottom edge of the gauge.

## Reverse the Order of the Color Scale

By default, the order of the color scale of a horizontal linear gauge is set from left to right side of the gauge. Starting v3.14.1, FusionCharts allows you to reverse (right to left) the order of the color scale of the gauge.

To reverse the order of the color scale of the linear gauge, set the value of `reverseScale` attribute to `1`.

> To reverse the order of the color scale using `reverseScale` attribute, set the value of `editMode` attribute to `1`.

Refer to the code below:

```javascript
{
    "chart": {
        "editMode": "1",
        "reverseScale": "1"
    }
}
```

The gauge with reverse color scale looks like as shown below:

{% embed_chart gauges-and-widgets-linear-example-28.js %}

Click [here](http://jsfiddle.net/fusioncharts/0x7312tq/) to edit the above chart.

## Configure gauge gradient mix

Use the following attributes to configure the gauge gradient mix:

- Specify the gradient fill formula for the linear gauge scale using the `gaugeFillMix` attribute.

- Specify the ratio in which the fill mix is to be applied to the gauge, using the `gaugeFillRatio` attribute.

Refer to the code below:

```json
{
   "chart": {
      "gaugeFillMix": "{light-10},{light-70},{dark-10}",
      "gaugeFillRatio": "40,20,40"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/Uen3g/) to edit the above gauge.

## Configure gauge borders

Use the following attributes to configure gauge borders:

- Set the value of the `showGaugeBorder` attribute to `0` to hide the gauge border.

- Specify the hex code of the color to be used to render the entire gauge border, using the `gaugeBorderColor`attribute. Note that this attribute can either take a hex code, or a single token from the gradient fill mix. The chart will then calculate the border color for each color range individually (based on the color code for each color range).

- Specify gauge border thickness (in pixels), using the `gaugeBorderThicknes` attribute.

- Specify the transparency for the gauge border (between `0` for transparent and `100` for opaque) using the `gaugeBorderAlpha` attribute.

Refer to the code below:

```json
{
   "chart": {
      "showGaugeBorder": "1",
      "gaugeBorderColor": "{light-50}",
      "gaugeBorderThickness": "4",
      "gaugeBorderAlpha": "100"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/ZN6df/) to edit the above gauge.

## Hide gauge labels

To hide the gauge labels, simply set the value of the `showGaugeLabels` attribute to `0`.

Refer to the code below:

```json
{
   "chart": {
      "showGaugeLabels": "0"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/fCLZ3/) to edit the above gauge.

Look at the **Show Labels?** checkbox rendered below the above linear gauge. If you select this check box, you can see the label for each color range on the gauge scale. If you clear the check box, the labels are hidden.

> An alternate way to not show gauge labels is by not initializing the `label` attribute for the `color` object.

## Configure hover effects for the pointer

You can use hover effects to improve the visual representation of your gauge. Simply configure the pointer cosmetics to change when you hover the mouse pointer over it. Use the following attributes to configure hover effects for the gauge

- Specify the hex code of the color to be used to render the pointer when you hover the mouse pointer over it, using the `pointerBgHoverColor` attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the pointer when you hover the mouse pointer over it, using the `pointerBgHoverAlpha`attribute.

- Set the value of the `showBorderOnHover`attribute to `1`, to show a border around the pointer, when you hover the mouse pointer over it.

- Specify the thickness (in pixels) of the pointer border when you hover the mouse pointer over it, using the `pointerBorderHoverThickness` attribute. Note that this attribute only works if you set the value of the `showBorderOnHover` attribute to `1`.

- Specify the hex code of the color to be used to render the pointer border when you hover the mouse pointer over it, using the `pointerBorderHoverColor` attribute. Note that this attribute only works if you set the value of the `showBorderOnHover` attribute to `1`.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the pointer border when you hover the mouse pointer over it, using the `pointerBorderHoverAlpha`attribute. Note that this attribute only works if you set the value of the `showBorderOnHover` attribute to `1`.

- Specify the radius (in pixels) of the pointer when you hover the mouse pointer over it, using the `pointerHoverRadius` attribute.

Refer to the code below:

```json
{
   "chart": {
      "pointerBgHoverColor": "#0075c2",
      "pointerBgHoverAlpha": "100",
      "showBorderOnHover": "1",
      "pointerBorderHoverThickness": "2",
      "pointerBorderHoverColor": "#333333",
      "pointerBorderHoverAlpha": "100",
      "pointerHoverRadius": "11"
   }
}
```

The gauge will look like as shown below:

![Linear](/gif/gauges-and-widgets-linear-gauge.gif)

Click [here](http://jsfiddle.net/fusioncharts/5zu86/) to edit the above gauge.

Using FusionCharts Suite XT, you can configure several functional and cosmetic properties for tick marks and tick values.

## Show/hide tick marks and tick values

Use the following attributes to show/hide tick marks in linear gauges:

- Set the value of the `showTickMarks`attribute to `1` to show tick marks on the gauge scale.

- Set the value of the `showTickValues`attribute to `1` to show tick values on the gauge scale.

Refer to the code below:

```json
{
   "chart": {
      "showTickMarks": "1",
      "showTickValues": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/5YYkT/) to edit the above gauge.

## Configure tick values

When you have a large number of tick marks on the gauge scale, showing all tick values can make the gauge appear cluttered. To avoid this, you can show every nth tick value on the gauge scale. You can also configure whether decimal values are to be rendered as tick values and the number of digits that should appear after the decimal point.

Use the following attributes to configure tick values:

- Specify the intervals (n) at which the ticks are to be displayed, using the `tickValueStep` attribute.

- Specify the number of digits that will be rendered after the decimal point, using the `tickValueDecimals`attribute.

- Set the value of the `forceTickValueDecimals`attribute to `1`, to force decimals on the tick values.

Refer to the code below:

```json
{
   "chart": {
      "tickValueStep": "2",
      "tickValueDecimals": "1",
      "forceTickValueDecimals": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/pVKYU/) to edit the above gauge.

## Configure positions of tick marks and tick values

By default, the tick marks are placed outside the gauge, below the gauge scale. The tick values are also rendered outside the gauge. You can, however, configure the position of tick marks and tick values based on your requirements.

Use the following attributes to configure the positions of tick marks and tick values:

- Set the value of the `ticksBelowGauge`attribute to `0`, to render tick marks above the gauge.

- Set the value of the `placeTicksInside`attribute to `1`, to place tick marks inside the gauge.

- Set the value of the `placeValuesInside`attribute to `1`, to place tick values inside the gauge.

Refer to the code below:

```json
{
   "chart": {
      "ticksBelowGauge": "0",
      "placeTicksInside": "1",
      "placeValuesInside": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/Zy3ku/) to edit the above gauge.

## Configure the number of major and minor tick marks

By default, the gauge automatically decides the number of major and minor tick marks to be rendered, based on the data you provide. However, you can explicitly specify the number of tick marks to be rendered.

Use the following attributes to configure the number of tick marks:

- Specify the number of major tick marks to be rendered, using the `majorTMNumber` attribute.

- Specify the number of minor tick marks to be rendered, using the `minorTMNumber` attribute.

- Set the value of the `adjustTM`attribute to `1`, to automatically adjust number of major tick marks, in order to ensure better distribution of the chart scale.

Refer to the code below:

```json
{
   "chart": {
      "majorTMNumber": "9",
      "minorTMNumber": "5",
      "adjustTM": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/8a6Bx/) to edit the above gauge.

> In the linear gauge above, you can see the the number of major and minor tick marks explicitly set to 9 and 5, respectively.

## Configure cosmetics for tick marks

Use the following attributes to configure cosmetic properties, such as color, transparency, height, and thickness, of major and minor tick marks:

- Specify the hex code of the color in which the major tick marks will be rendered on the gauge, using the `majorTMColor`attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the major tick marks, using the `majorTMAlpha`attribute.

- Specify the height of the major tick marks using the `majorTMHeight`attribute.

- Specify the thickness of the major tick marks using the `majorTMThickness`attribute.

- Specify the hex code of the color in which the minor tick marks will be rendered on the gauge, using the `minorTMColor`attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the minor tick marks, using the `minorTMAlpha`attribute.

- Specify the height of the minor tick marks using the `minorTMHeight`attribute.

- Specify the thickness of the minor tick marks using the `minorTMThickness`attribute.

Refer to the code below:

```json
{
   "chart": {
      "majorTMColor": "#163143",
      "majorTMAlpha": "50",
      "majorTMHeight": "7",
      "majorTMThickness": "2",
      "minorTMColor": "#163143",
      "minorTMAlpha": "30",
      "minorTMHeight": "4",
      "minorTMThickness": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/rd45T/) to edit the above gauge.

## Configure tick mark and tick value padding

By default, the gauge automatically decides the padding distance for tick marks and tick values. However, you can explicitly specify the padding distance. Use the following attributes to do so:

- Specify the distance (in pixels) between the gauge scale and the tick marks, using the `tickMarkDistance` attribute.

- Specify the distance (in pixels) between the tick marks and their corresponding tick values, using the `tickValueDistance` attribute.

Refer to the code below:

```json
{
   "chart": {
      "tickMarkDistance": "5",
      "tickValueDistance": "0"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/8swzd/) to edit the above gauge.

## Trend points

Trend points are elements that can be used to show a target value on the gauge, for example, the target customer satisfaction score, optimum server utilization, etc.

### Add a simple trend point

Use the following attributes to add and customize a trend point for a linear gauge:

- Specify the starting value for the trend point using the `startValue` attribute.

- Specify the hex code for the color to be used to render the trend line, using the `color` attribute.

- Specify whether the line at the trend point should be rendered as a dashed line, using the `dashed` attribute.

- Specify the length (in pixels) of each dash, if the trend point is rendered as a dashed line, using the `dashLen` attribute.

- Specify the gap (in pixels) between each dash, if the trend point is rendered as a dashed line, using the `dashGap` attribute.

- Specify the thickness (in pixels) of the trend line, using the `thickness` attribute.

> The above attributes belong to the points object, which in turn belongs to the trendPoints object.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "pointers": {
        "pointer": [
            ...
        ]
    },
    "trendPoints": {
        "point": [{
            "startValue": "70",
            "color": "#dddddd",
            "dashed": "1",
            "dashlen": "3",
            "dashgap": "3",
            "thickness": "2"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/LH9pn/) to edit the above gauge.

## Add a trend point with a marker

Use the following attributes to add and customize a trend point with a marker:

- Set the value of the `useMarker` attribute to `1`, to render a triangular marker with the trend point.

- Specify the hex code of the color to be used to render the marker, using the `markerColor` attribute.

- Specify the hex code of the color to be used to render the border of the marker, using the `markerBorderColor` attribute.

- Specify the radius (in pixels) of the marker, using the `markerRadius` attribute.

Refer to the code below:

```json
{
    "chart": {
       ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "pointers": {
        "pointer": [
          ...
        ]
    },
    "trendPoints": {
        "point": [{
            "useMarker": "1",
            "markerColor": "#0075c2",
            "markerBorderColor": "#666666",
            "markerRadius": "5"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/rRN2s/) to edit the above gauge.

## Add trend zones to a linear gauge

You can use trend zones to represent a range of values, instead of a single value. Use the following attributes to add a trend zone to a linear gauge:

- Specify the starting value for the trend zone using the `startValue` attribute.

- Specify the ending value for the trend zone using the `endValue` attribute.

- Specify the text for the label to be displayed for the trend zone, using the `displayValue` attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) for the trend zone using the `alpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
           ...
        ]
    },
    "pointers": {
        "pointer": [
           ...
        ]
    },
    "trendPoints": {
        "point": [{
            "startValue": "70",
            "endValue": "85",
            "displayValue": "Recommended{br}Range (70-85%)",
            "alpha": "30"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/fkY6g/) to edit the above gauge.

## Create an editable linear gauge

You can use the linear gauge in FusionCharts Suite XT as an input control, to visually drag and change the value of pointer. Once you update the value, you can use client-side JavaScript events to retrieve it from the chart. To create an editable linear gauge, set the value of the `editMode` attribute to `1`.

Refer to the code below:

```json
{
    "chart": {
        ...
        "editMode": "1"
    },
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/QTEg7/) to edit the above gauge.

> If a gauge has multiple pointers and all have them have to be made editable, the **editMode** attribute is defined for the `chart` object. If a gauge has multiple pointers and only specific ones have to be made editable, the `editMode` attribute is defined as a part of the `pointer` object, which belongs to the `pointers` object.

## Create editable gauges in an earlier version

If you are using an earlier version of FusionCharts versions, here's how you can create an editable gauge:

Once you change the value of the gauge, the gauge automatically calls the FC_ChartUpdated(DOMId) JavaScript function. You need to define this method in your HTML page and then retrieve the data using getData(index) or getDataForId(id) method.

To look at the HTML + JavaScript code required to retrieve data from the gauge when you change the value, click [here](http://docs.fusioncharts.com/widgets/Contents/Linear/Edit.html).

## Create a real-time linear gauge

There are two ways you can update the linear gauge. The first is to retrieve data using JavaScript API methods, while the second is to directly poll data from the server.

## Retrieve data using JavaScript API

The real-time data format of your linear gauge depends on:

- Whether you have multiple pointers on the chart, or a single one.

- Whether you want to provide data by pointer numerical index or by their defined IDs, if you have multiple pointers.

- Whether you are using Message Logger for the chart.

- Command you are using for the chart, such as the stop update

### Update a Single Pointer

In the simplest form, if you want to update the value of a gauge, you need to output the data in following format:

```json
&value=75
```

Here, the output is a single value (75). So, when the gauge reads this value, it updates the chart by setting its value to 75. Note that if the gauge is providing a data range, it will first check the value to verify whether it falls within the defined range.

Use the `feedData(strData)` method to feed real time data to the gauge. The data must be in the same format as provided by the real-time data provider page.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "pointers": {
        "pointer": [{
            "value": "75"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/r3onjpnt/) to edit the above gauge.

### Update multiple pointers

If you have defined multiple pointers, you can update them all at one go, as shown in the following output from the real-time data provider page:

```json
&value=34|25
```

Here, you are specifying two values in the real-time update. So, assuming that you have two pointers defined for the gauge, each of them will take a value (in the sequence you maintain) and update itself. Therefore, the first pointer will now show 34 and second one will show 25. The sequence of the pointers is determined by the order in which you define them in the JSON/XML data.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
           ...
        ]
    },
    "pointers": {
        "pointer": [{
            ...
            "value": "75"
        }, {
            ...
            "value": "92"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/czrprd22/) to edit the above gauge.

### Update pointer(s) using the named ID

You can update pointers by defining a unique ID for each pointer and then passing the updated data value to the ID. To do so, use the code snippet shown below:

```json
{
    "pointers": {
       "pointer": [{
            ...
            "id": "gGrovePointer",
            ...
        }, {
            ...
            "id": "bFieldPointer",
            ...
        }]
    }
}
```

You can now update each of these named pointers in your real-time data stream, as shown in the following output:

```json
&gGrovePointer=65 &bFieldPointer=80
```

This will change the value of pointer 1 (having the id gGrovePointer) to 65 and pointer 2 (having the id bFieldPointer) to 80.

Use the following JavaScript API methods to update pointers using their IDs:

- Use the `feedData(strData)`method to feeds real-time data to the gauge using JavaScript. The data must be in the same format as provided by the real-time data provider page.

- Use the `getData(pointerIndex)`method to return the data for the given pointer index on the chart.

- Use the `getDataForId(pointerId)`method to return the data for the given pointer using its defined ID.

- Use the `setData(pointerIndex, value)`method to set the data for the given pointer index on the chart.

- Use the `setDataForId(pointerId, value)`method to return the data for the given pointer using its defined ID.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [{
            ...
        }]
    },
    "pointers": {
        "pointer": [{
            ...
        }]
    }
},
"events": {
    "rendered": function(evtObj, argObj) {
        evtObj.sender.intervalVar = setInterval(function() {
            //Updating widget with randomly generated values
            //Transaction server Range 60-70%
            var trnPrcnt = 60 + parseInt(Math.floor(Math.random() * 10), 10),
                //Web server Range 75-85%
                webPrcnt = 75 + parseInt(Math.floor(Math.random() * 10), 10);
            FusionCharts.items["cpu-linear-gauge-3"].setDataForId("transServer", trnPrcnt);
            FusionCharts.items["cpu-linear-gauge-3"].setDataForId("webServer", webPrcnt);
        }, 5000);
    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.intervalVar);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-23.js %}

Click [here](http://jsfiddle.net/fusioncharts/p7Lausdw/) to edit the above gauge.

> Call the JavaScript APIs of a chart only after it has rendered.

### Retrieve data from the gauge

You can retrieve data from gauge once the data has been updated. The data structure you need to retrieve updated data is as follows:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [{
            ...
        }]
    },
    "pointers": {
        "pointer": [{
            ...
        }]
    }
},
"events": {
    'beforeRender': function(evt, args) {
        // creating div for controllers
        var controllers = document.createElement('div');

        // Create radio buttons inside div
        controllers.innerHTML = '<input type="button" value="Get Data" id="getdata_btn" style="margin-left:5px;margin-top:5px;"/><div id="tableView" style="margin: 3px;padding:5px;float: left;"></div>';
        // set css style for controllers div
        controllers.style.cssText = '';
        args.container.appendChild(controllers);
        controllers.setAttribute('id', 'controllers');
    },
    "renderComplete": function(evtObj, argObj) {
        evtObj.sender.intervalVar = setInterval(function() {
            var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
            FusionCharts.items["cpu-linear-gauge-4"].feedData("value=" + prcnt);
        }, 5000);

        //Format minutes, seconds by adding 0 prefix accordingly
        function formatTime(time) {
            (time < 10) ? (time = "0" + time) : (time = time);
            return time;
        }

        function showData() {
            //Retrieving the data
            var dataVal = FusionCharts.items["cpu-linear-gauge-4"].getData(1),
                str = "",
                currDate = new Date(),
                label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
            //Creating the table format
            str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="320px">';
            str += '    <tr>';
            str += '        <td width="50%" style="font-weight: bold;font-size: 14px;padding: 3px;">Current Time</td>';
            str += '        <td width="50%" style="font-weight: bold;font-size: 14px;padding: 3px;">Current Utilization</td>';
            str += '    </tr>';
            str += '    <tr>';
            str += '        <td width="50%" style="padding: 3px;" align="center">' + label + '</td>';
            str += '        <td width="50%" style="padding: 3px;" align="center">' + dataVal + '</td>';
            str += '    </tr>';
            //Preparing html string to create the table with data

            str += '</table>';
            //Showing the table
            document.getElementById("tableView").style.cssText = 'overflow-y:auto;display:block;margin-top:5px';
            document.getElementById("tableView").innerHTML = str;
        }

        document.getElementById("getdata_btn").addEventListener("click", showData);

    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.intervalVar);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-24.js %}

Click [here](http://jsfiddle.net/fusioncharts/ee9711vk/) to edit the above gauge.

### Retrieve data using server-side script

Use the following parameters to configure real-time updates using server-side scripts:

- Use the `dataStreamURL`parameter to set the path of the page, which is supposed to relay real-time data to the chart. If you have special characters as a part of the data stream URL, like **?** or **&**, you need to URL Encode the entire `dataStreamURL` attribute. Note that the page needs to be on the same sub-domain on which you host the chart and invoke it from. Otherwise, security will restrict it from accessing the data, and the real-time feature won't work.

- Use the `refreshInterval`parameter to specify the number of seconds, after which The gauge will look for new data.

- Use the `dataStamp`parameter to add a constantly changing data stamp to the real-time data URL, so as to maintain a particular state.

Refer to the code below:

```json
{
   "chart": {
      "dataStreamUrl": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-linear-gauge-real-time-gauges-php-1.php",
      "refreshInterval": "10"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-25.js %}

Click [here](http://jsfiddle.net/fusioncharts/yy0bp783/) to edit the above gauge.

## Stop/restart updates

Use the following JavaScript API methods to stop and restart receiving real-time updates:

- Use the `stopUpdate()`method to stop the gauge from updating itself.

- Use the `restartUpdate()`method to restart updates in real time, if you stopped them earlier.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [{
            ...
        }]
    },
    "pointers": {
        "pointer": [{
            ...
        }]
    }
},
"events": {
    beforeRender': function(evtObj, argObj) {
         var controllers = document.createElement('div'),
            btn = document.createElement('button'),
            chartRef = evtObj.sender;

         btn.style.cssText = "background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px; margin-top: 10px;";
         btn.innerText = "Stop Update";
         controllers.appendChild(btn);
         argObj.container.appendChild(controllers);
         chartRef.toggleBtn = btn;
      },
      'renderComplete': function(evtObj, argObj) {

         var isStopped = false,
            chartRef = evtObj.sender;

         var startStopUpdate = function () {
            if (!isStopped) {
               isStopped = true;
               chartRef.toggleBtn.innerText = "Restart Update";
               chartRef.stopUpdate();
            } else {
               isStopped = false;
               chartRef.toggleBtn.innerText = "Stop Update";
               chartRef.restartUpdate();
            }
         }

         chartRef.toggleBtn.onclick = startStopUpdate;
      }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-26.js %}

Click [here](http://jsfiddle.net/fusioncharts/px5muLjh/) to edit the above gauge.

## Configure Real-time Events

In FusionCharts Suite XT, you can use two events to track real-time updates on gauges:

Use the `realTimeUpdateComplete`event, to track when the gauge updates itself with new data. This event is raised whenever you:

- Update the gauge in real time using `datastreamURL`.

- Update the gauge in real time using JavaScript API (via `setData`, `feedData`, `setDataForId` functions).

Use the following arguments (provided in the advanced model) with the `realTimeUpdateComplete`event:

- The `eventObject` argument contains the `eventId`, `eventType`, and `sender` properties.

- The `argumentsObject` argument contains the values of the updated data and the previous data.

Use the `realtimeUpdateError`event, to track whether an error occurs while performing real-time update. Use the following arguments with the event:

- The `eventObject` argument contains `eventId`, `eventType` and `sender` properties.

- The `argumentsObject` argument contains the `httpStatus` property, which contains the HTTP Error status value in number format.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [{
            ...
        }]
    },
    "pointers": {
        "pointer": [{
            ...
        }]
    }
},
"events": {
    "rendered": function(evtObj, argObj) {
        evtObj.sender.intervalVar = setInterval(function() {
            var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
            FusionCharts.items["cpu-linear-gauge-7"].feedData("value=" + prcnt);
        }, 5000);
    },
    "realTimeUpdateComplete": function(evt, arg) {
        var annotations = evt.sender.annotations,
            percentValue = evt.sender.getData(1),
            colorVal = "#" + ((percentValue > 70) ? "ff6650" : "f6bd11");
        annotations && annotations.update('rangeText', {
            "text": "Currently Utilizing " + percentValue + "%"
        });
        annotations && annotations.update('rangeBg', {
            "fillcolor": colorVal
        });

    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.intervalVar);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-linear-example-27.js %}

Click [here](http://jsfiddle.net/fusioncharts/uq7r85ob/) to edit the above gauge.

## Troubleshooting

While accessing any of the JavaScript methods listed above, if you get an error like "… is not a function of …", make sure that you are not running the chart from local file system (C:\ , D:\). Instead, run the chart from behind a server (localhost - IIS, Apache, etc.). This is because the default security settings do not allow JavaScript interactions on local file system, unless you specifically set them.
