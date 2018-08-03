---
title: Version 3.11.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.11.0.
heading: Version 3.11.0
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 1st July, 2016

## New Features

* A new interaction model has been introduced for the treemap chart. The newly introduced navigation bar helps to stay in context of the overall hierarchy of data while we focus on details at a certain level of the hierarchical data. The navigation bar is also interactive; clicking a node on the bar shows the subtree for which the clicked node is the root node.

* The zoom-in and zoom-out animation in the treemap chart has been extended to help establish hierarchical context.

* The slice and dice algorithm for the treemap chart now supports two additional slicing modes, horizontal slicing and vertical slicing. Previously, only the alternate tiling and slicing mode was used.

* The `maxDepth` attribute has been introduced to restrict the number of hierarchical levels of a treemap chart displayed at any given point in time.

* Bullet graphs now support real-time data update. New data can now be loaded periodically (from server-side or client-side) and the chart will be updated to reflect the current state of data.

* FusionCharts Suite XT introduces the toolbar starting version 3.11.0. The advantage of having a toolbar is that it manages all the UI action elements (context menus, checkboxes, buttons) centrally, providing a uniform and clean look and a meaningful and logical grouping of chart elements.

* Chart data can now be exported in the XLS format.

* The batch export feature has been introduced, allowing users to export multiple charts on the same page as a single JPG/PNG image. The `batchExport` API method enables this feature; additionally, it also lets you customize the exported chart images for parameters like the width and height of the exported chart, the background color, transparency, and so on.

