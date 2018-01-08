---
permalink: gauge-and-widgets-guide/gantt-chart/events-in-gantt-chart.html
title: Events in Gantt Chart | FusionCharts
description: This section talks about various events that is raised in the gantt chart. Take a look how events work.
heading: Events in Gantt Chart
chartPresent: true
---

Starting FusionCharts Suite XT 3.4, FusionCharts has introduced several events for Gantt charts.

In this section, you will be introduced to the various events that you can raise for gantt charts.

## The dataPlotClick Event

To understand how Gantt chart events work, we will look at one example - we will configure the `dataPlotClick` event for the Gantt chart.

The Social Media Optimization Gantt chart configured to capture data from the `dataPlotClick` event and display it in an annotation below the chart looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-events-in-gantt-charts-example-1.js %}

In the chart above, when you click a process all details related to that process are shown in the rectangle annotation rendered below the chart.


Given below is a brief description of the various events that can be configured for Gantt charts:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataPlotClick`</td>
    <td>This event is fired when a task is clicked.</td>
  </tr>
  <tr>
    <td>`processClick`</td>
    <td>This event is fired when a process is clicked.</td>
  </tr>
  <tr>
    <td>`processRollOver`</td>
    <td>This event is fired when the mouse pointer moves over a process. In Gantt chart, process element represents one process on the Gantt chart. You can show team members, projects, or a task list as a process - there's no restriction to that.</td>
  </tr>
  <tr>
    <td>`processRollOut`</td>
    <td>This event is fired when the pointer moves out of a process.</td>
  </tr>
  <tr>
    <td>`categoryClick`</td>
    <td>This event is fired when a category is clicked.</td>
  </tr>
  <tr>
    <td>`categoryRollOver`</td>
    <td>This event is fired when the pointer moves over a category.</td>
  </tr>
  <tr>
    <td>`categoryRollOut`</td>
    <td>This event is fired when the pointer moves out of a category.</td>
  </tr>
  <tr>
    <td>`connectorClick`</td>
    <td>This event is fired when a connector is clicked.</td>
  </tr>
  <tr>
    <td>`connectorRollOver`</td>
    <td>This event is fired when the pointer moves over a connector.</td>
  </tr>
  <tr>
    <td>`connectorRollOut`</td>
    <td>This event is fired when the pointer moves out of a connector.</td>
  </tr>
  <tr>
    <td>`milestoneClick`</td>
    <td>This event is fired when a milestone is clicked.</td>
  </tr>
  <tr>
    <td>`milestoneRollOver`</td>
    <td>This event is fired when the pointer moves over a milestone.</td>
  </tr>
  <tr>
    <td>`milestoneRollOut`</td>
    <td>This event is fired when the pointer moves out of a milestone.</td>
  </tr>
</table>