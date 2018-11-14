---
permalink: troubleshooting/quickly-check-chart-performance.html
title: Quickly check Chart Performance | FusionCharts
description: The time it takes for a chart to be rendered properly can be measured to gauge the performance of the chart. This page shows how.
heading: Quickly check Chart Performance
chartPresent: false
---

Often, you want to measure the charts rendering time in order to check its performance. Check this using the Javascript method `performance.now()`, which needs to be called on FusionCharts `beforeInitialize` and `renderComplete` API events. Make sure `animation` attribute is set to `0` while performing.

Refer to our sample [fiddle](http://jsfiddle.net/fusioncharts/L690pznj/).

Note that performance of your charts varies depending on system configurations.