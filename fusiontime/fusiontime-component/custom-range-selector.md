---
title: Custom Range Selector | FusionCharts
description: This article outlines the steps to set custom range selector.
heading: Custom Range Selector
---

A custom range selector is an extension which allows you to set the **from** and **to** date/time. It is useful when you already know the exact start and end date/time for which you want to see the data. The custom range selector appears on the top-right corner of the chart canvas.

A custom range selector appears as shown in the image below:

<img src="{% site.baseurl %}/images/fusiontime-component-custom-range-selector.png" alt="Custom Range Selector" width="700" height="420">

## Set custom date and time

To set the custom date and time follow the steps below:

* Click on the custom range selector.

* A calendar widget appears, select the date from the widget, or type in the text box.

* After setting the date, set the time from the drop-down boxes. The option to set the time only appears if the data is shown in terms of `hours`, `minutes`, `seconds` or `milliseconds`.

* Click `Apply` to view the changes. 

A multi-series chart with custom range selector is shown below:

{% embed_ftChart online-sales-multi-series %}

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