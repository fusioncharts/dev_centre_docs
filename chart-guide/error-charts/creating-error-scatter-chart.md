---
permalink: chart-guide/error-charts/creating-error-scatter-chart.html
title: Creating Error Scatter Chart | FusionCharts
description: An error scatter chart is an XY plot chart with vertical and horizontal error bars to show a range of error values for a specific data value.
heading: Creating Error Scatter Chart
chartPresent: true
---

An error scatter chart is an XY plot chart with vertical and horizontal error bars to show a range of error values for a specific data value.

In this section you will be shown how you can:

* <a href="/chart-guide/error-charts/creating-error-scatter-chart#creating-a-simple-error-scatter-chart" class="smoth-scroll">Create a simple error scatter chart</a>

* <a href="/chart-guide/error-charts/creating-error-scatter-chart#customizing-the-error-bar" class="smoth-scroll">Customize the vertical and horizontal error bars</a>

## Creating a Simple Error Scatter Chart

As an example, we will create a simple error scatter chart that shows the revenue forecast for the next year.

An error scatter chart thus created looks like this:

{% embed_all chart-guide-error-charts-creating-error-scatter-chart-example-1.js %}

Given below is a brief description of the attributes used to create an error scatter chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the data item. The label is rendered on the x-axis. This attribute belongs to the `category`, which belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td NOWRAP>`x` (within `categories`: `category`)</td>
    <td>In the error scatter chart, the position of a datapoint is defined in the form of two numeric parameters, one from the y-axis and the other from the x-axis.
    When used with the `category` object, this attribute is used to specify the value given to each label rendered on the x-axis.</td>
  </tr>
  <tr>
    <td>`x` (within `dataset`: `data`)</td>
    <td>When used with the `data` object, this attribute is used to specify the numeric `x` value needed to plot a data item.</td>
  </tr>
  <tr>
    <td>`y` (within `dataset`: `data`)</td>
    <td>It is used to specify the numeric `y` value needed to plot a data item. </td>
  </tr>
  <tr>
    <td>`anchorRadius`</td>
    <td>It is used to specify the radius of the anchor that represents the data point.</td>
  </tr>
  <tr>
    <td>`anchorBgColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the anchor that represents the data point.</td>
  </tr>
  <tr>
    <td>`verticalErrorValue`</td>
    <td>It is used to specify the range of possible vertical deviation values that will be plotted as the error bar on the chart. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
</table>


## Customizing the Error Bar

You can customize the cosmetic properties of error bars to change their appearance.

An error scatter chart, after customizing the error bars, looks like this :

{% embed_all chart-guide-error-charts-creating-error-scatter-chart-example-2.js %}

Given below is a brief description of the attributes used to customize the error bars::

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useVerticalErrorBar`</td>
    <td>It is used to specify whether vertical error bars (half/full) will be shown for the error scatter chart. Setting this attribute to `0` will hide them, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`halfVerticalErrorBar`</td>
    <td>It is used to specify whether half or full vertical error bars will be shown for the error scatter chart. Setting this attribute to `1` will show half error bars, setting it to `0` (default) will show full error bars.</td>
  </tr>
  <tr>
    <td>`verticalErrorBarColor`</td>
    <td>It is used to specify the hex code of the  color used to render the vertical error bars. </td>
  </tr>
  <tr>
    <td>`errorBarColor`</td>
    <td>It is used to specify the hex code of the color used to render the error bars. </td>
  </tr>
  <tr>
    <td>`verticalErrorBarAlpha`</td>
    <td>It is used to specify the transparency of the vertical error bars. This attribute takes values between 0 (transparent) and 100 (opaque).  </td>
  </tr>
  <tr>
    <td>`errorBarAlpha`</td>
    <td>It is used to specify the transparency of the error bars. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`verticalErrorBarThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the vertical error bars.</td>
  </tr>
  <tr>
    <td>`errorBarThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the error bars. </td>
  </tr>
  <tr>
    <td>`verticalErrorBarWidth`</td>
    <td>It is used to specify the width, in pixels, of the vertical error bars.</td>
  </tr>
  <tr>
    <td>`errorBarWidth`</td>
    <td>It is used to specify the width, in pixels, of the error bars.</td>
  </tr>
</table>