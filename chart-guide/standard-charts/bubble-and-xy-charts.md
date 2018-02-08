---
permalink: chart-guide/bubble-and-xy-charts/creating-bubble-and-xy-charts.html
title: Creating Bubble and XY Charts | FusionCharts
description: Scatter charts are used for plotting data that is defined in terms of two numeric parameters.
heading: Creating Bubble and XY Charts
chartPresent: true
---

Bubble and XY charts are used for plotting data that can be defined in terms of multiple numeric parameters. In these charts, the x and y axes are numeric. So, the position of a data point is an indicator of two distinct numeric values.

The XY charts available in the FusionCharts Suite XT are:

* <a href="/chart-guide/bubble-and-xy-charts/creating-bubble-and-xy-charts#scatter-charts" class="smoth-scroll">Scatter Chart</a>

* <a href="/chart-guide/bubble-and-xy-charts/creating-bubble-and-xy-charts#bubble-charts" class="smoth-scroll">Bubble Chart</a>

## Scatter Charts

Scatter charts are used for plotting data that is defined in terms of two numeric parameters.

A simple scatter chart looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-creating-bubble-and-xy-charts-example-1.js %}

The above scatter chart is plotted for two numeric values - the average day temperature (plotted on the x-axis and the sales (in USD) of beer and ice-cream (plotted on the y-axis); the chart shows how the temperature affects the sales revenue of beer and ice-cream.

Scatter charts are multi-series charts, but their data format is slightly different from that of conventional multi-series charts.

## Bubble Charts

Bubble charts are used for plotting data that is defined in terms of three numeric parameters. The third numeric parameter is indicated by the diameter of the bubble.

A simple bubble chart looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-creating-bubble-and-xy-charts-example-2.js %}

The JSON/XML format of a bubble chart is slightly different from that of a scatter chart, this is because the bubble chart plots an additional numeric parameter.


<p class="text-info">In case of bubble and scatter charts, categories are optional  because the x-axis is numeric. Categories can, however, be used to define customized x-axis labels for any location on the x-scale. A category can define numeric or non-numeric labels for the x-axis. Unlike other multi-series charts where each dataset contains the same number of objects present in the data array as the number of categories, scatter and bubble charts can have varying number of objects present in the data array elements under each dataset array. In case categories are not defined, the x-axis displays an automatically-calculated numeric scale with vertical divisional lines and values of the divisional lines as x-axis labels. However, you can also explicitly define categories of your choice and show only those categories as x-axis labels. Moreover, you can also combine the categories and automatically-generated x-axis labels using a mixed mode. All of this will be explained in this section.</p>

## Brief Explanation of the JSON Data Structure

In the JSON data, the attributes and their corresponding values are written in the following key-value pair format:

```html

"<attributeName>": "<value>"

```

Given below is a brief description of the data structure used to create a bubble chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>It is used to specify the type of chart you want to render. For example, to render a bubble chart, the value for this attribute will be `bubble`.</td>
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
    <td>`xAxisMinValue`</td>
    <td>It is used to specify the lower limit for the x-axis.</td>
  </tr>
  <tr>
    <td>`xAxisMaxValue`</td>
    <td>It is used to specify the upper limit for the x-axis.</td>
  </tr>
  <tr>
    <td>`yAxisMinValue`</td>
    <td>It is used to specify the lower limit for the y-axis.</td>
  </tr>
  <tr>
    <td>`yAxisMaxValue`</td>
    <td>It is used to specify the upper limit for the y-axis.</td>
  </tr>
  <tr>
    <td>`plotFillAlpha`</td>
    <td>It is used to specify the transparency for the plot fill color. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
  <tr>
    <td>`plotFillHoverColor`</td>
    <td>It is used to specify the hex code for the plot fill color when the mouse pointer is hovered over it.</td>
  </tr>
  <tr>
    <td>`showPlotBorder`</td>
    <td>It is used to specify whether the plot border will be shown. Setting this attribute to `1` will show the plot border, setting it to `0` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`numDivlines`</td>
    <td>It is used to specify the number of horizontal axis divisional lines to be rendered on the chart.</td>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether the data values will be shown for their corresponding data plots. Setting this attribute to `1` will show the values, setting it to `0` will hide them.</td>
  </tr>
  <tr>
    <td>`showTrendlineLabels`</td>
    <td>It is used to specify whether trendline labels will be shown. Setting this attribute to `0` will hide the trendline labels, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`plotTooltext`</td>
    <td>It is used to specify the tool text for data plots.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for a data item. The label appears on the x-axis. This attribute belongs to the `category` object, which belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>It is used to specify the x-axis position for a category/data item. To specify the x-axis position for a category, this attribute is used with the `category` object, which belongs to the `categories` object. To specify the x-axis position for a data item, this attribute is used with the `data` object, which belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>It is used to specify the y-axis value for a data item. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`z`</td>
    <td>It is used to specify the z-axis value for a data item. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`name`</td>
    <td>For a bubble chart, it is used to specify the name that will be rendered on the bubble. This attribute belongs to the `category` object, which belongs to the `categories` object.</td>
  </tr>
  <tr>
    <td>`showVerticalLine`</td>
    <td>It is used to specify whether a vertical line should be shown for a category. Setting this attribute to `1` shows the vertical line, setting it to `0` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the data plots for a dataset. This attribute belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`theme`</td>
    <td>It is used to specify the theme for the chart.</td>
  </tr>
</table>