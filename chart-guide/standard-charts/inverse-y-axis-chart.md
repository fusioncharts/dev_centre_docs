---
title: Inverse Y-axis Chart | FusionCharts
description: In inverse y-axis charts, y-axis in inverse, the lower limit and upper limit value positions are swapped in an inverse y-axis chart
heading: Inverse Y-axis Chart
breadcrumb: [["Home", "/"], ["Inverse Y-axis Charts"]]
---

> This chart type belongs to PowerCharts XT.

The inverse y-axis charts are similar to the normal column charts, except that the y-axis in these charts is inverted. The lower limit and upper limit value positions are swapped in an inverse y-axis chart.

The FusionCharts Suite XT includes the following three types of inverse axis charts:

* Inverse Y-axis Column Chart

* Inverse Y-axis Area Chart

* Inverse Y-axis Line Chart

## Inverse Y-axis Column Chart 

Let's create an inverse y-axis chart with two radio buttons: **Inverse Column 2D Chart** and **Column 2D Chart**. Select the first radio button to render the chart with an inverse y-axis; select the second radio button to render the chart with a normal y-axis. Observe that when you render the inverse y-axis chart, the lower limit value is rendered at the top and the upper limit value is rendered at the bottom - inverse of how it is rendered for a normal y-axis chart.

To create an inverse y-axis chart follow the steps given below: 

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render an inverse y-axis column chart, set `inverseMSColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=InverseMSColumn2D "@@open-newtab") page of inverse y-axis column chart.

The chart below shows you the difference between a normal and an inverse y-axis chart:

{% embed_all standard-charts-inverse-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/WEJLC/ "@@open-newtab") to edit the above inverse y-axis column chart

## Inverse Y-axis Area Chart

You have seen how an inverse y-axis column chart looks. To render an inverse y-axis area chart, change the value of the `type` attribute from `inverseMSColumn2D` to `inverseMSArea`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=InverseMSArea "@@open-newtab") page of inverse y-axis area chart.

An inverse y-axis multi-series area chart looks like this:

{% embed_all standard-charts-inverse-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/S38mg/ "@@open-newtab") to edit the above inverse y-axis area chart.

## Inverse Y-axis Line Chart 

To render an inverse y-axis area chart, change the value of the `type` attribute from `inverseMSArea` to `inverseMSLine`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=InverseMSLine "@@open-newtab") page of inverse y-axis line chart.

An inverse y-axis multi-series line chart looks like this:

{% embed_all standard-charts-inverse-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/FJL6V/ "@@open-newtab") to edit the above inverse y-axis line chart.