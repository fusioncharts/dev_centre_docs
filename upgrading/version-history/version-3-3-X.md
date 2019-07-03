---
title: Version 3.3.x | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.3.x.
heading: Version 3.3.x
---

<h2 class="sub-heading">Version 3.3.1 SR3</h2>

<h4 class="sub-heading">FusionCharts XT (18th November, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

- Gradient legend is now more responsive to user interactivity on touch devices.

- Data label (value) positioning is improved in line and area charts for cleaner and uncluttered visualization.

- Legends in pie charts, when placed on right, is now aligned with the center of the pie.

<h4>Fixes</h4>

- Fixed issues with unexpected thick borders and other graphic artefacts appearing on Chrome version 29 and above.

- Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

- Fixed the issue of color aberration in 3D columns rendered with shadow in Safari 7.

- Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

- Fixed runtime error in 2D pie charts with a single slice and hidden data label.

- Labels of cumulative values in stacked column charts are now correctly positioned.

- Positioning fix of data labels (values) of 100% stacked column 2D chart for points having zero (0) as value.

- Data plot rendering issue for zero sum value is fixed for 100% stacks in stacked column charts.

- Issue with vLine positioning is fixed in Marimekko chart.

- Minor fix in lighting effect on canvas base of 3D charts.

- Label for inclined trend line is made to reflect proper value when placed on right side of the canvas.

- Fixed issue of tooltip in ZoomLine charts being visible even after a series is hidden.

- Non-rotated x-axis labels are no longer overlapped in ZoomLine chart.

- Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

<h4>FusionWidgets XT (18th November, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

- Gradient legend is now more responsive to user interactivity on touch devices.

- Data label (value) positioning is improved in gauges for cleaner and uncluttered visualization.

- Unify behavior to not include color range limits while calculating the scale limits in any gauge.

<h4>Fixes</h4>

- Fixed issues with unexpected thick borders and other graphic artefacts appearing on Chrome version 29 and above.

- Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

- Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

- Real time charts show correct y-axis limits post chart resize.

- Missing plot border is added in Funnel and Pyramid charts for 2D mode.

- Initial animation issue in Bulb gauge is fixed.

- Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

- Tooltip of gauges now have shadows enabled by default. Can be turned off using chart attributes.

- Data value label alignment issue related to the left margin of the chart is rectified in Cylinder and Thermometer gauges.

<h4>PowerCharts XT (18th November, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- FusionCharts export servers are now SSL enabled to allow seamless exporting of charts rendered inside SSL secured pages.

- Gradient legend is now more responsive to user interactivity on touch devices.

<h4>Fixed</h4>

- Fixed issues with unexpected and thick borders and other graphic artefacts appearing on Chrome version 29 and above.

- Fixed the issue where on printing charts in IE8 and below, the tooltips were also getting printed along with the charts.

- Fixed issue with tooltip text being incorrectly wrapped when charts are resized.

- Plugged memory leakage caused while managing text wrapping when charts are repeatedly resized.

- Reversed plotting for data in a specific range is fixed in log charts.

- Fixed mapping issue of task id in Gantt chart.

- Data in Drag-Node chart is set to reflect dynamically added connectors.

- Minor fix in Heat Map chart to show bottom-right label properly.

- Fixed automatic setting of y-axis limits in CandleStick chart.

- Fixed Multi-Axis Line chart to match visibility of any axis to that of its check-box.

- Fixed issue with hidden axis limits in LogMSLine chart.

- Multi-Axis Line chart is fixed to show/hide an axis via check box in absence of legend.

- Fixed the rendering issue of missing level in Multi-Level Pie chart when value is set to zero in a lone child category.

- Fixed the runtime error on edit of axis limits in drag-able charts.

<h4>FusionMaps XT (18th November, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- FusionCharts export servers are now SSL enabled to allow seamless exporting of maps rendered inside SSL secured pages.

- Gradient legend is now more responsive to user interactivity on touch devices.

<h4>Fixes</h4>

- Fixed issues with unexpected and thick borders and other graphic artefacts appearing on Chrome version 29 and above.

- Fixed the issue where on printing maps in IE8 and below, the tooltips were also getting printed along with the maps.

- Fixed issue with tooltip text being incorrectly wrapped when maps are resized.

- Plugged memory leakage caused while managing text wrapping when maps are repeatedly resized.

- Removed custom id validations as it was not adding any significant value to the id management. Maintaining the validity and uniqueness of custom id is now the user's responsibility.

<h2>Version 3.3.1 SR2</h2>

<h4 class="sub-heading">FusionCharts XT (28th May, 2013)</h4>

<h4 class="sub-heading">Fixes</h4>

- Fixed runtime error in Stacked charts with `null` values

- Minor fix in visualization of Pie 2D chart with thick plot border

- External images are no longer included in the export stream

- Minor fix while exporting charts to PDF in Internet Explorer 9+

- Pie and Doughnut charts now correctly invoke legend-click event

- Slice index order for `togglePieSlice()` in Pie and Doughnut charts is corrected

- Terminal data labels are now visible in 3D Stacked column charts in all dimensions

- Tooltip now correctly shows category labels when `showLabel='0'` is set to `<category>`

- Pie and Doughnut charts no longer crashes when insignificant values are passed as data

- The positive sense of rotation for `startingAngle` in Pie 2D and Doughnut 2D charts is corrected

- Caption and sub-caption are now centrally aligned with respect to chart's background in Pie and Doughnut

<h4>FusionWidgets XT (28th May, 2013)</h4>

<h4 class="sub-heading">Fixes</h4>

- Fix related to the visibility of Message Logger

- Fixed runtime error in Stacked charts with `null` values

- External images are no longer included in the export stream

- Minor fix while exporting charts to PDF in Internet Explorer 9+

- Fixed runtime error in Angular gauge when trendline marker tooltip is defined

- Tooltip now correctly shows category labels when `showLabel='0'` is set to `<category>`

<h4>PowerCharts XT (28th May, 2013)</h4>

<h4 class="sub-heading">Fixed</h4>

- Dataplot links now works as expected in Kagi chart

- External images are no more included in the export stream

- Minor fix related to visibility of Radar plot in Internet Explorer

- Minor fix related to displacement of line when dragged in DragLine chart

- Minor fix while exporting charts and gauges to PDF in Internet Explorer 9+

- Tooltip now correctly shows category labels when `showLabel='0'` is set to `<category>`

<h4>FusionMaps XT (28th May, 2013)</h4>

<h4 class="sub-heading">Fixes</h4>

- External images are no more included in the export stream

- Minor fix while exporting maps to PDF in Internet Explorer 9+

<h2>Version 3.3.1 SR1</h2>

<h4 class="sub-heading">FusionCharts XT (18th April, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Ability to convert HTML Table to chart using jQuery plugin.

<h4>Improvements</h4>

- Optimized rendering of line charts.

<h4>Fixes (18th April, 2013)</h4>

- Hot-fix in VML Rendering Library.

- Trendline labels for Secondary Y-Axis are now positioned correctly.

<h4>FusionWidgets XT (18th April, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Added two new events taskClicked and connectorClicked for JavaScript Gantt chart.

<h4>Improvements</h4>

- Optimized rendering of line charts.

<h4>Fixes</h4>

- Hot-fix in VML Rendering Library.

- Trendline labels for Secondary Y-Axis are now positioned correctly.

<h4>PowerCharts XT (18th April, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Ability to convert HTML Table to chart using jQuery plugin.

<h4>Improvements</h4>

- Optimized rendering of line charts.

<h4>Fixes</h4>

- Hot-fix in VML Rendering Library.

- Trendline labels for Secondary Y-Axis are now positioned correctly.

- Trendzones are now correctly drawn in inverse charts.

<h4>FusionMaps XT (18th April, 2013)</h4>

<h4 class="sub-heading">Fixes</h4>

- Hot-fix in VML Rendering Library.

<h2>Version 3.3.1</h2>

<h4 class="sub-heading">FusionCharts XT (4th April, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- JavaScript Pie and Doughnut 3D Charts no longer crash on Blackberry OS 10.

- `displayValue` attribute now works within `<set>` element of JavaScript Bubble chart.

- Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

- Minor fix for shadow not being clipped during initial animation of JavaScript Stacked Area charts.

- `showPercentInTooltip` attribute now displays percent value in tooltip when set as 1 in JavaScript Stacked charts.

- `manageLabelOverflow` attribute will now work properly when set along with `baseFontSize`, in JavaScript charts.

- Fixed runtime error of JavaScript Bar charts with certain combination of `maxLabelWidthPercent` attribute and long data labels.

<h4>Improvements</h4>

- Improved pin feature for JavaScript ZoomLine chart.

<h4>Fixes</h4>

- JavaScript Pie and Doughnut 3D Charts no longer crash on Blackberry OS 10.

- `displayValue` attribute now works within `<set>` element of JavaScript Bubble chart.

- Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

- Minor fix for shadow not being clipped during initial animation of JavaScript Stacked Area charts.

- `showPercentInTooltip` attribute now displays percent value in tooltip when set as 1 in JavaScript Stacked charts.

- `manageLabelOverflow` attribute will now work properly when set along with `baseFontSize`, in JavaScript charts.

- Fixed runtime error of JavaScript Bar charts with certain combination of `maxLabelWidthPercent` attribute and long data labels.

<h4>FusionWidgets XT (4th April, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Support for JavaScript variant of Gantt Chart having new features like:

  - Vertical scrolling.

  - Mouse hover or touch effect on tasks, connectors, processes, categories.

- Support for Message logger in JavaScript Realtime charts and gauges.

- Added `showOnTop` attribute to display the trendline on top or bottom of the dataplots in Flash Spark Column/Line charts.

<h4>Fixes</h4>

- Minor fix in `taskDatePadding` attribute of Flash Gantt chart.

- Minor fix in `width` attribute within `<process>` element of Flash Gantt chart.

- Font cosmetics can now be applied to start and end date within `<tasks>` and `<task>` element of Flash Gantt chart.

- Minor fix in rendering of annotations in iPad.

- Minor fix in data plot representation when `<set>` element has zero value in JavaScript Funnel and Pyramid chart.

- Minor fix for shadow not being clipped during initial animation of JavaScript Real-time Stacked Area charts.

- JavaScript Realtime charts now updates after its container is re-sized.

- Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

- Unspecified values are no longer displayed in JavaScript Win/Loss chart.

- `manageLabelOverflow` attribute now works properly when set along with `baseFontSize`, in JavaScript charts.

<h4>PowerCharts XT (4th April, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- Improved X-Axis calculation in Flash Candlestick chart.

- Better positioning of min and max values in JavaScript BoxAndWhisker2D chart.

<h4>Fixes</h4>

- `legendPosition='right'` now works in Flash Candlestick chart.

- `showYAxisValues='1'` now enables Y-Axis values in JavaScript Drag-node chart.

- Label text does not display `undefined` while deleting a label in JavaScript Drag-node chart.

- `plotBorderColor` attribute now works in Spline Area and MSSpline Area charts.

- Minor fix related to rendering of plot in JavaScript Spline charts.

- Long captions are now aligned properly in Flash charts.

- `manageLabelOverflow` attribute now works properly when set along with `baseFontSize`, in JavaScript charts.

- Minor fix in legend icon color when legend position is right in JavaScript BoxAndWhisker2D chart.

- Minor fix in positioning of data values in JavaScript BoxAndWhisker chart.

- Minor fix in data plots when `useRoundEdges='1'` in JavaScript Logarithmic charts.

- Minor fix in the drawing of Trendzone in JavaScript Inverse charts.

- Trendline `displayValue` no longer dislocates on using `endValue` attribute in JavaScript Inverse charts.

- Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

<h4>FusionMaps XT (4th April, 2013)</h4>

<h4 class="sub-heading">Improvements</h4>

- Improved legend interactivity in JavaScript maps.

- Better label management for marker labels in Flash Maps.

<h4>Fixes</h4>

- Minor fix in rendering of tooltip and hover event related issues in JavaScript Maps.

- Minor fix in the functioning of `scale` attribute when `radius` is provided within `<shape>` element of JavaScript Maps.

- JavaScript functions as links for entities are no longer invoked twice when entity labels having connector lines are clicked.

- Corrected entity id for 'Cuyuni-Mazaruni' (GY.CU) regions of Guyana map and 'Central' (ZM.CE) province of Zambia map.

- Fixed runtime errors in VML browsers when shadow is enabled in JavaScript Maps.

- Minor fix in markers when shape type is `arc` in JavaScript Maps.

- Inner radius of `arc` shape is fixed within `<marker>` element in JavaScript Maps.

- `manageLabelOverflow` attribute now works properly when set along with `baseFontSize`, in JavaScript maps.

<h2>Version 3.3.0</h2>

<h4 class="sub-heading">FusionCharts XT (30th January, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Links are no more invoked in drag events for Flash charts.

- Common alpha can be set on gradient colors in Flash charts.

- Minor fix in displaying thin slices of JavaScript Pie 3D and Pie 2D charts.

- Minor fix related to displacement of data plot in JavaScript Line and Area charts.

- Minor fix related to `maxLabelWidthPercent` attribute in JavaScript Bar charts.

- Summation values are now positioned correctly in JavaScript MSStacked charts.

- Fix related to tooltip of Zoomline chart being displayed outside the canvas in Flash.

- Minor fix related to `numVisiblePlot` in Flash Scroll Combination Dual Y 2D chart.

- Minor fix in displaying data labels and tooltip when null values are passed to JavaScript Marimekko charts.

- `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts.

<h4>Improvements</h4>

- Better and crisp visualization of JavaScript charts.

- Added support to customize export related context-menu items of JavaScript charts.

- Improvement in dataset order for JavaScript MSBar2D and MSBar3D charts.

- JavaScript SSGrid chart now supports export feature.

<h4>Fixes</h4>

- JavaScript Pie and Doughnut 3D Charts no longer crash on Blackberry OS 10.

- `displayValue` attribute now works within `<set>` element of JavaScript Bubble chart.

- Minor fix in rendering of canvas shadow while using `useRoundEdges='1'` in VML Browsers.

- Minor fix for shadow not being clipped during initial animation of JavaScript Stacked Area charts.

- `showPercentInTooltip` attribute now displays percent value in tooltip when set as 1 in JavaScript Stacked charts.

- `manageLabelOverflow` attribute will now work properly when set along with `baseFontSize`, in JavaScript charts.

- Fixed runtime error of JavaScript Bar charts with certain combination of `maxLabelWidthPercent` attribute and long data labels.

<h4>FusionWidgets XT (30th January, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Exported JavaScript charts and gauges can now be saved to a server (using PHP and JAVA).

<h4>Improvements</h4>

- Better and crisp visualization of JavaScript charts and gauges.

- Improved display of low and high anchors in Spark Line chart.

- Added support to customize export related context-menu items of JavaScript charts and gauges.

- Default value of `refreshInterval` attribute for Real-Time charts is set to 1 second.

<h4>Fixes</h4>

- Links are no more invoked in drag events for Flash charts and gauges.

- Common alpha can be set on gradient colors in Flash charts and gauges.

- Minor fix for `yAxisMinValue` in Flash Real-time Stacked charts.

- Minor fix in overlapping of divisional line labels for Flash Real-time charts.

- Minor fix for `sFormatNumberScale` in Flash Real-time Dual Y-Axis charts.

- `showFullDataTable='1'` now works correctly in `<process>` element of Flash Gantt chart.

- Trendlines now appear behind the data plots when `showOnTop='0'` in JavaScript Real-time charts.

- Minor fix related to displacement of data plot in JavaScript Real-time Line and Real-time Area charts.

- `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts and gauges.

- Chart API and context menu items are now functioning as expected after exporting in JavaScript Real-Time charts.

<h4>PowerCharts XT (30th January, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- Exported JavaScript charts can now be saved to a server (using PHP and JAVA).

- Ability to show X-Axis labels on top of the chart canvas in Heat Map chart.

<h4>Improvements</h4>

- Better and crisp visualization of JavaScript charts.

- Major improvement in the visualization of JavaScript CandleStick chart.

- Improved drawing of JavaScript LogMSColumn2D chart in inverse mode.

- Added support to customize export related context-menu items of JavaScript charts.

<h4>Fixes</h4>

- Links are no more invoked in drag events for Flash charts.

- Common alpha can be set on gradient colors in Flash charts.

- Minor fix in axis number formatting of Flash Multi-Axis Line chart.

- Minor fix related to visibility of nodes in Flash Drag-node chart.

- `bgColor` of label now occupies the whole node in Flash Drag-node chart.

- Minor fix in displaying upper limit values of JavaScript Drag-able charts.

- Minor fix in the position of data values in JavaScript LogMSColumn2D chart.

- Font Style can now be applied to data labels in JavaScript Multi-Level Pie chart.

- Minor fix related to displacement of data plot in JavaScript Line and Area charts.

- Minor fix in padding attribute in the `<label>` node of JavaScript Drag-node chart.

- Dashed styles can now be applied to individual plots of JavaScript Multi-Axis Line chart.

- Minor fix in determining the max or min value of the color range in JavaScript Heat Map chart.

- Tooltip box does not appear any more when category value is null in JavaScript MultiLevelPie chart.

- `getSVGString()` and `exportChart()` can now be invoked multiple times in JavaScript charts.

<h4>FusionMaps XT (30th January, 2013)</h4>

<h4 class="sub-heading">New Features</h4>

- 430 new maps added.

- Four new additional packs.

- New attributes to configure marker cosmetics in Flash map:

  - `markerFillColor`

  - `markerFillAlpha`

  - `markerFillRatio`

  - `markerFillAngle`

  - `markerBorderAlpha`

- Support for radius and shapeId attributes in marker definition node in Flash maps.

- Markers can now be auto-scaled when a Flash map is resized setting `autoScaleMarkers='1'`.

- Exported JavaScript maps can now be saved to a server (using PHP and JAVA).

<h4>Improvements</h4>

- `displayValue` and `maxValue` attributes are now calculated from `<colorRange>` element when single color gradient is used in Flash Maps.

- Added support to customize export related context-menu items of JavaScript maps.

<h4>Fixes</h4>

- Minor fix in space management for legend in Flash maps.

- Flash maps now displays entity names properly in Apple Mac.

- Entity labels are now click-able to allow drill down  in Flash maps.

- Minor fix related to the position of `Gradient-Legend` pointer in Flash charts.

- `exportChart()` can now be invoked multiple times in JavaScript maps.

- Fix related to disparity between Flash maps and JavaScript maps with respect to their boundaries.

- Flash World with Countries map no more returns `"Null"` as the DOMId through `FC_Rendered event`.
