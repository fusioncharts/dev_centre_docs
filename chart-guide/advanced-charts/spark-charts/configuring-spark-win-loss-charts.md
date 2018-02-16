---
permalink: gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html
title: Configuring Spark Win/Loss Charts | FusionCharts
description: A spark win-loss chart configured to show period blocks. The functional and cosmetic properties can be configured for spark win/loss chart.
heading: Configuring Spark Win/Loss Charts
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of spark win-loss charts to improve representation.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html#configuring-period-blocks">Configure period blocks</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html#configuring-win-loss-and-draw-colors">Configure win, loss, and draw colors</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html#configuring-colors-to-show-scoreless-matches">Configure colors to show matches with no scores by a side</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html#showinghiding-chart-value">Show/hide chart value</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-win-loss-charts.html#configuring-hover-effects">Configure hover effects</a>

## Configuring Period Blocks

You can show period blocks on the chart using colored bands. This helps you easily interpret periods on the chart.

A spark win-loss chart configured to show period blocks of three matches looks like this:

{% embed_all gauge-and-widgets-guide-spark-chart-configuring-spark-win-loss-charts-example-1.js %}

Given below is a brief description of the attributes used to define period blocks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`periodLength`</td>
    <td>It is used to specify the number of data points that each period block will encapsulate.</td>
  </tr>
  <tr>
    <td>`periodColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the period block, e.g. #CCCCCC.</td>
  </tr>
  <tr>
    <td>`periodAlpha`</td>
    <td>It is used to specify the transparency for the period block. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 60.</td>
  </tr>
</table>


<p class="text-info"> When configuring period blocks, ensure that the period length is always less than the number of data points that you have specified, as period length is directly numbered on data points.</p>

## Configuring Win, Loss, and Draw Colors

A spark win-loss chart with the win, loss, and draw colors configured looks like this:

{% embed_all gauge-and-widgets-guide-spark-chart-configuring-spark-win-loss-charts-example-2.js %}

Given below is a brief description of the attributes used to configure the win, loss, and draw colors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`winColor`</td>
    <td>It is used to specify the hex code of the fill color for the bars indicating win, e.g. #ACDE34.</td>
  </tr>
  <tr>
    <td>`lossColor`</td>
    <td>It is used to specify the hex code of the fill color for the bars indicating loss, e.g. #ACB534.</td>
  </tr>
  <tr>
    <td>`drawColor`</td>
    <td>It is used to specify the hex code of the fill color for the bars indicating draw, e.g. #12DE34.</td>
  </tr>
</table>


## Configuring Colors to Show Scoreless Matches

A spark win-loss chart with a color configured to show scoreless matches looks like this:

{% embed_all gauge-and-widgets-guide-spark-chart-configuring-spark-win-loss-charts-example-3.js %}

Given below is a brief description of the attribute used to configure a color for scoreless matches:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`scoreLessColor`</td>
    <td>It is used to specify the hex code of the fill color for the bars indicating a match with no score on either side, e.g. #444444.</td>
  </tr>
</table>


## Showing/Hiding Chart Value

A spark win-loss chart with the chart value hidden looks like this:

{% embed_all gauge-and-widgets-guide-spark-chart-configuring-spark-win-loss-charts-example-4.js %}

Given below is a brief description of the attribute used to show/hide the chart value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the chart value will be shown. Setting this attribute to `0` hides the chart value, setting it to `1` (default) shows it. </td>
  </tr>
</table>


## Configuring Hover Effects

You can use hover effects to improve the visual representation of your gauge.

A spark win-loss chart configured to enable hover effects looks like this:

{% embed_all gauge-and-widgets-guide-spark-chart-configuring-spark-win-loss-charts-example-5.js %}

Given below is a brief description of the attributes used to configure the hover effect for a spark win-loss chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`winHoverColor`</td>
    <td>It is used to specify the hex code of the fill color for the ‘win’ bar when the mouse pointer is hovered over it, e.g. #4AB6FE.</td>
  </tr>
  <tr>
    <td>`lossHoverColor`</td>
    <td>It is used to specify the hex code of the fill color for the ‘loss’ bar when the mouse pointer is hovered over it, e.g. #4336FE.</td>
  </tr>
  <tr>
    <td>`drawHoverColor`</td>
    <td>It is used to specify the hex code of the fill color for the ‘draw’ bar when the mouse pointer is hovered over it, e.g. #3AB6CD.</td>
  </tr>
  <tr>
    <td>`scoreLessHoverColor`</td>
    <td>It is used to specify the hex code of the fill color for the ‘no score’ bar when the mouse pointer is hovered over it, e.g. #AC3456.</td>
  </tr>
</table>