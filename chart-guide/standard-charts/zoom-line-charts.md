---
title: Zoom Line Chart | FusionCharts
description: The FusionCharts Suite XT zoom line chart is a special type of multi-series line chart that allows analysis of data at macroscopic and microscopic levels.
heading: Zoom Line Chart
breadcrumb: [["Home", "/"], ["Zoom Line Chart"]]
---

The FusionCharts Suite XT zoom line chart is a special type of multi-series line chart that allows analysis of data at macroscopic and microscopic levels. It can easily plot thousands of data points, which can produce indecipherable results if plotted on an ordinary line chart.

## Create a Zoomline Chart

As an example, we will create a zoom line chart that plots the number of unique website visits to the harrysfoodmart.com and the harrysfashion.com websites for every day of the last year.

To create a zoom line chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a zoom line chart, set `zoomline`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes you can check the API reference page of zoomline chart.

The zoom line chart thus created looks like this:

{% embed_all standard-charts-zoom-line-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/JU3Ud/ "@@open-newtab") to edit the zoomline chart.

As seen in the chart above, at the time of rendering, the zoom line chart displays a macroscopic view of the data. The data is neatly compressed, so that all of it fits into the width of the chart. When the user selects a segment of the line plot by dragging the mouse cursor across the canvas, the selected portion expands to occupy the entire width of the chart. 

At this point, the scrollbar becomes functional, allowing the user to view the data that precedes or follows the selected section of data. To analyze the data in greater detail, the user can repeat the select and zoom process several times over (until further zooming is not possible). The chart can be restored to its original macroscopic display mode by clicking the `Reset Chart` button on the toolbar.

The chart can be switched to pin mode, in pin mode - a ghost of the selected line segment gets imprinted on the canvas, thus enabling the user to compare the pinned segment with the rest of the chart simply by scrolling through. The pinned segment can be dragged to any part of the canvas.

> The performance of a zoom line chart is based on the technical capabilities of a browser. A typical zoom line chart can render up to 10,000 data points without any performance issues.

> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points.

## Create a Zoom-line Dual Y-axis Chart

The FusionCharts Suite XT **zoom-line dual y-axis** chart, like the zoom-line chart, is used to analyze data at macroscopic and microscopic levels. With the dual y-axis, this chart can be used to plot data that belongs to datasets having different numeric units on the same chart—an advantage over using the conventional zoom-line chart.

Another advantage of using the zoom-line dual y-axis chart is when you want to compare two datasets where the values of one dataset are spread over a smaller interval, while the values of another have large intervals between them. In this case, if the zoom-line chart was used, the dataset with the smaller interval will be plotted as a straight line.

To create a zoom-line dual y-axis chart, set the `type` attribute to `zoomlinedy`.

For a detailed list of attributes you can check the API reference page of zoom-line dual y-axis chart.

The chart below shows a zoom-line dual y-axis chart created to compare unique footfall with the sales (in dollars), for each day of the previous year.

{% embed_all standard-charts-zoom-line-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/mvsjs4ag/ "@@open-newtab") to edit the zoom line dual y-axis chart.

## Limit the Number of Data Labels

By default the zoom line chart displays as many data labels as can be accommodated without causing a clutter. 

However, it is also possible to limit the maximum number of data labels that are visible at any given time by specifying the number in `numVisibleLabels` attribute. In the sample given below, the number of labels rendered on one screen is `12`. To look at the preceding or following labels, you will need to use the scroll bar.

Refer to the code given below:

```
{
  "chart": {
    "numVisibleLabels": "12"
  },
}

```
A zoom line chart with the maximum number of labels limited looks like this:

{% embed_chart standard-charts-zoom-line-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/t19c4y4e/ "@@open-newtab") to edit the zoomline chart.

> **numVisibleLabels** attribute only limits the number of visible data labels, it has no effect on the number of visible data points.

## Set the Distance between the Data Plots

In zoom line chart, set the distance (in pixels) between consecutive data plots using the  `pixelsPerPoint` attribute. A greater number of pixels will result in a higher quality display. 

Refer to the code given below:

```
{
  "chart": {
    "pixelsPerPoint": "40"
  },
}

```
> The anchors in the zoom-line chart cannot be made clickable, because FusionCharts does not include the supporting API for defining an external URL for the data points.

A zoom line chart with the distance between the consecutive data plots configured looks like this:

{% embed_chart standard-charts-zoom-line-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/v60znb4c/ "@@open-newtab") to edit the zoomline chart.

## Set the Criteria for Anchor Display

In order to reduce clutter, you can make anchors visible only when the distance between consecutive data points reaches a certain minimum value. For instance, you can instruct the chart to show anchors only when consecutive data points are `25 pixels` apart. 

If the chart contains plenty of data, then anchors will not be visible in macroscopic view, where the distance between consecutive data points is less than 25 pixels. The anchors become visible only when the chart is zoomed and the distance between consecutive data points increases to 25 pixels or above.

