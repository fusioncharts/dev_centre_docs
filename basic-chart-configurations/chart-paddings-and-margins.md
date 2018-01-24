---
permalink: basic-chart-configurations/chart-paddings-and-margins.html
title: Chart Paddings and Margins | FusionCharts
description: FusionCharts Suite XT lets you manage the space around the canvas and within the chart by configuring chart paddings and margins.
heading: Chart Paddings and Margins
chartPresent: true
---

FusionCharts Suite XT lets you manage the space around the canvas and within the chart by configuring chart paddings and margins.

This article shows you how to:

* <a href="/basic-chart-configurations/chart-paddings-and-margins#modifying-chart-margins" class="smoth-scroll">Modify chart margins</a>

* <a href="/basic-chart-configurations/chart-paddings-and-margins#changing-padding-for-caption-axes-names-and-axis-values" class="smoth-scroll">Change padding for chart caption, axis name and axis value</a>

* <a href="/basic-chart-configurations/chart-paddings-and-margins#changing-data-label-and-data-value-padding" class="smoth-scroll">Change data label and data value padding</a>

* <a href="/basic-chart-configurations/chart-paddings-and-margins#changing-canvas-padding-in-a-chart" class="smoth-scroll">Changing canvas padding in a chart</a>

## Modifying chart margins

A chart margin is the space between the chart border and the canvas border. It can also be called chart padding. You can set the chart margins on any of the 4 sides of a chart. Below is a chart with equal margins on all four sides:

{% embed_all configuring-your-chart-chart-paddings-and-margins-example-1.js %}

Given below are the attributes used to customize chart margins:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartLeftMargin`</td>
    <td>It is used to specify the amount of empty space on the left side of the chart. </td>
  </tr>
  <tr>
    <td>`chartTopMargin`</td>
    <td>It is used to specify the amount of empty space on the top of the chart. </td>
  </tr>
  <tr>
    <td>`chartRightMargin`</td>
    <td>It is used to specify the amount of empty space on the right side of the chart. </td>
  </tr>
  <tr>
    <td>`chartBottomMargin`</td>
    <td>It is used to specify the amount of empty space on the bottom of the chart.</td>
  </tr>
</table>






## Changing padding for caption, axes names and axis values

By setting the axis name padding and axis value padding, you can control the amount of space between the axes and the canvas. A chart with the axis names and axis values with defined padding is shown below:

{% embed_all configuring-your-chart-chart-paddings-and-margins-example-2.js %}

Given below are the attributes used to set the padding for chart caption, and the axes names and values:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`captionPadding`</td>
    <td>It is used to specify the space (in pixels) between the sub-caption and top of the chart canvas.</td>
  </tr>
  <tr>
    <td>`xAxisNamePadding`</td>
    <td>It is used to specify the distance between the top end of x-axis title and the bottom end of data labels (or canvas, if data labels are not to be shown).</td>
  </tr>
  <tr>
    <td>`yAxisNamePadding`</td>
    <td>It is used to specify the distance between the right end of y-axis title and the start of y-axis values (or canvas, if the y-axis values are not to be shown).</td>
  </tr>
  <tr>
    <td>`yAxisValuesPadding`</td>
    <td>It is used to specify the horizontal space between the canvas left edge and the y-axis values or trend line values (on left/right side).</td>
  </tr>
  <tr>
    <td>`labelPadding`</td>
    <td>It is used to specify the vertical space between the canvas bottom edge and the x-axis values.</td>
  </tr>
</table>






## Changing data label and data value padding

A column 2D chart with a padding introduced between the data values and the columns looks as below:

{% embed_all configuring-your-chart-chart-paddings-and-margins-example-3.js %}

Given below is the attribute used to set data value padding:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`valuePadding`</td>
    <td>It is used to specify in pixels the vertical space between the end of columns and data values. Note that this can take negative values as well.</td>
  </tr>
</table>






## Changing canvas padding in a chart

For a line/area chart, the padding between the canvas border and the position where the line/area chart begins to draw is called canvas padding. A chart with chart padding introduced looks as below:

{% embed_all configuring-your-chart-chart-paddings-and-margins-example-4.js %}

Given below is the attribute used to configure canvas padding:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvaspadding`</td>
    <td>Used to specify the space between the canvas border and first and last data points in your chart.</td>
  </tr>
</table>





