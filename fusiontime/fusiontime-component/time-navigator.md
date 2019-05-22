---
title: Time Navigator | FusionCharts
description: This article defines the time navigator.
heading: Time Navigator
---

The time navigator component in FusionTime gives the pattern of complete data. Using the active window, one can narrow the focus to a specific time period without losing the context of the entire data.

The time navigator component is drawn below the time axis of a FusionTime chart. You can see it in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-time-navigator.png">

The major features of **Time Navigator** include the following:

- Shows the entire underlying data (including all data series) as data plots.

- Has a scroll bar with scroll buttons at both the ends.

- Has an active window with a pair of draggable handles which you can use to display the selected time period.

- You can pan the active window of the time navigator to view the data of a specific section in greater details in the chart shown above.

- The active window of the time navigator resizes itself every time you perform a relevant action, such as zoom in/out of the chart, select standard time periods from the standard range selector, change the date/time in the custom range selector, etc.

- The chart canvas updates automatically every time you make a selection using the handles of the Time Navigator.

- In case of multivariate charts, there is only one common time navigator for all the canvases.

In this article, we will discuss about the different interactions of the time navigator and how to hide the time navigator.

## Zoom In/Out

You can use the handles on either side of the active window to select a time period. The data plot in the canvas zooms in/out respectively. This behavior is also applicable when you zoom in/out from the chart canvas, i.e., with the interaction in the chart canvas the time navigator gets updated accordingly. Refer to the image below:

![Zoom using Time navigator](/gif/fusiontime-nav-zoom.gif)

## Pan the Active Window

You can pan the active window across the time navigator and see the data plots in the canvas update according to the time spread of the active window. Refer to the image below:

![Pan using Time navigator](/gif/fusiontime-nav-pan.gif)

## Active Window Labels

When you hover the mouse pointer over the active window of the time navigator, the time labels appear on both ends of the active window. These labels show the start date/time and the end date/time of the plots in the main chart canvas shown above. You can drag these labels to change the active window.

Refer to the image below:

![Time navigator labels](/gif/fusiontime-nav-labels.gif)

## Show/Hide Time Navigator

By default, FusionTime shows the Time Navigator at the bottom of the chart. However, if you don't want to display the Time Navigator, you can hide it using the `enableNavigator` attribute within the `chart` object.

Click [here](https://jsfiddle.net/fusioncharts/975vyr12/) to see a live chart with Time Navigator disabled.

Refer to the code below:

```javascript
{
        data: dataStore,
        caption: {
            text: 'Online Sales of a SuperStore'
        },
        chart: {
      enableNavigator: "0" // Disables Time Navigator
    }
    }
```