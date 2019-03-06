---
title: Radar Chart | FusionCharts
description: A radar chart is a visual interpretation of data bearing multiple dimensions, the radial grid like structure,the chart displays different categories values
heading: Radar Chart
---

> This chart type belongs to **PowerCharts XT**.

A radar chart (also known as a spider chart) is a visual interpretation of data bearing multiple dimensions. With the radial grid like structure, the chart displays the values of different categories on its axis. Radar charts are primarily used as a data comparison tool to visually correlate and contrast entities over its diverse aspects such as growth against benchmarks, progress over several criteria, etc. Radar charts can be plotted for a single dataset (single-series radar chart) or multiple datasets (multi-series radar chart).

Common application areas for radar charts include:

* Business performance

* Quality analysis

* Product comparison

As an example, we will create our first radar chart that plots the results of a customer feedback survey based on five categories. The radar chart will be used to compare the results for each category and determine what service needs improvement.

To create a radar chart follow the steps given below:

* Specify the chart type using the `type` attribute. To render a radar chart, set `radar`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

**In the JSON data:**

* Set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the label for a data item using the `label` attribute. This attribute belongs to the `category` object, which in turn belongs to the `categories` object.

* Specify the value for a data item using the `value` attribute within the `data` object. 

* Specify the name of the series for a dataset using the `seriesname` attribute. This attribute belongs to the `dataset` object.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=radar) page of multi-series radar chart.

The radar chart created will look like as  shown below:

{% embed_all standard-charts-radar-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/64v13yyy/) to edit the radar chart.

Now, we will create a multi-series radar chart for the budget analysis for the current month for the five key departments at a store. For each department, we will plot the allocated budget and the actual cost. This will help to determine how accurate the budget estimation at the beginning of the month was - whether the budget was over-allocated, under-allocated, or correctly allocated. 

> The data structure to create the multi-series radar chart is same as that of radar chart.

The multi-series radar chart thus created looks like this:

{% embed_all standard-charts-radar-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/gqLerkph/) to edit the multi-series radar chart.