---
title: Events | FusionCharts
description: Discover the power of events in executing actions & manipulating the DOM with our comprehensive guide on event triggers for chart rendering and interaction.
heading: Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server to render the chart.

In this article, we'll discuss the events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.

## DataLoad Events

Syntax for all the DataLoad Events is shown below:

```csharp
visualizationObject.Events.AttachDataLoadEvent(FusionChartsEvents.DataLoadEvents.DATALOADED, "OnDataLoaded");
```

In the above code:

* `visualizationObject` is the object for FusionCharts.Net Visualization.
* `Events` is the object of `visualizationObject` object.
* `AttachDataLoadEvent` is a method of `Events` object.
* `FusionChartsEvents` is the class.
* `DataLoadEvents` is the enum of `FusionChartsEvents` class.
* `DATALOADED` is the enum value.
* `OnDataLoaded` is the client side event handler in string format. 

The DataLoad events are listed below:

### `DATALOADREQUESTED`

This event is triggered when chart data is loaded from a URL instead of a static JSON or XML file from the system.

### `DATALOADERROR`

Triggered if an error is encountered while loading data from the specified URL to the chart object.

### `DATALOADCANCELLED`

Triggered when the default behavior of the DATALOADREQUESTED event is cancelled using the `AttachDataLoadEvent()` method. Subsequently, all AJAX requests are aborted.

### `DATALOADREQUESTCANCELLED`

Triggered when the default behavior of the DATALOADREQUESTED event is cancelled by calling the `AttachDataLoadEvent()` method. The event is internally fired if the data source is a local path or the URL fails internal security checks.

### `DATALOADREQUESTCOMPLETED`

Triggered when chart data is successfully loaded from a URL (instead of a static JSON or XML file from the system).

### `BEFOREDATAUPDATE`

Triggered just before chart data is passed to the chart. It is useful if any operations have to be performed on the data before it is applied to the chart.

### `DATAUPDATECANCELLED`

Triggered when the default behavior of the BEFOREDATAUPDATE event is cancelled by calling the `AttachDataLoadEvent()` method.

### `DATAUPDATED`

Triggered when chart data is updated and the chart is redrawn.

### `DATAINVALID`

Triggered when there is no chart data or data with parsing or fetching (from the server) errors is submitted to the chart. This event is required when the chart does not require initial data to begin with. In that case, this event is **not** triggered.

### `DATAXMLINVALID`

Triggered if the chart data (passed to the chart object either by URL or as a string) is not in a usable format.

### `DATALOADED`

Triggered when the data for a chart (passed by url or as a string) is loaded to the chart object. It ensures that the data passed is valid and the chart can be rendered.

### `NODATATODISPLAY`

Triggered when no data is passed to the chart. It can be used to show an error message or take a corrective measure.

## Generic Events

Syntax for the generic Events is shown below:

```
visualizationObject.Events.AttachGenericEvents(FusionChartsEvents.AttachGenericEvents.DATAPLOTCLICK,"OnDataPlotClick");
```

In the above code:

* `visualizationObject` is the object for FusionCharts.Net Visualization.
* `Events` is the object of `visualizationObject` object.
* `AttachGenericEvents` is a method of `Events` object.
* `FusionChartsEvents` is the class.
* `AttachGenericEvents` is the enum of `FusionChartsEvents` class.
* `DATAPLOTCLICK` is the enum value.
* `OnDataPlotClick` is the client side event handler in string format. 

The events are listed below:

### `DATALABELCLICK`

Triggered every time the x-axis label of a data plot is clicked.

### `BEFOREDISPOSE`

Triggered before a chart is deleted and cleaned from memory. Usually, this event is triggered by the dispose() method. 

**Note:** Unused charts should be disposed to avoid memory-leaks within an application or dashboard.

### `DISPOSED`

Triggered when a chart is deleted and cleaned from memory. Usually, this event is triggered by the dispose() method.

**Note:** Unused charts should be disposed to avoid memory-leaks within an application or dashboard.

### `DISPOSECANCELLED`

Triggered when the default behaviour of the BEFOREDISPOSE event is cancelled using the `AttachDataLoadEvent()` method. 

### `BEFORERESIZE`

Triggered before a chart is resized.

### `RESIZED`

Triggered when a chart is resized by changing dimensions of the chart container element, when the dimensions are in the percentage format.

### `RESIZECANCELLED`

Triggered when the `AttachDataLoadEvent()` method is called from within the BEFORERESIZE event. This cancels the instructions to resize the chart container.

### `CHARTCLICK`

Triggered every time a chart is clicked.

### `CHARTMOUSEMOVE`

Triggered when the mouse pointer is moved over a chart. The event arguments pass useful information related to pointer location, relative to the chart and the page, that can be used for positioning elements like annotations or integrating charts with custom tooltip libraries.

### `DATARESTORED`

Triggered when all data plots on the interactive charts (funnel, pyramid) are restored to their original values (by clicking the **Restore** button).

### `CHARTUPDATED`

Triggered every time the data on any of the interactive charts is updated by user interaction.

### `CHARTCLEARED`

Triggered when the complete chart canvas is cleared.

### `BEFOREEXPORT`

Triggered just before the exporting process of a chart begins, through the export context menu or when the export related method is called programmatically.

### `EXPORTED`

Triggered when a chart exports successfully.

### `EXPORTCANCELLED`

Triggered when the default behavior of the BEFOREEXPORT event is cancelled by calling the `eventObj.preventDefault()` method.

### `LEGENDITEMCLICKED`

Triggered when a legend item is clicked.

