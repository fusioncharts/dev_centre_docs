---
title: Bulb Gauge | FusionCharts
description: The bulb gauge is used to indicate a specific dataset by utilizing a circle that indicates whether the monitored data is within defined limits
heading: Bulb Gauge
---

> This chart type belongs to **FusionWidgets XT**.

Bulb gauge is used to indicate a specific dataset by utilizing a circle that indicates whether the monitored data is within defined limits, and if it is, then which limit does it belong to. Colors for the bulb can be selected to suit the application such as green for satisfactory, yellow for caution, and red for alarm.

{% embed_chartAnatomy bulb-gauge.json %}

## Basics of the Bulb Gauge

The bulb gauge is one of the simplest gauges in all. It is used in a variety of applications including financial dashboards, machine controller screens etc., where a single value or state indicator is required.

A simple bulb gauge rendered to indicate the temperature status of deep freezers looks like this:

{% embed_all gauges-and-widgets-bulb-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/VpXyL/) to edit the above chart.

The gauge is defined by minimum and maximum values. Within that scale you can create various ranges to classify your data. Depending on the range that the data value belongs, the bulb color will change and display the value set accordingly.

## Elements of the Bulb Gauge

A bulb gauge consists of the following elements:

* Bulb (which changes color to indicate data value)

* Value textbox

Before going into the details of each of them, let us have a look at a bulb gauge with the basic elements labeled:

![Bulb-gauge](/images/bulb-gauge-introduction-1.png)

## Color Range

On a bulb gauge scale, you can create any number of ranges to classify your data. For each range, you will have to specify the minimum and maximum values, a name for the range that will be displayed as the label, and the hex code for the color that will be used to indicate the range.

> Each color range should have its own unique range index. For example, if a range is defined as 0-50, the next range should have the minimum value as 50 necessarily. Similarly, if the upper limit of the chart is 100, the last range should have max value as 100 for the chart to function properly.

## Value Textbox

The value textbox helps you show the value indicated by the gauge in numeric terms or you can show the color range label as value for showing current status. You can also opt to hide it.

Next, we will  discuss on how to create a bulb gauge.

## Create a Bulb Gauge

In our first bulb gauge, we will be plotting Attrition Rate from 0-100%. The final outcome will be as shown below:

{% embed_chart gauges-and-widgets-bulb-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/VpXyL/) to edit the above chart.

To create a bulb gauge:

* Specify the type using the `type` attribute. To render Bulb gauge, set `bulb`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Define the minimum and maximum value which will be plotted on the gauge scale. They are termed as the lower and upper limits of the gauge scale and in this case setting them to 0 and 100 respectively will suit our purpose just fine - as we're plotting the gauge indicating a %, which cannot go below 0 or beyond 100. 

* Divide the values into predetermined regions: 

    * 0-15%: Low Attrition Rate (the bulb will be shown in green when the value is in this region)

    * 15-35%: Medium Attrition Rate (bulb will be yellow in this region)

    * 35-100%: High Attrition Rate (bulb will be red in this region)

* Pass the data value to the gauge, 12 in the above gauge. Since 12 lies in the 1st predetermined region, i.e. of the Low Attrition rate, the entire bulb is shown in green.

## Set the Value Range

To set the range of the value for the bulb gauge, define the lower and upper limits of the gauge scale. To define the limits, we use the `lowerLimit` and `upperLimit` attributes of the `<chart>` element.

Also set the number suffix character (the character which will show up at the end the number) using the `numberSuffix` attribute. Refer to the code below:

```json
{
  "chart": {
    "upperlimit": "100",
    "lowerlimit": "0",
    "numbersuffix": "%"
  }
}
```

There are other attributes of the `<chart>` element which we will not be delving into now, because of this being a really basic gauge. For a detailed list you can check the [chart attributes](/chart-attributes?chart=bulb) page of bulb gauge.

## Define the Color Range

As we discussed earlier, this gauge has 3 color ranges. To define the color range:

* Use the `<colorRange>` element, which is an immediate child of the `<chart>` element. 

* Under each `<colorRange>` element, place a `<color>` element specifying a single color range.

* The `minValue` attribute is used to define the lower limit of the color range and the `maxValue` attribute is used to define the upper limit of the color range.

* The `label` attribute is used to specify a name to the particular color range and the `code` attribute specifies the color of the range.

Refer to the code below:

```json
{
  "chart": {
  ...
  },
  "colorrange": {
    "color": [{
      "minvalue": "0",
      "maxvalue": "15",
      "label": "Low",
      "code": "00FF00"
    }, {
      "minvalue": "15",
      "maxvalue": "35",
      "label": "Medium",
      "code": "FFFF00"
    }, {
      "minvalue": "35",
      "maxvalue": "100",
      "label": "High",
      "code": "FF0000"
    }]
  }
}
```

Once done set the value of the bulb gauge using the `<value>` element as shown below:

```json
"value": "12"
```

The chart bulb gauge will look like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/j8C6H/) to edit the above chart.

Now that we have created our first bulb gauge, let's see how to configure some of the properties of the bulb gauge.  

## Configure the Gauge Border

To configure the border of the bulb gauge refer to the code below:

```json
{
  "chart": {
    "showgaugeborder": "1", 
    "gaugebordercolor":"666666", 
    "gaugeborderthickness":"2", 
    "gaugeborderalpha":"100" 
  }
}
```

For a detailed list of attributes refer to the [chart attributes](/chart-attributes?chart=bulb) page of the bulb gauge.

