---
title: Stacked Charts | FusionCharts
description: In stacked chart plot datasets are on top of each other. They help in displaying the cumlative magnitude of two or more data series.
heading: Stacked Charts
breadcrumb: [["Home", "/"], ["Stacked Charts"]]
---

Stacked Charts

Stacked charts are similar to multi-series charts, but plot datasets on top of each other, instead of the clustered side-by-side placement adopted by multi-series charts. Stacked charts help in displaying the cumulative magnitude of two or more data series. They help in representing a data value as a sum of two or more values. Each data series can be distinguished by the color of its section in the stack.

The FusionCharts Suite XT includes the following types of stacked charts:

* Stacked Column 2D Chart

* Stacked Column 3D Chart

* Stacked Area 2D Chart

* Stacked Bar 2D Chart

* Stacked Bar 3D Chart

* Stacked Column 2D Line Single Y

* Stacked Column 3D Line Single Y

* Stacked Column 3D Line Dual Y

* Multi-series Stacked Column 2D Chart

* Multi-series Stacked Column 2D Line Dual Y

* Scroll Stacked Column 2D

## Stacked column 2D chart

As an example, we will create a stacked column 2D chart to plot the revenue split for each quarter of the current year by product category - food products and non-food products. The data plots for each category are rendered using two distinct colors to help interpretation. The data plots for non-food products are stacked above the data plots for food products, instead of alongside as in multi-series charts.

To create a stacked column chart in 2D follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a column chart, set `stackedcolumn2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes you can check the API reference page of stacked column 2D chart.

The stacked column 2D chart thus created looks like this:

{% embed_all standard-charts-stacked-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/15zbv887/) to edit the stacked column 2D chart.

## Stacked Column 3D chart

To render a stacked column chart in 3D, change the value of the `type` attribute from `stackedcolumn2d` to `stackedcolumn3d`. The rest of the data structure remains the same.

A stacked column chart in 3D looks like:

{% embed_all standard-charts-stacked-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/z14fubaq/) to edit the stacked column 3D chart.

## Stacked Area 2D chart

To render a stacked area chart in 2D, change the value of the `type` attribute from `stackedcolumn3d` to `stackedarea2d`. The rest of the data structure remains the same.

A stacked area chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/3RYK6/) to edit the stacked area 2D chart.

## Stacked Bar 2D Chart

To render a stacked bar chart in 2D, change the value of the `type` attribute from `stackedarea2d` to `stackedbar2d`. The rest of the data structure remains the same.

A stacked bar chart in 2D looks like:

{% embed_all standard-charts-stacked-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/obga4uw9/) to edit the stacked bar 2D chart.

## Stacked area 3D chart

To render a stacked bar chart in 3D, change the value of the `type` attribute from `stackedbar2d` to `stackedbar3d`. The rest of the data structure remains the same.

A stacked bar chart in 3D looks like:

{% embed_all standard-charts-stacked-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/L6gg6ow3/) to edit the stacked bar 3D chart.

Now, let's customize the appearance and properties of the charts. 

## Display the Cumulative Sum

You can opt to show the sum of all stacked data plots in a column above that column.  To show the sum of all stacked data plots, set the `showSum` attribute to `1`.

Refer to the code given below:

```
{
  "chart": {
    "showSum": "1"
  },
...
}

```
A stacked column 2D chart with the cumulative sum rendered above its corresponding column looks like this:

{% embed_chart standard-charts-stacked-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/15zbv887/) to edit the above stacked column 2D chart.

## Create 100% Stacked Charts

You can use stacked charts to show the percentage distribution for individual items of a dataset. These stacked charts are called 100% Stacked Charts. The y-axis, instead of representing the actual data values, represents the percentage values. 

To create a 100% stacked column chart, set the `stack100Percent` attribute to `1`. 

Refer to the code given below:

```
{
  "chart": {
    "stack100Percent": "1"
  },
...
}

```

A 100% stacked column 2D chart looks like this:

{% embed_chart standard-charts-stacked-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/pcgxjcLb/) to edit the above stacked column 2D chart.

## Show Percent Values in Tool-tips

By default, actual data values are rendered in tool-tips. Set the `showPercentInToolTip`  to `1` to show the percentage values in tool-tips.

Refer to the code given below:

```
{
  "chart": {
    "showPercentInTooltip": "1"
  },
...
}

```
A stacked column chart configured to show percent values in tool-tips looks like this:

{% embed_chart standard-charts-stacked-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/dwu9w555/) to edit the above stacked column 2D chart.