---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users using a previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.20.x.

## Resizing for Gauges

FusionCharts 3.20 updated the map of India to showcase Ladakh as a separate region. The Entity of Ladakh is now shown as a distinct region from Jammu and Kashmir. For more details, see [Ladakh map](https://www.fusioncharts.com/fusionmaps).

[sample before]

text

[sample after]

## Set the time format for the Time Navigator

FusionCharts 3.19 updated the value for `mintendency` in order to fix the tendency issue, causing the chart not to plot all datasets correctly when some datasets contained zero as values. Now, charts display all dataset plots despite the amount and values of the datasets.

[sample before]

text

[sample after]
 

## Remove scrollbar from legend container

FusionCharts version 3.19 improves the chart readability by allowing users to define the width of the Legend container. In addition, this option allows users to display the legend container without any scrollbars, therefore displaying all the information.

[sample before]

text

[sample after]


## Bar Chart supports all events

FusionCharts version 3.20 improved the supported events and methods you can use with the Radial Bar chart. For example, the Radial Bar chart added the `plotEventHandler` method to allow mouse events on the chart. 

<iframe width="100%" height="300" src="//jsfiddle.net/v394y5kd/4/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Before, events such us `dataPlotClick` was not supported.

[sample after]

Now, with the new `plotEventHandler` method, you can use mouse events in the chart.


