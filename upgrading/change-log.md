---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.14.X
---

<h2 class="sub-heading">Version 3.14.0-sr.1</h2>

<p class="release-date">1st August, 2019</p>

<h4>Improvement</h4>

* FusionCharts Angular wrapper is now compatible with Angular 8.

<h4>Fixes</h4>

* You can now render charts in angular using `angular-fusioncharts` wrapper. Previously, the charts were not getting rendered in angular when using `angular-fusioncharts` wrapper of FusionCharts version 3.14.0.

<p class="release-date">26th July, 2019</p>

<h4>New Features</h4>

* We have introduced a new attribute named [inheritPlotBorderColor](/chart-guide/chart-configurations/data-plot#inherit-plot-border-color-of-an-area-chart) for area charts to set the border color of the plot by inheriting the plot color.

* Version 3.14.0 onwards, you can customize the [position](/chart-guide/chart-configurations/axes#x-axis-position) of the x-axis.

* Version 3.14.0 onwards, you can customize the [position](/chart-guide/chart-configurations/axes#y-axis-position) of the y-axis.

* You can now [control the visibility](/chart-guide/chart-configurations/data-values#control-the-visibility-of-data-values) of data values by specifying the threshold values of the data plot. Only the data values greater than the threshold will be visible. Chart specific attributes for this include, `minHeightForValue` (column or bar encodings) , `minRadiusForValue` (bubble chart), `minAngelForValue` (pie or doughnut charts).

* Version 3.14.0 onwards, you can specify the [radius](/chart-guide/standard-charts/pie-and-doughnut-charts#set-the-radius-as-a-percent-value) of a pie/doughnut chart in both percentage and pixel values.

* In pie/doughnut 2D charts, you can now [place data labels and data values](/chart-guide/standard-charts/pie-and-doughnut-charts#place-values-inside-the-pie-doughnut-chart) inside the slices, using the new `labelPosition` and `valuePosition` attributes, respectively.

* In Version 3.1.4.0, we have introduced a new attribute named [textOutline](/upgrading/whats-new#improve-the-readability-of-data-values) to improve the readability of data values.

* Version 3.14.0 onwards, you can now customize y-axis values using the newly introduced [cosmetic attributes](/chart-guide/chart-configurations/axes#configure-the-border-properties-of-y-axis-names).

<h4>Improvements</h4>

* Version 3.14.0 onwards, you can use the [drawFullAreaBorder](/chart-guide/chart-configurations/data-plot#top-plot-border-of-an-area-chart) attribute in an area chart, to create a border either around the entire plot or on the top of the area plot only.

* This version onwards, you can insert non-breaking space codes into input strings of text elements.

* In this version, 487 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-14-0) to get the list of updated maps.

<h4>Fixes</h4>

* On IE and EDGE browsers, using an Ajax call to display a Gantt chart would sometimes result in the chart not being displayed. The issue has been fixed.

* The `numMinorDivLines` attribute was not working for Logarithmic charts. The issue has been fixed.

* In Heatmap charts, the `$colorRangeLabel` tooltip macro was not displaying anything in the tooltips when used. The issue has been fixed.

* The `batchExport()` API method was exporting a garbled image on Internet Explorer 11 and EDGE browsers. The issue has been fixed.

* In candlestick charts, the tooltip was appearing even after setting the value of `showTooltip` attribute to `0`. The issue has been fixed.

* In bulb gauge, when the `showValue` attribute was modified from `1` to `0`, the values were not removed from the plots. The issue has been fixed.

* The chart container was not resizing properly when the `data` object was empty. The issue has been fixed.

* When the `setChartAttribute` and `chartType` methods were applied in a specific order, the chart would throw a JS error when the mouse pointer hovered over the data plots. The issue has been fixed.

*  When the chart type was changed using the `chartType()` API method, the tooltips of the previous chart would remain displayed on the new chart until the browser was refreshed. The issue has been fixed. 

* When the value of the `showCanvasBase` attribute was set to `0`, the canvas base would still appear for a fraction of a second, before getting hidden as the plots were rendered. The issue has been fixed.

* When a pie chart with a single data value was rendered with the value of the `showLabel` attribute set to `1`, and then updated with the value of `showLabel` attribute set to `0`, the labels would remain visible. The issue has been fixed.

* The `legendItemClicked` API event was throwing a JS error when the value of the `showLegend` attribute was set to `false` within the event handler. The issue has been fixed.

* In Stacked bar charts, when the value of `stack100percent` attribute was set to `1`, the summed values were not vertically aligned to the middle of the plots. The issue has been fixed.

* X-axis data labels were not drawing properly, for certain chart widths. At times, the labels were skipped when there was a lack of space, while at other times they would not be displayed at all. The issue has been fixed.

* Pie 3D chart was throwing a JS error when chart data was updated through the "dataPlotClick" event. The issue has been fixed.

<h4>Deprecated</h4>

- Following is the list of deprecated attributes:

  - `placeXAxisLabelsOnTop`

- Treemap specific attributes:

  - `labelGlow`

  - `labelGlowIntensity`

  - `labelGlowColor`

  - `labelGlowRadius`