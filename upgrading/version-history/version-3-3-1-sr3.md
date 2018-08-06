---
title: Version 3.3.1 SR3 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.3.1 SR3.
heading: Version 3.3.1 SR3
---

## FusionCharts XT
**18th November, 2013**

### Improvements

* FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

* Gradient legend is now more responsive to user interactivity on touch devices.

* Data label (value) positioning is improved in line and area charts for cleaner and uncluttered visualization.

* Legends in pie charts, when placed on right, is now aligned with the center of the pie.

### Fixes

* Fixed issues with unexpected thick borders and other graphic artefacts appearing on Chrome version 29 and above.

* Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

* Fixed the issue of color aberration in 3D columns rendered with shadow in Safari 7.

* Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

* Fixed runtime error in 2D pie charts with a single slice and hidden data label.

* Labels of cumulative values in stacked column charts are now correctly positioned.

* Positioning fix of data labels (values) of 100% stacked column 2D chart for points having zero (0) as value.

* Data plot rendering issue for zero sum value is fixed for 100% stacks in stacked column charts.

* Issue with vLine positioning is fixed in Marimekko chart.

* Minor fix in lighting effect on canvas base of 3D charts.

* Label for inclined trend line is made to reflect proper value when placed on right side of the canvas.

* Fixed issue of tooltip in ZoomLine charts being visible even after a series is hidden.

* Non-rotated x-axis labels are no longer overlapped in ZoomLine chart.

* Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

## FusionWidgets XT
**18th November, 2013**

### Improvements

* FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

* Gradient legend is now more responsive to user interactivity on touch devices.

* Data label (value) positioning is improved in gauges for cleaner and uncluttered visualization.

* Unify behavior to not include color range limits while calculating the scale limits in any gauge.

### Fixes

* Fixed issues with unexpected thick borders and other graphic artefacts appearing on Chrome version 29 and above.

* Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

* Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

* Real time charts show correct y-axis limits post chart resize.

* Missing plot border is added in Funnel and Pyramid charts for 2D mode.

* Initial animation issue in Bulb gauge is fixed.

* Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

* Tooltip of gauges now have shadows enabled by default. Can be turned off using chart attributes.

* Data value label alignment issue related to the left margin of the chart is rectified in Cylinder and Thermometer gauges.

## PowerCharts XT
**18th November, 2013**

### Improvements

* FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

* Gradient legend is now more responsive to user interactivity on touch devices.

### Fixed

* Fixed issues with unexpected and thick borders and other graphic artefacts appearing on Chrome version 29 and above.

* Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

* Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

* Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

* Reversed plotting for data in a specific range is fixed in log charts.

* Fixed mapping issue of task id in Gantt chart.

* Data in Drag-Node chart is set to reflect dynamically added connectors.

* Minor fix in Heat Map chart to show bottom-right label properly.

* Fixed automatic setting of y-axis limits in CandleStick chart.

* Fixed Multi-Axis Line chart to match visibility of any axis to that of its check-box.

* Fixed issue with hidden axis limits in LogMSLine chart.

* Multi-Axis Line chart is fixed to show/hide an axis via check box in absence of legend.

* Fixed the rendering issue of missing level in Multi-Level Pie chart when value is set to zero in a lone child category.

* Fixed the runtime error on edit of axis limits in drag-able charts.

## FusionMaps XT
**18th November, 2013**

### Improvements

* FusionCharts export servers are now SSL enabled to allow seamless exporting of maps rendered inside SSL secured pages.

* Gradient legend is now more responsive to user interactivity on touch devices.

### Fixes

* Fixed issues with unexpected and thick borders and other graphic artefacts appearing on Chrome version 29 and above.

* Fixed the issue where on printing maps in IE8 and below, the tooltips were also getting printed along with the maps.

* Fixed issue with tooltip text being incorrectly wrapped when maps are resized.

* Plugged memory leakage caused while managing text wrapping when maps are repeatedly resized.

* Removed custom id validations as it was not adding any significant value to the id management. Maintaining the validity and uniqueness of custom id is now the user's responsibility.