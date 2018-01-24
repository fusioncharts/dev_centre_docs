---
permalink: chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts.html
title: Configuring Bubble and XY Charts | FusionCharts
description: In this section, you will be shown how you can display labels on bubbles, segment the x-axis into categorical zones, configure the x-axis labels, configure the x-axis vertical divisional lines and connect scatter plots in a scatter chart.
heading: Configuring Bubble and XY Charts
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of bubble and xy charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts#displaying-labels-on-bubbles" class="smoth-scroll">Display labels on bubbles</a>

* <a href="/chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts#segmenting-the-x-axis-of-bubblescatter-charts-into-categorical-zones" class="smoth-scroll">Segment the x-axis into categorical zones</a>

* <a href="/chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts#configuring-the-x-axis-labels-of-bubblescatter-charts" class="smoth-scroll">Configure the x-axis labels</a>

* <a href="/chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts#configuring-the-x-axis-vertical-divisional-lines" class="smoth-scroll">Configure the x-axis vertical divisional lines</a>

* <a href="/chart-guide/bubble-and-xy-charts/configuring-bubble-and-xy-charts#connecting-scatter-plots-by-a-line-in-xy-scatter-charts" class="smoth-scroll">Connect scatter plots in a scatter chart</a>

## Displaying Labels on Bubbles

By default, data labels are not rendered on the bubbles in a bubble chart.

A bubble chart with data labels rendered on bubbles looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-1.js %}

Given below is a brief description of the attribute used to show/hide labels on bubbles:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether labels will be displayed on bubbles. Setting this attribute to `1` will show the labels, setting it to `0` (default) will hide them.</td>
  </tr>
</table>

## Segmenting the X-axis of Bubble/Scatter Charts into Categorical Zones

The x-axis of the bubble/scatter chart can be segmented into categorical zones using vertical trend lines.

A bubble chart with the x-axis segmented looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-2.js %}

## Configuring the X-axis Labels of Bubble/Scatter Charts

You can configure the display mode of the x-axis labels for bubble and scatter charts. You can either choose to make the chart automatically generate the x-axis labels along with vertical divisional lines or you can explicitly define each x-axis label. Additionally, you can also opt to mix these two modes.

Given below is a brief description of the attribute used to configure the x-axis labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`xAxisLabelMode`</td>
    <td>It is used to specify the mode in which the x-axis labels will be rendered. This attribute takes three values: `AUTO` (default), `CATEGORIES` and `MIXED`.</td>
  </tr>
</table>


### Auto Mode

In the auto mode, the chart automatically calculates and displays the x-axis labels. In this mode, the chart ignores the `categories` object array and allows the x-axis to inherit the properties similar to that of the vertical y-Axis.

A bubble chart with the x-axis labels rendered in the auto mode looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-3.js %}

In the above chart, you can see that the x-axis labels are automatically calculated and displayed. These x-axis labels are based on x-axis values which in turn are generated using the x values of the chart data. Additionally, along with each label a vertical divisional line is also rendered.

### Categories Mode

In this mode, the x-axis displays labels explicitly defined through the objects in the `category` array  within the `categories` object array.

A bubble chart with the x-axis labels rendered in the categories mode looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-4.js %}

In the above chart, you can see that the labels explicitly defined in the `category` object array  within the `categories` object array are displayed. The automatically calculated labels are not displayed.

To render the x-axis labels in the categories, set the value of the `xAxisLabelMode` attribute to `CATEGORIES`.

### Mixed Mode

This mode is a combination of the auto mode and the category mode. It allows the x-axis to display the automatically calculated x-axis labels as well as the explicitly defined x-axis labels simultaneously.

A bubble chart with the x-axis labels rendered in the mixed mode looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-5.js %}

In the above chart, you can see that the x-axis displays the automatically calculated labels as well as the explicitly defined labels.

To render the x-axis labels in the categories, set the value of the `xAxisLabelMode` attribute to `MIXED`.

<p class="text-info"> By default, when `xAxisLabelMode` attribute is not defined and when categories are not explicitly defined in the data, the chart displays x-axis labels in the `auto` mode. In case, categories are defined (and the `xAxisLabelMode` attribute is not defined), the chart switches to the `categories` mode. You can also force any of the above three modes by explicitly defining the mode using the `xAxisLabelMode` attribute. </p>

## Configuring the X-axis Vertical Divisional Lines

Given below is a brief description of the attributes used to configure the vertical divisional lines related to the x-axis:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`adjustVDiv`</td>
    <td>It is used to allow you to explicitly set the lower and upper limit values and the number of divisional lines for this x-axis. By default, this is done automatically. Setting this attribute to `0` will disable the automatic adjustment of the divisional lines, setting it to `1` will enable it.</td>
  </tr>
  <tr>
    <td>`showXAxisValues`</td>
    <td>It is used to specify whether the divisional lines values for the x-axis will be shown. </td>
  </tr>
  <tr>
    <td>`numVDivlines`</td>
    <td>It is used to specify the number of vertical axis divisional lines to be rendered on the chart. </td>
  </tr>
  <tr>
    <td>`xAxisValuesStep`</td>
    <td>By default, all divisional lines show their values. However, you can opt to skip every x(th) divisional line value using this attribute. </td>
  </tr>
  <tr>
    <td>`vDivlineColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the vertical divisional lines.</td>
  </tr>
  <tr>
    <td>`vDivlineThickness`</td>
    <td>It is used to specify the thickness of the vertical divisional lines. This attribute takes values between 1 (thinnest) and 5 (thickest).</td>
  </tr>
  <tr>
    <td>`vDivlineAlpha`</td>
    <td>It is used to specify the transparency for the vertical divisional lines. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 20.</td>
  </tr>
  <tr>
    <td>`vDivlineIsDashed`</td>
    <td>It is used to specify whether the vertical div lines will be rendered as dashed lines. Setting this attribute to `1` will render the divisional lines as dashed lines, setting it to `0` (default) will render them as whole lines. </td>
  </tr>
  <tr>
    <td>`vDivlineDashLen`</td>
    <td>It is used to specify the length of each dash, if the vertical divisional lines are to be rendered as dashed lines. </td>
  </tr>
  <tr>
    <td>`vDivlineDashGap`</td>
    <td>It is used to specify the gap between each dash, if the vertical divisional lines are to be rendered as dashed lines. </td>
  </tr>
  <tr>
    <td>`showAlternateVGridColor`</td>
    <td>It is used to specify whether alternate-colored vertical grid bands will be shown.</td>
  </tr>
  <tr>
    <td>`alternateVGridColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the alternate vertical grid bands.</td>
  </tr>
  <tr>
    <td>`alternateVGridAlpha`</td>
    <td>It is used to specify the transparency for the alternate vertical grid bands. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 20.</td>
  </tr>
</table>


## Connecting Scatter Plots by a Line in XY (Scatter) Charts

A scatter chart with all the data points connected by a line looks like this:

{% embed_all chart-guide-bubble-and-xy-charts-configuring-bubble-and-xy-charts-example-6.js %}

Given below is a brief description of the attribute used to connect data points by a line:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawLine`</td>
    <td>It is used to specify whether the data points on the scatter chart will be connected by a line. Setting this attribute to `1` will connect the data points using a line, setting it to `0` (default) will not connect them. This attribute belongs to the `dataset` object.</td>
  </tr>
</table>