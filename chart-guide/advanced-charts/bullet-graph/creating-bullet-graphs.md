---
permalink: gauge-and-widgets-guide/bullet-graph/creating-bullet-graphs.html
title: Creating Bullet Graphs | FusionCharts
description: To create a bullet chart, you need to define the upper and lower limits for the chart and the actual and target value.
heading: Creating Bullet Graphs
chartPresent: true
---

As an example, we will create a bullet graph to show last month’s revenue, where the actual revenue will be plotted against the target revenue.

A horizontal bullet graph to plot the actual revenue and the target revenue looks like this:

{% embed_all gauge-and-widgets-guide-bullet-graph-creating-bullet-graphs-example-1.js %}

To create a bullet graph, you will need to:

* Define the upper and lower limits (also known as the maximum and minimum values) for the chart.

* Define the actual and target value. For our example, we will set the actual value to $82K and the target value to $90K.

* Divide the specified limits into the qualitative ranges of performance - poor, satisfactory, and good and define the data for the graph. For our example, we will use the data shown in the table below:

<table>
  <tr>
    <th>Range</th>
    <th>What it means?</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>0-50k</td>
    <td>Poor</td>
    <td>Light Red</td>
  </tr>
  <tr>
    <td>50k-75k</td>
    <td>Moderate</td>
    <td>Light Yellow</td>
  </tr>
  <tr>
    <td>75k-100k</td>
    <td>Good</td>
    <td>Light Green</td>
  </tr>
</table>


<p class="text-info"> To render the above chart as a vertical bullet graph, change the value of the `type` attribute to `vBullet`. </p>