---
permalink: chart-guide/waterfall-or-cascade-chart/configuring-a-waterfall-or-cascade-chart.html
title: Configuring a Waterfall (Cascade) Chart | FusionCharts
description: For waterfall chart, FusionCharts Suite XT allows you to customize color for the positive and negative columns on the charts
heading: Configuring a Waterfall (Cascade) Chart
chartPresent: true
---

FusionCharts Suite XT allows you to customize several cosmetic and functional properties for the waterfall chart. You can:

* <a href="{{ site.baseurl }}chart-guide/waterfall-or-cascade-chart/configuring-a-waterfall-or-cascade-chart.html#customizing-colors-for-the-positive-and-negative-columns">Customize colors for the positive and negative columns</a>

* <a href="{{ site.baseurl }}chart-guide/waterfall-or-cascade-chart/configuring-a-waterfall-or-cascade-chart.html#showinghiding-sum-columns-on-the-chart">Show/hide cumulative, non-cumulative, and total sum columns on the chart</a>

* <a href="{{ site.baseurl }}chart-guide/waterfall-or-cascade-chart/configuring-a-waterfall-or-cascade-chart.html#customizing-connectors">Customize connectors</a>

## Customizing Colors for the Positive and Negative Columns

By default, every data plot in a waterfall chart is rendered using a different color irrespective of whether it is a positive or a negative column. You can, however, customize the chart to show distinct colors for the positive and negative columns.

A waterfall chart with distinct colors used for the positive and negative data plots looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-configuring-a-waterfall-or-cascade-chart-example-1.js %}

Given below is a brief description of the attributes used to customize colors for the positive and negative data plots:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`positiveColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render all the positive data plots on the chart.</td>
  </tr>
  <tr>
    <td>`negativeColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render all the negative data plots on the chart.</td>
  </tr>
</table>


## Showing/Hiding Sum Columns on the Chart

#### Showing/Hiding a Cumulative Sum Column

A cumulative sum column is something that will show you the sum of all columns to its left.

A waterfall chart rendered with a cumulative sum column looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-configuring-a-waterfall-or-cascade-chart-example-1.js %}

In the above waterfall chart, the ‘Total Sales’ column is a cumulative sum column.

Given below is a brief description of the attribute used to create a cumulative sum column:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isSum`</td>
    <td>It is used to specify whether a column should represent the sum of all the previous data values. Setting this attribute to `1` will render a column as a cumulative sum column, setting it to `0` (default) will not.</td>
  </tr>
</table>


#### Showing/Hiding a Non-cumulative Sum Column

A non-cumulative sum column is one that shows the sum of all the columns to its left, but after the last cumulative sum column.

A waterfall chart rendered with a non-cumulative sum column looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-configuring-a-waterfall-or-cascade-chart-example-1.js %}

In the above chart, the ‘Total Costs’ column is a non-cumulative sum column.

Given below is a brief description of the attributes used to render a non-cumulative sum column:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isSum`</td>
    <td>It is used to specify whether a column should represent the sum of all the previous data values. Setting this attribute to `1` will render a column as a sum column, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`cumulative`</td>
    <td>It is used to specify whether a sum column will be rendered as a cumulative or non-cumulative sum column. Setting this attribute to `0` will render the column as a non-cumulative sum column, setting it to `1` (default) will render it as a cumulative sum column.</td>
  </tr>
</table>


#### Showing/Hiding a Total Sum Column

By default, a column that represents the sum of all the values plotted on the chart - the total sum column - is shown on the waterfall chart. You can, however, opt not to show this column. In the waterfall chart shown above, the ‘Total Profit’ column is the total sum column.

A waterfall chart with the total sum column hidden looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-configuring-a-waterfall-or-cascade-chart-example-2.js %}

Given below is a brief description of the attribute used to hide the total sum column:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showSumAtEnd`</td>
    <td>It is used to specify whether a total sum column will be shown on the chart. Setting this attribute to `0` will hide the total sum column, setting it to `1` (default) will show it.</td>
  </tr>
  <tr>
    <td>`sumLabel`</td>
    <td>It is used to specify the name of the total sum column, if you opt to show it on the chart, e.g. Total Profit.</td>
  </tr>
</table>


## Customizing Connectors

Waterfall charts, by default, display connector lines between two consecutive columns which helps in indicating the nature of transition (positive or negative). You can customize the cosmetic properties of these connector lines.

A waterfall chart rendered with customized connector lines looks like this:

{% embed_all chart-guide-waterfall-or-cascade-chart-configuring-a-waterfall-or-cascade-chart-example-3.js %}

Given below is a brief description of the attributes used to customize connector lines:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showConnectors`</td>
    <td>It is used to specify whether connectors will shown on the chart. Setting this attribute to `0` will hide the connectors, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`connectorColor`</td>
    <td>It is used to specify the hex code for the color that will be used for the connector lines.</td>
  </tr>
  <tr>
    <td>`connectorAlpha`</td>
    <td>It is used to specify the transparency for the connector lines. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`connectorThickness`</td>
    <td>It is used to specify the thickness of the connector lines.</td>
  </tr>
  <tr>
    <td>`connectorDashed`</td>
    <td>It is used to specify whether the connector lines will be rendered as dashed lines. Setting this attribute to `1` will render them as dashed lines, setting it to `0` (default) will render them as whole lines.</td>
  </tr>
  <tr>
    <td>`connectorDashLen`</td>
    <td>It is used to specify the length of each dash, if dashed connector lines are to be rendered.</td>
  </tr>
  <tr>
    <td>`connectorDashGap`</td>
    <td>It is used to specify the gap between each dash, if dashed connector lines are to be rendered.</td>
  </tr>
</table>