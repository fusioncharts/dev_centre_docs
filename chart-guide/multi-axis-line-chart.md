---
permalink: chart-guide/multi-axis-line-chart.html
title: Multi-axis Line Chart | FusionCharts
description: A multi-axis line chart, as the name suggests, is an interactive line chart that can be configured for multiple axes.
heading: Multi-axis Line Chart
chartPresent: true
---

A multi-axis line chart, as the name suggests, is an interactive line chart that can be configured for multiple axes.

In this section, you will be introduced to:

* <a href="/chart-guide/multi-axis-line-chart#basics-of-a-multi-axis-line-chart" class="smoth-scroll">Basics of a multi-axis line chart</a>

* <a href="/chart-guide/multi-axis-line-chart#features-of-a-multi-axis-line-chart" class="smoth-scroll">Features of a multi-axis line chart</a>

* <a href="/chart-guide/multi-axis-line-chart#creating-a-simple-multi-axis-line-chart" class="smoth-scroll">Creating a simple multi-axis line chart</a>

## Basics of a Multi-axis Line Chart

The multi-axis line chart is a special type of chart that allows multiple y-axes to be rendered in the same chart. The advantage of using a multi-axis line chart is that you can plot multiple data sets with different types of units (e.g. liter, kg, meter) and different scale ranges ( e.g. 1-100 on one axis,  1m - 100m on another axis, and  0 - 1 on yet another axis) on the same chart.

## Features of a Multi-axis Line Chart

The FusionCharts Suite XT multi-axis line chart includes the following features:

* Multiple axes on the same chart

* Interactive axis, which allows the end user to show or hide data sets (lines) plotted against that axis

* Options to make the axis visible or imaginary

* Options to draw the axis on left or right side of chart

* Interactive options, like dynamic sliding of axis from one end to other upon clicking

* Ability to plot multiple data-sets against the same axis

* Options to configure axis-specific properties like:

    * Upper and lower limits

    * Cosmetic properties

    * Divisional Lines

    * Cosmetic properties of data-sets plotting against the particular axis

    * Number formatting

A multi-axis line chart rendered with three axes looks like this:

{% embed_all chart-guide-multi-axis-line-chart-example-1.js %}

## Creating a Simple Multi-axis Line Chart

You have seen how a multi-axis line chart looks.

Given below is a brief description of the attributes used to configure a multi-axis line chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`title`</td>
    <td>It is used to specify the title for an axis, e.g. Footfalls. This attribute belongs to the `axis` object. </td>
  </tr>
  <tr>
    <td>`tickWidth`</td>
    <td>It is used to specify the width between the tick marks protruding from the axis. This attribute belongs to the `axis` object. </td>
  </tr>
  <tr>
    <td>`axisOnLeft`</td>
    <td>It is used to specify whether the axis will be rendered on the left side of the canvas or the right side. Setting this attribute to `0` will render the axis on the right, setting it to `1` (default) will render it on the left. This attribute belongs to the `axis` object.</td>
  </tr>
  <tr>
    <td>`allowSelection`</td>
    <td>It is used to specify whether a checkbox will be shown for each axis. Selecting/clearing this checkbox for an axis will show/hide the data set belonging to that axis.</td>
  </tr>
  <tr>
    <td>`allowAxisShift`</td>
    <td>It is used to specify whether dynamic shifting of an axis will be enabled. If you click an axis that is not the primary (the first from the left of the canvas) or the secondary (the first from the right canvas) axis, the axis to the left of this axis will replace it. The axis that you clicked will be placed at the end, in case of multiple axes. Setting this attribute to `0` will disable the shifting of axes, setting it to `1` (default) will enable it.</td>
  </tr>
  <tr>
    <td>`showAxis`</td>
    <td>It is used to specify whether an axis will be shown or hidden (referred to as an imaginary axis). Setting this attribute to `0` will hide the axis, setting it to `1` (default) will show it.</td>
  </tr>
</table>