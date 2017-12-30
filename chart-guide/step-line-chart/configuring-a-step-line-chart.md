---
permalink: chart-guide/step-line-chart/configuring-a-step-line-chart.html
title: Configuring a Step Line Chart | FusionCharts
description: FusionCharts Suite XT allows you to configure the cosmetic and functional aspects of a step line chart
heading: Configuring a Step Line Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure the cosmetic and functional aspects of a step line chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/step-line-chart/configuring-a-step-line-chart.html#hiding-vertical-lines-from-the-chart">Hide vertical lines from the chart</a>

* <a href="{{ site.baseurl }}chart-guide/step-line-chart/configuring-a-step-line-chart.html#using-forward-steps">Use forward steps in the chart</a>

## Hiding Vertical Lines from the Chart

By default, the step line chart displays the vertical joins - vertical lines that run through the edges of the horizontal planes thereby joining them into different steps. However, you can also disjoin the horizontal segments by hiding the vertical lines from the chart.

A step line chart rendered without the vertical joins looks like this:

{% embed_all chart-guide-step-line-chart-configuring-a-step-line-chart-example-1.js %}

Given below is a brief description of the attribute used to hide the vertical joins:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawVerticalJoins`</td>
    <td>It is used to specify whether the vertical joins that connect horizontal planes will be shown. Setting this attribute to `0` will hide the vertical lines, setting it to `1` (default) will show them.</td>
  </tr>
</table>


## Using Forward Steps

For a step line chart, you can configure the direction of progression of the line segments. By default, the chart is rendered in the forward progressive mode - the line plots are horizontally depicted and then vertical lines are drawn to connect the data plots.

A step line chart rendered with the forward progressive mode disabled looks like this:

{% embed_all chart-guide-step-line-chart-configuring-a-step-line-chart-example-2.js %}

Compare this chart with the step line chart shown above and see the difference in how each is rendered.

Given below is a brief description of the attribute used to enable/disable the forward progressive mode:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useForwardSteps`</td>
    <td>It is used to specify whether the chart will be rendered in the forward progressive mode. Setting this attribute to `0` will disable the forward progressive mode, setting it to `1` (default) will enable it.</td>
  </tr>
</table>