---
title: Classifying Events | FusionCharts
description: Discover how to classify events with FusionCharts. Learn advanced chart configurations for interactive data visualization. Start now for engaging data!
heading: Classifying Events
chartPresent: false
---

## Pre-requisites

- [Introduction to Events](/advanced-chart-configurations/events/introduction-to-events)
- [Handling Events](/advanced-chart-configurations/events/handling-events)

FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.
These events are classified based on when they are triggered, or the chart-type they belong to.
For example, there are events that are triggered during/when the chart renders, events triggered when chart data is loaded, events specific to pie charts, events specific to drag-able charts, and so on.

This article gives you a detailed classification of the events in FusionCharts Suite XT.

[ready](/api/fusioncharts/fusioncharts-events#readystatic-event) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

- [loaded](/api/fusioncharts/fusioncharts-events#loaded)
- [rendered](/api/fusioncharts/fusioncharts-events#rendered)
- [renderComplete](/api/fusioncharts/fusioncharts-events#rendercomplete)
- [backgroundLoaded](/api/fusioncharts/fusioncharts-events#backgroundloaded)
- [backgroundLoadError](/api/fusioncharts/fusioncharts-events#backgroundloaderror)
- [beforeRender](/api/fusioncharts/fusioncharts-events#beforerender)
- [renderCancelled](/api/fusioncharts/fusioncharts-events#rendercancelled)
- [beforeInitialize](/api/fusioncharts/fusioncharts-events#beforeinitializestatic-event)
- [initialized](/api/fusioncharts/fusioncharts-events#initializedstatic-event)
- [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored)
- [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated)

## Data Load-related Events

- [dataLoadRequested](/api/fusioncharts/fusioncharts-events#dataloadrequested)
- [dataLoadError](/api/fusioncharts/fusioncharts-events#dataloaderror)
- [dataLoadCancelled](/api/fusioncharts/fusioncharts-events#dataloadcancelled)
- [dataLoadRequestCancelled](/api/fusioncharts/fusioncharts-events#dataloadrequestcancelled)
- [dataLoadRequestCompleted](/api/fusioncharts/fusioncharts-events#dataloadrequestcompleted)
- [beforeDataUpdate](/api/fusioncharts/fusioncharts-events#beforedataupdate)
- [dataUpdateCancelled](/api/fusioncharts/fusioncharts-events#dataupdatecancelled)
- [dataUpdated](/api/fusioncharts/fusioncharts-events#dataupdated)
- [dataInvalid](/api/fusioncharts/fusioncharts-events#datainvalid)
- [dataLoaded](/api/fusioncharts/fusioncharts-events#dataloaded)
- [noDataToDisplay](/api/fusioncharts/fusioncharts-events#nodatatodisplay)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

- [beforeDataSubmit](/api/fusioncharts/fusioncharts-events#beforedatasubmit)
- [dataSubmitError](/api/fusioncharts/fusioncharts-events#datasubmiterror)
- [dataSubmitted](/api/fusioncharts/fusioncharts-events#datasubmitted)
- [dataSubmitCancelled](/api/fusioncharts/fusioncharts-events#datasubmitcancelled)

### Events for Drag-able Charts

- [dataplotDragStart](/api/fusioncharts/fusioncharts-events#dataplotdragstart)
- [dataplotDragEnd](/api/fusioncharts/fusioncharts-events#dataplotdragend)

### Events for the Drag-node Chart

- [nodeAdded](/api/fusioncharts/fusioncharts-events#nodeadded)
- [nodeUpdated](/api/fusioncharts/fusioncharts-events#nodeupdated)
- [nodeDeleted](/api/fusioncharts/fusioncharts-events#nodedeleted)
- [connectorAdded](/api/fusioncharts/fusioncharts-events#connectoradded)
- [connectorUpdated](/api/fusioncharts/fusioncharts-events#connectorupdated)
- [connectorDeleted](/api/fusioncharts/fusioncharts-events#connectordeleted)
- [labelAdded](/api/fusioncharts/fusioncharts-events#labeladded)
- [labelDeleted](/api/fusioncharts/fusioncharts-events#labeldeleted)
- [labelClick](/api/fusioncharts/fusioncharts-events#labelclick)
- [labelRollOver](/api/fusioncharts/fusioncharts-events#labelrollover)
- [labelRollOut](/api/fusioncharts/fusioncharts-events#labelrollout)
- [labelDragStart](/api/fusioncharts/fusioncharts-events#labeldragstart)
- [labelDragEnd](/api/fusioncharts/fusioncharts-events#labeldragend)

### Events for Pie and Doughnut Chart

- [rotationEnd](/api/fusioncharts/fusioncharts-events#rotationend)
- [rotationStart](/api/fusioncharts/fusioncharts-events#rotationstart)
- [centerLabelRollover](/api/fusioncharts/fusioncharts-events#centerlabelrollover)
- [centerLabelRollout](/api/fusioncharts/fusioncharts-events#centerlabelrollout)
- [centerLabelClick](/api/fusioncharts/fusioncharts-events#centerlabelclick)
- [centerLabelChanged](/api/fusioncharts/fusioncharts-events#centerlabelchanged)
- [slicingStart](/api/fusioncharts/fusioncharts-events#slicingstart)
- [slicingEnd](/api/fusioncharts/fusioncharts-events#slicingend)

### Events for Scroll Charts

- [scrollStart](/api/fusioncharts/fusioncharts-events#scrollstart)
- [scrollEnd](/api/fusioncharts/fusioncharts-events#scrollend)

### Events for Real-time Charts

- [alertComplete](/api/fusioncharts/fusioncharts-events#alertcomplete)
- [realTimeUpdateComplete](/api/fusioncharts/fusioncharts-events#realtimeupdatecomplete)
- [realTimeUpdateError](/api/fusioncharts/fusioncharts-events#realtimeupdateerror)

### Events for the Gantt Chart

- [processClick](/api/fusioncharts/fusioncharts-events#processclick)
- [processRollOver](/api/fusioncharts/fusioncharts-events#processrollover)
- [processRollOut](/api/fusioncharts/fusioncharts-events#processrollout)
- [categoryClick](/api/fusioncharts/fusioncharts-events#categoryclick)
- [categoryRollOver](/api/fusioncharts/fusioncharts-events#categoryrollover)
- [categoryRollOut](/api/fusioncharts/fusioncharts-events#categoryrollout)
- [milestoneClick](/api/fusioncharts/fusioncharts-events#milestoneclick)
- [milestoneRollOver](/api/fusioncharts/fusioncharts-events#milestonerollover)
- [milestoneRollOut](/api/fusioncharts/fusioncharts-events#milestonerollout)
- [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick)
- [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover)
- [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout)

### Events for the Select-scatter Chart

- [selectionStart](/api/fusioncharts/fusioncharts-events#selectionstart)
- [selectionEnd](/api/fusioncharts/fusioncharts-events#selectionend)
- [selectionRemoved](/api/fusioncharts/fusioncharts-events#selectionremoved)

### Events for the Zoom-line Chart

- [zoomReset](/api/fusioncharts/fusioncharts-events#zoomreset)
- [zoomedOut](/api/fusioncharts/fusioncharts-events#zoomedout)
- [zoomedIn](/api/fusioncharts/fusioncharts-events#zoomedin)
- [zoomed](/api/fusioncharts/fusioncharts-events#zoomed)
- [zoomModeChanged](/api/fusioncharts/fusioncharts-events#zoommodechanged)

## Map-related Events

- [entityRollOut](/api/fusioncharts/fusioncharts-events#entityrollout)
- [entityRollOver](/api/fusioncharts/fusioncharts-events#entityrollover)
- [entityClick](/api/fusioncharts/fusioncharts-events#entityclick)
- [markerRollOver](/api/fusioncharts/fusioncharts-events#markerrollover)
- [markerRollOut](/api/fusioncharts/fusioncharts-events#markerrollout)
- [markerClick](/api/fusioncharts/fusioncharts-events#markerclick)
- [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover)
- [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout)
- [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick)

## Generic Events

- [annotationRollOver](/api/fusioncharts/namespaces/annotations#annotationrollover)
- [annotationRollOut](/api/fusioncharts/namespaces/annotations#annotationrollout)
- [annotationClick](/api/fusioncharts/namespaces/annotations#annotationclick)
- [dataLabelRollOver](/api/fusioncharts/fusioncharts-events#datalabelrollover)
- [dataLabelRollOut](/api/fusioncharts/fusioncharts-events#datalabelrollout)
- [dataLabelClick](/api/fusioncharts/fusioncharts-events#datalabelclick)
- [beforeDispose](/api/fusioncharts/fusioncharts-events#beforedispose)
- [disposed](/api/fusioncharts/fusioncharts-events#disposed)
- [disposeCancelled](/api/fusioncharts/fusioncharts-events#disposecancelled)
- [logoRollover](/api/fusioncharts/fusioncharts-events#logorollover)
- [logoRollout](/api/fusioncharts/fusioncharts-events#logorollout)
- [logoClick](/api/fusioncharts/fusioncharts-events#logoclick)
- [logoLoaded](/api/fusioncharts/fusioncharts-events#logoloaded)
- [logoLoadError](/api/fusioncharts/fusioncharts-events#logoloaderror)
- [beforeResize](/api/fusioncharts/fusioncharts-events#beforeresize)
- [resized](/api/fusioncharts/fusioncharts-events#resized)
- [resizeCancelled](/api/fusioncharts/fusioncharts-events#resizecancelled)
- [chartTypeChanged](/api/fusioncharts/fusioncharts-events#charttypechanged)
- [chartClick](/api/fusioncharts/fusioncharts-events#chartclick)
- [chartMouseMove](/api/fusioncharts/fusioncharts-events#chartmousemove)
- [chartRollOver](/api/fusioncharts/fusioncharts-events#chartrollover)
- [chartRollOut](/api/fusioncharts/fusioncharts-events#chartrollout)
- [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored)
- [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated)
- [chartCleared](/api/fusioncharts/fusioncharts-events#chartcleared)
- [pinned](/api/fusioncharts/fusioncharts-events#pinned)
- [beforeExport](/api/fusioncharts/fusioncharts-events#beforeexport)
- [exported](/api/fusioncharts/fusioncharts-events#exported)
- [exportCancelled](/api/fusioncharts/fusioncharts-events#exportcancelled)
- [legendPointerDragStart](/api/fusioncharts/fusioncharts-events#legendpointerdragstart)
- [legendPointerDragStop](/api/fusioncharts/fusioncharts-events#legendpointerdragstop)
- [legendRangeUpdated](/api/fusioncharts/fusioncharts-events#legendrangeupdated)
- [legendItemClicked](/api/fusioncharts/fusioncharts-events#legenditemclicked)
- [legendItemRollover](/api/fusioncharts/fusioncharts-events#legenditemrollover)
- [legendItemRollout](/api/fusioncharts/fusioncharts-events#legenditemrollout)
- [linkClicked](/api/fusioncharts/fusioncharts-events#linkclicked)
- [beforeLinkedItemOpen](/api/fusioncharts/fusioncharts-events#beforelinkeditemopen)
- [linkedItemOpened](/api/fusioncharts/fusioncharts-events#linkeditemopened)
- [beforeLinkedItemClose](/api/fusioncharts/fusioncharts-events#beforelinkeditemclose)
- [linkedItemClosed](/api/fusioncharts/fusioncharts-events#linkeditemclosed)
- [dataplotRollOver](/api/fusioncharts/fusioncharts-events#dataplotrollover)
- [dataplotRollOut](/api/fusioncharts/fusioncharts-events#dataplotrollout)
- [dataplotClick](/api/fusioncharts/fusioncharts-events#dataplotclick)
- [overlayButtonClick](/api/fusioncharts/fusioncharts-events#overlaybuttonclick)
- [beforePrint](/api/fusioncharts/fusioncharts-events#beforeprint)
- [printComplete](/api/fusioncharts/fusioncharts-events#printcomplete)
- [printCancelled](/api/fusioncharts/fusioncharts-events#printcancelled)
