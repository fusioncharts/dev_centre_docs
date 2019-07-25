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

In th above code:

- Create the `xAxis` object.
- Set the column name which you want to represent on the time axis as the value of the `plot` property. In this case, `Order Date` is the column name.

> If the tabular data has only one date type column, then FT automatically represents it in the `xAxis`.

> If multiple data type columns are available in the tabular data and we do not specify the data type column in `xAxis`, then FT will assign the first date type column in the tabular data to the `xAxis`.

## Set the Initial Spread of the Active Window

Starting v1.2.0, FusionTime allows you to set the initial spread of the active window of the time navigator. This flexibility gives you the option to initially load your time-series chart according to your requirements.

To set the initial spread of the active window, create a newly added `initialInterval` object under `xaxis` object. Set the value of the `from` and `to` attribute in the `initialInterval` object.

> The date-time format of the `from` and `to` attributes should be the same as of the value of `time` in **schema**.

Refer to the code below:

```json
"dataSource": {
    "xaxis": {
        "initialInterval": {
            "from": "2016-01-01 12:00:00",
            "to": "2016-01-31 12:00:00"
        }
    }
}
```

In the above code:

- Create the `initialInterval` object in the `xaxis` object to specify the spread of time axis on initial loading or rendering.

- In the `initialInterval` object:
  - `from` attribute is used to set the time from where you want your time-series chart to be rendered.

  - `to` attribute is used to set the time up to which you want your time-series chart to be rendered.

> If 'from' is not specified, then the first timestamp of the data will be taken, and if 'to' is not specified, then the last timestamp of data will be considered.

## Style Definition

Styling can be applied to three elements of the X-axis:

- Labels
- Title
- Tick marks

FusionTime allows to the style the major and minor ticks individually. The values of the style properties for major and minor tick marks and their labels are derived from the provided style.

The syntax to customize the ticks and labels of the time axis is given below:

```javascript
"DataScource": {
    "xAxis": {
        "style": {
            "tick-mark": { },
            "tick-mark-major": { },
            "tick-mark-minor": { },
            "label": { },
            "label-major": { },
            "label-minor": { },
            "label-context": { }
        }
    }
}
```

In the above code:

- `xAxis` is the object to customize the elements of the x-axis.
- `style` is the object to apply to style the x-axis.
- `tick-mark` is used to apply to style to both major and minor ticks.
- `tick-mark-major` is used to apply to the major ticks of the time axis.
- `tick-mark-minor` is used to apply to style to the minor ticks of the time axis.
- `label` is used to set the labels of the ticks.
- `label-major` is used to set the contextual labels of the major ticks.
- `label-minor` is used to set the contextual labels of the minor ticks
- `label-context` is used to set the contextual labels to help understand the timescale.
