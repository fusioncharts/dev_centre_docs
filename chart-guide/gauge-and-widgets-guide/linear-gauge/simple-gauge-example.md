---
permalink: gauge-and-widgets-guide/linear-gauge/simple-gauge-example.html
title: Simple Linear Gauge Example | FusionCharts
description: Linear gauge is used to display aspecific data point over a horizontal scale using a slider component.
heading: Simple Linear Gauge Example
chartPresent: true
---

The linear gauge is used to display a specific data point over a horizontal scale using a slider component - also called as the pointer - to indicate the data value.

In this section you will be shown how you can create a simple linear gauge.

## Creating a Simple Linear Gauge

For our example, we will create a linear gauge that will indicate the server utilization at food.hsm.com.

To create a simple linear gauge, you need to:

* Define the lower and upper limits (also known as the minimum and maximum values) for the gauge scale. For our example, because we are plotting the server utilization in percentage, the lower limit will be 0 and the upper limit will be 100.

* Divide the gauge scale into three regions that indicate the three utilization limits for the server - low, moderate, and high.  This is shown in the table below:

<table>
  <tr>
    <th>Range</th>
    <th>Server Utilization Level</th>
    <th>Color for the Range</th>
  </tr>
  <tr>
    <td>0-35%</td>
    <td>Low</td>
    <td>Green e.g. `#8cba02`</td>
  </tr>
  <tr>
    <td>35-70%</td>
    <td>Moderate</td>
    <td>Yellow e.g. `#f6bd11`</td>
  </tr>
  <tr>
    <td>70-100%</td>
    <td>High</td>
    <td>Red e.g. `#ff6650`</td>
  </tr>
</table>


* Decide a data value for the pointer to point to. For our example, we will set the data value to 75.

The linear gauge thus created to show the server utilization, in percentage, at food.hsm.com looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-simple-gauge-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple linear gauge:

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
    <td>`numberSuffix`</td>
    <td>It is used to specify the character which will be appended to the end of the number, eg. %.</td>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>It is used to specify the minimum value for a color range, e.g. 35. This attribute belongs to the `color` object, which in turn belongs to the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>It is used to specify the maximum value for a color range, e.g. 70. This attribute belongs to the `color` object, which in turn belongs to the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label that will be rendered for a color range. This attribute belongs to the `color` object, which in turn belongs to the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the current pointer value, e.g. 75. This attribute belongs to the `pointer` object, which in turn belongs to the `pointers` object.</td>
  </tr>
</table>