---
title: What's New | FusionCharts
description: This section discusses the new features introduced in the latest version.
heading: What's New
---

This section is for users using the previous version of FusionCharts in their application. Here, we'll talk about the new features introduced in v4.2.1.

## Improved Horizontal Legend Scrolling

FusionCharts version 4.2.1 improves the behavior of **Horizontal Legend Scrolling** and now works independently from vertical scrolling. This improvement ensures smoother navigation and prevents horizontal scroll actions from unintentionally affecting vertical movement, making chart interaction more intuitive and precise.

## New Axis Domain Padding Controls for TimeSeries Charts

FusionCharts release 4.2.1 introduces support for `maxpadding`, `minpadding`, and `strictpadding` attributes for `TimeSeries` charts, giving you greater control over how axis ranges are displayed.

With strict padding enabled, you can define exact minimum and maximum values, ensuring consistent and predictable axis boundaries. When strict mode is not used, charts continue to apply automatic padding by default, so existing implementations remain unchanged.

## Updated jsPDF Dependency

PDF export capabilities have been improved in this release, updating the **jsPDF** dependency to **v4.0.0**. This upgrade incorporates the latest security improvements while preserving existing PDF generation behavior, ensuring a seamless experience.
