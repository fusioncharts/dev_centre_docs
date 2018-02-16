---
permalink: gauge-and-widgets-guide/led-gauge/simple-gauge-example.html
title: Simple LED Gauge Example | FusionCharts
description: This section of talks about how to define the lower/upper limits for the gauge scale. How to divide the gauge scale into three different colored regions, etc
heading: Simple LED Gauge Example
chartPresent: true
---

An LED gauge uses a horizontal/vertical scale to represent data values. It uses bars that change color, or marks out different regions in different colors to indicate whether data is within preset parameters. Colors to represent each region can be selected based on the application for which the gauge is being configured.

In this section, you will be shown how you can create a simple LED gauge.

## Creating a Simple LED Gauge

For our example, we will create a horizontal LED gauge that will indicate the fuel level.

To create this LED gauge, we will:

* Define the lower and upper limits (also known as the minimum and maximum values) for the gauge scale. For our example, we will set the lower limit to 0 and the upper limit to 100.

* Divide the gauge scale into three differently colored regions to indicate the fuel level.

* Set the data value to indicate the present level of fuel. For our example, we will set the fuel level to 92.

The horizontal LED gauge thus created looks like this

{% embed_all gauge-and-widgets-guide-led-gauge-simple-gauge-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple LED gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lowerLimit`</td>
    <td>It is used to specify the lower limit, or the minimum value, of the gauge scale, e.g. 0.</td>
  </tr>
  <tr>
    <td>`upperLimit`</td>
    <td>It is used to specify the upper limit, or the maximum value, of the gauge scale, e.g. 100.</td>
  </tr>
  <tr>
    <td>`lowerLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the lower limit value on the gauge scale, eg. Empty.</td>
  </tr>
  <tr>
    <td>`upperLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the upper limit value on the gauge scale, eg. Full</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>It is used to specify the character which will be appended at the end of a number, eg. %.</td>
  </tr>
</table>