---
permalink: chart-guide/real-time-charts/clearing-chart-view.html
title: Clearing Chart View | FusionCharts
description: Real-time charts in the FusionCharts Suite XT let you clear the data currently being shown on the chart and render the new data afresh.
heading: Clearing Chart View
chartPresent: true
---

Real-time charts in the FusionCharts Suite XT let you clear the data currently being shown on the chart and render the new data afresh. Chart clearing helps to reduce CPU usage by real-time charts, when they have been running live for several days or months. Clearing the chart re-instantiates many objects in the chart, thereby clearing a lot of memory.

The chart view can be cleared:

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/clearing-chart-view.html#clearing-the-chart-from-the-server">from the server</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/clearing-chart-view.html#setting-a-chart-clearing-interval">by setting a clear interval</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/clearing-chart-view.html#clearing-chart-using-javascript-api">using JavaScript API</a>

In this section, you will be shown how you can clear the chart view using each of the above listed methods.

## Clearing the Chart from the Server

Consider the following scenario: You are plotting the values of a certain counter, in real-time, 24/7. At the start of each day, you want to clear the existing data being shown on the chart (of the previous day).

To do this, you will have to send the following command to the chart as part of your real-time data update:

```javascript

&clear=1

```

The above command clears all the data that is currently being shown on the chart. The chart now bears an empty canvas - ready to accept new incremental values from the real-time data provider page.

A real-time chart that clears all its data after every 10th update looks like this:

{% embed_all advanced-charting-real-time-charts-clearing-chart-view-example-1.js %}





In the above data, the `feedData()` method (covered in the section on [feeding and retrieving data]{% linkTo tutorials/chart-guide/real-time-charts/feeding-and-retrieving-data-through-api.md %}) is used to send the clearing command from the server to the chart.

<p class="text-info">When sending this command from the real-time data provider page to the chart, you need to make sure that it is not sent with each incremental data update. Otherwise, you will not see anything plotted on the chart because the chart will clear itself with each update.</p>

## Setting a Chart-clearing Interval

Real-time charts allow you to set a predefined interval in the JSON/XML data to clear the chart.

A real-time column chart configured to do this looks like this:

{% embed_all advanced-charting-real-time-charts-clearing-chart-view-example-2.js %}

Given below is a brief description of the attribute used to set the predefined interval:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`clearChartInterval`</td>
    <td>It is used to specify in the JSON/XML data the time after which a chart will automatically clear itself of the previous data. The interval should be specified in seconds. This attribute belongs to the `chart` object.</td>
  </tr>
</table>






In the data structure above, we have set the interval to 50 seconds. Therefore, after every 50 seconds, the chart will clear itself and start drawing with a fresh canvas.

## Clearing Chart using JavaScript API

Real-time charts expose a JavaScript API that enables you to clear charts at the client-side. To do this, you need to:

* Get a reference to the chart

* Call the `clearChart()` method

A real-time column chart that is configured to be cleared using the JavaScript API after every 10th update looks like this:

{% embed_all advanced-charting-real-time-charts-clearing-chart-view-example-3.js %}

In the above data, the `chartRef` variable is used to get the chart reference. The `clearChart()` method is then called using the `chartRef` variable.

<p class="text-info">You can call the JavaScript APIs of a chart only after it has rendered.</p>