---
permalink: gauge-and-widgets-guide/real-time-gauges/troubleshooting-real-time-gauges.html
title: Troubleshooting Real-time Gauges | FusionCharts
description: This article talks about few problems of real time gauges, that is, gauges does not update in real-time or any error accessing JavaScript API method
heading: Troubleshooting Real-time Gauges
chartPresent: false
---

Real time gauges are useful when you have to monitor the current value without considering historical values. The article [Setting up Real Time Gauges](/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges) describes how gauges can be set to update in real time.

Here are a few problems that might come up with real time gauges, and the possible solutions:

## Problem 1: Gauge does not update in real time

If the real-time gauge is set up to receive data from the server and the gauge renders initially but does not update subsequently, ensure that:

* you have specified a valid path for the [`dataStreamURL`](/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges)  attribute

* if the URL has special characters like `?` or `&`,  then URL-encode the `dataStreamURL`

* the `dataStreamURL` attribute returns correct data. To test this, run the URL on a separate page on your browser and it should return data in text format. Ensure the data returned does not contain carriage return (new-line characters) or HTML elements

* you have specified a valid value for the `refreshInterval` attribute

* the page that provides incremental data update to the gauges is hosted on the same sub-domain. For instance, a chart residing at "server1.mydomain.com" will not be able to access data from “mydomain.com”.

<p class="text-info"> To load data from a different domain, setup a proxy page at the sub-domain. The page will request data from the distant domain and relay it to the gauge. </p>

## Problem 2: Error accessing JavaScript API methods

When accessing any of the JavaScript API methods, if you get an error ` .. is not a function of`, ensure that:

* you are calling the JavaScript API method after the gauge has [loaded](/api/fusioncharts/fusioncharts-events#event-loaded) and [rendered](/api/fusioncharts/fusioncharts-events#event-rendered).

* you have provided all the required .js files of the FusionCharts library and no other JavaScript error has occured.

* you are not rendering the gauge from the local file system (C:\ , D:). Instead, run it from a server (localhost - IIS or Apache) as the default security settings do not allow JavaScript interactions on the local file system, unless explicitly set.

For information on using the FusionCharts Suite XT Debugger, refer the article (/troubleshooting/debugger).
