---
title: Kagi Chart | FusionCharts
description: Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. These charts are independent of time
heading: Kagi Chart
---

> This chart type belongs to **PowerCharts XT**.

## Kagi Chart- Elements

Developed by the Japanese in the 1870s, the Kagi chart uses a series of vertical lines to illustrate general levels of supply and demand for certain assets. Thick lines are drawn when the price of the underlying asset breaks above the previous high price and is interpreted as an increase in demand for the asset. Thin lines are used to represent increased stock when the price falls below the previous low.

{% embed_chartAnatomy kagi-chart.json %}

Let's create a Kagi chart which will show a series of connecting vertical lines. The thickness and direction of the lines will be dependent on the price. The line will extend until the prices are moving in the same direction. Once the prices reverse by a negative amount, a new Kagi line is drawn in a new column. When prices enter a previous high or low, the thickness of the kagi line changes.

To create a Kagi chart, follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a kagi chart, set `kagi`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Depending on the value passed to the `dataFormat` attribute, set the `dataSource` attribute(JSON/XML) from where the data will be fetched.

* Specify the value for a data item using the `value` attribute within the `data` object.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=kagi) page of kagi chart.

A simple Kagi chart looks like:

{% embed_all standard-charts-kagi-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/JRZ36/) to edit the kagi chart.

These charts are independent of time and only change direction once a predefined reversal amount is reached. This reversal value could be configured either as a percentage of range value or absolute value.

Anchors can also be plotted at each data point to show the data points individually. They can be configured to be shown or to be hidden.
