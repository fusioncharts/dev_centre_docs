---
permalink: gauge-and-widgets-guide/angular-gauge/simple-gauge-example.html
title: Simple Angular Gauge Example | FusionCharts
description: An angular gauge is used to display a specific data point using a dial over a radial scale  with defined limits.
heading: Simple Angular Gauge Example
chartPresent: true
---

An angular gauge is used to display a specific data point using a dial over a radial scale  with defined limits.

In this section, you will be shown how you can create a simple angular gauge.

## Creating a Simple Angular Gauge

To create an angular gauge, you need to:

* Define the lower and upper limit of the gauge scale

* Define the cosmetic and functional properties of the gauge

* Define the color range for the gauge scale e.g. as shown in the table above.

* Define trend-points, if any.

* Decide the chart value(s). FusionCharts Suite XT allows you to indicate multiple values on the angular gauge chart. All you have to do is decide the value each spindle/dial will indicate and the width and color of each one of them.

As an example, we will create an angular gauge that will indicate the customer satisfaction score for the last week at Harry’s SuperMart. To create the angular gauge to plot the customer satisfaction score, you need to:

* Define the minimum value as 0 and the maximum value as 100. These limits are displayed at the starting and ending points of the circular scale.

* Divide the gauge scale into three regions, indicating a bad, a satisfactory, and a good customer satisfaction index. We will color code the three regions in red, yellow, and green, respectively.

* Point the dial of the angular gauge to a certain value, say 67, in the above image.

The scale, on which the score will be plotted, can be defined as shown in the table below:

<table>
  <tr>
    <th>Range</th>
    <th>What it means?</th>
    <th>Color to be represented in</th>
  </tr>
  <tr>
    <td>0-50%</td>
    <td>Bad customer satisfaction</td>
    <td>Red</td>
  </tr>
  <tr>
    <td>50-75%</td>
    <td>Moderate customer satisfaction</td>
    <td>Yellow</td>
  </tr>
  <tr>
    <td>75-100%</td>
    <td>Good customer satisfaction</td>
    <td>Green</td>
  </tr>
</table>


The angular gauge thus created looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-simple-gauge-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple angular gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lowerLimit`</td>
    <td>It is used to specify the lower limit, or the minimum value, of the gauge scale, eg. 0</td>
  </tr>
  <tr>
    <td>`upperLimit`</td>
    <td>It is used to specify the upper limit, or the maximum value, of the gauge scale, eg. 100</td>
  </tr>
  <tr>
    <td>`lowerLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the lower limit value on the gauge scale, eg. Bad</td>
  </tr>
  <tr>
    <td>`upperLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the upper limit value on the gauge scale, eg. Good</td>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the data value will be rendered along with the gauge. Setting this attribute to `1` will show the data value with the gauge, setting it to `0` (default) will hide the value.</td>
  </tr>
  <tr>
    <td>`valueBelowPivot`</td>
    <td>It is used to specify whether the data value, if being rendered, will be shown above the pivot or below it. Setting this attribute to `1` will show the value below the pivot, setting it to `0` (default) will show it above the pivot.</td>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>It is used to specify the lower limit of a color range, for example, for a color range of 0-50, this value will be 0. This attribute belongs to the `color` object, which in turn belongs to the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>It is used to specify the upper limit of a color range, for example, for a color range of 0-50, this value will be 50. This attribute belongs to the `color` object, which in turn belongs to the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`value` </td>
    <td>It is used to specify the value that should be plotted on the gauge scale, eg. 67. This attribute belongs to the `dial` object, which in turn</td>
  </tr>
</table>