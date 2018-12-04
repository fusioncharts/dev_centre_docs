---
title: Time Navigator | FusionCharts
description: This article defines the time navigator.
heading: Time Navigator
---

The Time Navigator component of FusionTime gives the full context of the time-series data.

The patterns of changing observation are visible in one view in this component.

There is also a focus window on this component with draggable handles. By moving the handles, you can change the time range to focus on the data specific to that time range.

<img src="{% site.baseurl %}/images/fusiontime-component-time-navigator.png" alt="Time Navigator" width="700" height="420">

The major features of **Time Navigator** include the following:

* Shows the entire underlying data (including all data series) as line plots.

* The chart canvas updates automatically every time you make a selection using the handles of the Time Navigator.

* The Time Navigator has a pair of draggable handles, which you can use to display the selected time interval in greater detail.

* The active window of the time navigator resizes itself every time you perform a relevant action, such as zoom in/out of the chart, select standard periods, change the 'Start date' or 'End date' in the date range selector, etc.

* In a multi-series chart, click on the legend to dim one particular series in the time navigator.

* You can pan the active window of the time navigator to view the data of a specific section compared to the complete data.

A sample chart is shown below:

{% embed_ftChartData online-sales-multi-variate %}

In the example given above, you can see the Time Navigator displayed right below the X-Axis. Drag the selector handles to choose a particular time period, and watch the chart in the canvas update itself accordingly. 

## Show/Hide Time Navigator

By default, FusionTime shows the Time Navigator at the bottom of every chart (and the final chart in the case of multivariate charts). However, if you don't want to display the Time Navigator, you can hide it using the `enableNavigator` attribute within the `chart` class.

Refer to the code below:

```
{
    chart: { },
    "enableNavigator": "0", // Disables time Time Navigator
    caption: {
        text: 'Global Online Sales of a SuperStore'
    }
}
```