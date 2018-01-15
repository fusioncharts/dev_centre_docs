---
permalink: advanced-chart-configurations/events/classifying-events.html
title: Classifying Events | FusionCharts
description: FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart. This article gives you a detailed classification of the events in FusionCharts Suite XT.
heading: Classifying Events
chartPresent: false
---

## Prerequisites

* [Introduction to Events](/advanced-charting/events/introduction-to-events)
* [Handling Events](/advanced-charting/events/handling-events)

FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. 
These events are classified based on when they are triggered, or the chart-type they belong to.
For example, there are events that are triggered during/when the chart renders, events triggered when chart data is loaded, events specific to pie charts, events specific to drag-able charts, and so on.

This article gives you a detailed classification of the events in FusionCharts Suite XT.

[ready](/api/fusioncharts/fusioncharts-events#static-event-ready) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded](/api/fusioncharts/fusioncharts-events#event-loaded)
* [rendered](/api/fusioncharts/fusioncharts-events#event-rendered)
* [renderComplete](/api/fusioncharts/fusioncharts-events#event-renderComplete)
* [backgroundLoaded](/api/fusioncharts/fusioncharts-events#event-backgroundLoaded)
* [backgroundLoadError](/api/fusioncharts/fusioncharts-events#event-backgroundLoadError)
* [beforeRender](/api/fusioncharts/fusioncharts-events#event-beforeRender)
* [renderCancelled](/api/fusioncharts/fusioncharts-events#event-renderCancelled)
* [beforeInitialize](/api/fusioncharts/fusioncharts-events#static-event-beforeInitialize)
* [initialized](/api/fusioncharts/fusioncharts-events#static-event-initialized)
* [dataRestored](/api/fusioncharts/fusioncharts-events#event-dataRestored)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#event-chartUpdated)

## Data Load-related Events

* [dataLoadRequested](/api/fusioncharts/fusioncharts-events#event-dataLoadRequested)
* [dataLoadError](/api/fusioncharts/fusioncharts-events#event-dataLoadError)
* [dataLoadCancelled](/api/fusioncharts/fusioncharts-events#event-dataLoadCancelled)
* [dataLoadRequestCancelled](/api/fusioncharts/fusioncharts-events#event-dataLoadRequestCancelled)
* [dataLoadRequestCompleted](/api/fusioncharts/fusioncharts-events#event-dataLoadRequestCompleted)
* [beforeDataUpdate](/api/fusioncharts/fusioncharts-events#event-beforeDataUpdate)
* [dataUpdateCancelled](/api/fusioncharts/fusioncharts-events#event-dataUpdateCancelled)
* [dataUpdated](/api/fusioncharts/fusioncharts-events#event-dataUpdated)
* [dataInvalid](/api/fusioncharts/fusioncharts-events#event-dataInvalid)
* [dataXMLInvalid](/api/fusioncharts/fusioncharts-events#event-dataXMLInvalid)
* [dataLoaded](/api/fusioncharts/fusioncharts-events#event-dataLoaded)
* [noDataToDisplay](/api/fusioncharts/fusioncharts-events#event-noDataToDisplay)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit](/api/fusioncharts/fusioncharts-events#event-beforeDataSubmit)
* [dataSubmitError](/api/fusioncharts/fusioncharts-events#event-dataSubmitError)
* [dataSubmitted](/api/fusioncharts/fusioncharts-events#event-dataSubmitted)
* [dataSubmitCancelled](/api/fusioncharts/fusioncharts-events#event-dataSubmitCancelled)

### Events for Drag-able Charts

* [dataplotDragStart](/api/fusioncharts/fusioncharts-events#event-dataplotDragStart)
* [dataplotDragEnd](/api/fusioncharts/fusioncharts-events#event-dataplotDragEnd)

### Events for the Drag-node Chart

* [nodeAdded](/api/fusioncharts/fusioncharts-events#event-nodeAdded)
* [nodeUpdated](/api/fusioncharts/fusioncharts-events#event-nodeUpdated)
* [nodeDeleted](/api/fusioncharts/fusioncharts-events#event-nodeDeleted)
* [connectorAdded](/api/fusioncharts/fusioncharts-events#event-connectorAdded)
* [connectorUpdated](/api/fusioncharts/fusioncharts-events#event-connectorUpdated)
* [connectorDeleted](/api/fusioncharts/fusioncharts-events#event-connectorDeleted)
* [labelAdded](/api/fusioncharts/fusioncharts-events#event-labelAdded)
* [labelDeleted](/api/fusioncharts/fusioncharts-events#event-labelDeleted)
* [labelClick](/api/fusioncharts/fusioncharts-events#event-labelClick)
* [labelRollOver](/api/fusioncharts/fusioncharts-events#event-labelRollOver)
* [labelRollOut](/api/fusioncharts/fusioncharts-events#event-labelRollOut)
* [labelDragStart](/api/fusioncharts/fusioncharts-events#event-labelDragStart)
* [labelDragEnd](/api/fusioncharts/fusioncharts-events#event-labelDragEnd)

### Events for Pie and Doughnut Charts

* [rotationEnd](/api/fusioncharts/fusioncharts-events#event-rotationEnd)
* [rotationStart](/api/fusioncharts/fusioncharts-events#event-rotationStart)
* [centerLabelRollover](/api/fusioncharts/fusioncharts-events#event-centerLabelRollover)
* [centerLabelRollout](/api/fusioncharts/fusioncharts-events#event-centerLabelRollout)
* [centerLabelClick](/api/fusioncharts/fusioncharts-events#event-centerLabelClick)
* [centerLabelChanged](/api/fusioncharts/fusioncharts-events#event-centerLabelChanged)
* [slicingStart](/api/fusioncharts/fusioncharts-events#event-slicingStart)
* [slicingEnd](/api/fusioncharts/fusioncharts-events#event-slicingEnd)

### Events for Scroll Charts

* [scrollStart](/api/fusioncharts/fusioncharts-events#event-scrollStart)
* [scrollEnd](/api/fusioncharts/fusioncharts-events#event-scrollEnd)

### Events for Real-time Charts

* [alertComplete](/api/fusioncharts/fusioncharts-events#event-alertComplete)
* [realTimeUpdateComplete](/api/fusioncharts/fusioncharts-events#event-realTimeUpdateComplete)
* [realTimeUpdateError](/api/fusioncharts/fusioncharts-events#event-realTimeUpdateError)

### Events for the Gantt Chart

* [processClick](/api/fusioncharts/fusioncharts-events#event-processClick)
* [processRollOver](/api/fusioncharts/fusioncharts-events#event-processRollOver)
* [processRollOut](/api/fusioncharts/fusioncharts-events#event-processRollOut)
* [categoryClick](/api/fusioncharts/fusioncharts-events#event-categoryClick)
* [categoryRollOver](/api/fusioncharts/fusioncharts-events#event-categoryRollOver)
* [categoryRollOut](/api/fusioncharts/fusioncharts-events#event-categoryRollOut)
* [milestoneClick](/api/fusioncharts/fusioncharts-events#event-milestoneClick)
* [milestoneRollOver](/api/fusioncharts/fusioncharts-events#event-milestoneRollOver)
* [milestoneRollOut](/api/fusioncharts/fusioncharts-events#event-milestoneRollOut)
* [connectorClick](/api/fusioncharts/fusioncharts-events#event-connectorClick)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#event-connectorRollOver)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#event-connectorRollOut)

### Events for the Select-scatter Chart

* [selectionStart](/api/fusioncharts/fusioncharts-events#event-selectionStart)
* [selectionEnd](/api/fusioncharts/fusioncharts-events#event-selectionEnd)
* [selectionRemoved](/api/fusioncharts/fusioncharts-events#event-selectionRemoved)

### Events for the Zoom-line Chart

* [zoomReset](/api/fusioncharts/fusioncharts-events#event-zoomReset)
* [zoomedOut](/api/fusioncharts/fusioncharts-events#event-zoomedOut)
* [zoomedIn](/api/fusioncharts/fusioncharts-events#event-zoomedIn)
* [zoomed](/api/fusioncharts/fusioncharts-events#event-zoomed)
* [zoomModeChanged](/api/fusioncharts/fusioncharts-events#event-zoomModeChanged)

### Event for the SSGrid Chart

* [pageNavigated](/api/fusioncharts/fusioncharts-events#event-pageNavigated)

## Map-related Events

* [entityRollOut](/api/fusioncharts/fusioncharts-events#event-entityRollOut)
* [entityRollOver](/api/fusioncharts/fusioncharts-events#event-entityRollOver)
* [entityClick](/api/fusioncharts/fusioncharts-events#event-entityClick)
* [markerRollOver](/api/fusioncharts/fusioncharts-events#event-markerRollOver)
* [markerRollOut](/api/fusioncharts/fusioncharts-events#event-markerRollOut)
* [markerClick](/api/fusioncharts/fusioncharts-events#event-markerClick)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#event-connectorRollOver)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#event-connectorRollOut)
* [connectorClick](/api/fusioncharts/fusioncharts-events#event-connectorClick)

## Generic Events

* [annotationRollOver](/api/fusioncharts/namespaces/annotations)
* [annotationRollOut](/api/fusioncharts/namespaces/annotations)
* [annotationClick](/api/fusioncharts/namespaces/annotations)
* [dataLabelRollOver](/api/fusioncharts/fusioncharts-events#event-dataLabelRollOver)
* [dataLabelRollOut](/api/fusioncharts/fusioncharts-events#event-dataLabelRollOut)
* [dataLabelClick](/api/fusioncharts/fusioncharts-events#event-dataLabelClick)
* [beforeDispose](/api/fusioncharts/fusioncharts-events#event-beforeDispose)
* [disposed](/api/fusioncharts/fusioncharts-events#event-disposed)
* [disposeCancelled](/api/fusioncharts/fusioncharts-events#event-disposeCancelled)
* [logoRollover](/api/fusioncharts/fusioncharts-events#event-logoRollover)
* [logoRollout](/api/fusioncharts/fusioncharts-events#event-logoRollout)
* [logoClick](/api/fusioncharts/fusioncharts-events#event-logoClick)
* [logoLoaded](/api/fusioncharts/fusioncharts-events#event-logoLoaded)
* [logoLoadError](/api/fusioncharts/fusioncharts-events#event-logoLoadError)
* [beforeResize](/api/fusioncharts/fusioncharts-events#event-beforeResize)
* [resized](/api/fusioncharts/fusioncharts-events#event-resized)
* [resizeCancelled](/api/fusioncharts/fusioncharts-events#event-resizeCancelled)
* [chartTypeChanged](/api/fusioncharts/fusioncharts-events#event-chartTypeChanged)
* [chartClick](/api/fusioncharts/fusioncharts-events#event-chartClick)
* [chartMouseMove](/api/fusioncharts/fusioncharts-events#event-chartMouseMove)
* [chartRollOver](/api/fusioncharts/fusioncharts-events#event-chartRollOver)
* [chartRollOut](/api/fusioncharts/fusioncharts-events#event-chartRollOut)
* [dataRestored](/api/fusioncharts/fusioncharts-events#event-dataRestored)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#event-chartUpdated)
* [chartCleared](/api/fusioncharts/fusioncharts-events#event-chartCleared)
* [pinned](/api/fusioncharts/fusioncharts-events#event-pinned)
* [beforeExport](/api/fusioncharts/fusioncharts-events#event-beforeExport)
* [exported](/api/fusioncharts/fusioncharts-events#event-exported)
* [exportCancelled](/api/fusioncharts/fusioncharts-events#event-exportCancelled)
* [legendPointerDragStart](/api/fusioncharts/fusioncharts-events#event-legendPointerDragStart)
* [legendPointerDragStop](/api/fusioncharts/fusioncharts-events#event-legendPointerDragStop)
* [legendRangeUpdated](/api/fusioncharts/fusioncharts-events#event-legendRangeUpdated)
* [legendItemClicked](/api/fusioncharts/fusioncharts-events#event-legendItemClicked)
* [legendItemRollover](/api/fusioncharts/fusioncharts-events#event-legendItemRollover)
* [legendItemRollout](/api/fusioncharts/fusioncharts-events#event-legendItemRollout)
* [linkClicked](/api/fusioncharts/fusioncharts-events#event-linkClicked)
* [beforeLinkedItemOpen](/api/fusioncharts/fusioncharts-events#event-beforeLinkedItemOpen)
* [linkedItemOpened](/api/fusioncharts/fusioncharts-events#event-linkedItemOpened)
* [beforeLinkedItemClose](/api/fusioncharts/fusioncharts-events#event-beforeLinkedItemClose)
* [linkedItemClosed](/api/fusioncharts/fusioncharts-events#event-linkedItemClosed)
* [dataplotRollOver](/api/fusioncharts/fusioncharts-events#event-dataplotRollOver)
* [dataplotRollOut](/api/fusioncharts/fusioncharts-events#event-dataplotRollOut)
* [dataplotClick](/api/fusioncharts/fusioncharts-events#event-dataplotClick)
* [overlayButtonClick](/api/fusioncharts/fusioncharts-events#event-overlayButtonClick)
* [beforePrint](/api/fusioncharts/fusioncharts-events#event-beforePrint)
* [printComplete](/api/fusioncharts/fusioncharts-events#event-printComplete)
* [printCancelled](/api/fusioncharts/fusioncharts-events#event-printCancelled)
* [printReadyStateChange (Deprecated API)](/api/fusioncharts/fusioncharts-events#event-printReadyStateChange)