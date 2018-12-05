---
title: Time Navigator | FusionCharts
description: This article defines the time navigator.
heading: Time Navigator
---

In FusionTime, the time navigator facilitates you to focus on details in a specific time period while still staying in context of the whole timeline. The time navigator plots the whole set of data in a rectangular box below the time axis. It gives you an idea of what is there in any part of the timeline that is currently out of focus. 

The major features of **Time Navigator** include the following:

* Shows the entire underlying data (including all data series) as data plots, in general line.

* Has a scroll bar with scroll buttons at both the ends.

* Has an active window with a pair of draggable handles which you can use to display the selected time period.

* You can pan the active window of the time navigator to view the data of a specific section compared to the complete data.

* The active window of the time navigator resizes itself every time you perform a relevant action, such as zoom in/out of the chart, select standard time periods from the standard range selector, change the 'Start date' or 'End date' in the custom range selector, etc.

* The chart canvas updates automatically every time you make a selection using the handles of the Time Navigator.

* In case of multivariate charts, there is only one common time navigator for all the canvases.

The time navigator is shown in the image below:

<img src="{% site.baseurl %}/images/fusiontime-component-time-navigator.png">

In this article, we will discuss about the different interactions of the time navigator and how to hide the time navigator.

## Zoom in/out

You can use the handles on either side to select a longer or shorter period of time. The data plot in the canvas zooms in/out respectively. This behavior is also applicable when you zoom in/out from the chart canvas, i.e., with the interaction in the chart canvas the time navigator gets updated accordingly. Refer to the image below: 

![Zoom using Time navigator]({% site.baseurl %}/gif/time-axis-fusionCharts.gif)

## Pan using the navigator

You can pan across the time navigator and watch the data plots in the canvas pan in sync with the active window. In case of a multivariate chart, the plots in all the canvases pan along with the Navigator. Refer to the image below:

![Pan using Time navigator]({% site.baseurl %}/gif/fusiontime-nav-pan.gif)

## Active window labels 

When you hover the mouse pointer on the active window of the time navigator, the time labels appear on  the both the ends of the active window showing the start date/time and the end date/time. You can drag these labels to increase or decrease the active window. Refer to the image below:

![Time navigator labels]({% site.baseurl %}/images/fusiontime-nav-labels.png)

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