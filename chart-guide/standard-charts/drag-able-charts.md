---
permalink: chart-guide/drag-able-charts/creating-drag-able-charts.html
title: Creating Drag-able Charts | FusionCharts
description: Drag-able charts are special types of charts that allow you to visually update data on the chart and understand how the estimated data values affect the whole chart.
heading: Creating Drag-able Charts
chartPresent: true
---

Drag-able charts are special types of charts that allow you to visually update data on the chart and understand how the estimated data values affect the whole chart.

In this section, you will be shown how you can:

* <a href="/chart-guide/drag-able-charts/creating-drag-able-charts#creating-a-drag-able-column-2d-chart" class="smoth-scroll">Create a drag-able column 2D chart</a>
* <a href="/chart-guide/drag-able-charts/creating-drag-able-charts#creating-a-drag-able-line-2d-chart" class="smoth-scroll">Create a drag-able line 2D chart</a>
* <a href="/chart-guide/drag-able-charts/creating-drag-able-charts#creating-a-drag-able-area-2d-chart" class="smoth-scroll">Create a drag-able area 2D chart</a>

## Creating a Drag-able Column 2D Chart

A drag-able column 2D chart created to plot the actual and estimated inventory status for the top five food items at Bakersfield Central looks like this:

{% embed_all chart-guide-drag-able-charts-creating-drag-able-charts-example-1.js %}

In the above chart, the data plots representing the estimated value are drag-able.

Given below is a brief description of the attributes used to create a drag-able column 2D chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`allowDrag`</td>
    <td>It is used to specify whether the data plots representing a dataset will be drag-able. Setting this attribute to `0` will disable the data plots from being drag-able, setting it to `1` (default) will enable them to be drag-able. This attribute belongs to the `dataset` object and makes all data plots for a dataset drag-able.</td>
  </tr>
</table>


The above sample also shows an external table with the values from the ‘Estimated Demand’ dataset. As soon as a value is updated on the chart, the table gets updated as well. This is done by retrieving the updated values using the `dataPlotDragEnd` event.

Observe that there is also a `Restore` button on the chart. When the restore button is clicked, all data is reset to its original values. This is done using the `dataRestored` event.

Given below is a brief description of the events used to configure drag-able charts:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataplotDragEnd`</td>
    <td>It is raised by the drag-able chart when you have finished dragging the data plots to update them.</td>
  </tr>
  <tr>
    <td>`dataRestored`</td>
    <td>It is raised by the drag-able chart when the `Restore` button is clicked. When this event is fired all updated values are cleared and the data is reset to its original values.</td>
  </tr>
</table>



## Creating a Drag-able Line 2D Chart

A drag-able line 2D chart created to plot the quarterly sales for Apple and Samsung looks like this:

{% embed_all chart-guide-drag-able-charts-creating-drag-able-charts-example-2.js %}

In the above chart, the anchors representing the sales estimates for Apple and Samsung for Q3 and Q4 are drag-able. Recall that in the above drag-able column 2D chart we have configured all the data plots for one dataset to be drag-able. In this chart, however, we have made only selected data points of all datasets drag-able.

Given below is a brief description of how the `allowDrag` attribute is used to make selected data points drag-able:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`allowDrag`</td>
    <td>To make selected data points drag-able, this attribute is used with the `data` object, which belongs to the `dataset` object. When used with the `data` object, it makes only that data point for which it is specified drag-able.</td>
  </tr>
</table>



## Creating a Drag-able Area 2D Chart

A drag-able area 2D chart created to plot the quarterly sales for Apple and Samsung looks like this:

{% embed_all chart-guide-drag-able-charts-creating-drag-able-charts-example-3.js %}

To create a drag-able area 2D chart from a drag-able line 2D chart, just change the `type` attribute to `dragarea`.