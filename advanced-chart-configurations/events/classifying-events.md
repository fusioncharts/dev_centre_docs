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

[ready]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#readystatic-event-1) is the first event that should be triggered when the FusionCharts library is included in the page, to ensure integrity of all the listeners. All interactions with the FusionCharts framework should initiate only after this event is fired.

Given below is the classification of the rest of the events.

## Chart Rendering-related Events

* [loaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#loaded-220)
* [rendered]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendered-222)
* [renderComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendercomplete-226)
* [backgroundLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#backgroundloaded-93)
* [backgroundLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#backgroundloaderror-95)
* [beforeRender]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforerender-255)
* [renderCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendercancelled-258)
* [beforeInitialize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeinitializestatic-event-4)
* [initialized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#initializedstatic-event-7)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datarestored-149)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartupdated-160)

## Data Load-related Events

* [dataLoadRequested]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequested-32)
* [dataLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloaderror-22)
* [dataLoadCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadcancelled-24)
* [dataLoadRequestCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequestcancelled-26)
* [dataLoadRequestCompleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloadrequestcompleted-20)
* [beforeDataUpdate]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedataupdate-34)
* [dataUpdateCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataupdatecancelled-30)
* [dataUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataupdated-28)
* [dataInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datainvalid-228)
* [dataXMLInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataxmlinvalid-230)
* [dataLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataloaded-232)
* [noDataToDisplay]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodatatodisplay-234)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedatasubmit-151)
* [dataSubmitError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmiterror-153)
* [dataSubmitted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmitted-155)
* [dataSubmitCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datasubmitcancelled-157)

### Events for Drag-able Charts

* [dataplotDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotdragstart-194)
* [dataplotDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotdragend-196)

### Events for the Drag-node Chart

* [nodeAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodeadded-162)
* [nodeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodeupdated-164)
* [nodeDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#nodedeleted-166)
* [connectorAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectoradded-168)
* [connectorUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorupdated-170)
* [connectorDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectordeleted-172)
* [labelAdded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeladded-174)
* [labelDeleted]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldeleted-176)
* [labelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelclick-184)
* [labelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelrollover-186)
* [labelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labelrollout-188)
* [labelDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldragstart-190)
* [labelDragEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#labeldragend-192)

### Events for Pie and Doughnut Charts

* [rotationEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rotationend-70)
* [rotationStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rotationstart-72)
* [centerLabelRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelrollover-74)
* [centerLabelRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelrollout-76)
* [centerLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelclick-78)
* [centerLabelChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#centerlabelchanged-80)
* [slicingStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#slicingstart-43)
* [slicingEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#slicingend-41)

### Events for Scroll Charts

* [scrollStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#scrollstart-131)
* [scrollEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#scrollend-133)

### Events for Real-time Charts

* [alertComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#alertcomplete-242)
* [realTimeUpdateComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#realtimeupdatecomplete-37)
* [realTimeUpdateError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#realtimeupdateerror-245)

### Events for the Gantt Chart

* [processClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processclick-198)
* [processRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processrollover-200)
* [processRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#processrollout-202)
* [categoryClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryclick-204)
* [categoryRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryrollover-206)
* [categoryRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#categoryrollout-208)
* [milestoneClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestoneclick-210)
* [milestoneRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestonerollover-212)
* [milestoneRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#milestonerollout-214)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorclick-56)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollover-52)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollout-54)

### Events for the Select-scatter Chart

* [selectionStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionstart-180)
* [selectionEnd]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionend-182)
* [selectionRemoved]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#selectionremoved-178)

### Events for the Zoom-line Chart

* [zoomReset]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomreset-137)
* [zoomedOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomedout-139)
* [zoomedIn]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomedin-141)
* [zoomed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoomed-143)
* [zoomModeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#zoommodechanged-145)

### Event for the SSGrid Chart

* [pageNavigated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#pagenavigated-68)

## Map-related Events

* [entityRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityrollout-45)
* [entityRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityrollover-47)
* [entityClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#entityclick-49)
* [markerRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerrollover-59)
* [markerRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerrollout-62)
* [markerClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#markerclick-65)
* [connectorRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollover-52)
* [connectorRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorrollout-54)
* [connectorClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#connectorclick-56)

## Generic Events

* [annotationRollOver]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationrollover-4)
* [annotationRollOut]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationrollout-6)
* [annotationClick]({% site.baseurl %}/api/fusioncharts/namespaces/annotations#annotationclick-2)
* [dataLabelRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelrollover-127)
* [dataLabelRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelrollout-129)
* [dataLabelClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datalabelclick-125)
* [beforeDispose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedispose-267)
* [disposed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#disposed-269)
* [disposeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#disposecancelled-271)
* [logoRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logorollover-103)
* [logoRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logorollout-105)
* [logoClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoclick-107)
* [logoLoaded]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoloaded-109)
* [logoLoadError]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#logoloaderror-111)
* [beforeResize]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeresize-261)
* [resized]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#resized-263)
* [resizeCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#resizecancelled-265)
* [chartTypeChanged]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#charttypechanged-216)
* [chartClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartclick-82)
* [chartMouseMove]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartmousemove-85)
* [chartRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartrollover-87)
* [chartRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartrollout-90)
* [dataRestored]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#datarestored-149)
* [chartUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartupdated-160)
* [chartCleared]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#chartcleared-39)
* [pinned]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#pinned-147)
* [beforeExport]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeexport-113)
* [exported]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#exported-115)
* [exportCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#exportcancelled-117)
* [legendPointerDragStart]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendpointerdragstart-236)
* [legendPointerDragStop]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendpointerdragstop-238)
* [legendRangeUpdated]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legendrangeupdated-240)
* [legendItemClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemclicked-97)
* [legendItemRollover]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemrollover-99)
* [legendItemRollout]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#legenditemrollout-101)
* [linkClicked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkclicked-253)
* [beforeLinkedItemOpen]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforelinkeditemopen-10)
* [linkedItemOpened]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkeditemopened-12)
* [beforeLinkedItemClose]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforelinkeditemclose-14)
* [linkedItemClosed]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#linkeditemclosed-16)
* [dataplotRollOver]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247)
* [dataplotRollOut]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollout-249)
* [dataplotClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotclick-251)
* [overlayButtonClick]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#overlaybuttonclick-218)
* [beforePrint]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforeprint-119)
* [printComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#printcomplete-121)
* [printCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#printcancelled-123)
* [printReadyStateChange (Deprecated API)]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#printreadystatechange-deprecated-api-18)
