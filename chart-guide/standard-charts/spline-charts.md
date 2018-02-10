---
title: Spline Charts Guide | FusionCharts
description: Spline charts are a specialized form of line charts that display smooth curves through the different data points.
heading: Spline Charts
---

Spline charts are a specialized form of line charts that display smooth curves through the different data points. It integrates all the characteristics of a conventional line chart except for the fact that unlike line charts, which connect data points with straight lines, spline charts draw a fitted curved line to join the data points.

Spline charts can be used for plotting data that requires the usage of curve-fitting e.g. an impulse-response chart, a product life cycle chart, etc. It is also significantly used in designing Pareto charts.

FusionCharts Suite XT includes four types of spline charts:

* Single-series spline 2D chart

* Multi-series spline 2D chart

* Single-series spline area 2D chart

* Multi-series spline area 2D chart

## Single series spline 2D

A single-series spline 2D chart draws a single fitted curve through the data points.

To create a single-series spline 2D chart, set the `type` attribute to `spline`.

For a detailed list of attributes you can check the API reference page of a spline chart.

A simple single-series spline 2D chart looks like this:

{% embed_all standard-charts-spline-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/9C9pj/) to edit the single-series spline 2D chart.

## Multi-series spline chart

To render a multi-series spline chart:

* Set the `type` attribute to `msspline`.

* Use the `seriesname` attribute and the `data` object, which belong to the `dataset` object, to specify multiple datasets.

A multi-series spline chart looks like:

{% embed_all standard-charts-spline-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/tnt27/) to edit the multi-series spline chart.

## Multi series spline area 2D

A multi-series spline area 2D chart is nothing but a conventional area with a smoothed curve drawn through the data points in the series. It allows you to plot data for multiple data sets.

To render a multi-series spline area 2D chart:

* Set the `type` attribute to `mssplinearea`.

* Use the `seriesname` attribute and the `data` object, which belong to the `dataset` object, to specify multiple datasets.

A simple multi-series spline area 2D chart looks like this:

{% embed_all standard-charts-spline-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/W9Bn6/) to edit the multi-series spline area 2D chart.

## Single series spline area 2D chart

To render a single-series spline area chart, set the `type` attribute to `splinearea`.

A simple single-series spline area area 2D chart looks like this:

{% embed_all standard-charts-spline-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/gwRWL/) to edit the single-series spline area 2D chart.

> Spline and spline area charts do not support joining of empty data points in the chart. That means, if your chart does not contain data at a particular point, the data points cannot be connected to each other and will appear as a broken dataset.