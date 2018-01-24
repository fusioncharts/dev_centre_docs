---
permalink: gauge-and-widgets-guide/pyramid-chart/configuring-chart.html
title: Configuring Pyramid Chart | FusionCharts
description: This section talks about pyramid chart, draw a 2D pyramid with customized border, labels shown at the center of the chart, etc
heading: Configuring Pyramid Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure several functional and cosmetic properties for pyramid charts.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#drawing-a-2d-pyramid-with-customized-border-properties" class="smoth-scroll">Draw a 2D pyramid with customized border properties</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#showing-labels-at-the-center-of-the-chart" class="smoth-scroll">Show labels at the center of the chart</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#showing-labels-in-the-legend-of-the-chart" class="smoth-scroll">Show labels in the legend of the chart</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#configuring-the-position-of-the-legend-box" class="smoth-scroll">Set the position of the legend box</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#showing-values-as-percentage" class="smoth-scroll">Show values as percentage</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#slicing-out-individual-pyramid-slices" class="smoth-scroll">Slice out individual pyramid slices</a>

* <a href="/gauge-and-widgets-guide/pyramid-chart/configuring-chart#configuring-hover-effects" class="smoth-scroll">Configure hover effects</a>

## Drawing a 2D Pyramid with Customized Border Properties

By default, a pyramid chart renders as a 3D chart with a context menu that allows you to switch between the 2D and 3D modes of display. However, you can configure a pyramid chart to be rendered in the 2D mode when it first loads, without using the context menu. You can also customize the border properties of a pyramid chart for an improved visual representation.

A pyramid chart rendered  in 2D mode with customized border properties looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-1.js %}

Given below is a brief description of the attributes used to render a 2D pyramid chart with customized border properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`is2D`</td>
    <td>It is used to specify whether the pyramid chart, on loading, will be rendered in the 2D mode. Setting this attribute to `1` renders the chart in 2D, setting it to `0` (default) will render the chart in 3D.</td>
  </tr>
  <tr>
    <td>`showPlotBorder`</td>
    <td>It is used to specify whether the plot border will be shown. Setting this attribute to `1` shows the plot border, setting it to `0` (default) hides it.</td>
  </tr>
  <tr>
    <td>`plotBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the plot border, e.g. #333333.</td>
  </tr>
  <tr>
    <td>`plotBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the plot border, e.g. 3.</td>
  </tr>
  <tr>
    <td>`plotBorderAlpha`</td>
    <td>It is used to specify the transparency of the plot border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>



## Showing Labels at the Center of the Chart

A pyramid chart configured to render labels at the center looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-2.js %}

Given below is a brief description of the attribute used to render labels at the center:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLabelsAtCenter`</td>
    <td>It is used to specify whether the data labels should be shown in the center of the data plots. Setting this attribute to `1` will show the labels in the center, setting it to `0` (default) will show them on the right.</td>
  </tr>
</table>


## Showing Labels in the Legend of the chart

You can opt to show the labels in the legend box instead of showing them with the data plots. To do this, you will have to show the legend box and hide the labels for the data plots.


A pyramid chart with the labels rendered in the legend box looks like this:


{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-3.js %}


Given below is a brief description of the attributes used to show labels in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLegend`</td>
    <td>It is used to specify whether the legend box will be shown for the chart. Setting this attribute to `1` will show the legend box, setting it to `0` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`showLabels`</td>
    <td>It is used to specify whether the labels will be shown. Setting this attribute to `0` will hide the labels, setting it to `1` (default) will show them.</td>
  </tr>
</table>



## Configuring the Position of the Legend Box

By default, the legend box is placed at the bottom of the pyramid chart. You can opt to change the position of the legend box and shift it to the right.


A pyramid chart with the legend box positioned to the right looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-4.js %}

Given below is a brief description of the attribute used to configure the position of the legend box:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`legendPosition`</td>
    <td>It is used to specify the position of the legend box in the chart. Setting this attribute to `RIGHT` places the legend box to the right, setting it to `BOTTOM` (default) places it at the bottom.</td>
  </tr>
</table>



## Showing Values as Percentage

A pyramid chart configured to show percent values instead of numerical values looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-5.js %}

Given below is a brief description of the attribute used to show percent values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPercentValues`</td>
    <td>It is used to specify whether the data values on the chart will be shown as percentage values or numerical values. Setting this attribute to `1` renders the data values as percent values, setting it to `0` (default) renders them as numerical values.</td>
  </tr>
</table>



## Slicing Out Individual Pyramid Slices

A pyramid chart rendered with each slice sliced out looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-6.js %}

Given below is a brief description of the attribute used to slice out the pyramid slices:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isSliced`</td>
    <td>It is used to specify whether the pyramid slices will appear sliced out. Setting this attribute to `1` will slice out slices, setting it to `0` (default) will not slice out the slices.

If this attribute is used as a part of the `chart` object, it is applicable to all slices of the pyramid. If it is used as a part of the `data` object, then it is applicable only to the slice(s) for which it is defined.</td>
  </tr>
</table>



## Configuring Hover Effects

A pyramid chart with hover effects enabled looks like this:

{% embed_all gauge-and-widgets-guide-pyramid-chart-configuring-chart-example-7.js %}

Given below is a brief description of the attributes used to configure the hover effects:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showhovereffect`</td>
    <td>It is used to specify whether the hover effect will be enabled for the chart. Setting this attribute to `1` will enable the hover effect, setting it to `0` (default) will disable it.</td>
  </tr>
  <tr>
    <td>`hoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to fill the slice when the mouse pointer is hovered over it, e.g., #CCCCCC. </td>
  </tr>
  <tr>
    <td>`hoverAlpha`</td>
    <td>It is used to specify the transparency of the slice when the mouse pointer is hovered it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
  </tr>
  <tr>
    <td>`borderHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the plot border when the mouse pointer is hovered over it, e.g., #333333.</td>
  </tr>
  <tr>
    <td>`borderHoverAlpha`</td>
    <td>It is used to specify the transparency of the slice border when the mouse pointer is hovered it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 60.</td>
  </tr>
  <tr>
    <td>`borderHoverThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the slice border when the mouse pointer is hovered over it, e.g. 2.</td>
  </tr>
</table>