---
title: Create Column charts | FusionCharts
description: The FusionCharts Suite XT standard charts are simple charts used to plot data.
heading: Create Column charts
---

> These chart types belong to **FusionCharts XT**.

> Before going through this page we recommend you to go through the following pages:
* Installation
* Quick Start
* How it works.

## Column 2D Chart

Column charts represent data with rectangular vertical bars. The height of the columns is proportional to the values they represent. In case of a column chart, the `numeric values` are plotted along the y-axis, and the `data labels` are plotted along the x-axis. Column charts are best fitted when you want to compare values. Column charts can be used to plot both nominal and ordinal data. 

In this article, we will learn how to create a Column chart and it's variations. First, let's create a simple column chart showcasing the monthly revenue for last one year for Harry's SuperMart. We have plotted the months along the x-axis and the revenue, which is a numeric value, along the y-axis.

The chart is shown below:

{% embed_all standard-charts-line-area-and-column-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/s7t8F/) to edit the column 2D chart.

To create the above chart, follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a column chart, set `column2d`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

- Depending on the value passed to the `dataFormat`, set the `dataSource` attribute (JSON/XML) from where the data will be fetched.

- Specify the value for a data item using the `value` attribute within the `data` object.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=column2d) page of column 2D chart.


## Column chart with multiple dataplots

In the above example, we used only one variable of data, i.e., monthly revenue of a year. Now let's create a column chart comparing the quarterly revenue for 2 years. In this scenario, the chart will have 2 columns to display the data for the  current year and the previous year. 

The chart will look like as shown below:

{% embed_all standard-charts-multi-series-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/ppcas1oo/) to edit the above multi-series chart.

To create the above chart, follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-series column 2D chart, set `mscolumn2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=column3d) page of column 3D chart.

## Overlapped column charts

From version 3.13.0, FusionCharts has come up with a clever and rather effective overlapped column chart to display your data. In this chart, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare. 

Let's take the above chart with multiple dataplots and convert the same into an overlapped column chart. The chart will look like as shown below:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

To create an **Overlapped Column 2D** chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render an overlapped column 2D chart, set `overlappedColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=overlappedcolumn2d) page of overlapped column 2D chart. 


