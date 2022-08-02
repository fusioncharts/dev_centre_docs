---
title: Release Notes | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Release Notes
---

<h2 class="sub-heading">Version 2.6.0</h2>

<p class="release-date">August 02, 2021</p>

<h4>Improvements</h4>

- FusionTime version 2.6 improves the chart visualization by allowing users to use the new 'paletteColor' feature to specify a custom color for an individual series at plot level in a column visualization. 

<h4>Fixes</h4>

- FusionTime version 2.6 corrected the Data Market tooltip behavior to show correct values when hovered over the identifier markers. Previously, the data marker tooltip displayed inaccurate data when hovered over the data plots.
- FusionTime version 2.6 updated the '$series.plotIndex.color' macro function, making all Tooltips visible and all the pointers in the tooltips. Previously, the macro returned tooltips with undefined values.


<h2 class="sub-heading">Version 2.5.0</h2>

<p class="release-date">29th April, 2021</p>

<h4>New Features</h4>

- Starting version 2.5.0, FusionTime now supports the customization of tooltip content for Time-series charts. Users can now customize tooltips by specifying the background and border colors and much more.

<h4>Improvements</h4>

- Zooming from both inside and outside the plot area now works properly for all browsers. Previously, when using Microsoft Edge the zoom function was not working properly.
- Improved the space management by making the margin and paddings ratios remain constant when multiple canvases with different dimensions are present. Previously whenever the height of a multi-variate chart was increased an additional top margin was added.
- FusionTime version 2.5.0 improves the auto time-axis clipping feature to function at all times independent of the time zone. Previously, when time-axis clipping was implemented on a chart containing the same data across different time zones, time-axis clipping did not occur for certain time zones.

<h4>Fixes</h4>

- Resizing a chart with null data now works properly. Previously, upon resizing a chart with null data a JS error was thrown for the `getLogicalSpace` property.

<h2 class="sub-heading">Version 2.4.0</h2>

<p class="release-date">14th November, 2020</p>

<h4>New Features</h4>

- Starting version 2.4.0, FusionTime now allows you to export your charts in XLS or CVS format.
- FusionTime now allows you to format the tooltip for time navigator. For more information refer to [time navigator](/fusiontime/fusiontime-component/time-navigator).
- Prior to 3.16 the time-axis clipping feature in FusionTime required users to manually specify dates and intervals for clipping, This clipping worked whether there was null data or not. This release introduces an auto time-axis clipping feature, which when enabled clips the time-axis when null data is present for the given time multiplier.
- Prior to 3.16, the default position for the legend box was on the bottom-left and it was not configurable. This release introduces two new attributes that allow users change the legend position to 12 different positions available. For more information refer to the [Legend documentation](/fusiontime/fusiontime-component/legend-in-fusiontime).
- Prior to 3.16, There was no direct way to customize `y-axis` and to update `y-axis` or to update the plot type, users had to update the whole chart by passing the complete chart JSON again. Starting v2.4, users will have the API methods `setYAxis` and `getYAxis` which can be used to update the y-axis and its properties easily.

<h4>Improvements</h4>

- The use of hyphens (`-`) in a data series name string is now available and no longer causes the chart to render without any data plots. Previously, when a hyphen was used in the data series name string no data plots were plotted on the chart.

<h4>Fixes</h4>

- When using Firefox browser, the zooming and panning interactions now work properly. Previously these interactions were slow for Firefox browser compared to the other browsers.

<h2 class="sub-heading">Version 2.3.0</h2>

<p class="release-date">14th September, 2020</p>

<h4>Improvements</h4>

- Starting version 2.3.0, licenses will be activated using a newly introduced license validation system. For more information, please refer to this [guide](/dev/upgrading/license-activation).

<h2 class="sub-heading">Version 2.2.0</h2>

<p class="release-date">14th July, 2020</p>

<h4 class="sub-heading">Improvements</h4>

- Now you can use `showTimeSpanMarkerTooltipAt` to configure how to display time span marker tooltips.

- Custom Range Selector (CRS) labels now show time information when data binning happens in time units.

