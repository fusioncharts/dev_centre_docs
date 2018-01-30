---
permalink: basic-chart-configurations/tooltip-macros/tooltip-macros-additional-examples.html
title: Tooltip Macros-Additional Examples | FusionCharts
description: FusionCharts Suite XT includes about a 100 macros that can be used for tooltip customization—the text as well as the formatting
heading: Tooltip Macros-Additional Examples
chartPresent: true
---

## Prerequisites:

* [Introduction to Tooltip Macros](/configuring-your-chart-basic/tooltip-macros/introduction-to-tooltip-macros)

* [List of Tooltip Macros](/configuring-your-chart-basic/tooltip-macros/list-of-macros)

FusionCharts Suite XT includes about a 100 macros that can be used for tooltip customization—the text as well as the formatting.

This article showcases a few more examples, in addition to the example covered in the [Introduction to Tooltip Macros](/configuring-your-chart-basic/tooltip-macros/introduction-to-tooltip-macros) article.

## Example 1: Tooltip Macros for Trend-lines

By default, trend-lines don’t have a tooltip text configured for them. The tooltip macros can be used to set a custom tooltip text.

The column 2D chart shown below uses the `trendlineToolText` attribute for setting a custom tooltip text. Hover the mouse pointer over the trend-lines to see the tooltip text.

{% embed_all configuring-your-chart-tooltip-macros-tooltip-macros-additional-examples-example-1.js %}

The tooltip is customized using the code snippet given below:

```javascript

"trendlineToolText": "$displayValue: $startDataValue"

```

Given below is a brief description of the attribute and macros used in this example:

<table>
	<tr>
		<th> Attribute/Macro Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `trendlineToolText` </td>
		<td> This attribute accepts macros, along with plain text and HTML tags, for __customizing tooltip text for trend-lines__. <br> This attribute belongs to the `chart` object. </td>
	</tr>
	<tr>
		<td> `$displayValue` </td>
		<td> In context of the above example, this macro __represents the text rendered with the trend-line__, set using the [displayValue](http://www.fusioncharts.com/dev/chart-attributes.html?chart=column2d&attributeName=data_displayValue) attribute. </td>
	</tr>
	<tr>
		<td> `$startDataValue` </td>
		<td> This macro represents the __starting value, formatted, of a trend-line/trend-zone__. <br> Alternatively, the `$startValue` macro, representing the unformatted starting value, can also be used. <br> Therefore, if the starting value is __680000__, <br> if `$startValue` is used, __680000__ is rendered as the value <br> if `$startDataValue` is used, __$680K__ is rendered as the value </td>
	</tr>
</table>


<table>
	<tr>
		<td> Click [here](/configuring-your-chart-basic/tooltip-macros/list-of-macros) for the complete list of tooltip macros supported by FusionCharts Suite XT. </td>
	</tr>
</table>

## Example 2: Tooltip Macros for Map Connectors

Tooltip macros can be used to set a tooltip text for connectors in maps. 
In the map below, showing the average shipping volume for a distribution network, the `connectorToolText` attribute has been used to configure a tooltip that includes:

* Connector source
* Connector destination
* Average no. of shipments shipped every day for the last quarter, from the source to the destination

{% embed_all configuring-your-chart-tooltip-macros-tooltip-macros-additional-examples-example-2.js %}

The tooltip text is set using the following code snippet:

```javascript

"connectorToolText": "<b>From</b>: $fromLabel <br> <b>To</b>: $toLabel <br> <b>Daily shipments (avg)</b>: $label Units"

```

The table below describes the attribute and the macros used in the above example:

<table>
	<tr>
		<th> Attribute/Macro Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `connectorToolText` </td>
		<td> This attribute accepts macros, plain text and HTML tags, as strings, for __customizing tooltip text for the connectors in maps and the drag-node chart__. <br> This attribute belongs to the `map` (or the `chart`) object (for maps) and the `connectors` object (for the drag-node chart). </td>
	</tr>
	<tr>
		<td> `$fromLabel` </td>
		<td> This macro represents the __label of the source marker (for maps)/node (for the drag-node chart)__. </td>
	</tr>
	<tr>
		<td> `$toLabel` </td>
		<td> This macro represents the __label of the destination marker (for maps)/node (for the drag-node chart)__. </td>
	</tr>
	<tr>
		<td> `$label` </td>
		<td> This macro represents the __data plot, category, connector, and marker labels__. In this example, it is used to render the connector label in the tooltip text. </td>
	</tr>
</table>


<table>
	<tr>
		<td> Click [here](/configuring-your-chart-basic/tooltip-macros/list-of-macros) for the complete list of tooltip macros supported by FusionCharts Suite XT. </td>
	</tr>
</table>

## Example 3: Tooltip Macros for the Box and Whisker Chart

By default, the tooltip text for the data plots in a box and whisker chart includes the following values:

* Minimum value
* Maximum value
* Upper and lower quartile values
* Median

In the chart shown below, tooltip marcos for the box and whisker chart have been used to add the mean, quartile deviation, standard deviation, and mean deviation values to the tooltip text.

{% embed_all configuring-your-chart-tooltip-macros-tooltip-macros-additional-examples-example-3.js %}

The tooltip text is set using the following code snippet:

```javascript

"plotToolText": "$seriesName Teachers-$label  <br> <br> Max value: $maxDataValue <br> Min value: $minDataValue <br> <br> Q3: $Q3 <br> Median: $median <br> Q1: $Q1 <br> <br> Mean: $mean <br> <br> Standard deviation: $SD <br> Quartile Deviation: $QD <br> Mean Deviation: $MD"

```

The table below describes the attribute and the macros used in the above example:

<table>
	<tr>
		<th> Attribute/Macro Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `plotToolText` </td>
		<td> This attribute accepts macros, plain text, and HTML tags, as strings, to __create and format the custom tooltip text for data plots__. </td>
	</tr>
	<tr>
		<td> `$label` </td>
		<td> This macro represents the __data plot, category, connector, and marker labels__. In this example, it represents the data plot label. </td>
	</tr>
	<tr>
		<td> `$maxDataValue` </td>
		<td> This macro represents the maximum value, formatted, of the data plot. <br> Alternatively, the `$maxValue` macro can also be used, which represents the unformatted maximum value. <br> <br> Therefore, if the maximum value is __66000__, <br> if `$maxDataValue` is used, __$66K__ is rendered as the value <br> if `$maxValue` is used, __66000__ is rendered as the value  </td>
	</tr>
	<tr>
		<td> `$minDataValue` </td>
		<td> This macro represents the minimum value, formatted, of the data plot. <br> Alternatively, the `$minValue` macro can also be used, which represents the unformatted minimum value. <br> <br> Therefore, if the minimum value is __30000__, <br> if `$minDataValue` is used, __$30K__ is rendered as the value <br> if `$minValue` is used, __30000__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$Q3` </td>
		<td> This macro represents the formatted value of the upper quartile of the data plot. <br> Alternatively, the `$unformattedQ3` macro can also be used, which represents the unformatted upper quartile value. <br> <br> Therefore, if the upper quartile value is __60822__, <br> if `$Q3` is used, __$60.82K__ is rendered as the value <br> if `$unformattedQ3` is used, __60822__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$Q1` </td>
		<td> This macro represents the formatted value of the lower quartile of the data plot. <br> Alternatively, the `$unformattedQ1` macro can also be used, which represents the unformatted lower quartile value. Therefore, if the lower quartile value is __41475__, <br> if `$Q1` is used, __$41.48K__ is rendered as the value <br> if `$unformattedQ1` is used, __41475__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$median` </td>
		<td> This macro represents the formatted median value of the data plot. <br> Alternatively, the `$unformattedMedian` macro can also be used, which represents the unformatted median value. Therefore, if the median value is __50500__, <br> if `$median` is used, __$50.5K__ is rendered as the value <br> if `$unformattedMedian` is used, __50500__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$mean` </td>
		<td> This macro represents the mean value of the data plot. <br> Alternatively, the `$unformattedMean` macro can also be used, which represents the unformatted mean value. Therefore, if the mean value is __49720__, <br> if `$mean` is used, __$49.72K__ is rendered as the value <br> if `$unformattedMean` is used, __49720__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$SD` </td>
		<td> This macro represents the standard deviation value of the data plot. <br> Alternatively, the `$unformattedSD` macro can also be used, which represents the unformatted standard deviation value. Therefore, if the standard deviation value is __2290__, <br> if `$SD` is used, __$2.29K__ is rendered as the value <br> if `$unformattedSD` is used, __2290__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$QD` </td>
		<td> This macro represents the quartile deviation value of the data plot. <br> Alternatively, the `$unformattedQD` macro can also be used, which represents the unformatted quartile deviation value. Therefore, if the quartile deviation value is __9673__, <br> if `$QD` is used, __$9.67K__ is rendered as the value <br> if `$unformattedQD` is used, __9673__ is rendered as the value </td>
	</tr>
	<tr>
		<td> `$MD` </td>
		<td> This macro represents the mean deviation value of the data plot. <br> Alternatively, the `$unformattedMD` macro can also be used, which represents the unformatted mean deviation value. Therefore, if the mean deviation value is __9113__, <br> if `$MD` is used, __$9.11K__ is rendered as the value <br> if `$unformattedMD` is used, __9113__ is rendered as the value </td>
	</tr>
</table>

<table>
	<tr>
		<td> Click [here](/configuring-your-chart-basic/tooltip-macros/list-of-macros) for the complete list of tooltip macros supported by FusionCharts Suite XT. </td>
	</tr>
</table>

