---
title: Release Notes | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Release Notes
---

<h2 class="sub-heading">Version 1.1.0</h2>

<p class="release-date">31st May, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- A new chart - [Grouped column](/fusiontime/fusiontime-component/plot-types-in-fusiontime#grouped-column) (aka Multi-series column) is now supported in FusionTime.

- All major FusionTime components can now be styled according to individual brand preference using familiar CSS styling for HTML and SVG objects. Components include:

  - [Time Axis](/fusiontime/fusiontime-attributes#time-axis) (SVG Styling)

  - [YAxis](/fusiontime/fusiontime-attributes#y-axes) (SVG Styling)

  - [Crossline](fusiontime/fusiontime-attributes#crossline) (SVG Styling)

  - [Time Marker](/fusiontime/fusiontime-attributes#time-markers) (SVG Styling)

  - [Data Marker](/fusiontime/fusiontime-attributes#data-markers) (SVG Styling)

  - [Time Navigator](fusiontime/fusiontime-attributes#time-navigator) (SVG Styling)

  - [Tooltip](/fusiontime/fusiontime-attributes#tooltip) (HTML Styling)

<h4>Improvement</h4>

- Default derived styles for different FusionTime components have been removed. You can now add styles using the `style` object for each component.

- Following objects are now available in FusionTime:

  - `timenavigator`
  - `tooltip`
  - `crossline`

- The default font of all text is now Helvetica, Arial or sans-serif.

- Ordering of elements and stroke for the top border in the stacked area chart has improved to give better visual clarity.

- [Standard range selector](/fusiontime/fusiontime-component/standard-range-selector) (aka SRS) component has been re-designed.

- A new [theme](/fusiontime/getting-started/introduction-to-themes-in-fusiontime), `UMBER` is now available for FusionTime charts.

- Design choices for existing themes, especially Gammel, have been improved.

- Better error messages are now available if one gives an incorrect axis or plot configuration.

<h4>Fixes</h4>

- Selecting and applying time from the Custom Range Selector selection box is now working fine.

- In Windows hybrid touch devices, the Custom Range Selector calendar is now working properly.

- If for a component styling is provided using both the dataSource and themes, the theme engine will merge properties from both the sources to display the component.

- In candlestick, OHLC charts the style of the bear and bull is now getting applied properly. Previously, the style properties were getting interchanged.

- In candlestick, OHLC charts the color of the bear and bull was changing at the time of panning. This issue is now fixed.

- Consolidated data marker tooltip date was showing junk text. This issue is now fixed.

- The `setChartAttribute()` API was not working if the `chart{}` object is not given or is blank. This issue is now fixed.

- `stroke-width = 0` is now working for anchors from `plotConfig` object.

- Tooltip cosmetics was not getting updated when theme was changed after hovering on the plots. This issue is now fixed.

- Grid line styles in the Y-Axis is now properly applied.

- Marker-notch of the time instance marker was shifted below the xAxis. It has been placed correctly now.

- Tooltip padding using styles was not accepting multiple values. This issue is now fixed.

- When the data value is very less, on plot hover, the tooltip overlapped the crossline label. This issue is now fixed.

- Setting the style of the text using `chart.style.text` was not working. This issue is now fixed.

- Table id was not getting assigned to the child or derived dataTable. This issue is now fixed.

<h4>Deprecated</h4>

- `enableNavigator` attribute is now deprecated, and the same can be achieved by using the enable attribute inside the tooltip object.

<h2 class="sub-heading">Version 1.0.0</h2>

<p class="release-date">27th February, 2019</p>

- This marks the release of first version of [FusionTime](https://www.fusioncharts.com/fusiontime)! One can now create high performing time series visualizations and stock charts in Javascript very easily.

- The usage of a special [data layer](/fusiontime/getting-started/how-fusion-time-works#fusiontime-data-layer) in FusionTime ensures that a seamless experience of the out-of-the-box features of time series visualization is available even with a high volume of time series data.

  - You can now perform a number of data operations, like, [sort](/fusiontime/fusiontime-data-engine/sort), [filter](/fusiontime/fusiontime-data-engine/filter), [groupBy](/fusiontime/fusiontime-data-engine/groupby), [pivot](/fusiontime/fusiontime-data-engine/pivot), etc. with the in-browser [store](/fusiontime/fusiontime-data-engine/overview) of tabular data, available with the data layer.

- Based on the requirement one can create either a [simple time series chart](/fusiontime/getting-started/create-your-first-chart-in-fusiontime), a [multivariate chart](/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime), a [chart with multiple data plots](/fusiontime/getting-started/create-your-multi-series-chart-in-fusiontime), or a dual Y Axis chart, etc., with equal ease.

- FusionTime supports all the [standard plot types](/fusiontime/fusiontime-component/plot-types-in-fusiontime) - line, area, column, stock charts, etc and their variants.

- Some important components of FusionTime include:

  - [Time axis](/fusiontime/fusiontime-component/time-axis) - xAxis of the chart is used as the time axis. Based on the size of the chart and the atomicity of the available time series data, FusionTime auto-aggregates data to represent the pattern in an understandable way.

  - [Time Navigator](/fusiontime/fusiontime-component/time-navigator) - the pattern of the entire data is visible in this component. Active window helps to focus on data of a given time range in greater detail.

  - [Standard range selector](/fusiontime/fusiontime-component/standard-range-selector) - helps the user select standard time periods

  - [Custom range selector](/fusiontime/fusiontime-component/custom-range-selector) - helps the user specify a specific time period

  - [Y Axis](/fusiontime/fusiontime-component/y-axis-in-fusiontime) - is the axis on which measures are plotted. It can come in either a linear or log scale. It can be plotted either on the left or right side of the canvas.

  - [Crossline](/fusiontime/fusiontime-component/crossline-in-fusiontime) - gives you quick context of data when you are interacting on the chart.

  - [Time marker](/fusiontime/fusiontime-component/time-marker) - helps you mark important events on the time axis.

  - [Data marker](/fusiontime/fusiontime-component/data-markers) - helps you mark important events on data plots.

  - [Reference line](/fusiontime/fusiontime-component/reference-line-in-fusiontime) - helps you to quickly compare data plots against a fixed value.

- FusionTime comes with three themes (Fusion, Gammel, Candy).

- CSS styling can be applied using the [style definition](/fusiontime/getting-started/style-definition) specifications.

- Charts created with FusionTime can be [exported](/fusiontime/getting-started/export-charts-fusiontime) into jpg, png, svg, and pdf formats.

- You can also use FusionTime from different technologies (angular, angular JS, react, vue, ember, jquery) using the existing FusionCharts wrappers.

- The charts created with FusionTime are responsive and work well on touch devices.
