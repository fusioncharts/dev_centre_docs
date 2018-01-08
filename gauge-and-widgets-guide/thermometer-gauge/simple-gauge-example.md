---
permalink: gauge-and-widgets-guide/thermometer-gauge/simple-gauge-example.html
title: Simple Thermometer Gauge Example | FusionCharts
description:  A thermometer gauge is used to display temperature data; the fill level of the thermometer indicates the temperature.
heading: Simple Thermometer Gauge Example
chartPresent: true
---

A thermometer gauge is used to display temperature data; the fill level of the thermometer indicates the temperature.

In this section, you will be shown how you can create a simple thermometer gauge.

## Creating a Simple Thermometer Gauge

For our example, we will create a thermometer gauge that monitors the temperature at the Central Cold Store.

To create a thermometer gauge, you need to:

* Define the lower and upper limits (also known as the starting and ending values) that can be plotted on the gauge. For our example, we will set the lower limit to -20 and the upper limit to 20.

* Define the temperature value to be displayed by the gauge. This value is displayed on the gauge by filling up the thermometer to this mark on the gauge scale. For our example, we will set this value to -6°C.

A thermometer gauge created to monitor the temperature at the Central Cold Store looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-simple-gauge-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple thermometer gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lowerLimit`</td>
    <td>It is used to specify the lower limit, or the minimum value, of the gauge scale, eg. 0.</td>
  </tr>
  <tr>
    <td>`upperLimit`</td>
    <td>It is used to specify the upper limit, or the maximum value, of the gauge scale, eg. 100.</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>It is used to specify the character which will be appended to the end of the number, eg. °C.</td>
  </tr>
  <tr>
    <td>`thmFillColor`</td>
    <td>It is used to specify the hex code of the color that will be used as the fill color for the thermometer, e.g #666666.</td>
  </tr>
  <tr>
    <td>`thmOriginX`</td>
    <td>It is used to specify the horizontal origin for the thermometer gauge (you can define this as the starting coordinate on an imaginary x-axis), e.g. 100.</td>
  </tr>
</table>