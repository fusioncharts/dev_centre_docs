---
permalink: chart-guide/multi-series-charts/configuring-multi-series-charts.html
title: Configuring Multi-series Charts | FusionCharts
description: FusionCharts Suite XT allows you to customize the appearance of multi-series charts.
heading: Configuring Multi-series Charts
chartPresent: false
---

FusionCharts Suite XT allows you to customize the appearance of multi-series charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/multi-series-charts/configuring-multi-series-charts#plotting-trend-elements" class="smoth-scroll">Plot trend elements</a>

* <a href="/chart-guide/multi-series-charts/configuring-multi-series-charts#plotting-vertical-line-elements" class="smoth-scroll">Plot vertical line elements</a>

## Plotting Trend Elements

Trend-lines and Trend-zones are the trend elements that can be plotted on a chart.

Trend-lines are customizable reference horizontal or vertical lines which aid in interpretation of the data. They can be used to set context or define limits and targets. For example, while plotting the quarterly sales of a company, you can use a trendline to depict the target sales. Trend-zones are similar to trend-lines except that they mark out an entire zone rather than just a line.

Given below is a brief description of the attributes used to render a trend-line on a multi-series chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line. It is specified when you want to render a slanted trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render a trend-line and its associated text. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to be displayed with the trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.

If you don’t specify a value for this attribute, by default, it will take the value of the `startValue` attribute.</td>
  </tr>
</table>


The trend-zone uses the same attributes as the trend-line.

Given below is a brief description of the attribute that is specific to rendering a trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether a chart will be rendered with a trend-line or a trend-zone. Setting this attribute to `0` will render a trend-line, setting it to `1` (default) will render a trend-zone. This attribute belongs to the `line` object, which in turn belongs to the `trendlines` object.</td>
  </tr>
</table>


FusionCharts Suite XT includes several options to customize trend elements. To know more, click [here](/configuring-your-chart-basic/trend-lines-and-zones).

## Plotting Vertical Line Elements

Vertical (or horizontal in case of bar charts) separator lines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points, or aligned to specific data points.

Given below is a brief description of the attributes used to render a vertical line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`vLine`</td>
    <td>It is used to specify whether a vertical line will be rendered on the chart. Setting this attribute to `true` will render a vertical line on the chart.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify a label for the vertical line. The label is rendered on the x-axis.</td>
  </tr>
  <tr>
    <td>`linePosition`</td>
    <td>It is used to specify the relative position of the vertical line with values ranging from 0 to 1. If a vertical line is to be plotted between two data points, then the first point is ‘0’ and the second point is ‘1’. By default, it is ‘0.5’ to show it between the points.</td>
  </tr>
</table>


FusionCharts Suite XT includes several options to customize vertical line elements. To know more, click [here](/configuring-your-chart-basic/vertical-lines).