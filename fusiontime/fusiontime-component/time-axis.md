---
title: Time Axis | FusionCharts
description: This article defines the time axis.
heading: Time Axis
---

The Time Axis in FusionTime is the x-axis which represents time. It intelligently scales the x-axis depending on the number of plots displayed in the active window. 

<img src="{% site.baseurl %}/images/fusiontime-component-time-axis.png" alt="Time Axis" width="700" height="420">

The time axis contains the following:

* A point on the calendar represents the time span. For example - January 30, 2012 represents a day, January, 2012 represents a month annd 2012 represents a year. 

* A point on the clock represents the time instant. For example - 10.15 AM, 22.15hrs, etc. 

* Major and minor ticks indicates the time instances (contextual to the data).

* Labels for each ticks appears right below the tick and is centrally alligned to the tick. The visibility of labels associated with the tick marks is smartly controlled, to reduce clutter and help the viewer understand the data better.

* The Time Axis supports almost all types of time-related units, from milliseconds (smallest) to years (largest).

* The Time Axis automatically updates itself whenever there is a change in the time period from any of the components like standard range selector, custom range selector, timme navigator and interactions such as zoom/pan from the chart canvas.

A sample chart is shown below:

{% embed_ftChart online-sales-single-series %}

In the above chart, try and change the time period and see how the time axis adjusts automatically to respond to the change occured. For example - try and change the date from the [custom range selector]({% site.baseurl %}/fusiontime/fusiontime-component/custom-range-selector).

## Multiple Time columns

Let's suppose that you have a tabular data which has multiple date/time columns. For example - Order Date and Shipping Date. The time axis of FusionTime can only represent one date/time column on the timescale. In such a scenario, specify which date/time column you want the time axis to represent. To do so, refer to the code below:

```
xAxis {
	"plot": "Order Date"
}

```

In th above code:

* Create the `xAxis` object.
* Set the column name which you want to represent on the time axis as the value of the `plot` property. In this case, `Order Date`

