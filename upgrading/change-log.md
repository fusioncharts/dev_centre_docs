---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.15.x
---
<h2 class="sub-heading">Version 3.15.2</h2>

<p class="release-date">14th July, 2020</p>

<h4>Fixes</h4>

- In Marimekko chart, using `yAxisValueDecimal` now works properly when `setAdaptiveYMin` and `forceYAxisValueDecimals` are enabled.

- Decimal and thousand separator attributes now work properly on Marimekko chart.

- For all 2D and 3D bar chart variants, the `fontSize` attribute now works properly when set with a numeric value. Earlier a JS error was thrown.

- The task labels are now displayed properly in Gannt charts and are available on further horizontal scrolling. Previously, the task label overlapped with the vertical scroll bar.

- The attribute `seriesname` of a dataset is now working properly for charts rendered in IE 11 browser. Earlier, the usage of 1 {br} tag was considered as 2 {br} tags in IE 11 browser.

- The event handlers `chartRollOver` and `chartRollOut`are now working properly when multiple charts are present on a web page. Earlier, upon multiple instances of hover over each other one of the charts stopped invoking the hover events and threw a JS error.

- When using stacked charts, the macros `$sum` and `$unformattedSum` are now working properly for customized tooltips.Previously, the `$sum` and `$unformattedSum` macros were returning an incorrect value.

- The "%" symbol is now displayed properly in situations where the trendline value coincides with the div line value of the yAxis of 100percent stacked charts. Earlier the "%" symbol was not visible in such situations.


<h4>Improvements</h4>

- The space between legend items has been decreased in order to provide an improved visualization of data plots.

- When exporting spark charts to a CSV file, the exported csv data displays now displays column headers. Previously, the header was not included in the CSV file.

- Plot events and tooltips work properly with CSS 2D transformations like `rotate`, `skew`, `skewX`, `skewY`, `matrix`, or any combination of them.

- Crossline tooltips on `zoomLine` and `zoomLineDY` charts now display sorted values in decreasing order.

- Using the `isRaw` boolean property `getJSONData()` and `getChartData()` now return property names in the same format as defined in the dataSource.

- The space between legend items has been decreased in order to provide an improved visualization of data plots.


<h2 class="sub-heading">Version 3.15.1-sr.1</h2>

<p class="release-date">17th March, 2020</p>

<h4>Fixes</h4>

- Change in license agreements.

<h2 class="sub-heading">Version 3.15.1</h2>

<p class="release-date">26th February, 2020</p>

<h4>New Features</h4>

- FusionCharts now supports the open source Ionic framework, which lets you develop mobile user interfaces with a native look and feel. You can now add interactive charts to any Ionic Framework project using the bindings available for different platforms ([React](/getting-started/ionic-framework/ionic-framework-using-react) and [Angular](/getting-started/ionic-framework/ionic-framework-using-angular)) supported by FusionCharts.

