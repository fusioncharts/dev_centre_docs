---
permalink: chart-guide/error-charts/creating-error-bar-chart.html
title: Creating Error Bar Chart | FusionCharts
description: An error bar chart is a type of an error chart used to show variations in data from its original value.
heading: Creating Error Bar Chart
chartPresent: true
---

An error bar chart is a type of an error chart used to show variations in data from its original value.

In this section you will be shown how you can:

* <a href="/chart-guide/error-charts/creating-error-bar-chart#creating-a-simple-error-bar-chart" class="smoth-scroll">Create a simple error bar chart</a>

* <a href="/chart-guide/error-charts/creating-error-bar-chart#error-bar-configuration" class="smoth-scroll">Configure properties of error bars</a>

## Creating a Simple Error Bar Chart

As an example, we will create an error bar chart that compares the lifespan of systems at the Daly City Serramonte, Bakersfield Central, Garden Groove Harbour stores.

An error bar chart thus created looks like this:

{% embed_all chart-guide-error-charts-creating-error-bar-chart-example-1.js %}

Given below is a brief description of the attributes used to create an error bar chart:

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


## Error Bar Configuration

You can customize the cosmetic properties of error bars to change their appearance.

An error bar chart, after customizing the error bars, looks like this:

{% embed_all chart-guide-error-charts-creating-error-bar-chart-example-2.js %}

Given below is a brief description of the attributes used to customize the error bars in an error bar chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`halfErrorBar`</td>
    <td>It is used to specify whether full error bars will be rendered instead of half error bars. Setting this attribute to `1` will show half error bars, setting it to `0` (default) will render full error bars.</td>
  </tr>
  <tr>
    <td>`errorBarColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the error bars.</td>
  </tr>
  <tr>
    <td>`errorBarAlpha`</td>
    <td>It is used to specify the transparency for the error bars. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`errorBarThickness`</td>
    <td>It is used to specify the thickness of the error bars, in pixels.</td>
  </tr>
  <tr>
    <td>`errorBarWidthPercent`</td>
    <td>It is used to configure the width of the error bars as a percentage of the column width.</td>
  </tr>
</table>