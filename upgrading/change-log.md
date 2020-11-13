---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.16.x
---
<h2 class="sub-heading">Version 3.16.x</h2>

<p class="release-date">November 2020</p>

<h4>New Features</h4>

* Starting version 3.16.x FusionCharts introduces support for HTML tags across all chart text elements.
For a full list of all the new supported elements refer to (Change Behavior link).

* Starting version 3.16.x FusionCharts introduces relative font size support for text elements. The following font sizes are now supported: `rem`, `%`, `em`, and `vw`.
* You can now set and configure patterns to fill data plots, the following pattern types are available: circle, square, and line. 

For more details refer to [pattern fill](/dev/chart-guide/chart-configurations/data-plot#add-pattern-fill-to-data-plots)

<h4>Improvements</h4>

* Now, the opacity of Legend items syncs with the opacity of data plot and data series.
* Both anchor border color and anchor background color inherit values from the palette.
* Fusioncharts now allows setting custom text for tooltips in Chord and Sankey diagram.
* When exporting SparkWinLoss charts to CSV or Excel format, the output file now displays the values for the win, loss and draw columns correctly. Previously, when exporting a SparkWinLoss chart to CVS or Excel, the output files contained no data. 
* In 3.16 when the secondary value is 0, Treemap charts render all data plots with the specified color. Previously, if the secondary value was 0, the data plot was not colored accordingly and appeared as white. 
* The following properties now return unique and valid values; id, index, dataIndex, and dataSeriesIndex. With the improved id attribute users can now define their custom string value for this property. By default in single-series charts id use label value while for multi-series charts its label - datasetIndex value. Previously, when the id was set for the plot events and methods the value returned for it was either undefined or empty. 
* The Multi-series Column chart now displays all 0 or small value column bars correctly. Previously while plotting data in extremely high ranges (0 to a million), all the 0 value columns displayed as a 1px column bar while all small values greater than 0 were not visible.


<h4>Fixes</h4>

* The dataplotClick event now triggers correctly from labels for Chord diagram charts. Previously, if using the IE11 browser any dataplotClick event did not trigger from labels for the Chord diagram. 
* In 3.16 when setJSONData is called simultaneously for spline charts, it no longer displays a JS error. 
Previously, when updating the Spline Area chart using setJSONData API method an exception error message was shown.
* For the Funnel and Pyramid charts, the chart canvas is now center-aligned correctly with the chart container and caption. Previously these charts were not center-aligned. 
* Tooltips now display the correct value when hovering over data in StackedColumn 2D charts. Previously, the tooltip displayed an incorrect value. 


