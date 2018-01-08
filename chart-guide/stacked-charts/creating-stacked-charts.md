---
permalink: chart-guide/stacked-charts/creating-stacked-charts.html
title: Creating a Stacked Chart | FusionCharts
description: In stacked chart plot datasets are on top of each other. They help in displaying the cumlative magnitude of two or more data series.
heading: Creating a Stacked Chart
chartPresent: true
---

Stacked charts are similar to [multi-series charts]{% linkTo tutorials/chart-guide/multi-series-charts/creating-multi-series-charts.md %}, but plot datasets on top of each other, instead of the clustered side-by-side placement adopted by multi-series charts. Stacked charts help in displaying the cumulative magnitude of two or more data series. They help in representing a data value as a sum of two or more values. Each data series can be distinguished by the color of its section in the stack.

The FusionCharts Suite XT includes the following types of stacked charts:

* Stacked Column 2D Chart

* Stacked Column 3D Chart

* Stacked Area 2D Chart

* Stacked Bar 2D Chart

* Stacked Bar 3D Chart

* Stacked Column 2D Line Single Y

* Stacked Column 3D Line Single Y

* Stacked Column 3D Line Dual Y

* Multi-series Stacked Column 2D Chart

* Multi-series Stacked Column 2D Line Dual Y

* Scroll Stacked Column 2D

## Creating a Stacked Chart

As an example, we will create a stacked column 2D chart to plot the revenue split for each quarter of the current year by product category - food products and non-food products.

The stacked column 2D chart thus created looks like this:

{% embed_all chart-guide-stacked-charts-creating-stacked-charts-example-1.js %}

In the above stacked chart, the data plots for each category are rendered using two distinct colors to help interpretation. The data plots for non-food products are stacked above the data plots for food products, instead of alongside as in multi-series charts.



## Brief Explanation of the JSON Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure used to create the above stacked column 2D chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a stacked column 2D chart, the value for this attribute will be `stackedcolumn2d`.</td>
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
    <td>It is used to specify the type of data that will passed to the chart object. This attribute takes two values: `json`, where the JSON data to render the chart is passed to the `dataSource` attribute, and `jsonurl`, where the relative path to a .json file is passed to the `dataSource` attribute.</td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td>It is used to specify the chart caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td>It is used to specify the chart sub-caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td>It is used to specify the name for the x-axis.</td>
  </tr>
  <tr>
    <td>`yAxisName`</td>
    <td>It is used to specify the name for the y-axis.</td>
  </tr>
  <tr>
    <td>`showSum`</td>
    <td>FusionCharts Suite XT allows you to show the sum of all data plots stacked above each other in one column above the column. This attribute is used to specify whether the sum of all stacked data plots will be shown. Setting this attribute to `1` will show the sum, setting it to `0` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol.</td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `category` object array, which in turn belongs to the `categories` object array.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object array, which in turn belongs to the `dataset` object array. </td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object array. </td>
  </tr>
</table>