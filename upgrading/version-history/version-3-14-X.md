---
title: Version 3.14.X | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.14.x.
heading: Version 3.14.x
---

<h2 class="sub-heading">Version 3.14.1</h2>

<p class="release-date">27th September, 2019</p>

<h4>New Features</h4>

- Starting v3.14.1, you have seven new types of charts available, which are as follows:

  - [Scroll Bar 2D Chart](/upgrading/whats-new#scroll-bar-2d-chart)

  - [Scroll Stacked Bar 2D Chart](/upgrading/whats-new#scroll-stacked-bar-2d-chart)

  - [Scroll Multi-series Stacked Column 2D](/upgrading/whats-new#scroll-multi-series-stacked-column-2d)

  - [Scroll Multi-series Stacked Column 2D + Line Dual Y-Axis Chart](/upgrading/whats-new#scroll-multi-series-stacked-column-2d-line-dual-y-axis-chart)

  - [Stacked Column 2D Line Dual Y-axis Chart](/upgrading/whats-new#stacked-column-2d-line-dual-y-axis-chart)

  - [Stacked Area 2D Line Dual Y-axis Chart](/upgrading/whats-new#stacked-area-2d-line-dual-y-axis-chart)

  - [3D Dual Y-axis Combination Chart](/upgrading/whats-new#3d-dual-y-axis-combination-chart)

- Chart data can now be [exported in CSV format](/upgrading/whats-new#export-chart-data-in-csv-format) from the hamburger menu.

- You can now [reverse (right to left)](/upgrading/whats-new#reverse-the-color-scale-of-the-linear-gauge) the order of the color scale in a horizontal linear gauge.

- You now have the option to use four new attributes to [control padding](/chart-guide/chart-configurations/chart-paddings-and-margins#set-canvas-padding), which prevents data plots along the edges of the canvas from getting clipped:

  - `canvasTopPadding`

  - `canvasBottomPadding`

  - `canvasLeftPadding`

  - `canvasRightPadding`

<h4>Improvements</h4>

- Existing data plot events, like `dataPlotClick`, `dataPlotRollOver`, `dataPlotRollOut`, etc, will also have cosmetic information of the plots.

- You can now display the cumulative [sum of stacked area plots](/upgrading/whats-new#display-the-cumulative-sum-of-stacked-area-chart) above the topmost area plot.

- Some attributes of data plot cosmetics like `valueFontColor`, `valueBgColor` and `valueBorderColor` will now apply at data series and individual [data point level](/upgrading/whats-new#customize-data-value-of-an-individual-data-plot).

- You can now set `yAxisMinValue`, even if all the values on the Y-axis are `null`. Earlier, it would default to `0`.

- Disabling a pie slice with 0 values using `showZeroPies` attribute will now also disable the palette color of the particular pie slice.

- In our attempt to be better accessibility compliant, the hierarchy of some DOM elements have been re-ordered.

- Extra spaces are no longer truncated when you include non-breaking space codes (`&nbsp;` `&#160;` or `&#xA0;`) in lines of text.

- In this version, 77 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-14-1) to get the list of updated maps.

<h4>Fixes</h4>

- In a Heatmap chart, if no `data` property was given, the chart was throwing a `JS` error. This issue has now been fixed.

- A multilevel pie chart without a root category no longer displays a 'No data to display' message.

- `drawLabel` function is now working properly for the bar chart.

- When the Realtime Column Chart got disposed in the `realTimeUpdateError` event, it was throwing a `JS` error. This issue is now fixed.

- Tooltips with long tool texts in charts with relatively less width now display correctly with canvas boundaries. Previously, these would extend beyond the canvas.

- The anchors are now visible in the Stacked Area 2D chart.

- `displayValue` attribute was not working when the value of `labelPosition` was set to `inside` in Pie 2D and Doughnut 2D charts. This issue is now fixed.

- Heat Maps now intelligently display a continuous grid even when `columnID` attribute is left empty.

- In Gantt charts, `processId` is now retrieving correct value from `dataPlotClick` event.

- In a Multi Series Stacked Column 2D chart no longer displays a `JS` error if the number of series exceeds 10. Previously, under similar circumstances, an error was displayed in the console and some series went missing from the legend.

- In a Drag Node chart, you can now drag a node in IE11, even when the node label is not visible.

- `taskHoverFillAlpha` attribute is now working properly in Gantt charts.

- In a Pie chart, tooltips went out of the container if they were rendered within `div` tags with the value of `text-align` set to `center`. The issue has now been fixed.

- In maps, a null entity color no longer disappears on legend interaction.

- Trendlines now display properly when you set the value of the `valueOnRight` attribute to `1`. Previously, under similar conditions, unnecessary space would appear on the right side of the canvas.

- In a Gantt chart, the taskbar now remains perfectly aligned when you vertically scroll the chart after setting the value of "scrolltodate" attribute.

- The tooltip plot color no longer gets affected, when you apply the `anchorBorderColor` attribute.

- `xAxisLabelMode` attribute in XY charts is now working in both lowercase and uppercase.

- The toolbox menu went out of the chart when placed at the bottom left corner. The issue has been fixed.

- `httpStatus` in `dataLoadError`, `dataSubmitError`, and `realTimeUpdateError` events was always returning `-1` instead of the proper status code. This issue is now fixed.

<h2 class="sub-heading">Version 3.14.0-sr.1</h2>

<p class="release-date">1st August, 2019</p>

<h4>Improvement</h4>

- FusionCharts Angular wrapper is now compatible with Angular 8.

<h4>Fixes</h4>

- You can now render charts in angular using `angular-fusioncharts` wrapper. Previously, the charts were not getting rendered in angular when using `angular-fusioncharts` wrapper of FusionCharts version 3.14.0.

<h2 class="sub-heading">Version 3.14.0</h2>

<p class="release-date">26th July, 2019</p>

<h4>New Features</h4>

- We have introduced a new attribute named [inheritPlotBorderColor](/chart-guide/chart-configurations/data-plot#inherit-plot-border-color-of-an-area-chart) for area charts to set the border color of the plot by inheriting the plot color.

- Version 3.14.0 onwards, you can customize the [position](/chart-guide/chart-configurations/axes#x-axis-position) of the x-axis.

- Version 3.14.0 onwards, you can customize the [position](/chart-guide/chart-configurations/axes#y-axis-position) of the y-axis.

- You can now [control the visibility](/chart-guide/chart-configurations/data-values#control-the-visibility-of-data-values) of data values by specifying the threshold values of the data plot. Only the data values greater than the threshold will be visible. Chart specific attributes for this include, `minHeightForValue` (column or bar encodings) , `minRadiusForValue` (bubble chart), `minAngelForValue` (pie or doughnut charts).

- Version 3.14.0 onwards, you can specify the [radius](/chart-guide/standard-charts/pie-and-doughnut-charts#set-the-radius-as-a-percent-value) of a pie/doughnut chart in both percentage and pixel values.

- In pie/doughnut 2D charts, you can now [place data labels and data values](/chart-guide/standard-charts/pie-and-doughnut-charts#place-values-inside-the-pie-doughnut-chart) inside the slices, using the new `labelPosition` and `valuePosition` attributes, respectively.

- In Version 3.1.4.0, we have introduced a new attribute named [textOutline](/upgrading/whats-new#improve-the-readability-of-data-values) to improve the readability of data values.

- Version 3.14.0 onwards, you can now customize y-axis values using the newly introduced [cosmetic attributes](/chart-guide/chart-configurations/axes#configure-the-border-properties-of-y-axis-names).

<h4>Improvements</h4>

- Version 3.14.0 onwards, you can use the [drawFullAreaBorder](/chart-guide/chart-configurations/data-plot#top-plot-border-of-an-area-chart) attribute in an area chart, to create a border either around the entire plot or on the top of the area plot only.

- This version onwards, you can insert non-breaking space codes into input strings of text elements.

- In this version, 487 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-14-0) to get the list of updated maps.

<h4>Fixes</h4>

- On IE and EDGE browsers, using an Ajax call to display a Gantt chart would sometimes result in the chart not being displayed. The issue has been fixed.

- The `numMinorDivLines` attribute was not working for Logarithmic charts. The issue has been fixed.

- In Heatmap charts, the `$colorRangeLabel` tooltip macro was not displaying anything in the tooltips when used. The issue has been fixed.

- The `batchExport()` API method was exporting a garbled image on Internet Explorer 11 and EDGE browsers. The issue has been fixed.

- In candlestick charts, the tooltip was appearing even after setting the value of `showTooltip` attribute to `0`. The issue has been fixed.

- In bulb gauge, when the `showValue` attribute was modified from `1` to `0`, the values were not removed from the plots. The issue has been fixed.

- The chart container was not resizing properly when the `data` object was empty. The issue has been fixed.

- When the `setChartAttribute` and `chartType` methods were applied in a specific order, the chart would throw a JS error when the mouse pointer hovered over the data plots. The issue has been fixed.

- When the chart type was changed using the `chartType()` API method, the tooltips of the previous chart would remain displayed on the new chart until the browser was refreshed. The issue has been fixed.

- When the value of the `showCanvasBase` attribute was set to `0`, the canvas base would still appear for a fraction of a second, before getting hidden as the plots were rendered. The issue has been fixed.

- When a pie chart with a single data value was rendered with the value of the `showLabel` attribute set to `1`, and then updated with the value of `showLabel` attribute set to `0`, the labels would remain visible. The issue has been fixed.

- The `legendItemClicked` API event was throwing a JS error when the value of the `showLegend` attribute was set to `false` within the event handler. The issue has been fixed.

- In Stacked bar charts, when the value of `stack100percent` attribute was set to `1`, the summed values were not vertically aligned to the middle of the plots. The issue has been fixed.

- X-axis data labels were not drawing properly, for certain chart widths. At times, the labels were skipped when there was a lack of space, while at other times they would not be displayed at all. The issue has been fixed.

- Pie 3D chart was throwing a JS error when chart data was updated through the "dataPlotClick" event. The issue has been fixed.

<h4>Deprecated</h4>

- Following is the list of deprecated attributes:

  - `placeXAxisLabelsOnTop`

- Treemap specific attributes:

  - `labelGlow`

  - `labelGlowIntensity`

  - `labelGlowColor`

  - `labelGlowRadius`
