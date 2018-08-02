---
title: Version 3.4.1 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.4.1.
heading: Version 3.4.1
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 26th September, 2014

## Improvements

* Zero JavaScript memory leak while disposing a chart.

* Support for attribute `refreshInstantly` in real-time charts and gauges.

* Support for providing data directly as `min`, `max`, `q1`, `q2`, `q3` etc in Box And Whisker charts.

* Addition of the newly formed Telangana (India) state map.

## Fixes

* Support added for exporting charts having radial gradients in VML browsers.

* Links on pie based charts now work on touch devices.

* `dataCount` value calculation in alert manager has been fixed.

* `setTransparent` method fixed to set container background transparent.

* ID based realtime update now works in AngularGauge.

* Added support for `borderColor` and `borderAlpha` attributes in <color> tag of HLinearGauge.

* `bubbleHoverAlpha` attribute works with `use3dlighting` set to 0 and `plotFillHoverColor` applied.

* Configuring HTML class of FusionCharts root DOM element is now allowed.

* Radar Chart's data value now supports `baseFontSize` attribute.

* No default space is allocated when `showLabels` is set to 0 and `labelDisplay` is set to `stagger` or `None`.

* Fixed border color related issues for IE8 browser, when `bgColor` for data values / axis names are defined.

* Fixed behavior of `defaultMarkerShape` attribute.

* Removed overlap of `xAxisLabels` with the x-Axis with large font sizes.

* Attribute `valueBgColor` works perfectly for lengthy values in the chart.

* Improved compatibility with Prototype.js.

* Added support for data value cosmetic attributes `valueFont`, `valueFontSize`, and `valueFontBold` for Radar charts.

* Internet Explorer 8 now supports ZoomLine chart.

* Added support for slicing of Pie charts on touch devices.

* Better rendering of Box and Whisker charts negative data values.

* Zoomline chart now displays cross hair on touch devices.

* FusionCharts now works on Firefox v3.0.

* FusionCharts is now compatible with AMD based module loaders like RequireJS.