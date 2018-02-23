---
title: Introduction to Drag Node Chart | FusionCharts
description: The drag node chart is a spescialized type of chart where each data set is shown on the chart as a drag-able node. Perfect for network diagrams, hierarchy structures, etc., this chart provides a highly intuitive interface for end users to visually adjust related entities, link them, and even add new ones.
heading: Introduction to Drag Node Chart
chartPresent: true
---

The drag node chart is a specialized type of chart where each data set is shown on the chart as a drag-able node. Perfect for network diagrams, hierarchy structures, etc., this chart provides a highly intuitive interface for end users to visually adjust related entities, link them, and even add new ones. You can take visual inputs from your users using this chart and then submit the final positions of the nodes to your scripts for further processing.

## Key Features of a Drag-node Chart

Salient features of the drag-node chart include:

* Each data set on the chart can be represented as a drag-able node of various shapes (circles, rectangles, or polygons) and sizes

* Nodes can contain image and text together

* Option to set the chart in view or edit mode. In the view mode, the end users can just drag the nodes (unless the feature is explicitly disabled). In edit mode, the users can

    * add, edit, or delete nodes

    * add, edit, or delete connectors

    * add, edit, or delete text labels

* Links can be defined between any two nodes on the chart. Links can have arrows at both sides or either side. Each link has a label and a strength factor

* Option to visually add nodes, connectors, and labels at run-time

* Options to visually edit existing or newly created nodes and connectors at run-time

* Using JavaScript, it is possible to filter the links dynamically at run-time to show only the _n_ strongest links

* Using JavaScript, updated positions of node can be retrieved

* Updated positions of node can be sent back to the server for processing

Here is a sample for Dragnode chart :

{% embed_all chart-guide-drag-node-chart-introduction-example.js %}