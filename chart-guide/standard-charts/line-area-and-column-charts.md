---
title: Line, Area and Column charts | FusionCharts
description: The FusionCharts Suite XT standard charts are simple charts used to plot single-series data.
heading: Line, Area and Column charts
---

> These chart types belong to **FusionCharts XT**.

## Column 2D Chart

Column and bar charts represent data with rectangular horizontal or vertical bars. The height of the bars is proportional to the values they represent. In case of a column chart, the `numeric values` are plotted along the y-axis, and the `data labels` are plotted along the x-axis. Whereas in bar charts, the numeric values are plotted along the x-axis, and the data labels are plotted along the y-axis. Column and bar charts are best fitted when you want to compare values.

{% embed_chartAnatomy column-chart.json %}

In this sample, let's create our first column chart showcasing the monthly revenue for last one year for Harry's SuperMart. We have plotted the months along the x-axis and the revenue, which is a numeric value, along the y-axis.

To create a single-series column 2D chart, follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a column chart, set `column2d`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

- Depending on the value passed to the `dataFormat`, set the `dataSource` attribute (JSON/XML) from where the data will be fetched.

- Specify the value for a data item using the `value` attribute within the `data` object.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=column2d) page of column 2D chart.

A single-series column 2D chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/s7t8F/) to edit the column 2D chart.

## Column 3D Chart

To render a column chart in 3D, change the value of the `type` attribute from `column2D` to `column3D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=column3d) page of column 3D chart.

A single-series column 3D chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/xL3py/) to edit the column 3D chart.

## Bar 2D Chart

Now, let's create a bar 2D chart. In the chart below, we have shown five stores in a supermarket that have highest sales. The sales figures are plotted along the x-axis, and the store names are plotted along the y-axis.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=bar2d) page of bar 2D chart.

To render a bar 2D chart, set the `type` to `bar2d`. A single-series bar 2D chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/y3H2G/) to edit the bar 2D chart.

## Bar 3D Chart

To render a bar chart in 3D, change the value of the `type` attribute from `bar2D` to `bar3D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=bar3d) page of bar 3D chart.

A single-series bar 3D chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/b03dgzvv/) to edit the bar 3D chart.

## Line Chart

Line charts are commonly used to showcase the trend in data over time whereas area charts are used to display quantitative data. Information in a line or area chart is plotted on the x- and y-axis; data values are plotted using data points that are connected using line segments.

{% embed_chartAnatomy line-chart.json %}

In the sample, let's create a line chart showcasing total footfall at Bakersfield Central. We have plotted the days along the x-axis and the number of visitors along the y-axis.

To render a line chart, set the `type` attribute to `line`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=line) page of line chart.

A line chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/xb9TG/) to edit the line chart.

## Area Chart

An area chart is similar to the line chart, with the difference that the area marked by the anchors and line segments is filled.

{% embed_chartAnatomy area-chart.json %}

To render an area chart with the same use case as above, set the `type` to `area`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=area2d) page of area chart.

A single-series area chart looks like:

{% embed_all standard-charts-line-area-and-column-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/x5FBh/) to edit the area chart.

Now, let's customize the appearance and properties of the charts.

## Plot Trend Elements

The trend elements on a chart include trend-lines and trend-zones.

Trend-lines are reference horizontal or vertical lines which aid in interpretation of data. They can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trend-line to depict the target sales. Trend-zones are similar to trend-lines except that they mark out an entire zone rather than just a line.

To plot a trend-line on a chart, follow the steps given below:

- Create a `trendlines` object to render one or more than one trend-lines.

- Create a `line` object for a particular trend-line.

- In `line` object, set the `startValue` attribute to specify the starting value for the trend-line. Set the `endValue` to specify the end value for the trend-line.

- Set the `color` attribute to specify the hex code for the color. Use this attribute to render the trend-line and its associated text.

- Set the `displayValue` attribute to display a string caption with the trend-line.

Given below is the JSON code to include trend-line on your chart:

```json
{
	"chart": {
		...
	},
	"data": [],
	"trendlines": [{
	    "line": [{
			"startvalue": "175000",
			"color": "#29C3BE",
			"displayvalue": "Target - $175K"
	    }]
	}]
}
```

