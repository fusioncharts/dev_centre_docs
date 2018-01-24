---
permalink: chart-guide/step-line-chart/creating-a-step-line-chart.html
title: Creating a Step Line Chart | FusionCharts
description: A step line chart is used to visualize trends for a particular event which is not continuous in nature.
heading: Creating a Step Line Chart
chartPresent: true
---

A step line chart is used to visualize trends for a particular event which is not continuous in nature. For a given set of data, a step line chart enables you to compare the magnitude and change in values at different points of the same series. It also helps you discern the intermittent pattern of the trend at the same time.

In this section, you will be shown how you can create a simple step line chart.

As an example, we will create a step line chart to compare the revenue earned with the expenses incurred for the last year.

The step line chart thus created looks like this:

{% embed_all chart-guide-step-line-chart-creating-a-step-line-chart-example-1.js %}

Given below is a brief description of the attributes used to create a step line chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label is rendered on the x-axis. This attribute belongs to the `category` object, which in turn belongs to the `categories` object.</td>
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


<p class="text-info">The data structure above is similar to that of any multi-series chart in the FusionCharts Suite XT, except for the `type` attribute.</p>