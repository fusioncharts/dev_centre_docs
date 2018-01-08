---
permalink: chart-guide/kagi-chart.html
title: Tutorial on Kagi Chart | FusionCharts
description: Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. These charts are independent of time
heading: Kagi Chart
chartPresent: true
---

Developed by the Japanese in the 1870s, the Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. Thick lines are drawn when the price of the underlying asset breaks above the previous high price and is interpreted as an increase in demand for the asset. Thin lines are used to represent increased stock when the price falls below the previous low.

A simple Kagi chart looks like this:

{% embed_all chart-guide-kagi-chart-example-1.js %}

As you can see above, the Kagi chart shows a series of connecting vertical lines. The thickness and direction of the lines are dependent on the price. The line extends until the prices are moving in the same direction. Once the prices reverse by a negative amount, a new Kagi line is drawn in a new column. When prices enter a previous high or low, the thickness of the kagi line changes.

Given below is a brief description of the attributes used to create a Kagi chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the data item. The label is rendered on the x-axis. This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the numeric value for the data item. This value will be plotted on the chart. This attribute belongs to the `data` object.</td>
  </tr>
</table>

These charts are independent of time and only change direction once a predefined reversal amount is reached. This reversal value could be configured either as a percentage of range value or absolute value.

Anchors can also be plotted at each data point to show the data points individually. They can be configured to be shown or to be hidden.