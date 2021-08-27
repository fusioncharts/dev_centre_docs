---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.18.x.

## Radar chart renders properly

The Radar chart and all its components now render correctly. Previously, rendering a chart with only one data point provided resulted in a JS error.

## Decimal Values Round-off properly

Starting FusionCharts 3.18.0 both positive and negative decimal values now round off to the nearest whole number correctly. Previously, negative decimal values were rounded off incorrectly.

## Corrected the API method 'setJSONData' for the Heat Map chart

Using the 'setJSONData' method to update the Heat Map chart now updates all properties and components correctly. Previously, the method was not updating all properties and components (like color range and data label colors) correctly. 

## Attributes 'transposeAxis' and 'transposeAnimation' work correctly

For Cartesian charts, the 'transposeAxis' and 'transposeAnimation' attributes are now working correctly, allowing users the ability to animate the transition of data series when legend items are toggled.

## Performance Improvement

Starting version 3.18.0 Fusion Charts improved performance for component update operations such as resize, re-render, etc. performed on charts with multiple events to run smoothly as expected. Previously, using component update operations on charts with multiple events return a JS error.

## Improved 'labelSepChar' attribute behavior

For Funner and Pyramid charts, Fusion Charts improved the ´labelSepChar´ attribute to accept more characters and to render properly for data labels both inside and outside the chart. Previously for data labels placed outside the data plot, the labels displayed incomplete information.  

## Corrected legend interaction for Spline charts
On Spline charts, clicking on the legend icon for a particular data series toggles the respective data series On or Off.

## Attribute value 'inherit' working as expected
The 'inherit' value used for attributes like legendIconAlpha, legendIconBgAlpha, anchorAlpha, anchorBgColor, anchorBorderColor, etc. now works correctly and helps users to sync color and opacity for legend icons.  

## Control decimal points in exported charts

Using the attribute 'decimals' now displays the specified number of decimal points both across the chart as well as for the Excel and CSV export files. Previously, the number of decimal points specified on charts was not shown on exported files.  
