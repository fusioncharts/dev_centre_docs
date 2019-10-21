---
title: Version 3.4.x | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.4.x.
heading: Version 3.4.x
---

<h2 class="sub-heading">Version 3.4.1</h2>

<p class="release-date">26th September, 2014</p>

<h4 class="sub-heading">Improvements</h4>

- Zero JavaScript memory leak while disposing a chart.

- Support for attribute `refreshInstantly` in real-time charts and gauges.

- Support for providing data directly as `min`, `max`, `q1`, `q2`, `q3` etc in Box And Whisker charts.

- Addition of the newly formed Telangana (India) state map.

<h4>Fixes</h4>

- Support added for exporting charts having radial gradients in VML browsers.

- Links on pie based charts now work on touch devices.

- `dataCount` value calculation in alert manager has been fixed.

- `setTransparent` method fixed to set container background transparent.

- ID based realtime update now works in AngularGauge.

- Added support for `borderColor` and `borderAlpha` attributes in <color> tag of HLinearGauge.

- `bubbleHoverAlpha` attribute works with `use3dlighting` set to 0 and `plotFillHoverColor` applied.

- Configuring HTML class of FusionCharts root DOM element is now allowed.

- Radar Chart's data value now supports `baseFontSize` attribute.

- No default space is allocated when `showLabels` is set to 0 and `labelDisplay` is set to `stagger` or `None`.

- Fixed border color related issues for IE8 browser, when `bgColor` for data values / axis names are defined.

- Fixed behavior of `defaultMarkerShape` attribute.

- Removed overlap of `xAxisLabels` with the x-Axis with large font sizes.

- Attribute `valueBgColor` works perfectly for lengthy values in the chart.

- Improved compatibility with Prototype.js.

- Added support for data value cosmetic attributes `valueFont`, `valueFontSize`, and `valueFontBold` for Radar charts.

- Internet Explorer 8 now supports ZoomLine chart.

- Added support for slicing of Pie charts on touch devices.

- Better rendering of Box and Whisker charts negative data values.

- Zoomline chart now displays cross hair on touch devices.

- FusionCharts now works on Firefox v3.0.

- FusionCharts is now compatible with AMD based module loaders like RequireJS.

<h2>Version 3.4.0</h2>

<p class="release-date">16th June, 2014</p>

<h4 class="sub-heading">Key Changes</h4>

- Rendering supported in Javascript only, support for rendering in Flash deprecated.

- Significant improvement in chart rendering time.

- Dependency on jQuery removed leading to reduction in JavaScript code footprint.

- New developer friendly documentation introduced for the JavaScript only API.

- Theme manager added to allow easy application of presentation features across charts.

- Annotation engine added to allow addition of text and shapes on chart.

- Additional events available for deeper integration of charts with applications.

- Support for hover effect on all common charts.

- Support for macro variables in tool tips to update content dynamically.

- Data enabled markers supported for maps.

- Selectively render axis lines.

- New JavaScript helper methods added.

<h4>Improvements</h4>

- Cleaner legend keys across all charts.

- Option to hide specific datasets upon chart initial load, which can be shown by user upon clicking legend key.

- Pie and doughnut charts can now be configured to allow slicing of only one pie/doughnut slice at most.

- Doughnut charts can now contain a dynamic center label, which can be configured per doughnut slice.

- Better export server hosted by FusionCharts, for export of charts as image/PDF.

- Support for palette ThemeColors across the suite, allowing you to define a list of colors for use by data plots.

- Support for automatic ellipses and wrapping in ZoomLine charts.

- Anchors in sparkline charts now support the hover effect.

- New attributes for anchors to better configure their display.

- Support for tool-tips for the connectors in the Drag Node charts.

- Support for path in annotations.

- Unification of limit calculation in gauges, which was earlier bound by color-range minimum or maximum values.

- Aesthetics of axis, data plot, anchors etc.

<h4>Fixes</h4>

- The `*divlinealpha*` attribute now works in Google Chrome

- Real-time charts render with the correct `*yAxis-max`\* value after resizing

- Alpha attribute is not working for set level in candlestick charts.

- Alpha property works in the 2D mode of Bubble charts.

- Background color can be applied to `*tlLabel`*, `*trLabel`*,`_blLabel`_, and `*brLabel`\* in Heat Map charts.

- Bar plots are properly aligned w.r.t. base line in VML browsers.

- Chart logo is no longer clipped in scroll charts.

- clickURL works when any chart button / context menu is clicked.

- Commas in a data-stream in realtime charts do not break it.

- Compatibility issues with Base2-p.js fixed.

- Custom entity stroke thickness fixed in VML browsers.

- Distortion fixed in line chart in VML when `*connectNullData='0'*`.

- Font related styles can no longer be inherited in charts from external sources.

- FusionCharts works correctly on Firefox 3.0+.

- Gantt charts don't throw js errors when a task's `*endValue`* is less than its `*startValue`\*.

- Gantt charts now render when setting `*showStartDate='0'`\* in VML browsers.

- Gradient element with id containing a capital letter now works fine.

- Pointer is now positioned correctly for the zero value if scale starts from a negative value in linear gauges.

- _`setXmlUrl`_ and `*setJSONUrl`\* now work fine in IE11 after render.

- In Pie/Doughnut charts, a link can be activated by right click also.

- Plot shadows, when hidden, are no longer visible in VML for Column, Pie, Area type charts.

- Positioning of plot sum labels in Stacked Bar charts now fixed.

- JavaScript API `*setZoomMode(*)` now works in JS Zoomline chart.

- Label of sum no longer overshoots for the first stack in stacked charts.

- Log Column charts plot data correctly when values are less than 0.99.

- Fixed gradient references in RedRaphael when URL is changed dynamically.

- Multi-line labels in vline now position properly.

- Tooltips on Pie charts on touch devices like iPad now fixed.

- Quadrant labels in Scatter/Bubble charts are not visible in VML.

- Rotated x-axis labels have been fixed.

- Setting `*divLineAlpha=>50`\* now works properly.

- _`yaxisMaxValue`_ now works correctly for Stacked Real-time charts.

- Text is not misplaced in exported images on VML browser.

- Trendline's `*displayValue` \*attribute now parses {br} in Gantt.

- Vertical positioning of caption and sub-caption in IE 9, 10.

- Placement of cross hair of Zoomline charts in light-box in IE is fixed.

- Z-position issue fixed in context menu and tooltip when a chart is rendered in ExtJS.

- Zoom line charts pin mode now works fine.

- _`showLimits="0"`_ does not crash LogMSLine chart.

- tooltext is now working in maps.

- Linear gauge hover effect for attribute `*pointerHoverRadius`\* does not works as intended.

- Hover related anchor properties now inherit values from non-hover state in line/area charts.

- _`$xDataValue`_, `*$xValue`_, `_\$yDataValue`*, and`_\$yValue`_ tooltip macros work for Select Scatter charts.

- _`$volumeValue`_ and `*$volumeDataValue`\* functionality is now swapped.

- _`$taskStartDate`_ and `*$taskEndDate`\* are now working.

- _`$horizontalErrorPercent`_ and `*$verticallErrorPercent`\* are not working.

- _`$fromXValue`_, `*$fromXDataValue`_, `_\$fromYValue`*,`_\$fromYDataValue`_, `*$toYValue`_, `_\$toYDataValue`*,`_\$toXValue`_, `*$toXDataValue`_, `_\$fromLabel`* and`_\$toLabel`_ are working.

- _`$cumulativePercentDataValue`_ is now working.

- The functionality for `*$closeValue`_ and `_\$closeDataValue`\* has been swapped.

- _`plotToolText`_ attribute is now working in dataset tag for most of the MS charts.

- Candlestick chart throwing JS error with blank datasets now fixed.
