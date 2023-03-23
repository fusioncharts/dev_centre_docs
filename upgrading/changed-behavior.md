---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users using a previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.20.x.

## Resizing for Gauges

FusionCharts version 3.20 improves the resizing functionality for Gauges, adjusting the width of the chart container as expected. Before, the resize functionality did not work for the `colorRange` attribute.

<iframe width="100%" height="300" src="//jsfiddle.net/srishti_fc/wsqux3p4/2/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Before, the chart’s container did not adjust accordingly.

<iframe height="300" style="width: 100%;" scrolling="no" title="SUPPORT-2150" src="https://codepen.io/fusioncharts/embed/QWVvMde/5a4745f916723b609b51a82c4bed00e4?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/QWVvMde/5a4745f916723b609b51a82c4bed00e4">
  SUPPORT-2150</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In version 3.20, resizing the chart’s container works as expected.


## Set the time format for the Time Navigator

FusionCharts version 3.20 enhanced the calculation of the time format of the x-axis to match the time format of the slider. Before, no calculation was present to sync the time format of the x-axis and the time format of the slider.

<iframe width="100%" height="300" src="//jsfiddle.net/k7pexwmv/1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Before, the chart showed two different time formats.


<iframe height="300" style="width: 100%;" scrolling="no" title="SUPPORT-2242(5)" src="https://codepen.io/fusioncharts/embed/KKxmmKN/f528a1998ee5964dcca6bc8e402ebb4d?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/KKxmmKN/f528a1998ee5964dcca6bc8e402ebb4d">
  SUPPORT-2242(5)</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In version 3.20, the chart shows equivalent time formats. 
 

## Remove scrollbar from legend container

FusionCharts version 3.19 improves the chart readability by allowing users to define the width of the Legend container. In addition, this option allows users to display the legend container without any scrollbars, therefore displaying all the information.

[sample before]

text

[sample after]


## Bar Chart supports all events

FusionCharts version 3.20 improved the supported events and methods you can use with the Radial Bar chart. For example, the Radial Bar chart added the `plotEventHandler` method to allow mouse events on the chart. 

<iframe width="100%" height="300" src="//jsfiddle.net/v394y5kd/4/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


Before, events such us `dataPlotClick` was not supported.


<iframe height="300" style="width: 100%;" scrolling="no" title="SUPPORT-2256(1)" src="https://codepen.io/fusioncharts/embed/jOvmBmN/3cba33973ef236d3a59fad4a28c0a99e?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/jOvmBmN/3cba33973ef236d3a59fad4a28c0a99e">
  SUPPORT-2256(1)</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


Now, with the new `plotEventHandler` method, you can use mouse events in the chart.


