---
title: Inverse Y-axis Chart | FusionCharts
description: In inverse y-axis charts, y-axis in inverse, the lower limit and upper limit value positions are swapped in an inverse y-axis chart
heading: Inverse Y-axis Chart
---

> These chart types belong to **PowerCharts XT**.

The inverse y-axis charts are similar to the normal column charts, except that the y-axis and the data plots (column and area) in these charts are inverted. The lower limit and upper limit value positions are swapped in the inverse y-axis chart.

> The inverse data plots (column and area) will be applicable to the charts with positive y-axis range (> = 0).

The FusionCharts Suite XT includes the following three types of inverse axis charts:

* Inverse Y-axis Column Chart

* Inverse Y-axis Area Chart

* Inverse Y-axis Line Chart

## Inverse Y-axis Column Chart 

An inverse Y-axis column chart looks as shown below:

{% embed_chartAnatomy inverse-y-axis-column-chart.json %}

Let's create an inverse y-axis chart showcasing average page load time of hsm.com. In the sample you will observe that when you render the chart, the lower limit value is rendered at the top and the upper limit value is rendered at the bottom - which renders the inverse data plots.

To create an inverse y-axis chart follow the steps given below: 

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render an inverse y-axis column chart, set `inverseMSColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=InverseMSColumn2D) page of inverse y-axis column chart.

The inverse y-axis chart looks like a shown below:

{% embed_all standard-charts-inverse-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/WEJLC/) to edit the above inverse y-axis column chart

## Inverse Y-axis Area Chart

An inverse Y-axis area chart looks as shown below:

{% embed_chartAnatomy inverse-y-axis-area-chart.json %}

You have seen how an inverse y-axis column chart looks. To render an inverse y-axis area chart, change the value of the `type` attribute from `inverseMSColumn2D` to `inverseMSArea`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=InverseMSArea) page of inverse y-axis area chart.

An inverse y-axis multi-series area chart looks like this:

{% embed_all standard-charts-inverse-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/S38mg/) to edit the above inverse y-axis area chart.

## Inverse Y-axis Line Chart 

An inverse Y-axis line chart looks as shown below:

{% embed_chartAnatomy inverse-y-axis-line-chart.json %}

To render an inverse y-axis area chart, change the value of the `type` attribute from `inverseMSArea` to `inverseMSLine`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=InverseMSLine) page of inverse y-axis line chart.

An inverse y-axis multi-series line chart looks like this:

{% embed_all standard-charts-inverse-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/FJL6V/) to edit the above inverse y-axis line chart.