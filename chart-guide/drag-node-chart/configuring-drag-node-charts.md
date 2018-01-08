---
permalink: chart-guide/drag-node-chart/configuring-drag-node-charts.html
title: Configuring Drag-node Charts | FusionCharts
description: FusionCharts Suite XT lets you configure the functional aspects of drag-node charts.
heading: Configuring Drag-node Charts
chartPresent: false
---

FusionCharts Suite XT lets you configure the functional aspects of drag-node charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/drag-node-chart/configuring-drag-node-charts#enablingdisabling-the-dragging-feature" class="smoth-scroll">Enable/disable the dragging feature for drag-node charts</a>
* <a href="/chart-guide/drag-node-chart/configuring-drag-node-charts#switching-between-modes" class="smoth-scroll">Switch between modes</a>

## Enabling/Disabling the Dragging Feature

Given below is a brief description of the attribute used to enable/disable the dragging feature:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`allowDrag`</td>
    <td>It is used to specify whether a node will be drag-able or not. Setting this attribute to `0` will disable the dragging feature, setting it to `1` (default) will enable it. This attribute can be used with the `dataset` object as well its child, the `data` object.</td>
  </tr>
</table>


## Switching between Modes

Drag-node charts can be rendered either in the edit mode - that allows you to add, edit, or delete nodes, connectors, and labels - or in the view mode - that allows you to only view the chart.

Given below is a brief description of the attribute used to switch modes for a drag-node chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`viewMode`</td>
    <td>It is used to specify whether the chart will be rendered in the view mode or the edit mode. Setting this attribute to `1` will render the chart in the view mode, setting it to `0` (default) will show it in the edit mode. A settings button would appear at the bottom of the chart when the attribute is set to `0`.</td>
  </tr>
</table>