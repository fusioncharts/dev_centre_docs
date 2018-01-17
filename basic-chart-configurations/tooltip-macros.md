---
permalink: basic-chart-configurations/tooltip-macros.html
title: Tooltip Macros | FusionCharts
description: Using macros you can configure dynamic and contextual content in tooltips. Macros enables you to use chart labels, raw values, formatted values, etc
heading: Tooltip Macros
chartPresent: true
---

FusionCharts Suite XT supports macros to configure dynamic and contextual content in tooltips. This allows you to build custom tooltext for data points on the chart and saves a lot of manual effort by providing deeper customization.

Macros enable you to use chart labels, raw values, formatted values, display values etc. as variables that can be used in conjunction with your custom text to form the complete tooltext. 

This article includes :

* A sample implementation of tooltip macros
* Chart-level attributes introduced to support macros
* Pointers to remember when using macros
* Advanced usage of tooltip macros
* List of macros

## Sample Implementation of Tooltip Macros

In the multi-series column 2D charts shown below, hover the mouse pointer over any of the data plots, in each of the chart, to understand the difference between the default tooltip and a custom tooltip:

<table>
  <tr>
    <th> Chart with the default tooltip </th>
    <th> Chart with the custom tooltip </th>
  </tr>
  <tr>
{% embed_all configuring-your-chart-tooltip-macros-example-1.js %}
{% embed_all configuring-your-chart-tooltip-macros-example-2.js %}
  </tr>
</table>

While tooltips for both charts essentially show the same information, macros help you add additional details that make it easy for the user to understand the context of the chart in one glance. 

