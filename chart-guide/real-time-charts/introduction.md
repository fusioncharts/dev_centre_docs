---
permalink: chart-guide/real-time-charts/introduction.html
title: Introduction to Real-time Charts | FusionCharts
description: Real-time charts, also known as data streaming charts, are charts that automatically update themselves after every n seconds, without any page refreshes
heading: Introduction to Real-time Charts
chartPresent: true
---

Real-time charts, also known as data streaming charts, are charts that automatically update themselves after every *n* seconds, without any page refreshes, by getting new data from the server.

FusionCharts Suite XT currently offers the following six real-time charts:

* Real-time Area

* Real-time Column

* Real-time Line

* Real-time Stacked Area

* Real-time Stacked Column

* Real-time Line (Dual Y)

Charts used in live stock monitoring are real-time charts. These charts first present the historical data for a given period of time. When new data is available, the charts update automatically and display the new data after discarding the previous value.

A real-time line chart used for stock price monitoring at Harry’s SuperMart looks like this:

{% embed_all advanced-charting-real-time-charts-introduction-example-1.js %}

## Features Supported by Real-time Charts

Real-time charts support the following features:

* [Multiple datasets](/chart-guide/real-time-charts/multiple-datasets-and-updates) with real time update for each of them

* [Multiple data updates](/chart-guide/real-time-charts/multiple-datasets-and-updates) in each update i.e., a single poll to the server can come back with any number of data values updated.

* [Multiple update and refresh intervals](/chart-guide/real-time-charts/chart-configurations) for the chart. Update interval fetches the new data but does not change the view of chart. Refresh interval applies the updated data on chart's view.

* [Message logger](/chart-guide/real-time-charts/setting-message-logger)

* [Alert manager](/chart-guide/real-time-charts/setting-alert-manager)

* [Annotations](/configuring-your-chart-basic/annotations) can be used to render custom objects

* [JavaScript API](/chart-guide/real-time-charts/feeding-and-retrieving-data-through-api) can be used to set data, retrieve data, start/stop updates, clear chart.

* [JavaScript events](/chart-guide/real-time-charts/listening-to-events) can be raised when the chart is initialized and rendered as well as when the data is updated.

* [Clearing chart view](/chart-guide/real-time-charts/clearing-chart-view)

* Stopping [real-time updates](/chart-guide/real-time-charts/data-format) from server

* [Interactive legend](/chart-guide/real-time-charts/multiple-datasets-and-updates) to show/hide datasets in line/area/column charts

* Real-time vertical divisional lines and trend-lines are supported

* Context menu to help users to enable/disable real-time updates

* (/configuring-your-chart-basic/number-format)

* [Pre-defined and automatic color palette](/chart-guide/real-time-charts/chart-configurations) support