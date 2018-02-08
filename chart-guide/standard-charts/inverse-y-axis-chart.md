---
permalink: chart-guide/inverse-y-axis-chart.html
title: Inverse Y-axis Chart | FusionCharts
description: In inverse y-axis charts, y-axis in inverse, the lower limit and upper limit value positions are swapped in an inverse y-axis chart
heading: Inverse Y-axis Chart
chartPresent: true
---

The inverse y-axis charts are similar to the normal FusionCharts Suite XT charts, except that the y-axis in these charts is inversed; the lower limit and upper limit value positions are swapped in an inverse y-axis chart.

The chart below shows you the difference between a normal and an inverse y-axis chart:

{% embed_all chart-guide-inverse-y-axis-chart-example-1.js %}

The chart is rendered with two radio buttons: __Inverse Column 2D Chart__ and __Column 2D Chart__. When the first radio button is selected, the chart is rendered with an inverse y-axis; when the second one is selected, the chart is rendered with a normal y-axis. Observe that when you render the inverse y-axis chart, the lower limit value is rendered at the top and the upper limit value is rendered at the bottom - inverse of how it is rendered for a normal y-axis chart.

The FusionCharts Suite XT includes the following three types of inverse axis charts:

* Inverse Y-axis Column Chart

* Inverse Y-axis Area Chart

* Inverse Y-axis Line Chart

You have seen how an inverse y-axis column chart looks.

An inverse y-axis multi-series area chart looks like this:

{% embed_all chart-guide-inverse-y-axis-chart-example-2.js %}

An inverse y-axis multi-series line chart looks like this:

{% embed_all chart-guide-inverse-y-axis-chart-example-3.js %}

To render an inverse y-axis multi-series line chart, set the value of the `type` attribute to `inversemsline`.