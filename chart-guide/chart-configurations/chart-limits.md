---
title: Chart Limits | FusionCharts
description: Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits.
heading: Chart Limits
---

Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits, it also allows you to specify them explicitly.

The axis limits encompass all values present in the chart; no data value in the chart can be less than the minimum y-axis value or greater than the maximum y-axis value. If an axis limit outside of this range is specified, FusionCharts Suite XT will automatically adjust it.

Let's check how to customize the chart limits.

## Set Chart Limits Explicitly

You can set custom y-axis limits as per your requirement. To do so, the following attributes are used:

* Set the lower limit of the y-axis using the `yAxisMinValue` attribute. 

* Set the upper limit of the y-axis using the `yAxisMaxValue` attribute.

Refer  to the code below:

```json
{
    "chart": {
        "yAxisMaxValue": "2500000",
        "yAxisMinValue": "1000000"
    }
}
```

The chart with custom y-axis limits will look like as shown below:

{% embed_chart chart-configurations-chart-limits-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/8qfgrdxw/) to edit the above chart.

## Set Y-axis Minimum value

You can choose to set the y-axis lower limit to `0` (zero) or let the y-axis lower limit adapt itself to the values provided to the chart. To do so, set the `setAdaptiveYMin` attribute to `1`. By default, this attribute is set to `0`.

Refer to the code below:

```json
{
    "chart": {
        "setAdaptiveYMin":"1"
    }
}
```

A chart with adaptive minimum value for the y-axis will look like as shown below:

{% embed_chart chart-configurations-chart-limits-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/cs89448w/) to edit the above chart.

## Set Axis Limits for Dual Y-axis Charts

In case of dual y-axis charts, you can set custom y-axis limits for both the primary and secondary y-axes. To do so, the following attributes are used:

* Set the lower limit of the primary y-axis using the `pYAxisMinValue` attribute.

* Set the upper limit of the primary y-axis using the `pYAxisMaxValue` attribute.

* Set the lower limit of the secondary y-axis using the `sYAxisMinValue` attribute.

* Set the upper limit of the secondary y-axis using the `sYAxisMaxValue` attribute.

Refer to the code below:

```json
{
    "chart": {
        "pYAxisMinValue": "1000",
        "pYAxisMaxValue": "25000",
        "sYAxisMinValue": "1400",
        "sYAxisMaxValue": "1700"
    }
}
```

A chart with explicitly defined limits for the primary and secondary y-axis looks like as shown below:

{% embed_chart chart-configurations-chart-limits-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/4azzajgL/) to edit the above chart.

## Set same Axis Limits for Primary and Secondary Y-axes

Configure your charts so that the chart limits for the primary and secondary y-axes are synced. For charts with static data, this can be done by specifying the minimum and maximum y-axis values, but this won't work for dynamic chart data. For dynamic charts, set the `syncAxisLimits` attribute to `1`. 

Refer  to the code below:

```json
{
    "chart": {
        "syncAxisLimits": "1"
    }
}
```

A chart with synced chart limits for the primary and secondary y-axis looks like as shown below:

{% embed_chart chart-configurations-chart-limits-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/7wo4mv5r/) to edit the above chart.

## Show/Hide Y-axis Values

By default, all the y-axis values are visible. You can hide all the y-axis values or only the maximum and minimum y-axis values showing the rest. To do so, the following attributes are used:

* Set the `showYAxisValues` attribute to `0` to hide all the y-axis values. By default, it is set to `1` and the all the values are visible.

Refer  to the code below:

```json
{
    "chart": {
        "showYAxisValues": "0"
    }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-chart-limits-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/14srsdrw/) to edit the above chart.

* Set the `showLimits` attribute to `0` to hide the maximum and minimum y-axis values. By default, it is set to `1`, and the values are visible. This attribute overrides the setting of the `showYAxisValues`.

Refer  to the code below:

```json
{
    "chart": {
        "showLimits": "0"
    }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-chart-limits-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/h2fzxqbr/) to edit the above chart.