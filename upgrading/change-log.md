---
title: Changelog | FusionCharts
description: This section discusses the change in features and attributes with the latest released version.
heading: Version 4.1.x
---

<h2 class="sub-heading">Version 4.1.0</h2>

<p class="release-date">13th November, 2024</p>

<h4>New Features</h4>

- FusionCharts version 4.1.0 introduces scrollbar for **Waterfall Charts** x-axis. This improves user experience with the layout and scope of additional Data.

<h4>Improvements</h4>

- FusionCharts version 4.1.0 upgrades the version for underline dependencies of the `react-native-fusioncharts` package and made it compatible with 0.70.x, 0.71.x and 0.72.x versions.
- FusionCharts version 4.1.0 added new dynamic attributes to control the look and feel of the legend scrollbars.
  - The `useLegendScrollGradient` attribute determines whether to enable or disable gradient colors. If the set value is 1, you need to provide gradient colors for `legendScrollTrackColor` and `legendScrollAnchorColor` in the form of an object with `angle`, `startColor`, and `endColor`. If the value is set to 0, you should provide `legendScrollTrackColor` and `legendScrollAnchorColor` in hexadecimal format instead of an object.
- Upgraded third-party integrations support:
  - Updated `ember` dependency with the latest version.
  - Updated component variables and functions in `glimmer` component.
  - Addressed `dependabot` pull requests to improve security.  

<h4>Fixes</h4>

- FusionCharts 4.1.0 enhanced **Content Security Policy (CSP)** compatibility for the `require-trusted-types-for 'script'` upgrading **Webpack** and related packages to their latest versions, preventing indirect script injection unless the scripts are injected using secure, trusted policies.
- Fixed the **Content Security Policy (CSP) Compatibility** issues for `style-src`. Also addressed different scenarios like `Inline Styles Tooltips`, `Inline CSS` in `Radial Charts`, and `Inline CSS` for styling tables in `Draggable column 2D` charts.
- Resolved an accessibility issue where the tab took focus to the overall chart area instead of the `chart-plot` when the chart did not have a first x-axis value.
- Fixed an issue where `Multie-Pie` charts were not resizing correctly without applying a re-render.
- Addressed an issue where the **watermark** from the map was not removed on the application of a valid license key for chart type: `maps/france2016`.
- Resolved an issue in the `legend-item.js` file where the `legendData` object properties were not passed to the `getAnchorProps` function causing it to apply the same properties to every legend item, regardless of the data.
- Fixed the issue of specific series not getting highlighted in **Crossline tooltip** when `applycsstransform` attribute was set to 1.
- Fixed the issue where hovering over the dataplot, the tooltip showed incorrect values when the cursor moved out of the plot area for `scrollbar2d` chart when `drawCrossLine` is enabled for `scrollbar2d` chart and `scroll Stacked` bar charts.


