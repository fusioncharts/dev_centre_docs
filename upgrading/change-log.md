---
title: Changelog | FusionCharts
description: This section discusses the change in features and attributes with the latest released version.
heading: Version 4.2.x
---

<h2 class="sub-heading">Version 4.2.0</h2>

<p class="release-date">5th September, 2025</p>

<h4>New Features</h4>

- FusionCharts version 4.2 introduces the `ignoredepthforlineplots` attribute, which, when set to `true`, makes the leftover line plot in an `mscolumn3dlinedy` or `stackedcolumn3dlinedy` chart act as a 2D line. Otherwise, the line continues to appear in 3D.
- FusionCharts version 4.2.0 introduces support for inverse axes in **Scatter** and **Bubble** charts. You can now reverse the **X** and **Y** axes by setting the new attributes `reversexaxis` and `reverseyaxis` to `true` in the chart configuration. 
  
<h4>Improvements</h4>

- Upgraded third-party integrations of C#, Python, and JAVA support to the latest version of the framework:
  - C#: Upgraded to v2 major version, now supporting .NET 9.
  - Python: Upgraded to v2 major version, now supporting Python 3.13.5 and Django 5.2.4.
  - Java: Upgraded to v2 major version, now supporting Java 24.
- Added descriptions and documentation for the `legendWidth` attribute, which allows managing legend width and avoiding unwanted scrollbars on legendbox.
- Added an explicit **Webpack** public path assignment to ensure compatibility in non-browser-like environments such as **React Native WebView**.
- Upgraded third-party integrations support to the latest version of the framework:
  - Upgraded `react-fusioncharts` integration supports the latest version of **React v19**.
  - Upgraded `vue-fusioncharts` integration supports the version **Vue 3.5.17**.
  - Upgraded `angular-fusioncharts` integration supports **Angular v20**.

<h4>Fixes</h4>

- Resolved an **Accessibility** issue where resizing a chart using the Accessibility module changed the focus.
- Fixed an issue where the **Color Range** for maps was not working as expected in the latest version.
- Resolved an issue where the **Hover effect** did not work correctly when having multiple markers in FusionMaps.
- Fixed the issue where the **Legend Caption** exceeded the legend box limit, overlapping with the chart. Also, when using the `chartBottomMargin` attribute, ensure that the value is set to a value higher than 5px; otherwise, the trial watermark and legend will overlap.
- Resolved the issue where **JS** threw an error when opening the popup view in **Scroll** charts. This issue affected the following chart types: `scrollColumn2d`, `scrollBar2D`, `scrollcombi2d`, and `scrollStackedBar2D`.
- FusionCharts version 4.2 resolved an issue where the `displayValue` was unable to render the ampersand (&) symbol in various chart types.
- Resolved an issue that prevented the `react-fusioncharts` component from rendering correctly inside the **shadow DOM**.
- Resolved an issue where **Tooltips** did not display upon hovering over values on an `Errorline` chart. Now, the tooltips are shown as expected.
- Resolved the issue where **ReactJS FusionCharts** did not work as expected when using **StrictMode**. Users using React version 17 can use `react-fusioncharts` version 4.1.0, while those using React version 18 or higher should use the latest `react-fusioncharts` version.


