---
title: Version 3.2.2 SR2 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.2 SR2.
heading: Version 3.2.2 SR2
---

## FusionCharts
**25th January, 2012**

### Improvements

* Style support added for legend items. (Limited to font color and size only)

* Word-wrapping for labels now include hyphen while deciding line-breaks.

* Better and automatic handling of `"slicingDistance"` attribute of Pie and Doughnut charts.

* Added new chart attributes `"enableSlicing"` for Pie and Doughnut charts for better interactivity control.

* Addition of new attribute `"anchorStartAngle"` for all line and area based charts that has anchors.

* ZoomLine chart now has a "zoom out" button and the reset text-based link has been replaced with a button.

* Resolved compatibility issues in tool-tip positioning and gradient rendering caused by jQuery 1.7.1

### Modifications

* Setting `labelDisplay='none'` turns off x-axis value stepping and allows labels to overlap.

### Fixes

* Drawing issue on 3D stacked column charts where a point had "zero" value.

* ZoomLine chart legend items unexpectedly breaking into multiple lines.

* Support for valuePosition at `<set>` level for line and area based charts.

* ZoomLine animations not being turned off.

* Pie and Donut charts getting clipped by half when it had a single data-point.

## FusionWidgets
**1st November, 2012**

### New Features

* JavaScript Real-time charts now show context menu to start, stop and clear chart updates.

* New jQuery API to manage Real-time charts.

* Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

### Improvements

* Normalized the default font sizes of caption and sub-caption in Flash Funnel, Pyramid and Real-time charts.

* JavaScript Real-time charts now render with smoother visualization and better performance.

* Enhanced management of the open, close, high and low anchors in Spark Line chart.

### Fixes

* jQuery 1.8 compatibility issues.

* Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

* Exporting issues related to JavaScript LinkedCharts.

* Minor fix in label position while using stagger label display mode.

* Minor fix related to legend interactivity in JavaScript charts.

* Minor fix to improve auto-calculation of axis limits in JavaScript Real-time Stacked charts.

* Minor fix related to displacement of dataplot in Line and Area charts.

* Flash LinkedCharts overlay button does not disappear anymore while exporting.

* Links are no longer invoked when mouse is dragged onto chart from foreign elements.

* Real-time JavaScript charts no longer display redundant divisional grid color during real-time data update.

* A single dataplot in JavaScript Spark Win/Loss chart no more spreads across the total canvas height.

* `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

* JavaScript charts now export the current state of the charts.

* Data labels of JavaScript Real-time charts are now properly visible in the exported images/PDF.

* `Alpha` is now correctly applied when defined through `colorRange` in Flash Bulb gauge.

* Pointer and trend-point labels are now positioned correctly in JavaScript HLinear Gauge.

* Bold and Italics styles can now be applied to tool tips in Flash charts.

* Flash Real-time charts can now display multiple `vLines`.