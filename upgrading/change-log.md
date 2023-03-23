---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.20.x
---

<h2 class="sub-heading">Version 3.20</h2>

<p class="release-date">23rd March, 2023</p>

<h4>New Features</h4>

- FusionCharts version 3.20 introduces a new method, `_changeXAxisCoordinates,` which allows users to change the x-axis to be centered-aligned upon legend or data interaction automatically. 
- FusionCharts version 3.20 updated `Angular` integration to support Angular versions 14 and 15.
- FusionCharts version 3.20 updated `React Native` plugin to support React Native versions 0.68 and 0.69.
- FusionCharts version 3.20 updated the wrappers for `Python`, `C#`, and `Java SDK` to the latest supported versions. 
- FusionCharts version 3.20 added the new property `orientedTextAlign` which allows users to align the axis text.


<h4>Improvements</h4>

- FusionCharts version 3.20 improved the chart’s resizing functionality for gauges. By adding an or condition to the `colorRange` method, resizing the chart container adjusts the chart’s width accordingly.   
- FusionCharts version 3.20 improved the Time Navigator time format to match the x-axis labels' time format.
- FusionCharts version 3.20 includes the possibility to configure the width for the legend container with the new `disableLegendScroll` property, which, when set to 1, disables the scrollbar giving the legend container the necessary space. 


<h4>Fixes</h4>

- Fixed the issue when using a custom font for a chart; some special characters `($,%,&, etc.)` were not supported and displayed incorrectly during export when `useCanvas` was enabled. Characters now show correctly. 
- Fixed an issue where a JS error showed when hovering data plots while updating data using `setChartData()`. Now, the console shows no errors.
- Fixed the issue where Scatter charts using `setJSONData` to update datasource rendered the chart incorrectly. Now, Scatter charts render correctly when using `setJSONData` to update the datasource.
- Fixed the issue where the chart annotation’s methods, `addGroup` and `destroy`, were not working correctly. Now, annotations are displayed and working as expected.  
- Fix the issue where charts were not rendering in expo-published apps. Now charts display as expected for expo-published apps for all platforms.
- Fix the issue where the fill color did not update for the `Real-time Cylinder` chart. Now, the `feedData()` method updates the fill color correctly. 
