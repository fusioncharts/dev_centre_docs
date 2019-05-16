---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.13.0.

## Overlapped Column 2D and Bar 2D Chart

FusionCharts v3.13 introduces overlapped bar and column charts, where you can have the bars and columns overlap with the base ones. This is very effective to show data with targets vs results.  

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

The overlapped column 2D chart looks like:

{% embed_all whats-new-overlapped-chart-example-1.js %}

The overlapped bar 2D chart looks like:

{% embed_all whats-new-overlapped-chart-example-2.js %}

## Spline and Spline area charts in Combination Chart

Spline and Spline area charts can now be built as a part of combination charts. To define any one of the dataset to spline or spline area, set the `renderAs` attribute to `spline` or `splineArea` respectively.

A combination chart with spline and Spline Area as a part of it looks like:

{% embed_all whats-new-combination-spline-chart-example-3.js %}

## Highlight effect in Multi-level Pie chart

`highlightParentPieSlices` and `highlightChildPieSlices` attributes have been introduced in multi-level pie chart to set the direction of the highlight effect of the plots when hovered. 

A multi-level pie chart with above attributes look like:

{% embed_all whats-new-multi-level-pie-example-4.js %}

For the detailed description of the attributes, click [here](/chart-attributes/?chart=multilevelpie).

## Configure Inner Radius of Multi-level Pie chart

`InnerRadius` attribute has been introduced to multi-level pie chart which is useful if you want to enforce one of your own values. This attribute explicitly sets the inner radius of the chart.

A multi-level pie chart with inner radius set to `10` looks like:

{% embed_all whats-new-multi-level-pie-example-5.js %}

## Export Multi-level pie chart in CSV or XLSX formats

In version 3.13.0, data from multi-level pie charts can be exported in CSV or XLSX formats.

Refer to the GIF shown below:

![Multi-Level Pie Chart](/gif/export-feature-in-multi-level-pie.gif)

## Set the Limits of Zoomline Chart

In version 3.13.0, behavior for `maxPeakDataLimit` and `minPeakDataLimit` attributes in zoomline charts have been updated. Value greater than `maxPeakDataLimit` will be considered as peak data and is included in initial display of zoomline. Whereas value lower than `minPeakDataLimit` will also be included as peak data.

For the detailed desctiption of the attributes, click [here](/chart-guide/standard-charts/zoom-line-charts#customize-the-peak-data-limits).

The zoomline chart with above attributes look like:

{% embed_all whats-new-zoomline-chart-example-6.js %}