- The scrollbar has been [decoupled from the xAxis](/chart-guide/chart-configurations/axes#decouple-scrollbar-from-x-axis) and can now be placed away from it.

- Legends can now be positioned anywhere within the chart canvas - [left, right, top, bottom](/chart-guide/chart-configurations/legend#set-the-legend-position), etc. Legends can also be positioned with absolute coordinates (x, y).

<h4>Improvements</h4>

- The `textOutline` attribute can now be applied to data labels across [Sunburst](/chart-guide/standard-charts/sunburst-chart#increase-chart-label-visibility), Sankey, and Chord diagrams, to improve visibility.

- The number of [rows in a legend](/chart-guide/chart-configurations/legend#set-number-of-rows-columns-in-the-legend) can now be defined. Earlier, only the number of columns could be defined.

- New macros have been added to Error Bar 2D, Error Line, and Error Scatter charts. Click [here](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros) to get the list of newly added macros.

- When the Candlestick, Treemap, Gantt, and Select Scatter charts are exported in CSV or XLSX format, the exported files now display the chart data correctly.

- When a Bubble chart is exported in XLSX format, the exported file now includes a column with the plot labels, to help you comprehend the data better. Earlier, this column was not included in the XLSX file.

- Multi-level Pie Charts exported in XLSX formats now include data values along with categories. Earlier, only the categories were presented in the exported file.

- Passing JS methods inside `label` attribute no longer throw alert boxes along with error messages on the browser console. Earlier, on changing '%26lt;' to '<' and '%26gt;' to '>' was displaying an error message and throwing multiple alert boxes. It helps in reducing vulnerability attacks.

- In this version, 11 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-15-1) to get the list of updated maps.

<h4>Fixes</h4>

- X-axis labels are now displayed properly when they are rotated, base font size is set, and the legend is displayed to the right. Earlier, in similar situations, chart canvases with a width greater than 650 pixels would show partially truncated labels for specific base font sizes.

- The `dataLabelRollOver` event was also getting triggered when the cursor was hovered over y-axis values. Previously it used to happen for both xAxis and yAxis labels.

- The attributes `labelXPadding` and `labelYPadding` are now working properly in the Heat Map chart. They were not working earlier.

- Hand cursor is now displayed properly when the `link` attribute is used in a chart and the cursor is hovered over data plots and data values. Earlier, the hand cursor was not displayed when the cursor was hovered over the data values.

- When using `batchExport`, if the chart height or width is set to 100% and the chart is exported as an image, then the image is properly visible. Earlier, the image was not visible in such situations.

- The `widthPercent` attribute is now working properly in Marimekko charts. Earlier, in category objects, the attribute was not working, and all the categories were being assigned equal widths.

- In Scatter charts, when the `drawQuadrant` attribute is used and the legend is used to turn off all the series and then turn them back on, the quadrants are now being redrawn correctly. Earlier, the quadrants were not being redrawn.

- In a Chord diagram, when a long label is provided with label position set as `tangential`, then `chordRadius` is maintained. Earlier, in similar situations, the value assigned to `chordRadius` would be ignored and the radius would be set to the default value.

- When you render a Chord chart with long label texts without setting `caption` and `subcaption`, the label texts now correctly show ellipses. Earlier, in similar situations, ellipses were not being displayed.

- In a Chord diagram, node labels are now displayed properly in Internet Explorer 11. Earlier, the `nodeLabelPosition` attribute was not working properly in IE11. When the value of `nodeLabelPosition` was set to `outside`, the label would overflow into the node and when it was set to `inside`, the padding of the label would disappear. The issue has now been fixed.

- When the `nodeToggling` attribute is used in a Chord diagram and the legend is used to turn off nodes and turn them back on, the nodes are displayed properly. Earlier, the nodes were not displayed when they were turned back on using the legend.

- `getJSONData()` and `getXMLData()` APIs no longer return unnecessary nested objects with extra attributes, such as `isRootNode`.

- In chart events, "pixelHeight" and "pixelWidth" attributes now correctly display the values of the chart height and the chart width respectively. Earlier, these attributes were getting their values swapped.

- When the `beforeDraw` and `drawCancelled` events are used together, they are only being triggered once, as intended. Earlier, they were being triggered twice when the chart was rendered.

- The zero plane is no longer visible over the plots in Multi-series Combination Dual Y-axis 3D chart. Earlier, it was overlapping the data plots.

- `tooltipBorderRadius` attribute is now working properly in Heat Map charts in all browsers. Earlier, the attribute was not working on any chart. However, please note that this attribute does not work in Internet Explorer 8, as the browser does not support rounded edges of tooltip borders set using CSS.

- In Bubble charts, vertical lines with thickness greater than 2 are now rendered within the chart canvas. Earlier, these lines would overlap out of the chart canvas.

- In realtime charts, clicking on the Stop Update menu item no longer makes the menu unclickable on Internet Explorer.

- Previously, on chart update the sum values of the stacked chart could not be removed. The issue has now been fixed.

- In the pyramid and funnel charts, updating the theme now works perfectly. Earlier, doing so would throw a JS error.

- In Multi-series 3D charts, when the value of the attribute `use3DLighting` is set to `0` and the value of `alpha` is set to `0` at `data` level, the plots are now rendered correctly. Earlier, in such situations, the plots would not be visible.

- Setting the value of the `cylScale` attribute to `0` in a Cylinder gauge, the browser console no longer displays JS errors.

- The position of data values are no longer changed when anchor size is changed in StackedArea2D & RealTimeStackedArea charts. Earlier, the values would disappear when anchor size was increased.

- Export menus in charts can now be selected in IE8. Earlier, the menu items were unclickable on the browser.

<h2 class="sub-heading">Version 3.15.0-sr.1</h2>

<p class="release-date">6th December, 2019</p>

<h4>Fixes</h4>

- The APIs `getJSONData()` and `getXMLData()` now work properly in Sunburst charts. Previously, these were erroneously returning nested objects, such as subcategories along with categories.

<h2 class="sub-heading">Version 3.15.0</h2>

<p class="release-date">5th December, 2019</p>

<h4>New Features</h4>

- FusionCharts Version 3.15.0 introduces 3 new chart types - the Sankey Diagram, the Sunburst Chart, and the Chord Diagram. All of these charts belong to PowerCharts XT.

  - The [Sankey Diagram](/chart-guide/standard-charts/sankey-diagram) is a type of flow diagram, which depicts the flow of resources from one point to another.

  - The [Chord Diagram](/chart-guide/standard-charts/chord-diagram) is a graphical method of displaying flows or connections among relatable entities.

  - The [Sunburst Chart](/chart-guide/standard-charts/sunburst-chart) helps in visualizing relationships within hierarchical data. It displays hierarchy through a series of concentric rings, each of which corresponds to a different level within the hierarchy.

- Starting v3.15.0, [scrolling](/chart-guide/standard-charts/box-and-whisker-chart#specify-visibility-of-categories) can be enabled in the box and whisker chart. You can use `numVisiblePlot` attribute to control the number of plot points visible on the chart canvas.

- The `min`, `q1`, `median`, `q3`, `max`, `mean`, `median`, `md`, `sd`, and `outlier` of the [box and whisker](/chart-guide/standard-charts/box-and-whisker-chart#specifying-pre-processed-data) chart can now be directly mentioned within the data object. So from now on, box and whisker chart can be used in two ways:

  - Provide values and expect the chart to determine the summarised values.

  - Provide summarised values to a box and whisker plot.

<h4>Improvements</h4>

- In Treemap, the attribute `navigationBarHeight` can now be used to control the height of the navigation bar of the chart after drill down.

- The following improvements have been made to the **Box and Whisker** chart:

  - Data values (mean, MD, SD, QD, and outlier) can now be displayed along with icons using the following attributes:

    - `showMeanValue`

    - `showMDValue`

    - `showSDValue`

    - `showQDValue`

    - `showOutlierValue`

  When any of the above attributes are explicitly enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

  - Position of the values (mean, MD, SD, QD, and outlier) can now be displayed either **above** or **below** the data plot using the following attributes:

    - `meanValuePosition`

    - `MDValuePosition`

    - `SDValuePosition`

    - `QDValuePosition`

    - `outlierValuePosition`

  - Custom border colors can now be assigned to the icons (for mean, MD, SD, QD, and outlier) using the following attributes:

    - `meanIconBorderColor`

    - `MDIconBorderColor`

    - `SDIconBorderColor`

    - `QDIconBorderColor`

    - `outlierIconBorderColor`

    Previously, only the default black border was visible for the above icons.

- In Radar Charts, long labels and the chart border were displaced when the `radarRadius` was explicitly mentioned and the chart was resized. This version onwards, the chart has been optimized for resizing, to ensure such issues no longer occur.

- In this version, 31 core map files have been updated. Click [here](/upgrading/maps-improvement/maps-improvement-3-15-0) to get the list of updated maps.

<h4>Fixes</h4>

- In a box and whisker chart, when hovered over an icon (for mean, MD, SD, QD, or outlier) where `meanIconShape`, `MDIconShape`, `SDIconShape`, `QDIconShape`, or `outlierIconShape` is set to **spoke**, the spokes now get highlighted properly.

- In Doughnut chart, the `$label` macro is now working properly for the `centerLabel` attribute.

- Pie and Doughnut charts now use canvas space more effectively.

- In Pie and Doughnut charts, the `tooltipBorderRadius` attribute now works properly.

- In a Gantt chart, when the width was set in percentage and the `scrollToDate` attribute was used, resizing the browser changed the start date in the chart. The issue has been fixed.

- The data object attribute, when set to `visible` for the events `legendItemRollover` and `legendItemRollout`, was showing incorrect value. The issue has been fixed.
