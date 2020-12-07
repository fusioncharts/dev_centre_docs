---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.16.x.

## Configuring label icons opacity.

You can now set the values of `legendIconAlpha` and `legendIconBgAlpha` to `inherit` to inherit the alpha value from the data plot attributes. The default value for `legendIconAlpha` and `legendIconBgAlpha` is now set to `inherit` and they can now work at both global and local level.

Previously, `legendIconAlpha` and `legendIconBgAlpha` had a default value of 100% and could only be used at global level.

## Setting anchor border color, background color, and alpha value

You can set the attributes `anchorBorderColor` and `anchorBgColor` to `inherit` so they use the palette color value from data plots. 

`anchorAlpha`, `anchorBgAlpha`, and `anchorImageAlpha` can use the value `inherit` to use the the alpha  value from data plots defined via `plotFillAlpha` or `alpha`.

Previously, using a theme or palette color in charts with line/area plot and anchors only affected `anchorBorderColor` anchor background was null/transparent.

## Support for HTML tags across all chart text elements

The new template way for defining all existing and all new inline HTML tags which are now defined with the html style i.e {br}.

Previously, FusionCharts used the `<br>` style which is now deprecated. 

## Returning column data values when exporting SparkWinLoss charts

Exporting SparkWinLoss charts as a CSV or Excel file now displays the win, loss and draw column values correctly. 

Previously, when exporting a SparkWinLoss chart to CVS or Excel, the output files contained no data. 

## TreeMap charts render all data plots with specified colors

Treemap charts are now improved to handle situations when the secondary value is 0. 

Previously, if secondary value was 0 the data plots were not colored properly and appeared as white.

**Before the fix** Earlier, if the secondary value was 0 the data plot was not colored properly and appeared as white.
![TreeMap](/images/2003_BeforeFix.png)

**After the fix** Treemap charts now render all data plots with their specified color.
![Treemap](/images/2003_AfterFix.PNG)

## Multi-series Column charts display all column bars correctly. 

The Multi-series Column chart now displays all small values column bars correctly. 

Previously zero values had a fix height of 1px while values higher than zero were not visible. 

**Before the fix** Earlier, 0 values had a fix height of 1px while small values higher then 0 were not visible for scenario when the value difference is huge. 
![0 Value](1937_BeforeFix.png)

**After the fix** The Multi-series Column chart now displays all small value column bars with a fixed height of 1px and all 0 values are now displayed correctly. 
![0 Value](1937_AfterFix.JPG)
