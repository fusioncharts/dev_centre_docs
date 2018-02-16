---
permalink: gauge-and-widgets-guide/spark-charts/configuring-spark-column-chart.html
title: Configuring Spark Column Chart | FusionCharts
description: This section of spark column chart talks about configuring period blocks, adding trend-lines/trend-zones, hover effects, etc
heading: Configuring Spark Column Chart
chartPresent: true
---

FusionCharts Suite XT allows you to customize several cosmetic and functional properties for the spark column chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-column-chart.html#configuring-period-blocks-for-the-chart">Configure period blocks</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-column-chart.html#configuring-the-high-and-low-columns">Configure the high and low columns</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-column-chart.html#adding-trend-linestrend-zones">Add trend-lines/trend-zones</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/spark-charts/configuring-spark-column-chart.html#configuring-hover-effects-for-the-chart">Configure hover effects</a>

## Configuring Period Blocks for the Chart

You can show period blocks on the chart using colored bands. This helps you easily interpret periods on the chart.

A spark column chart rendered with a period block of three months looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-1.js %}

Given below is a brief description of the attributes used to configure a period block:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`periodLength`</td>
    <td>It is used to specify the number of data points that a period block will encapsulate. For our example, we will set this value to 3.</td>
  </tr>
  <tr>
    <td>`periodColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the period block, e.g. #555555. </td>
  </tr>
  <tr>
    <td>`periodAlpha`</td>
    <td>It is used to specify the transparency of the period block. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 60. </td>
  </tr>
</table>


## Configuring the High and Low Columns

By default, the spark column chart highlights, using a default color,  the highest and lowest data plots and also shows their value. You can, however, configure the colors for the highest and lowest columns based on your requirement.

A spark column chart with the color of the high and low columns configured looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-2.js %}

Given below is a brief description of the attributes used to configure the high and low columns:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`highColor`</td>
    <td>It is used to specify the hex code for the fill color for the column having the highest value, e.g. #D3CEBA </td>
  </tr>
  <tr>
    <td>`lowColor`</td>
    <td>It is used to specify the hex code for the fill color for the column having the lowest value, e.g. #2222AA. </td>
  </tr>
</table>


## Adding Trend-lines/Trend-zones

### Adding Trend-lines

A spark column chart rendered with a trend-line looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-3.js %}

Given below is a brief description of the attributes used to render a trend-line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startvalue`</td>
    <td>It is used to specify the starting value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the starting value will be 102.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the ending value will be 109.</td>
  </tr>
</table>


### Customizing Trend-lines

A spark column chart with the cosmetic properties of trend-lines configured looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-4.js %}

Given below is a brief description of the attributes used to configure trend-line cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line and its associated text, e.g. #AB3456.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of the trend-line, e.g. 5.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify whether the trend-line will be rendered as a dashed line. Setting this attribute to `1` will render the trend-line as a dashed line, setting it to `0` (default) will render it as a whole line.</td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>It is used to specify the length of each dash, if the trend-line is rendered as a dashed line, e.g. 5.</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>It is used to specify the gap between each dash, if the trend-line is rendered as a dashed line, e, g. 2.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of the trend-line. this attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


### Adding Trend-zones

A spark column chart rendered with a trend-zone looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-5.js %}

Given below is a brief description of the attributes used to render a trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether the chart will be rendered with a trend-zone. Setting this attribute to `1` will render a trend-zone, setting it to `0` (default) will render a trend-line.</td>
  </tr>
  <tr>
    <td>`startvalue`</td>
    <td>It is used to specify the starting value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the starting value will be 102.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the ending value will be 109.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-zone and its associated text, e.g. #543ACD.</td>
  </tr>
</table>


## Configuring Hover Effects for the Chart

You can use hover effects to improve the visual representation of your gauge.

A spark columnchart configured to enable hover effects looks like this:

{% embed_all gauge-and-widgets-guide-spark-charts-configuring-spark-column-chart-example-6.js %}

Given below is a brief description of the attributes used to configure the hover effect:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`highHoverColor`</td>
    <td>It is used to specify the hex code of the fill color of the highest value column when the mouse pointer is hovered over it, e.g. #b0fdb0. </td>
  </tr>
  <tr>
    <td>`lowHoverColor`</td>
    <td>It is used to specify the hex code of the fill color of the lowest value column when the mouse pointer is hovered over it, e.g. #b0fdb0. </td>
  </tr>
</table>