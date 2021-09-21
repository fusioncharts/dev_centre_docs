---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.18.x.

## Radar chart renders properly

The Radar chart and all its components now render correctly. Previously, rendering a chart with only one data point provided resulted in a JS error.

## Decimal Values Round-off properly

Starting FusionCharts 3.18.0 both positive and negative decimal values now round off to the nearest whole number correctly. Previously, negative decimal values were rounded off incorrectly. FusionCharts now follows **Round half away from zero** to round-off numbers. Know more [here](https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero).

## Attributes `transposeAxis` and `transposeAnimation` work correctly

For Cartesian charts, the `transposeAxis` and `transposeAnimation` attributes are now working correctly, allowing users the ability to animate the transition of data series when legend items are toggled.

## Attribute value `inherit` working as expected

The `inherit` value used for attributes like `legendIconAlpha`, `legendIconBgAlpha`, `anchorAlpha`, `anchorBgColor`, `anchorBorderColor`, etc. now works correctly and helps users to sync color and opacity for legend icons.

## Control decimal points in exported charts

Using the attribute `decimals` now displays the specified number of decimal points both across the chart as well as for the Excel and CSV export files. Previously, the number of decimal points specified on charts was not shown on exported files.
