---
permalink: advanced-chart-configurations/events/classifying-events.html
title: Classifying Events | FusionCharts
description: FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart. This article gives you a detailed classification of the events in FusionCharts Suite XT.
heading: Classifying Events
chartPresent: false
---

## Pre-requisites

* [Introduction to Events](/advanced-chart-configurations/events/introduction-to-events)
* [Handling Events](/advanced-chart-configurations/events/handling-events)

FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. 
These events are classified based on when they are triggered, or the chart-type they belong to.
For example, there are events that are triggered during/when the chart renders, events triggered when chart data is loaded, events specific to pie charts, events specific to drag-able charts, and so on.

This article gives you a detailed classification of the events in FusionCharts Suite XT.

[ready](/api/fusioncharts/fusioncharts-events#readystatic-event-1) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded](/api/fusioncharts/fusioncharts-events#loaded-224)
* [rendered](/api/fusioncharts/fusioncharts-events#rendered-226)
* [renderComplete](/api/fusioncharts/fusioncharts-events#rendercomplete-236)
* [backgroundLoaded](/api/fusioncharts/fusioncharts-events#backgroundloaded-95)
* [backgroundLoadError](/api/fusioncharts/fusioncharts-events#backgroundloaderror-97)
* [beforeRender](/api/fusioncharts/fusioncharts-events#beforerender-265)
* [renderCancelled](/api/fusioncharts/fusioncharts-events#rendercancelled-268)
* [beforeInitialize](/api/fusioncharts/fusioncharts-events#beforeinitializestatic-event-4)
* [initialized](/api/fusioncharts/fusioncharts-events#initializedstatic-event-7)
* [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored-151)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated-162)

## Data Load-related Events

* [dataLoadRequested](/api/fusioncharts/fusioncharts-events#dataloadrequested-34)
* [dataLoadError](/api/fusioncharts/fusioncharts-events#dataloaderror-22)
* [dataLoadCancelled](/api/fusioncharts/fusioncharts-events#dataloadcancelled-24)
* [dataLoadRequestCancelled](/api/fusioncharts/fusioncharts-events#dataloadrequestcancelled-26)
* [dataLoadRequestCompleted](/api/fusioncharts/fusioncharts-events#dataloadrequestcompleted-20)
* [beforeDataUpdate](/api/fusioncharts/fusioncharts-events#beforedataupdate-36)
* [dataUpdateCancelled](/api/fusioncharts/fusioncharts-events#dataupdatecancelled-32)
* [dataUpdated](/api/fusioncharts/fusioncharts-events#dataupdated-30)
* [dataInvalid](/api/fusioncharts/fusioncharts-events#datainvalid-238)
* [dataLoaded](/api/fusioncharts/fusioncharts-events#dataloaded-242)
* [noDataToDisplay](/api/fusioncharts/fusioncharts-events#nodatatodisplay-244)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit](/api/fusioncharts/fusioncharts-events#beforedatasubmit-153)
* [dataSubmitError](/api/fusioncharts/fusioncharts-events#datasubmiterror-155)
* [dataSubmitted](/api/fusioncharts/fusioncharts-events#datasubmitted-157)
* [dataSubmitCancelled](/api/fusioncharts/fusioncharts-events#datasubmitcancelled-159)

### Events for Drag-able Charts

* [dataplotDragStart](/api/fusioncharts/fusioncharts-events#dataplotdragstart-196)
* [dataplotDragEnd](/api/fusioncharts/fusioncharts-events#dataplotdragend-198)

### Events for the Drag-node Chart

* [nodeAdded](/api/fusioncharts/fusioncharts-events#nodeadded-164)
* [nodeUpdated](/api/fusioncharts/fusioncharts-events#nodeupdated-166)
* [nodeDeleted](/api/fusioncharts/fusioncharts-events#nodedeleted-168)
* [connectorAdded](/api/fusioncharts/fusioncharts-events#connectoradded-170)
* [connectorUpdated](/api/fusioncharts/fusioncharts-events#connectorupdated-172)
* [connectorDeleted](/api/fusioncharts/fusioncharts-events#connectordeleted-174)
* [labelAdded](/api/fusioncharts/fusioncharts-events#labeladded-176)
* [labelDeleted](/api/fusioncharts/fusioncharts-events#labeldeleted-178)
* [labelClick](/api/fusioncharts/fusioncharts-events#labelclick-186)
* [labelRollOver](/api/fusioncharts/fusioncharts-events#labelrollover-188)
* [labelRollOut](/api/fusioncharts/fusioncharts-events#labelrollout-190)
* [labelDragStart](/api/fusioncharts/fusioncharts-events#labeldragstart-192)
* [labelDragEnd](/api/fusioncharts/fusioncharts-events#labeldragend-194)

### Events for Pie and Doughnut Char

* [rotationEnd](/api/fusioncharts/fusioncharts-events#rotationend-72)
* [rotationStart](/api/fusioncharts/fusioncharts-events#rotationstart-74)
* [centerLabelRollover](/api/fusioncharts/fusioncharts-events#centerlabelrollover-76)
* [centerLabelRollout](/api/fusioncharts/fusioncharts-events#centerlabelrollout-78)
* [centerLabelClick](/api/fusioncharts/fusioncharts-events#centerlabelclick-80)
* [centerLabelChanged](/api/fusioncharts/fusioncharts-events#centerlabelchanged-82)
* [slicingStart](/api/fusioncharts/fusioncharts-events#slicingstart-45)
* [slicingEnd](/api/fusioncharts/fusioncharts-events#slicingend-43)

### Events for Scroll Charts

* [scrollStart](/api/fusioncharts/fusioncharts-events#scrollstart-133)
* [scrollEnd](/api/fusioncharts/fusioncharts-events#scrollend-135)

### Events for Real-time Charts

* [alertComplete](/api/fusioncharts/fusioncharts-events#alertcomplete-252)
* [realTimeUpdateComplete](/api/fusioncharts/fusioncharts-events#realtimeupdatecomplete-39)
* [realTimeUpdateError](/api/fusioncharts/fusioncharts-events#realtimeupdateerror-255)

### Events for the Gantt Chart

* [processClick](/api/fusioncharts/fusioncharts-events#processclick-200)
* [processRollOver](/api/fusioncharts/fusioncharts-events#processrollover-202)
* [processRollOut](/api/fusioncharts/fusioncharts-events#processrollout-204)
* [categoryClick](/api/fusioncharts/fusioncharts-events#categoryclick-206)
* [categoryRollOver](/api/fusioncharts/fusioncharts-events#categoryrollover-208)
* [categoryRollOut](/api/fusioncharts/fusioncharts-events#categoryrollout-210)
* [milestoneClick](/api/fusioncharts/fusioncharts-events#milestoneclick-212)
* [milestoneRollOver](/api/fusioncharts/fusioncharts-events#milestonerollover-214)
* [milestoneRollOut](/api/fusioncharts/fusioncharts-events#milestonerollout-216)
* [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick-58)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover-54)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout-56)

### Events for the Select-scatter Chart

* [selectionStart](/api/fusioncharts/fusioncharts-events#selectionstart-182)
* [selectionEnd](/api/fusioncharts/fusioncharts-events#selectionend-184)
* [selectionRemoved](/api/fusioncharts/fusioncharts-events#selectionremoved-180)

### Events for the Zoom-line Chart

* [zoomReset](/api/fusioncharts/fusioncharts-events#zoomreset-139)
* [zoomedOut](/api/fusioncharts/fusioncharts-events#zoomedout-141)
* [zoomedIn](/api/fusioncharts/fusioncharts-events#zoomedin-143)
* [zoomed](/api/fusioncharts/fusioncharts-events#zoomed-145)
* [zoomModeChanged](/api/fusioncharts/fusioncharts-events#zoommodechanged-147)

## Map-related Events

* [entityRollOut](/api/fusioncharts/fusioncharts-events#entityrollout-47)
* [entityRollOver](/api/fusioncharts/fusioncharts-events#entityrollover-49)
* [entityClick](/api/fusioncharts/fusioncharts-events#entityclick-51)
* [markerRollOver](/api/fusioncharts/fusioncharts-events#markerrollover-61)
* [markerRollOut](/api/fusioncharts/fusioncharts-events#markerrollout-64)
* [markerClick](/api/fusioncharts/fusioncharts-events#markerclick-67)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover-54)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout-56)
* [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick-58)

## Generic Events

* [annotationRollOver](/api/fusioncharts/namespaces/annotations#annotationrollover-4)
* [annotationRollOut](/api/fusioncharts/namespaces/annotations#annotationrollout-6)
* [annotationClick](/api/fusioncharts/namespaces/annotations#annotationclick-2)
* [dataLabelRollOver](/api/fusioncharts/fusioncharts-events#datalabelrollover-129)
* [dataLabelRollOut](/api/fusioncharts/fusioncharts-events#datalabelrollout-131)
* [dataLabelClick](/api/fusioncharts/fusioncharts-events#datalabelclick-127)
* [beforeDispose](/api/fusioncharts/fusioncharts-events#beforedispose-277)
* [disposed](/api/fusioncharts/fusioncharts-events#disposed-279)
* [disposeCancelled](/api/fusioncharts/fusioncharts-events#disposecancelled-281)
* [logoRollover](/api/fusioncharts/fusioncharts-events#logorollover-105)
* [logoRollout](/api/fusioncharts/fusioncharts-events#logorollout-107)
* [logoClick](/api/fusioncharts/fusioncharts-events#logoclick-109)
* [logoLoaded](/api/fusioncharts/fusioncharts-events#logoloaded-111)
* [logoLoadError](/api/fusioncharts/fusioncharts-events#logoloaderror-113)
* [beforeResize](/api/fusioncharts/fusioncharts-events#beforeresize-271)
* [resized](/api/fusioncharts/fusioncharts-events#resized-273)
* [resizeCancelled](/api/fusioncharts/fusioncharts-events#resizecancelled-275)
* [chartTypeChanged](/api/fusioncharts/fusioncharts-events#charttypechanged-218)
* [chartClick](/api/fusioncharts/fusioncharts-events#chartclick-84)
* [chartMouseMove](/api/fusioncharts/fusioncharts-events#chartmousemove-87)
* [chartRollOver](/api/fusioncharts/fusioncharts-events#chartrollover-89)
* [chartRollOut](/api/fusioncharts/fusioncharts-events#chartrollout-92)
* [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored-151)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated-162)
* [chartCleared](/api/fusioncharts/fusioncharts-events#chartcleared-41)
* [pinned](/api/fusioncharts/fusioncharts-events#pinned-149)
* [beforeExport](/api/fusioncharts/fusioncharts-events#beforeexport-115)
* [exported](/api/fusioncharts/fusioncharts-events#exported-117)
* [exportCancelled](/api/fusioncharts/fusioncharts-events#exportcancelled-119)
* [legendPointerDragStart](/api/fusioncharts/fusioncharts-events#legendpointerdragstart-246)
* [legendPointerDragStop](/api/fusioncharts/fusioncharts-events#legendpointerdragstop-248)
* [legendRangeUpdated](/api/fusioncharts/fusioncharts-events#legendrangeupdated-250)
* [legendItemClicked](/api/fusioncharts/fusioncharts-events#legenditemclicked-99)
* [legendItemRollover](/api/fusioncharts/fusioncharts-events#legenditemrollover-101)
* [legendItemRollout](/api/fusioncharts/fusioncharts-events#legenditemrollout-103)
* [linkClicked](/api/fusioncharts/fusioncharts-events#linkclicked-263)
* [beforeLinkedItemOpen](/api/fusioncharts/fusioncharts-events#beforelinkeditemopen-10)
* [linkedItemOpened](/api/fusioncharts/fusioncharts-events#linkeditemopened-12)
* [beforeLinkedItemClose](/api/fusioncharts/fusioncharts-events#beforelinkeditemclose-14)
* [linkedItemClosed](/api/fusioncharts/fusioncharts-events#linkeditemclosed-16)
* [dataplotRollOver](/api/fusioncharts/fusioncharts-events#dataplotrollover-257)
* [dataplotRollOut](/api/fusioncharts/fusioncharts-events#dataplotrollout-259)
* [dataplotClick](/api/fusioncharts/fusioncharts-events#dataplotclick-261)
* [overlayButtonClick](/api/fusioncharts/fusioncharts-events#overlaybuttonclick-222)
* [beforePrint](/api/fusioncharts/fusioncharts-events#beforeprint-121)
* [printComplete](/api/fusioncharts/fusioncharts-events#printcomplete-123)
* [printCancelled](/api/fusioncharts/fusioncharts-events#printcancelled-125)
