---
permalink: chart-guide/candlestick-chart/configuring-a-candlestick-chart.html
title: Configuring a Candlestick Chart | FusionCharts
description: In this section of candlestick chart, you will be shown how you can, set a chart type for the price chart, set the price to plot for a line price chart, etc
heading: Configuring a Candlestick Chart
chartPresent: true
---

A candlestick chart is widely used for applications that require analysis of equity and commodity prices. It allows you to show the opening price, closing price, highest trading price, lowest trading price, and the trade volume on a single chart.

Candlestick chart has both x-axis and y-axis as numeric. This chart does not directly accept dates for the data and category labels. Instead, it accepts an x-value for each data. This allows for greater flexibility as you can plot days, hours, weeks, months, years, etc. using this chart.

<p class="text-info">Converting your dates into x-values is very simple. Using your server side script, select the first date in your chart as base date. Now, use date difference function (with respect to this base date) to get the x-values for each date. So, if you want to show daily quotes on the chart, you can use "day" as the date difference parameter. Similarly, if you want to show weekly quotes, you can use "weeks" as the date difference parameter and so on.</p>

Now, for each data, you need to provide the x-value, opening price, closing price, and the high and low price for the given time frame. If you're plotting a line chart for the price, you can choose which price to plot - opening or closing. Also, high and low prices are not required in case of line plot.

You can additionally provide the volume figure if you also want a volume chart to be plotted.

In this section, you will be shown how you can:

* <a href="/chart-guide/candlestick-chart/configuring-a-candlestick-chart#setting-a-chart-type-for-the-price-chart" class="smoth-scroll">Set a chart type for the price chart</a>

* <a href="/chart-guide/candlestick-chart/configuring-a-candlestick-chart#setting-the-price-to-plot-for-the-line-price-chart" class="smoth-scroll">Set the price to plot for a line price chart</a>

* <a href="/chart-guide/candlestick-chart/configuring-a-candlestick-chart#showinghiding-the-volume-chart" class="smoth-scroll">Show/hide the volume chart</a>

* <a href="/chart-guide/candlestick-chart/configuring-a-candlestick-chart#configuring-trend-sets-and-trend-lines" class="smoth-scroll">Configure trend-lines, trend-sets, and vertical indicator lines</a>

## Setting a Chart Type for the Price Chart

You can render the price chart using a candle chart, a bar chart, or a line chart.

A candlestick chart with the price chart rendered as a line chart looks like this:

{% embed_all chart-guide-candlestick-chart-configuring-a-candlestick-chart-example-1.js %}

Given below is a brief description of the attribute used to set the chart type for the price chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotPriceAs`</td>
    <td>It is used to specify the chart type for rendering the price chart. This attribute takes ‘candlestick’ (default), ‘bar’, and ‘line’ as values.</td>
  </tr>
</table>


## Setting the Price to Plot for the Line Price Chart

For a price chart rendered as a line chart, you can decide whether you want to plot the chart w.r.t the opening price or the closing price, using the `plotClosingPrice` attribute.

As discussed before, high and low price values are not required for the line chart.

Given below is a brief description of the attribute used to set the price to plot for the line chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotClosingPrice`</td>
    <td>It is used to specify whether the opening price or the closing price will be used to plot the line price chart. </td>
  </tr>
</table>


## Showing/Hiding the Volume Chart

A candlestick chart rendered with the volume chart hidden looks like this:

{% embed_all chart-guide-candlestick-chart-configuring-a-candlestick-chart-example-2.js %}

