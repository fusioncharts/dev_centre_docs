---
title: Plot Types | FusionCharts
description: This article defines the plot types suported in FusionTime.
heading: Plot Types
---

In FusionTime plot represents a dataset which displays the relationship between two or more variables of a chart. Plot refers to a line in a line chart, a column in the column chart or an area in the area chart.

FusionTime supports following plot types:

* Candlestick
* Line, 
* Spline
* Step-line
* Column
* Area
* OHLC

In this article, we'll see different types of data plots to render a chart.

## Line

Let’s create a time series chart using line as a data plot showcasing online sales of SuperStore in United States of America. 

The time series chart is shown below:

{% embed_ftChartData online-sales-single-series %}

In the above chart, y-axis represents the dimension i.e. the date on which the order has been placed, whereas the x-axis shows the sales per date.

To check out the detailed step to render the above chart, click here.

## Column

To render a time series chart with **column** as data plot, set the value of `type` attribute to `column`.

The above time series chart, rendered with column plot is shown below:

{% embed_ftChart online-sales-single-series-column-data-plot %}

## Area

To render a time series chart with **area** as data plot, set the value of `type` attribute to `area`.

The above time series chart, rendered with area plot is shown below:

{% embed_ftChart online-sales-single-series-area-data-plot %}

## Spline

To render a time series chart with **spline** as data plot, set the value of `type` attribute to `smooth-line`.

Let's create a chart showcasing weather report. The time series chart looks like:

{% embed_ftChart weather-report-spline-data-plot %}

## Step-line

To render a time series chart with **step-line** as data plot, set the value of `type` attribute to `step-line`.

Let's create a chart showcasing weather report. The time series chart looks like:

{% embed_ftChart weather-report-step-line-data-plot %}

## Candlestick

To render a time series chart with **candlestick** as data plot, set the value of `type` attribute to `candlestick`.

Let's create a chart showing Apple Inc. Stock Price. The time series chart looks like:

{% embed_ftChart apple-stock-price-candlestick-data-plot %}