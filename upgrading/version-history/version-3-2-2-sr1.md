---
title: Version 3.2.2 SR1 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.2 SR1.
heading: Version 3.2.2 SR1
---

## FusionCharts
**25th November, 2011**

### Fixes

* Data loading and rendering issues specific to Internet Explorer 6/7/8

* iOS gradient issue

* Disappearing 'close' button in LinkedCharts (JavaScript chart)

* Minor fix related to displaying sum in JavaScript scroll stacked charts

* Minor fix related to tool-tip when dataplot alpha is set to 0 in all line and area charts

* Minor fix in Zoom Line chart's dynamic resizing module

* Minor fix for `yAxisNameWidth`, `pYAxisNameWidth` and `sYAxisNameWidth`

* Minor fix in .NET wrapper (FusionCharts.dll)

## FusionWidgets
**April 24th, 2012**

### New Features

* Support for real-time JavaScript charts that include

    * Real-time Line chart

    * Real-time Area chart

    * Real-time Column chart

    * Real-time Stacked Area chart

    * Real-time Stacked Column chart

    * Real-time Dual Y-Axis Line chart

* Ability to control number formatting for [Indian and East Asian thousand/lac separation formats](http://docs.fusioncharts.com/widgets/Contents/Advanced/NumberFormat/Basics.html#thousandSeparatorPosition)

### Improvements

* Considerable reduction of memory leaks upon resize, data-update and dispose of charts

* Text-selection (I-beam) cursor does not appear when hovered over text

### Fixes:

* ExportReady event not being raised in advanced event model

## PowerCharts
**1st November, 2012**

### New Features

* JavaScript Multi-axis Line chart now supports shifting of axes upon clicking.

* Ability to configure zero-plane attributes within the `<axis>` elements in JavaScript Multi-axis Line chart.

* Option to disable automatic adjustment of divisional lines using `adjustDiv='0'` for individual axes in JavaScript Multi-axis Line chart.

* Support to configure cosmetics of lines associated with each axis through the `<axis>` element in JavaScript Multi-axis Line chart.

* Multi-level Pie chart now supports Number Formatting, Number Scaling and Recursive Number Scaling.

* Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

### Improvements

* Enhanced label management in Radar chart.

* Enhanced mouse interactivity in JavaScript Multi-level Pie chart.

* Added support for tool tip formatting chart attributes for JavaScript Multi-level Pie chart.

* Improved space management and shadow effects in JavaScript Multi-level Pie chart.

* JavaScript Multi-axis Line chart now supports divisional line configuration on per-axis level.

* Enhanced space management to avoid overlapping Y-Axis values in JavaScript Multi-axis Line chart.

* JavaScript Multi-axis Line chart now supports axis check-boxes and the `allowSelection` attribute to control the check-boxes.

### Fixes

* jQuery 1.8 compatibility issues.

* Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

* Exporting issues related to JavaScript LinkedCharts.

* Minor fix in label position while using stagger label display mode.

* Minor fix in Flash Drag-node chart related to the visibility of a node.

* Minor fix related to legend interactivity in JavaScript charts.

* Minor fix in axis number formatting of Flash Multi-axis Line chart.

* Minor fix in label position in Flash Multi-level pie chart.

* Minor fix in `xAxisName` position in Flash Heat Map chart.

* Minor fix related to displacement of dataplot in Line and Area charts.

* Minor fix related to drawing of axis limit ticks in JavaScript Multi-axis Line chart.

* Flash LinkedCharts overlay button does not disappear anymore while exporting.

* Links are no longer invoked when mouse is dragged onto chart from foreign elements.

* Label in image-node no more hides behind the image in Drag-node chart.

* Blank tool tip box no longer appears when category label is not defined in Flash Multi-level Pie chart.

* Tool tip separator character is no longer shown in JavaScript Multi-level Pie chart when data value is not provided.

* Error bars are no longer drawn when error values are not provided in JavaScript ErrorBar2D and ErrorLine charts.

* `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

* JavaScript charts now export the current state of the charts.

* `showDivLineValues='1'` now works as expected in conjunction with `showYAxisValues='0'` in JavaScript Multi-axis Line chart.

* `forceDecimals` is now correctly applied to the values of the first `<dataset>` in JavaScript Multi-axis Line chart.

* JavaScript links using `j-` or `JavaScript:` is now functional in Multi-level Pie Chart.

* Drill-down links now work correctly in JavaScript Heat Map chart.

* JavaScript ErrorBar2D and ErrorLine charts now include X-Axis labels in tool tips.

* Legend in JavaScript Heat Map chart can now be disabled under all conditions.

* Bold and Italics styles can now be applied to tool tips.

* Dataplots now correctly associate with corresponding icon legends with respect to legend interactivity in Flash Heat Map chart.

## FusionMaps
**16th November, 2012**

### New Features

* Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript maps.

### Improvements

* Kosovo added in World with Countries, Europe and Europe (With islands) maps.

* South Sudan added in World with Countries and Africa maps.

* Faroe island updated as a part of Denmark in Europe map.

* Correction of entity definitions for numerous maps.

### Fixes

* jQuery 1.8 compatibility issues.

* Exporting issues related to JavaScript LinkedCharts.

* Mixed content browser warning on Internet Explorer when using maps within secured (https) pages.

* Minor fix related to legend interactivity in JavaScript maps.

* Minor fix related to loading of chart or map SWF files while using LinkeCharts feature.

* Links are no longer invoked when mouse is dragged onto map from foreign elements.

* Flash LinkedCharts overlay button does not disappear anymore while exporting.

* Bold and Italics styles can now be applied to tool tips.

* JavaScript maps now export the current state of the maps.