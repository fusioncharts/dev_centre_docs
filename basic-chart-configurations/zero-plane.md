---
permalink: basic-chart-configurations/zero-plane.html
title: Configure Zero Plane for X-Axis | FusionCharts
description: Zero plane is a plane separating the positive/negative numbers on the y-axis. The zero plane appears in the column, line, scatter, bubble charts.
heading: Zero Plane
chartPresent: true
---

Zero plane is a plane separating the positive and negative numbers on the y-axis of a chart; it is rendered by default in a chart that plots both negative and positive values.

The zero plane appears in the column, line, scatter, bubble and the area charts. Additionally, scatter chart and bubble chart also support vertical zero plane on the x-axis.

This article talks about:

* <a href="/basic-chart-configurations/zero-plane#customizing-the-zero-plane-in-a-2d-and-3d-chart" class="smoth-scroll">Customizing the zero plane in a 2D and 3D chart</a>

* <a href="/basic-chart-configurations/zero-plane#configuring-the-vertical-zero-plane-in-the-scatter-and-bubble-charts" class="smoth-scroll">Configuring the vertical zero plane in the Scatter and Bubble Charts</a>

* <a href="/basic-chart-configurations/zero-plane#showinghiding-the-zero-plane-value" class="smoth-scroll">Showing/hiding the zero plane values</a>, and

* <a href="/basic-chart-configurations/zero-plane#showinghiding-the-zero-plane" class="smoth-scroll">Showing/hiding the zero plane</a>

## Customizing the Zero Plane in a 2D and 3D chart

### Zero Plane in a 2D chart

A column 2D chart with customized zero plane looks like this:

{% embed_all configuring-your-chart-zero-plane-example-1.js %}

Given below are the attributes used to customize the zero plane in a 2D chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`zeroPlaneColor`</td>
    <td>If specifies the hex code for the color that will be used to render zero plane. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`zeroPlaneThickness`</td>
    <td>Sets the thickness of zero plane(in pixels).</td>
  </tr>
  <tr>
    <td>`zeroPlaneAlpha`</td>
    <td>Sets the transparency of zero plane. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






### Zero Plane in a 3D chart

A column 3D chart with a customized zero plane looks like this:

{% embed_all configuring-your-chart-zero-plane-example-2.js %}

Given below are the attributes used to customize the zero plane in a 3D chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`zeroPlaneColor`</td>
    <td>If specifies the hex code for the color that will be used to render zero plane. e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`zeroPlaneAlpha`</td>
    <td>Sets the transparency of zero plane. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`zeroPlaneShowBorder`</td>
    <td>Set this to `1` to show the border of zero plane and `0` to hide it.</td>
  </tr>
  <tr>
    <td>`zeroPlaneBorderColor`</td>
    <td>It specifies the hex code of the color that will be used to render the border of the zero plane e.g. `#00ffaa`.</td>
  </tr>
</table>






## Configuring the vertical zero plane in the Scatter and Bubble Charts

Zero Plane is the line/plane that appears at zero x-position on canvas, when negative data is being shown on the chart. You can configure vertical zero planes for scatter and bubble charts.

A scatter chart with customized vertical zero plane looks as below:

{% embed_all configuring-your-chart-zero-plane-example-3.js %}

Given below are the attributes used to render and customize the vertical zero plane:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showVZeroPlane`</td>
    <td>Set this to `1` to show vertical zero plane and `0` to hide it.</td>
  </tr>
  <tr>
    <td>`vZeroPlaneColor`</td>
    <td>It specifies the hex code for the color that will be used to render the vertical zero plane e.g. `#00ffaa`.</td>
  </tr>
  <tr>
    <td>`vZeroPlaneThickness`</td>
    <td>Sets the thickness of the vertical zero plane(in pixels).</td>
  </tr>
  <tr>
    <td>`vZeroPlaneAlpha`</td>
    <td>Sets the transparency of vertical zero plane. Can take values from `0` (transparent) to `100` (opaque).</td>
  </tr>
</table>






## Showing/hiding the zero plane value

FusionCharts Suite XT allows you to show or hide the data value ('0') where the zero plane exists on the y-axis. A column 2D chart with the zero plane value hidden is shown below:

{% embed_all configuring-your-chart-zero-plane-example-4.js %}

Given below is the attribute used to hide the zero plane value:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showZeroPlaneValue`</td>
    <td>Set this to `1` to show zero plane value and `0` to hide it.</td>
  </tr>
</table>






<p class="text-info">In dual y-axis charts, `showPZeroPlaneValue` attribute of the chart object is used to show/hide the zero plane value for the primary y-axis and `showSZeroPlaneValue` is used to show/hide the zero plane value for the secondary y-axis.</p>

## Showing/hiding the zero plane

Zero plane can be removed in the line, scatter and bubble charts but not in the column and area charts because they use it as their base to draw. A scatter chart with the vertical zero plane hidden is shown below:

{% embed_all configuring-your-chart-zero-plane-example-5.js %}

Given below are the attributes used to show or hide the zero plane:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showZeroPlane`</td>
    <td>Set this to `1` to show horizontal zero plane and `0` to hide it.</td>
  </tr>
  <tr>
    <td>`showVZeroPlane`</td>
    <td>Set this to `1` to show vertical zero plane and `0` to hide it.</td>
  </tr>
</table>






