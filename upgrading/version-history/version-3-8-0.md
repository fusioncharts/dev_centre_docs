---
title: Version 3.8.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.8.0.
heading: Version 3.8.0
---

<p class="release-date"> 21st July, 2015 </p>

#### New Features

- The following attributes have been added to customize the legend icon shape:

  - `drawCustomLegendIcon`

  - `legendIconBorderColor`

  - `legendIconBgColor`

  - `legendIconAlpha`

  - `legendIconBgAlpha`

  - `legendIconSides`

  - `legendIconBorderThickness`

  - `legendIconStartAngle`

- Client-side export feature has been enabled for the Google Chrome and Mozilla Firefox browsers.

- This allows the user to export a chart directly from the browser, thus eliminating the turnaround time of sending chart data to the FusionCharts export server and wait for the converted data to be received.

#### Improvements

- The following attributes have been included for configuring the text rendered with trend-lines:

  - `trendValueFont`

  - `trendValueFontSize`

  - `trendValueFontBold`

  - `trendValueFontItalic`

  - `trendValueBgColor`

  - `trendValueBorderColor`

  - `trendValueAlpha`

  - `trendValueBgAlpha`

  - `trendValueBorderAlpha`

  - `trendValueBorderPadding`

  - `trendValueBorderRadius`

  - `trendValueBorderThickness`

  - `trendValueBorderDashed`

  - `trendValueBorderDashLen`

  - `trendValueBorderDashGap`

- The following attribute has been added to Spline chart to draw spline with low tendency factor

  - `minimizeTendency`

#### Fixes

- Y-axis labels, in bar charts with height less than a certain threshold, are now automatically skipped when they start overlapping.

- For bar charts with long labels along the y-axis, if the chart was rendered with a very small dimension (for example, 360 x 260) the labels overlapped. Enabling skipping of labels prevents overlapping.

- Multiple data points having the same value on a spline chart are now connected using lines instead of splines.

- Horizontal lines, and not anchors, are now shown as legend icons in zoom-line charts, when `drawAnchors=0`.

- In the multi-series line chart, if anchors on line segments are hidden, a horizontal line is used as the legend icon. This feature has now been enabled for the zoom-line chart also.

- Radar charts now support axes labels with font size greater than 17.

- To fix this issue, dynamic differential factor calculation has been added. If the line height is more than the allowed height, the vertical difference factor is re-calculated. This gives the user more space to increase the font size. Axis rendering has also been improved to encompass large font sizes.

- However, if the font size is too high, overlapping will be avoided by hiding the text.

- Links configured for node elements in the drag-node chart are now working when `allowDrag=0`.

- `plotBorderAlpha` attribute now overrides the `plotFillAlpha` attribute in the multi-series column 2D chart.

- Alert Manager now includes the minimum and maximum values when matching real-time values against a range.

- Actions to be performed when a real-time data value crosses a predefined threshold are now executed even when the data value is the minimum or maximum value of a range.

- Data points on a scatter chart now render correctly when all x-axis values are same and `showRegressionLine=1`.

- The y-axis is also configured to auto-scale when all data points have the same x-axis values and `showRegressionLine=1`.

- New attribute names for configuring chart messages now work with the `.configure()` method.

- Following are the new attribute names:

  - `dataLoadStartMessage`

  - `dataLoadErrorMessage`

  - `dataInvalidMessage`

  - `dataEmptyMessage`

  - `typeNotSupportedMessage`

  - `loadMessage`

  - `renderErrorMessage`

  - `baseChartMessageFont`

  - `baseChartMessageFontSize`

  - `baseChartMessageColor`

- IE versions 7, 8, and 9 do not throw an 'Invalid Argument' error, if more than 31 FusionCharts chart instances are created. Stylesheet limitations for IE versions 9 and below have now been bypassed for FusionCharts.

- Height of the data table cells in the Gantt chart now updates automatically, based on the custom height defined for process cells.

- The height of the data table cell is same as the height of the corresponding process cell, when `forceRowHeight=1` and custom height is defined for individual processes

- PHP server-side extension now works with older versions of PHP.

- Parse error on the web server because of the new PHP include file has now been fixed.

- `placeValueInside` attribute, for pie and doughnut charts, has been deprecated. In pie 2D charts, when `placeValueInside` is set to 1, data labels are placed inside the pies. Because this is not an intended feature, label management within pie slices is not done.

- Anchors rendered on canvas edges are no longer clipped when the scroll bar is enabled for scroll charts.

- Previously, to prevent this, the number of data points had to be reduced to remove the scroll bars. Any number of data points can now be rendered without having to worry about the anchors getting clipped.

- Automatic value stepping to reduce overlapping of y-axis labels is now working for `setAdaptiveYMin=1`.

- Memory leak in real-time charts fixed.

- A leak in the xAxis code caused event handlers for label elements to be added repeatedly, resulting in the memory leak.

- The memory leak was partially fixed in v3.7.0; further fixes have been made in v3.8.0.

- Abrupt line-breaks in legend icon text (based on smart labels) has been fixed. The problem was fixed by rounding off the calculated width of the legend icon text, in decimals, to the next whole number.

- `dataplotRollOver`, `dataplotRollOut`, and `dataplotClick` events are now triggered for Gantt charts rendered in VML browsers.

- Previously, the events were not triggered for all slack elements of tasks because the event listeners were not getting attached.

- Data points, in Bubble charts, having relatively smaller data values or rendered in low chart dimensions are now visible.

- The attribute minBubbleRadius is used to restrict all bubbles to a minimum radius that allows to make bubbles with very small values visible.

- Visual jerk experienced when a chart's visual state changes (from hidden to visible) has been fixed.

- If the parent container of a chart was hidden by default, the chart calculated its dimension based on the default internal value.

- However, when the chart parent container element was made visible, the chart would have to redraw itself based on the dimensions of the parent container, resulting in a visual jerk. This issue has now been fixed.

- Multiple event invocation for every real-time update in a bulb chart is fixed.
