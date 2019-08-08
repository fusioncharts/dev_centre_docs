---
title: Stacked Charts | FusionCharts
description: In stacked chart plot datasets are on top of each other. They help in displaying the cumlative magnitude of two or more data series.
heading: Stacked Charts
---

> These chart types belong to **FusionCharts XT**.

Stacked charts are used when the focus of the chart is to compare the totals and a part of the totals. In Stacked charts, the datasets are plotted on top of each other. Stacked charts help in displaying the cumulative magnitude of two or more data series. Different colors are used to illustrate the data series in the stack.

The FusionCharts Suite XT includes the following types of stacked charts:

* Stacked Column 2D Chart

* Stacked Bar 2D Chart

* Stacked Area 2D Chart

## Stacked column 2D Chart

As an example, We will now create a stacked column 2D chart to plot the revenue split for each quarter of the current year by product category - food products and non-food products. The data plots for each category are rendered using two distinct colors to help interpretation. The data plots for non-food products are stacked above the data plots for food products.

The stacked column chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/15zbv887/) to edit the stacked column 2D chart.

To create a stacked column chart in 2D, follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* To render a stacked column 2D chart, set the `type` attribute to stackedcolumn2d.

* Set the container object using `renderAt` attribute.

* Specify the chart dimensions using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedcolumn2d) page of stacked column 2D chart.

## Stacked Bar 2D Chart

To render a stacked bar chart in 2D, change the value of the `type` attribute from `stackedarea2d` to `stackedbar2d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=stackedbar2d) page of stacked bar 2D chart.

A stacked bar chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/obga4uw9/) to edit the stacked bar 2D chart.

## Stacked Area 2D

To render a stacked area chart in 2D, change the value of the `type` attribute from `stackedcolumn3d` to `stackedarea2d`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](https://www.fusioncharts.com/dev/chart-attributes?chart=stackedarea2d) page of stacked area 2D chart.

A stacked area chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/3RYK6/) to edit the stacked area 2D chart.

