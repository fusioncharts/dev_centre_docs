---
title: Overlapped Column and Bar Charts | FusionCharts
description: In overlapped charts, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare.
heading: Overlapped Column and Bar Charts
---

> These chart types belong to **FusionCharts XT**.

In version 3.13.0, FusionCharts has come up with a clever and rather effective bar chart to display your data- Overlapped Charts. In this chart, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare. 

The different types of overlapped charts available in the FusionCharts Suite XT are:

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

## Overlapped Column 2D Chart

An overlapped column 2D chart consists of two or more sets of overlapped columns as seen in the image below:

{% embed_chartAnatomy overlapped-column-chart.json %}

In this sample let's create an **Overlapped Column 2D** chart comparing the "Healthcare Expenditure per capita" between public and private sectors.

To create an **Overlapped Column 2D** chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render an overlapped column 2D chart, set `overlappedColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=overlappedcolumn2d) page of overlapped column 2D chart.

An overlapped column 2D chart looks like:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/yaqert65/) to edit the above overlapped column 2D chart.

## Overlapped Bar 2D Chart

An overlapped bar 2D chart consists of two or more sets of overlapped bars as seen in the image below:

{% embed_chartAnatomy overlapped-bar-chart.json %}

To render an overlapped bar 2D chart, change the value of `type` attribute from `overlappedColumn2D` to `overlappedBar2D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=overlappedbar2d) page of overlapped bar 2D chart.

The overlapped bar 2D chart looks like:

{% embed_all standard-charts-overlapped-bar2d-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/6k7zoes8/) to edit the above overlapped bar 2D chart.
