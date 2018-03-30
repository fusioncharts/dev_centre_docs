---
permalink: advanced-chart-configurations/events/classifying-events.html
title: Classifying Events | FusionCharts
description: FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart. This article gives you a detailed classification of the events in FusionCharts Suite XT.
heading: Classifying Events
chartPresent: false
---

## Pre-requisites

* [Introduction to Events]({% site.baseurl %}/advanced-chart-configurations/events/introduction-to-events "@@open-newtab")
* [Handling Events]({% site.baseurl %}/advanced-chart-configurations/events/handling-events "@@open-newtab")

FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. 
These events are classified based on when they are triggered, or the chart-type they belong to.
For example, there are events that are triggered during/when the chart renders, events triggered when chart data is loaded, events specific to pie charts, events specific to drag-able charts, and so on.

This article gives you a detailed classification of the events in FusionCharts Suite XT.

[ready]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#static-event-ready) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-loaded)
* [rendered]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-rendered)
* [renderComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-renderComplete)
* [backgroundLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-backgroundLoaded)
* [backgroundLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-backgroundLoadError)
* [beforeRender]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeRender)
* [renderCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-renderCancelled)
* [beforeInitialize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#static-event-beforeInitialize)
* [initialized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#static-event-initialized)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataRestored)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartUpdated)

## Data Load-related Events

* [dataLoadRequested]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoadRequested)
* [dataLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoadError)
* [dataLoadCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoadCancelled)
* [dataLoadRequestCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoadRequestCancelled)
* [dataLoadRequestCompleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoadRequestCompleted)
* [beforeDataUpdate]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeDataUpdate)
* [dataUpdateCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataUpdateCancelled)
* [dataUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataUpdated)
* [dataInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataInvalid)
* [dataXMLInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataXMLInvalid)
* [dataLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLoaded)
* [noDataToDisplay]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-noDataToDisplay)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeDataSubmit)
* [dataSubmitError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataSubmitError)
* [dataSubmitted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataSubmitted)
* [dataSubmitCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataSubmitCancelled)

### Events for Drag-able Charts

* [dataplotDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataplotDragStart)
* [dataplotDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataplotDragEnd)

### Events for the Drag-node Chart

* [nodeAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-nodeAdded)
* [nodeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-nodeUpdated)
* [nodeDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-nodeDeleted)
* [connectorAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorAdded)
* [connectorUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorUpdated)
* [connectorDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorDeleted)
* [labelAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelAdded)
* [labelDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelDeleted)
* [labelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelClick)
* [labelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelRollOver)
* [labelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelRollOut)
* [labelDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelDragStart)
* [labelDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-labelDragEnd)

### Events for Pie and Doughnut Charts

* [rotationEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-rotationEnd)
* [rotationStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-rotationStart)
* [centerLabelRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-centerLabelRollover)
* [centerLabelRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-centerLabelRollout)
* [centerLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-centerLabelClick)
* [centerLabelChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-centerLabelChanged)
* [slicingStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-slicingStart)
* [slicingEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-slicingEnd)

### Events for Scroll Charts

* [scrollStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-scrollStart)
* [scrollEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-scrollEnd)

### Events for Real-time Charts

* [alertComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-alertComplete)
* [realTimeUpdateComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-realTimeUpdateComplete)
* [realTimeUpdateError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-realTimeUpdateError)

### Events for the Gantt Chart

* [processClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-processClick)
* [processRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-processRollOver)
* [processRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-processRollOut)
* [categoryClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-categoryClick)
* [categoryRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-categoryRollOver)
* [categoryRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-categoryRollOut)
* [milestoneClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-milestoneClick)
* [milestoneRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-milestoneRollOver)
* [milestoneRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-milestoneRollOut)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorClick)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorRollOver)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorRollOut)

### Events for the Select-scatter Chart

* [selectionStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-selectionStart)
* [selectionEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-selectionEnd)
* [selectionRemoved]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-selectionRemoved)

### Events for the Zoom-line Chart

* [zoomReset]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-zoomReset)
* [zoomedOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-zoomedOut)
* [zoomedIn]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-zoomedIn)
* [zoomed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-zoomed)
* [zoomModeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-zoomModeChanged)

### Event for the SSGrid Chart

* [pageNavigated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-pageNavigated)

## Map-related Events

* [entityRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-entityRollOut)
* [entityRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-entityRollOver)
* [entityClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-entityClick)
* [markerRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-markerRollOver)
* [markerRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-markerRollOut)
* [markerClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-markerClick)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorRollOver)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorRollOut)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-connectorClick)

## Generic Events

* [annotationRollOver]({% site.baseurl %}/api/fusioncharts/namespaces/annotations)
* [annotationRollOut]({% site.baseurl %}/api/fusioncharts/namespaces/annotations)
* [annotationClick]({% site.baseurl %}/api/fusioncharts/namespaces/annotations)
* [dataLabelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLabelRollOver)
* [dataLabelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLabelRollOut)
* [dataLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataLabelClick)
* [beforeDispose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeDispose)
* [disposed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-disposed)
* [disposeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-disposeCancelled)
* [logoRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-logoRollover)
* [logoRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-logoRollout)
* [logoClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-logoClick)
* [logoLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-logoLoaded)
* [logoLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-logoLoadError)
* [beforeResize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeResize)
* [resized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-resized)
* [resizeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-resizeCancelled)
* [chartTypeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartTypeChanged)
* [chartClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartClick)
* [chartMouseMove]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartMouseMove)
* [chartRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartRollOver)
* [chartRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartRollOut)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataRestored)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartUpdated)
* [chartCleared]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-chartCleared)
* [pinned]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-pinned)
* [beforeExport]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeExport)
* [exported]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-exported)
* [exportCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-exportCancelled)
* [legendPointerDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendPointerDragStart)
* [legendPointerDragStop]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendPointerDragStop)
* [legendRangeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendRangeUpdated)
* [legendItemClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendItemClicked)
* [legendItemRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendItemRollover)
* [legendItemRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-legendItemRollout)
* [linkClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-linkClicked)
* [beforeLinkedItemOpen]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeLinkedItemOpen)
* [linkedItemOpened]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-linkedItemOpened)
* [beforeLinkedItemClose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforeLinkedItemClose)
* [linkedItemClosed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-linkedItemClosed)
* [dataplotRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataplotRollOver)
* [dataplotRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataplotRollOut)
* [dataplotClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-dataplotClick)
* [overlayButtonClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-overlayButtonClick)
* [beforePrint]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-beforePrint)
* [printComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-printComplete)
* [printCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-printCancelled)
* [printReadyStateChange (Deprecated API)]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#event-printReadyStateChange)
