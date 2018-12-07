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

* [loaded](/api/fusioncharts/fusioncharts-events#loaded-220)
* [rendered](/api/fusioncharts/fusioncharts-events#rendered-222)
* [renderComplete](/api/fusioncharts/fusioncharts-events#rendercomplete-226)
* [backgroundLoaded](/api/fusioncharts/fusioncharts-events#backgroundloaded-93)
* [backgroundLoadError](/api/fusioncharts/fusioncharts-events#backgroundloaderror-95)
* [beforeRender](/api/fusioncharts/fusioncharts-events#beforerender-255)
* [renderCancelled](/api/fusioncharts/fusioncharts-events#rendercancelled-258)
* [beforeInitialize](/api/fusioncharts/fusioncharts-events#beforeinitializestatic-event-4)
* [initialized](/api/fusioncharts/fusioncharts-events#initializedstatic-event-7)
* [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored-149)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated-160)

## Data Load-related Events

* [dataLoadRequested](/api/fusioncharts/fusioncharts-events#dataloadrequested-32)
* [dataLoadError](/api/fusioncharts/fusioncharts-events#dataloaderror-22)
* [dataLoadCancelled](/api/fusioncharts/fusioncharts-events#dataloadcancelled-24)
* [dataLoadRequestCancelled](/api/fusioncharts/fusioncharts-events#dataloadrequestcancelled-26)
* [dataLoadRequestCompleted](/api/fusioncharts/fusioncharts-events#dataloadrequestcompleted-20)
* [beforeDataUpdate](/api/fusioncharts/fusioncharts-events#beforedataupdate-34)
* [dataUpdateCancelled](/api/fusioncharts/fusioncharts-events#dataupdatecancelled-30)
* [dataUpdated](/api/fusioncharts/fusioncharts-events#dataupdated-28)
* [dataInvalid](/api/fusioncharts/fusioncharts-events#datainvalid-228)
* [dataXMLInvalid](/api/fusioncharts/fusioncharts-events#dataxmlinvalid-230)
* [dataLoaded](/api/fusioncharts/fusioncharts-events#dataloaded-232)
* [noDataToDisplay](/api/fusioncharts/fusioncharts-events#nodatatodisplay-234)

## Events Specific to Chart Types

### Events Related to Editable Charts (Select Scatter Chart, Drag-able Charts, Drag-node Charts)

* [beforeDataSubmit](/api/fusioncharts/fusioncharts-events#beforedatasubmit-151)
* [dataSubmitError](/api/fusioncharts/fusioncharts-events#datasubmiterror-153)
* [dataSubmitted](/api/fusioncharts/fusioncharts-events#datasubmitted-155)
* [dataSubmitCancelled](/api/fusioncharts/fusioncharts-events#datasubmitcancelled-157)

### Events for Drag-able Charts

* [dataplotDragStart](/api/fusioncharts/fusioncharts-events#dataplotdragstart-194)
* [dataplotDragEnd](/api/fusioncharts/fusioncharts-events#dataplotdragend-196)

### Events for the Drag-node Chart

* [nodeAdded](/api/fusioncharts/fusioncharts-events#nodeadded-162)
* [nodeUpdated](/api/fusioncharts/fusioncharts-events#nodeupdated-164)
* [nodeDeleted](/api/fusioncharts/fusioncharts-events#nodedeleted-166)
* [connectorAdded](/api/fusioncharts/fusioncharts-events#connectoradded-168)
* [connectorUpdated](/api/fusioncharts/fusioncharts-events#connectorupdated-170)
* [connectorDeleted](/api/fusioncharts/fusioncharts-events#connectordeleted-172)
* [labelAdded](/api/fusioncharts/fusioncharts-events#labeladded-174)
* [labelDeleted](/api/fusioncharts/fusioncharts-events#labeldeleted-176)
* [labelClick](/api/fusioncharts/fusioncharts-events#labelclick-184)
* [labelRollOver](/api/fusioncharts/fusioncharts-events#labelrollover-186)
* [labelRollOut](/api/fusioncharts/fusioncharts-events#labelrollout-188)
* [labelDragStart](/api/fusioncharts/fusioncharts-events#labeldragstart-190)
* [labelDragEnd](/api/fusioncharts/fusioncharts-events#labeldragend-192)

### Events for Pie and Doughnut Charts

* [rotationEnd](/api/fusioncharts/fusioncharts-events#rotationend-70)
* [rotationStart](/api/fusioncharts/fusioncharts-events#rotationstart-72)
* [centerLabelRollover](/api/fusioncharts/fusioncharts-events#centerlabelrollover-74)
* [centerLabelRollout](/api/fusioncharts/fusioncharts-events#centerlabelrollout-76)
* [centerLabelClick](/api/fusioncharts/fusioncharts-events#centerlabelclick-78)
* [centerLabelChanged](/api/fusioncharts/fusioncharts-events#centerlabelchanged-80)
* [slicingStart](/api/fusioncharts/fusioncharts-events#slicingstart-43)
* [slicingEnd](/api/fusioncharts/fusioncharts-events#slicingend-41)

### Events for Scroll Charts

* [scrollStart](/api/fusioncharts/fusioncharts-events#scrollstart-131)
* [scrollEnd](/api/fusioncharts/fusioncharts-events#scrollend-133)

### Events for Real-time Charts

* [alertComplete](/api/fusioncharts/fusioncharts-events#alertcomplete-242)
* [realTimeUpdateComplete](/api/fusioncharts/fusioncharts-events#realtimeupdatecomplete-37)
* [realTimeUpdateError](/api/fusioncharts/fusioncharts-events#realtimeupdateerror-245)

### Events for the Gantt Chart

* [processClick](/api/fusioncharts/fusioncharts-events#processclick-198)
* [processRollOver](/api/fusioncharts/fusioncharts-events#processrollover-200)
* [processRollOut](/api/fusioncharts/fusioncharts-events#processrollout-202)
* [categoryClick](/api/fusioncharts/fusioncharts-events#categoryclick-204)
* [categoryRollOver](/api/fusioncharts/fusioncharts-events#categoryrollover-206)
* [categoryRollOut](/api/fusioncharts/fusioncharts-events#categoryrollout-208)
* [milestoneClick](/api/fusioncharts/fusioncharts-events#milestoneclick-210)
* [milestoneRollOver](/api/fusioncharts/fusioncharts-events#milestonerollover-212)
* [milestoneRollOut](/api/fusioncharts/fusioncharts-events#milestonerollout-214)
* [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick-56)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover-52)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout-54)

### Events for the Select-scatter Chart

* [selectionStart](/api/fusioncharts/fusioncharts-events#selectionstart-180)
* [selectionEnd](/api/fusioncharts/fusioncharts-events#selectionend-182)
* [selectionRemoved](/api/fusioncharts/fusioncharts-events#selectionremoved-178)

### Events for the Zoom-line Chart

* [zoomReset](/api/fusioncharts/fusioncharts-events#zoomreset-137)
* [zoomedOut](/api/fusioncharts/fusioncharts-events#zoomedout-139)
* [zoomedIn](/api/fusioncharts/fusioncharts-events#zoomedin-141)
* [zoomed](/api/fusioncharts/fusioncharts-events#zoomed-143)
* [zoomModeChanged](/api/fusioncharts/fusioncharts-events#zoommodechanged-145)

## Map-related Events

* [entityRollOut](/api/fusioncharts/fusioncharts-events#entityrollout-45)
* [entityRollOver](/api/fusioncharts/fusioncharts-events#entityrollover-47)
* [entityClick](/api/fusioncharts/fusioncharts-events#entityclick-49)
* [markerRollOver](/api/fusioncharts/fusioncharts-events#markerrollover-59)
* [markerRollOut](/api/fusioncharts/fusioncharts-events#markerrollout-62)
* [markerClick](/api/fusioncharts/fusioncharts-events#markerclick-65)
* [connectorRollOver](/api/fusioncharts/fusioncharts-events#connectorrollover-52)
* [connectorRollOut](/api/fusioncharts/fusioncharts-events#connectorrollout-54)
* [connectorClick](/api/fusioncharts/fusioncharts-events#connectorclick-56)

## Generic Events

* [annotationRollOver](/api/fusioncharts/namespaces/annotations#annotationrollover-4)
* [annotationRollOut](/api/fusioncharts/namespaces/annotations#annotationrollout-6)
* [annotationClick](/api/fusioncharts/namespaces/annotations#annotationclick-2)
* [dataLabelRollOver](/api/fusioncharts/fusioncharts-events#datalabelrollover-127)
* [dataLabelRollOut](/api/fusioncharts/fusioncharts-events#datalabelrollout-129)
* [dataLabelClick](/api/fusioncharts/fusioncharts-events#datalabelclick-125)
* [beforeDispose](/api/fusioncharts/fusioncharts-events#beforedispose-267)
* [disposed](/api/fusioncharts/fusioncharts-events#disposed-269)
* [disposeCancelled](/api/fusioncharts/fusioncharts-events#disposecancelled-271)
* [logoRollover](/api/fusioncharts/fusioncharts-events#logorollover-103)
* [logoRollout](/api/fusioncharts/fusioncharts-events#logorollout-105)
* [logoClick](/api/fusioncharts/fusioncharts-events#logoclick-107)
* [logoLoaded](/api/fusioncharts/fusioncharts-events#logoloaded-109)
* [logoLoadError](/api/fusioncharts/fusioncharts-events#logoloaderror-111)
* [beforeResize](/api/fusioncharts/fusioncharts-events#beforeresize-261)
* [resized](/api/fusioncharts/fusioncharts-events#resized-263)
* [resizeCancelled](/api/fusioncharts/fusioncharts-events#resizecancelled-265)
* [chartTypeChanged](/api/fusioncharts/fusioncharts-events#charttypechanged-216)
* [chartClick](/api/fusioncharts/fusioncharts-events#chartclick-82)
* [chartMouseMove](/api/fusioncharts/fusioncharts-events#chartmousemove-85)
* [chartRollOver](/api/fusioncharts/fusioncharts-events#chartrollover-87)
* [chartRollOut](/api/fusioncharts/fusioncharts-events#chartrollout-90)
* [dataRestored](/api/fusioncharts/fusioncharts-events#datarestored-149)
* [chartUpdated](/api/fusioncharts/fusioncharts-events#chartupdated-160)
* [chartCleared](/api/fusioncharts/fusioncharts-events#chartcleared-39)
* [pinned](/api/fusioncharts/fusioncharts-events#pinned-147)
* [beforeExport](/api/fusioncharts/fusioncharts-events#beforeexport-113)
* [exported](/api/fusioncharts/fusioncharts-events#exported-115)
* [exportCancelled](/api/fusioncharts/fusioncharts-events#exportcancelled-117)
* [legendPointerDragStart](/api/fusioncharts/fusioncharts-events#legendpointerdragstart-236)
* [legendPointerDragStop](/api/fusioncharts/fusioncharts-events#legendpointerdragstop-238)
* [legendRangeUpdated](/api/fusioncharts/fusioncharts-events#legendrangeupdated-240)
* [legendItemClicked](/api/fusioncharts/fusioncharts-events#legenditemclicked-97)
* [legendItemRollover](/api/fusioncharts/fusioncharts-events#legenditemrollover-99)
* [legendItemRollout](/api/fusioncharts/fusioncharts-events#legenditemrollout-101)
* [linkClicked](/api/fusioncharts/fusioncharts-events#linkclicked-253)
* [beforeLinkedItemOpen](/api/fusioncharts/fusioncharts-events#beforelinkeditemopen-10)
* [linkedItemOpened](/api/fusioncharts/fusioncharts-events#linkeditemopened-12)
* [beforeLinkedItemClose](/api/fusioncharts/fusioncharts-events#beforelinkeditemclose-14)
* [linkedItemClosed](/api/fusioncharts/fusioncharts-events#linkeditemclosed-16)
* [dataplotRollOver](/api/fusioncharts/fusioncharts-events#dataplotrollover-247)
* [dataplotRollOut](/api/fusioncharts/fusioncharts-events#dataplotrollout-249)
* [dataplotClick](/api/fusioncharts/fusioncharts-events#dataplotclick-251)
* [overlayButtonClick](/api/fusioncharts/fusioncharts-events#overlaybuttonclick-218)
* [beforePrint](/api/fusioncharts/fusioncharts-events#beforeprint-119)
* [printComplete](/api/fusioncharts/fusioncharts-events#printcomplete-121)
* [printCancelled](/api/fusioncharts/fusioncharts-events#printcancelled-123)
* [printReadyStateChange (Deprecated API)](/api/fusioncharts/fusioncharts-events#printreadystatechange-deprecated-api-18)
