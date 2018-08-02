---
title: Version 3.7.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.7.0.
heading: Version 3.7.0
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 25th March, 2015

## New Features

* Chart loading messages can now include images, instead of just plain text.

* New attributes for customization of quadrant labels in bubble chart.

* `clickURLOverridesPlotLinks` attribute added to override the individual data plot links over `clickURL` link.

* Peak data can be selectively shown on the first render of a zoom-line chart.

## Improvements

* Text rendering for Right To Left (RTL) text improved.

* Multiline text for series names in legend is now supported.

* Event handling on hybrid (both, touch and pointer input) devices improved.

* Loading of large map files has been improved through batch rendering.

* Divisional lines (on the axes) /tick marks (on gauge scales) are now visible when the difference between user-specified limits is a prime number.

## Fixes

* Spline charts now don't spill out of the canvas for certain curve characteristics.

* Vertical line label borders are now hidden when `showLabelBorder=0` for charts rendered in the VML (IE8) browser.

* Zero plane for the bar 3D aligns correctly and does not look detached from the canvas background.

* x-axis data in a candlestick chart does not truncate when volume data is not defined.

* y-axis values in the candlestick chart do not overlap when volume data is not defined.

* `dataPlotRollOver`, `dataPlotRollOut`, and `dataPlotClick` events are now triggered for Gantt charts rendered in VML browsers.

* Pie and doughnut charts now rotate when rendered inside scrollable containers.

* Drill-down charts don't fail on clicking the same element twice, when JSON data is provided through a URL.

* Line segments in zoom-line charts don't disappear when `connectNullData=1`.

* Start and end anchors in zoom-line charts are not clipped anymore.

* `containerElementType` constructor-level property is now working as expected.

* `showAnchor` attribute can now hide anchors for area charts.

* Chart elements with gradient colors are now visible when the chart is rendered using the `<base>` HTML tag.

* Ellipses are now shown for labels in pie and doughnut charts when `manageLabelOverflow=1`.

* y-axis limit calculation is corrected for null data values.

* Critical memory leak in real-time charts fixed.