- Improved the logic for calendar-bin to align the plots with the tick marks of the xAxis for unit multiplier. Previously, the anchor for the hour data bin was not aligned with its respective hour tick. For more information see [Data Binning](/fusioncharts-aspnet-visualization/components/fusiontime-components/fusioncharts-net-binning).

- In range series charts, plots that have their entire range inside the reference zone now standout better when you highlight the reference zone. For more information refer to the [reference zone documentation](/fusiontime/fusiontime-component/reference-zone-in-fusiontime)

- Improved the density of time navigator grid lines, now each grid line has a label. Previously, gridlines number was higher and labeling wasn't clear. For more information refer to the [time navigator documentation](/fusiontime/fusiontime-component/time-navigator).

<h4>Fixes</h4>

- Data points between points without values now have a visual representation on area plots, previously these points were not visible on charts.

- Area plots now work properly when using negative values, previously borders were plotted incorrectly. For more in formation refer to the [area plots](/fusiontime/fusiontime-component/plot-types-in-fusiontime#area)

- Data markers now work properly. Previously, data markers were drawn at incorrect bins in certain situations. For more in formation refer to [data markers](/fusiontime/fusiontime-component/data-markers#data-markers-visibility).

<h2 class="sub-heading">Version 2.1.1</h2>

<p class="release-date">17th March, 2020</p>

<h4>Fixes</h4>

- Change in license agreements.

<h2 class="sub-heading">Version 2.1.0</h2>

<p class="release-date">26th February, 2020</p>

<h4 class="sub-heading">New Feature</h4>

- FusionTime now allows you to plot range series data using time series. Two plot types are supported - [Area-range](/fusiontime/fusiontime-component/plot-types-in-fusiontime#area-range-series-charts), and [Column-range](/fusiontime/fusiontime-component/plot-types-in-fusiontime#column-range-series-charts).

- FusionTime now allows you to [clip off sections](/fusiontime/fusiontime-component/time-axis#clip-time-axis) of the time axis.

- FusionTime now allows you to position the [caption](/fusiontime/fusiontime-component/captions#caption-position) and [subcaption](/fusiontime/fusiontime-component/captions#sub-caption-position) of a chart to the `left`, `right`, or `center`.

<h4>Improvements</h4>

- In accordance to the rule of proximity, the Y-axis title now appears closer to Y-axis labels. The default space between them has been reduced.

- When charts are zoomed in, the Y-axis now scales properly.

- Time axis ticks will now be aligned with the labels. No major tick will appear without a label.

<h4>Fixes</h4>

- The tooltips now appear fine for all data plots in grouped column charts. Earlier, the tooltip would not appear for the first data plot.

- 'Visible' parameter of legend events like 'legendItemClicked', 'legendItemRollOver' 'LegendItemRollout' was previously showing only 'true' value. Now it shows, 'true' or 'false' depending on its current state.

- Time series charts no longer show `Export as XLSX` in the chart menu if the value of `exportEnabled` is set to `1` and the chart is updated using any attribute. Earlier, the inactive menu option `Export as XLSX` would appear.

- Charts are now exported properly in IE11. Earlier, clicking on the Export menu would not export the chart, and display a JS error message in the browser console instead.

- The time navigator axis ticks now properly correspond with values. Earlier, there were too many ticks, making it difficult to see which tick indicated a particular value. The issue has been fixed by reducing the overall number of ticks.

- On mobile devices, the Custom Range Selector now accepts values selected using the **From** and **To** input boxes.

- Chart captions no longer get cropped when they consist of multiple lines.

<h2 class="sub-heading">Version 2.0.0</h2>

<p class="release-date">5th December, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- FusionTime 2.0 onwards, you can build time-series charts with [real time data](/fusiontime/getting-started/real-time-data-in-fusiontime).

- You can now set variable heights to different canvases in a multivariate chart.

- You can now use the `height` property of the `navigator` object to assign a custom height to the time navigator.

- FusionTime 2.0 onwards, you can render charts with the [legend](/fusiontime/fusiontime-component/legend-in-fusiontime) initially hidden, using the newly introduced attribute `initiallyHidden`.

- You can now use the attribute `applyCSSTransform` to modify CSS files for charts in FusionTime.

- Custom Range Selector in FusionTime is now mobile-responsive.

<h2 class="sub-heading">Version 1.3.0</h2>

<p class="release-date">27th September, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- A bunch of events and methods are now available using which you can use the time series charts in interesting ways. The complete list of events can be found [here](/fusiontime/api/fusiontime-events).

- FusionTime v1.3.0 onward, you can display alternate [grid bands](/fusiontime/fusiontime-component/y-axis-in-fusiontime#grid-bands) on the Y-axis.

- FusionTime now offers a new type of [data marker](/fusiontime/fusiontime-component/data-markers) - pin.

<h4>Improvement</h4>

- By default, the chart formats the data values. Now, you can see unformatted (or raw) data values. One can also format the data values with `round` attribute (decimal places, tens, hundreds, etc). These will reflect wherever data values are visible.

- Earlier, if you mentioned the name of aggregation in uppercase or camelcase, you would get a JS error. Now, if you mention the name of an aggregation that is included in FusionCharts, it will work without error, no matter which case (upper, lower, or camel) you name it in. However, if you define your own custom aggregation, then you need to follow a few naming regulations, as follows:

  - The name is case sensitive.

  - The name needs to be in the format used in FusionCharts.

  - The name cannot have the same spelling as any of the default aggregations provided by FusionCharts.

- Specific time series components like data markers, time markers, reference lines, and reference zones are now available with stock (OHLC and Candlestick) charts.

<h4>Fixes</h4>

- Data Markers of different points in time are now displayed separately. Previously, they were being grouped together.

- In consolidated data markers, the same dates were appearing multiple times. The issue has now been fixed.

- In dual Y-axis charts, notch connectors are now properly visible within reference zones.

- When you add a reference zone to a dual Y-axis chart, the data plots within reference zones are now highlighted properly.

- Earlier, reference zone marker tag text would overflow when you added prefix/suffix to it. The issue has now been fixed.

- Earlier, you could accidentally set data binning at a value less than the lowest atomicity. FusionTime version 1.3 onward, you cannot do so anymore.

- In earlier versions of FusionTime, you were unable to select long time periods from Standard Range Selector if you dragged the Time Navigator to the extreme left. The issue has been resolved.

- Earlier, the Standard Range Selector was not selected when you made selections from Custom Range Selector or `xAxis.initialInterval`. The issue has been fixed.

- The tooltips of data markers now always display the correct names.

- After hovering over a time span marker, if you move the pointer, the plot anchor now vanishes instantly. Previously, it would remain visible on the canvas even when you moved the pointer.

- The text in time span labels with ellipsis would overflow the label boundaries when you zoomed/panned the chart. The issue has been resolved.

<h2 class="sub-heading">Version 1.2.0</h2>

<p class="release-date">26th July, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- You can now choose the [output time format](/fusiontime/getting-started/output-time-format) (12 hour/24 hour) for tooltips and X-axis.

- You can now [remove leading zeros](/fusiontime/fusiontime-attributes#paddings) from dates (e.g., display `01/11/19` as `1/11/19`).

- You can now set the [initial spread of the active window](/fusiontime/fusiontime-component/time-navigator#set-the-initial-spread-of-the-active-window) by setting the 'from' and 'to' time when the chart is first rendered.

- You can now define the data [binning](/fusiontime/getting-started/change-default-aggregation) as per custom requirements.

- A new feature called [reference zone](/fusiontime/fusiontime-component/reference-zone-in-fusiontime) is now available. It helps the users know the data plots which fall in the particular zone.

- You can now [style the line segment](/fusiontime/fusiontime-component/y-axis-in-fusiontime#configure-null-values) which joins the missing data points.

- A new feature to style the [predicted data](/fusiontime/fusiontime-component/predictive-data-fusiontime) is now available. You can provide the predicted data and style them differently.

<h4 class="sub-heading">Improvement</h4>

- In FusionTime Version 1.2, we have extended the time periods covered by the [Standard Range Selector](/fusiontime/fusiontime-component/standard-range-selector) beyond `1Y`, to include `2Y`, `3Y`, `5Y`, and `10Y`.

- You can now apply a number of new [style attributes](/fusiontime/getting-started/style-definition) to different components of a time-series chart.

- The `ignoreCaseExtension` module is now able to selectively ignore some of the keys in the dataSource JSON.

<h4 class="sub-heading">Fixes</h4>

- For CrossLines, label and anchor tooltip were not in sync. The issue has been fixed.

- In Column charts, some of the columns styled using the `stroke-dasharray` attribute would lose the style when the canvas was zoomed in and out again. The issue has been fixed.

- In Candlestick and OHLC charts, the default plot highlight style was getting overridden when hover style was specified. The issue has been fixed.

- The time axis was getting updated on disabling all datasets via the legend. The issue has been fixed.

- The selection tool of the Custom Range Selector was getting disabled when the Apply button was clicked after selecting a time interval. The issue has been fixed.

- When the Standard Range Selector button was styled with larger font size for `button:hover`, its vertical alignment would be disrupted when the mouse pointer was moved away after hover. The issue has been fixed.

- Tooltip was not appearing for the last plot in the charts. The issue has been fixed.

<h2 class="sub-heading">Version 1.1.0</h2>

<p class="release-date">31st May, 2019</p>

<h4 class="sub-heading">New Feature</h4>

- A new chart - [Grouped column](/fusiontime/fusiontime-component/plot-types-in-fusiontime#grouped-column) (aka multi-series column) is now supported in FusionTime.

- All major FusionTime components can now be styled according to individual brand preference using familiar CSS styling for HTML and SVG objects. Components include:

  - [Time Axis](/fusiontime/fusiontime-attributes#time-axis) (SVG styling)

  - [Y-axis](/fusiontime/fusiontime-attributes#y-axes) (SVG styling)

  - [Crossline](fusiontime/fusiontime-attributes#crossline) (SVG styling)

  - [Time Marker](/fusiontime/fusiontime-attributes#time-markers) (SVG styling)

  - [Data Marker](/fusiontime/fusiontime-attributes#data-markers) (SVG styling)

  - [Time Navigator](fusiontime/fusiontime-attributes#time-navigator) (SVG styling)

  - [Tooltip](/fusiontime/fusiontime-attributes#tooltip) (HTML styling)

<h4 class="sub-heading">Improvement</h4>

- Default derived styles for different FusionTime components have been removed. You can now add styles using the `style` object for each component.

- Following objects are now available in FusionTime:

  - `timenavigator`
  - `tooltip`
  - `crossline`

- The default font of all text is now Helvetica, Arial or Sans-Serif.

- Ordering of elements and stroke for the top border in the stacked area chart has been improved for better visual clarity.

- [Standard range selector](/fusiontime/fusiontime-component/standard-range-selector) (aka SRS) component has been re-designed.

- A new [theme](/fusiontime/getting-started/introduction-to-themes-in-fusiontime), `UMBER`, is now available for FusionTime charts.

- Design choices for existing themes, especially Gammel, have been improved.

- Better error messages are now available if one gives an incorrect axis or plot configuration.

<h4 class="sub-heading">Fixes</h4>

- Selecting and applying time from the Custom Range Selector selection box is now working fine.

- In Windows hybrid touch devices, the Custom Range Selector calendar is now working properly.

- If for a component styling is provided using both the `dataSource` and `themes`, the theme engine will merge properties from both the sources to display the component.

- In candlestick and OHLC charts the styles of the `bear` and `bull` are now getting applied properly. Previously, the style properties were getting interchanged.

- In candlestick and OHLC charts the color of the `bear` and `bull` were changing at the time of panning. This issue is now fixed.

- Consolidated date in data marker tooltip was showing junk text. This issue is now fixed.

- If the `chart{}` object is not given or left blank, earlier the `setChartAttribute()` API was not working. This issue is now fixed.

- `stroke-width = 0` is now working for anchors from `plotConfig` object.

- Tooltip cosmetics were not getting updated when theme was changed after hovering on the plots. This issue is now fixed.

- Grid line styles in the Y-axis are now properly applied.

- Marker-notch of the time instance marker was shifted below the X-axis. It has been placed correctly now.

- Tooltip padding using styles was not accepting multiple values. This issue is now fixed.

- When the data value is very less, on plot hover, the tooltip overlapped the crossline label. This issue is now fixed.

- Setting the style of the text using `chart.style.text` was not working. This issue is now fixed.

- Table id was not getting assigned to the child or derived **dataTable**. This issue is now fixed.

<h4 class="sub-heading">Deprecated</h4>

- `enableNavigator` attribute is now deprecated, and the same can be achieved by using the `enabled` attribute inside the `navigator` object.

- `showTooltip` attribute is now deprecated, and the same can be achieved by using the `enabled` attribute inside the `tooltip` object.

<h2 class="sub-heading">Version 1.0.0</h2>

<p class="release-date">27th February, 2019</p>

- This marks the release of first version of [FusionTime](https://www.fusioncharts.com/fusiontime)! One can now create high performing time series visualizations and stock charts in Javascript very easily.

- The usage of a special [data layer](/fusiontime/getting-started/how-fusion-time-works#fusiontime-data-layer) in FusionTime ensures that a seamless experience of the out-of-the-box features of time series visualization is available even with a high volume of time series data.

  - You can now perform a number of data operations, like, [sort](/fusiontime/fusiontime-data-engine/sort), [filter](/fusiontime/fusiontime-data-engine/filter), [groupBy](/fusiontime/fusiontime-data-engine/groupby), [pivot](/fusiontime/fusiontime-data-engine/pivot), etc. with the in-browser [store](/fusiontime/fusiontime-data-engine/overview) of tabular data, available with the data layer.

- Based on the requirement one can create either a [simple time series chart](/fusiontime/getting-started/create-your-first-chart-in-fusiontime), a [multivariate chart](/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime), a [chart with multiple data plots](/fusiontime/getting-started/create-your-multi-series-chart-in-fusiontime), or a dual Y Axis chart, etc., with equal ease.

- FusionTime supports all the [standard plot types](/fusiontime/fusiontime-component/plot-types-in-fusiontime) - line, area, column, stock charts, etc and their variants.

- Some important components of FusionTime include:

  - [Time axis](/fusiontime/fusiontime-component/time-axis) - xAxis of the chart is used as the time axis. Based on the size of the chart and the atomicity of the available time series data, FusionTime auto-aggregates data to represent the pattern in an understandable way.

  - [Time Navigator](/fusiontime/fusiontime-component/time-navigator) - the pattern of the entire data is visible in this component. Active window helps to focus on data of a given time range in greater detail.

  - [Standard range selector](/fusiontime/fusiontime-component/standard-range-selector) - helps the user select standard time periods

  - [Custom range selector](/fusiontime/fusiontime-component/custom-range-selector) - helps the user specify a specific time period

  - [Y Axis](/fusiontime/fusiontime-component/y-axis-in-fusiontime) - is the axis on which measures are plotted. It can come in either a linear or log scale. It can be plotted either on the left or right side of the canvas.

  - [Crossline](/fusiontime/fusiontime-component/crossline-in-fusiontime) - gives you quick context of data when you are interacting on the chart.

  - [Time marker](/fusiontime/fusiontime-component/time-marker) - helps you mark important events on the time axis.

  - [Data marker](/fusiontime/fusiontime-component/data-markers) - helps you mark important events on data plots.

  - [Reference line](/fusiontime/fusiontime-component/reference-line-in-fusiontime) - helps you to quickly compare data plots against a fixed value.

- FusionTime comes with three themes (Fusion, Gammel, Candy).

- CSS styling can be applied using the [style definition](/fusiontime/getting-started/style-definition) specifications.

- Charts created with FusionTime can be [exported](/fusiontime/getting-started/export-charts-fusiontime) into jpg, png, svg, and pdf formats.

- You can also use FusionTime from different technologies (angular, angular JS, react, vue, ember, jquery) using the existing FusionCharts wrappers.

- The charts created with FusionTime are responsive and work well on touch devices.
