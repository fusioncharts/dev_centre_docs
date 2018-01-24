---
permalink: chart-guide/multi-series-charts/creating-multi-series-charts.html
title: Creating Multi-series Charts | FusionCharts
description: FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart.
heading: Creating Multi-series Charts
chartPresent: true
---

FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts allow to plot the highs and lows of multiple datasets while also comparing them.

The different types of multi-series charts available in the FusionCharts Suite XT are:

* Multi-series Column 2D Chart

* Multi-series Column 3D Chart

* Multi-series Bar 2D Chart

* Multi-series Bar 3D Chart

* Multi-series Line 2D Chart

* Multi-series Area 2D Chart

In this section, you will be shown a few examples of how multi-series charts look and how you can create a simple multi-series chart.

## Creating a Multi-series Column 2D Chart

A simple multi-series column 2D chart looks like this:

{% embed_all chart-guide-multi-series-charts-creating-multi-series-charts-example-1.js %}

The above chart compares the quarterly revenue earned for the previous year and the current year. The columns for both datasets, one for the previous year and one for the current year, have been rendered using different colors. This makes it easy to interpret and compare the data.



## Creating a Multi-series Line 2D Chart

A simple multi-series line chart looks like this:

{% embed_all chart-guide-multi-series-charts-creating-multi-series-charts-example-2.js %}

The above chart compares the number of visitors to the website for the last week and the current week. The line segments for both datasets, one for the last week and one for the current week, have been rendered using different colors. This makes it easy to interpret and compare the data.



## Brief Explanation of the Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure needed to render a multi-series chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a column 2D chart, the value for this attribute will be `column2d`.</td>
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
    <td>It is used to specify the type of data that will be passed to the chart object. This attribute takes two values: `json`, where the JSON data to render the chart is passed to the `dataSource` attribute, and `jsonurl`, where the relative path to a .json file is passed to the `dataSource` attribute.</td>
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
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol.</td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `category` object, which in turn belongs to the `categories` object. </td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the value for a data item. This attribute belongs to the `data` object, which in turn belongs to the `dataset` object. The `dataset` object is an object array that can be used to make multiple datasets.</td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object. The `dataset` object is an object array that can be used to make multiple datasets.</td>
  </tr>
</table>


<p class="text-info"> Note that the number of `category` objects defined should be equal to the number of `data` objects defined, that is, if you mention twelve categories (twelve months), the data for both years (2013 and 2014) should also contain twelve `data` objects (twelve rows of data). Else, the chart will display empty space at that position. </p>