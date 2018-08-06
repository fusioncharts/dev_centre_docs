---
title: Version 3.3.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.3.0.
heading: Version 3.3.0
---

## FusionCharts XT
**30th January, 2013**	

### New Features

* Links are no more invoked in drag events for Flash charts.

* Common alpha can be set on gradient colors in Flash charts.

* Minor fix in displaying thin slices of JavaScript Pie 3D and Pie 2D charts.

* Minor fix related to displacement of data plot in JavaScript Line and Area charts.

* Minor fix related to `maxLabelWidthPercent` attribute in JavaScript Bar charts.

* Summation values are now positioned correctly in JavaScript MSStacked charts.

* Fix related to tooltip of Zoomline chart being displayed outside the canvas in Flash.

* Minor fix related to `numVisiblePlot` in Flash Scroll Combination Dual Y 2D chart.

* Minor fix in displaying data labels and tooltip when null values are passed to JavaScript Marimekko charts.

* `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts.

### Improvements

* Better and crisp visualization of JavaScript charts.

* Added support to customize export related context-menu items of JavaScript charts.

* Improvement in dataset order for JavaScript MSBar2D and MSBar3D charts.

* JavaScript SSGrid chart now supports export feature.

### Fixes

* JavaScript Pie and Doughnut 3D Charts no longer crash on Blackberry OS 10.

* `displayValue` attribute now works within `<set>` element of JavaScript Bubble chart.

* Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

* Minor fix for shadow not being clipped during initial animation of JavaScript Stacked Area charts.

* `showPercentInTooltip` attribute now displays percent value in tooltip when set as 1 in JavaScript Stacked charts.

* `manageLabelOverflow` attribute will now work properly when set along with `baseFontSize`, in JavaScript charts.

* Fixed runtime error of JavaScript Bar charts with certain combination of `maxLabelWidthPercent` attribute and long data labels.

## FusionWidgets XT
**30th January, 2013**

### New Features

* Exported JavaScript charts and gauges can now be saved to a server (using PHP and JAVA).

### Improvements

* Better and crisp visualization of JavaScript charts and gauges.

* Improved display of low and high anchors in Spark Line chart.

* Added support to customize export related context-menu items of JavaScript charts and gauges.

* Default value of `refreshInterval` attribute for Real-Time charts is set to 1 second.

### Fixes

* Links are no more invoked in drag events for Flash charts and gauges.

* Common alpha can be set on gradient colors in Flash charts and gauges.

* Minor fix for `yAxisMinValue` in Flash Real-time Stacked charts.

* Minor fix in overlapping of divisional line labels for Flash Real-time charts.

* Minor fix for `sFormatNumberScale` in Flash Real-time Dual Y-Axis charts.

* `showFullDataTable='1'` now works correctly in `<process>` element of Flash Gantt chart.

* Trendlines now appear behind the data plots when `showOnTop='0'` in JavaScript Real-time charts.

* Minor fix related to displacement of data plot in JavaScript Real-time Line and Real-time Area charts.

* `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts and gauges.

* Chart API and context menu items are now functioning as expected after exporting in JavaScript Real-Time charts.

## PowerCharts XT
**30th January, 2013**

### New Features

* Exported JavaScript charts can now be saved to a server (using PHP and JAVA).

* Ability to show X-Axis labels on top of the chart canvas in Heat Map chart.

### Improvements

* Better and crisp visualization of JavaScript charts.

* Major improvement in the visualization of JavaScript CandleStick chart.

* Improved drawing of JavaScript LogMSColumn2D chart in inverse mode.

* Added support to customize export related context-menu items of JavaScript charts.

### Fixes

* Links are no more invoked in drag events for Flash charts.

* Common alpha can be set on gradient colors in Flash charts.

* Minor fix in axis number formatting of Flash Multi-Axis Line chart.

* Minor fix related to visibility of nodes in Flash Drag-node chart.

* `bgColor` of label now occupies the whole node in Flash Drag-node chart.

* Minor fix in displaying upper limit values of JavaScript Drag-able charts.

* Minor fix in the position of data values in JavaScript LogMSColumn2D chart.

* Font Style can now be applied to data labels in JavaScript Multi-Level Pie chart.

* Minor fix related to displacement of data plot in JavaScript Line and Area charts.

* Minor fix in padding attribute in the `<label>` node of JavaScript Drag-node chart.

* Dashed styles can now be applied to individual plots of JavaScript Multi-Axis Line chart.

* Minor fix in determining the max or min value of the color range in JavaScript Heat Map chart.

* Tooltip box does not appear any more when category value is null in JavaScript MultiLevelPie chart.

* `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts.

## FusionMaps XT
**30th January, 2013**

### New Features

* 430 new maps added.

* Four new additional packs.

* New attributes to configure marker cosmetics in Flash map:

    * `markerFillColor`

    * `markerFillAlpha`

    * `markerFillRatio`

    * `markerFillAngle`

    * `markerBorderAlpha`

* Support for radius and shapeId attributes in marker definition node in Flash maps.

* Markers can now be auto-scaled when a Flash map is resized setting `autoScaleMarkers='1'`.

* Exported JavaScript maps can now be saved to a server (using PHP and JAVA).

### Improvements

* `displayValue` and `maxValue` attributes are now calculated from `<colorRange>` element when single color gradient is used in Flash Maps.

* Added support to customize export related context-menu items of JavaScript maps.

### Fixes

* Minor fix in space management for legend in Flash maps.

* Flash maps now displays entity names properly in Apple Mac.

* Entity labels are now click-able to allow drill-down in Flash maps.

* Minor fix related to the position of `Gradient-Legend` pointer in Flash charts.

* `exportChart()` can now be invoked multiple times in JavaScript maps.

* Fix related to disparity between Flash maps and JavaScript maps with respect to their boundaries.

* Flash World with Countries map no more returns `"Null"` as the DOMId through `FC_Rendered event`.

