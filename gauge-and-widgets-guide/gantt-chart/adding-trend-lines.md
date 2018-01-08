---
permalink: gauge-and-widgets-guide/gantt-chart/adding-trend-lines.html
title: Adding Trend-lines | FusionCharts
description: Trend-lines and trend-zones, used to represent target value and target range, respectively, add them to your Gantt chart to mark an event for a particular data
heading: Adding Trend-lines
chartPresent: true
---

Trend-lines and trend-zones are used to represent a target value and a target range, respectively. You can add them to your Gantt chart to mark an event for a particular data - for example, you can add a trend-line to indicate "Testing Start" or a trend-zone to show the Christmas vacation period.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-trend-lines#creating-a-trend-line" class="smoth-scroll">Create a trend-line</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/adding-trend-lines#creating-trend-zones" class="smoth-scroll">Create a trend-zone</a>

## Creating a Trend-line

As an example, we will create a trend line showing "Testing Start" in the "Social Media Optimization" Gantt chart.

A Gantt chart rendered with a trend-line looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-trend-lines-example-1.js %}

Given below is a brief description of the attributes used to create a trend-line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`start`</td>
    <td>It is used to specify the start date for the trend-line. </td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify the label for the trend-line. </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line. </td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness for the trend-line. </td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify whether the trend-line will be rendered as a dashed line. Setting this attribute to 1 will render the trend-line as dashed line, setting it to 0 (default) will render a whole line. </td>
  </tr>
</table>


These attributes belong to the `line` object, which in turn belongs to the `trendlines` object.


## Creating Trend-zones

As an example, we will create a trend-zone in the "Social Media Optimization" Gantt chart to represent the block of dates for the Christmas vacation.

A Gantt chart rendered with a trend-zone looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-trend-lines-example-2.js %}


Given below is a brief description of the attributes used to render a trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether a trend-zone or a trend-line will be rendered. Setting this attribute to 1 renders a trend-zone, setting it to 0 (default) renders a trend-line.</td>
  </tr>
  <tr>
    <td>`start`</td>
    <td>It is used to specify the start date for the trend-zone. </td>
  </tr>
  <tr>
    <td>`end`</td>
    <td>It is used to specify the end date for the trend-zone.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify the label for the trend-zone. </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line. </td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency for the trend-zone. </td>
  </tr>
</table>


These attributes belong to the `line` object, which in turn belongs to the `trendlines` object.