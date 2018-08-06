---
title: Version 3.2.1 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.1.
heading: Version 3.2.1
---

## FusionCharts
**6th October, 2010**

* Added `useEllipsesWhenOverflow` attribute to <chart> element that controls whether ellipses are to be used in chart labels

* Marimekko chart now supports the new legend

* Bug fix in label rendering mechanism of line and area charts, where last label was getting lesser space in rotated mode

* Changes in FusionCharts JavaScript class:

    * Improvements in JSON transcoder

    * Support for font manipulation and STYLE manipulation when rendering JavaScript charts

    * Customization of y-axis min and max values in JavaScript rendering

    * Compatibility with older PowerCharts and FusionWidgets

    * Removal of `swfUrl` as compulsory construction parameter

    * Additional cosmetic changes when using JavaScript rendering

## PowerCharts
**30th July, 2012**

### Fixes

* `ExportReady` event not being raised in advanced event model.

* Erratic ordering of Legend icons in Chrome.

* Data loading and rendering issues specific to Internet Explorer 6/7/8.

* iOS gradient issue.

* Disappearing 'close' button in LinkedCharts (JavaScript chart).

### Improvements

* JavaScript Multi-level pie, Multi-axis line, Candlestick, Waterfall charts are improved.

* Rally and Decline cosmetics are now configurable.

* Considerable reduction of memory leaks upon resize, data-update and dispose of charts.

* Text-selection (I-beam) cursor does not appear now when hovered over text.

* Text wrapping for labels in JavaScript charts.

### New Features

* All the charts now render in pure JavaScript also. New charts in JavaScript include:

    * Heat Map, Box and Whisker, Kagi, Select Scatter, Drag Node, Drag Column, Drag Line and Drag Area.

* JavaScript charts look almost similar to Flash charts.

* JavaScript Drag Node chart, Drag Column, Drag Area and Drag Line support:

    * Drag and selection interactivity.

    * Data submission to a server side script.

* JavaScript Drag Node chart supports live addition and modification of nodes, connectors and labels.

* Enhanced label management in all charts to avoid overlapping of labels when there are large labels or many of them.

* Image can now be used to fill the chart background in different modes with custom alignments.

* Ability to center the x-axis and y-axis titles with respect to chart area.

* Scatter charts support regression lines and configuration for x-axis number formatting, vertical division lines, grids and zero plane.

* Support for auto generation of x-axis in Scatter charts.

* Ability to control number formatting for Indian and East Asian thousand/lac separation formats.

* Support for recursive number scaling to display the chart data better.

* jQuery plugin to render and manage charts using jQuery syntax.