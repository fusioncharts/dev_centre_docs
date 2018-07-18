---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
breadcrumb: [["Home", "/"], ["What's New"]]
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.13.0.

## Overlapped Column 2D and Bar 2D Chart

In version 3.13.0, FusionCharts has come up with overlapped bar and overlapped column charts to display your data. In these charts, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare.  

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

The overlapped column 2D chart looks like:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

The overlapped bar 2D chart looks like:

{% embed_all standard-charts-overlapped-bar2d-chart-example-1.js %}

## Spline and Spline area charts in Combination Chart

Spline and Spline area charts can now be built as a part of combination charts. To define any one of the dataset to spline or spline area, set the `renderAs` attribute to `spline` or `splineArea` respectively.

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

In version 3.13.0, data from multi-level pie charts can be exported in CSV or XLS formats.

Refer to the GIF shown below:

![Multi-Level Pie Chart]({% site.baseurl %}/gif/export-feature-in-multi-level-pie.gif)

## Secondary data plots overlap Primary data plots

From version 3.13.0 visualization of dual y-axis multi-series chart is changed. Now, if the data plots for both the axes are set as column, the secondary plots overlaps the primary plots.

The multi-series chart with both the data plots set as column looks like:

Sample

## Set the Limits of Zoomline Chart

In version 3.13.0, behavior for `maxPeakDataLimit` and `minPeakDataLimit` attributes in zoomline charts have been updated. Value greater than `maxPeakDataLimit` will be considered as peak data and is included in initial display of zoomline. Whereas value lower than `minPeakDataLimit` will also be included as peak data.

In the zoomline chart, all the values are not plotted in the initial display of the chart. Some values are picked smartly from the entire data set to show similar trend. If you want to visualize a particular segment of chart closely, you can zoom in and reveal all the plot points.

`showPeakData` is set to define a condition for peak data, whereas `maxPeakDataLimit` and `minPeakDataLimit` attributes defines those conditions. Value greater than `maxPeakDataLimit` will be considered as peak data and is included in initial display of zoomline. Whereas value lower than `minPeakDataLimit` will also be included as peak data.

For the detailed desctiption of the attributes, click here.

The zoomline chart with above attributes look like:

Sample 