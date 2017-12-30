---
permalink: chart-guide/standard-charts/configuring-standard-charts.html
title: Configuring Standard Charts | FusionCharts
description: Here FusionCharts Suite XT allows you to customize the appearence of standard charts where you can plot trend elements and vertical line elements
heading: Configuring Standard Charts
chartPresent: true
---

FusionCharts Suite XT allows you to customize the appearance of standard charts.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/standard-charts/configuring-standard-charts.html#plotting-trend-elements-on-a-standard-chart">Plot trend elements on a standard chart</a>

* <a href="{{ site.baseurl }}chart-guide/standard-charts/configuring-standard-charts.html#plotting-vertical-line-elements">Plot vertical line elements</a>

* <a href="{{ site.baseurl }}chart-guide/standard-charts/configuring-standard-charts.html#changing-chart-type">Change the chart type dynamically</a>

* <a href="{{ site.baseurl }}chart-guide/standard-charts/configuring-standard-charts.html#set-data-skipping">Set Data Skipping</a>


## Plotting Trend Elements on a Standard Chart

The trend elements that can be plotted on a chart include trend-lines and trend-zones.

Trend-lines are customizable reference horizontal or vertical lines which aid in interpretation of data. They can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trend-line to depict the target sales. Trend-zones are similar to trend-lines except that they mark out an entire zone rather than just a line.

A quarterly sales summary chart rendered with a trend-line to show the target value looks like this:

{% embed_all chart-guide-standard-charts-configuring-standard-charts-example-1.js %}

Given below is a brief description of the attributes used to render a trend-line on the chart:

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
    <td>It is used to specify the hex code for the color that will be used to render the trend-line and its associated text. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to be displayed with the trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.

If you don’t specify a value for this attribute, by default, it will take the value of the `startValue` attribute.</td>
  </tr>
</table>

A quarterly sales summary chart rendered with a trend-zone to show a range of target values looks like this:

{% embed_all chart-guide-standard-charts-configuring-standard-charts-example-2.js %}

The trend-zone uses the same attributes as the trend-line.

Given below is a brief description of the attribute specific to a trend-zone:

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

FusionCharts Suite XT includes several options to customize trend elements. To know more, click [here]{% linkTo tutorials/configuring-your-chart-basic/trend-lines-and-zones.md %}.

## Plotting Vertical Line Elements

Vertical (or horizontal in case of bar charts) separator lines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points, or can be aligned to specific data points.

A line chart rendered with a vertical line looks like this:

{% embed_all chart-guide-standard-charts-configuring-standard-charts-example-3.js %}

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
    <td>It is used to specify a label for the vertical line. This label will be rendered along the x-axis.</td>
  </tr>
  <tr>
    <td>`linePosition`</td>
    <td>It is used to specify the position of the vertical line relative to the two data points between which it is to be plotted. This attribute takes values ranging between 0 and 1. If a vertical line is to be plotted between two data points, then set this attribute to 0 to plot it at the first point or to 1 to plot it at the second point. By default, it is set to `0.5` to show it between the points.</td>
  </tr>
</table>

FusionCharts Suite XT includes several options to customize vertical line elements. To know more, click [here]{% linkTo tutorials/configuring-your-chart-basic/vertical-lines.md %}.

## Changing Chart Type

FusionCharts Suite XT allows you to change the chart type dynamically through its advanced API. You can change chart type by calling the `chartType()` method on any FusionCharts' instance and provide the chart name as an argument.

An example of a chart, where you can dynamically change the chart type, looks like this:

{% embed_all chart-guide-standard-charts-configuring-standard-charts-example-4.js %}


## Set Data Skipping

Visualization plays a crucial role in data science, helping data scientists to make sense of the underlying patterns within data, even before any other computation begins. With v3.12.0, FusionCharts has evolved to consume large amount of data in standard charts.

What if you want to render 10000 data points in a single series chart with a dimension of 500 * 400 pixels for line, area and column charts. So if we take the width of the canvas as 500 pixels, an average of 20 data plots will be drawn every width of pixel which is not very informative with respect to visualization. __Data skipping__ is a concept which has been introduced to draw only those plots in the canvas which actually creates a data trend without hampering the performance of the chart.

An example of an area chart rendered with `30000` data looks like as shown below:

{% embed_all chart-guide-standard-charts-configuring-standard-charts-example-5.js %}

The above chart gives a clear idea on how frequently the new trips are availed. The chart shows the data updated every hour.

In the above area chart, plots with maximum and minimum value in a single pixel (width) is drawn to show the pattern out of data. The plots get overlapped only if they are hidden by another plot which results to render the chart much faster than expected. The overlapping takes place based on the data trend which cannot be compromised. 

<p class="text-info">In multi-series chart, one dataset can be overlapped (partially or completely) by another dataset only if the data plot of one dataset get hidden by the other.</p>

Given below is a brief description of the attributes by the help of which you can customize your data skipping:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotBinSize`</td>
    <td>This attribute is used to skip the data plot without any change in visualization. When set to `1`, minimum one data plot will be rendered within the width of one pixel.
Example, if `plotBinSize: 1`, minimum one column plot will be rendered within the width of one pixel.
For line and area charts, minimum of two anchors connecting one single line will be drawn.
If `plotBinSize: 0.5`, minimum two column plot on each pixel (width )will be rendered.
To disable data skipping, set this attribute to `0`.</td>
  </tr>
  <tr>
    <td>`labelBinSize`</td>
    <td>This attribute is used to skip the labels of the data plots. When set to `1`, minimum one label will be displayed in the width of one pixel.
To disable this label skipping, Set this attribute to `0`.</td>
  </tr>
</table>