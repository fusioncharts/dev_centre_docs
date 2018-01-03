---
permalink: basic-chart-configurations/tooltip-macros/introduction-to-tooltip-macros.html
title: Introduction to Tooltip Macros | FusionCharts
description: Macros configure dynamic and contextual content in tooltips. A macro is an instruction recorded using a combination of characters for a specific purpose
heading: Introduction to Tooltip Macros
chartPresent: true
---

## Prerequisites:

* [Tooltips]{% linkTo tutorials/configuring-your-chart-basic/tool-tips.md %}{:target='_blank'}

FusionCharts Suite XT supports macros to configure dynamic and contextual content in tooltips. A macro is an instruction recorded using a combination of characters for a specific purpose. 
Tooltip macros in FusionCharts enable you to use chart labels, data values, display values etc. as variables, and plain text, to form a complete customized tooltip text. 

Tooltips can be configured to include supplementary information about the data plotted on a chart. Macros allow you to automate the inclusion of this information, saving the effort of manual customization.

This article focuses on how macros can be used to customize the tooltip text for various chart elements. The article also introduces attributes that take the macros as values, along with plain text and HTML tags, to create and format the custom tooltip text.

## Using Tooltip Macros

In the column 2D chart shown below, hover the mouse pointer over any of  the data plots to see the default tooltip text:

{% embed_all configuring-your-chart-tooltip-macros-introduction-to-tooltip-macros-example-1.js %}

Now, look at the tooltip text for the data plots in the column 2D chart below:

{% embed_all configuring-your-chart-tooltip-macros-introduction-to-tooltip-macros-example-2.js %}

The tooltip text for the second chart is configured using tooltip macros. The `plotToolText` attribute is used to set a custom tooltip, using macros, and format it, using HTML tags, as shown in the code snippet below:

```javascript

"plotToolText": "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue"

```

The table below describes the attribute and macros used in the above example:

<table>
	<tr>
		<th> Attribute/Macro Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `plotToolText` </td>
		<td> This attribute accepts macros, plain text and HTML tags, as strings to create custom tooltip text for data plots. </td>
	</tr>
	<tr>
		<td> `$label` </td>
		<td> This macro represents the data plot, category, connector, and marker labels. <br> In the above sample, it represents the data plot label. </td>
	</tr>
	<tr> 
		<td> `$dataValue` </td>
		<td> This macro represents the formatted data plot, entity, and marker data values. In the above example it is the data plot value. <br> Alternatively, the `$value` macro, which represents the unformatted data value, can also be used. <br> <br> Therefore, if the data plot value is 750000, <br> if `$value` is used, then __750000__ is rendered as the value <br> if `$dataValue` is used, then __$750K__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$displayValue` </td>
		<td> This macro represents the value of the [displayValue](http://www.fusioncharts.com/dev/chart-attributes.html?chart=column2d&attributeName=data_displayValue){:target='_blank'} attribute of the `data` and `entity` objects. </td>
	</tr>
</table>


## Other Chart Attributes that Support Tooltip Macros

The table below describes some of the commonly used FusionCharts attributes that take tooltip macros as values to customize tooltip text for the various chart elements.

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `trendLineToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for trend-lines__ <br> This attribute belongs to the `chart` object. </td>
	</tr>
	<tr>
		<td> `cumulativePlotTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for all/individual data plots in a Pareto Chart__ <br> This attribute can be used with the `chart` as well as with the `data` object. </td>
	</tr>
	<tr>
		<td> `targetToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the target in the horizontal and vertical bullet graphs__ <br> This attribute belongs to the `chart` object. </td>
	</tr>
	<tr>
		<td> `milestoneToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the milestones in Gantt charts__ <br> This attribute belongs to the `chart` object. </td>
	</tr>
	<tr>
		<td> `errorPlotToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the data plots in error charts__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `horizontalErrorPlotToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the horizontal error bars in error scatter charts__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `verticalErrorPlotToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the vertical error bars in error scatter charts__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `entityToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the entities in maps__ <br> This attribute belongs to the `map` (or the `chart`) object. </td>
	</tr>
	<tr>
		<td> `markerToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the markers in maps__ <br> This attribute belongs to the `map` (or the `chart`) object. </td>
	</tr>
	<tr>
		<td> `connectorToolText` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the connectors in maps and the drag-node chart__ <br> This attribute belongs to the `map` (or the `chart`) object (for maps) and the `connectors` object (for the drag-node chart). </td>
	</tr>
	<tr>
		<td> `outliersTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the outliers in the Box and Whisker chart__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `meanTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the mean icon in the Box and Whisker chart__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `SDTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the standard deviation icon in the Box and Whisker chart__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `QDTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the quartile deviation icon in the Box and Whisker chart__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
	<tr>
		<td> `MDTooltext` </td>
		<td> Accepts macros, plain text, and HTML tags, as strings, for __customizing tooltip text for the mean deviation icon in the Box and Whisker charts__ <br> This attribute belongs to the `dataset` and the `data` objects. </td>
	</tr>
</table>