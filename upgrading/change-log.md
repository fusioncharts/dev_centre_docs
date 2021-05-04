---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.17.x
---

<h2 class="sub-heading">Version 3.17.0</h2>

<p class="release-date">April 29, 2021</p>

<h4>New Features</h4>

-  FusionCharts Version 3.17.0 implements smart labels for Multi-level pie charts, these labels automatically adjust the data labels inside the plot, making data more readable.
-  FusionCharts Version 3.17.0 introduces the Radial Bar, a new chart type that belongs to the FusionWidgets XT. The Radial Bar allows users to compare categories using a circular shape bar chart.
-  FusionCharts Version 3.17.0 introduces accessibility support making the library 2.1 compliant.

<h4>Improvements</h4>

-  The Heat map chart now allows users to apply specific font properties to each quadrant label in the individual heat map cells.
-  To improve visualization and interaction on charts, version 3.17 now allows users the ability to configure the tooltip position. For more details refer to [[What’s New]].
-  Starting 3.17.0 FusionCharts allows users to configure plot border cosmetics at data plot (single-series charts) and data-series level (multi-series level).
-  Exporting a Heatmap chart to a CSV or XLS file now exports all the Heatmap chart data correctly. Previously the files were exported with incomplete data.
-  Starting 3.17.0, the Box and Whisker chart when exported to a CSV or XLSX file exports data correctly. Previously the CSV or XLSX export was returning incorrect data.

<h4>Fixes</h4>

-  Starting 3.17.0, trend lines and trend zones render properly. Previously, plotting trend line and trend zone worked incorrectly if the `endValue` is set to `0`.
-  The Horizontal LED chart now displays the `lowerLimit` value as expected. Previously, when the `lowerLimit` value was set to a non-zero value, the Horizontal LED chart rendered 0 as the lower limit.
-  Starting 3.17.0, the `valueAlpha` attribute now is working as expected. Previously, the `valueAlpha` attribute was not working properly for trend lines and trend zones.
-  Using the `getSVGString` method now generates a proper SVG string to successfully export a Chord Diagram to an SVG. Previously, the `getSVGString` method generated an incorrect SVG string resulting in an error.
-  Updating chart data via the `setJSONURL` method updates all chart properties as expected. Previously, when using the `setJSONURL` method the chart properties were not updated correctly.
-  For mobile devices, the page scrolling behavior now works properly.
-  Starting version 3.17.0 the Bullet Graph now displays tooltips for both value and target value as expected. Previously, the tooltip was not shown for the target value.
