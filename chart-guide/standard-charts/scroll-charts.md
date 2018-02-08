---
permalink: chart-guide/scroll-charts/creating-scroll-charts.html
title: Creating a Scroll Chart | FusionCharts
description: Charts with scrolls allows you to plot large quantities of data. They are also used to avoid cluttering of plots.
heading: Creating a Scroll Chart
chartPresent: true
---

The FusionCharts Suite XT includes charts with scrolls that allow you to plot large quantities of data.

In this section, you will be introduced to the basics of scroll charts and how you can create simple scroll charts.

## Basics of Scroll Charts

Scroll charts are used to avoid cluttering of plots, thereby providing a clean look. Scroll charts can show a larger number of data plots in a small space.

The types of scroll charts available in the  FusionCharts Suite XT are :

* Scroll Column 2D chart

* Scroll Line 2D chart

* Scroll Area 2D chart

* Scroll Stacked Column 2D chart

* Scroll Combination 2D chart (Single Y)

* Scroll Combination 2D chart (Dual Y)

A scroll column 2D chart looks like this:

{% embed_all chart-guide-scroll-charts-creating-scroll-charts-example-1.js %}

A scroll stacked column 2D chart looks like this:

{% embed_all chart-guide-scroll-charts-creating-scroll-charts-example-2.js %}

## Creating a Scroll Chart

As an example, we will create a scroll combination 2D chart with a dual y-axis to plot the revenue and the profit earned, in dollars, and the profit percent for FY 2012-FY 2013.

The scroll combination 2D chart (dual Y) chart thus created looks like this :

{% embed_all chart-guide-scroll-charts-creating-scroll-charts-example-3.js %}





## Brief Explanation of the Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure used to create the above scroll combination 2D (dual Y) chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a scroll combination 2D (dual Y) chart, the value for this attribute will be `scrollcombidy2d`.</td>
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
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol.</td>
  </tr>
  <tr>
    <td>`sNumberSuffix`</td>
    <td>It is used to specify the character that will be appended to all numeric values plotted against the secondary y-axis, e.g. `%` for the percentage sign.</td>
  </tr>
  <tr>
    <td>`sYAxisMaxValue`</td>
    <td>It is used to explicitly specify the upper limit for the secondary y-axis. By default, the chart automatically calculates the upper limit based on the data you provide.</td>
  </tr>
  <tr>
    <td>`numVisiblePlot`</td>
    <td>It is used to specify the number of data plots that will be visible in the scroll pane when the chart is first loaded.</td>
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
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object array.</td>
  </tr>
</table>