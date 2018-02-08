---
permalink: chart-guide/standard-charts/creating-standard-charts.html
title: Creating Standard Charts | FusionCharts
description: The FusionCharts Suite XT standard charts are simple charts used to plot single-series data.
heading: Creating Standard Charts
chartPresent: true
---

The FusionCharts Suite XT standard charts are simple charts used to plot single-series data. For example, you can plot the revenue for each month of one year using a single-series chart. These charts are rendered with a single y-axis. You can choose to render the column chart and the bar chart in 2D or 3D.

The standard single-series charts available in the FusionCharts Suite XT are:

* Column 2D

* Column 3D

* Bar 2D

* Bar 3D

* Line 2D

* Area 2D

In this section, you will be shown a few examples of how the standard charts look and work.

## Creating the Column 2D Chart

A single-series column 2D chart looks like this:

{% embed_all chart-guide-standard-charts-creating-standard-charts-example-1.js %}

In the above chart, we have shown the monthly revenue for the last one year for Harry’s SuperMart. We have plotted the months along the x-axis and the revenue, which is a numeric value, along the y-axis.


## Creating the Bar 2D Chart

A single-series bar 2D chart looks like this:

{% embed_all chart-guide-standard-charts-creating-standard-charts-example-2.js %}

A bar chart is like a column chart that is inverted. Therefore, the numeric values, plotted along the y-axis in a column chart, are plotted along the x-axis in a bar chart and the data plot labels are plotted along the y-axis.

In the above chart, we have shown the five stores in a supermarket that have the highest sales. The sales figures have been plotted along the x-axis and the store names have been plotted along the y-axis.


## Creating the Line 2D Chart

A single-series line 2D chart looks like this:

{% embed_all chart-guide-standard-charts-creating-standard-charts-example-3.js %}

In the above chart, we have shown the total footfall at Bakersfield Central. We have plotted the days along the x-axis and the number of visitors along the y-axis.


## Creating the Area 2D Chart

A single-series area 2D chart looks like this:

{% embed_all chart-guide-standard-charts-creating-standard-charts-example-4.js %}

An area chart is similar to the line chart, with the difference that the area marked by the anchors and line segments is filled.

In the above chart, we have shown the sales of liquor in a store for each day of a week. The sales figures have been plotted along the y-axis and the days have been plotted along the x-axis.


## Brief Explanation of the JSON Data

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure needed to render a standard single-series chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a column 2D chart, the value for this attribute will be `column2d`. </td>
  </tr>
  <tr>
    <td>`renderAt`</td>
    <td>It is used to specify the container object where the chart will be rendered.</td>
  </tr>
  <tr>
    <td>`width`</td>
    <td>It is used to specify the width of the chart.</td>
  </tr>
  <tr>
    <td>`height`</td>
    <td>It is used to specify the height of the chart.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>It is used to specify the type of data that will be passed to the chart object. This attribute takes two values: `json`, when the JSON data to render the chart is passed to the `dataSource` attribute, and `jsonurl`, when the relative path to a .json file is passed to the `dataSource` attribute.</td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td>It is used to specify the chart caption. This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td>It is used to specify the chart sub-caption. This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td>It is used to specify the name for the x-axis.</td>
  </tr>
  <tr>
    <td>`yAxisName` </td>
    <td>It is used to specify the name for the y-axis.</td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol.</td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart. A theme is a pre-defined configuration for the visual elements of a chart - you can configure various elements like the background color, the color for the data plots, etc. at once and use the theme wherever you want the same configuration.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object.</td>
  </tr>
</table>