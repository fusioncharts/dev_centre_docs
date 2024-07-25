---
title: Changelog | FusionCharts
description: Upgrade to FusionCharts 3.21.x to enjoy enhanced features, bug fixes, and improved performance. Check out the detailed version history for all updates. Try now!
heading: Version 3.21.x
---

<h2 class="sub-heading">Version 3.21</h2>

<p class="release-date">28th September, 2023</p>


<h4>New Features</h4>

- FusionCharts version 3.21 updated the `Ramda` dependency package version to the latest version, version 0.29. 
- FusionCharts version 3.21 introduces the new function that removes any cross-site scripting that might be causing errors in your code.
- FusionCharts version 3.21 introduces new maps for all 24 Argentinian provinces, all 26 Peruvian provinces, and all 7 provinces from Costa Rica. Previously Costa Rican provinces were accessed through a different file.


<h4>Improvements</h4>

- When using Multiseries Line charts, similar values overlapped in the chart. FusionCharts version 3.21 improved the `drawcrossline` attribute to prevent overlapping values and display a clean chart.  
- Improved the `numberSuffix` attribute to work as expected when using numeric and Arabic characters. Previously, the characters were displayed in an incorrect order. Now, enabling the `hasRtlText` attribute corrects the suffix and prefix positions, showing the characters in the correct order. 
- Improved the `Sunburst` chart by adding the `showLabelValue` property that allows users to control label visibility for each node at all levels in the chart. 
- Improved the `dataLabelstyles` function to handle the properties, attributes, and conditions for the data label styles. Previously, when `plotHighlightEffect` was set, and if value-related cosmetics were applied at the dataset level, the value-related cosmetics did not display as expected upon hovering on the legends.
- Improved the `Doughnut` and `Pie` charts by allowing users to display legend and data values as percentages or as absolute values. 



<h4>Fixes</h4>

- Fixed the issue where the Scatter chart legend´s icon fill color did not match the fill color of the anchor. In version 3.21, the legend icon´s color matches the color of the anchors.
- Fixed the issue where similar values overlapped when using the Multiseries Line chart. Now, similar values do not overlap and are visible. 
- Fixed the issue where the `numberSuffix` attribute did not apply as expected when using numeric and Arabic characters. Now, the characters are displayed in the correct position.
- Fixed the issue where the scroll bar became unresponsive for mobile users whenever the legend’s container box was moved. 
- Fixed the issue where the Sankey chart displayed data incorrectly when data had significant differences in values. Now, all data displays as expected. 
- Fixed the issue where Legends shifted positions when toggled. Now, legend items stay static at their position when toggled and work as expected. 
- Fixed the issue where, upon toggling the legend items, the column pattern styles lost their style and became a solid color. Now, the pattern styles set are retained upon toggling the legends. 
- Fixed the issue where the `mspline` chart compared the `max` and `min` values with the incorrect opposite variables. As a result, the `mspline` chart did not display data plots that exceeded the max value on the y-axis. Now, the `mspline` chart displays all data plots correctly.
- Resolved the issue where the subscript and superscript functions were not working correctly when using Firefox. 
- Resolved the issue where the Scatter chart did not show the tooltip for the values in the 0th position on the x-axis. 
- Fixed the issue where the `vline` property was not properly enabled, thus displaying `vline` data plots incorrectly.  
- Resolved the issue where license keys did not work for the FusionMaps USA (usmsa) maps.
- Resolved the issue of license keys not working for the FusionMaps Indonesia (westjava) maps.
- Fixed the issue where the `Bar2Dchart` rendered the plot border above the canvas border. Now, all the chart’s borders are rendered as expected.
- Resolved the issue where `vline` labels override the x-axis labels of the chart.
- Fixed the issue where certain data points were rendering erroneous values at particular date-time values in different timezones. 
When inputting time in any time zone that has DayLight Saving mode, set the value of `enableUTC` to `1` in the Schema.
- Data markers are now shown when the chart loads in the PST timezone. Previously, data markers were not showing when the charts were loaded for the first time in the PST timezone.
