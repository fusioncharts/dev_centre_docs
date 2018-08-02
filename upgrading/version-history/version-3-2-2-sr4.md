---
title: Version 3.2.2 SR4 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.2 SR4.
heading: Version 3.2.2 SR4
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 6th August, 2012

## FusionCharts

### New Features

* JavaScript Pie and Doughnut charts slices move in or out when respective labels and connector lines are clicked.

* Stacked charts now can display data values in percentage using the `showPercentValues` and `showPercentinTooltip` attributes.

### Improvements

* Anchors in Flash charts turn circle when anchor sides are less than 3.

* Y-Axis Name of Flash Zoom Line chart now supports Shadow, Glow, Bevel and Blur style.

* Chart Loading messages in JavaScript charts can be now configured using of `configure()` function.

* Drawing improvement for all JavaScript 3D charts.

### Fixes

* Unable to set a custom thousands separator for Flash charts.

* Flash charts hang when accented characters are passed to the charts through the URL of the data source.

* Disabled tooltip shadow is getting enabled when Flash charts are reloaded.

* Disparity in the display of shadow across all Flash Bar charts.

* Incorrect decimal places are shown for divisional-line values in Flash charts.

* The value of the `plotSpacePercent` attribute is not getting applied as expected in Flash 3D charts.

* Text in Zoom Line chart does not support `{br}` pseudo code.

* Trendlines in Flash Zoom Line chart fail to show tooltips.

* Flash Zoom Line chart crashes when axis type is set as 'log' and a dataplot is set as zero.

* Flash Zoom Line chart's line with discontinuous data cannot be pinned.

* JavaScript Zoom Line chart miscalculates `displayStartIndex` & `displayEndIndex` attributes.

* Hidden anchors reappear when mouse hovers over JavaScript Zoom Line chart.

* Interactive legend items are not working when the anchors are disabled using `drawAnchors="0"` for JavaScript Zoom Line chart.

* Runtime error in JavaScript Zoom Line chart when category labels are hidden.

* Legend items are displayed in reverse order for JavaScript Pie 3D and Doughnut 3D charts.

* Data labels of Flash Pie and Doughnut charts do not support `{br}` pseudo code.

* JavaScript Pie and Doughnut charts do not save slice-state upon chart resize.

* JavaScript Pie or Doughnut charts with a single slice are unable to calculate the starting angle.

* Unable to show individual slice labels, when all labels are hidden using `showLabels="0"` in the `<chart>` element for JavaScript Pie and Doughnut charts.

* Runtime error on clicking slices of Pie 3D or Doughnut 3D charts under certain circumstances.

* Runtime error when JavaScript Pie or Doughnut charts have no data value to plot but the `pieYScale` attribute is set through the `<chart>` element.

* Flash Pareto 3D chart with two data plots hides the data labels.

* Cumulative Line in Flash Pareto charts becomes distorted under certain conditions.

* Summation values are going outside the canvas area in JavaScript Marimekko charts.

* `plotFillColor` attribute is not working for Flash Area charts.

* Plot border is visible even if `showPlotBorder` is set to 0 in JavaScript Multi-series charts.

* Incorrect ordering of Legend items in JavaScript Combination charts.

* Unable to render dashed lines using `lineDashed="1"` through the `<chart>` element in Flash Combination charts.

* Unable to create individual dashed line-segments in JavaScript Single-series Line charts.

* The `lineColor` attribute in the `<chart>` element is not working for Flash Combination charts.

* X-Axis category labels in Scatter chart are overlapping in Flash charts.

* Same value for the `xAxisMinValue` attribute and the x value for a category in Scatter chart results in wrong data representation.

* The `decimals` attribute fails to work in JavaScript 100% Stacked charts.

* Minor rendering issue with Multi-series Column 3D chart.