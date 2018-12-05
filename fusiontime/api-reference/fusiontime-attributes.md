---
title: FusionTime Attributes | FusionCharts
description: This article contains the list of fusion time attributes.
heading: Attributes
---

This article contains the list of attributes of FusionTime. The attributes have been differenticated by FusionTime components.

## Time Axis

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String</td>
		<td>Defines the column, which will be plotted along this axis.</td>
	</tr>
	<tr>
		<td>`timeMarker`</td>
		<td>Array(Time Marker Configuration)</td>
		<td>Array of `TimeMarkerConfigs` that will be shown along the axis.</td>
	</tr>
</table>

## Y Axes

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String, Array of Strings, Array of Objects</td>
		<td>It maps to the column header for the measure which is plotted against the Y Axis. If it's an array of strings, all the strings are plotted against the same axis. If its an array of objects, the developer can additionally specify the type of the plot as well as the aggregation strategy used to represent the measure.</td>
	</tr>
	<tr>
		<td>`plotType`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. By default the type is a line. It controls the plot type for all names specified.</td>
	</tr>
	<tr>
		<td>`title`</td>
		<td>String</td>
		<td>Allows you to rename the title of the axis. If not specified, the axis title will be the same as the column name joined by hyphens.</td>
	</tr>
	<tr>
		<td>`aggregation`</td>
		<td>String</td>
		<td>Allows you to specify alternative aggregation strategies for the measures being plotted. It controls the aggregation strategy for all plots specified.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. It is used when you want to specify the chart type under `plot` object.</td>
	</tr>
</table>

## Reference Lines

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>The label which gets displayed when you hover the reference lines.</td>
	</tr>
	<tr>
		<td>`value`</td>
		<td>Number</td>
		<td>This attribute specifies the value at which the reference line is drawn.</td>
	</tr>
</table>

## Time Markers

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>Sets the label of the time marker.</td>
	</tr>
	<tr>
		<td>`start`</td>
		<td>String</td>
		<td>Sets the start time of the marker. Corresponds to the start of the date/time.</td>
	</tr>
	<tr>
		<td>`end`</td>
		<td>String</td>
		<td>Sets the end time of the marker. If this is attribute is not specified, the marker is represented as a line and not as a band. Corresponds to the end of the given date/time.</td>
	</tr>
	<tr>
		<td>`timeFormat`</td>
		<td>String</td>
		<td>Sets the date/time format and specifies the start and end values for the time marker.</td>
	</tr>
	<tr>
		<td>`unit`</td>
		<td>String</td>
		<td>Defines the time unit for the time marker. Click here for the list of time units available.</td>
	</tr>
	<tr>
		<td>`multiplier`</td>
		<td>NUmber</td>
		<td>Sets the multiplier of the time unit. Default is 1.</td>
	</tr>
</table>

## Data Markers

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>

## Chart Configuration and Root JSON Attributes

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>