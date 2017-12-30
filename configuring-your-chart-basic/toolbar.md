---
permalink: basic-chart-configurations/toolbar.html
title: Manage UI Action Elements using Toolbar | FusionCharts
description: The advantage of toolbar is it manages all the UI action elements centrally, providing a uniform look and a better meaningful and logical grouping.
heading: Toolbar
chartPresent: true
---

FusionCharts Suite XT introduces the toolbar starting version 3.11.0. The advantage of having a toolbar is that it manages all the UI action elements (context menus, checkboxes, buttons) centrally, providing a uniform and clean look and a better meaningful and logical grouping.

Introducing the toolbar has resulted in changes in the way certain chart elements are implemented. The table below summarizes the changes in implementation:

<table>
	<tr>
		<th> Chart Type </th>
		<th> Component </th>
		<th> Previous Implementation </th>
		<th> Current Implementation </th>
	</tr>
	<tr>
		<td> Multi-axis line chart </td>
		<td> Checkboxes to show/hide axes lines </td>
		<td> HTML checkboxes </td>
		<td> Pure SVG exportable checkboxes </td>
	</tr>
	<tr>
		<td> Drag-able column, line, and area charts </td>
		<td> Menu to change y-axis limits </td>
		<td> Menu placed at the bottom-left side of the chart  </td>
		<td> Context menu </td>
	</tr>
	<tr>
		<td> Drag-node chart </td>
		<td> Menu to add/edit/delete nodes, labels, and connectors </td>
		<td> Menu placed at the bottom-left side of the chart </td>
		<td> Context menu </td>
	</tr>
	<tr>
		<td> Real-time charts </td>
		<td> Message logger </td>
		<td> Menu placed at the bottom-left side of the chart </td>
		<td> Context menu </td>
	</tr>
	<tr>
		<td> Real-time charts </td>
		<td> Real-time menu </td>
		<td> Menu placed at the bottom-left side of the chart </td>
		<td> Context menu </td>
	</tr>
</table>

The samples shown below showcase the difference between the current and the previous implementations of the toolbar.

The drag-node chart below shows the __current implementation__ of the toolbar:

{% embed_all configuring-your-chart-toolbar-example-1.js %}

The image below shows the __previous implementation__:

![image]({{ site.baseurl }}assets/images/configuring-your-chart-basic-toolbar-drag-node-chart-previous-implementation.png)

The multi-axis line chart below shows the __current implementation__ of the checkboxes used to show/hide the axes lines. This implementation uses pure SVG exportable checkboxes; the previous implementation used HTML checkboxes.

{% embed_all configuring-your-chart-toolbar-example-2.js %}

 The image below shows the __previous implementation__:

 ![image]({{ site.baseurl }}assets/images/configuring-your-chart-basic-toolbar-multi-axis-line-chart-previous-implementation.png)

 The difference between the current and previous implementation of the checkboxes, in the multi-axis line chart, is that the present checkboxes can be configured to set a custom checkbox color.

 Given below is a brief description of the attribute used for this customization:

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Decription </th>
	</tr>
	<tr>
		<td> checkBoxColor </td>
		<td> Set the hex color code for the checkbox border and the checkmark </td>
	</tr>
</table>