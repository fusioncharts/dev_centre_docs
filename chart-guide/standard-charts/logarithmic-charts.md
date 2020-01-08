---
title: Logarithmic Chart | FusionCharts
description: Logarithmic charts are similar to normal charts except for the fact that logarithmic charts use a logarithmic axis instead of a linear axis.
heading: Logarithmic Chart
---

> These chart types belong to **PowerCharts XT**.

Logarithmic charts are similar to normal charts except for the fact that logarithmic charts use a logarithmic axis instead of a linear axis. Logarithmic charts can have a logarithmic scale of any base greater than 1. These charts are perfect for plotting data that comprises of both small and large values. You can use these charts to plot data like sales comparison, election results, population growth, etc.

## Types

FusionCharts Suite XT offers two types of logarithmic charts:

- Log Column 2D Chart

- Log Line Chart

## Features

The FusionCharts Suite XT log charts offer the following features:

- You can select any positive base (apart from 1) for your logarithmic scale.

- Logarithmic y-scale can be inverted to show charts like ranking charts etc.

- Custom selection of y-axis lower and upper limits possible.

- Custom selection of minor divisional lines between any two major divisional lines.

## Log Column 2D Chart

A log column 2D chart looks as follows:

{% embed_chartAnatomy log-column-2d-chart.json %}

As an example, we will create a log column 2D chart that compares the store footfalls with the online visits for one year.

To create a log column 2D chart follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a logarithmic chart, set `logmscolumn2d`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=LogMSColumn2D) page of log column 2D chart.

The log column 2D chart thus rendered looks like this:

{% embed_all standard-charts-logarithmic-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/kEeUR/) to edit the log column 2D chart.

## Log Line 2D Chart

Now, let's create a log line 2D chart that compares the store footfalls with the online visits for one year. To render a log line 2D chart, change the value of the `type` attribute from `logmscolumn2d` to `logmsline`. The rest of the data structure remains the same.

{% embed_chartAnatomy log-line-2d-chart.json %}

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=LogMSLine) page of log line 2D chart.

The log line chart thus rendered looks like this:

{% embed_all standard-charts-logarithmic-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/LSdTC/) to add the log line 2D chart.

FusionCharts Suite XT allows you to configure the functional aspects of logarithmic charts. Now, let's customize the appearance and properties of the charts. 

## Custom Selection of Base

By default, the base of a logarithmic chart is set to 10. You can, however, set the base to any value of your requirement. Just ensure that the base value is any positive number greater than 1. Set the `base` attribute to specify the base value for the logarithmic chart.

Refer to the code given below:

```json
{
	"chart": {
		"base": "5"
	}
}
```

A log column chart with the base set to 5 looks like this:

{% embed_chart standard-charts-logarithmic-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/dfdc2f9p/) to edit the log column 2D chart.

## Inverse Axis Support

Logarithmic charts allow you to plot the y-axis values inversely so that the y-axis upper limit appears at the bottom of the chart canvas instead of at the top. Set the `invertYAxis` attribute as `1` to specify the inverted y-axis for the chart. 

Refer to the code given below:

```json
{
	"chart": {
		"invertYAxis": "1"
	},
}
```
A log column 2D chart rendered with an inverted y-axis looks like this:

{% embed_chart standard-charts-logarithmic-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/rr92f6Lm/) to edit the log column 2D chart.

## Custom Selection of Minor Divisional Lines

By default, the chart automatically calculates the number of minor divisional lines depending on the logarithmic base defined in the chart. 

You can, however, explicitly specify the number of minor divisional lines between any two major divisional lines using `numMinorDivLines` attribute. This attribute takes the value greater than `0`.

Refer to the code given below:

```json
{
	"chart": {
		"numMinorDivLines": "4"
	},
}
```

A log column chart with the number of minor divisional lines explicitly specified looks like this:

{% embed_chart standard-charts-logarithmic-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/8yx8gfaj/) to edit the log column 2D chart.