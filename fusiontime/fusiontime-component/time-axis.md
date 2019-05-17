---
title: Time Axis | FusionCharts
description: This article defines the time axis.
heading: Time Axis
---

The X-axis of a chart in FusionTime represents the `date` column from the data table and is known as the Time Axis. Based on the atomicity of the data and the active window (of the time navigator) the time axis intelligently creates a timescale to display the chart data. Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-time-axis.png" alt="Time Axis" width="700" height="420">

The salient features of the time axis are:

- Intelligently creates a timescale to represent the chart data.

- Uses major ticks, minor ticks and the contextual labels to help understand the timescale.

- Each tick is associated with a label. The label is center aligned with the tick and appears right below it.

- The visibility of each label is smartly controlled to reduce clutter and provide better clarity of the timescale.

- The Time Axis supports almost all types of time-related units, from milliseconds (smallest) to years (largest).

- The Time Axis automatically updates itself whenever there is a change in the time period from any of the components like standard range selector, custom range selector, and time navigator, or interactions such as zoom/pan from the chart canvas.

A sample chart is shown below:

{% embed_ftChart online-sales-single-series %}

See it live! Click [here](https://jsfiddle.net/fusioncharts/Lut0752a/)

In the above chart, try and change the time period and see how the time axis adjusts automatically to respond to the change occured. For example - try and zoom into the data from the chart canvas.

## Multiple time columns in data

Let's suppose that you have a tabular data which has multiple date/time columns. For example - Order Date and Shipping Date. The time axis of FusionTime can only represent one date/time column on the timescale. In such a scenario, specify which date/time column you want the time axis to represent. To do so, refer to the code below:

```javascript
new FusionCharts({
	type: 'timeseries',
	dataSource: {
		xAxis {
			"plot": "Order Date"
		}
	},
});
```

In the above code:

- Create the `xAxis` object.
- Set the column name which you want to represent on the time axis as the value of the `plot` property. In this case, `Order Date` is the column name.

> If the tabular data has only one date type column, then FT automatically represents it in the `xAxis`.

> If multiple data type columns are available in the tabular data and we do not specify the data type column in `xAxis`, then FT will assign the first date type column in the tabular data to the `xAxis`.
