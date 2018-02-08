---
permalink: chart-guide/zoom-scatter-chart/introducing-the-zoom-scatter-chart.html
title: Introducing the Zoom Scatter Chart | FusionCharts
description: The  zoom-scatter chart is primarily used to find correlations between datasets. Correlations in the chart can be determined by visual patterns in the data.
heading: Introducing the Zoom Scatter Chart
chartPresent: true
---

The FusionCharts Suite XT zoom-scatter chart, a special type of chart, is an extension of the scatter chart with the zooming and panning features and the ability to display millions of data points because of these features.

The  zoom-scatter chart is primarily used to find correlations between datasets. Correlations in the chart can be determined by visual patterns in the data. Higher the number of data points, higher is the accuracy of the correlations. The zoom-scatter chart is capable of handling more than a million data points in modern canvas supported browsers (including IE9+).

Take a look at the sample zoom-scatter chart shown below:

{% embed_chart chart-guide-zoom-scatter-chart-introducing-the-zoom-scatter-chart-example-1.js %}

The chart compares the admission rate (in percent) with the average annual returns on degree (in percent) for five majors and over a period of 20 years.

Drag the mouse-pointer over the chart to select and zoom into a subset of data points.

At the time of rendering, the zoom-scatter chart is displayed with a macroscopic view of  data. To select a subset of data points and zoom into them, drag the mouse pointer over the data points. A rectangle is drawn to highlight the selected data points and all points within this rectangle are zoomed. 

When a subset of data plots is selected and zoomed into, the selected portion expands to occupy the entire width and height of the chart. Data is neatly compressed, so that all of it fits into the height and width of the chart. To analyze the data in greater detail, the select and zoom process can be repeated several times over, until the last level of granularity. The chart can be restored to its original macroscopic display mode by clicking the ![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-6.png) button on the toolbar. 

For a large amount of data rendered within limited chart space, this chart helps you identify the correlation between data as well as analyze it further by zooming and panning into the data.

## The Zoom-scatter Chart Toolbar

The zoom-scatter chart toolbar is an important interaction mode for the users of this chart. The toolbar, shown in the image below, is located in the top-right corner of the chart.

![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-5.png)

The table below briefly describes the buttons on the toolbar of a zoom-scatter chart.

<table>
  <tr>
    <th> Button Icon </th>
    <th> Button Name </th>
    <th> Function </th>
  </tr>
  <tr> 
    <td> ![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-1.png) </td>
    <td> __Zoom-in__ </td>
    <td> Click to zoom-in to the chart/selected subset of data by a predefined amount, based on the center pivot point of the chart/dataset. </td>
  </tr>
  <tr>
    <td> ![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-2.png) </td>
    <td> __Zoom-out__ </td> 
    <td> Click to zoom-out of the chart/selected subset of data by a predefined amount, similar to the zoom-in functionality. </td>
  </tr>
  <tr>
    <td> ![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-3.png) </td>
    <td> __Reset__ </td>
    <td> Click to zoom-out to the original macroscopic view of data. </td>
  </tr>
  <tr>
    <td> ![image alt text](/assets/images/chart-guide-zoom-scatter-chart-introduction-to-the-zoom-scatter-chart-image-4.png) </td>
    <td> __Select-zoom/Pan__ switch button </td>
    <td> Click to switch between the modes of interaction. The zoom-scatter chart supports two modes of interaction—__the zoom mode__ and __the pan mode__. The zoom mode lets you select a subset of data to get a zoomed view of that data. The pan mode lets you pan through the data in the current chart view. By default, the zoom mode is enabled. After every zoom, the pan mode is activated. </td>
  </tr> 
</table>