### `LEGENDITEMROLLOVER`

Triggered when the mouse pointer is rolled over a legend item.

### `LEGENDITEMROLLOUT`

Triggered when the mouse pointer is rolled out from over a legend item.

### `DATAPLOTROLLOVER`

Triggered when the mouse pointer is rolled over a data plot.

### `DATAPLOTROLLOUT`

Triggered when the mouse pointer is rolled out from over a data plot.

### `DATAPLOTCLICK`

Triggered when a data plot is clicked.

### `BEFOREPRINT`

Triggered before the printing process for a chart begins.

### `PRINTCOMPLETE`

Triggered when the user confirms or cancels printing through the browser's print dialog box.

### `PRINTCANCELLED`

Triggered when the default behavior of the beforePrint event is cancelled by calling the `AttachGenericEvents()` method.

## Rendered Events

Syntax for all the Rendered Events is shown below:

```
visualizationObject.Events.AttachRenderedEvents(FusionChartsEvents.RenderedEvents.LOADED,"OnDataLoad");
```

In the above code:

* `visualizationObject` is the object for FusionCharts.Net Visualization.
* `Events` is the object of `visualizationObject` object.
* `AttachRenderedEvents` is a method of `Events` object.
* `FusionChartsEvents` is the class.
* `AttachRenderedEvents` is the enum of `FusionChartsEvents` class.
* `LOADED` is the enum value.
* `OnDataLoad` is the client side event handler in string format. 

The Rendered events are listed below:

### `LOADED`

Triggered when the chart has finished downloading itself in the client environment. It indicates that the all the resources required to render the chart are ready and that the chart can be drawn. This event can be used to hide any loader components that you might have on your page.

### `RENDERED`

Triggered when the chart completes drawing the chart canvas. The chart renders if the data provided is correct; otherwise, an error message will occur.

**Note:** If chart animation is enabled, this event is triggered before the animation process.

### `RENDERCOMPLETE`

Triggered every time a chart is rendered. It is also triggered every time chart data is successfully updated, which triggers a re-render internally.

### `BACKGROUNDLOADED`

Triggered when the background image for a chart is loaded.

### `BACKGROUNDLOADERROR`

Triggered when there is an error in loading the background image for a chart.

### `BEFORERENDER`

Triggered before a chart is to be rendered. Calling the `AttachGenericEvents()` method on this event will cancel the rendering process.

### `RENDERCANCELLED`

Triggered when the default behavior of the BEFORERENDER event is cancelled using the `AttachGenericEvents()` method.

### `BEFOREINITIALIZE`

This pre-initialization event is triggered every time a new instance of the `FusionChartsEvents` object is created. It then triggers a number of modules that need to be setup on every instance of FusionCharts; the event can be used to perform any actions required to be completed before the initialization of each chart.

### `INITIALIZED`

Triggered when a new instance of the `FusionChartsEvents` constructor is created.

**Note:** Initialization does not indicate that the chart has rendered; it only indicates that the JavaScript object instance is created and is ready to be operated upon.

### `DATARESTORED`

Triggered when all data plots on the interactive charts (funnel, pyramid) are restored to their original values.

### `CHARTUPDATED`

Triggered every time the data on any of the interactive charts (funnel, pyramid) is updated by user interaction.

## Chart Specific Events

## Pie and Doughnut Chart

Syntax for all the events is shown below:

```
visualizationObject.Events.AttachSpecialEvents(PieDoughnutEvents.SpecialEvents.ROTATIONEND,"OnRotationEnd");
```

In the above code:

* `visualizationObject` is the object for FusionCharts.Net Visualization.
* `Events` is the object of `visualizationObject` object.
* `AttachSpecialEvents` is a method of `Events` object.
* `FusionChartsEvents` is the class.
* `AttachSpecialEvents` is the enum of `FusionChartsEvents` class.
* `ROTATIOEND` is the enum value.
* `OnRotationEnd` is the client side event handler in string format. 

The events are listed below:

### `ROTATIONEND`

Triggered when a pie/doughnut chart completes rotating.

### `ROTATIONSTART`

Triggered when a pie/doughnut chart starts rotating.

### `CENTERLABELROLLOVER`

Triggered every time the mouse pointer is rolled over the center label of the doughnut chart.

### `CENTERLABELROLLOUT`

Triggered every time the mouse pointer is rolled out of the center label of the doughnut chart.

### `CENTERLABELCLICK`

Triggered every time the center label of the doughnut chart is clicked.

### `CENTERLABELCHANGED`

Triggered every time the text within the center label of the doughnut chart changes.

### `SLICINGSTART`

Triggered when a pie or a doughnut slice begins slicing out/slicing in.

### `SLICINGEND`

Triggered when a pie or a doughnut slice completes slicing out/slicing in.

## Scroll Charts

Syntax for all the events is shown below:

```
visualizationObject.Events.AttachSpecialEvents(ScrollChartEvents.SpecialEvents.SCROLLEND,"OnScrollEnd");
```

In the above code:

* `visualizationObject` is the object for FusionCharts.Net Visualization.
* `Events` is the object of `visualizationObject` object.
* `AttachSpecialEvents` is a method of `Events` object.
* `FusionChartsEvents` is the class.
* `AttachSpecialEvents` is the enum of `FusionChartsEvents` class.
* `SCROLLEND` is the enum value.
* `OnScrollEnd` is the client side event handler in string format. 

The events are listed below:

### `SCROLLSTART`

Triggered when you begin scrolling through a chart.

### `SCROLLEND`

Triggered when a chart completes scrolling.
