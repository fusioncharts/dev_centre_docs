---
title: Custom Range Selector | FusionCharts
description: This article outlines the steps to set custom range selector.
heading: Custom Range Selector
---

A custom range selector allows you to set the `**from**` and `**to**` date and time for which you want to visualize the data for better analysis. You can easily do this using the date range chooser. The custom range selector is useful when you already know the date range for which you want to analyze the data. 

Imagine a situation where you are plotting a chart over a period of 10 years (2006-2016). Out of this huge data, you are interested in analyzing the data for a specific date range (for example, from 1st April 2010 to 30th June 2011). 

The date/time range can be set in two ways:

* The required date can be typed in into the input boxes.

* The required date can be selected from the calendar input that is rendered when the user clicks inside the input box.

A range selector appears as shown in the image below:

<img src="{% site.baseurl %}/images/fusioncharts-component-custom-range-selector.png" alt="Custom Range Selector" width="700" height="420">

## Set custom date and time

To set the custom date and time follow the steps below:

* Click on the custom range selector.

* A calendar widget appears, select the date from the widget, or type in the text box.

* After setting the date, set the time from the drop-down boxes. The option to set the time only appears if the data is shown with respect to `hours`, `minutes`, `seconds` or `milliseconds`.

* Click Apply to view the changes. 

After applying the changes, hover the mouse pointer over a data plot to see details about the underlying data in a tooltip. A multi-series chart with custom range selector is shown below:

{% embed_ftChartData online-sales-multi-series %}

## Show/Hide Custom Range Selector

Custom Range Selector is visible in every chart, by default. However, you can turn it off if you want, by setting the value of the `enabled` attribute within the `customRangeSelector` extension of the `extensions` object to `0`.

Refer to the code below:

```
{
    type: 'timeseries',
    renderAt: 'container',
    width: "95%",
    height: 650,
    dataSource: {
        data: fusionTable,
        chart: {},
        caption: {
            text: 'Online Sales of a SuperStore in India & the US'
        },
        // Show/Hide Custom Range Selector
        "extensions": {
			"customRangeSelector": {
				"enabled": "0"
			}
		}
    }
}
```