---
title: Chart Limits | FusionCharts
description: Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits.
heading: Chart Limits
breadcrumb: [["Home", "/"], ["Chart Limits"]]
---

Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits, it also allows you to specify them explicitly.

The axis limits encompass all values present in the chart; no data value in the chart can be less than the minimum y-axis value or greater than the maximum y-axis value. If an axis limit outside of this range is specified, FusionCharts Suite XT will automatically adjust it.

Let's check how to customize the chart limits.

## Set chart limits explicitly

You can set custom y-axis limits as per your requirement. To do so, follow the steps given below:

* Set the lower limit of the y-axis using the `yAxisMinValue` attribute. 

* Set the upper limit of the y-axis  using the `yAxisMaxValue` attribute.

Refer  to the code below:

```
{
    "chart": {
        ...
        "yAxisMaxValue": "2500000",
        "yAxisMinValue": "1000000"
    },

```

The chart with custom y-axis limits will look like as shown below:

<chart>

## Set y-axis minimum value based on data values

You can choose to set the y-axis lower limit to `0` (zero) or let the y-axis lower limit adapt itself to the values provided to the chart. To do so, set the `setAdaptiveYMin` attribute to `1`. By default, this attribute is set to `0`.

A chart with adaptive minimum value for the y-axis will look like as shown below:

<chart>

## Set axis limits for charts with dual y-axis

In case of dual y-axis charts, you can set custom y-axis limits for both the primary and secondary y-axes. To do so, follow the steps given below:

* Set the lower limit of the primary y-axis using the `pYAxisMinValue` attribute.

* Set the upper limit of the primary y-axis using the `pYAxisMaxValue` attribute.

* Set the lower limit of the secondary y-axis using the `sYAxisMinValue` attribute.

* Set the upper limit of the secondary y-axis using the `sYAxisMaxValue` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "pYAxisMinValue": "1000",
        "pYAxisMaxValue": "25000",
        "sYAxisMinValue": "1400",
        "sYAxisMaxValue": "1700",
        "theme": "fint",
        "showValues": "0"
    },

```

A chart with explicitly defined limits for the primary and secondary y-axis looks like as shown below:

<chart>

## Set same axis limits for primary and secondary y-axes

Configure your charts so that the chart limits for the primary and secondary y-axes are synced. For charts with static data this can be done by specifying the minimum and maximum y-axis values, but this won't work for dynamic chart data. For dynamic charts, set the `syncAxisLimits` attribute to `1`. 

A chart with synced chart limits for the primary and secondary y-axis looks like as shown below:

<chart>

## Show/hide y-axis values

By default, all the y-axis values are visible. You can hide all the y-axis values or only the maximum and minimum y-axis values showing the rest. To do so, follow the steps given below:

* Set the `showYAxisValues` attribute to `0` to hide all the y-axis values. By default, it is set to `1` and the all the values are visible.

Refer to the code below:

**INSERT CODE**

The chart will look like as shown in the image below:

<CHART> 

* Set the `showLimits` attribute to `0` to hide the maximum and minimum y-axis values. By default, it is set to `1` and the values are visible. This attribute overrides the setting of the `showYAxisValues`.

Refer to the code below:

**INSERT CODE** 

The chart will look like as shown in the image below:

<chart> 

