---
title: Version 3.2.2 SR5 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.2 SR5.
heading: Version 3.2.2 SR5
---

### FusionCharts XT
**1st November, 2012**

### New Features

* JavaScript Zoom Line chart now supports Log Axis.

* JavaScript Zoom Line chart now supports `numVisibleLabels` attribute.

* Scrollable charts can now be scrolled on touch devices by swiping over the canvas area.

* Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

### Improvements

* Long tool tips in Flash Zoom Line chart are now wrapped automatically.

* Data parser now automatically removes trailing spaces from data values.

* Data labels can now be shown individually using the `showLabels` attribute in the `<set>` element in Pie or Doughnut charts.

* Enhanced space management while using the `plotSpacePercent` attribute in Flash 3D Column and 3D Bar charts.

* Enhanced visibility of the data values in Flash Stacked Bar 2D chart.

* Better handling of quotes in `FusionCharts.php`.

### Fixes

* jQuery 1.8 compatibility issues.

* Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

* Exporting issues related to JavaScript LinkedCharts.

* Minor fix in label position while using stagger label display mode.

* Minor fix related to legend interactivity in JavaScript charts.

* Minor fix related to displacement of dataplot in Line and Area charts.

* Issues related to floating point number calculations while setting axis limits in Stacked charts.

* Disappearing legend issue in Flash Scatter chart when `anchorSides` is less than 3.

* Flash LinkedCharts overlay button does not disappear anymore while exporting.

* Links are no longer invoked when mouse is dragged onto Flash chart from foreign elements.

* Bold and Italics styles can now be applied to tool tips.

* Gradient colors can now be applied to dataplots in Flash MSCombi2D and MSCombiDY2D charts using the `color` attribute in the `<dataset>` element.

* Axis limits can now be explicitly defined in Marimekko chart while not using percentage distribution.

* `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

* JavaScript charts now export the current state of the charts.

* `getDataAsCSV` now works in JavaScript Dual Y-Axis charts and Multi-series Stacked charts.

* `showZeroPlaneValue='0'` now hides the zero value even when zero plane is not explicitly drawn in Flash Zoom Line and MSCombi3D charts.