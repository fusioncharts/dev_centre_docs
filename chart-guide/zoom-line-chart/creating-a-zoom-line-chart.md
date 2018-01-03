---
permalink: chart-guide/zoom-line-chart/creating-a-zoom-line-chart.html
title: Creating a Zoom Line Chart | FusionCharts
description: The FusionCharts Suite XT zoom line chart is a special type of multi-series line chart that allows analysis of data at macroscopic and microscopic levels.
heading: Creating a Zoom Line Chart
chartPresent: true
---

The FusionCharts Suite XT zoom line chart is a special type of multi-series line chart that allows analysis of data at macroscopic and microscopic levels. It can easily plot thousands of data points, which can produce indecipherable results if plotted on an ordinary line chart.

As an example, we will create a zoom line chart that plots the number of unique website visits to the harrysfoodmart.com and the harrysfashion.com websites for every day of the last year.

The zoom line chart thus created looks like this:

{% embed_all chart-guide-zoom-line-chart-creating-a-zoom-line-chart-example-1.js %}

As seen in the chart above, at the time of rendering, the zoom line chart displays a macroscopic view of the data. The data is neatly compressed, so that all of it fits into the width of the chart. When the user selects a segment of the line plot by dragging the mouse cursor across the canvas, the selected portion expands to occupy the entire width of the chart. At this point, the scrollbar becomes functional, allowing the user to view the data that precedes or follows the selected section of data. To analyze the data in greater detail, the user can repeat the select and zoom process several times over (until further zooming is not possible). The chart can be restored to its original macroscopic display mode by clicking the `Reset Chart` button on the toolbar.

The chart can be switched to pin mode, in pin mode - a ghost of the selected line segment gets imprinted on the canvas, thus enabling the user to compare the pinned segment with the rest of the chart simply by scrolling through. The pinned segment can be dragged to any part of the canvas.


<p class="text-info">The performance of a zoom line chart is based on the technical capabilities of a browser. A typical zoom line chart can render up to 10,000 data points without any performance issues.</p>

## Brief Explanation of the Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": “<value>”

```

Given below is a brief description of the attributes used to show a zoom line chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a zoom line chart, the value for this attribute will be `zoomline`.</td>
  </tr>
  <tr>
    <td>`renderAt`</td>
    <td>It is used to specify the container object where the chart will be rendered.</td>
  </tr>
  <tr>
    <td>`width`</td>
    <td>It is used to specify the width of the chart.</td>
  </tr>
  <tr>
    <td>`height`</td>
    <td>It is used to specify the height of the chart.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>It is used to specify the type of data that will passed to the chart object. This attribute takes two values: `json`, where the JSON data to render the chart is passed to the `dataSource` attribute, and `jsonurl`, where the relative path to a .json file is passed to the `dataSource` attribute.</td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td>It is used to specify the chart caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td>It is used to specify the chart sub-caption. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td>It is used to specify the name for the x-axis.</td>
  </tr>
  <tr>
    <td>`yAxisName`</td>
    <td>It is used to specify the name for the y-axis.</td>
  </tr>
  <tr>
    <td>`yAxisMinValue`</td>
    <td>It is used to specify the lower limit (minimum value) of the y-axis.</td>
  </tr>
  <tr>
    <td>`yAxisMaxValue`</td>
    <td>It is used to specify the upper limit (maximum value) of the y-axis.</td>
  </tr>
  <tr>
    <td>`pixelsPerPoint`</td>
    <td>It is used to specify the number of pixels that will be used to render a data point. A greater number of pixels will result in a higher quality display. This attribute is also used to set the distance between consecutive data plots.</td>
  </tr>
  <tr>
    <td>`pixelsPerLabel`</td>
    <td>It is used to specify the number of pixels that will be used to render a data label. </td>
  </tr>
  <tr>
    <td>`lineThickness`</td>
    <td>It is used to specify the thickness of the lines on the chart.</td>
  </tr>
  <tr>
    <td>`compactDataMode`</td>
    <td>It is used to specify whether the JSON data is in compact form. Setting this attribute to `1` specifies that the data is in compact form, setting it to `0` specifies that it is not.

The zoom line chart is a multi-series chart and works with conventional multi-series JSON. However, it also supports an alternative compact JSON format. The compact JSON format is intended to simplify JSONization of large quantities of data.</td>
  </tr>
  <tr>
    <td>`dataSeparator`</td>
    <td>It is used to specify the data separation character for the compact JSON. </td>
  </tr>
  <tr>
    <td> `labelHeight`</td>
    <td>It is used to specify the height of the data labels rendered along the x-axis.</td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart.</td>
  </tr>
  <tr>
    <td>`category`</td>
    <td>It is used to specify the string of data labels that will be rendered along the x-axis. Each label is separated using the character specified in the `dataSeparator` character.

For most other charts in the FusionCharts Suite XT, `category` is used as an object array. However, for a zoom line chart, it is used as an attribute belonging to the `categories` object array.</td>
  </tr>
  <tr>
    <td>`data`</td>
    <td>It is used to specify the data values for the chart. Each label is separated using the character specified in the `dataSeparator` character.

For most other charts in the FusionCharts Suite XT, `data` is used as an object array. However, for a zoom line chart, it is used as an attribute belonging to the `dataset` object array.</td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify a name for the dataset. This name is shown in the legend box rendered below the chart. This attribute belongs to the `dataset` object array.</td>
  </tr>
</table>

<p class="text-info"> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points. </p>