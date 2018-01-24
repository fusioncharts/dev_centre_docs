---
permalink: chart-guide/waterfall-or-cascade-chart/creating-a-waterfall-or-cascade-chart.html
title: Creating a Waterfall (Cascade) Chart | FusionCharts
description: A waterfall chart, a type of column chart, used to show how an initial value is increased/decreased by a series of intermediate values, to a final value
heading: Creating a Waterfall (Cascade) Chart
chartPresent: true
---

A waterfall (cascade) chart is a special type of column chart that is used to show how an initial value is increased and decreased by a series of intermediate values, leading to a final value.

In this section, you will be shown how you can create a waterfall chart.

## Creating a Waterfall Chart

As an example, we will create a waterfall chart to show the profit and loss analysis.

The waterfall chart thus rendered looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-creating-a-waterfall-or-cascade-chart-example-1.js %}

Given below is a brief description of the attributes used to create a waterfall chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the numeric value for a column data plot, e.g. $420K. This attribute belongs to the `data` object. </td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label that will be rendered for a column data plot, e.g. Online Sales. This attribute belongs to the `data` object. </td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will be prefixed to a numeric data value.</td>
  </tr>
</table>