---
permalink: chart-guide/multi-level-pie-chart.html
title: Multi-level Pie Chart | FusionCharts
description: The multi-level pie chart is a special type of chart that allows you to show symmetrical/asymmetrical tree structures in a consolidated pie-like structure
heading: Multi-level Pie Chart
chartPresent: true
---

The multi-level pie chart is a special type of chart that allows you to show symmetrical and asymmetrical tree structures in a consolidated pie-like structure.

In this section, you will be introduced to:

* <a href="{{ site.baseurl }}chart-guide/multi-level-pie-chart.html#basics-of-a-multi-level-pie-chart">Basics of a multi-level pie chart</a>

* <a href="{{ site.baseurl }}chart-guide/multi-level-pie-chart.html#creating-a-simple-multi-level-pie-chart">Creating a simple multi-level pie chart</a>

## Basics of a Multi-level Pie Chart

The multi-level pie chart presents the entire hierarchical data in a single-screen snapshot, which makes it a preferred choice over a tree view. Also, the pie slices can assume numerical values and thereby divide the visual segments in a ratio based on the numerical values. The chart also offers advanced interactivity options like visual path tracing from any child to parent.

This chart can be used to show various types of data like:

* Organization structure

* Multi-tiered data presentation, e.g. keyword analysis

* Inter-linked tree data, e.g. friends of friends

* Sales breakup, e.g. for top product categories

## Creating a Simple Multi-level Pie Chart

As an example, we will create a multi-level pie chart that shows the sales breakup of top product categories for the last quarter at Harry’s SuperMart.

The multi-level pie chart thus rendered looks like this:

{% embed_all chart-guide-multi-level-pie-chart-example-1.js %}

Given below is a brief description of the attributes used to create a simple multi-level pie chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to show the numerical value for the data represented by a pie slice. For example, for the slice representing breads, the value will be 11.1. This attribute belongs to the `category` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label to be be rendered for a pie slice, e.g. "Apparel & Accessories". This attribute belongs to the `category` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render a pie slice.</td>
  </tr>
</table>