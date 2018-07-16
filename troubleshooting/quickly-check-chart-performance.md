---
permalink: troubleshooting/quickly-check-chart-performance.html
title: Quickly check Chart Performance | FusionCharts
description: When building charts with FusionCharts Suite XT, if you run into errors, you can use our troubleshooting to trace such errors
heading: Quickly check Chart Performance
chartPresent: false
---

Often, you want to measure the charts rendering time in order to check its performance. Check this using the Javascript method `performance.now()`, which needs to be called on FusionCharts `beforeInitialize` and `renderComplete` API events. Make sure `animation` attribute is set to `0` while performing.

Refer to our sample [fiddle](http://jsfiddle.net/fusioncharts/L690pznj/ '@@open-newtab').

Note that performance of your charts varies depending on system configurations.