---
title: Version 3.11.2 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.11.2.
heading: Version 3.11.2
breadcrumb: [["Home", "/"], ["Change Log"]]
---
**16th September, 2016**

## New Features

* FusionCharts Suite XT(trial version) can be installed via NPM and Bower. The product is available in two different packages:

    * The fusioncharts package includes all charts and widgets and map definition files for only the USA and World maps.

    * The fusionmaps package, in addition to all charts and widgets, includes all map definition files.

## Improvements

* Chart performance has been improved thereby significantly improving the chart rendering speed.

* For Horizontal linear gauge, `color` attribute of trendpoint is now also applied on trendline's text.

* For all the charts in FusionCharts Suite XT, annotations will be displayed above all the elements in the chart if we set `showBelow=0`.

* For scroll stacked column chart, `showSum` attribute is working even if the dataset value is set to '`0`'.

* The `feedData` method is now working as expected. Previously, this method was escaping characters for encoding. This issue has now been fixed.

## Fixes

* In the zoom scatter chart, the regression line is now working as expected. Previously, it was getting extended upto the width of the canvas. This issue has been fixed.

* In the kagi chart, labels corresponding to null data values are no longer displayed on the x-axis.

* In the zoomline chart, Traditional tooltips are now displayed when `useCrossLine=0`.

* For 2D pie charts, `labelDisplay` attribute is now working as expected when set to ROTATE. Previously, for '`labelDisplay=ROTATE`', labels were not getting displayed.

* Label positioning issues in pie and doughnut charts has been fixed. Previously, label overlapped the caption/sub-caption.

* JavaScript error in zoomline chart when chart height is less than 173 has now been fixed.

* For funnel and pyramid charts, the `baseFont` attribute is now working as expected.

* Labels in bubble chart is now getting displayed as expected without any line break.

* For zoomline chart, `rotateLabels` attribute is now working as expected.

* The issue of chart caption and sub-caption overlapping the chart canvas in Google Chrome, when `canvasOnTop=1`, has been fixed.

* For the gantt chart, `showSlackAsFill` attribute is now functional.

* USMSA map is now getting rendered with the expected entities.

* Extra decimal values has now been removed when `formatNumber` attribute is false (0).

* For radar chart, all the labels are now getting displayed as expected. Previously, labels for some data points were not getting rendered. This issue has now been fixed.

* For angular gauge, the value of the lower limit is now rectified. Previously, if the lower limit was not specified, it was inheriting the value of the dial.

* For multi-series charts, the javaScript function when defined in link attribute will be triggered only once when legend is toggled. Previously, when link attribute was defined the JavaScript function was getting executed twice.

* In real-time charts, using `updateInterval` the real-time data gets rendered at expected time.