---
title: Step Line Chart | FusionCharts
description: It is a specialized line chart which, unlike the usual line charts, does not use the shortest distance to connect two data points
heading: Step Line Chart
---

A step line chart is used to visualize trends for a particular event which is not continuous in nature. It is a specialized line chart which, unlike the usual line charts, does not use the shortest distance to connect two data points; instead it uses vertical and horizontal lines to connect the data points in a series to form a step-like progression.

Essentially, trends are quite apparent from the general slope of a line chart. However, when the lines take distorted shapes for a specific segment of data points, it becomes very difficult to determine the drift. This is where the significance of a step line chart comes in. For a given set of data, where a line chart shows the generic deviation of the data points, a step line chart not only enables you to compare the magnitude and change in values at different points of the same series but also helps you discern the intermittent pattern of the trend at the same time.

Let's create our first step line chart where we will compare the revenue earned with the expense incurred in the last year. The step-like composition of the data segments gives an accurate representation for the revenue and expense for each month.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a multi-series step line chart, set the `type` attribute to `msstepline`.

For a detailed list of attributes you can check the API reference page of multi-series step line chart.

A multi-series step line chart looks like this:

**CHART**

> The data structure above is similar to that of any multi-series chart in the FusionCharts Suite XT, except for the **type** attribute.

Click here to edit the step line chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Hide the Vertical Lines

By default, the step line chart displays the vertical joins - vertical lines that run through the edges of the horizontal planes thereby joining them into different steps. However, you can also disjoin the horizontal segments by hiding the vertical lines from the chart.

To hide the vertical lines in your chart, set the `drawVerticalJoins` attribute to `0`. This attribute is used to specify whether the vertical joins that connect horizontal planes should be shown or not. 

Refer to the code given below:

```
{

	"chart": {

		"drawVerticalJoins": "0"

	},

}

...

```
A step line chart rendered without the vertical joins looks like this:

**CHART**

## Use Forward Steps

For a step line chart, you can configure the direction of progression of the line segments. By default, the chart is rendered in the forward progressive mode - the line plots are horizontally depicted and then vertical lines are drawn to connect the data plots. To disable the forward progressive mode, set the `useForwardSteps` attribute to `0`. 

Refer to the code given below:

```
{

	"chart": {

		"useForwardSteps": "0"

	},

}

...

```
A step line chart rendered with the forward progressive mode disabled looks like this:

**CHART**

> Compare this chart with the step line chart shown above and see the difference in how each is rendered.