The `plotToolText` attribute, described below, is used to customize tooltips using macros:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotToolText`</td>
    <td> This attribute accepts macros, in addition to plain text and HTML tags, as strings to create custom tooltips. \n\n For example, 
    <code>&lt;div&gt;&lt;b&gt;$label&lt;/b&gt;&lt;br/&gt; &lt;b&gt;Year: &lt;/b&gt;$seriesname&lt;br/&gt;&lt;b&gt;Sale: &lt;/b&gt;$$value&lt;br/&gt;&lt;/div&gt;</code>
    </td>
  </tr>
</table>


## Pointers to Remember when Using Macros

* Macros are case-insensitive
* A macro which is not applicable will be treated as string
* To use a macro name as text in tooltip use “" (inverted commas) before the “$” sign. Example: to show “$value” in tooltip use “\$value” in `tooltext` attribute.
* Tooltext can also be configured from corresponding parent nodes (that is, chart, dataset, etc).

## New chart-level attributes to support macros

Given below is a brief description of the chart level attributes introduced to support macros :

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`trendLineToolText`</td>
    <td>It is used to define tooltext for trend-line from chart-tag.</td>
  </tr>
  <tr>
    <td>`cumulativePlotTooltext`</td>
    <td>It is used to define tooltext for charts and set tag in Pareto Chart.</td>
  </tr>
  <tr>
    <td>`targetToolText`</td>
    <td>It is used to define tooltext in chart tags for target plot in Bullet charts.</td>
  </tr>
  <tr>
    <td>`milestoneToolText`</td>
    <td>It is used to define tooltext in chart tags for milestone in Gantt charts.</td>
  </tr>
  <tr>
    <td>`errorPlotTooltext`</td>
    <td>It is used to define tooltext for dataset and set tag for error charts.</td>
  </tr>
  <tr>
    <td>`horizontalErrorPlotTooltext`</td>
    <td>It is used to define tooltext for dataset and set tag for error scatter charts.</td>
  </tr>
  <tr>
    <td>`verticalErrorPlotTooltext`</td>
    <td>It is used to define tooltext for dataset and set tag for error scatter charts.</td>
  </tr>
  <tr>
    <td>`entityToolText`</td>
    <td>It is used to define tooltext for the map tags in maps.</td>
  </tr>
  <tr>
    <td>`markerToolText`</td>
    <td>It is used to define tooltext for the map tags in maps.</td>
  </tr>
  <tr>
    <td>`connectorToolText`</td>
    <td>It is used to define tooltext for the map tags in maps and as connector tags in DragNode Charts.</td>
  </tr>
  <tr>
    <td>`outliersTooltext`</td>
    <td>It is used to define tooltext for dataset and set tags for BoxAndWhisker.</td>
  </tr>
  <tr>
    <td>`meanTooltext`</td>
    <td>It is used to define tooltext for dataset and set tags for BoxAndWhisker.</td>
  </tr>
  <tr>
    <td>`SDTooltext`</td>
    <td>It is used to define tooltext for dataset and set tags for BoxAndWhisker.</td>
  </tr>
  <tr>
    <td>`QDTooltext`</td>
    <td>It is used to define tooltext for dataset and set tags for BoxAndWhisker.</td>
  </tr>
  <tr>
    <td>`MDTooltext`</td>
    <td>It is used to define tooltext for dataset and set tags for BoxAndWhisker.</td>
  </tr>
</table>


## Advanced usage of tooltip macros

You can use the new `plotToolText` attribute introduced in FusionCharts Suite XT 3.4 to use `macros` in your chart to make it more informative.

A column 2D chart with customized tooltips to display a detailed pie 2D chart looks as below:

{% embed_all configuring-your-chart-tool-tips-example-5.js %}

This can be made possible by using `rollover ()` and `rollout ()`events on the data plot that can be used to display the pie 2D chart for each data plot when the mouse pointer is hovered over it.


## List Of Macros

<table>
  <tr>
    <th>Macro Name</th>
    <th>Description</th>
    <th>Applicable Charts</th>
    <th>Applicable &lt;tag : attributename</th>
  </tr>
  <tr>
    <td>`$value`</td>
    <td>It represents the set / entity / marker values(unformatted).</td>
    <td>* All Charts that support `value` in &lt;`set`&gt; level
* Horizontal and vertical bullet graph
* Real-time Thermometer
* Real-time Bulb
* Real-time Cylinder
* Real-time Horizontal Linear and Real-time Angular	Gauge
* Multi-level Pie Chart
* Map entity and marker tooltext
</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;axis : `plotToolText`&gt;
&lt;dataset : `plotToolText`&gt;
&lt;set : `toolText`&gt;
&lt;map : `entityToolText`&gt;
&lt;entity : `toolText`&gt;
&lt;map : `markerToolText`&gt;
&lt;marker : `toolText`&gt;
&lt;dial : `toolText`&gt;
&lt;category : `tooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$dataValue`</td>
    <td>It represents formatted values.</td>
    <td>* All Charts that support `value` in &lt;`set`&gt; level
* Horizontal and vertical bullet graph
* Real-time Thermometer
* Real-time Bulb
* Real-time Cylinder
* Real-time Horizontal Linear and Real-time Angular	Gauge
* Multi-level Pie Chart
* Map entity and marker tooltext
</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;axis : `plotToolText`&gt;
&lt;dataset : `plotToolText`&gt;
&lt;set : `toolText`&gt;
&lt;map : `entityToolText`&gt;
&lt;entity : `toolText`&gt;
&lt;map : `markerToolText`&gt;
&lt;marker : `toolText`&gt;
&lt;dial : `toolText`&gt;
&lt;category : `tooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$label`</td>
    <td>It represents corresponding set-label / category-name / connector-label / marker-label.</td>
    <td>* All charts where plot correspond to a x-axis label (except XY charts)
* Pyramid Chart
* Funnel Funnel
* Multi-level Pie Chart
* Map connector and marker tooltext</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;dataset : `plotToolText`&gt;
&lt;set : `toolText`&gt;
&lt;map : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;
&lt;map : `markerToolText`&gt;
&lt;marker : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$displayValue`</td>
    <td>It represents the values of `displayValue` attribute in set / entity.</td>
    <td>* All charts that support `displayValue` at dataset level
