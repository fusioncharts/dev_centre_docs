---
permalink: chart-guide/stacked-charts/configuring-stacked-charts.html
title: Configuring a Stacked Chart | FusionCharts
description: Using stacked charts you can display the cumulative sum of stacked data and show percent value in tooltip.
heading: Configuring a Stacked Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of stacked charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/stacked-charts/configuring-stacked-charts#displaying-the-cumulative-sum-of-stacked-data" class="smoth-scroll">Display the cumulative sum of stacked data</a>

* <a href="/chart-guide/stacked-charts/configuring-stacked-charts#creating-100-stacked-charts" class="smoth-scroll">Create 100% stacked charts</a>

* <a href="/chart-guide/stacked-charts/configuring-stacked-charts#showing-percent-values-in-tool-tips" class="smoth-scroll">Show percentage values in tool-tips</a>

## Displaying the Cumulative Sum of Stacked Data

You can opt to show the sum of all stacked data plots in a column above that column.

A stacked column 2D chart with the cumulative sum rendered above its corresponding column looks like this:

{% embed_all chart-guide-stacked-charts-configuring-stacked-charts-example-1.js %}

Given below is a brief description of the attribute used to display the cumulative sum:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showSum`</td>
    <td>It is used to specify whether the sum of all stacked data plots will be shown. Setting this attribute to `1` will show the sum, setting it to `0` (default) will hide it.</td>
  </tr>
</table>


## Creating 100% Stacked Charts

You can use stacked charts to show the percentage distribution for individual items of a dataset. These stacked charts are called 100% Stacked Charts. The y-axis, instead of representing the actual data values, represents the percentage values.

A 100% stacked column 2D chart looks like this:

{% embed_all chart-guide-stacked-charts-configuring-stacked-charts-example-2.js %}

Given below is a brief description of the attributes used to render a 100% stacked chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`stack100Percent`</td>
    <td>It is used to specify whether a 100% stacked chart will be rendered. Setting this attribute to `1` will render a 100% stacked chart, setting it to `0` (default) will render a normal stacked chart.</td>
  </tr>
  <tr>
    <td>`decimals`</td>
    <td>It is used to specify the number of digits that will be rendered after the decimal point for a data value.</td>
  </tr>
</table>



## Showing Percent Values in Tool-tips

By default, actual data values are rendered in tool-tips. You can opt to show the percentage values in tool-tips.

A stacked column chart configured to show percent values in tool-tips looks like this:

{% embed_all chart-guide-stacked-charts-configuring-stacked-charts-example-2.js %}

Given below is a brief description of the attributes used to show percent values in tool-tips:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPercentInTooltip`</td>
    <td>It is used to specify whether percent values will be rendered in the tool-tip. Setting this attribute to `1` will render percent values in tool-tips, setting it to `0` (default) will render actual values.</td>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether actual data values will be rendered on the data plots. Setting this attribute to `1` will render the data values, setting it to `0` (default) will hide them.</td>
  </tr>
  <tr>
    <td>`showPercentValues`</td>
    <td>It is used to specify whether percent values will be rendered on the data plots. Setting this attribute to `1` will render the percent values, setting it to `0` (default) will hide them.

If the `showValues` and the `showPercentValues` attributes are set to `1`, the latter overrides the former. </td>
  </tr>
</table>