---
title: Version 4.1.x | FusionCharts
description: This section discusses the change in features and attributes with the latest released version.
heading: Version 4.1.x
---

<h2 class="sub-heading">Version 4.1.0</h2>

<p class="release-date">13th November, 2024</p>

<h4>New Features</h4>

- FusionCharts version 4.1.0 implements a horizontal scrollbar for **Waterfall Charts** X-axis optimizing the user interface by enabling seamless navigation through large datasets. This enhancement improves layout efficiency and expands the scope for visualizing additional Data points without impacting readability or overall design integrity.
  
<h4>Improvements</h4>

- FusionCharts version 4.1.0 upgrades the version for underline dependencies of the `react-native-fusioncharts` package and makes it compatible with 0.70.x, 0.71.x, 0.72.x, 0.73.x and 0.74.x versions.
- FusionCharts version 4.1.0 introduced new dynamic attributes for customizing the appearance and behavior of the **Legend scrollbars**.
  - The `useLegendScrollGradient` attribute determines whether to enable or disable gradient colors. If the set value is 1, you need to provide gradient colors for `legendScrollTrackColor` and `legendScrollAnchorColor` in the form of an object with `angle`, `startColor`, and `endColor`. If the value is set to 0, you should provide `legendScrollTrackColor` and `legendScrollAnchorColor` in hexadecimal format instead of an object.
- Upgraded third-party integrations support:
  - Updated `ember` dependency with the latest CLI version (5.11).
  - Addressed `dependabot` pull requests, handling security vulnerabilities and ensuring a more secure and reliable dependency management process.
  - Removed `expo` dependencies which optimized and made `react-native` more lightweight.

<h4>Fixes</h4>

- FusionCharts 4.1.0 enhanced **Content Security Policy (CSP)** compatibility for the `require-trusted-types-for 'script'` upgrading **Webpack** and related packages to their latest versions, preventing indirect script injection unless the scripts are injected using secure, trusted policies.
- Fixed the **Content Security Policy (CSP) Compatibility** issues for `style-src`. Also implemented support for different scenarios, such as `Inline Styles Tooltips`, `Inline CSS` in `Radial Charts`, and `Inline CSS` for styling tables in `Draggable column 2D` charts.
- Resolved an accessibility issue where the tab focused on the overall chart area instead of the chart-plot when the chart did not have a first X-axis value.
- Fixed an issue where `Multie-Pie` charts did not resize properly without requiring a re-render.
- Fixed an issue where the **watermark** on the map remained even after applying a valid license key for the chart type: `maps/france2016`.
- Resolved an issue in the `legend-item.js` file where the `legendData` object properties were not getting passed to the `getAnchorProps` function, causing it to apply the same properties to every legend item, regardless of the data.
- Fixed an issue that prevented highlighting specific series in the **Crossline tooltip** when `applycsstransform` attribute was set to 1.
- Fixed the issue where hovering over the dataplot, the tooltip showed incorrect values when the cursor moved out of the plot area when `drawCrossLine` was enabled for `Scrollbar2d` chart and `Scroll Stacked` bar charts.


