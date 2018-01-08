---
permalink: gauge-and-widgets-guide/funnel-chart/configuring-chart.html
title: Configuring Funnel Chart | FusionCharts
description: This section talks about how you can draw a 2D funnel chart with customized border properties, configure legend, draw each slices, etc
heading: Configuring Funnel Chart
chartPresent: true
---

FusionCharts Suite XT allows you to configure several cosmetic and functional properties for the funnel chart.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#drawing-a-2d-funnel-chart-with-customized-borders" class="smoth-scroll">Draw a 2D funnel chart with customized border properties</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#showing-labels-at-the-center-of-the-funnel-chart" class="smoth-scroll">Show labels at the center of the funnel chart</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#showing-labels-in-the-legend-for-the-funnel-chart" class="smoth-scroll">Show labels in the legend for the funnel chart</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#configuring-the-position-of-the-legend-box" class="smoth-scroll">Configure the legend box position</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#drawing-filled-funnel-slices-in-3d-mode" class="smoth-scroll">Draw filled funnel slices</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#drawing-all-slices-with-same-slant-angle-when-plotting-streamlined-data" class="smoth-scroll">Draw all slices with the same slant angle</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#showing-values-as-percentage-of-the-previous-value" class="smoth-scroll">Show values as percentage of the previous value</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#slicing-out-individual-funnel-slices" class="smoth-scroll">Slice out individual funnel slices</a>

* <a href="/gauge-and-widgets-guide/funnel-chart/configuring-chart#configuring-hover-effects" class="smoth-scroll">Configure the hover effect</a>

## Drawing a 2D Funnel Chart with Customized Borders

By default, a funnel chart renders as a 3D chart with a context menu that allows you to switch between the 2D and the 3D modes of display. However, you can configure a funnel chart to be rendered in the 2D mode when it first loads, without using the context menu. You can also customize the border properties of a funnel chart for an improved visual representation.

A funnel chart rendered in 2D with customized borders looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-1.js %}

Given below is a brief description of the attributes used to render a 2D funnel chart with customized border properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`is2D`</td>
    <td>It is used to specify whether the funnel chart, on loading, will be rendered in the 2D mode. Setting this attribute to `1` renders the chart in 2D, setting it to `0` (default) will render the chart in 3D.</td>
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
    <td>It is used to specify the thickness, in pixels, of the plot border, e.g. 3. </td>
  </tr>
  <tr>
    <td>`plotBorderAlpha`</td>
    <td>It is used to specify the transparency of the plot border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


## Showing Labels at the Center of the Funnel Chart

A funnel chart configured to render labels at the center looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-2.js %}

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


## Showing Labels in the Legend for the Funnel Chart

You can opt to show the labels in the legend box instead of showing them with the data plots. To do this, you will have to show the legend box and hide the labels for the data plots.

A funnel chart with the labels rendered in the legend box looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-3.js %}

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

By default, the legend box is placed at the bottom of the funnel chart. You can opt to change the position of the legend box and shift it to the right.

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


## Drawing Filled Funnel Slices (in 3D Mode)

By default, in a 3D funnel chart, the slices are rendered as hollow. You can opt to render them as filled.

A funnel chart rendered will filled slices looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-4.js %}

Given below is a brief description of the attribute used to render filled funnel slices:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isHollow`</td>
    <td>It is used to specify whether the funnel slices will be rendered as hollowed or filled. Setting this attribute to `0` will render the slices as filled, setting it to `1` (default) will render them as hollow.</td>
  </tr>
</table>


## Drawing All Slices with Same Slant Angle (When Plotting Streamlined Data)

By default, when plotting streamlined data, the chart uses variable funnel slice width - the slant angle - to visually depict the filtering process. However, you have an option to use the same slant angle for all funnel slices.

A funnel chart rendered with the same slant angle for all funnel slices looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-5.js %}

Given below is a brief description of the attribute used to configure the same slant angle:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useSameSlantAngle`</td>
    <td>It is used to specify whether the funnel slices will be drawn using the same slant angle. Setting this attribute to `1` uses the same slant angle for all slices, setting it to `0`  (default) uses a variable slant angle. </td>
  </tr>
</table>



## Showing Values as Percentage of the Previous Value

When showing values in percentage for each slice, you can ask the chart to calculate the percentage value of this slice w.r.t the previous slice (instead of the first slice).

A funnel chart configured to show percentage values w.r.t the previous slice looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-6.js %}

Given below is a brief description of the attribute used to show values as the percentage of the previous value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPercentValues`</td>
    <td>It is used to specify whether the data values on the chart will be shown as percentage values or numerical values. Setting this attribute to `1` renders the data values as percent values, setting it to `0` (default) renders them as numerical values.</td>
  </tr>
  <tr>
    <td>`percentOfPrevious`</td>
    <td>It is used to specify if the percentage values for each slice will be determined w.r.t to the previous slice or the first slice. Setting this attribute to `1` will determine the percent values basis the previous slice, setting it to `0` (default) will determine them basis the first slice.

This attribute works only when the `showPercentValues` attribute is set to `1`.</td>
  </tr>
</table>


## Slicing Out Individual Funnel Slices

At times, you may want important data to be highlighted so that it is easily noticed. In a funnel chart, you can slice out the funnel slice that represents any such important data.

A funnel chart with a slice sliced-out looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-7.js %}

Given below is a brief description of the attribute used to slice out individual funnel slices:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isSliced`</td>
    <td>It is used to specify whether a funnel slice will appear sliced out. Setting this attribute to `1` will slice out the slice, setting it to `0` (default) will not slice out the slices.

If this attribute is used as a part of the `chart` object, it is applicable to all slices of the funnel. If it used as a part of the `data` object, then it is applicable only to the slice(s) for which it is defined.</td>
  </tr>
</table>


## Configuring Hover Effects

A funnel chart with hover effects enabled looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-configuring-chart-example-8.js %}

Given below is a brief description of the attributes used to configure the hover effect:

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
    <td>`plotFillHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to fill the slice when the mouse pointer is hovered over it, e.g., #CCCCCC. </td>
  </tr>
  <tr>
    <td>`plotFillHoverAlpha`</td>
    <td>It is used to specify the transparency of the slice when the mouse pointer is hovered it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100. </td>
  </tr>
  <tr>
    <td>`plotBorderHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the plot border when the mouse pointer is hovered over it, e.g., #333333. </td>
  </tr>
  <tr>
    <td>`plotBorderHoverAlpha`</td>
    <td>It is used to specify the transparency of the slice border when the mouse pointer is hovered it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 60. </td>
  </tr>
  <tr>
    <td>`plotBorderHoverThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the slice border when the mouse pointer is hovered over it, e.g. 2.</td>
  </tr>
</table>