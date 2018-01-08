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

[ready]{% linkTo FusionCharts.events.ready %} is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded]{% linkTo FusionCharts.events.loaded %}
* [rendered]{% linkTo FusionCharts.events.rendered %}
* [renderComplete]{% linkTo FusionCharts.events.renderComplete %}
* [backgroundLoaded]{% linkTo FusionCharts.events.backgroundLoaded %}
* [backgroundLoadError]{% linkTo FusionCharts.events.backgroundLoadError %}
* [beforeRender]{% linkTo FusionCharts.events.beforeRender %}
* [renderCancelled]{% linkTo FusionCharts.events.renderCancelled %}
* [beforeInitialize]{% linkTo FusionCharts.events.beforeInitialize %}
* [initialized]{% linkTo FusionCharts.events.initialized %}
* [dataRestored]{% linkTo FusionCharts.events.dataRestored %}
* [chartUpdated]{% linkTo FusionCharts.events.chartUpdated %}

## Data Load-related Events

* [dataLoadRequested]{% linkTo FusionCharts.events.dataLoadRequested %}
* [dataLoadError]{% linkTo FusionCharts.events.dataLoadError %}
* [dataLoadCancelled]{% linkTo FusionCharts.events.dataLoadCancelled %}
* [dataLoadRequestCancelled]{% linkTo FusionCharts.events.dataLoadRequestCancelled %}
* [dataLoadRequestCompleted]{% linkTo FusionCharts.events.dataLoadRequestCompleted %}
* [beforeDataUpdate]{% linkTo FusionCharts.events.beforeDataUpdate %}
* [dataUpdateCancelled]{% linkTo FusionCharts.events.dataUpdateCancelled %}
* [dataUpdated]{% linkTo FusionCharts.events.dataUpdated %}
* [dataInvalid]{% linkTo FusionCharts.events.dataInvalid %}
* [dataXMLInvalid]{% linkTo FusionCharts.events.dataXMLInvalid %}
* [dataLoaded]{% linkTo FusionCharts.events.dataLoaded %}
* [noDataToDisplay]{% linkTo FusionCharts.events.noDataToDisplay %}

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit]{% linkTo FusionCharts.events.beforeDataSubmit %}
* [dataSubmitError]{% linkTo FusionCharts.events.dataSubmitError %}
* [dataSubmitted]{% linkTo FusionCharts.events.dataSubmitted %}
* [dataSubmitCancelled]{% linkTo FusionCharts.events.dataSubmitCancelled %}

### Events for Drag-able Charts

* [dataplotDragStart]{% linkTo FusionCharts.events.dataplotDragStart %}
* [dataplotDragEnd]{% linkTo FusionCharts.events.dataplotDragEnd %}

### Events for the Drag-node Chart

* [nodeAdded]{% linkTo FusionCharts.events.nodeAdded %}
* [nodeUpdated]{% linkTo FusionCharts.events.nodeUpdated %}
* [nodeDeleted]{% linkTo FusionCharts.events.nodeDeleted %}
* [connectorAdded]{% linkTo FusionCharts.events.connectorAdded %}
* [connectorUpdated]{% linkTo FusionCharts.events.connectorUpdated %}
* [connectorDeleted]{% linkTo FusionCharts.events.connectorDeleted %}
* [labelAdded]{% linkTo FusionCharts.events.labelAdded %}
* [labelDeleted]{% linkTo FusionCharts.events.labelDeleted %}
* [labelClick]{% linkTo FusionCharts.events.labelClick %}
* [labelRollOver]{% linkTo FusionCharts.events.labelRollOver %}
* [labelRollOut]{% linkTo FusionCharts.events.labelRollOut %}
* [labelDragStart]{% linkTo FusionCharts.events.labelDragStart %}
* [labelDragEnd]{% linkTo FusionCharts.events.labelDragEnd %}

### Events for Pie and Doughnut Charts

