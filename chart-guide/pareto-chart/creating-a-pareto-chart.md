---
permalink: chart-guide/pareto-chart/creating-a-pareto-chart.html
title: Creating a Pareto Chart | FusionCharts
description: In this section of Pareto chart you will be introduced to the basics of the Pareto chart and how you can create a simple one.
heading: Creating a Pareto Chart
chartPresent: true
---

A Pareto chart, named after Vilfredo Pareto, is a type of chart that combines the column chart with the line chart.

In this section you will be introduced to the basics of the Pareto chart and how you can create a simple one.

## Basics

The data values in a Pareto chart are represented by columns, which are arranged in descending order of magnitude. The cumulative total of these values is shown by an upward curving line. Pareto charts are used for isolating the key causes of a problem. They can also be used for determining the key factors of success.

The left vertical axis or the primary axis shows the frequency of occurrence, the cost, or other important units of measurement. The right vertical axis or the secondary axis shows the cumulative percentage of the total number of occurrences, the total cost, or the total of a specific unit of measurement.

The two types of Pareto charts available in the FusionCharts Suite XT are:

* Pareto 2D

* Pareto 3D

## Creating a Pareto 2D Chart

A simple Pareto 2D chart looks like this:

{% embed_all chart-guide-pareto-chart-creating-a-pareto-chart-example-1.js %}



## Creating a Pareto 3D Chart

A simple Pareto 3D chart looks like this:

{% embed_all chart-guide-pareto-chart-creating-a-pareto-chart-example-2.js %}

<p class="text-info"> To change the chart type from Pareto 2D to Pareto 3D, you only have to change the value of the `type` attribute from `pareto2d` to `pareto3d`.

The data for this chart is single series. Values have to be provided only for the column. The percentage values for the line are automatically calculated and added to the chart.</p>

## Brief Explanation of the Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure used to create the above Pareto 2D chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a Pareto 2D chart, the value for this attribute will be `pareto2d`.</td>
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
    <td>`pYAxisName`</td>
    <td>It is used to specify the name for the primary y-axis.</td>
  </tr>
  <tr>
    <td>`sYAxisName`</td>
    <td>It is used to specify the name for the secondary y-axis.</td>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether data values will be rendered with their corresponding data plots on the Pareto chart. Setting this attribute to `1` will show the values, setting it to `0` (default) will hide them.</td>
  </tr>
  <tr>
    <td>`showXAxisLine`</td>
    <td>It is used to specify whether the line representing the x-axis will be rendered on the Pareto chart. Setting this attribute to `0` will hide this line, setting it to `1` (default) will show it.</td>
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
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object array, which in turn belongs to the `dataset` object array.</td>
  </tr>
</table>