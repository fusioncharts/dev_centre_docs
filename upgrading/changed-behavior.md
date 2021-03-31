---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.17.x.

## Heat Map charts exports CSV and Excel files correctly

Exporting the Heat Map charts as a CSV or Excel file now displays complete data, previously the exported files had incomplete data. 

**Before the fix** Earlier, the files exported with missing data.
![Chart Before] - need to include screenshot

**After the fix** Heat Map charts now export CSV and XLS files with complete data. 
![Chart After] - need to include screenshot

## Configuring Alpha attributes in Trend lines/zones working properly

You can now set the `trendLineAlpha` and `trendValueAlpha` attributes to configure opacity as expected. Previously when configuring opacity for trend line/zone, the `trendLineAlpha` attribute overrode both the trend line/zone alpha attributes even if the `trendValueAlpha` was specified.

## Support for HTML tags across all chart text elements

Export a Chord Diagram to an SVG using the `getSVGString` method or via the Export Menu and see the rendered result in an SVG viewer as expected. Previously using the `getSVGString` method did not get the proper SVG strings and resulted in an error message. 

**Before the fix** Unable to get the proper SVG strings which resulted in an error message when exporting with the `getSVGString` method or via the Export Menu. 
![Chart Before] - need to include screenshot

**After the fix** SVG string is properly generated using both the `getSVGString` method and via the Export Menu. 
![Chart After] - need to include screenshot

## Configuring data with the setJSONUrl method

Using the `setJSONUrl` method updates all chart data as expected.

**Before the fix** When updating chart data using the `setJSONUrl` method, some properties did not get updated. 
![Chart Before] - need to include screenshot

**After the fix** All charts get updated correctly. 
![Chart After] - need to include screenshot

## Box and Whisker chart exports CSV and XLSX files properly

The Box and Whisker chart exports CSV and XLSX files which display all the previously configured data. By default, the properties median, minimum number, and maximum number are always provided. Users can configure whether to display and export the following properties: lower quartile (`showQ1Values`), upper quartile (`showQ3Values`), outliers (`ShowOutlierValues`), mean (`showMean`), mean deviation (`showMD`), and standard deviation (`showSD`). Before the exported CSV or XLSX files consisted of incomplete data

**Before the fix** When exporting the Box and Whisker charts to CSV or XLSX files, the export API was broken and exported incomplete data, only capturing the first values provided for the individual categories.
![Chart Before] - need to include screenshot

**After the fix** The Box and Whiskers chart exports properly, displaying all properties as expected.
![Chart After] - need to include screenshot

## Bullet graphs display tooltips properly

Bullet graphs are now improved to display tooltips for the target component even if the value property is not configured. 

**Before the fix** Earlier, while plotting Bullet graphs, if the value property was not set, then the tooltip is not shown for the target component.
![Chart Before] - need to include screenshot

**After the fix** The Bullet graph always displays the tooltip for the target components, even if the property value is not previously defined.
![Chart After] - need to include screenshot
