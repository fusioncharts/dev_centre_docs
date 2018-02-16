---
permalink: gauge-and-widgets-guide/angular-gauge/adding-trend-points.html
title: Adding Trend Points in Angular Gauge | FusionCharts
description: This section talks about adding simple trend point, show trend markers, create trend arcs, customize trend arcs, etc.
heading: Adding Trend Points in Angular Gauge
chartPresent: true
---

Trend points are elements that you use to show a target value on the gauge. For example, while plotting the average customer satisfaction score for the current year, you might also want to show the average score for the last year for comparison. This average score for the last year can be shown as a trend point on the gauge.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/adding-trend-points.html#adding-a-simple-trend-point">Add a simple trend point</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/adding-trend-points.html#showing-trend-markers">Show trend markers</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/adding-trend-points.html#creating-a-trend-arc">Create trend arcs</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/adding-trend-points.html#customizing-a-trend-arc">Customize trend arcs</a>

## Adding a Simple Trend Point

An angular gauge rendered with a trend-point showing last year’s average customer satisfaction score looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-adding-trend-points-example-1.js %}

Given below is a brief description of the attributes used to add and customize a simple trend point to the gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend point. For example, if you plot a trend arc from value 102 to 109, the starting value will be 102. </td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to display a label for the trend point. If you do not specify a label, then the data value that the trend point indicates is displayed.</td>
  </tr>
  <tr>
    <td>`valueInside`</td>
    <td>It is used to specify whether the trend point value will be rendered inside the gauge or outside it. Setting this attribute to 1 will place the value inside the gauge, setting it to 0 (default) will place it outside it.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend point and its associated text, e.g. #CCCCCC.</td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>It is used to specify the thickness of the trend point, in pixels, e.g. 5.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>It is used to specify the radius of the trendpoint, in pixels, e.g. 3.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>If you're showing the trend point as line, this attribute is used to specify whether you want to render the trend point as a dashed line. Setting this attribute to 1 will render the trend line as a dashed line, setting it to 0 (default) will render it as a whole line.</td>
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
    <td>`trendValueDistance`</td>
    <td>It is used to specify the distance, in pixels, between a trend line and its corresponding value.</td>
  </tr>
</table>


These attributes belong to the `point` object, which in turn belongs to the `trendpoints` object.





## Showing Trend Markers

For each trend point, you can also show a triangular marker and customize it.

An angular gauge rendered with a marker for the trend point looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-adding-trend-points-example-2.js %}

Given below is a brief description of the attributes used to show and customize a trend marker:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useMarker`</td>
    <td>It is used to specify whether a marker will be rendered for each trend point on the gauge. Setting this attribute to 1 will render a marker, setting it to 0 (default) will not render a marker. </td>
  </tr>
  <tr>
    <td>`markerColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the marker, e.g. #f1f1f1</td>
  </tr>
  <tr>
    <td>`markerBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the border of the marker, e.g. #666666.</td>
  </tr>
  <tr>
    <td>`markerRadius`</td>
    <td>It is used to specify the radius of the marker, in pixels.</td>
  </tr>
  <tr>
    <td>`markerTooltext`</td>
    <td>It is used to specify the tool-tip text that will be rendered when the mouse pointer is hovered over the marker.</td>
  </tr>
</table>






## Creating a Trend Arc

You can also create trend-arcs to represent a range of values, instead of a single value.

An angular gauge rendered with a trend arc looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-adding-trend-points-example-3.js %}

Given below is a brief description of the attributes used to create a trend arc:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend arc. For example, if you want to plot a trend arc from point 102 to 109, the starting value will be 102.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend arc. For example, if you want to plot a trend arc from point 102 to 109, the ending value will be 109.</td>
  </tr>
</table>






## Customizing a Trend Arc

An angular gauge rendered with trend arc customized for its functional and cosmetic properties looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-adding-trend-points-example-4.js %}

Given below is a brief description of the attributes used to customize a trend arc:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>It is used to specify the radius of the trend arc, in pixels, e.g. 180.</td>
  </tr>
  <tr>
    <td>`innerRadius`</td>
    <td>It is used to specify the radius of the inner side of the arc, e.g. 5.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend arc, e.g. #0075c2.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>It is used to specify the transparency of the trend arc, e.g. 100.</td>
  </tr>
  <tr>
    <td>`showBorder`</td>
    <td>It is used to specify whether a border will be shown around the trend arc. Setting this attribute to 0 will hide the border around the arc, setting it to 1 (default) will show the border.</td>
  </tr>
  <tr>
    <td>`borderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the trend arc border, e.g. #000000.</td>
  </tr>
</table>