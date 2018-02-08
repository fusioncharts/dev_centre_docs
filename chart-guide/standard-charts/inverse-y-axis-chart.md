---
title: Inverse Y-axis Chart | FusionCharts
description: In inverse y-axis charts, y-axis in inverse, the lower limit and upper limit value positions are swapped in an inverse y-axis chart
heading: Inverse Y-axis Chart
---

The inverse y-axis charts are similar to the normal FusionCharts Suite XT charts, except that the y-axis in these charts is inverted. The lower limit and upper limit value positions are swapped in an inverse y-axis chart.

The FusionCharts Suite XT includes the following three types of inverse axis charts:

* Inverse Y-axis Column Chart

* Inverse Y-axis Area Chart

* Inverse Y-axis Line Chart

## Inverse y-axis column 2D chart 

Let's create a inverse y-axis chart with two radio buttons : **Inverse Column 2D Chart** and **Column 2D Chart**. When the first radio button is selected, the chart is rendered with an inverse y-axis; when the second one is selected, the chart is rendered with a normal y-axis. Observe that when you render the inverse y-axis chart, the lower limit value is rendered at the top and the upper limit value is rendered at the bottom - inverse of how it is rendered for a normal y-axis chart.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a inverse y-axis chart, set the `type` attribute to `inverseMSColumn2D`.

For a detailed list of attributes you can check the API reference page of inverse y-axis chart.

The chart below shows you the difference between a normal and an inverse y-axis chart:

CHART

## Inverse y-axis area chart

You have seen how an inverse y-axis column chart looks. To render a inverse y-axis area chart, change the value of the `type` attribute from `inverseMSColumn2D` to `inverseMSArea`. The rest of the data structure remains the same.

An inverse y-axis multi-series area chart looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/S38mg/) to edit the inverse y-axis area chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Inverse y-axis line chart 

To render an inverse y-axis area chart, change the value of the `type` attribute from `inverseMSArea` to `inverseMSLine`. The rest of the data structure remains the same.

An inverse y-axis multi-series line chart looks like this:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/FJL6V/) to edit the inverse y-axis line chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**