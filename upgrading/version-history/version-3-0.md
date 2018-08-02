---
title: Version 3.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.0.
heading: Version 3.0
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 9th November, 2006

## FusionCharts

### New Chart Types

FusionCharts v3 introduces a lot of new chart types like:

* Drag-Node Charts

* Select Scatter Chart

* Advanced Candlestick chart with support for line, bar and volume columns

* Drag-able Column and Line Charts for simulation charting

* Spline Charts

* Spline Area Charts

* Logarithmic Axis Charts

* 2D Multi-chart Single Y Combination Chart.

* 2D Multi-chart Dual Y Combination Chart. This chart be used to plot 9 types of chart:

    * Column (Primary Y) + Line (Secondary Y) Combination

    * Column (Primary Y) + Area (Secondary Y) Combination

    * Column (Primary Y) + Column (Secondary Y) Combination

    * Area (Primary Y) + Line (Secondary Y) Combination

    * Area (Primary Y) + Column (Secondary Y) Combination

    * Area (Primary Y) + Area (Secondary Y) Combination

    * Line (Primary Y) + Line (Secondary Y) Combination

    * Line (Primary Y) + Column (Secondary Y) Combination

    * Line (Primary Y) + Area (Secondary Y) Combination

    * 3D Stacked Column Line Dual Y Combination Chart

    * Kagi Chart

Few of the the above listed charts are not in the standard FusionCharts v3 pack. e.g., Spline, Logarithmic & Drag-able charts are part of PowerCharts pack, which can be purchased separately.

### Easy yet powerful AJAX/JavaScript integration

FusionCharts v3 offers advanced options to integrate charts with AJAX applications or JavaScript modules. You can update charts on client side, invoke JavaScript functions as hotspot links, or make dynamic calls for XML data without involving any page refreshes. You can also specify a DOMId for each chart and have it register with JavaScript. The chart can then keep JavaScript functions posted about its activities.

### Visual XML Generator Utility

FusionCharts v3 introduces a new visual XML and chart Generator utility, which helps you easily build your XML data for the charts. You can manually enter data in a grid to form XML or convert your existing data from spreadsheets / CSV Files / tables into XML data.

### Maps Supported

FusionCharts v3 introduces maps in PowerMaps pack. The PowerMaps Pack is a collection of 466 Flash based vector maps used to show different types of data related to geographical divisions. Suitable for use in websites and applications, each map exposes its properties using an XML API. Setting up a map for use barely takes a few minutes and doesn't involve any modification of source code. All you need to do is feed the data in XML file and you're ready to go.

### STYLE Element

FusionCharts v3 introduces Styles to help you apply font, effects and animations to various objects of the chart. Styles lends a simple mechanism, using which you can easily control the visual layout of charts.

### Built in Adobe Flash 8 using ActionScript 2

FusionCharts v3 is coded in Flash 8 and ActionScript 2 to fully utilize the new and advanced features of Flash 8 like dynamic tweening, filters, better speed, advanced OOP structures etc.

### New Debug Mode

FusionCharts v3 introduces a debug mode for each chart. The debug mode helps you to look into what's happening in the chart behind the scenes. You can see how the chart is initializing, getting its data and interacting with JavaScripts. Various errors generated are also shown in this. So, whenever you see an error on the chart now, all you need to do is switch to debug mode and fix it up.

### Gradient Support

FusionCharts v3 supports gradients for most of chart objects like background, canvas, data plot etc. Many new charts support a single attribute use3DLighting to allow advanced lighting and gradient effects on the chart for better visuals.

### Palette Support

FusionCharts v3 introduces Palettes to help you quickly select colors themes for your chart. Starting v3, you can select one of the five pre-defined palettes to change look of your chart. You wouldn't need to specify any hex color codes when using palettes.

### Dashed Line Support

Starting FusionCharts v3, you can use dashed lines to plot:

* Data (Columns, Lines, Pies etc.)

* Grid Divisional Lines

* Trend Lines

* Vertical separator lines

You can also specify the dash properties like dash length, gap etc.

### Multiple display modes for data labels

In FusionCharts v3, a lot of options have been introduced to allow for better x-axis label control. You can now WRAP, STAGGER or ROTATE the x-axis labels.

### Rotated value boxes & dynamic placement options

The data value text fields can now be rotated to avoid cluttering. Also, in case of column charts, you can select whether to place the value textboxes inside the columns or outside. If there is no space, FusionCharts v3 will automatically adjust positions.

### Number scale support

FusionCharts v3 introduces number scaling and better control over number formatting.

### Better printing support

The context menu of the chart now includes a new item "Print Chart", which offers standard cross-browser printing support.

### Advanced pie and doughnut charts

The pie and doughnut charts of FusionCharts v3 offers advanced end-user interactivity options like dynamic slicing, rotation, links etc. Also, Smart Labels have now been introduced in pie/doughnut charts.

### Advanced drill down features

The chart items can now link to new window, pop-up, frames or self window.

### Entire chart as a hotspot

Starting v3, the entire chart can now act as a single hotspot.

### Custom tool tip for each data plot item

You can now set your own tool tip text for each data plot item.

#### 17th August, 2007

## FusionWidgets

### Core Changes

* 7 new charts:

    * Real-time stacked column and real-time dual Y line chart

    * Bullet graphs - horizontal and vertical

    * Spark Line, Spark Column and Spark Win/Loss charts

