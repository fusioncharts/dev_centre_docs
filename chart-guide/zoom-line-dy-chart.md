---
permalink: chart-guide/zoom-line-dy-chart.html
title: Zoom-line Dual Y-Axis Chart | FusionCharts
description: The FusionCharts Suite XT zoom-line dual y-axis chart is used to analyze data at macroscopic and microscopic levels.
heading: Zoom-line Dual Y-Axis Chart
chartPresent: true
---

The FusionCharts Suite XT zoom-line dual y-axis chart, like the [zoom-line chart]{% linkTo tutorials/chart-guide/zoom-line-chart/creating-a-zoom-line-chart.md %}{:target='_blank'}, is used to analyze data at macroscopic and microscopic levels. With the dual y-axis, this chart can be used to plot data that belongs to datasets having different numeric units on the same chart—an advantage over using the conventional zoom-line chart. 

Another advantage of using the zoom-line dual y-axis chart is when you want to compare two datasets where the values of one dataset are spread over a smaller interval, while the values of another have large intervals between them. In this case, if the zoom-line chart was used, the dataset with the smaller interval will be plotted as a straight line.  

The chart below shows a zoom-line dual y-axis chart created to compare unique footfall with the sales (in dollars), for each day of the previous year.

{% embed_all chart-guide-zoom-line-dy-chart-example-1.js %}


## Brief Description of the Data Structure

In the JSON data, attributes and their corresponding values are written in the key-value pair format, as shown below:

```html

"<attributeName>": “<value>”

```

Given below is a brief description of the data structure used to create the above chart:
<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td> Type of chart to render. To render a zoom-line dual y-axis chart, set this attribute to `zoomlinedy`. </td>
  </tr>
  <tr>
    <td>`renderAt`</td>
    <td> Container object to render the chart </td>
  </tr>
  <tr>
    <td>`width`</td>
    <td> Chart width, in pixels </td>
  </tr>
  <tr>
    <td>`height`</td>
    <td> Chart height, in pixels </td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td> Format in which data that will passed to the chart object. This attribute takes two four  values: <br> __json__ (JSON data to render the chart is passed to the `dataSource` attribute) <br> __jsonurl__ (the relative path to a .json file is passed to the `dataSource` attribute) <br> Similarly, __xml__ and __xmlurl__ are also valid values. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td> Source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute. </td>
  </tr>
  <tr>
    <td> `caption` </td>
    <td> Chart caption <br> This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td> Chart sub-caption <br> This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`xAxisName`</td>
    <td> X-axis name </td>
  </tr>
  <tr>
    <td>`pYAxisName`</td>
    <td> Name of the primary y-axis </td>
  </tr>
  <tr>
    <td> `sYAxisName` </td>
    <td> Name of the secondary y-axis </td>
  </tr>
  <tr>
    <td> `compactDataMode` </td>
    <td> Sets whether the JSON data for the chart will be passed in compact form. Set this attribute to `1`, to pass JSON data in the compact form. <br> __Note__: The zoom-line charts work with the conventional multi-series JSON, while also supporting an alternative compact JSON format. The compact JSON format is intended to simplify JSONization of large quantities of data. </td>
  </tr>
  <tr>
    <td> `dataSeparator` </td>
    <td> Character to separate data values/labels, if chart data is passed in the compact mode. </td>
  </tr>
  <tr>
    <td> `pYAxisMaxValue` </td>
    <td> Upper limit (maximum value) of the primary y-axis </td>
  </tr>
  <tr>
    <td> `pYAxisMinValue` </td>
    <td> Lower limit (minimum value) of the primary y-axis </td>
  </tr>
  <tr>
    <td> `sYAxisMaxValue` </td>
    <td> Upper limit (maximum value) of the secondary y-axis </td>
  </tr>
  <tr>
    <td> `sYAxisMinValue` </td>
    <td> Lower limit (minimum value) of the secondary y-axis </td>
  </tr>
  <tr>
    <td>`category`</td>
    <td> String of data labels that will be rendered along the x-axis. <br>Labels are separated using the character specified in the `dataSeparator` attribute. <br> __Note__: For most other charts in FusionCharts Suite XT, `category` is used as an object array. For the zoom-line charts, however, it is used as an attribute belonging to the `categories` object array.</td>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td> Dataset name, shown in the legend box rendered below the chart. <br>This attribute belongs to the `dataset` object array.</td>
  </tr>
   <tr>
    <td>`data`</td>
    <td> Data values for the chart. <br>Each label is separated using the character specified in the `dataSeparator` character. <br> This attribute belongs to the `dataset` object array. <br> __Note__: For most other charts in FusionCharts Suite XT, `data` is used as an object array. For the zoom-line charts, however, it is used as an attribute belonging to the `dataset` object array.</td>
  </tr>
</table>