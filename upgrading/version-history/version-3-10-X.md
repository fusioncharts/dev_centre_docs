---
title: Version 3.10.x | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.10.x.
heading: Version 3.10.x
---

<h2 class="sub-heading">Version 3.10.1</h2>

<p class="release-date">21st January, 2016</p>

<h4 class="sub-heading">New Features</h4>

- The attribute `showChildLabels` has been introduced to control the visibility of the node labels in a treemap chart.

- By default, the labels are hidden.

<h4>Improvements</h4>

- 'Squarified' is now the default tiling algorithm for the treemap chart. (Therefore, by default, `algorithm=squarified`).

<h4>Fixes</h4>

- For pie and doughnut charts that have one data value close to 100% of the total of all values, distorted rendering of the chart when smart lines are dragged has been fixed.

<h2>Version 3.10.0</h2>

<p class="release-date">5th January, 2016</p>

<h4 class="sub-heading">New Features</h4>

- FusionCharts Suite XT v3.10.0 introduces support for three new chart types: the treemap chart, the zoom-scatter chart, the zoom-line dual y-axis chart.

  - The treemap chart can be used for analysis of hierarchical information. The chart visualization is modeled on the tree data structure and is rendered using 2D nested rectangles.

  - The zoom-scatter chart is an extension of the scatter chart with the zooming and panning ability for large number of data points and can be used for finding correlations between data sets.

  - The zoom-line dual y-axis chart, an extension of the zoom-line chart, can be used to plot and compare large data sets having different numeric units or different intervals.

- The following new attributes have been added to FusionCharts Suite XT for enabling animation of data plots when the corresponding legend item is clicked:

  - `transposeAnimation`

  - `transposeAnimDuration`

- The following attribute has been introduced to determine the visibility of a data plot, when the chart is first loaded:

  - `visible`

- The functionality of the following existing attributes has also been improved:

  - `use3dLineShift` (the default value has been changed from 0 to 1)

  - `alpha` (setting this attribute to a value more than 0 the attribute now also impacts the transparency of the anchors)

- The `showTerminalValidData` attribute has been introduced for the zoom-line charts.

- Previously, when the zoom-line chart was rendered in the compact mode, the line segment drawn did not include the first and the last valid data values, if the terminal values (the first and the last values) were null and `connectNullData=1`. `showTerminalValidData=1` ensures that the line is drawn from the first valid data value to the last one.

- Corresponding data plots are now highlighted when the mouse pointer is hovered over a legend item. Along with enhancing the visualization, this new feature also enables establishing a relation between the data plots and legends.

<h4>Improvements</h4>

- Chart legend can now extend beyond the canvas width if a chart is used to plot data for a large number of data series.

- Previously, in this case, the legend got wrapped and a scroll bar was rendered to scroll through the legend icons, even though there was enough unused space left.

- Previously, a value placed on the edge was partially hidden. While `chartRightMargin` helped solve the problem, it affected the gauge alignment. The issue has now been fixed.

- The svgDeCanvo library has been built and incorporated into the FusionCharts library. This library:

  - Enables drawing SVG charts directly on the HTML5 Canvas

  - Overcomes the security issues in Internet Explorer for the client-side export feature, so that IE10 and IE11 users can also use this feature

- Data plots in 2D pyramid charts can now be rendered as flat surfaces and in a single color, by setting `is2d=1`.

- The following legend pointer customization attributes have been introduced for the gradient legend:

  - `legendPointerColor`

  - `legendPointerBorderColor`

  - `legendPointerAlpha`

  - `legendPointerBorderAlpha`

- Core maps package updated for the following:

  - Specification sheet added for Valle D'Aosta under Italy regions

  - Specification sheet updated for Uttar Pradesh to add five new entities

  - Specification sheet added for North America with Caribbeans

  - Specification sheets added for eight sub-regions of Bangladesh

  - Specification sheets added for five sub-regions of Italy

  - Specification sheets added for 34 provinces of Afghanistan

  - Specification sheet added for France with 13 entities

  - Specification sheet updated for USA DMA to rectify the DMA IDs

  - Specification sheets updated for India and Orissa to rename Orissa to Odisha

  - Specification sheets updated for India and Uttaranchal to rename Uttaranchal to Uttarakhand

  - Specification sheet updated for Zambia for original IDs and adding a new entity

