---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.17.x.

## Radial Bar chart

FusionCharts Version 3.17.0 introduces the new Radial Bar chart, part of FusionWidgets XT. Similar to a Bar chart but displayed on a polar coordinate system, and can be used for comparisons among categories by using a circular shape.

{% embed_chart radial-bar-example.js %}

## Smart label management for Multi-level Pie chart

FusionCharts Version 3.17.0 implements smart label management for Multi-level Pie chart which automatically adjusts the data labels inside the plot avoiding labels to overlap with one another. The following attributes are included in the Multi-level Pie chart:

-  `useEllipsesWhenOverflow` (boolean) - this property converts text labels to ellipsis in order to accommodate labels in available space. The default value is true.
-  `skipOverlapLabels` (boolean) - whenever there is an overlap of labels, this property skips them to avoid congestion of labels. The default value is false.
-  `autoRotateLabels` (boolean) - this property rotates the data label text inside the data plot space. The default value is false.

{% embed_chart multi-level-pie-example-smart-label.js %}

## Individual label configuration for Heat Map chart

With FusionCharts 3.17, users now have the possibility to configure quadrant labels cosmetics at color range level in Heat Map Chart. The following attributes are included in the Heat Map chart:

-  `tlLabelFont`: Sets font name for the top left label
-  `tlLabelFontSize`: Sets font size for the top left label
-  `tlLabelFontColor`: Sets font color for the top left label
-  `trLabelFont`: Sets font name for the top right label
-  `trLabelFontSize`: Sets font size for the top right label
-  `trLabelFontColor`: Sets font color for the top right label
-  `blLabelFont`: Sets font name for the bottom left label
-  `blLabelFontSize`: Sets font size for the bottom left label
-  `blLabelFontColor`: Sets font color for the bottom left label
-  `brLabelFont`: Sets font name for the bottom right label
-  `brLabelFontSize`: Sets font size for the bottom right label
-  `brLabelFontColor`: Sets font color for the bottom right label

{% embed_chart configure-individual-label-heatmap.js %}

## New tooltipPosition property to configure Tooltip position

FusionCharts Version 3.17 introduces the new `tooltipPosition` attribute for all charts, users now have the possibility to configure the tooltip's position with any of the following values:

-  `auto` - Tooltip position is calculated automatically. Default value.
-  `top` - Tooltip will display on the top portion of the cursor.
-  `bottom` - Tooltip will display on the bottom portion of the cursor.

If it's not possible to render tooltip from user specified position then chart will revert back to auto position i.e., default value

{% embed_chart configure-tooltip-position.js %}

## Included support for Plot border attributes at data series and data plot levels

FusionCharts Version 3.17.0 includes support for the following attributes at both data plot (single-series charts) and data-series (multi-series charts) levels:

-  `showPlotBorder` (boolean) - this attribute is used to show or hide the plot border and it is configurable at the chart instance, data plot, and data-series levels. When defined at data plot or at series-data levels it overwrites the value at the chart instance level.
-  `plotBorderColor` (string - inherit) - this attribute is used to specify the color for the plot border at the chart instance level. For data plot and data-series levels, users can use the inherit property as the value to be applied.
-  `plotBorderAlpha` (number) - this attribute is used to specify the opacity for the plot border at the chart instance level, data plot, and data-series levels.
-  `plotBorderThickness` (string/number) - this attribute is used to specify the thickness for the plot border at chart instance, data plot, and data-series levels.
-  `Alpha` - controls the opacity for both the plot border as well as for the plot when defined. To define a different opacity for plot border set the plotBorderAlpha property with a different value.

{% embed_chart plot-border-example.js %}

## Heat Map charts export to CSV and XLS files

Exported CSV or XLS files display the complete Heat Map chart data.

{% embed_chart heatmap-export-example-2.js %}

## Improved export to CSV or XLS files for the Box and Whisker charts

Before exporting the Box and Whisker chart to a CVS or XLS file, users can configure which properties to display. By default the median, minimum number, and, maximum number properties are always displayed, while the following properties can be configured: lower quartile (`showQ1Values`), upper quartile (`showQ3Vales`), mean (`showMean`), mean deviation (`showMD`), standard deviation (`showSD`) and, outliers (`showOutlerValues`).

{% embed_chart box-and-whisker-export-example.js %}