A quarterly sales summary chart rendered with a trend-line to show the target value looks like this:

{% embed_chart standard-charts-line-area-and-column-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/aktyv9jm/) to edit the column chart.

**Trend-zone** is used to show a range of target values. The trend-zone uses the same attributes as the trend-line. `isTrendZone` is the attribute which is used to specify whether a chart will be rendered with a trend-line or a trend-zone. Setting this attribute to `0` will render a trend-line, setting it to `1` (default) will render a trend-zone.

A quarterly sales summary chart rendered with a trend-zone to show a range of target values looks like this:

{% embed_chart standard-charts-line-area-and-column-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/6cq0uafp/) to edit the column chart.

FusionCharts Suite XT includes several options to customize trend elements. To know more, click [here](https://www.fusioncharts.com/dev/basic-chart-configurations/trend-lines-and-zones.html).

## Plot Vertical Line Elements

Vertical (or horizontal in case of bar charts) separator lines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points or can be aligned to specific data points.

To plot vertical line in your chart, follow the steps given below:

- Set the `vLine` attribute to `true` to render a vertical line on the chart.

- Specify the `label` attribute to set the label for the vertical line. This label will be rendered along the x-axis.

- Set the position of the vertical line using `linePosition` attribute. This attribute is positioned relative to the two data points between which it is to be plotted.

Given below is the JSON code to include a vertical line on your chart:

```json
{
  "chart": {
	  ...
  },
  "data": [],
  "trendlines": [
    {
      "line": [
        {
          "vline": "true",
          "label": "Weekend Start",
          "color": "#29C3BE",
          "linePosition": "0.7"
        }
      ]
    }
  ]
}
```

A line chart rendered with a vertical line looks like this:

{% embed_chart standard-charts-line-area-and-column-charts-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/cdjco7hq/) to edit the above chart.

FusionCharts Suite XT includes several options to customize vertical line elements. To know more, click [here.](https://www.fusioncharts.com/dev/basic-chart-configurations/vertical-lines.html)

## Change Chart Type

FusionCharts Suite XT allows you to change the chart type dynamically through its advanced API. You can change chart type by calling the `chartType()` method on any FusionCharts' instance and provide the chart name as an argument.

An example of a chart, where you can dynamically change the chart type, looks like this:

{% embed_chart standard-charts-line-area-and-column-charts-example-10.js %}

## Data Skipping

Visualization plays a crucial role in data science, helping data scientists to make sense of the underlying patterns within data, even before any other computation begins. With v3.12.0, FusionCharts has evolved to consume a large amount of data in standard charts.

What if you want to render 10000 data points in a single series chart with a dimension of 500x400 pixels for the line, area, and column charts. So if we take the width of the canvas as 500 pixels, an average of 20 data plots will be drawn every width of a pixel which is not very informative with respect to visualization.

**Data skipping** is a concept which has been introduced to draw only those plots in the canvas which actually creates a data trend without hampering the performance of the chart.

Given below is the list of attributes with the help of which you can customize your data skipping:

- Set `plotBinSize` attribute to `1`, to render minimum one data plot within the width of one pixel. Example, if `plotBinSize: 1`, minimum one column plot will be rendered within the width of one pixel.
  For line and area charts, minimum of two anchors connecting one single line will be drawn. If `plotBinSize: 0.5`, minimum two column plot on each pixel (width )will be rendered.

- Set the `labelBinSize` attribute to `1`, to display minimum one label in the width of one pixel.

> To disable this label skipping, set this attribute to `0`.

Now, let's render an area chart with `30000` data. You will notice that the chart will give a clear idea on how frequently the new trips are availed. The chart will show the data updated every hour. The chart plots with maximum and minimum value in a single pixel (width), drawn to show the pattern out of data. The plots get overlapped only if they are hidden by another plot which results to render the chart much faster than expected. The overlapping takes place based on the data trend which cannot be compromised.

An example will look like as shown below:

{% embed_chart standard-charts-line-area-and-column-charts-example-11.js %}

> In multi-series chart, one dataset can be overlapped (partially or completely) by another dataset only if the data plot of one dataset gets hidden by the other.
