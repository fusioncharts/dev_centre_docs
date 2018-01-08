---
permalink: chart-guide/pie-and-doughnut-charts/creating-pie-and-doughnut-charts.html
title: Creating Pie and Doughnut Charts | FusionCharts
description: This section talks about pie and doughtnut charts. Pie and doughnut charts are used to plot data that needs to be shown as a percent of the whole
heading: Creating Pie and Doughnut Charts
chartPresent: true
---

A pie chart is a circular chart divided into sectors where the arc length of each sector, its central angle, and its area is proportional to the quantity it represents. A doughnut chart is similar to a pie chart and facilities similar kind of data analysis. The only difference is that a doughnut chart has a blank center - as the name suggests, it looks like a doughnut. FusionCharts Suite XT includes the pie and doughnut charts to plot data that needs to be shown as a percent of the whole.

The FusionCharts Suite XT includes the following types of pie and doughnut charts:

* Pie 2D

* Pie 3D

* Doughnut 2D

* Doughnut 3D

## Creating a Pie Chart

A simple pie 2D chart showing the split in revenue by product categories for one year looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-creating-pie-and-doughnut-charts-example-1.js %}



<p class="text-info"> To render a pie chart in 3D, change the value of the `type` attribute from `pie2D` to `pie3D`. The rest of the data structure remains the same. </p>

## Creating a Doughnut Chart

A doughnut 2D chart showing the split in revenue by product categories for one year looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-creating-pie-and-doughnut-charts-example-2.js %}



<p class="text-info"> To render a doughnut chart in 3D, change the value of the `type` attribute from `doughnut2D` to `doughnut3D`. The rest of the data structure remains the same. </p>

## Brief Explanation of the Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure used to create the above pie and doughnut charts:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a pie 2D chart, the value for this attribute will be `pie2d`. For a doughnut 2D chart, it will be `doughnut2d`.</td>
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
    <td>`showPercentInTooltip`</td>
    <td>It is used to specify whether percent values will be shown as a part of the tool-tip text. Setting this attribute to `0` (default) will show actual values in the tool-tip text, setting it to `1` will show percent values.</td>
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
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object array, which in turn belongs to the `dataset` object array.</td>
  </tr>
</table>