---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.19.x.

## Updated Map of India

FusionCharts 3.19 updated the map of India to showcase Ladakh as a separate entity. The Entity of Ladakh is now shown separated from Jammu and Kashmir, for more details see [Ladakh map](https://www.fusioncharts.com/fusionmaps).

![Map of India before](/assets/images/IndiaMapBefore.png)<br/>
Here, Ladakh is part on the Jammu and Kashmir territory.

<iframe height="300" style="width: 100%;" scrolling="no" title="India(QE-SUPPORT-2049)-5" src="https://codepen.io/fusioncharts/embed/Barypxz/eed1eb1d2d4fee304ea535e7c116bac9?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/Barypxz/eed1eb1d2d4fee304ea535e7c116bac9">
  India(QE-SUPPORT-2049)-5</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/>
Here, Ladakh is shown as a separate entity to Jammu and Kashmir.

## Fixed tendency to render all data plots properly

FusionCharts 3.19 updated the value for 'mintendency' in order to fix the tendency issue causing the chart to not plot all datasets properly when some datasets contained zero as values. Now, charts display all dataset plots despite the amount and values of the datasets.

<iframe height="300" style="width: 100%;" scrolling="no" title="SplineBeforeFix" src="https://codepen.io/fusioncharts/embed/yLKzGLY/f1a6bed0f2e2195fd4905e93337fa689?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/yLKzGLY/f1a6bed0f2e2195fd4905e93337fa689">
  SplineBeforeFix</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/>
Since datasets contain values equal to zero, the data plots fail to render.

<iframe height="300" style="width: 100%;" scrolling="no" title="SplineAfterFix" src="https://codepen.io/fusioncharts/embed/ExEwGam/1398fe7c83bfd5605919dc41e9500df2?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/ExEwGam/1398fe7c83bfd5605919dc41e9500df2">
  SplineAfterFix</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/>
Data plots render properly. 

## Improved Legend container

Legend container

## Prevent Overlapping text

FusionCharts version 3.19 improved Multiple Series chart readability by avoiding overlapping of data plots with same or similar values. This improvement allows users to view data more clearly.

<iframe width="100%" height="300" src="//jsfiddle.net/protoEvangelion/7528h4j3/5/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<br/>
Dataplots overlap when using same or similar values.

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2082) 1" src="https://codepen.io/fusioncharts/embed/bGvNwyx/7db967fc7c1c0eacfc7d8eec201a1bf6?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/bGvNwyx/7db967fc7c1c0eacfc7d8eec201a1bf6">
  (SUPPORT-2082) 1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<br/>
Dataplots do not overlap, making the chart more readable.

## Treemap chart renders properly

When using 'Treemap' charts, at any point where node's value was zero, the recursion was breaking and nodes were not displaying. FusionCharts version 3.19 fixed the issue by allowing all numbers in node's value, including zeros.

<iframe width="100%" height="300" src="//jsfiddle.net/wszkgxh0/2/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe><br/>
Chart rendered incorrectly

<iframe height="300" style="width: 100%;" scrolling="no" title="SUPPORT-2089- 1" src="https://codepen.io/fusioncharts/embed/BaryQXB/ca7cd3d37846100f10f6e87ae6834fd8?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/BaryQXB/ca7cd3d37846100f10f6e87ae6834fd8">
  SUPPORT-2089- 1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/>
Chart renders correctly

## Sankey Charts render correctly
Sankey charts with significant difference in values render properly. Previously, when Sankey charts had signifincant difference in values, the link between values and the tooltip did not rendered correctly. 

<iframe width="100%" height="300" src="//jsfiddle.net/jbx46nmu/1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> <br/>
Before the fix, the chart did not render properly.

<iframe height="300" style="width: 100%;" scrolling="no" title="Support-2163-1" src="https://codepen.io/fusioncharts/embed/RwMNKZX/598e3bdb610d060c458ae3d3888b0969?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/RwMNKZX/598e3bdb610d060c458ae3d3888b0969">
  Support-2163-1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe><br/>
Sankey charts render successfully even when there is a significant difference between values.


