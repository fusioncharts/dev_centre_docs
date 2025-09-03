---
title: What's New | FusionCharts
description: This section discusses the new features introduced in the latest version.
heading: What's New
---

This section is for users using the previous version of FusionCharts in their application. Here, we'll talk about the new features introduced in v4.2.x.

## New `ignoredepthforlineplots` Attribute

FusionCharts version 4.2.0 introduces the `ignoredepthforlineplots` attribute, which avoids issues when plot lines should change appearance from 3D to 2D.  

This addition can be used when hiding column plots and leaving a single line plot in an `mscolumn3dlinedy` or `stackedcolumn3dlinedy` chart. The line appears as a 2D line, rather than in 3D.

## Inverse Y-axis for Scatter and Bubble Charts

FusionCharts release 4.2.0 introduces support for a new feature that allows users to invert the **X** and **Y** axes for `Scatter` and `Bubble` Charts, improving user experience and customization through the **X** and **Y** axes. This facilitates users in spotting trends or patterns from a different perspective.

This feature gives users better control over data display, particularly for datasets where natural ordering, such as descending values or negative/positive axes, is important.

## React Native WebView Improvements

This release added an explicit Webpack public path assignment, which, if undefined by the user, gets defined as an empty string. This ensures that the chart is rendered unaffected in **React Native WebView** across all mobile platforms. 

Additionally, this release updated the FusionCharts library version to 4.2.0-alpha.0 in `react-native-fusioncharts` to be compatible with the latest React Native version. 

## Upgraded SDKs and Support for Third-Party Integrations

FusionCharts 4.2.0 enhanced support for third-party tools and libraries to better and safer user experience:

- C#: Upgraded to v2 major version, now supporting **.NET 9**.
- Python: Upgraded to v2 major version, now supporting **Python 3.13.5** and **Django 5.2.4**.
- Java: Upgraded to v2 major version, now supporting **Java 24**.
- Upgraded `react-fusioncharts` integration supports the latest version of **React v19**.
- Upgraded `vue-fusioncharts` integration supports the version **Vue 3.5.17**.
- Upgraded `angular-fusioncharts` integration supports **Angular v20**.

These updates aim to provide a more seamless experience for improved compatibility, performance, and access to the latest features across all platforms.