The bulb gauge will look as shown in the image below:

{% embed_chart gauges-and-widgets-bulb-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/5Cn5W/) to edit the above chart.

## Use Gradient Fill Mix for the Border

The `gaugeBorderColor` attribute is used to apply a single solid color to the gauge border, where the border color can be different from the fill color for the gauge. Using a gradient fill mix, you can render the border in a color that is darker or lighter than the fill color used for the gauge. 

The gradient fill mix renders the border in a color that is darker/lighter than the initial color in which the gauge was rendered.

To do this, we have used one token of the gradient fill mix to render the bulb border using a color that is **30%** darker than the fill color using the `gaugeBorderColor` attribute. Refer to the code below:

```json
{
  "chart": {
    "gaugebordercolor":"(dark-30)" 
  }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/tpq8mLk3/) to edit the above chart.

## Configure the Origin and the Radius

By default, the gauge automatically determines its origin and radius based on the data you provide. However, FusionCharts Suite XT also allows you to explicitly specify the origin and radius of the gauge.

To do so follow the steps below:

* Set the X-origin value of the gauge using the `gaugeOriginX` attribute.

* Set the Y-origin value of the gauge using the `gaugeOriginY` attribute.

* Set the radius of the gauge using the `gaugeRadius` attribute.

Refer to the code below:

```json
{
  "chart": {
    "gaugeoriginx": "40", 
    "gaugeoriginy":"40", 
    "gaugeradius":"20" 
  }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/Gk7q7/) to edit the above chart.

## Render the Bulb Gauge in 2D

By default, the bulb gauge is rendered with a 3D look and feel. However, you can opt to render the bulb gauge in 2D.

To do so, set the `is3D` attribute to `0` as shown below:

```json
{
  "chart": {
    "is3d":"0" 
  }
}
```

The gauge will look  like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/56f6C/) to edit the above chart.

## Place the Value Inside the Gauge

By default, the gauge value is rendered outside the gauge. FusionCharts Suite XT allows you to render the value inside the gauge.

To do so, set the `placeValueInside` attribute to `1` as shown in the image below:

```json
{
  "chart": {
    "placecvaluesinside":"1"
  }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/BM6ZH/) to edit the above chart.

## Render the Range Name as Gauge Label

By default, the current numerical value of the gauge is rendered on the gauge. Instead, you can opt to show the name of the range within the gauge.

To do so set the `useColorNameAsValue` to `1` as shown in the code below:

```json
{
  "chart": { 
    "usecolornameasvalue":"1" 
  }
}
```

The gauge will look  like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/rNCL6/) to edit the above chart.

## Configure the Hover Effect

FusionCharts Suite XT allows you to display hover effects for the gauge. Set the `showHoverEffect` attribute to `1` in order to apply the view the hover effects. Refer to the code below:

```json
{
  "chart": { 
    "showHoverEffect":"1" 
  }
}
```

The gauge will look  like as shown below:

![Bulb](/gif/gauges-and-widgets-bulb-gif.gif)

Click [here](http://jsfiddle.net/fusioncharts/0ehkf2sx/) to edit the above chart.

## Realtime Bulb Gauge

The bulb gauge is a realtime chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data periodically, and auto-updates to reflect the current state of data. There are two different ways to update the bulb gauge; one method directly polls data from the server while the other retrieves data using JavaScript API methods.

## Configure Realtime Updates Using JavaScript API

### Realtime Data Format

The data provider page on the server's end, when invoked by the bulb gauge, will output the new data in the real-time data format.

The real-time data format for gauges depends on:

* Value to be passed

* Whether you're using Message Logger for the chart?

* Commands for the chart - like stop update etc.

Let's quickly see examples of each one of them.

### Data Value Update

In the simplest form, if you're looking to update the bulb gauge, you need to output the data in the following format:

```json
&value=34
```

Here, the output is a single value, 34. So, when FusionWidgets XT will read this value, it will update the chart by setting its value to 34 (if the data is within range). The gauge will look  like as shown below:

{% embed_chart gauges-and-widgets-bulb-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/xn8591nn/) to edit the above chart.

For a detailed list of JavaScript API used to configure real-time updates refer to the API reference page.

> You can also configure using  server-side scripts. For a detailed list of attributes refer to the [chart attributes](/chart-attributes?chart=bulb) page.

## Stop/Restart Updates

In order to stop the chart from polling the server for any more real-time updates, send the following command from server to do so:

```json
&stopUpdate=1
```

After stopping the update, it can be restarted either using user interaction (right click context menu) or using the  `restartUpdate()` property as shown below:

```json
&restartUpdate=1
```

{% embed_chart gauges-and-widgets-bulb-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/kx978uey/) to edit the above chart.

## Configure Realtime Events

FusionCharts Suite XT introduces two events, `realTimeUpdateComplete` and `realTimeUpdateError`, to track real-time updates on gauges.

A real-time bulb gauge configured to listen to the `realTimeUpdateComplete` event looks like this:

{% embed_chart gauges-and-widgets-bulb-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/9zphu0hq/) to edit the above chart.

A bulb gauge configured to listen to the `realTimeUpdateError` event looks like this:

{% embed_chart gauges-and-widgets-bulb-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/37geybvf/) to edit the above chart.

## Troubleshoot Realtime Gauges

While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\). Instead, run the chart from behind a server (localhost - IIS, Apache etc.). This is because the default security settings do not allow the chart to perform JavaScript interactions on the local file system.