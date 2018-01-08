---
permalink: gauge-and-widgets-guide/linear-gauge/adding-trend-points.html
title: Adding Trend-points in Linear Gauge | FusionCharts
description: Trend points are elements that can be used to show a target value on the gauge. This section shows how to add trend-points and trend-zones in a linear gauge
heading: Adding Trend-points in Linear Gauge
chartPresent: true
---

Trend points are elements that can be used to show a target value on the gauge, for example, the target customer satisfaction score, optimum server utilization, etc.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/linear-gauge/adding-trend-points#adding-trend-points-in-a-linear-gauge" class="smoth-scroll">Add trend-points in a linear gauge</a>

* <a href="/gauge-and-widgets-guide/linear-gauge/adding-trend-points#trend-zones" class="smoth-scroll">Add trend-zones in a linear gauge</a>

## Adding Trend-points in a Linear Gauge

### Adding a Simple Trend-point

A linear gauge rendered with two trend-points showing the optimum zone of operation for a web server looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-adding-trend-points-example-1.js %}

Given below is a brief description of the attributes used to add and customize the trend-points for a linear gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-point, e.g 102. </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code for the color that will be used to render the trend-line, e.g. #CCCCCC.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>It is used to specify if the line at the trend-point will be rendered as a dashed line. Setting this attribute to `1` will render a dashed trend-line, setting it to `0` (default) will render a whole line.</td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>It is used to specify the length of each dash, in pixels, if the trend point will be rendered as a dashed line.</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>It is used to specify the gap between each dash, in pixels, if the trend point will be rendered as a dashed line.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of the trend-line, in pixels, e.g. 5.</td>
  </tr>
</table>


These attributes belong to the `points` object, which in turn belongs to the `trendPoints` object.


### Adding a Trend-point with a Marker

A linear gauge rendered with two trend-points with  markers looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-adding-trend-points-example-2.js %}

Given below is a brief description of the attributes used to add and customize a trend-point with a marker:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useMarker`</td>
    <td>It is used to specify whether a triangular marker should be rendered with the trend-point. Setting this attribute to `1` will render the marker, setting it to `0` (default) will not.</td>
  </tr>
  <tr>
    <td>`markerColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the marker, e.g. #AAA333.</td>
  </tr>
  <tr>
    <td>`markerBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the border of the marker, e.g. #444444.</td>
  </tr>
  <tr>
    <td>`markerRadius`</td>
    <td>It is used to specify the radius of the marker, in pixels, e.g. 5.</td>
  </tr>
</table>



## Trend-zones

Trend-zones are used to represent a range of values, instead of a single value, like the trend-point.

A linear gauge rendered with a trend-zone looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-adding-trend-points-example-3.js %}

Given below is a brief description of the attributes used to add a trend-zone to the linear gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-zone. For example, if you want plot a trend-zone from value 102 to 109, the start value will be 102. </td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-zone. For example, if you want plot a trend-zone from value 102 to 109, the end value will be 109. </td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify the text for the label that will be displayed for the trend-zone. For example, Recommended Range. If you do not specify a value for this attribute, the gauge displays the start value of the trend-zone.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency for the trend zone. This attribute takes values between 0 and 100, e.g. 50.</td>
  </tr>
</table>