* [rotationEnd]{% linkTo FusionCharts.events.rotationEnd %}
* [rotationStart]{% linkTo FusionCharts.events.rotationStart %}
* [centerLabelRollover]{% linkTo FusionCharts.events.centerLabelRollover %}
* [centerLabelRollout]{% linkTo FusionCharts.events.centerLabelRollout %}
* [centerLabelClick]{% linkTo FusionCharts.events.centerLabelClick %}
* [centerLabelChanged]{% linkTo FusionCharts.events.centerLabelChanged %}
* [slicingStart]{% linkTo FusionCharts.events.slicingStart %}
* [slicingEnd]{% linkTo FusionCharts.events.slicingEnd %}

### Events for Scroll Charts

* [scrollStart]{% linkTo FusionCharts.events.scrollStart %}
* [scrollEnd]{% linkTo FusionCharts.events.scrollEnd %}

### Events for Real-time Charts

* [alertComplete]{% linkTo FusionCharts.events.alertComplete %}
* [realTimeUpdateComplete]{% linkTo FusionCharts.events.realTimeUpdateComplete %}
* [realTimeUpdateError]{% linkTo FusionCharts.events.realTimeUpdateError %}

### Events for the Gantt Chart

* [processClick]{% linkTo FusionCharts.events.processClick %}
* [processRollOver]{% linkTo FusionCharts.events.processRollOver %}
* [processRollOut]{% linkTo FusionCharts.events.processRollOut %}
* [categoryClick]{% linkTo FusionCharts.events.categoryClick %}
* [categoryRollOver]{% linkTo FusionCharts.events.categoryRollOver %}
* [categoryRollOut]{% linkTo FusionCharts.events.categoryRollOut %}
* [milestoneClick]{% linkTo FusionCharts.events.milestoneClick %}
* [milestoneRollOver]{% linkTo FusionCharts.events.milestoneRollOver %}
* [milestoneRollOut]{% linkTo FusionCharts.events.milestoneRollOut %}
* [connectorClick]{% linkTo FusionCharts.events.connectorClick %}
* [connectorRollOver]{% linkTo FusionCharts.events.connectorRollOver %}
* [connectorRollOut]{% linkTo FusionCharts.events.connectorRollOut %}

### Events for the Select-scatter Chart

* [selectionStart]{% linkTo FusionCharts.events.selectionStart %}
* [selectionEnd]{% linkTo FusionCharts.events.selectionEnd %}
* [selectionRemoved]{% linkTo FusionCharts.events.selectionRemoved %}

### Events for the Zoom-line Chart

* [zoomReset]{% linkTo FusionCharts.events.zoomReset %}
* [zoomedOut]{% linkTo FusionCharts.events.zoomedOut %}
* [zoomedIn]{% linkTo FusionCharts.events.zoomedIn %}
* [zoomed]{% linkTo FusionCharts.events.zoomed %}
* [zoomModeChanged]{% linkTo FusionCharts.events.zoomModeChanged %}

### Event for the SSGrid Chart

* [pageNavigated]{% linkTo FusionCharts.events.pageNavigated %}

## Map-related Events

* [entityRollOut]{% linkTo FusionCharts.events.entityRollOut %}
* [entityRollOver]{% linkTo FusionCharts.events.entityRollOver %}
* [entityClick]{% linkTo FusionCharts.events.entityClick %}
* [markerRollOver]{% linkTo FusionCharts.events.markerRollOver %}
* [markerRollOut]{% linkTo FusionCharts.events.markerRollOut %}
* [markerClick]{% linkTo FusionCharts.events.markerClick %}
* [connectorRollOver]{% linkTo FusionCharts.events.connectorRollOver %}
* [connectorRollOut]{% linkTo FusionCharts.events.connectorRollOut %}
* [connectorClick]{% linkTo FusionCharts.events.connectorClick %}

## Generic Events