* The animateClockwise` attribute has been introduced to configure the direction of animation (clockwise or anticlockwise) for pie and doughnut charts every time a chart is rendered.

* The `alphaAnimation` attribute has been introduced to let users enforce initial animation via alpha transition.

## Improvements

* Like the scatter chart, now the zoom-scatter chart also supports category on x-axis.

* Legend interactivity has been enabled for the Marimekko chart.

* The treemap chart now supports the `dataplotClick`, `dataplotRollOver`, and `dataplotRollOut` events.

* Legend sliders are now hidden when the gradient legend is disabled (using `interactiveLegend=0`) in charts and maps.

* The attributes `legendAxisBorderColor` and `legendAxisBorderAlpha` have been added to control the color and opacity of the border around the gradient in the gradient legend.

* The new `targetCapStyle` attribute is used to modify the cap style of the graphics for the target elements in the horizontal and vertical bullet graphs. Previously, when `targetThickness > 2`, the target element appears distorted around the edges. `targetCapStyle` fixes this bug.

* For 3D pie charts, interaction has been extended to cover the entire surface area of the chart. Previously, the pie slices could be rotated only by dragging the top layer of the slices.

* Core maps package updated for the following:

    * Added specification sheets for six Lebanon Governorates under Lebanon (Governorates).

    * Added specification sheets for 16 Kazakhstan state maps under Kazakhstan (Regions).

    * Updated the specification sheet for Madhya Pradesh to:

        * Add the Anuppur, Singrauli, Alirajpur, and Burhanpur districts.

        * Rename Narsimphapur to Narsinghpur, East Nimar to Khandwa, and West Nimar to Khargone.

    * Updated the specification sheet for Rajasthan to:

        * Add the Pratapgarh district.

        * Rename Ganganagar to Sri Ganganagar and Jalor to Jalore.

    * Updated the specification sheet for Punjab to:

        * Add the Barnala, Fazilka, Sahibzada Ajit Singh Nagar, Pathankot, and Tarn Taran districts.

        * Rename Muktsar to Sri Muktsar Sahib and Nawanshar to Shahid Bhagat Singh Nagar.

    * Updated the specification sheet for Netherlands to change short labels for Gelderland, Limburg, Noord-Brabant, Zeeland, and Zuid-Holland.

    * Updated the specification sheet for East Timor to rename Ambeno to Oecusse.

## Fixes

* Category labels in the chart data are now rendered correctly irrespective of the number of labels and the chart size. Previously, for a large number, the labels were rendered only when the chart size was significantly increased.

* Change in font size and font family, when a chart is exported as SVG, has now been corrected.

* Skipping of data labels in real-time charts for new a dataset (fed into the chart after the initially defined dataset has rendered) has been fixed.

* Visibility issues for the anchor representing the closing value in the sparkline chart have been fixed.

* Run-time error generated when the `legendItemClicked` event is triggered has been fixed.

* Data value positioning problems in the bar 2D and 3D charts have been fixed. Data values that occupied more space than the maximum data plot size were placed outside the data plot, even if `placeValuesInside=1`. The issue was due to the `placeValuesInside` attribute not working as expected.

* Rendering very small data values no longer causes the browser to crash or become unresponsive.

* In the spline chart, for `minimizeTendency=1` and consecutive data points having null values, the y-axis limits no longer change. Previously, under these conditions, negative values were introduced on the y-axis.

* Caption positioning issues in the radar chart have been fixed. Previously, for `captionOnTop=0` (caption placed at the bottom of the chart), the caption overlapped the legend.

* For radar charts, the `plotFillColor` attribute now works as expected for the gradient effect. Previously, even though multiple colors (hex codes) were passed as values to this attribute, only a single color was applied to the plots.

* In the drag line and drag area charts, when `showToolTip=0`, the data plot related events are now triggered.

* For all line charts, the `color` attribute (at the data level) is now working as expected. Previously, not all colors specified as values to the color attribute (at the data level) were applied to the chart. This issue has now been fixed; all colors are applied as specified.

* For the heat map chart, the `plotHighlightEffect` attribute is now working as expected.

* The `anchorHoverEffect` attribute is now working as expected. Previously this attribute affected all data plots (and not just anchors) and worked even when `showHoverEffect=0`. The attribute has now been fixed to affect only the anchor data plots and work only when `showHoverEffect=1`.

* Label distortion/overlapping in pyramid charts, when data plots are sliced, has been fixed. The issue was due to multiple clicks being triggered before a slicing animation was completed. This has been fixed by setting a lock on data plots while a slicing animation is in progress.

* For the multi-axis line chart, the `checkBoxColor` attribute has been enabled. Additionally, the checkbox design has also been upgraded.

* For the funnel and pyramid charts, issues in the cosmetic configuration for the labels' background have been fixed. Previously, all label cosmetics disappeared when a data label or the chart was clicked.

* For the funnel and pyramid charts, rendering differences between the Firefox and Chrome browsers have been fixed.

* Background image distortion for the funnel and pyramid charts, when rendered in Firefox, has been fixed.

* The `borderHoverDashed` attribute (for column data plots) now works as expected when specified at the `dataset` level.

* Data values for multiple dials and pointers can now be separated using the ',' (comma). Previously, only the '|' (pipe) was used as the separator.

* Rendering issues in the doughnut chart, for zero value pies or data values close to zero, have been fixed. Previously, under these conditions, the doughnut chart was completely distorted when rotated.

* In the multi-level pie chart, setting `showValues=0` and `showLabels=0` now hides the value background and border cosmetics. Previously, the cosmetics were visible even when the values and labels were hidden.

* The horizontal scroll bar that appeared on the webpage when the HTML tag dir is set to `rtl` has now been removed.

* In the center label of the doughnut chart, the "&" symbol now renders correctly when the `<br>` tag is used. Previously, if the `<br>` tag was used in the content for the center label, "&" would be rendered as "`&`". This issue has now been fixed.

* Caption positioning issues in the Gantt chart have been fixed. Previously, when `captionOnTop=0` (caption placed at the bottom of the chart), the caption was overlapped by the legend.

* For the stacked bar 2D chart, the border around the data plots when `showShadow=1` and `plotBorderAlpha=0` has been removed.

* Scale displacement and height misalignment in the thermometer gauge, when value=1, has been fixed.

* In the thermometer gauge, when `captionOnTop=0`, extra space between the display value and the gauge has been removed.

* In Google Chrome, the no data to display error encountered upon the inclusion of theme in charts has been fixed.

* For the thermometer gauge, the `thmHeight` attribute is now used to calculate the height of the thermometer scale.

* Label overlapping in the zoom-line dual y-axis chart has been fixed.

* Data links for pie and doughnut charts are now activated only on left mouse click. Previously, the links were activated on both, the left mouse click as well as the right mouse click.

* Drawlines and cosmetic attributes for their color, transparency, and thickness are now supported in the zoom-scatter chart.

* For pie 2D charts, the `plotBorderThickness` attribute is working as expected.

* For multi-level pie charts, rendering issues after updating the data source have been fixed.

* For the zoom-line chart, tooltips are now displayed when anchors are hovered over.

* Regression line visualization issues in the zoom-scatter chart have been fixed.

* In the zoom-line dual y-axis chart, trend-lines can now be drawn along the secondary y-axis by setting `parentYAxis="s"`. Previously, trend-lines drawn along the secondary y-axis using `parentYAxis="s"` were not rendered. This issue has now been fixed.

* For the zoom-line chart, the `numVisibleLabels` attribute is now working as expected.

* Tooltip rendering issues in touch devices, particularly prominent in Android devices, have been fixed. On touch devices, tooltips are shown when a data plot is tapped on.

* For all multi-series line and area charts (including the combination charts), the `showShadow` attribute is now working correctly. Previously, if the last value of a dataset was null, the shadow effect of the line and area data plots was hidden. Also, when a dataset is hidden using the `visible` or `initiallyHidden` attributes or via legend interactivity, the shadow of the visible dataset is also hidden. Both these issues have now been fixed.

* The `dataIndex` event argument now returns the correct value for data plots with null data values in a stacked column chart.

