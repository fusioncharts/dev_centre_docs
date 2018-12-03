---
title: Reference Line | FusionCharts
description: This article defines the reference line.
heading: Reference Line
---

A Reference Line is essentially an arbitrary fixed line (mapped to one of the axes), which indicates a specific value. It helps viewers to quickly compare values of individual data plots with a predefined value.

When mapped to the y-axis, a reference line is a horizontal line that corresponds to a particular value on the axis. It has a label, which is displayed as text right below the line when the viewer hovers the mouse pointer over the line. 

{% embed_ftChart online-sales-single-series-column-data-plot-reference-line %}

In the example given above, a reference line appears, parallel to the time axis. Notice that the label displayed at the beginning of the line along the Y-axis shows the value of the reference (**Daily Target** for the above chart).

## Configure the Reference Line

You can configure reference lines using the following attributes of the `referenceLine` object:

* Use the `label` attribute to set the value of the label.

* Use the `value` attribute to set the value, at which the reference line should appear.

Refer to the code given below:

```
{
    type: 'timeseries',
    renderAt: 'container',
    width: '95%',
    height: 450,
    dataSource: {
        data: dataStore,
        chart: {
        },
        caption: {
            text: 'Online Sales of a SuperStore in the US'
        },
        yaxis: {
            "plot": {
                "value": "Sales",
                "type": "line"
            },
            // Reference Line
            "referenceLine": [{
                "label": "Daily Target",
                "value": 300
            }],
        }
    }
}
```

Note: You can set the top and bottom positioning of the reference line label `vertical-align` attribute.