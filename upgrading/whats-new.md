---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.15.0.

It's been a while since we introduced a new chart. So this time around, we thought why not surprise you and bring in three new charts, highly requested by you, that aid in visualizing newer forms of data.

## Sunburst Chart

A Sunburst chart is used to visualize relationships within hierarchical data. It shows hierarchy through a series of concentric rings, where each ring corresponds to a level in the hierarchy. Each ring can have multiple segments; each segment showing the contribution of a particular dimension in that hierarchy. Focussing on a segment in the ring gives a sense of the part to the whole relationship of this dimension with respect to its parent ring segment.

> A Sunburst chart shares similarities with a Ring Chart, Multi-level Pie Chart, Belt Chart, and a Radial Treemap.

A Sunburst chart looks as follows:

{% embed_chart sunburst-chart-example-1.js %}

Click [here](/chart-guide/standard-charts/sunburst-chart) to know more.

## Sankey Diagram

Sankey Diagram is a type of flow diagram that depicts the flow of resources (material, energy, cost, etc.) from one node to another. A Sankey Diagram can be drawn in either a **horizontal layout (default)** or a **vertical layout**. A Sankey Diagram with horizontal orientation looks as shown below:

{% embed_chart standard-charts-sankey-diagram-example-1.js %}

There are **19** nodes in the Sankey Diagram provided above. A link connects any two nodes that are related to one another (i.e, a flow happens between them). If you hover over a node, you will see all the links (or relationships) associated with it. Hovering on a link will show all nodes associated with it.

Click [here](/chart-guide/standard-charts/sankey-diagram) to know more.

## Chord Diagram

A chord diagram is a graphical way to represent flow relationship between specific entities in transitioning data. The entities (called **nodes**) are drawn along the circumference of a circular layout. The flow relationships (called **links**) are represented by arcs that connect the nodes.

> Chord Diagrams are also referred to as Radial Network Diagram, Chord Layout, or Dependency Wheel.

A simple Chord Diagram looks as shown below:

In the above diagram, there are `n` nodes. A link connects a pair of nodes where a relationship exists. Hovering on a node shows all the links (or relationships) associated with it. Likewise, hovering on a link shows the related nodes.

Click [here](/chart-guide/standard-charts/chord-diagram) to know more.

## New Functionalities in Box and Whisker Chart

A box and whisker chart is a statistical chart that is used to examine and summarize a range of data values. Starting v3.15.0, FusionCharts Suite XT has introduced the following features in the existing box and whisker chart:

- Scrolling feature has now been enabled in the box and whiser chart.

- You can apply a custom color to the icon borders. You can use `numVisiblePlot` attribute to control the number of plot points visible on the chart canvas.

- Box and whisker chart can now be used in two different ways:

  - Provide values and expect the chart to determine the summarised values.
  - Provide summarised values to a box and whisker plot.

- Five new attributes have been introduced to explicitly set the data values of the mean, MD, SD, QD and outlier.

  - `showMeanValue`

  - `showMDValue`

  - `showSDValue`

  - `showQDValue`

  - `showOutlierValue`

- New attributes have been introduced to set the position of the values for mean, MD, SD, QD and outlier.

  - `meanValuePosition`

  - `MDValuePosition`

  - `SDValuePosition`

  - `QDValuePosition`

  - `outlierValuePosition`

- You can now add custom color to the border of the icons of mean, MD, SD, QD and outlier.

  - `meanIconBorderColor`

  - `MDIconBorderColor`

  - `SDIconBorderColor`

  - `QDIconBorderColor`

  - `outlierIconBorderColor`
