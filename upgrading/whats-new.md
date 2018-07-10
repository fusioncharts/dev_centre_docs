---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
breadcrumb: [["Home", "/"], ["What's New"]]
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the new featured introduced in v3.13.0.

## Overlapped Column 2D and Bar 2D Chart

With version 3.13.0, FusionCharts has come up with a clever and rather effective bar chart to display your data. 

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

The overlapped column 2D chart looks like:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

The overlapped bar 2D chart looks like:

{% embed_all standard-charts-overlapped-bar2d-chart-example-1.js %}

## Spline and Spline area charts in Combination Chart

Spline and Spline area charts can now be built as a part of combination charts.

A combination chart with spline and a splineArea as a part of it looks like:

{% embed_all standard-charts-combination-chart-example-12.js %}

## Highlight effect in Multi-level Pie chart

`highlightParentPieSlices` and `highlightChildPieSlices` attributes have been introduced in multi-level pie chart to set the direction of the highlight effect of the plots when hovered. 

A multi-level pie chart with above attributes look like:

{% embed_all standard-charts-multi-level-pie-chart-example-2.js %}

For the detailed description of the attributes, click here.

## Configure Inner Radius of Multi-level Pie chart

`InnerRadius` attribute has been introduced to multi-level pie chart which is useful if you want to enforce one of your own values. This attribute explicitly sets the inner radius of the chart.

A multi-level pie chart with inner radius set to `10` looks like:

{% embed_all standard-charts-multi-level-pie-chart-example-3.js %}

## Export Multi-level pie chart in CSV or XLS formats

With version 3.13.0, data from multi-level pie charts can be exported in CSV or XLS formats.

Refer to the GIF shown below:

GIF

## Set the Limits of Zoomline Chart

In zoomline charts, `maxPeakDataLimit` and `minPeakDataLimit` attributes set the upper and lower limit for peak data respectively.

For the detailed desctiption of the attributes, click here

The zoomline chart with above attributes look like:

Sample 

## Secondard data plots overlap Primary data plots

From version 3.13.0 visualization of dual y-axis multi-series chart have been changed. Now, if the data plots for both the axes are set as column, the secondary plots overlaps the primary plots.

The multi-series chart with both the data plots set as column looks like:

Sample