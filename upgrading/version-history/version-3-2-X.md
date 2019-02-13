---
title: Version 3.2.x | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.x.
heading: Version 3.2.x
---

<h2 class="sub-heading">Version 3.2.2 SR5</h2>

<h4 class="sub-heading">FusionCharts XT (1st November, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- JavaScript Zoom Line chart now supports Log Axis.

- JavaScript Zoom Line chart now supports `numVisibleLabels` attribute.

- Scrollable charts can now be scrolled on touch devices by swiping over the canvas area.

- Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

<h4>Improvements</h4>

- Long tool tips in Flash Zoom Line chart are now wrapped automatically.

- Data parser now automatically removes trailing spaces from data values.

- Data labels can now be shown individually using the `showLabels` attribute in the `<set>` element in Pie or Doughnut charts.

- Enhanced space management while using the `plotSpacePercent` attribute in Flash 3D Column and 3D Bar charts.

- Enhanced visibility of the data values in Flash Stacked Bar 2D chart.

- Better handling of quotes in `FusionCharts.php`.

<h4>Fixes</h4>

- jQuery 1.8 compatibility issues.

- Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

- Exporting issues related to JavaScript LinkedCharts.

- Minor fix in label position while using stagger label display mode.

- Minor fix related to legend interactivity in JavaScript charts.

- Minor fix related to displacement of dataplot in Line and Area charts.

- Issues related to floating point number calculations while setting axis limits in Stacked charts.

- Disappearing legend issue in Flash Scatter chart when `anchorSides` is less than 3.

- Flash LinkedCharts overlay button does not disappear anymore while exporting.

- Links are no longer invoked when mouse is dragged onto Flash chart from foreign elements.

- Bold and Italics styles can now be applied to tool tips.

- Gradient colors can now be applied to dataplots in Flash MSCombi2D and MSCombiDY2D charts using the `color` attribute in the `<dataset>` element.

- Axis limits can now be explicitly defined in Marimekko chart while not using percentage distribution.

- `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

- JavaScript charts now export the current state of the charts.

- `getDataAsCSV` now works in JavaScript Dual Y-Axis charts and Multi-series Stacked charts.

- `showZeroPlaneValue='0'` now hides the zero value even when zero plane is not explicitly drawn in Flash Zoom Line and MSCombi3D charts.

<h2>Version 3.2.2 SR4</h2>

<h4 class="sub-heading">FusionCharts (6th August, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- JavaScript Pie and Doughnut charts slices move in or out when respective labels and connector lines are clicked.

- Stacked charts now can display data values in percentage using the `showPercentValues` and `showPercentinTooltip` attributes.

<h4>Improvements</h4>

- Anchors in Flash charts turn circle when anchor sides are less than 3.

- Y-Axis Name of Flash Zoom Line chart now supports Shadow, Glow, Bevel and Blur style.

- Chart Loading messages in JavaScript charts can be now configured using of `configure()` function.

- Drawing improvement for all JavaScript 3D charts.

<h4>Fixes</h4>

- Unable to set a custom thousands separator for Flash charts.

- Flash charts hang when accented characters are passed to the charts through the URL of the data source.

- Disabled tooltip shadow is getting enabled when Flash charts are reloaded.

- Disparity in the display of shadow across all Flash Bar charts.

- Incorrect decimal places are shown for divisional-line values in Flash charts.

- The value of the `plotSpacePercent` attribute is not getting applied as expected in Flash 3D charts.

- Text in Zoom Line chart does not support `{br}` pseudo code.

- Trendlines in Flash Zoom Line chart fail to show tooltips.

- Flash Zoom Line chart crashes when axis type is set as 'log' and a dataplot is set as zero.

- Flash Zoom Line chart's line with discontinuous data cannot be pinned.

- JavaScript Zoom Line chart miscalculates `displayStartIndex` & `displayEndIndex` attributes.

- Hidden anchors reappear when mouse hovers over JavaScript Zoom Line chart.

- Interactive legend items are not working when the anchors are disabled using `drawAnchors="0"` for JavaScript Zoom Line chart.

- Runtime error in JavaScript Zoom Line chart when category labels are hidden.

- Legend items are displayed in reverse order for JavaScript Pie 3D and Doughnut 3D charts.

- Data labels of Flash Pie and Doughnut charts do not support `{br}` pseudo code.

- JavaScript Pie and Doughnut charts do not save slice-state upon chart resize.

- JavaScript Pie or Doughnut charts with a single slice are unable to calculate the starting angle.

- Unable to show individual slice labels, when all labels are hidden using `showLabels="0"` in the `<chart>` element for JavaScript Pie and Doughnut charts.

- Runtime error on clicking slices of Pie 3D or Doughnut 3D charts under certain circumstances.

- Runtime error when JavaScript Pie or Doughnut charts have no data value to plot but the `pieYScale` attribute is set through the `<chart>` element.

- Flash Pareto 3D chart with two data plots hides the data labels.

- Cumulative Line in Flash Pareto charts becomes distorted under certain conditions.

- Summation values are going outside the canvas area in JavaScript Marimekko charts.

- `plotFillColor` attribute is not working for Flash Area charts.

- Plot border is visible even if `showPlotBorder` is set to 0 in JavaScript Multi-series charts.

- Incorrect ordering of Legend items in JavaScript Combination charts.

- Unable to render dashed lines using `lineDashed="1"` through the `<chart>` element in Flash Combination charts.

- Unable to create individual dashed line-segments in JavaScript Single-series Line charts.

- The `lineColor` attribute in the `<chart>` element is not working for Flash Combination charts.

- X-Axis category labels in Scatter chart are overlapping in Flash charts.

- Same value for the `xAxisMinValue` attribute and the x value for a category in Scatter chart results in wrong data representation.

- The `decimals` attribute fails to work in JavaScript 100% Stacked charts.

- Minor rendering issue with Multi-series Column 3D chart.

<h2>Version 3.2.2 SR3</h2>

<h4 class="sub-heading">FusionCharts (12th March, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- Support for JavaScript Pie 3D and Doughnut 3D charts

- Ability to control number formatting for Indian and East Asian thousand/lac separation formats

- Support for recursive number scaling to display the chart data better

<h4>Improvements</h4>

- Considerable reduction of memory leaks upon resize, data-update and disposal of charts

- Text-selection (I-beam) cursor does not appear now when hovered over text

- JavaScript Bubble charts now correctly clips all out-of-canvas data-points using the `clipBubbles` attribute

- JavaScript Pie and Doughnut charts now supports dashed plot borders

- Enhancements in JavaScript Zoom Line chart which includes:

  - Pin Mode

  - Better management of x-axis data labels

  - Icons for Zoom-Out, Reset and Pin Mode

<h4>Fixes</h4>

- `ExportReady` event not being raised in advanced event model

- Erratic ordering of Legend icons in Chrome

- `connectNullData` attribute not working as expected in JavaScript Zoom Line charts

- Stray anchors being visible in JavaScript Zoom Line charts

- `toolText` attribute being ignored at `<set ... />` level in JavaScript Zoom Line charts

- The loss of pie slice animation when Pie charts are resized

- Trendline values being plotted on incorrect axis on JavaScript dual-axis charts

- JavaScript Zoom Line chart not plotting data-points whose values are equal to `yAxisMaxValue`

- plotBorderDashed not being effective on JavaScript Pareto charts

<h2>Version 3.2.2 SR2</h2>

<h4 class="sub-heading">FusionCharts (25th January, 2012)</h4>

<h4 class="sub-heading">Improvements</h4>

- Style support added for legend items. (Limited to font color and size only)

- Word-wrapping for labels now include hyphen while deciding line-breaks.

- Better and automatic handling of `"slicingDistance"` attribute of Pie and Doughnut charts.

- Added new chart attributes `"enableSlicing"` for Pie and Doughnut charts for better interactivity control.

- Addition of new attribute `"anchorStartAngle"` for all line and area based charts that has anchors.

- ZoomLine chart now has a "zoom out" button and the reset text-based link has been replaced with a button.

- Resolved compatibility issues in tool-tip positioning and gradient rendering caused by jQuery 1.7.1

- Setting `labelDisplay='none'` turns off x-axis value stepping and allows labels to overlap.

<h4>Fixes</h4>

- Drawing issue on 3D stacked column charts where a point had "zero" value.

- ZoomLine chart legend items unexpectedly breaking into multiple lines.

- Support for valuePosition at `<set>` level for line and area based charts.

- ZoomLine animations not being turned off.

- Pie and Donut charts getting clipped by half when it had a single data-point.

<h4>FusionWidgets (1st November, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- JavaScript Real-time charts now show context menu to start, stop and clear chart updates.

- New jQuery API to manage Real-time charts.

- Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

<h4>Improvements</h4>

- Normalized the default font sizes of caption and sub-caption in Flash Funnel, Pyramid and Real-time charts.

- JavaScript Real-time charts now render with smoother visualization and better performance.

- Enhanced management of the open, close, high and low anchors in Spark Line chart.

<h4>Fixes</h4>

- jQuery 1.8 compatibility issues.

- Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

- Exporting issues related to JavaScript LinkedCharts.

- Minor fix in label position while using stagger label display mode.

- Minor fix related to legend interactivity in JavaScript charts.

- Minor fix to improve auto-calculation of axis limits in JavaScript Real-time Stacked charts.

- Minor fix related to displacement of dataplot in Line and Area charts.

- Flash LinkedCharts overlay button does not disappear anymore while exporting.

- Links are no longer invoked when mouse is dragged onto chart from foreign elements.

- Real-time JavaScript charts no longer display redundant divisional grid color during real-time data update.

- A single dataplot in JavaScript Spark Win/Loss chart no more spreads across the total canvas height.

- `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

- JavaScript charts now export the current state of the charts.

- Data labels of JavaScript Real-time charts are now properly visible in the exported images/PDF.

- `Alpha` is now correctly applied when defined through `colorRange` in Flash Bulb gauge.

- Pointer and trend-point labels are now positioned correctly in JavaScript HLinear Gauge.

- Bold and Italics styles can now be applied to tool tips in Flash charts.

- Flash Real-time charts can now display multiple `vLines`.

<h2>Version 3.2.2 SR1</h2>

<h4 class="sub-heading">FusionCharts (25th November, 2011)</h4>

<h4 class="sub-heading">Fixes</h4>

- Data loading and rendering issues specific to Internet Explorer 6/7/8

- iOS gradient issue

- Disappearing 'close' button in LinkedCharts (JavaScript chart)

- Minor fix related to displaying sum in JavaScript scroll stacked charts

- Minor fix related to tool-tip when dataplot alpha is set to 0 in all line and area charts

- Minor fix in Zoom Line chart's dynamic resizing module

- Minor fix for `yAxisNameWidth`, `pYAxisNameWidth` and `sYAxisNameWidth`

- Minor fix in .NET wrapper (FusionCharts.dll)

<h4>FusionWidgets (April 24th, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- Support for real-time JavaScript charts that include

  - Real-time Line chart

  - Real-time Area chart

  - Real-time Column chart

  - Real-time Stacked Area chart

  - Real-time Stacked Column chart

  - Real-time Dual Y-Axis Line chart

- Ability to control number formatting for [Indian and East Asian thousand/lac separation formats](http://docs.fusioncharts.com/widgets/Contents/Advanced/NumberFormat/Basics.html#thousandSeparatorPosition)

<h4>Improvements</h4>

- Considerable reduction of memory leaks upon resize, data-update and dispose of charts

- Text-selection (I-beam) cursor does not appear when hovered over text

<h4>Fixes</h4>

- ExportReady event not being raised in advanced event model

<h4>PowerCharts (1st November, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- JavaScript Multi-axis Line chart now supports shifting of axes upon clicking.

- Ability to configure zero-plane attributes within the `<axis>` elements in JavaScript Multi-axis Line chart.

- Option to disable automatic adjustment of divisional lines using `adjustDiv='0'` for individual axes in JavaScript Multi-axis Line chart.

- Support to configure cosmetics of lines associated with each axis through the `<axis>` element in JavaScript Multi-axis Line chart.

- Multi-level Pie chart now supports Number Formatting, Number Scaling and Recursive Number Scaling.

- Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript charts.

<h4>Improvements</h4>

- Enhanced label management in Radar chart.

- Enhanced mouse interactivity in JavaScript Multi-level Pie chart.

- Added support for tool tip formatting chart attributes for JavaScript Multi-level Pie chart.

- Improved space management and shadow effects in JavaScript Multi-level Pie chart.

- JavaScript Multi-axis Line chart now supports divisional line configuration on per-axis level.

- Enhanced space management to avoid overlapping Y-Axis values in JavaScript Multi-axis Line chart.

- JavaScript Multi-axis Line chart now supports axis check-boxes and the `allowSelection` attribute to control the check-boxes.

<h4>Fixes</h4>

- jQuery 1.8 compatibility issues.

- Mixed content browser warning on Internet Explorer when using charts within secured (https) pages.

- Exporting issues related to JavaScript LinkedCharts.

- Minor fix in label position while using stagger label display mode.

- Minor fix in Flash Drag-node chart related to the visibility of a node.

- Minor fix related to legend interactivity in JavaScript charts.

- Minor fix in axis number formatting of Flash Multi-axis Line chart.

- Minor fix in label position in Flash Multi-level pie chart.

- Minor fix in `xAxisName` position in Flash Heat Map chart.

- Minor fix related to displacement of dataplot in Line and Area charts.

- Minor fix related to drawing of axis limit ticks in JavaScript Multi-axis Line chart.

- Flash LinkedCharts overlay button does not disappear anymore while exporting.

- Links are no longer invoked when mouse is dragged onto chart from foreign elements.

- Label in image-node no more hides behind the image in Drag-node chart.

- Blank tool tip box no longer appears when category label is not defined in Flash Multi-level Pie chart.

- Tool tip separator character is no longer shown in JavaScript Multi-level Pie chart when data value is not provided.

- Error bars are no longer drawn when error values are not provided in JavaScript ErrorBar2D and ErrorLine charts.

- `setAdaptiveYMin` now remains disabled by default in Flash charts when all the values are negative.

- JavaScript charts now export the current state of the charts.

- `showDivLineValues='1'` now works as expected in conjunction with `showYAxisValues='0'` in JavaScript Multi-axis Line chart.

- `forceDecimals` is now correctly applied to the values of the first `<dataset>` in JavaScript Multi-axis Line chart.

- JavaScript links using `j-` or `JavaScript:` is now functional in Multi-level Pie Chart.

- Drill-down links now work correctly in JavaScript Heat Map chart.

- JavaScript ErrorBar2D and ErrorLine charts now include X-Axis labels in tool tips.

- Legend in JavaScript Heat Map chart can now be disabled under all conditions.

- Bold and Italics styles can now be applied to tool tips.

- Dataplots now correctly associate with corresponding icon legends with respect to legend interactivity in Flash Heat Map chart.

<h4>FusionMaps (16th November, 2012)</h4>

<h4 class="sub-heading">New Features</h4>

- Ability to turn off url-decoding of links using the `unescapeLinks` attribute in JavaScript maps.

<h4>Improvements</h4>

- Kosovo added in World with Countries, Europe and Europe (With islands) maps.

- South Sudan added in World with Countries and Africa maps.

- Faroe island updated as a part of Denmark in Europe map.

- Correction of entity definitions for numerous maps.

<h4>Fixes</h4>

- jQuery 1.8 compatibility issues.

- Exporting issues related to JavaScript LinkedCharts.

- Mixed content browser warning on Internet Explorer when using maps within secured (https) pages.

- Minor fix related to legend interactivity in JavaScript maps.

- Minor fix related to loading of chart or map SWF files while using LinkeCharts feature.

- Links are no longer invoked when mouse is dragged onto map from foreign elements.

- Flash LinkedCharts overlay button does not disappear anymore while exporting.

- Bold and Italics styles can now be applied to tool tips.

- JavaScript maps now export the current state of the maps.

<h2>Version 3.2.1</h2>

<h4 class="sub-heading">FusionCharts (6th October, 2010)</h4>

- Added `useEllipsesWhenOverflow` attribute to <chart> element that controls whether ellipses are to be used in chart labels

- Marimekko chart now supports the new legend

- Bug fix in label rendering mechanism of line and area charts, where last label was getting lesser space in rotated mode

- Changes in FusionCharts JavaScript class:

  - Improvements in JSON transcoder

  - Support for font manipulation and STYLE manipulation when rendering JavaScript charts

  - Customization of y-axis min and max values in JavaScript rendering

  - Compatibility with older PowerCharts and FusionWidgets

  - Removal of `swfUrl` as compulsory construction parameter

  - Additional cosmetic changes when using JavaScript rendering

<h4>PowerCharts (30th July, 2012)</h4>

<h4 class="sub-heading">Fixes</h4>

- `ExportReady` event not being raised in advanced event model.

- Erratic ordering of Legend icons in Chrome.

- Data loading and rendering issues specific to Internet Explorer 6/7/8.

- iOS gradient issue.

- Disappearing 'close' button in LinkedCharts (JavaScript chart).

<h4>Improvements</h4>

- JavaScript Multi-level pie, Multi-axis line, Candlestick, Waterfall charts are improved.

- Rally and Decline cosmetics are now configurable.

- Considerable reduction of memory leaks upon resize, data-update and dispose of charts.

- Text-selection (I-beam) cursor does not appear now when hovered over text.

- Text wrapping for labels in JavaScript charts.

<h4>New Features</h4>

- All the charts now render in pure JavaScript also. New charts in JavaScript include:

  - Heat Map, Box and Whisker, Kagi, Select Scatter, Drag Node, Drag Column, Drag Line and Drag Area.

- JavaScript charts look almost similar to Flash charts.

- JavaScript Drag Node chart, Drag Column, Drag Area and Drag Line support:

  - Drag and selection interactivity.

  - Data submission to a server side script.

- JavaScript Drag Node chart supports live addition and modification of nodes, connectors and labels.

- Enhanced label management in all charts to avoid overlapping of labels when there are large labels or many of them.

- Image can now be used to fill the chart background in different modes with custom alignments.

- Ability to center the x-axis and y-axis titles with respect to chart area.

- Scatter charts support regression lines and configuration for x-axis number formatting, vertical division lines, grids and zero plane.

- Support for auto generation of x-axis in Scatter charts.

- Ability to control number formatting for Indian and East Asian thousand/lac separation formats.

- Support for recursive number scaling to display the chart data better.

- jQuery plugin to render and manage charts using jQuery syntax.

<h2>Version 3.2.0</h2>

<h4 class="sub-heading">FusionCharts (6th October, 2010)</h4>

- Automatic rendering of JavaScript charts on devices (like iPad and iPhone) where Flash player is not supported

- 6 new chart types:

  - 2D Pareto Chart

  - 3D Pareto Chart

  - Marimekko Chart

  - 2D Stacked Column Line (Single Y axis)

  - 3D Stacked Column Line (Single Y axis)

  - Zoom Line Chart with scrolling and pinning support

- Support for JSON data format

- Support for linked charts, where a single data source controls multiple charts

- Interactive legends in charts that allow for selective showing/hiding of data series (or slicing in case of pie charts)

- Legends now support icons for each data series

- Pie and doughnut charts now support legend

- Stacked charts now support 100% stacked mode

- Bubble and Scatter charts can now have visual quadrants with labels

- Better management of labels on charts. Labels now have an auto rendering mode in which they do not overlap. Additionally, x-axis labels now support ellipses and tool-tips on shortened labels.

- Support for line breaks and wrapping in all text elements including: caption, sub caption, X-axis title, Y-axis title, Labels and tooltips.

- In Line charts, data values can now be positioned either above or below the dataplots. Automatic positioning of data values is also supported.

- Custom alignment of caption and sub caption using STYLES

- Adjustment of minimum Y-axis value in stacked charts now supported

- Advanced print management using JavaScript

- Additional options for efficient event handling using JavaScript

- Support for dynamic update of chart properties using JavaScript

- Charts now support % based sizes along with dynamic resizing

<h4>FusionWidgets (January 24th, 2012)</h4>

- Automatic rendering of JavaScript charts (except Gantt and Real-time charts) and gauges on devices where Flash player is not supported (like iPad and iPhone)

- Support for JSON data format

- Support for LinkedCharts, where a single data source controls multiple charts

- Advanced print management using JavaScript

- Additional options for efficient event handling using JavaScript

- Support for dynamic update of chart properties using JavaScript

- Better management of the position of labels in charts and gauges

- Long labels are truncated to prevent cropping of labels or cluttered looks

- Charts/gauges now support percentage (%) based sizes along with dynamic resizing when parent containers resize

- Background image can now be used to fill the chart in different modes, and custom alignment is possible

- Annotations can now be positioned using Macros - variables with dynamic values

- A real-time chart can now ask for instant update when the chart loads (using refreshInstantly='1' in <chart> element)

- Real-time stacked charts now support 100% stacked mode

- Adjustment of minimum Y-axis value in stacked charts now supported

- In Line charts, data values can now be positioned either above or below the dataplots. Automatic positioning of data values is also supported.

- Custom alignment of caption and sub caption using Styles

- Added option to set round edge effect to all charts having columns

<h4>PowerCharts (14th January, 2011)</h4>

- Maximum value of all the Color Ranges is now included in the highest Color Range

- Individual entity label can not be shown when all labels are hidden from the `<map>` element using `showLabels='0'`

- Entity Definition does not change short name or long name when same `internalId` and `newId` is provided

<h4>Deprecated</h4>

- Use of `FusionMaps.js` as the JavaScript Wrapper class to render map.

- Use FusionCharts JavaScript Class (`FusionCharts.js` and supportive JavaScript modules) instead.

- Use of `FusionMapsExportComponent.js` is deprecated.

- Use `FusionChartsExportComponent.js` instead.

- Use of `FusionMaps.asp`, `FusionMaps.php`, `FusionMaps.dll` (or the sources `FusionMaps.cs`, `FusionMaps.vb`) are deprecated.

- Use `FusionCharts.asp`, `FusionCharts.php`, `FusionCharts.dll` (or the sources `FusionCharts.cs`, `FusionCharts.vb`)

- Use of various XML and JavaScript APIs as listed [here](http://docs.fusioncharts.com/maps/Contents/?introduction/UpgradingXT.html#deprecatedxt).

<h4>FusionMaps (30th July, 2012)</h4>

<h4 class="sub-heading">Fixes</h4>

- `ExportReady` event not being raised in advanced event model.

- Erratic ordering of Legend icons in Chrome.

- Data loading and rendering issues specific to Internet Explorer 6/7/8.

- iOS gradient issue.

- Disappearing 'close' button in LinkedCharts (JavaScript chart).

<h4>Improvements</h4>

- `FCMap_Netherland.swf` is renamed to `FCMap_Netherlands.swf`

- `FCMap_NorthIreland.swf` is renamed to `FCMap_NorthernIreland.swf`

- Recreated maps of Scotland (`FCMap_Scotland.swf`) and Poland Counties (`FCMap_PolandCounties.swf`)

- Option to show and hide individual label of entity (along with label connector line - if any)

- Option to set hover color for individual entity

- Option to hide or show tool tip for individual entity and connector

- Option to set a map title and sub-title using `caption` and `subCaption` attributes

- Option to position map title using `captionPoistion` attribute

- Option to set a different cosmetic (`color` and `alpha`) for the entities with no value

- Option to set hover color for individual entity

- Option to disable hover color for individual entity

- Option to hide common entity border using `showBorder = '0'`

- `exportdataready` event returns more number of properties as event argument

- Set default polygon shape to circle when sides are less than 3

- Correction of entity long names for numerous maps as listed [here](http://docs.fusioncharts.com/maps/Contents/?introduction/UpgradingXT.html#definitions)

- "China-2" map has been renamed to "China (With Direct-controlled municipalities and Special administrative regions)"

<h4>New Features</h4>

- Automatic rendering of JavaScript maps on devices (like iPad and iPhone) where Flash player is not supported

- Use of FusionCharts JavaScript class (`FusionCharts.js`) to render and manage maps

- Support for JSON data format

- Support for LinkedCharts, where a single data source controls multiple maps

- Color-range based interactive legends that allow selective showing/hiding of map entities

- Interactive gradient legend to show/hide entities

- Advanced print management for Flash Maps in non-Internet Explorer browsers

- Additional options for efficient event handling using JavaScript

- Introduced click, roll-over and roll-out events for Markers and Connectors

- Introduced click event for Legend items

- Support for dynamic update of map properties using JavaScript

- Dynamic resizing of maps when parent containers resize

- Image can now be used to fill the map background in different modes with custom alignments

- Ability to control number formatting for Indian and East Asian thousand/lac separation formats

- Support for recursive number scaling to display the map data better

- jQuery plugin to render and manage maps using jQuery syntax

- 2 new maps added in the Core Map Pack:

  - World Map with Antarctica (`FCMap_WorldWithAntarctica.swf`)

  - World Map (8 Regions) with Antarctica (`FCMap_World8WithAntarctica.swf`)
