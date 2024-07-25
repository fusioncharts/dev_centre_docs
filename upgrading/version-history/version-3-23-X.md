---
title: Changelog | FusionCharts
description: Upgrade to FusionCharts 3.23.x to enjoy enhanced features, bug fixes, and improved performance. Check out the detailed version history for all updates. Try now!
heading: Version 3.23.x
---

<h2 class="sub-heading">Version 3.23.0</h2>

<p class="release-date">26th March, 2024</p>


<h4>New Features</h4>

- FusionCharts enhanced interactivity with draggable taskbars in the FusionCharts Gantt chart. Users can use `allowDrag` attribute to enable the draggable feature and `dataplotdragmove` event to track the previous and new positional values of the taskbar.
- An attribute called `markerLabelOffset` was introduced. This attribute allows one to control the position of the marker labels on `AngularGauge` trend points, aiming to address the problem of overlap that occurs with small differences in values.
- Added an attribute `showValues` to the `StackedBar2DCharts` which enables users to auto-hide or show the chart if the text overflows the bar subsection.

<h4>Improvements</h4>

- FusionCharts version 3.23.0 updated the Watermark text for Licence Expired Customers. We've redefined this feature to effectively restrict the in-compliant use of our product, ensuring better control over licensing compliance.
- FusionCharts version 3.23.0 restructured the `angular-fusion` grid dependency package to support the latest `Angular` versions from version 14 to the most recent version 17.
- FusionCharts version 3.23.0 improved the behavior of the `Gantt` chart to adapt to any screen size with new responsive functionality effortlessly.
- FusionCharts version 3.23.0 added a method to prevent unnecessary HTML in ASP.NET to prevent DataStream URL implementation errors.
- FusionCharts version 3.23.0, upgraded to support working with `react-native` version 0.73.3.
- FusionCharts version 3.23.0, improved the rendering of the Indonesia region in maps.
- FusionCharts version 3.23.0, updated Source Data examples on FusionCharts website to display examples with the latest data.

<h4>Fixes</h4>

- Fixed the issue with Inline styling not getting applied when `labels/displayValue` have HTML elements and <br> tag in them.
- Resolved the issue where the link attribute was not working in the `Zoom Scatter` chart.
- Addressed an issue where the entire chart container was re-rendered when invoking `setJSONdata` method.
- Fixed an issue where the `scrollTo` method was resetting the scrollbar position when using `setJSONData` or `setChartData`.
- The rendering issues of Japan's 16 provinces were resolved. These provinces include Yamagata, Tochigi, Saitama, Tokyo, Toyama, Yamanashi, Shizuoka, Shiga, Wakayama, Tottori, Shimane, Okayama, Yamaguchi, Tokushima, Saga, and Okinawa.
- Fixed the issue where certain values skewed the `Radial bar`.
- Starting FusionCharts 3.23.0, charts are now rendering correctly when using the `jsonurl` data format.
- Resolved the issue where Microsoft Narrator could not read the chart plot details when using the accessibility extension in a certain configuration of Windows 10 and Chrome.
- Two additional provinces were incorporated into Costa Rica maps: Monteverde and Puerto Jimenez.
- Resolved the issue where exporting PDF reports resulted in incomplete information when using the `Drag Node` chart with a specific dataset.
- Resolved an issue where the `Dashboard` section on the website was not integrated with `Eloqua` and the `DataStories` section was integrated with Eloquoa but the zip was not downloadable.
