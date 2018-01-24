---
permalink: gauge-and-widgets-guide/cylinder-gauge/simple-gauge-example.html
title: Simple Cylinder Gauge Example | FusionCharts
description: To create a cylinder gauge, you need to define the upper and lower limits for the gauge and decide the visual properties of the cylinder.
heading: Simple Cylinder Gauge Example
chartPresent: true
---

The cylinder gauge is a real-time chart, which can update its data after specified intervals, without requiring any page refreshes. In this section, you will be shown how you can create a simple cylinder gauge.

## Creating a Simple Cylinder Gauge

We will create a cylinder gauge that monitors the diesel level in the generator. This gauge will have a maximum capacity of 110 liters and we will configure it show that 75 liters of diesel is left in the generator.

To create a cylinder gauge, you need to:

* Define the upper and lower limits for the gauge. The limits are displayed on the vertical scale to the left/right of the cylinder. For our example, the lower limit will be 0 and the upper limit will be 110 liters.

* Decide the [visual properties](/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge) of the gauge. This involves customizing the elements of the gauge.

* Decide the [gauge value](/gauge-and-widgets-guide/cylinder-gauge/introduction). For our example, the gauge value is 75 liters.

The final gauge looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-simple-gauge-example-example-1.js %}

Given below is the list of attributes, belonging to the `chart` object, used to create a simple cylinder gauge:

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
    <td>`lowerLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the lower limit value on the gauge scale, eg. Empty.</td>
  </tr>
  <tr>
    <td>`upperLimitDisplay`</td>
    <td>It is used to specify the label to be displayed with the upper limit value on the gauge scale, eg. Full.</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>It is used to specify the character(s) that will be appended to the end of a number, eg. ltrs.</td>
  </tr>
</table>