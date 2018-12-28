---
permalink: advanced-chart-configurations/events/classifying-events.html
title: Classifying Events | FusionCharts
description: FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart. This article gives you a detailed classification of the events in FusionCharts Suite XT.
heading: Classifying Events
chartPresent: false
---

## Pre-requisites

* [Introduction to Events]({% site.baseurl %}/advanced-chart-configurations/events/introduction-to-events)
* [Handling Events]({% site.baseurl %}/advanced-chart-configurations/events/handling-events)

FusionCharts Suite XT includes a comprehensive set of events that can be used to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. 
These events are classified based on when they are triggered, or the chart-type they belong to.
For example, there are events that are triggered during/when the chart renders, events triggered when chart data is loaded, events specific to pie charts, events specific to drag-able charts, and so on.

This article gives you a detailed classification of the events in FusionCharts Suite XT.

[ready]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#readystatic-event-1) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#loaded-224)
* [rendered]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendered-226)
* [renderComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendercomplete-236)
* [backgroundLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#backgroundloaded-95)
* [backgroundLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#backgroundloaderror-97)
* [beforeRender]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforerender-265)
* [renderCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendercancelled-268)
* [beforeInitialize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeinitializestatic-event-4)
* [initialized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#initializedstatic-event-7)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datarestored-151)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartupdated-162)

## Data Load-related Events

* [dataLoadRequested]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequested-34)
* [dataLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloaderror-22)
* [dataLoadCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadcancelled-24)
* [dataLoadRequestCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequestcancelled-26)
* [dataLoadRequestCompleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequestcompleted-20)
* [beforeDataUpdate]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedataupdate-36)
* [dataUpdateCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataupdatecancelled-32)
* [dataUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataupdated-30)
* [dataInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datainvalid-238)
* [dataLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloaded-242)
* [noDataToDisplay]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodatatodisplay-244)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedatasubmit-153)
* [dataSubmitError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmiterror-155)
* [dataSubmitted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmitted-157)
* [dataSubmitCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmitcancelled-159)

### Events for Drag-able Charts

* [dataplotDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotdragstart-196)
* [dataplotDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotdragend-198)

### Events for the Drag-node Chart

* [nodeAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodeadded-164)
* [nodeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodeupdated-166)
* [nodeDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodedeleted-168)
* [connectorAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectoradded-170)
* [connectorUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorupdated-172)
* [connectorDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectordeleted-174)
* [labelAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeladded-176)
* [labelDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldeleted-178)
* [labelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelclick-186)
* [labelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelrollover-188)
* [labelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelrollout-190)
* [labelDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldragstart-192)
* [labelDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldragend-194)

### Events for Pie and Doughnut Char

* [rotationEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rotationend-72)
* [rotationStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rotationstart-74)
* [centerLabelRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelrollover-76)
* [centerLabelRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelrollout-78)
* [centerLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelclick-80)
* [centerLabelChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelchanged-82)
* [slicingStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#slicingstart-45)
* [slicingEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#slicingend-43)

### Events for Scroll Charts

* [scrollStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#scrollstart-133)
* [scrollEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#scrollend-135)

### Events for Real-time Charts

* [alertComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#alertcomplete-252)
* [realTimeUpdateComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#realtimeupdatecomplete-39)
* [realTimeUpdateError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#realtimeupdateerror-255)

### Events for the Gantt Chart

* [processClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processclick-200)
* [processRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processrollover-202)
* [processRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processrollout-204)
* [categoryClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryclick-206)
* [categoryRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryrollover-208)
* [categoryRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryrollout-210)
* [milestoneClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestoneclick-212)
* [milestoneRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestonerollover-214)
* [milestoneRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestonerollout-216)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorclick-58)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollover-54)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollout-56)

### Events for the Select-scatter Chart

* [selectionStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionstart-182)
* [selectionEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionend-184)
* [selectionRemoved]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionremoved-180)

### Events for the Zoom-line Chart

* [zoomReset]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomreset-139)
* [zoomedOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomedout-141)
* [zoomedIn]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomedin-143)
* [zoomed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomed-145)
* [zoomModeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoommodechanged-147)

## Map-related Events

* [entityRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityrollout-47)
* [entityRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityrollover-49)
* [entityClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityclick-51)
* [markerRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerrollover-61)
* [markerRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerrollout-64)
* [markerClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerclick-67)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollover-54)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollout-56)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorclick-58)

## Generic Events

* [annotationRollOver]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationrollover-4)
* [annotationRollOut]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationrollout-6)
* [annotationClick]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationclick-2)
* [dataLabelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelrollover-129)
* [dataLabelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelrollout-131)
* [dataLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelclick-127)
* [beforeDispose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedispose-277)
* [disposed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#disposed-279)
* [disposeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#disposecancelled-281)
* [logoRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logorollover-105)
* [logoRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logorollout-107)
* [logoClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoclick-109)
* [logoLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoloaded-111)
* [logoLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoloaderror-113)
* [beforeResize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeresize-271)
* [resized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#resized-273)
* [resizeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#resizecancelled-275)
* [chartTypeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#charttypechanged-218)
* [chartClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartclick-84)
* [chartMouseMove]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartmousemove-87)
* [chartRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartrollover-89)
* [chartRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartrollout-92)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datarestored-151)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartupdated-162)
* [chartCleared]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartcleared-41)
* [pinned]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#pinned-149)
* [beforeExport]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeexport-115)
* [exported]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#exported-117)
* [exportCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#exportcancelled-119)
* [legendPointerDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendpointerdragstart-246)
* [legendPointerDragStop]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendpointerdragstop-248)
* [legendRangeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendrangeupdated-250)
* [legendItemClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemclicked-99)
* [legendItemRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemrollover-101)
* [legendItemRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemrollout-103)
* [linkClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkclicked-263)
* [beforeLinkedItemOpen]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforelinkeditemopen-10)
* [linkedItemOpened]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkeditemopened-12)
* [beforeLinkedItemClose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforelinkeditemclose-14)
* [linkedItemClosed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkeditemclosed-16)
* [dataplotRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-257)
* [dataplotRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollout-259)
* [dataplotClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotclick-261)
* [overlayButtonClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#overlaybuttonclick-222)
* [beforePrint]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeprint-121)
* [printComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#printcomplete-123)
* [printCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#printcancelled-125)