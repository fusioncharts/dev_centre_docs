---
permalink: chart-guide/real-time-charts/chart-configurations.html
title: Chart Configuration | FusionCharts
description: FusionCharts Suite XT allows you to configure several functional and cosmetic properties for a chart.
heading: Chart Configuration
chartPresent: true
---

FusionCharts Suite XT allows you to configure several functional and cosmetic properties for a chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#setting-different-update-and-refresh-intervals">Set different update and refresh intervals</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#specifying-different-decimal-precisions">Specify different decimal precisions</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#setting-custom-canvas-margins">Set custom canvas margins</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#configuring-the-chart-element-padding">Configure chart element padding</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#adding-trend-lines-and-trend-zones">Add trend-lines and trend-zones</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/chart-configurations.html#increasingdecreasing-the-number-of-data-points-displayed-on-the-chart">Increase/decrease the number of data points displayed on the chart</a>

## Setting Different Update and Refresh Intervals

For real-time charts, you can set different update and refresh intervals - to update data and render the updated data on the chart separately.

Given below is a brief description of the attributes used to set different intervals:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`updateInterval`</td>
    <td>It is used to specify the number of seconds after which the chart will poll the server for new data. This data is then queued to be rendered on the chart.</td>
  </tr>
  <tr>
    <td>`refreshInterval`</td>
    <td>It is used to specify the number of seconds after which the chart will look for new data in the queue to render it on the chart. </td>
  </tr>
</table>


Consider that you are plotting a real-time line chart to monitor stock price. For this chart, you want to fetch updated data from the server every 5 seconds, but you want to refresh the chart view only after 15 seconds. The former is your `updateInterval` and the latter is the `refreshInterval`.

The real-time line chart thus rendered looks like this:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-1.js %}





## Specifying Different Decimal Precisions

Real-time charts offer decimal rounding controls for the data values plotted on the chart as well as the y-axis values.

A real-time line chart with decimal precisions specified is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-2.js %}

Given below is a brief description of the attributes used to specify the decimal precision:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`decimals`</td>
    <td>It is used to specify the number of decimal places to which the data values on the chart will be rounded to.</td>
  </tr>
  <tr>
    <td>`yAxisValueDecimals`</td>
    <td>It is used to specify the number of decimal places to which the y-axis values will be rounded to.</td>
  </tr>
  <tr>
    <td>`forceDecimals`</td>
    <td>It is used to specify whether zero padding will be applied to decimal numbers for the data values on the chart. Setting this attribute to `1` will enable zero padding to be applied, setting it to `0` will disable it.
For example, assume that you set the `decimals` attribute to 2 and the data value is 23.4. If `forceDecimals` is set to 1, 23.4 is converted to 23.40.</td>
  </tr>
  <tr>
    <td>`forceYAxisDecimals`</td>
    <td>It is used to specify whether zero padding will be applied to decimal numbers for the y-axis. It works like the `forceDecimals` attribute.</td>
  </tr>
</table>






## Setting Custom Canvas Margins

Setting custom canvas margins is required when the initial width required by the y-axis values changes with the incremental update. In this case, you can leave a bigger left margin for the canvas to accommodate possible increase in the width of the y-axis values. This proves to be useful when the initial width required by the y-axis values changes with the incremental update.

A real-time line chart configured to set custom canvas margins is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-3.js %}

Given below is a brief description of the attributes used to customize the canvas margins:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`canvasLeftMargin`</td>
    <td>It is used to specify the left margin for the canvas, in pixels. The chart canvas begins drawing from this position. </td>
  </tr>
  <tr>
    <td>`canvasRightMargin`</td>
    <td>It is used to specify the right margin for the canvas, in pixels. The chart canvas ends drawing from this position. </td>
  </tr>
  <tr>
    <td>`canvasTopMargin `</td>
    <td>It is used to specify the top margin for the canvas, in pixels. </td>
  </tr>
  <tr>
    <td>`canvasBottomMargin`</td>
    <td>It is used to specify the bottom margin for the canvas, in pixels.</td>
  </tr>
</table>






Setting custom margins is also useful when you render more than one real-time chart on the same page, vertically, and want all the chart canvases to start at the same x-position. To do this, you can set the same width for each chart and then set the same `canvasLeftmargin`.