* [annotationRollOver]{% linkTo FusionCharts.namespaces.annotations %}
* [annotationRollOut]{% linkTo FusionCharts.namespaces.annotations %}
* [annotationClick]{% linkTo FusionCharts.namespaces.annotations %}
* [dataLabelRollOver]{% linkTo FusionCharts.events.dataLabelRollOver %}
* [dataLabelRollOut]{% linkTo FusionCharts.events.dataLabelRollOut %}
* [dataLabelClick]{% linkTo FusionCharts.events.dataLabelClick %}
* [beforeDispose]{% linkTo FusionCharts.events.beforeDispose %}
* [disposed]{% linkTo FusionCharts.events.disposed %}
* [disposeCancelled]{% linkTo FusionCharts.events.disposeCancelled %}
* [logoRollover]{% linkTo FusionCharts.events.logoRollover %}
* [logoRollout]{% linkTo FusionCharts.events.logoRollout %}
* [logoClick]{% linkTo FusionCharts.events.logoClick %}
* [logoLoaded]{% linkTo FusionCharts.events.logoLoaded %}
* [logoLoadError]{% linkTo FusionCharts.events.logoLoadError %}
* [beforeResize]{% linkTo FusionCharts.events.beforeResize %}
* [resized]{% linkTo FusionCharts.events.resized %}
* [resizeCancelled]{% linkTo FusionCharts.events.resizeCancelled %}
* [chartTypeChanged]{% linkTo FusionCharts.events.chartTypeChanged %}
* [chartClick]{% linkTo FusionCharts.events.chartClick %}
* [chartMouseMove]{% linkTo FusionCharts.events.chartMouseMove %}
* [chartRollOver]{% linkTo FusionCharts.events.chartRollOver %}
* [chartRollOut]{% linkTo FusionCharts.events.chartRollOut %}
* [dataRestored]{% linkTo FusionCharts.events.dataRestored %}
* [chartUpdated]{% linkTo FusionCharts.events.chartUpdated %}
* [chartCleared]{% linkTo FusionCharts.events.chartCleared %}
* [pinned]{% linkTo FusionCharts.events.pinned %}
* [beforeExport]{% linkTo FusionCharts.events.beforeExport %}
* [exported]{% linkTo FusionCharts.events.exported %}
* [exportCancelled]{% linkTo FusionCharts.events.exportCancelled %}
* [legendPointerDragStart]{% linkTo FusionCharts.events.legendPointerDragStart %}
* [legendPointerDragStop]{% linkTo FusionCharts.events.legendPointerDragStop %}
* [legendRangeUpdated]{% linkTo FusionCharts.events.legendRangeUpdated %}
* [legendItemClicked]{% linkTo FusionCharts.events.legendItemClicked %}
* [legendItemRollover]{% linkTo FusionCharts.events.legendItemRollover %}
* [legendItemRollout]{% linkTo FusionCharts.events.legendItemRollout %}
* [linkClicked]{% linkTo FusionCharts.events.linkClicked %}
* [beforeLinkedItemOpen]{% linkTo FusionCharts.events.beforeLinkedItemOpen %}
* [linkedItemOpened]{% linkTo FusionCharts.events.linkedItemOpened %}
* [beforeLinkedItemClose]{% linkTo FusionCharts.events.beforeLinkedItemClose %}
* [linkedItemClosed]{% linkTo FusionCharts.events.linkedItemClosed %}
* [dataplotRollOver]{% linkTo FusionCharts.events.dataplotRollOver %}
* [dataplotRollOut]{% linkTo FusionCharts.events.dataplotRollOut %}
* [dataplotClick]{% linkTo FusionCharts.events.dataplotClick %}
* [overlayButtonClick]{% linkTo FusionCharts.events.overlayButtonClick %}
* [beforePrint]{% linkTo FusionCharts.events.beforePrint %}
* [printComplete]{% linkTo FusionCharts.events.printComplete %}
* [printCancelled]{% linkTo FusionCharts.events.printCancelled %}
* [printReadyStateChange (Deprecated API)]{% linkTo FusionCharts.events.printReadyStateChange %}