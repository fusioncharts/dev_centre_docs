---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.17.0
---

<h2 class="sub-heading">Version 3.16.0</h2>

<p class="release-date">December 15, 2020</p>

<h4>New Features</h4>

-  FusionCharts Version 3.17.0 implements smart labels for Multi-level pie charts, these labels automatically adjust the data labels inside the plot, making data more readable. 
-  FusionCharts Version 3.17.0 introduces the Radial Bar, a new chart type that belongs to the FusionWidgets XT. The [[Radial Bar]] allows users to compare categories using a circular shape bar chart, for more information see [[Radial Bar]] 
-  FusionCharts Version 3.17.0 introduces compatibility support for plugin WCAG 2.1. 

<h4>Improvements</h4>

2058: 
-  The Heat map chart now allows users to apply specific font properties to each label in the individual heat map cells. 
-  The Heat map chart now allows for individual label font configuration. Users can now apply specific font properties to each label in the individual heat map cells. 
-  Version 3.17 allows users to configure individual font color properties for each label in each individual heat map cell. 
2033:
-  In version, 3.17 users now have the ability to configure the tooltip position in order to help users have a better visualization.  
-  In order to improve visualization, version 3.17 now grants users the ability to configure the tooltip position. For more details refer to [[What’s New]].
1685: 
-  Starting 3.17.0 Fusion Charts extended the support for plot border attributes, allowing users to configure plot border attributes at data plot (single-series charts) and data-series level (multi-series level).
-  Starting 3.17.0 Fusion Charts allows users to configure plot border attributes at data plot (single-series charts) and data-series level (multi-series level).
2066:
-  Exporting a Heatmap chart to a CSV or XLS file now exports all the Heatmap chart data correctly. Previously the files were exported with incomplete data. 
2052:
-  Starting 3.17.0, the Box and Whisker chart when exported to a CSV or XLSX file renders all data correctly and allows users to select more data to be displayed. Previously the CSV or XLSX files exported with incomplete values and therefore rendered incorrect data.
-  Exporting a Box and Whisker chart to a CSV or XLS file now renders all chart data correctly and allows users to configure more data to be displayed. Previously the CSV or XLSX files exported with incomplete values and therefore rendered incorrect data. 

<h4>Fixes</h4>

1527: 
-  In 3.17 the rendering was corrected for plotting trend line and trend zone. Before Trend-lines were not getting plotted if the endValue is set to 0.
-  In 3.17 plotting trend line and trend zone render properly and work as expected. Previously, plotting trend line and trend zone worked incorrectly if the endValue is set to 0.

2027: 
- The Horizontal LED chart now displays the lowerLimit value as expected. Previously, when the lowerLimit value was set to a non-zero value, the Horizontal LED chart rendered 0 as the lower limit.  

1075: 
-  In 3.17.0 the valueAlpha attribute now is working as expected. Previously, the valueAlpha attribute was not working properly for Trendlines and trend-zones. 

2076: 
-  The Chord Diagram now generates a proper SVG string when using both the getSVGString method or via the Export menu. Previously, exporting a Chord Diagram using the getSVGString method resulted in an incorrect SVG string which caused an error.   
-  The Chord Diagram now exports successfully when using both the getSVGString method or via the Export menu. Previously, exporting a Chord Diagram using the getSVGString method resulted in an incorrect SVG string which caused an error.   
-  Using the getSVGString method now generates a proper SVG string to successfully export a Chord Diagram to an SVG. Previously, the getSVGString method generated an incorrect SVG string resulting in an error. 

2053: 
- Updating chart data via the setJSONUrl method updates all chart properties as expected. Previously, when using the setJSONUrl method the chart properties were not updated correctly. 

2019: 
-  For mobile devices, the page scrolling behavior now works properly. 

2004: 
-  Starting version 3.17.0 the Bullet Graph now displays all tooltips for target values as expected. Previously, the tooltip was not always shown for the target value.
