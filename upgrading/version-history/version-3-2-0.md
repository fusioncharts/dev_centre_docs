---
title: Version 3.2.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.2.0.
heading: Version 3.2.0
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 6th October, 2010

## FusionCharts

* Automatic rendering of JavaScript charts on devices (like iPad and iPhone) where Flash player is not supported

* 6 new chart types:

    * 2D Pareto Chart

    * 3D Pareto Chart

    * Marimekko Chart

    * 2D Stacked Column Line (Single Y axis)

    * 3D Stacked Column Line (Single Y axis)

    * Zoom Line Chart with scrolling and pinning support

* Support for JSON data format

* Support for linked charts, where a single data source controls multiple charts

* Interactive legends in charts that allow for selective showing/hiding of data series (or slicing in case of pie charts)

* Legends now support icons for each data series

* Pie and doughnut charts now support legend

* Stacked charts now support 100% stacked mode

* Bubble and Scatter charts can now have visual quadrants with labels

* Better management of labels on charts. Labels now have an auto rendering mode in which they do not overlap. Additionally, x-axis labels now support ellipses and tool-tips on shortened labels.

* Support for line breaks and wrapping in all text elements including: caption, sub caption, X-axis title, Y-axis title, Labels and tooltips.

* In Line charts, data values can now be positioned either above or below the dataplots. Automatic positioning of data values is also supported.

* Custom alignment of caption and sub caption using STYLES

* Adjustment of minimum Y-axis value in stacked charts now supported

* Advanced print management using JavaScript

* Additional options for efficient event handling using JavaScript

* Support for dynamic update of chart properties using JavaScript

* Charts now support % based sizes along with dynamic resizing

#### January 24th, 2012

## FusionWidgets

* Automatic rendering of JavaScript charts (except Gantt and Real-time charts) and gauges on devices where Flash player is not supported (like iPad and iPhone)

* Support for JSON data format

* Support for LinkedCharts, where a single data source controls multiple charts

* Advanced print management using JavaScript

* Additional options for efficient event handling using JavaScript

* Support for dynamic update of chart properties using JavaScript

* Better management of the position of labels in charts and gauges

* Long labels are truncated to prevent cropping of labels or cluttered looks

* Charts/gauges now support percentage (%) based sizes along with dynamic resizing when parent containers resize

* Background image can now be used to fill the chart in different modes, and custom alignment is possible

* Annotations can now be positioned using Macros - variables with dynamic values

* A real-time chart can now ask for instant update when the chart loads (using refreshInstantly='1' in <chart> element)

* Real-time stacked charts now support 100% stacked mode

* Adjustment of minimum Y-axis value in stacked charts now supported

* In Line charts, data values can now be positioned either above or below the dataplots. Automatic positioning of data values is also supported.

* Custom alignment of caption and sub caption using Styles

* Added option to set round edge effect to all charts having columns

#### 14th January, 2011

## PowerCharts

* Maximum value of all the Color Ranges is now included in the highest Color Range

* Individual entity label can not be shown when all labels are hidden from the `<map>` element using `showLabels='0'`

* Entity Definition does not change short name or long name when same `internalId` and `newId` is provided

### Deprecated

* Use of `FusionMaps.js` as the JavaScript Wrapper class to render map. 

* Use FusionCharts JavaScript Class (`FusionCharts.js` and supportive JavaScript modules) instead.

* Use of `FusionMapsExportComponent.js` is deprecated. 

* Use `FusionChartsExportComponent.js` instead.

* Use of `FusionMaps.asp`, `FusionMaps.php`, `FusionMaps.dll` (or the sources `FusionMaps.cs`, `FusionMaps.vb`) are deprecated. 

* Use `FusionCharts.asp`, `FusionCharts.php`, `FusionCharts.dll` (or the sources `FusionCharts.cs`, `FusionCharts.vb`)

* Use of various XML and JavaScript APIs as listed [here](http://docs.fusioncharts.com/maps/Contents/?introduction/UpgradingXT.html#deprecatedxt).

#### 30th July, 2012

## FusionMaps

### Fixes

* `ExportReady` event not being raised in advanced event model.

* Erratic ordering of Legend icons in Chrome.

* Data loading and rendering issues specific to Internet Explorer 6/7/8.

* iOS gradient issue.

* Disappearing 'close' button in LinkedCharts (JavaScript chart).

### Improvements

* `FCMap_Netherland.swf` is renamed to `FCMap_Netherlands.swf`

* `FCMap_NorthIreland.swf` is renamed to `FCMap_NorthernIreland.swf`

* Recreated maps of Scotland (`FCMap_Scotland.swf`) and Poland Counties (`FCMap_PolandCounties.swf`)

* Option to show and hide individual label of entity (along with label connector line - if any)

* Option to set hover color for individual entity

* Option to hide or show tool tip for individual entity and connector

* Option to set a map title and sub-title using `caption` and `subCaption` attributes

* Option to position map title using `captionPoistion` attribute

* Option to set a different cosmetic (`color` and `alpha`) for the entities with no value

* Option to set hover color for individual entity

* Option to disable hover color for individual entity

* Option to hide common entity border using `showBorder = '0'`

* `exportdataready` event returns more number of properties as event argument

* Set default polygon shape to circle when sides are less than 3

* Correction of entity long names for numerous maps as listed [here](http://docs.fusioncharts.com/maps/Contents/?introduction/UpgradingXT.html#definitions)

* "China-2" map has been renamed to "China (With Direct-controlled municipalities and Special administrative regions)"

### New Features

* Automatic rendering of JavaScript maps on devices (like iPad and iPhone) where Flash player is not supported

* Use of FusionCharts JavaScript class (`FusionCharts.js`) to render and manage maps

* Support for JSON data format

* Support for LinkedCharts, where a single data source controls multiple maps

* Color-range based interactive legends that allow selective showing/hiding of map entities

* Interactive gradient legend to show/hide entities

* Advanced print management for Flash Maps in non-Internet Explorer browsers

* Additional options for efficient event handling using JavaScript

* Introduced click, roll-over and roll-out events for Markers and Connectors

* Introduced click event for Legend items

* Support for dynamic update of map properties using JavaScript

* Dynamic resizing of maps when parent containers resize

* Image can now be used to fill the map background in different modes with custom alignments

* Ability to control number formatting for Indian and East Asian thousand/lac separation formats

* Support for recursive number scaling to display the map data better

* jQuery plugin to render and manage maps using jQuery syntax

* 2 new maps added in the Core Map Pack:

    * World Map with Antarctica (`FCMap_WorldWithAntarctica.swf`)

    * World Map (8 Regions) with Antarctica (`FCMap_World8WithAntarctica.swf`)