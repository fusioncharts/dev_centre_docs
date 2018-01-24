---
permalink: chart-guide/real-time-charts/data-format.html
title: Real-time Data Format | FusionCharts
description: The format of real-time data depends on the number of datasets and numbr of incremental updates.
heading: Real-time Data Format
chartPresent: true
---

The format of real-time data for real-time charts depends on:

* <a href="/chart-guide/real-time-charts/data-format#number-of-datasets-to-update" class="smoth-scroll">the number of datasets you want to update for the chart</a>

* <a href="/chart-guide/real-time-charts/data-format#number-of-incremental-updates" class="smoth-scroll">the number of incremental updates you want to pass to the chart in one attempt</a>

* <a href="/chart-guide/real-time-charts/data-format#attributes-to-update-for-the-chart" class="smoth-scroll">the attributes you want to update for the chart</a>

* <a href="/chart-guide/real-time-charts/data-format#attributes-to-update-for-each-dataset" class="smoth-scroll">the attributes you want to update for each dataset</a> - like `label`, `color`, `link`, `toolText`, etc.

* <a href="/chart-guide/real-time-charts/data-format#providing-empty-data-to-the-chart" class="smoth-scroll">whether you are passing empty data to the chart</a>

* <a href="/chart-guide/real-time-charts/data-format#commands-sent-to-the-chart" class="smoth-scroll">the commands for the chart</a>


In this section, you will be shown how the data format changes depending on the above factors.

## Number of Datasets to Update

Let’s say you want to update two datasets plotted on a line chart. To do this, you need to output the data in the following format:

```javascript

&value=23|43

```

Here, the two output values, 23 and 43, are separated by the `|` (pipe character). The value specified first, 23, is set for the first dataset and the value specified second, 43, is set for the second dataset.

Similarly, if you had three datasets to update, the data will be passed in the following format:

```javascript

&value=23|43|45

```

Here, the third value, 45, is set for the third dataset.

## Number of Incremental Updates

Real-time charts let you pass multiple values for one dataset in each update.

Assume that you are working over HTTP and need to ensure that you utilize the bandwidth efficiently. Considering this, it will not be feasible to set your chart, with three datasets, to update itself every second, because this may create a strain on the server. However, you also do not want to skip the data values that you missed by not updating the data every second. To avoid this, you can provide data to the chart in the following format:

```javascript

&value=23,25,24|43,47,45|45,47,49

```

Here, the values 23, 25, and 24 correspond to the first dataset, 43, 47, and 45 correspond to the second dataset, and 45, 47, and 49 correspond to the third dataset. All values for one dataset are separated by a comma, all datasets are separated by the `|` (pipe character)

## Attributes to Update for the Chart

Assume that you plot a real-time line chart to monitor stock prices for Harry’s SuperMart. On this monitoring chart, the stock price is checked at every seventh instance of data update. You want to add a vertical trend-line that helps you keep track of every instance when the price is checked.

To do this, you can provide data to the chart in the following format

```javascript

&label=11:45&value=753|345&vline=0&vLineLabel=vLine&vLineColor=#666666&vLineThickness=2&vLineDashed=1

```

The real-time line chart thus rendered is shown below:

{% embed_all advanced-charting-real-time-charts-data-format-example-1.js %}



## Attributes to Update for Each Dataset

### The label Attribute

#### Updating the Label as a Part of Real-time Data

Consider that you are plotting a real-time multi-series line chart that indicates the load on three servers. The time is plotted on the x-axis and the corresponding load for all three servers is plotted on the y-axis. With each incremental data, you will now also have to provide the label for the x-axis along with the data value for the y-axis.

To do this, you can provide data to the chart in the following format:

```javascript

&label=11:45&value=23|43|45

```

When the chart receives this data, it shifts all existing data and labels one position to the left. Next it plots the new label on the x-axis and the three new data values on the y-axis.

#### Hiding the Label

For charts plotting a large number of data points, you may not want to render all labels on the chart to avoid cluttering. Instead you may want to show alternate labels, while updating your data every minute.

For the data label that you want to hide, you can provide your incremental data to the chart in the following format:

```javascript

&label=11:45&showLabel=0&value=23|43|45

```

The `showLabel` attribute, when set to `0`, hides the data label from the x-axis.

### The link Attribute

For real-time charts, you can render a data plot as a clickable link that opens in a new window, a pop-up window, in a frame, etc.

To do this, you can provide the incremental data to the chart in the following format:

```javascript

&label=11:45&value=23|43|45&link=showdetail.asp?server=1%26time=1145|showdetail.asp?server=2%26time=1145|showdetail.asp?server=3%26time=1145

```

The link has to be specified in the [FusionCharts link format](/advanced-charting/drill-down/linkedcharts). The link in the above data has been URL Encoded because it contains special characters like &, %, etc.

### The toolText Attribute

To update the tool-text, you can provide the corresponding incremental data to the chart in the following format:

```javascript

&label=11:45&toolText=12/3/2007 11:45:23 AM &value=23|43|45

```

### The color Attribute

To update the color, you can provide the corresponding incremental data to the chart in the following format:

```javascript

&label=11:45&value=23|43|45&color=FF0000|0372AB|FF5904

```

The colors for each dataset are separated by the `|` (pipe character). The colors specified for real-time updates will always be filled as solid colors and not gradients.

## Providing Empty Data to the Chart

To provide empty data to the chart, so that a break in the data plot (column/line/area) shows, you can provide the incremental data to the chart in the following format:

```javascript

&label=11:45&value=||

```


## Commands sent to the Chart

### The clearChart Command

To clear the historical data displayed on the chart, you can send the `clearChart` command to the server in the following format:

```javascript

&clear=1

```

### The stopUpdate Command

To stop the chart from the polling the server for real-time updates, you can send the `stopUpdate` command in the following format:

```javascript

&stopUpdate=1

```

After you have stopped updates for a chart, you can restart updates either by user interaction or by using client-side JavaScript API.

## Sending Messages Pertinent to the Message Logger

For real-time charts that show the message logger, you can update various parameters for the message logger in real-time. All these parameters and their data format have been explained in the [Message Logger](/chart-guide/real-time-charts/setting-message-logger) section.