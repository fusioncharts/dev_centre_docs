---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users using a previous version of FusionCharts in their application. Here, we'll talk about the change in behavior of the charts after v3.21.x.


## Label Improvements for Sunburst Chart 

Starting in version 3.21, users can choose to display labels for each independent node on a ‘Sunburst’ chart. Users have to option to enable the new ‘showLabelValue’ property, which allows them to control the label visibility of the nodes at each level. Previously, the visibility was based on the internal space management algorithm.

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2294) 2" src="https://codepen.io/fusioncharts/embed/VwVdOPX/f5d3c5a75c43bfc34b00d072e6ee1fe1?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/VwVdOPX/f5d3c5a75c43bfc34b00d072e6ee1fe1">
  (SUPPORT-2294) 2</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Show Percent Values in Pie and Doughnut Charts

Starting version 3.21, users have more control over displaying the chart and legend values on Pie and Doughnut charts. Users can now control whether to display chart values as percentages or as absolute values. Also, if a user enables the legend’s visibility, the user can choose to display the legend item values as a percentage or as absolute values.   

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2304) 2 " src="https://codepen.io/fusioncharts/embed/ZEmRZyZ/011aea050a543fd3a3ae7316680ede6f?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/ZEmRZyZ/011aea050a543fd3a3ae7316680ede6f">
  (SUPPORT-2304) 2 </a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
The following is a clarification of each property’s function.  
‘showPercentValue’ - controls the percentage or absolute value for the chart.
‘showValueAsPercentInLegend’ - controls the percentage or absolute value for the legend.
‘showValuesInLegend’ - controls the visibility of the percentage or absolute value displayed in the legend. 

## Improved Pattern Styles

FusionCharts version 3.21 improved the behavior of patterned styles in bars and column charts to remain unchanged whenever the legends are toggled. Previously, selecting a legend replaced the column’s pattern with a solid color. 

Version 3.21.

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2295) 1" src="https://codepen.io/fusioncharts/embed/GRwGLPQ/cf586404b1bf030eb3607ccabe3d0ffc?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/GRwGLPQ/cf586404b1bf030eb3607ccabe3d0ffc">
  (SUPPORT-2295) 1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Example of previous versions where the pattern style switched to a solid color.

<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/a7pfwLc1/2/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## Overlapping values Avoidance

Starting version 3.21, FusionCharts improved the ‘drawcrossline’ property to avoid the overlapping of text labels inside a chart. 

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2082) 1" src="https://codepen.io/fusioncharts/embed/bGvNwyx/7db967fc7c1c0eacfc7d8eec201a1bf6?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/bGvNwyx/7db967fc7c1c0eacfc7d8eec201a1bf6">
  (SUPPORT-2082) 1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Previously, when multiple series values were plotted in a ‘msline’ chart with the same or similar values, the value’s text labels were getting overlapped. 
 
[Before fix image]


## Number Suffix Improvement
FusionCharts version 3.21 improved the prefix and suffix positions to work as expected for all languages and characters. Simply enable the ‘hasRtlText’ attribute to switch the suffix and prefix positions.

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2292) 2" src="https://codepen.io/fusioncharts/embed/KKrQVRM/9a40f43fd573edcdb8c46ff075345fee?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/KKrQVRM/9a40f43fd573edcdb8c46ff075345fee">
  (SUPPORT-2292) 2</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Previously, using numbers as a suffix did not work when using Arabic or any RTL characters. Instead, the chart displayed the numbers as a prefix. 

<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/a7pfwLc1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


## Legend Item Improvement

FusionCharts version 3.21 improved the legend items' behavior by configuring the correct font size and line-height values, and now the legend items stay static when toggled over them. 

<iframe height="300" style="width: 100%;" scrolling="no" title="TimeSeries (SUPPORT 2130)-1" src="https://codepen.io/fusioncharts/embed/LYevVXv/1ea0269993acc305ed0f8809b42258d3?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/LYevVXv/1ea0269993acc305ed0f8809b42258d3">
  TimeSeries (SUPPORT 2130)-1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Previously, upon selecting a legend item, the other items moved positions when hovering over them.

<iframe src="https://codesandbox.io/embed/fc-react-4-forked-y7qj4?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="fc-react-4 (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


## Improved Plot border for Bar chart

FusionCharts version 3.21 improved the border of the 2D Bar charts to display smooth borders for all bars and graphs. Previously, when the bar plot border was a non-zero value, each bar displayed was separated from the graph’s canvas border. 

<iframe height="300" style="width: 100%;" scrolling="no" title="(SUPPORT-2255) 1" src="https://codepen.io/fusioncharts/embed/YzRvMmE/562440f4dc86d31c944173d21c0ef8eb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fusioncharts/pen/YzRvMmE/562440f4dc86d31c944173d21c0ef8eb">
  (SUPPORT-2255) 1</a> by FusionCharts (<a href="https://codepen.io/fusioncharts">@fusioncharts</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Before version 3.21, the bar’s border was displayed separately.

<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/a7pfwLc1/1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
