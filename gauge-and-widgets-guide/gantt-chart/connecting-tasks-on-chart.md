---
permalink: gauge-and-widgets-guide/gantt-chart/connecting-tasks-on-chart.html
title: Connecting Tasks on Chart | FusionCharts
description: You can draw connectors between any two tasks on the chart to show the process flow. This section talks about adding connectors and configuring hover effects
heading: Connecting Tasks on Chart
chartPresent: true
---

You can draw connectors between any two tasks on the chart to show the process flow.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/gantt-chart/connecting-tasks-on-chart#adding-connectors" class="smoth-scroll">Add connectors</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/connecting-tasks-on-chart#configuring-hover-effect-for-the-connectors" class="smoth-scroll">Configure the hover effect for connectors</a>

## Adding Connectors

To draw a connector you need to specify the IDs of the tasks that you want to connect and where the connector joins the start and end task bar individually - at the start or at the end.

For our "Social Media Optimization" Gantt chart, we can connect tasks in the following ways:

* Requirement interpretation can be done only after the customer survey is over.

* Concept brainstorming can begin only after market analysis.

* Testing/QA and documentation can begin at the same time.

A Gantt chart rendered with connectors between the above tasks looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-connecting-tasks-on-chart-example-1.js %}

Given below is a brief description of the attributes used to add connectors between tasks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`fromTaskID`</td>
    <td>It is used to specify the ID for the task from which the connector will begin.</td>
  </tr>
  <tr>
    <td>`toTaskID`</td>
    <td>It is used to specify the ID for the task at which the connector will end.</td>
  </tr>
  <tr>
    <td>`fromTaskConnectStart`</td>
    <td>It is used to specify whether a connector will connect the starting points of the source and destination tasks. Setting this attribute to `1` will draw connectors from the starting points.</td>
  </tr>
  <tr>
    <td>`toTaskConnectStart`</td>
    <td>It is used to specify whether a connector will connect the ending points of the source and destination tasks. Setting this attribute to `1` will draw connectors from the ending points.</td>
  </tr>
</table>


These attributes belong to the `connector` object, which in turn belongs to the `connectors` object.


## Configuring Hover Effect for the Connectors

A Gantt chart with hover effects enabled looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-connecting-tasks-on-chart-example-2.js %}

Given below is a brief description of the attributes used to configure the hover effects:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be shown for the chart. Setting this attribute to `1` enables the hover effect, setting it to  `0` (default) disables it. </td>
  </tr>
  <tr>
    <td>`showConnectorHoverEffect`</td>
    <td>It is used to specify whether the mouse hover effect will be rendered on the connector lines. Setting this attribute to `1` will enable the hover effects, setting it `0` (default) will disable them.</td>
  </tr>
  <tr>
    <td>`connectorHoverColor`</td>
    <td>It is used to specify the hex code for the connector color when the mouse pointer is hovered over it, e.g. #34ABC5.</td>
  </tr>
  <tr>
    <td>`connectorHoverAlpha`</td>
    <td>It is used to specify the transparency of the connector when the mouse pointer is hovered over it. This attribute takes values between 0 and 100, e.g. 60. </td>
  </tr>
  <tr>
    <td>`connectorHoverThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the connector when the mouse pointer is hovered over it, e.g. 5.</td>
  </tr>
</table>


These attributes belong to the `chart` object.