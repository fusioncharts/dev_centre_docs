---
permalink: gauge-and-widgets-guide/pyramid-chart/simple-pyramid-chart.html
title: Creating a Simple Pyramid Chart | FusionCharts
description: To create a pyramid chart, you will first need to plot the data that will be represented by the chart.
heading: Creating a Simple Pyramid Chart
chartPresent: true
---

As an example, we will create the Global Wealth Pyramid (Credit Suisse 2013) - a pyramid chart that visualizes how the world’s wealth is broken.

To create a pyramid chart, you will first need to plot the data that will be represented by the chart. For our example, this data is shown in the table below:

<table>
  <tr>
    <th>Number of People</th>
    <th>Wealth owned (In trillion USD)</th>
  </tr>
  <tr>
    <td>Top 32 mn (0.7%)</td>
    <td>98.7</td>
  </tr>
  <tr>
    <td>Next 361 mn (7.7%)</td>
    <td>101.8</td>
  </tr>
  <tr>
    <td>Next 1.1 bn (22.9%)</td>
    <td>33.0</td>
  </tr>
  <tr>
    <td>Last 3.2 bn (68.7%)</td>
    <td>7.3</td>
  </tr>
</table>


We will configure the "Number of People" as the `label` of the chart and the “Wealth Owned” as the `value` of the chart. The resultant Global Wealth Pyramid chart looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-simple-pyramid-chart-example-1.js %}

Given below is a brief description of the attributes used to create the Global Wealth Pyramid chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to show the numerical value for the data represented by a pyramid segment. For example, for the slice representing the "Next 361 mn (7.7%)" people, the value will be 101.8. This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label to be be rendered for a pyramid segment, e.g. “Last 3.2 bn (68.7%)”. This attribute belongs to the `data` object.</td>
  </tr>
</table>