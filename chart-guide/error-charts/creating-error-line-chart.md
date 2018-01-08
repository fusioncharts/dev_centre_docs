---
permalink: chart-guide/error-charts/creating-error-line-chart.html
title: Creating Error Line Chart | FusionCharts
description: An error line chart is a conventional line chart with the ability to show error (or deviations) in data.
heading: Creating Error Line Chart
chartPresent: true
---

An error line chart is a conventional line chart with the ability to show error (or deviations) in data.

In this section you will be shown how you can:

* <a href="/chart-guide/error-charts/creating-error-line-chart#creating-a-simple-error-line-chart" class="smoth-scroll">Create a simple error line chart</a>

* <a href="/chart-guide/error-charts/creating-error-line-chart#configuring-error-bars" class="smoth-scroll">Configure properties of error bars</a>

## Creating a Simple Error Line Chart

As an example, we will create an error line chart that compares the estimated procurement from two suppliers.

An error line chart thus created looks like this:

{% embed_all chart-guide-error-charts-creating-error-line-chart-example-1.js %}

Given below is a brief description of the attributes used to create an error line chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the data item. The label is rendered on the x-axis. This attribute belongs to the `category` object, which belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the numeric value for a data item. This value will be plotted on the chart. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`errorValue`</td>
    <td>It is used to specify the error value that will be plotted as the error bar on the chart. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
</table>


## Configuring Error Bars

You can customize the cosmetic properties of error bars to change their appearance.

An error line chart, with the error bar customized, looks like this:

{% embed_all chart-guide-error-charts-creating-error-line-chart-example-2.js %}

Given below is a brief description of the attributes used to customize the error bars:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`halfErrorBar`</td>
    <td>It is used to specify the type of error bars that will be rendered on the chart. Setting this attribute to `0` will show the high-low (full) error bars, setting it to `1` (default) will show the normal (half) error bars.</td>
  </tr>
  <tr>
    <td>`errorBarColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the error bars.</td>
  </tr>
  <tr>
    <td>`errorBarAlpha`</td>
    <td>It is used to specify the transparency of the error bars. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`errorBarThickness`</td>
    <td>It is used to specify the thickness of the error bars, in pixels.</td>
  </tr>
  <tr>
    <td>`errorBarWidth`</td>
    <td>It is used to specify the width of the error bars, in pixels.</td>
  </tr>
</table>