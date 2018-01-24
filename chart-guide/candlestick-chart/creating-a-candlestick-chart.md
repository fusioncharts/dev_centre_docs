---
permalink: chart-guide/candlestick-chart/creating-a-candlestick-chart.html
title: Creating a Candlestick Chart | FusionCharts
description: The FusionCharts Suite XT candlestick chart offers you a powerful and interactive interface to plot your stock data.
heading: Creating a Candlestick Chart
chartPresent: true
---

A candlestick chart is widely used for applications that require analysis of equity and commodity prices. It allows you to show the opening price, closing price, highest trading price, lowest trading price, and the trade volume on a single chart. A combination of the line and bar charts, a candlestick chart represents the range of price movement for a specific time interval.

The FusionCharts Suite XT candlestick chart offers you a powerful and interactive interface to plot your stock data. It offers the following features:

* Integrated price and volume plot, where the volume plot can be turned on or off

* Multiple chart options for price plotting - candlestick / bar / line

* Interactive tool tip and customizable hover bar

* Option to plot trend lines and zones on the chart

* Option to plot any number of custom trend sets on the chart, which can be customized to show technical indicators

* Ability to provide missing data

* Ability to highlight specific candles

* Option to draw vertical indicator lines at any point on the x-axis

In this section, you will be shown how you can create a simple candlestick chart.

## Creating a Simple Candlestick Chart

As an example, we will create a candlestick chart that shows the daily stock price for Harry’s SuperMart (stock name HRYS) for the last two months.

The candlestick chart thus created looks like this:

{% embed_all chart-guide-candlestick-chart-creating-a-candlestick-chart-example-1.js %}

In the chart above, the price chart is rendered in the first half of the candlestick chart while the volume chart is rendered in the second half.

Given below is a brief description of the attributes used to create a candlestick chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the data item. The label is rendered along the x-axis.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>This attribute belongs to the `category` object as well as the `data` object.

When used with the `category` object, it is used to specify the numerical position of a category on the x-axis.

When used with the `data` object, it is used to specify the numerical position of a candlestick point on the x-axis. </td>
  </tr>
  <tr>
    <td>`open`</td>
    <td>It is used to specify the opening price of a data item.</td>
  </tr>
  <tr>
    <td>`close`</td>
    <td>It is used to specify the closing price of a data item.</td>
  </tr>
  <tr>
    <td>`high`</td>
    <td>It is used to specify the highest price reached by a data item.</td>
  </tr>
  <tr>
    <td>`low`</td>
    <td>It is used to specify the lowest price reached by a data item.</td>
  </tr>
  <tr>
    <td>`volume`</td>
    <td>It is used to specify the volume of the transaction.

If you do not specify the volume for any of the data items, the volume chart will not render.</td>
  </tr>
</table>