---
title: Create Area charts | FusionCharts
description: The FusionCharts Suite XT standard charts are simple charts used to plot data.
heading: Create Area Charts
---

Area charts are used to display quantitative data. An area chart is similar to the line chart, with the difference that the area marked by the anchors and line segments is filled. The area below the plotted line is filled with different colors to distinguish each of the data series.

## Area Chart with Single Data Plot

In this article, we will learn how to create an area chart and it's variations. First, let's create a simple area chart showcasing the total number of visitors at Bakersfield Central in a week. We have plotted the days along the x-axis and the number of visitors along the y-axis.

The area chart in 2D looks like:

{% embed_all standard-charts-multi-series-charts-example-6.js %}

In the above chart:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* To render a stacked column 2D chart, set the `type` attribute to `stackedcolumn2d`.

* Set the container object using `renderAt` attribute.

* Specify the chart dimensions using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

To render an area chart with the same use case as above, set the `type` to `area`.

For a detailed list of attributes, refer to the [chart attributes](https://www.fusioncharts.com/dev/chart-attributes?chart=area2d) page of an area chart.

Click [here](http://jsfiddle.net/fusioncharts/x5FBh/) to edit the area chart.

## Area Chart with Multiple Data Plots

Now, let's create a multi-series area chart that will show the comparison between the number of visitors in two different malls in a week. The area segments for both datasets have been rendered using different colors. This makes it easy to interpret and compare the data.

To render a multi-series area chart, set the `type` to `msarea`.

For a detailed list of attributes, refer to the [chart attributes](https://www.fusioncharts.com/dev/chart-attributes?chart=MSArea) page of multi-series area 2D chart.

A multi-series area chart looks like:

{% embed_all standard-charts-multi-series-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/jf73mv1e/) to edit the above multi-series chart.

## Scroll Area 2D Chart

Scroll charts are used when a large number of data plots are to be plotted within a small space. The scrollbar allows the users to scroll across (along the x-axis) the chart. Scroll charts are used to avoid cluttering of plots, thereby providing a clean look. 

Let's create a scroll area 2D chart to plot the sales trends for FY 2012 - FY 2013.

To render a scroll area chart in 2D, change the value of the `type` attribute to `scrollarea2d`. For a detailed list of attributes, refer to the [chart attributes](https://www.fusioncharts.com/dev/chart-attributes/?chart=scrollarea2d) page of scroll area 2D chart.

A scroll area chart in 2D looks like:

{% embed_all standard-charts-scroll-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/7neLV/) to edit the scroll area 2D chart.

