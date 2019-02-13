---
title: Version 3.9.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.9.0.
heading: Version 3.9.0
---

<p class="release-date"> 28th September, 2015 </p>

#### New Features

- The `forceNumberScale` (`sForceNumberScale` for the secondary y-axis) has been introduced to format values lower than the specified `numberScaleValue`.

- If a data value is less than the lowest given number is the number scale, this attribute forces the lower value of the `numberScaleUnit` to be applied to that data value. This attribute works only when `"formatNumberScale": "1"` and the `defaultNumberScale` attribute is not defined.

- The `variableIndex` attribute has been introduced to determine how the data index will be assigned to data plots in real-time charts.

#### Improvements

- The `alertObj` object is now available as the second parameter of the `alertComplete` event, allowing the user more control over the event.

- The client-side export feature is now available for IE10 and above, including new Microsoft Edge browser. Also, the feature is now working correctly for gradients in Mozilla Firefox.

- In zoom-line charts, overlapping of tooltips for data plots having very close values has been fixed.

- Charts/maps with a large number of data points can now be exported using the PHP export server.

- Browser compatibility improved for handling the SVG path element in drag-node charts.

- Improved label management for funnel and pyramid charts, with a large number of data labels. Improvements include:

  - Skipping of less significant labels (determined based on label position inside the unit block)

  - Chart repositioning to display maximum label text, before label text is truncated by ellipsis

  - Optimization of the label placement algorithm to place labels based on threshold values (calculated dynamically depending on the available space)

- The following maps have been added to the core package:

  - Japan province maps

  - Azerbaijan sub-region maps

  - USA DMA maps

  - USA MSA maps

  - Europe (All Countries with UK as single entity)

#### Fixes

- JavaScript Runtime error, caused by enabling recursive number scaling (`scaleRecursively=1`) for the secondary y-axis in the dual y-axis multi-series combination chart (MSCombiDY2D), has been fixed.

- All line and area charts now render correctly in IE8 when the document mode is set to `Standards` and `animation=1`.

- Previously, under these conditions, the data plots in the line and area charts would disappear after the chart finished rendering.

- Invalid `<style>` tag present in the exported SVG string has been removed.

- Interactive layers for line or area plots are now active in combination charts with a scroll.

- Previously, the interactive layer of column data plots overlapped the interactive layer of line and area data plots.

- Maps now render correctly in IE10.

- Tooltips for individual map sections are now rendered correctly with gradient legend interactivity.

- Previously, the tooltips disappeared when the touch event was triggered.

- Tooltips for data plots with very small values, at the base of a stacked bar chart, are now rendered correctly.

- Tooltips in charts are now working in Android Chrome for the data plots configured to listen to drag events.

- The `chartCleared` event is now triggered irrespective of where it is attached-globally, with the FusionCharts object, or at chart level.

- Previously, the event was triggered only when attached globally.

- The `alertComplete` event is now triggered irrespective of where it is attached-globally, with the FusionCharts object, or at chart level.

- Previously, the event was triggered only when attached globally.

- Draggable chart components, like the gradient legend, are now working correctly when the chart is rendered inside a draggable container.

- For the angular gauge, the dial value is now considered when calculating the minimum and maximum limits of the gauge scale.

- In maps, the marker label is now placed above the marker when the label is positioned in the center (`labelPos=center`).

- The LogMSColumn2D chart now renders correctly when the `showCanvasBorder` and the `showAxisLine` attributes are defined.

- Previously, the chart failed to render even if one of these attributes was defined.

- The bulb gauge now renders correctly when `value` is undefined and the attribute `showValue=0`.

- Error shown in the Google Chrome console when FusionCharts was rendered on Windows 8 devices has been fixed.

- JavaScript error, reported in the console when a chart is disposed before the `render` event is triggered, has been fixed.

- `maxLabelHeight` attribute is now working correctly to set the maximum height for x-axis labels in real-time charts. If the height of a label is beyond this value, the label is truncated.

- The pin mode in the zoom-line chart now works correctly for all values of the `lineThickness` attribute.

- Previously, the pin mode worked correctly only when `lineThickness=1`.

- Data values in scroll charts are now visible when a chart is configured to scroll to the end of the chart, when it is first loaded (`scrollToEnd=1`) and animation is enabled for the chart (`animation=1`).

- Number formatting issues for y-axis values in zoom-line charts have been fixed.

- Horizontal space management issues in pyramid and funnel charts have been fixed.

- Previously, for `showLegend=1` and `legendPosition=right`, the charts would shift to the left, flowing out of the chart canvas.

- Overlapping of wrapped labels in pie and doughnut 2D/3D charts, when `manageLabelOverflow=1`, has been fixed.
