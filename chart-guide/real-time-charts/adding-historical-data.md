---
permalink: chart-guide/real-time-charts/adding-historical-data.html
title: Adding Historical Data | FusionCharts
description: If you want the chart to initially show historical data and then continue updating itself-instead of starting with a blank canvas and receiving data updates thereafter.
heading: Adding Historical Data
chartPresent: true
---

In most applications of real-time charts, you would want the chart to initially show historical data and then continue updating itself - instead of starting with a blank canvas and receiving data updates thereafter. You can do this by specifying the historical data in your JSON/XML data.

In this section, you will be shown how you can specify historical data on a chart.

## Specifying Historical Data

A real-time chart rendered with historical data looks like this:

{% embed_all advanced-charting-real-time-charts-adding-historical-data-example-1.js %}

The above chart tracks the online purchases from Bakersfield Central at Harry’s SuperMart. When the chart first renders, it shows the purchases record from 8 minutes before the chart was rendered to a minute before. Thereafter, the chart updates itself every 5 seconds.
In the data structure above, you can see that we have:

* Added a `categories` > `category` object array to - create the x-axis labels for the historical data

* Added a `dataset` > `data` object array to specify data values - equal to the number of x-labels specified.