<h4>Fixes</h4>

- Large trend-line values in the angular gauge are now displayed within the canvas.

- Extra space in the tooltip text for the last column in a column 2D chart has been removed.

- Large number of data sets/data plots in the column 2D and bar 2D charts are now rendered with equal width and gap between the data plots.

- For pie 3D and doughnut 3D charts, data labels with large text values are now truncated when `manageLabelOverflow=1`.

- Tooltips for truncated data labels are now visible in iOS and Android devices.

- Y-axis labels in the heatmap chart are now rendered for all values of the `maxLabelWidthPercent` attribute.

- Previously, the labels disappeared for random values assigned to this attribute.

- The `useEllipsesWhenOverflow` attribute, for the vertical LED chart, is now working as expected.

- `lineDashLen` attribute is now working correctly for all values in the line chart and the zoomline chart.

- The `connectNullData` attribute now works as expected for the zoomline chart, connecting all data points from the first to the last data point.

- Previously, the attribute failed to connect all the points.

- In the Bubble chart, the x-axis label is now displayed when `labelDisplay=rotate` and irrespective of the font size specified.

- The `displayValue` property of an event argument now returns the value of the data plot, for `showValue=0`.

- Previously, if `showValue=0`, the `displayValue` property returned a blank value.

- The following attributes for customizing data values are now working correctly for the multi-level pie chart:

      	* `valueFont`

      	* `valueFontColor`

      	* `valueFontSize`

      	* `valueFontBold`

      	* `valueFontItalic`

      	* `valueBgColor`

      	* `valueBorderColor`

      	* `valueAlpha`

      	* `valueFontAlpha`

      	* `valueBgAlpha`

      	* `valueBorderAlpha`

      	* `valueBorderThickness`

      	* `valueBorderPadding`

      	* `valueBorderRadius`

      	* `valueBorderDashed`

      	* `valueBorderDashGap`

      	* `valueBorderDashLen`

- `<` and `>` can be used to display the < (less than) and > (greater than) symbols respectively for all labels inside the chart canvas.

- For `rotateValues=1`, the sum of each stack in a stacked column chart (`showSum=1`) is now rendered within the chart canvas.

- Previously, this value would go out of the canvas, if `rotateValues=1`.

- In the real-time thermometer gauge, the gauge scale now renders correctly when the `gaugeOriginX` and `gaugeOriginY` attributes are used.

- Previously, using these attributes resulted in the gauge scale getting distorted.

- In the zoomline chart, tooltips are no longer seen for data plots that are outside the canvas area.

- The showGaugeBorder attribute, for the thermometer gauge, now works as expected when the gaugeBorderAlpha attribute is defined.

- The legendPointerBorderThickness attribute now works correctly with the gradient legend.

- The LogMSColumn and the LogStackedColumn charts now render correctly for all data values between 0 and 1.

- Previously, under this condition, the charts were drawn distorted.

- The ignoreCols and ignoreRows arrays, in the jQuery plugin, now behave as expected. In addition, the behaviour of the following attributes has also been fixed:

  - `useLabels`

  - `useLegend`

  - `labelSource`

  - `legendSource`

  - `seriesColors`

  - `convertBlankTo`

- JavaScript error in the horizontal linear gauge when the gauge height is set to a very small value has been fixed.

- Gantt chart can now be exported in all possible formats from all browsers.

- Previously, it did not export correctly in the PDF format for some special types of data when exported from the Firefox browser.

- Error encountered in UIWebView on render of line charts with dashed line segments has been fixed.

- In the real-time horizontal linear gauge, a pointer value with two or more than two decimal places and placed on the edge is now rendered within the chart canvas.