To specify the minimum distance between the consecutive data points, set the value for `anchorMinRenderDistance` attribute in pixels.

Refer to the code given below:

```
{
  "chart": {
    "anchorMinRenderDistance": "15"
  },
}

```
A zoom line chart with the criteria for anchor display defined looks like this:

{% embed_chart standard-charts-zoom-line-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/9nkgfaho/ "@@open-newtab") to edit the zoomline chart.

## Pre-select the Number of Visible Data Plots

By default, the zoom line chart displays all the data plots in a single screen. However, it is possible to pre-select the maximum number of data plots that will be visible on a single screen at the time of rendering.

To pre-select the number of data plots for on your screen, follow the steps given below:

* Set the `displayStartIndex` attribute to specify the index of the data label that will appear to the extreme left of the chart.

* Set the `displayEndIndex` attribute to specify the index of the data label that will appear to the extreme right of the chart.

Refer to the code given below:

```
{
  "chart": {
    "displayStartIndex": "49",
    "displayEndIndex": "253"
  }
}
```
A zoom line chart rendered with pre-selected number of data plots looks like this:

{% embed_chart standard-charts-zoom-line-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/2fqud5w1/ "@@open-newtab") to edit the zoomline chart.

## Customize the Appearance of a Zoom-line Chart

FusionCharts Suite XT includes several options for customizing the appearance of a zoom line chart. Appearance of chart elements such as the scroll bar and toolbar can be configured.

The attributes to configure the `toolBar` button of the charts are:

* Set the hex code using the `toolbarButtonColor`, to specify the color of the toolbar buttons.

* Set the `showToolBarButtonToolText` attribute to `0` to disable the display of tooltips for toolbar buttons. The default value for this attribute is `1`.

Refer to the code given below:

```
{
  "chart": {
    "toolbarButtonColor": "ff0000",
    "showToolBarButtonToolText": "0"
  }
}
```

The chart will look like as shown below:

![ZoomLine chart]({% site.baseurl %}/images/standard-charts-zoom-line-chart-image-1.png)

To configure the zoom panning of the chart:

* Set the hex code using `zoomPaneBgColor` attribute to specify the background color of the zoom pane.

* Set the transparency (range between 0 to 100) of the zoom pane using `zoomPaneBgAlpha` attribute.

Refer to the code given below:

```
{
  "chart": {
    "zoomPaneBgColor": "#a7d7f9",
    "zoomPaneBgAlpha": "50"
  }
}
```
The chart will look like as shown below:

![ZoomLine chart]({% site.baseurl %}/gif/standard-charts-zoomline-gif-1.gif)

To set the pin panning of the chart:

* Specify the thickness of the pinned line using `pinLineThicknessDelta` attribute. The pinned line is rendered only when the chart is put to pin line mode.

* Specify the hex color code of the background using `pinPaneBgColor` attribute.

* Specify the transparency (range between 0 to 100) of the pin pane using `pinPaneBgAlpha` attribute.

Refer to the code given below:

```
{
  "chart": {
    "pinLineThicknessDelta": "5",
    "pinPaneBgColor": "#87919b",
    "pinPaneBgAlpha": "50"
  }
}
```
The chart will look like as shown below:

![ZoomLine chart]({% site.baseurl %}/gif/standard-charts-zoomline-gif-2.gif)

The list of attributes to set the zooming mode of the zoomout button are: 

* Specify the `btnResetChartTooltext` attribute to replace the default tooltext of the **Reset Chart** button with provided string.

* Specify the `btnZoomOutTooltext` attribute to replace the default tooltext of the **Zoom Out** button with provided string.

* Specify the `btnSwitchToZoomModeTooltext` attribute to replace the default tooltext of **Switch to Zoom Mode** with provided string.

* Specify the `btnSwitchToPinModeTooltext` attribute to replace the default tooltext of **Switch to Pin Mode** button with provided string.

Refer to the code given below:

```
{
  "chart": {
    "btnResetChartTooltext": "Want to Reset? Go for it.",
    "btnZoomOutTooltext": "Zoom Out the Chart",
    "btnSwitchToZoomModeTooltext": "Yes",
    "btnSwitchToPinModeTooltext": "Switch on the Pin Mode",
  }
}
```
The chart will look like as shown below:

![ZoomLine chart]({% site.baseurl %}/gif/standard-charts-zoomline-gif-3.gif)

To configure the scroll bar of the chart:

* Set the hex code to `scrollColor` attribute to specify the color for the scroll bar.

* Specify the height of the scroll bar using `scrollHeight` attribute.

Refer to the code given below:

```
{
  "chart": {
    "scrollColor": "#bdbdbd",
    "scrollHeight": "15"
  }
}
```
The configured zoom line chart looks like:

{% embed_chart standard-charts-zoom-line-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/65jv5ohb/ "@@open-newtab") to configure the above attributes.