* Pyramid Chart
* Funnel Chart
* Map entity tooltext
* Kagi Chart
* Waterfall / Cascade Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;dataset : `plotToolText`&gt;
&lt;set : `toolText`&gt;
&lt;map : `entityToolText`&gt;
&lt;entity : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$seriesName`</td>
    <td>It represents the corresponding series name.</td>
    <td>* All Multi-Series Charts</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$yAxisName`</td>
    <td>It represents the  Corresponding y-Axis name</td>
    <td>* All Cartesian (x and y co-ordinates) charts</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$xAxisName`</td>
    <td>It represents the Corresponding x-Axis name</td>
    <td>* All Cartesian (x and y co-ordinates) charts</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$xDataValue`</td>
    <td>It represents x value (formatted) of corresponding data.</td>
    <td>* XY charts
* Dragnode Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$yDataValue`</td>
    <td>It represents y value (formatted) of corresponding data.</td>
    <td>* XY charts
* Dragnode Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$zDataValue`</td>
    <td>It represents z value (formatted) of corresponding data.</td>
    <td>* Bubble Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$xValue`</td>
    <td>It represents x value (unformatted) of corresponding data.</td>
    <td>* XY charts
* Dragnode Chart
* Candlestick Chart
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$yValue`</td>
    <td>It represents y value (unformatted) of corresponding data.</td>
    <td>* XY charts</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$zValue`</td>
    <td>It represents z value (unformatted) of corresponding data.</td>
    <td>* Bubble Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$name`</td>
    <td>It represents the name of corresponding data</td>
    <td>* Bubble Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$percentDataValue`</td>
    <td>It represents percent value (formatted) of corresponding data</td>
    <td>* Pie 2D/3D
* Doughnut 2D/3D
* Funnel Chart
* Pyramid Chart
* Stacked Charts
* Marimekko
* Multi-level Pie Chart
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$sum`</td>
    <td>It represents the sum of corresponding stack (formatted).
Will represent the sum value of all plot for Pareto 2D/3D, Pie 2D/3D, Funnel, Pyramid and  Waterfall charts.</td>
    <td>* Pareto 2D/3D
* Pie 2D/3D
* Doughnut 2D/3D
* Funnel Chart
* Pyramid Chart
* Merimekko
* Stacked charts
* Waterfall / Cascade Chart
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedSum`</td>
    <td>It represents the sum of corresponding stack (unformatted).
Will represent the sum value of all plot for Pareto 2D/3D, Pie 2D/3D, Funnel, Pyramid and  Waterfall charts.</td>
    <td>* Pareto 2D/3D
* Pie 2D/3D
* Doughnut 2D/3D
* Funnel Chart
* Pyramid Chart
* Merimekko
* Stacked charts
* Waterfall / Cascade Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$cumulativeValue`</td>
    <td>Summation of values up to the plot (unformatted).</td>
    <td>* Pareto 2D/3D
* Waterfall / Cascade Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$cumulativeDataValue`</td>
    <td>Summation of values up to this plot (formatted).</td>
    <td>* Pareto 2D/3D
* Waterfall / Cascade Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$cumulativePercentValue`</td>
    <td>Will represent (($cumulativeSum / $sum) * 100) in percent of corresponding data (unformatted).</td>
    <td>* Pareto 2D/3D</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$cumulativePercentDataValue`</td>
    <td>Will represent ($cumulativeSum / $sum) * 100) in percent of corresponding data (formatted). </td>
    <td>* Pareto 2D/3D</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$xAxisPercentValue`</td>
    <td>It represents the percent value of x-axis that is covered by the corresponding stack.</td>
    <td>* Merimekko</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$errorValue`</td>
    <td>It represents the error value (unformatted) of a plot.</td>
    <td>* Error Bar Chart
* Error Line 2D Chart	
* Error Scatter Chart
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$errorDataValue`</td>
    <td>It represents the error value (formatted) of a plot.</td>
    <td>* Error Bar Chart