Given below is a brief description of the attribute used to show/hide the volume chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showVolumeChart`</td>
    <td>It is used to specify whether the volume chart will be shown or hidden. Setting this attribute to `0` will hide the volume chart, setting it to `1` (default) will show it.</td>
  </tr>
</table>


<p class="text-info">You can also customize the height of the volume chart by `volumeHeightPercent` attribute. The default value is `40%` and you can choose any value between `20%` to `80%`. </p>

## Configuring Trend-sets and Trend-lines

### Trend-sets

For a candlestick chart, you can plot overlay lines on the existing data plots. These lines, known as trend-sets, can be effectively used to show technical indicators.

A candlestick chart rendered with a trend-set looks like this:

{% embed_all chart-guide-candlestick-chart-configuring-a-candlestick-chart-example-3.js %}

Given below is a brief description of the attributes used to configure the cosmetic and functional properties of trend-sets:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`trendSetColor`</td>
    <td>It is used to specify the hex code of the color used to render all trend-sets on the chart. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`trendSetAlpha`</td>
    <td>It is used to specify the transparency for all trend-sets on the chart. This attribute takes values between 0 (transparent) and 100 (opaque). This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`trendSetThickness`</td>
    <td>It is used to specify the thickness for all trend-sets on the chart. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`trendSetDashed`</td>
    <td>It is used to specify whether all trend-sets will be rendered as dashed. Setting this attribute to `1` will render the trend-sets as dashed, setting it to `0` (default) will not.  This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`trendSetDashLen`</td>
    <td>It is used to specify the length of each dash, if the trend-sets will be rendered as dashed. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`trendSetDashGap`</td>
    <td>It is used to specify the gap between each dash, if the trend-sets will be rendered as dashed. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`name`</td>
    <td>It is used to specify the name of a trend-set, e.g. Simple Moving Average. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render a specific trend-set. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of a specific trend-set. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of a specific trend-set. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`includeinlegend`</td>
    <td>It is used to specify whether the name of a trend-set will be included in the legend. Setting this attribute to `0` will not show the trend-set in the legend, setting it to `1` (default) will show it. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify whether a specific trend-set will be rendered as dashed. Setting this attribute to 1 will render the trend-set as dashed, setting it to 0 (default) will not. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`dashlen`</td>
    <td>It is used to specify the length of each dash, if the trend-set is rendered as dashed. This attribute belongs to the `trendset` object.</td>
  </tr>
  <tr>
    <td>`dashgap`</td>
    <td>It is used to specify the gap between each dash, if the trend-set is rendered as dashed. This attribute belongs to the `trendset` object.</td>
  </tr>
</table>


Each individual object in the `set` object under `trendset` can have two attributes: `x` and `value`. `x` represents the x-axis index where this `value` should be plotted.

### Trend-lines

Trend lines are horizontal and vertical lines spanning the chart canvas that aid in interpretation of data with respect to some pre-determined value. Vertical trend-lines help you to create vertical trend-zones.

A candlestick chart rendered with a horizontal trend-line and a vertical trend-zone looks like this:

{% embed_all chart-guide-candlestick-chart-configuring-a-candlestick-chart-example-4.js %}

Given below is a brief description of the cosmetic and functional properties used to configure the horizontal and vertical trend-lines.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line/trend-zone, e.g. 10. This attribute can be used with the `line` object that belongs to the `trendlines` object as well as with the `line` object that belongs to the `vtrendlines` object.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line/trend-zone, e.g. 20. This attribute can be used with the `line` object that belongs to the `trendlines` object as well as with the `line` object that belongs to the `vtrendlines` object.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to be displayed with the trend-line/trend-zone. This attribute can be used with the `line` object that belongs to the `trendlines` object as well as with the `line` object that belongs to the `vtrendlines` object.

If you don’t specify a value for this attribute, by default, it will take the value of the `startValue` attribute.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend-line/trend-zone and its associated text. This attribute can be used with the `line` object that belongs to the `trendlines` object as well as with the `line` object that belongs to the `vtrendlines` object.</td>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether the chart will be rendered with a trend-line or a trend-zone (vertical). Setting this attribute to `0` will render a trend-line, setting it to `1` (default) will render a trend-zone. This attribute is applicable only to the `line` object that belongs to the `vtrendlines` object.</td>
  </tr>
  <tr>
    <td>`showOnTop`</td>
    <td>It is used to specify whether the trend-line will be rendered on top of the data plots or behind them. Setting this attribute to `1` renders the trend-line on top of the data plots, setting it to `0` (default) renders it behind them.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of the trend-line.

This attribute is applicable only for horizontal/vertical trend-lines and not trend-zones.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of the trend-lines/trend-zones. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify whether a trend-line will be rendered as a dashed line. Setting this attribute to `1` will render the trend-line as a dashed line, setting it to `0` (default) will render it as a whole line.

This attribute is applicable only for horizontal/vertical trend-lines and not trend-zones.</td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>It is used to specify the length of each dash, if the trend-line is being rendered as a dashed line.</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>It is used to specify the gap between each dash, if the trend-line is being rendered as a dashed line.</td>
  </tr>
</table>