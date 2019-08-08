---
title: Learn to create Pie & Doughnut Charts
description: Pie and Donut Charts are great tools for visualizing Part-to-whole relationships in a dataset. This handy guide teaches all about making pie and doughnut charts with custom attributes like labels, lines, radius, angles and much more.
heading: Pie and Doughnut Charts
---

> These chart types belong to **FusionCharts XT**.

A pie chart is a circular chart divided into sectors where the arc length of each sector, its central angle, and its area is proportional to the quantity it represents. Doughnut charts are meant to express a "part-to-whole" relationship, where all pieces together represent 100%. It is similar to a pie chart and facilities similar kinds of data analysis. FusionCharts Suite XT includes the pie and doughnut charts to plot data that needs to be shown as a percent of the whole.

## Pie 2D Chart

A pie chart displays data, information, and statistics in a 'pie-slice' format with varying slice sizes telling you how much of one data element exists. The bigger the slice, the more of that particular data was gathered.

Let's create our first pie 2D chart showcasing the split in revenue by product categories for one year.

The pie 2D chart is shown below:

{% embed_all standard-charts-pie-and-doughnut-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/hLhjhft8/) to edit the pie 2D chart.

To create a pie 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the type of chart using the `type` attribute and to render the pie 2D chart, set it as `pie2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimensions of the chart using `width` and `height` attribute.

* Set the type of data (JSON) you want to pass to the chart object using `dataFormat` attribute.

## Doughnut 2D Chart

A doughnut chart is similar to a pie chart with an area of the centre cut out, making it look like a donut, hence the name. It is used to express a part-whole relationship. It displays data in rings, where each ring represents a data series.

The doughnut 2D chart is shown below:

{% embed_all standard-charts-pie-and-doughnut-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/2Lyd4bpv/) to edit the doughnut 2D chart.

Let's create our first doughnut 2D chart showcasing the same use case for the pie chart created above.

The steps are the same as the pie 2D chart, the only change is the chart type.

* To create a doughnut 2D chart, set the `type` attribute to `doughnut2d`.