* Error Line 2D Chart	
* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$errorPercent`</td>
    <td>It represents the error percentage.</td>
    <td>* Error Bar Chart
* Error Line 2D Chart	
* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$horizontalErrorValue`</td>
    <td>It represents the horizontal error value (unformatted) of a plot.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$horizontalErrorDataValue`</td>
    <td>It represents the horizontal error value (formatted) of a plot.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$verticalErrorValue`</td>
    <td>It represents the vertical error value (unformatted) of a plot.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$verticalErrorDataValue`</td>
    <td>It represents the vertical error value (formatted) of a plot.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$horizontalErrorPercent`</td>
    <td>It represents the horizontal error percentage.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$verticalErrorPercent`</td>
    <td>It represents the vertical error percentage.</td>
    <td>* Error Scatter Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$openValue`</td>
    <td>It represents the open value (unformatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$openDataValue`</td>
    <td>It represents the open value (formatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$closeValue`</td>
    <td>It represents the close value (unformatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$closeDataValue`</td>
    <td>It represents the close value (formatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$highValue`</td>
    <td>It represents the high value (unformatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line
* Spark Column
</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$highDataValue`</td>
    <td>It represents the high value (formatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line
* Spark Column</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$lowValue`</td>
    <td>It represents the low value (unformatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line
* Spark Column</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$lowDataValue`</td>
    <td>It represents the low value (formatted) of data.</td>
    <td>* Candle-Stick Chart
* Spark Line
* Spark Column</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$volumeValue`</td>
    <td>It represents the volume value (unformatted) of data.</td>
    <td>* Candle-Stick Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$volumeDataValue`</td>
    <td>It represents the volume value (formatted) of data.</td>
    <td>* Candle-Stick Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$tlLabel`</td>
    <td>It represents the tlLabel of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$trLabel`</td>
    <td>It represents the trLabel of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$blLabel`</td>
    <td>It represents the blLabel of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$brLabel`</td>
    <td>It represents the brLabel of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$trType`</td>
    <td>It represents the trType attribute in chart tag.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$tlType`</td>
    <td>It represents the tlType attribute in chart tag.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$brType`</td>
    <td>It represents the brType attribute in chart tag.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$blType`</td>
    <td>It represents the blType attribute in chart tag.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$rowLabel`</td>
    <td>It represents  the corresponding row-label of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$columnLabel`</td>
    <td>It represents the corresponding column-label of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$colorRangeLabel`</td>
    <td>It represents the colorRangeLabel of the plot.</td>
    <td>* Heat Map Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
		&lt;dataset : `plotToolText`&gt;
		&lt;set : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromXValue`</td>
    <td>It represents the nodes from x value.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromYValue`</td>
    <td>It represents the nodes from y value.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromXDataValue`</td>
    <td>It represents the nodes from x value (formatted).</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromYDataValue`</td>
    <td>It represents the nodes from y value (formatted).</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromLabel`</td>
    <td>It represents from node’s label.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toXValue`</td>
    <td>It represents the node's x value.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toYValue`</td>
    <td>It represents the node's y value.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toXDataValue`</td>
    <td>It represents the node's x value (formatted).</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toYDataValue`</td>
    <td>It represents the node's y value (formatted).</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toLabel`</td>
    <td>It represents to node's label.</td>
    <td>* DragNode Chart</td>
    <td>&lt;chart : `connectorToolText`&gt;
&lt;connectors : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$maxValue`</td>
    <td>Max Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$maxDatavalue`</td>
    <td>Max Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$minValue`</td>
    <td>Min Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$minDataValue`</td>
    <td>Min Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$Q1`</td>
    <td>Q1 Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedQ1`</td>
    <td>Q1 Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$Q3`</td>
    <td>Q3 Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedQ3`</td>
    <td>Q3 Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$SD`</td>
    <td>SD Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedSD`</td>
    <td>SD Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$QD`</td>
    <td>QD Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedQD`</td>
    <td>QD Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$MD`</td>
    <td>MD Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedMD`</td>
    <td>MD Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$mean`</td>
    <td>Mean Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedMean`</td>
    <td>Mean Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$median`</td>
    <td>Median Value (formatted) of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$unformattedMedian`</td>
    <td>Median Value of the plot.</td>
    <td>* Box and Whisker Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$targetValue`</td>
    <td>It represents the target-value (unformatted)</td>
    <td>* Horizontal bullet graph
* Vertical bullet graph</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$targetDataValue`</td>
    <td>It represents the target-value (formatted)</td>
    <td>* Horizontal bullet graph
* Vertical bullet graph</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$percentOfPrevValue`</td>
    <td>It represents the percent (unformatted) with respect to the previous value,
applicable only when `streamlinedData`= `1`</td>
    <td>* Funnel Chart</td>
    <td>&lt;chart : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;dataset : `plotToolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;
&lt;set : `toolText | outlierTooltext | meanTooltext | SDTooltext | QDTooltext | MDTooltext`&gt;</td>
  </tr>
  <tr>
    <td>`$start`</td>
    <td>Start time of a task.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;tasks : `plotToolText`&gt;
&lt;task : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$end`</td>
    <td>End time of a task.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;tasks : `plotToolText`&gt;
&lt;task : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$label`</td>
    <td>It represents the label of the task.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;tasks : `plotToolText`&gt;
&lt;task : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$percentComplete`</td>
    <td>It represents the percentage of task completed only if provided.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `plotToolText`&gt;
&lt;tasks : `plotToolText`&gt;
&lt;task : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$date`</td>
    <td>It represents the milestone date.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$taskStartDate`</td>
    <td>It represents the corresponding task's start date.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$taskEndDate`</td>
    <td>It represents the corresponding task's end date.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$taskLabel`</td>
    <td>It represents the corresponding task's label.</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$taskPercentComplete`</td>
    <td>It represents the  percentage of corresponding task completed (if provided).</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$processName`</td>
    <td>It represents the corresponding process’ name</td>
    <td>* Gantt Chart</td>
    <td>&lt;chart : `milestoneToolText`&gt;
&lt;milestone : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$sName`</td>
    <td>Represents short name of the entity.</td>
    <td>* Maps</td>
    <td>&lt;map : `entityToolText`&gt;
&lt;entity : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$lName`</td>
    <td>Represents long name of the entity.</td>
    <td>* Maps</td>
    <td>&lt;map : `entityToolText`&gt;
&lt;entity : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromId`</td>
    <td>Represents the id of the marker from which the connector starts.</td>
    <td>* Maps</td>
    <td>&lt;map : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$fromLabel`</td>
    <td>Represents label of the marker from which the connector starts.</td>
    <td>* Maps</td>
    <td>&lt;map : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toId`</td>
    <td>Represents id of the marker to which the connector ends.</td>
    <td>* Maps</td>
    <td>&lt;map : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$toLabel`</td>
    <td>Represents the label of the marker to which the connector ends.</td>
    <td>* Maps</td>
    <td>&lt;map : `connectorToolText`&gt;
&lt;connector : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$startValue`</td>
    <td>Trend line / zone unformatted start value.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$startDataValue`</td>
    <td>Trend line / zone formatted start value.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$endValue`</td>
    <td>Trend line / zone unformatted end value.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$endDataValue`</td>
    <td>Trend line / zone formatted end value.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$displayValue`</td>
    <td>Trend line / zone display value.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
  <tr>
    <td>`$axisName`</td>
    <td>Axis name against which the trend line/ zones are plotted.</td>
    <td>* All Cartesian (x and y co-ordinates) Charts</td>
    <td>&lt;trendLines : `toolText`&gt;
&lt;line : `toolText`&gt;</td>
  </tr>
</table>
