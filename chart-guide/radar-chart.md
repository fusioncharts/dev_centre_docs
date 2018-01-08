---
permalink: chart-guide/radar-chart.html
title: Radar Chart | FusionCharts
description: A radar chart is a visual interpretation of data bearing multiple dimensions, the radial grid like structure,the chart displays different categories values
heading: Radar Chart
chartPresent: true
---

A radar chart (also known as a spider chart) is a visual interpretation of data bearing multiple dimensions. With the radial grid like structure, the chart displays the values of different categories on its axis. Radar charts are primarily used as a data comparison tool to visually correlate and contrast entities over its diverse aspects such as growth against benchmarks, progress over several criteria, etc. Radar charts can be plotted for a single dataset (single-series radar chart) or multiple datasets (multi-series radar chart).

Common application areas for radar charts include:

* Business performance

* Quality analysis

* Product comparison

In this section, you will be shown how you can:

* <a href="/chart-guide/radar-chart#creating-a-single-series-radar-chart" class="smoth-scroll">Create a single-series radar chart</a>

* <a href="/chart-guide/radar-chart#creating-a-multi-series-radar-chart" class="smoth-scroll">Create a multi-series radar chart</a>

## Creating a Single-series Radar Chart

As an example, we will create a radar chart that plots the results of a customer feedback survey based on five categories. The radar chart will be used to compare the results for each category and determine what service needs improvement.

The radar chart thus created looks like this:

{% embed_all chart-guide-radar-chart-example-1.js %}

Given below is a brief description of the attributes used to create a radar chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label appears on the x-axis. This attribute belongs to the `category` object, which in turn belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the numerical value for a data item. This value will be plotted on the chart. This attribute belongs to the `data` object, which in turn belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`seriesname`</td>
    <td>It is used to specify the series name for a data-set. This attribute belongs to the `dataset` object.</td>
  </tr>
</table>



## Creating a Multi-series Radar Chart

As an example, we will create a multi-series radar chart for the budget analysis for the current month for the five key departments at a store. For each department, we will plot the allocated budget and the actual cost. This will help to determine how accurate the budget estimation at the beginning of the month was - whether the budget was over-allocated, under-allocated, or correctly allocated.

The radar chart thus created looks like this:

{% embed_all {"source": "chart-guide-radar-chart-example-2.js", "id": "2"} %}