## Configuring the Chart Element Padding

Real-time charts automatically try to avoid overlapping of the incremental x-axis labels and the real-time values by configuring the chart element padding. A chart with an empty canvas (i.e. having no historical data) automatically adds a padding between the canvas and the real-time values based on the vertical space occupied by the first updated x-axis label. Real-time charts let you add additional space between the x-axis labels and the real-time values.

A real-time line chart configured for chart element padding is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-4.js %}

Given below is a brief description of the attribute used to configure chart element padding:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`realTimeValuePadding`</td>
    <td>It is used to specify the vertical distance between the real-time values and x-axis labels.</td>
  </tr>
</table>






<p class="text-info"> If you are not showing real-time values on your chart, you use either the `xAxisNamepadding` or the `legendPadding` attributes to create the required vertical space. </p>

## Adding Trend-lines and Trend-zones

### Adding a Trend-line

Trend-lines are horizontal lines spanning the breadth of the chart canvas. They aid in interpretation of data with respect to some pre-determined value. For example, if you are monitoring the stock price, you can add trend lines to show yesterday's closing price or support/resistance levels.

A real-time line chart rendered with a trend-line looks like this:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-5.js %}

Given below is a brief description of the attributes used to add a trend-line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line. For example, if you want to plot a trend-line at value 102, the `startValue` will be 102.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to displayed as the label for the trend-line. By default, this attribute takes the value of the `startValue` attribute.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line and its associated text. </td>
  </tr>
</table>






As shown in the data above, for each trend line on the chart, you need to define a `line` object under the `trendLines` object.

<p class="text-info">During real-time update of the chart, if any trend line values fall out of chart axis limits, they do not show up on the chart. However, if the charts limits later adjust to accommodate the trend line values, they automatically re-appear.</p>

### Adding a Slanted Trend-line

A real-time line chart rendered with a slanted trend-line is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-6.js %}

Given below is a brief description of  the attributes used to add a slanted trend-line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the `startValue` will be 102. The value for this attribute should be within the limits of the y-axis.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line. For example, if you want to plot a slanted trend-line from value 102 to 109, the `endValue` will be 109. By default, this attribute assumes the same value as `startValue`. The value for this attribute should be within the limits of the y-axis.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to displayed as the label for the trend-line. By default, this attribute takes the value of the `startValue` attribute.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line and its associated text. </td>
  </tr>
</table>






### Adding a Trend-zone

A real-time line chart rendered with a trend-zone is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-7.js %}

Given below is a brief description of the attributes used to add a trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the `startValue` will be 102. The value for this attribute should be within the limits of the y-axis.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-zone. For example, if you want to plot a trend-zone from value 102 to 109, the `endValue` will be 109. By default, this attribute assumes the same value as `startValue`. The value for this attribute should be within the limits of the y-axis.</td>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether a trend-line or a trend-zone will be rendered on the chart. Setting this attribute to `1` renders a trend-zone, setting it to `0` (default) renders a trend-line. </td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to displayed as the label for the trend-line. By default, this attribute takes the value of the `startValue` attribute.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line and its associated text.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of the trend zone. This attribute takes values between 0 (opaque) and 100 (transparent).</td>
  </tr>
</table>






## Increasing/Decreasing the Number of Data Points Displayed on the Chart

Look at the real-time column chart shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-8.js %}

Observe in the chart shown above that the chart view shows 10 data plots at any given time.

You can increase/decrease the number of data points/data plots that are displayed on the chart at one time.

A real-time column chart configured to display 15 data plots at a time is shown below:

{% embed_all advanced-charting-real-time-charts-chart-configurations-example-9.js %}

Given below is a brief description of the attribute used to increase/decrease the number of data points displayed:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numDisplaySets`</td>
    <td>It is used to specify the number of data plots that will be rendered on the chart in one screen view, at any given time. For example, if you set this attribute to 15, at a time only 15 data points per dataset will shown on the chart. As soon as the 16th data comes in, the first data towards the left will be deleted and the rest of the data will be shifted one position to the left. </td>
  </tr>
</table>