---
permalink: chart-guide/bubble-and-xy-charts/drawing-regression-lines-in-the-bubble-and-xy-charts.html
title: Drawing Regression Lines in the Bubble and XY Charts | FusionCharts
description: For scatter and bubble charts, regression lines can be drawn based on the values provided to the charts.
heading: Drawing Regression Lines in the Bubble and XY Charts
chartPresent: true
---

## Regression Lines in Scatter and Bubble charts

In  scatter and bubble charts, each data point has two distinct numeric values: the __x__ value with respect to the x-axis and the __y__ value with respect to the y-axis.

A regression line, rendered as a straight line, is used to show the trend of __y__ values with respect to the __x__ values or the trend of __x__ values with respect to the __y__ values. A regression line, therefore, can be used to derive a particular trend from the scattered data points in the chart canvas and predict values accordingly. For example, regression lines can be used to find trends and predict future sales, stock prices, currency exchange rates, productivity gains resulting from a training program, and so on.

For scatter and bubble charts, regression lines can be drawn based on the values provided to the charts.

There are several methods to calculate and draw regression lines; scatter charts, using linear regression, use the __least-squares__ deviation method (also known as the least absolute deviation method). This method calculates the best-fitting straight-line for the observed data by minimizing the sum of the squares of the vertical deviation of each data point from the line (if a point lies on the fitted line exactly, then its vertical deviation is 0). As the deviation values are first squared and then summed, there are no cancellations between positive and negative values.

A scatter chart with regression lines looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-7.js %}

Given below is a brief description of the attribute used to show regression lines:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showRegressionLine`</td>
    <td>It is used to specify whether a regression line will be shown for the chart. Setting this attribute to `1` will show the regression line, setting it to `0` (default) will hide it. This attribute belongs to the `dataset` object.</td>
  </tr>
</table>


### Modes of Regression

Regression lines can be drawn in one of the following modes:

*  **Y** on **X**: (Default  mode) Used when __y__ values are predicted, or a trend of __y__ values is calculated, based on the __x__ values

* **X** on **Y**: Used when __x__ values are predicted, or a trend of __x__ values is calculated, based on the __y__ values

The scatter chart with regression lines shown above uses the **Y on X** mode.

The same chart with regression lines drawn using the **X on Y** mode looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-8.js %}

Given below is a brief description of the attributes used to set the mode and customize regression lines:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showYOnX`</td>
    <td>It is used to specify the mode in which a regression line will be drawn. Setting this attribute to `0` will draw the regression line in X on Y mode , setting it to `1` (default) will draw the regression line in Y on X mode. This attribute belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`regressionLineColor`</td>
    <td>It is used to specify the hex code of the color that will be used to draw the regression line. </td>
  </tr>
  <tr>
    <td>`regressionLineThickness`</td>
    <td>It is used to specify the thickness of the regression line. </td>
  </tr>
  <tr>
    <td>`regressionLineAlpha`</td>
    <td>It is used to specify the transparency of the regression line. This attribute takes values between `0` (transparent) and `100` (opaque).</td>
  </tr>
</table>

<p class="text-info">

The formulae used to draw the regression lines for both the modes are given below:

<br>

**Y on X**: The regression equation of **Y on X** is the equation of the best fitting straight line in the form __y=a+bx__, where __x__ is the explanatory variable and __y__ is the dependent variable and __b=(n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σx² – (Σx)²)__.

<br>

**X on Y**: The regression equation of **X on Y** is the equation of the best fitting straight line in the form __x=a+by__, where __y__ is the explanatory variable and __x__ is the dependent variable and __b=(n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σy² – (Σy)²)__.

</p>