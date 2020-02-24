---
title: Select Scatter Chart | FusionCharts
description: The select scatter chart is a special type of chart that allows users to visually select a subset of data from the given data points.
heading: Select Scatter Chart
---

> This chart type belongs to **PowerCharts XT**.

The select scatter chart is a special type of chart that allows users to visually select a subset of data from the given data points. Essentially, it is an extension of the XY plot chart (scatter chart) with the added functionality of selecting any number of points on the chart and returning them to the server, or JavaScript functions, for further processing.

{% embed_chartAnatomy select-scatter-chart.json %}

This can be used for a variety of purposes, where you want your users to visually select data from the scatter chart. As an example, we will plot a select scatter chart to show the products sold and the price points earned, for televisions and cell phones at Harry's SuperMart in one week.

To create a select scatter chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a select-scatter chart, set `selectscatter`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=selectscatter) page of select-scatter chart.

The select scatter chart thus created looks like this:

{% embed_all standard-charts-select-scatter-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/3JjL8/) to edit the select scatter chart.

## Select Set of Points

To select a set of points, you can drag and draw a rectangle over the chart. All the points within this rectangle are now selected points. Once the rectangle has been drawn, you can resize it to adjust more points. The resize handlers let you do so.

You can drag, resize, or delete any select rectangles individually. To delete any rectangle, you can click the `X` at the top right corner of the selection box. 

After selection click the `Submit` button. This button sends the JSON/XML data as a form to the server-side script. In the above sample, the JSON data for the selected points - the price and quantity of each TV/cell phone unit - have been displayed in a table. Click the `Restore` button to bring back the chart to its original state.

![Select set of points](/gif/standard-charts-selectscatter-gif-1.gif)

## Get Selected Data

After you select a subset of data points in a select scatter chart and click `Submit`, the selected data is sent to a server-side script, or a JavaScript function, for further processing. Here you will see how the updated data is read using the JavaScript functions present on the same page.

After the chart is rendered, to access the chart data as an array, the following function is called:

```
//Get a reference to our chart
var chartObject= FusionCharts("chartId");

//Now get the data as array.
var arrData = chartObject.getData();

```
Get a reference to the chart object using the `FusionCharts` item reference method. Next, to get the data as an array, call the `getData()` method of the chart. This method returns the data of the chart in a two-dimensional array.

Given below is a brief description of the structure of this array:

[1,0] - Dataset 1 - This cell contains the dataset id|Selected data point id for dataset 1|Selected data point id for dataset 1|Selected data point id for dataset 1|Selected data point id for this dataset…|
-|-|-|-|-
[2,0] - Dataset 2 - This cell contains the dataset id|Selected data point id for dataset 2|Selected data point id for dataset 2|Selected data point id for dataset 2|Selected data point id for this dataset…|
[n,0] - Dataset n - This cell contains the dataset id|Selected data point id for dataset n|Selected data point id for dataset n|Selected data point id for dataset n|Selected data point id for this dataset…|

Now, from this chart, if you select three data points from the Televisions dataset and five from the Cell Phones dataset and then return the data of chart as an array using the `getData()` method of the chart object, the tabular mapping of the array returned can be traced as under:

Televisions|TV_1|TV_2|TV_3|||
-|-|-|-|-|-
Cell Phones|Mob_1|Mob_2|Mob_3|Mob_4|Mob_5|

Mapping then to the JSON data, gives:

* Each dataset is returned as a single row in the array

* The first column of each row contains the dataset index

* The rest of the columns contain the ids of the selected points of that dataset

* The length of each row's array (horizontally) can be different, depending on the number of data points chosen for that dataset

## Read JSON data from the Chart

The chart also provides a method to read the selected data in the JSON/XML format. This method is named as the `getJSONData()` and can be invoked as under:

```json
//Get a reference to our chart
var chartObject= FusionCharts("SelectChart");

//Get the data from chart
var jsonRtn = chartObject.getJSONData();

//Show it to user in alert box
alert(jsonRtn);

```
The function `getJSONData()` returns the selected data. This function is also used to retrieve the complete data from the chart. To get the complete data from the chart you need to pass `false` as a parameter to the function. For example, `var jsonRtn = chartObject.getJSONData(false);`

A select scatter chart configured to show how the selected data is retrieved and updated looks like this:

{% embed_chart standard-charts-select-scatter-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/0e8vwaud/) to edit the select scatter chart.

Now, let's customize the appearance and properties of drawing regression lines in the select scatter chart.

## Draw Regression Lines

A regression line, rendered as a straight line, is used to show the trend of **y** values for the **x** values or the trend of **x** values for the **y** values. A regression line, therefore, can be used to derive a particular trend from the scattered data points in the chart canvas and predict values accordingly. For example, regression lines can be used to find trends and predict future sales, stock prices, currency exchange rates, productivity gains resulting from a training program, and so on.

There are several methods to calculate and draw regression lines; scatter charts, using linear regression, use the **least-squares** deviation method (also known as the least absolute deviation method). This method calculates the best-fitting straight-line for the observed data by minimizing the sum of the squares of the vertical deviations of each data point from the line (if a point lies on the fitted line exactly, then its vertical deviation is 0). As the deviations are first squared and then summed, there are no cancellations between positive and negative values.

To show the regression line, set the `showRegressionLine` attribute to `1`. Setting it to `0` (default) will hide the regression line.

Refer to the code given below:

```json
{
	"chart": {
		"showRegressionLine": "1"
	}
}
```
A select scatter chart rendered with a regression line is shown below:

{% embed_chart standard-charts-select-scatter-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/0yL7zfps/) to edit the select scatter chart.

### Modes of Regression

Regression lines can be drawn in one of the following two modes:

* **Y** on **X**: (Default mode) Used when **y** values are predicted, or a trend of **y** values is calculated, based on the **x**values

* **X** on **Y**: Used when **x** values are predicted, or a trend of **x** values is calculated, based on the **y** values

In the select scatter chart shown above, the regression line is drawn in the **Y** on **X** mode.

The same sample with the regression line drawn using the **X on Y** mode will be shown below. To set the mode and customize regression lines, follow the steps given below:

* Set the `showYOnX` attribute to `1` specify the mode in which the regression line will be drawn. 

* Specify the hex color code of the regression line using the `regressionLineColor` attribute.

* Set the thickness of the regression line using `regressionLineThickness` attribute.

* Set the transparency (between 0 to 100) of the regression line using `regressionLineAlpha` attribute.

Refer to the code given below:

```json
{
	"chart": {
		"showYOnX": "0",
		"regressionLineColor": "f4cb00",
		"regressionLineThickness": "3",
		"regressionLineAlpha": "70"
	}
}
```

The chart looks like:

{% embed_chart standard-charts-select-scatter-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/7yhqp2oq/) to edit the select scatter chart.

> The formula used to draw the regression lines for both the modes are given below: 

**> Y on X**: The regression equation of **Y on X** is the equation of the best fitting straight line in the form **y=a+bx**, where **x** is the explanatory variable and **y** is the dependent variable and **b=( n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σx² – (Σx)² )**. 

**> X on Y**: The regression equation of **X on Y** is the equation of the best fitting straight line in the form **x=a+by**, where **y** is the explanatory variable and **x** is the dependent variable and **b=( n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σy² – (Σy)² )**.