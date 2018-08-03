---
title: Version 3.2.2 SR3 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.2 SR3.
heading: Version 3.2.2 SR3
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 12th March, 2012

## FusionCharts

### New Features

* Support for JavaScript Pie 3D and Doughnut 3D charts

* Ability to control number formatting for Indian and East Asian thousand/lac separation formats

* Support for recursive number scaling to display the chart data better

### Improvements

* Considerable reduction of memory leaks upon resize, data-update and disposal of charts

* Text-selection (I-beam) cursor does not appear now when hovered over text

* JavaScript Bubble charts now correctly clips all out-of-canvas data-points using the `clipBubbles` attribute

* JavaScript Pie and Doughnut charts now supports dashed plot borders

* Enhancements in JavaScript Zoom Line chart which includes:

    * Pin Mode

    * Better management of x-axis data labels

    * Icons for Zoom-Out, Reset and Pin Mode

### Fixes

* `ExportReady` event not being raised in advanced event model

* Erratic ordering of Legend icons in Chrome

* `connectNullData` attribute not working as expected in JavaScript Zoom Line charts

* Stray anchors being visible in JavaScript Zoom Line charts

* `toolText` attribute being ignored at `<set ... />` level in JavaScript Zoom Line charts

* The loss of pie slice animation when Pie charts are resized

* Trendline values being plotted on incorrect axis on JavaScript dual-axis charts

* JavaScript Zoom Line chart not plotting data-points whose values are equal to `yAxisMaxValue`

* plotBorderDashed not being effective on JavaScript Pareto charts