* Made using FusionCharts v3 framework, thereby offering:

    * Easy but advanced integration with JavaScript

    * STYLE support from FusionCharts v3 framework

    * Built in Adobe Flash 8 using ActionScript 2

    * New Debug Mode

    * Gradient Support

    * Palette Support

    * Dashed Line Support

    * Number scale support

    * Better printing support

    * Advanced drill down features

    * Entire chart as a hotspot

    * Custom tool tip for each data plot item

    * Multiple language support for application messages

* Edit mode supported for angular and linear gauges

* Message logger supported in all real-time charts for streaming real-time messages from server to client

* Alert Manager supported in all real-time charts

* More control over Annotations (previously custom objects) using XML and JavaScript

* Context Menu in all real-time charts to stop/start update, clear chart. Helps user stop an update, if he feels that this counter is not needed to monitor for the given timeframe. After stopping, he can also restart the update dynamically.

* JavaScript API in all real-time charts to stop/start update, clear chart, reload chart etc. at client side.

* New JavaScript API to feed data to chart

* Single color theme introduced to help you create your own color palettes for the chart, based on a single color.

* In real-time charts - ability to add a data stamp (similar to timestamp) at the end of real-time data stream URL - for easy tracking of "what value was last sent to chart?" No need to use registers, sessions or database fields to control this. Use this simple and effective technique over stateless environment.

### Data-streaming chart specific changes

* Axis updates each time to reflect the limits from data in current view

* Annotations introduced - helps you draw any custom shapes, objects, load images anywhere on the chart.

* Canvas Margins can be adjusted allowing you to set increased canvas margins so that if you've larger data labels or y-axis values, you can adjust the margins accordingly.

* Selectable (Interactive) Legend - so that you can opt to show/hide a full data-set at client side. Helps if you're comparing multiple streams of input and just want to focus on one - but keep others in frame.

* Real-time vLines with labels.

* Ability to send clear command from server - so that chart can be cleared as and when required

* Ability to send stopUpdate command from server, if you need to stop update of a specific chart.

* Ability to retrieve the chart's current data view using client side JavaScript.

* JavaScript event FC_ChartUpdated raised when new data feed is received by chart. You can use this event to update your other display containers whenever the chart updates in real-time.

* Ability to specify different updateInterval and clearInterval (apart from refreshInterval) - helps you specify when data is retrieved and queued - and when chart is refreshed to show new data. Also, you can set pre-defined clear intervals to clear the chart.

### Angular Gauge specific changes

* Gauge can now be drawn in any angle and any direction

* Auto-scale facility for the gauge and annotations

* Customizable gradient fill mix for color scale

* Customizable gradient properties for pivot

* Percent based gauge radius supported

* Edit mode supported

* Option to show value for each dial, with customizable co-ordinates

* Ability to add trend-points, trend-arcs & trend-markers

* Option to show tick and trend values inside or outside gauge

* Message logger supported

* Alert Manager supported

* Rear-extension supported for each dial to render more realistic gauges

### Gantt chart specific changes

* Supports both date & time now.

* Customizable output date format.

* Ability to show each task's completion in percentage as either empty bar or using a different fill color (slack fill color)

* Scrolling support for both data table and Gantt pane.

* Ability to show individual task bars as groups - to indicate task groups.

* Customizable tooltip properties - also, you can opt to show whether to show task date as part of tool tip content.

* Ability to add a legend to the chart to show color keys. Fully customizable legend cosmetics.

* Ability to define each task's height and top-padding in percentage, instead of just pixels.

* Pre-define palettes and single color theme selectors to help you easily set colors for the chart.

* Round edged task bars supported

* Customizable gradient mix & shadow for task bars.

* Ability to define annotations over the Gantt chart to show further information.

### Funnel Chart specific changes

* Ability to draw the same data as either streamlined funnel chart or as section funnel chart

* Interactive funnel slices, when clicked can separate from the main funnel.

* Option to plot funnel slices as hollow or filled

* Option to set same slant angle for each funnel slice (or make them dependent on data)

* Ability to seamlessly convert 3D funnel to 2D funnel, by right clicking on chart and selecting View 2D

* Option to render the funnel in 2D mode itself with more control over border and fill properties

* Option to show values as actual values or in percentage

* If shown as percentage, you can opt to show it as percentage of the first value or percentage of previous value.

* Smart labels to avoid overlapping of funnel labels

* Option to place labels at side or at center

* Custom tool text for each funnel slice

### Pyramid Chart specific changes

* Interactive pyramid slices, when clicked can separate from the main pyramid.

* Ability to seamlessly convert 3D pyramid to 2D pyramid, by right clicking on chart and selecting View 2D

* Option to render the pyramid in 2D mode itself with more control over border and fill properties

* Option to show values as actual values or in percentage

* Smart labels to avoid overlapping of pyramid labels

* Option to place labels at side or at center

* Custom tool text for each pyramid slice

### Linear Gauge specific changes

* Multiple pointers supported

* Each pointer can have tool text and link

* Edit mode supported

* Customizable gradient fill for gauge

* Round edged gauges supported

* Much better control over tick marks & tick values

* Ablity to show pointer above or below gauge

* Option to create trend-lines/zones

### LED Gauge specific changes

* Better control over tick marks & values

* Single color fill supported for entire LED

### Thermometer Gauge specific changes

* 2D/3D fill mode.

* Better control over tick marks & values.

### Cylinder Gauge specific changes

* Enhanced and realistic 3D look

* Better control over tick marks and values

* Animation supported for fill

### Bulb Gauge specific changes

* Ability to show value inside or outside the bulb

* Option to show color range label as chart value, instead of actual numerical value