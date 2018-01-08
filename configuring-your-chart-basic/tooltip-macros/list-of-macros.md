---
permalink: basic-chart-configurations/tooltip-macros/list-of-macros.html
title: List of Tooltip Macros | FusionCharts
description: A macro is an instruction recorded using a combination of characters for a specific purpose. Here, you can get the list of all macros used in FusionCharts
heading: List of Tooltip Macros
chartPresent: true
---

Prerequisites:

* [Introduction to Tooltip Macros](/configuring-your-chart-basic/tooltip-macros/introduction-to-tooltip-macros)

<table>
	<tr>
		<th> Macro name </th>
		<th> Description </th>
		<th> Supported by </th>
		<th> Format </th>
	</tr>

	<tr>
		<td> `$value` </td>
		<td> Represents the unformatted data plot, entity, and marker data values </td>
		<td> <ul> <li> All charts that support the `value` attribute in the `data` object </li> <li> Horizontal and vertical bullet graph </li> <li> Real-time thermometer gauge </li> <li> Real-time bulb gauge </li> <li> Real-time horizontal linear gauge </li> <li> Real-time angular gauge </li> <li> Multi-level pie chart </li> <li> Map entity and marker tooltext </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `axis`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> <li> `dial`: {`toolText`} </li> <li> `category`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$dataValue` </td>
		<td> Represents the formatted data plot, entity, and marker data values </td>
		<td> <ul> <li> All charts that support the `value` attribute in the `data` object </li> <li> Horizontal and vertical bullet graph </li> <li> Real-time thermometer gauge </li> <li> Real-time bulb gauge </li> <li> Real-time horizontal linear gauge </li> <li> Real-time angular gauge </li> <li> Multi-level pie chart </li> <li> Map entity and marker tooltext </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `axis`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> <li> `dial`: {`toolText`} </li> <li> `category`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$label` </td>
		<td> Represents the data plot, category, connector, and marker labels </td>
		<td> <ul> <li> All charts where the data plots correspond to the x-axis label </li> <li> Pyramid chart </li> <li> Funnel chart </li> <li> Multi-level pie chart </li> <li> Map connector and marker tooltext </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$displayValue` </td>
		<td> Represents the value of the `displayValue` attribute of the `data` and `entity` objects </td>
		<td> <ul> <li> All charts that support the `displayValue` attribute in the `data` object </li> <li> Pyramid chart </li> <li> Funnel chart </li> <li> Kagi  chart </li> <li> Waterfall/Cascade chart </li> <li> Map entity, connector, and marker tooltext </li> </td> 
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$datasValue` </td>
		<td> Represents the formatted data plot of the gradient legend </td>
		<td> <li> Treemap </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$svalue` </td>
		<td> Represents the unformatted data plot of the gradient legend </td>
		<td> <li> Treemap </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$seriesName` </td>
		<td> Represents the series name </td>
		<td> <li> All multi-series charts </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$yAxisName` </td>
		<td> Represents the y-axis name </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$xAxisName` </td>
		<td> Represents the x-axis name </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$xValue` </td>
		<td> Represents the x-coordinate (unformatted value) of a data plot </td>
		<td> <li> XY charts </li> <li> Drag-node chart </li> <li> Candlestick chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$xDataValue` </td>
		<td> Represents the x-coordinate (formatted value) of a data plot </td>
		<td> <li> XY charts </li> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$yValue` </td>
		<td> Represents the y-coordinate (unformatted value) of a data plot </td>
		<td> <li> XY charts </li> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$yDataValue` </td>
		<td> Represents the y-coordinate (formatted value) of a data plot </td>
		<td> <li> XY charts </li> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$zValue` </td>
		<td> Represents the z-coordinate (unformatted value) of a data plot </td>
		<td> <li> Bubble chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$zDataValue` </td>
		<td> Represents the z-coordinate (formatted value) of a data plot </td>
		<td> <li> Bubble chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$name` </td>
		<td> Represents the name of a data plot </td>
		<td> <li> Bubble chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$percentValue` </td>
		<td> Represents the corresponding percentage value (formatted number) of a data value </td>
		<td> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Multi-level pie chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$sum` </td>
		<td> Represents the sum (formatted) of data values of all/stacked (in stacked charts) data plots </td>
		<td> <li> Pareto 2D/3D </li> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Waterfall/Cascade chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedSum` </td>
		<td> Represents the sum (unformatted) of data values of all/stacked (in stacked charts) data plots </td>
		<td> <li> Pareto 2D/3D </li> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Waterfall/Cascade chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$cumulativeValue` </td>
		<td> Represents the sum (unformatted) of data values upto the current data plot </td>
		<td> <li> Pareto 2D/3D </li> <li> Waterfall/Cascade chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$cumulativeDataValue` </td>
		<td> Represents the sum (formatted) of data values upto the current data plot </td>
		<td> <li> Pareto 2D/3D </li> <li> Waterfall/Cascade chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$cumulativePercentValue` </td>
		<td> Represents the sum (unformatted) of data values, in percent, upto the current data plot </td>
		<td> <li> Pareto 2D/3D </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$cumulativePercentDataValue` </td>
		<td> Represents the sum (formatted) of data values, in percent, upto the current data plot </td>
		<td> <li> Pareto 2D/3D </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$xAxisPercentValue` </td>
		<td> Represents the x-axis value, in percent, which is covered by the corresponding stack </td>
		<td> <li> Marimekko chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$errorValue` </td>
		<td> Represents the error value (unformatted) of a data plot </td>
		<td> <li> Error bar chart </li> <li> Error line 2D chart </li> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$errorDataValue` </td>
		<td> Represents the error value (formatted) of a data plot </td>
		<td> <li> Error bar chart </li> <li> Error line 2D chart </li> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$errorPercent` </td>
		<td> Represents the error value, in percent, of a data plot </td>
		<td> <li> Error bar chart </li> <li> Error line 2D chart </li> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$horizontalErrorValue` </td>
		<td> Represents the horizontal error value (unformatted) of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$horizontalErrorDataValue` </td>
		<td> Represents the horizontal error value (formatted) of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$verticalErrorValue` </td>
		<td> Represents the vertical error value (unformatted) of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$verticalErrorDataValue` </td>
		<td> Represents the vertical error value (formatted) of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$horizontalErrorPercent` </td>
		<td> Represents the horizontal error value, in percent, of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$verticalErrorPercent` </td>
		<td> Represents the vertical error value, in percent, of a data plot </td>
		<td> <li> Error scatter chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$openValue` </td>
		<td> Represents the opening value (unformatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$openDataValue` </td>
		<td> Represents the opening value (formatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$closeValue` </td>
		<td> Represents the closing value (unformatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$closeDataValue` </td>
		<td> Represents the closing value (formatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$highValue` </td>
		<td> Represents the highest value (unformatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$highDataValue` </td>
		<td> Represents the highest value (formatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$lowValue` </td>
		<td> Represents the lowest value (unformatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$lowDataValue` </td>
		<td> Represents the lowest value (formatted) of a data plot </td>
		<td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$volumeValue` </td>
		<td> Represents the transaction volume value (unformatted) for a data plot </td>
		<td> <li> Candlestick chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$volumeDataValue` </td>
		<td> Represents the transaction volume value (formatted) for a data plot </td>
		<td> <li> Candlestick chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$tlLabel` </td>
		<td> Represents the top-left corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$trLabel` </td>
		<td> Represents the top-right corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$blLabel` </td>
		<td> Represents the bottom-left corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$brLabel` </td>
		<td> Represents the bottom-right corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$tlType` </td>
		<td> Represents the type of the top-left corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$trType` </td>
		<td> Represents the type of the top-right corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$blType` </td>
		<td> Represents the type of the bottom-left corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$brType` </td>
		<td> Represents the type of the bottom-right corner label of a data plot </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$rowLabel` </td>
		<td> Represents the label of the row in which the data plot is located </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$columnLabel` </td>
		<td> Represents the label of the column in which the data plot is located </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$colorRangeLabel` </td>
		<td> Represents the label of the color range to which the data plot belongs </td>
		<td> <li> Heat map chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromXValue` </td>
		<td> Represents the x-coordinate of the source node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromXDataValue` </td>
		<td> Represents the x-coordinate (formatted) of the source node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromYValue` </td>
		<td> Represents the y-coordinate of the source node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromYDataValue` </td>
		<td> Represents the y-coordinate (formatted) of the source node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromLabel` </td>
		<td> Represents the label of the source node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toXValue` </td>
		<td> Represents the x-coordinate of the destination node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toXDataValue` </td>
		<td> Represents the x-coordinate (formatted) of the destination node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toYValue` </td>
		<td> Represents the y-coordinate of the destination node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toYDataValue` </td>
		<td> Represents the y-coordinate (formatted) of the destination node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toLabel` </td>
		<td> Represents the label of the destination node </td>
		<td> <li> Drag-node chart </li> </td>
		<td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$maxValue` </td>
		<td> Represents the maximum value (unformatted) of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$maxDataValue` </td>
		<td> Represents the maximum value (formatted) of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$minValue` </td>
		<td> Represents the minimum value (unformatted) of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$minDataValue` </td>
		<td> Represents the minimum value (formatted) of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$Q1` </td>
		<td> Represents the value of the lower quartile of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedQ1` </td>
		<td> Represents the unformatted value of the lower quartile of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$Q3` </td>
		<td> Represents the value of the upper quartile of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedQ3` </td>
		<td> Represents the unformatted value of the upper quartile of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$SD` </td>
		<td> Represents the standard deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`SDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`SDToolText`} </li> <li> `data`: {`toolText`} | {`SDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedSD` </td>
		<td> Represents the unformatted standard deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`SDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`SDToolText`} </li> <li> `data`: {`toolText`} | {`SDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$QD` </td>
		<td> Represents the quartile deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedQD` </td>
		<td> Represents the unformatted quartile deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$MD` </td>
		<td> Represents the mean deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedMD` </td>
		<td> Represents the unformatted mean deviation value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`MDToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$mean` </td>
		<td> Represents the mean value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedMean` </td>
		<td> Represents the unformatted mean value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$median` </td>
		<td> Represents the median value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$unformattedMedian` </td>
		<td> Represents the unformatted median value of the data plot </td>
		<td> <li> Box and whisker chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$targetValue` </td>
		<td> Represents the unformatted target value </td>
		<td> <li> Horizontal bullet graph </li>  <li> Vertical bullet graph </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$targetDataValue` </td>
		<td> Represents the formatted target value </td>
		<td> <li> Horizontal bullet graph </li>  <li> Vertical bullet graph </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$percentOfPrevValue` </td>
		<td> Represents the current value as a percentage (unformatted) of the previous value <br> Applicable only when the `streamlinedData` attribute is set to __1__ </td>
		<td> <li> Funnel chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
	</tr>

	<tr>
		<td> `$start` </td>
		<td> Represents the start time of a task </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$end` </td>
		<td> Represents the end time of a task </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$label` </td>
		<td> Represents the task label </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$percentComplete` </td>
		<td> Represents the percent complete rate of a task </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$date` </td>
		<td> Represents the milestone date </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$taskStartDate` </td>
		<td> Represents the start date of a task for the milestone </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$taskEndDate` </td>
		<td> Represents the end date of a task for the milestone </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$taskLabel` </td>
		<td> Represents the task label for the milestone </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$taskPercentComplete` </td>
		<td> Represents the percent complete rate of a task for the milestone </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$processName` </td>
		<td> Represents the name of a process for the milestone </td>
		<td> <li> Gantt chart </li> </td>
		<td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$sName` </td>
		<td> Represents the short name of an entity </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$lName` </td>
		<td> Represents the long name of an entity </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromID` </td>
		<td> Represents the ID of the marker from which the connector starts </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$fromLabel` </td>
		<td> Represents the label of the marker from which the connector starts </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toID` </td>
		<td> Represents the ID of the marker at which the connector ends </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr>
		<td> `$toLabel` </td>
		<td> Represents the label of the marker at which the connector ends </td>
		<td> <li> Maps </li> </td>
		<td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$startValue` </td>
		<td> Represents the starting value (unformatted) of a trend-line/trend-zone </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$startDataValue` </td>
		<td> Represents the starting value (formatted) of a trend-line/trend-zone </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$endValue` </td>
		<td> Represents the ending value (unformatted) of a trend-line/trend-zone </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$endDataValue` </td>
		<td> Represents the ending value (formatted) of a trend-line/trend-zone </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$displayValue` </td>
		<td> Represents the display of a trend-line/trend-zone </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

	<tr> 
		<td> `$axisName` </td>
		<td> Represents the axis name against which the trend-line/trend-zone is plotted </td>
		<td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
		<td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
	</tr>

</table>