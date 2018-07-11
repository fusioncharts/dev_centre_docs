---
title: Overlapped Charts | FusionCharts
description: In overlapped charts, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare.
heading: Overlapped Charts
breadcrumb: [["Home", "/"], ["Overlapped Charts"]]
---

> These chart types belong to **FusionCharts XT**.

In version 3.13.0, FusionCharts has come up with a clever and rather effective bar chart to display your data- Overlapped Charts. In this chart, the two data series overlap. The width of the plot for the data series differs which makes the chart easy to compare. 

The different types of overlapped charts available in the FusionCharts Suite XT are:

* Overlapped Column 2D Chart
* Overlapped Bar 2D Chart

## Overlapped Column 2D Chart

In this sample let's create a overlapped column 2D chart showcasing...

To create a overlapped column 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-series column 2D chart, set `overlappedColumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=overlappedcolumn2d "@@open-newtab") page of overlapped column 2D chart.

An overlapped column 2D chart looks like:

{% embed_all standard-charts-overlapped-column2d-chart-example-1.js %}

Click here to edit the above overlapped column 2D chart.

## Overlapped Bar 2D Chart

To render an overlapped bar 2D chart, change the value of `type` attribute from `overlappedColumn2D` to `overlappedBar2D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=overlappedbar2d "@@open-newtab") page of overlapped bar 2D chart.

The overlapped bar 2D chart looks like:

{% embed_all standard-charts-overlapped-bar2d-chart-example-1.js %}

Click here to edit the above overlapped bar 2D chart.

Now, let's customize the appearance and properties of the overlapped charts.

## Plot Trend Elements

The trend elements on a chart include trend-lines and trend-zones.

Trend-lines are reference horizontal or vertical lines which aid in interpretation of data. They can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trend-line to depict the target sales. Trend-zones are similar to trend-lines except that they mark out an entire zone rather than just a line.

To plot a trend-line on a chart, follow the steps given below:

* Create a `trendlines` object to render one or more than one trend-lines.

* Create a `line` object for a particular trend-line.

* In `line` object, set the `startValue` attribute to specify the starting value for the trend-line. Set the `endValue` to specify the end value for the trend-line.

* Set the `color` attribute to specify the hex code for the color. Use this attribute to render the trend-line and its associated text.

* Set the `displayValue` attribute to display a string caption with the trend-line.

Given below is the JSON code to include trend-line on your chart:

```json
{
	"chart": {
		...
	},
	"data": [],
	"trendlines": [{
	    "line": [{
	        "startvalue": "700000",
	        "color": "#1aaf5d",
	        "displayvalue": "Monthly Target"
	    }]
	}]
}
```

A quarterly sales summary chart rendered with a trend-line to show the target value looks like this: