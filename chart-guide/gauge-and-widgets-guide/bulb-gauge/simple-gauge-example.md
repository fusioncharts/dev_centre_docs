---
permalink: gauge-and-widgets-guide/bulb-gauge/simple-gauge-example.html
title: Simple Bulb Gauge Example | FusionCharts 
description: In this section, you will be shown how you can create a simple bulb gauge. To create a bulb you need to define the lower and upper limits.
heading: Simple Bulb Gauge Example
chartPresent: true
---

Bulb Gauges are used to indicate a specific dataset by utilizing a circle that changes color to indicate whether the monitored data is within the defined limits and if it is, then which limit does the data belong to. Colors can be selected to suit the application such as green for satisfactory, yellow for caution, and red for alarm.

In this section, you will be shown how you can create a simple bulb gauge.

## Creating a Simple Bulb Gauge

For our example, we will create a bulb gauge that monitors the temperature status of deep freezers.

To create a bulb gauge, you need to:

* Define the lower and upper limits (also known as the minimum and maximum values) for the gauge scale. For our example, we will set the lower limit to -60 and the upper limit to -5.

* Divide the temperature values into pre-determined ranges, as shown below:

<table>
  <tr>
    <th>Limits</th>
    <th>Range Name</th>
    <th>Color used to represent the Range</th>
  </tr>
  <tr>
    <td>-60°C to -35°C</td>
    <td>Mission control, we have a situation!</td>
    <td>Red</td>
  </tr>
  <tr>
    <td>-35°C to -25°C</td>
    <td>Something is just  not right!</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>-25°C to -5°C</td>
    <td>All well ahoy!</td>
    <td>Green</td>
  </tr>
</table>


* Decide a data value to indicate the present temperature status. For our example, we will set the temperature to -5.

A bulb gauge created to monitor the temperature status of deep freezers looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-simple-gauge-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple bulb gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lowerLimit`</td>
    <td>It is used to specify the lower limit, or the minimum value, of the gauge scale, eg. -60.</td>
  </tr>
  <tr>
    <td>`upperLimit`</td>
    <td>It is used to specify the upper limit, or the maximum value, of the gauge scale, eg. -5.</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>It is used to specify the character which will be appended to the end of the number, eg. °C.</td>
  </tr>
</table>