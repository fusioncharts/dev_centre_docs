---
permalink: chart-guide/treemap/handling-events-in-the-treemap.html
title: Handling Events in the Treemap | FusionCharts
description: In a treemap you can configure standard interactivity for items like tooltips and gradient legend using attributes and JavaScript events of the chart
heading: Handling Events in the Treemap
chartPresent: true
---


FusionCharts Suite XT lets you configure standard interactivity for items like tooltips and  gradient legend through the treemap attributes. However, if you need to further extend the chart interactivity, you can tap into the JavaScript events for this chart, and then build your custom behavior over it. 

In this section, you will be introduced to the various events that you can raise for the treemap.

FusionCharts Suite XT introduces the treemap chart starting v3.10.0, and supports the following events for this chart:

* `beforeDrillUp`
* `drillUp`
* `beforeDrillDown`
* `drillDown`
* `drillUpCancelled`
* `drillDownCancelled`

A treemap configured to demonstrate the `beforeDrillUp`, `drillUp`, `beforeDrillDown`, and `drillDown` events is shown below:

{% embed_all chart-guide-treemap-chart-handling-events-in-the-treemap-chart-example-1.js %}

The data to render this chart is given below:


Given below is a brief description of all the treemap events:

<table>
	<tr>
		<th> Event Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `beforeDrillDown` </td>
		<td> Triggered just __before__ the chart is rendered when it is __drilled down__ to a child node </td>
	</tr>
	<tr>
		<td> `drillDown` </td>
		<td> Triggered just __after__ the chart is rendered when it is __drilled down__ to a child node </td>
	</tr>
	<tr>
		<td> `beforeDrillUp` </td>
		<td> Triggered just __before__ the chart is rendered when it is __drilled up__ to the immediate parent or the root node </td>
	</tr>
	<tr>
		<td> `drillUp` </td>
		<td> Triggered just __after__ the chart is rendered when it is __drilled up__ to the immediate parent or the root node </td>
	</tr>
    <tr>
        <td> `drillDownCancelled` </td>
        <td> Triggered when the `beforeDrillDown` event is interrupted </td>
    </tr>
    <tr>
        <td> `drillUpCancelled` </td>
        <td> Triggered when the `beforeDrillUp` event is interrupted </td>
    </tr>
</table>