---
title: Overlapped Column and Bar Charts | FusionCharts
description: In overlapped charts, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare.
heading: Overlapped Column and Bar Charts
breadcrumb: [["Home", "/"], ["Overlapped Column and Bar Charts"]]
---

> These chart types belong to **FusionCharts XT**.

In version 3.13.0, FusionCharts has come up with a clever and rather effective bar chart to display your data- Overlapped Charts. In this chart, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare. 

The different types of overlapped charts available in the FusionCharts Suite XT are:

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

## Overlapped Column 2D Chart

In this sample let's create a overlapped column 2D chart showcasing...

To create a overlapped column 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-series column 2D chart, set `overlappedColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=overlappedcolumn2d "@@open-newtab") page of overlapped column 2D chart.

An overlapped column 2D chart looks like:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/yaqert65/ "@@open-newtab") to edit the above overlapped column 2D chart.

## Overlapped Bar 2D Chart

To render an overlapped bar 2D chart, change the value of `type` attribute from `overlappedColumn2D` to `overlappedBar2D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=overlappedbar2d "@@open-newtab") page of overlapped bar 2D chart.

The overlapped bar 2D chart looks like:

{% embed_all standard-charts-overlapped-bar2d-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/6k7zoes8/ "@@open-newtab") to edit the above overlapped bar 2D chart.

Costomization of the Overlapped Bar & Column charts are same as [Combination Charts]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab').