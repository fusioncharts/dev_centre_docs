---
permalink: chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts.html
title: Configuring Pie and Doughnut Charts | FusionCharts
description: FusionCharts Suite XT allows you to configure the functional and cosmetic properties of pie and doughnut charts.
heading: Configuring Pie and Doughnut Charts
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of pie and doughnut charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#configuring-the-animation-direction-for-a-piedoughnut-chart" class="smoth-scroll">Customize the animation direction for a pie/doughnut chart</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#showing-percent-values-on-the-chart-and-actual-values-in-tooltips" class="smoth-scroll">Show percent values on the chart</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#customizing-the-center-label-for-a-doughnut-chart" class="smoth-scroll">Customize the center label of a doughnut chart</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#enabling-single-slice-slicing" class="smoth-scroll">Enable single slice slicing</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#disabling-smart-labels-and-lines" class="smoth-scroll">Disable smart labels and smart lines</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#customizing-smart-lines" class="smoth-scroll">Customize smart lines</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#configuring-the-label-distance-and-clearance" class="smoth-scroll">Configure the label distance and clearance</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#skipping-overlap-labels" class="smoth-scroll">Skip overlapping labels</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#customizing-pie-radius" class="smoth-scroll">Customize the pie radius</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#setting-the-starting-angle" class="smoth-scroll">Set the starting angle</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#slicing-a-piedoughnut" class="smoth-scroll">Slice a pie/doughnut</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#configuring-the-slicing-distance" class="smoth-scroll">Configure the slicing distance</a>

* <a href="/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts#configuring-the-bevel-effect" class="smoth-scroll">Configure the bevel effect</a>

## Configuring the Animation Direction for a Pie/Doughnut Chart

By default, when a pie/doughnut chart is loaded for the first time or refreshed, the rendering animation is in the anti-clockwise direction. However, FusionCharts includes the `animateClockwise` attribute that lets you animate the chart in the clockwise direction. 

A pie chat configured to animate in the clockwise direction is shown below. Click the __Refresh__ button in the  __bottom-right corner__ of the chart to see the animation direction.

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-11.js %}

Given below is a brief description of the `animateClockwise` attribute:

<table>
  <tr>
    <th> Attribute Name </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> `animateClockwise` </td>
    <td> Sets the animation direction for a pie/doughnut charts. Set this attribute to __1__ to animate the chart in the clockwise direction, set it to __0__ (default) to animate in the anti-clockwise direction. </td>
  </tr>
</table>


## Showing Percent Values on the Chart and Actual Values in Tooltips

By default, for a pie chart, the actual data values are shown on the chart as well as in the tool-tips. However, you can choose to show percent values on the chart while retaining the actual values in tool-tips.

A pie chart configured to show percent values on the chart looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-1.js %}

Given below is a brief description of the attributes used to show percent values:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showPercentValues`
</td>
    <td>It is used to specify whether percentage values will be rendered as data labels on the chart. Setting this attribute to `1` will show percent values as data labels, setting it to `0` (default) will show actual values.</td>
  </tr>
  <tr>
    <td>`showPercentInTooltip`</td>
    <td>It is used to specify whether percent values will be shown as a part of the tool-tip text. Setting this attribute to `0` (default) will show actual values in the tool-tip text, setting it to `1` will show percent values.</td>
  </tr>
</table>


<p class="text-info"> The `showPercentValues` and the `showPercentInTooltip` attributes are applicable if you want to show percent values on the chart and actual values in tool-tips for a doughnut chart. </p>

## Customizing the Center Label for a Doughnut Chart

For a doughnut chart, you can configure the default text that will be rendered on the center label. You can also configure the text that will be rendered on the center label when the mouse pointer is hovered over one of the doughnut slices.

A doughnut chart with the center label customized looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-2.js %}

Given below is a brief description of the attributes used to customize the center label:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`defaultCenterLabel`
</td>
    <td>It is used to specify the default text to render for the center label of a doughnut chart.</td>
  </tr>
  <tr>
    <td>`centerLabel`</td>
    <td>It is used to specify the text that will be rendered when the mouse pointer is hovered over a doughnut slice.</td>
  </tr>
</table>


## Enabling Single-slice Slicing

By default, the pie and doughnut charts allow you to slice out multiple pie/doughnut slices at one time. You can, however, opt to enable slicing-out only one slice at a time.

A pie chart with single-slicing enabled looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-3.js %}

Given below is a brief description of the attribute used to enable single-slicing:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`enableMultiSlicing`</td>
    <td>It is used to specify whether single-slicing will be enabled for pie/doughnut charts. Setting this attribute to `0` will enable single-slicing for the chart, setting it to `1` (default) will enable multi-slicing.</td>
  </tr>
</table>


## Disabling Smart Labels and Lines

By default, pie and doughnut charts are rendered with smart labels and lines - smart labels are data labels connected to their corresponding pie slices using line segments called smart lines. Smart labels manage overlapping of labels even when a large number of labels are placed in close vicinity. You can, however, choose to disable these smart labels.

A pie chart with smart labels disabled looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-4.js %}

Given below is a brief description of the attribute used to disable smart labels:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`enableSmartLabels`</td>
    <td>It is used to specify whether smart labels will be rendered for pie/doughnut charts. Setting this attribute to `0` disables smart labels, setting it to `1` (default) enables them.</td>
  </tr>
</table>


<p class="text-warning"> If smart labels are disabled then, in case of a large number of labels, the labels might overlap each other. </p>

## Customizing Smart Lines

A pie chart with the cosmetic properties of smart lines customized looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-5.js %}

Given below is a brief description of the attributes used to customize smart lines:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`smartLineColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the smart label connector lines.</td>
  </tr>
  <tr>
    <td>`smartLineThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the smart lines.</td>
  </tr>
  <tr>
    <td>`smartLineAlpha`</td>
    <td>It is used to specify the transparency of the smart lines. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`isSmartLineSlanted`</td>
    <td>It is used to specify whether the smart lines will be rendered as straight lines or slanted lines. Setting this attribute to `0` will render smart lines as straight lines, setting it to `1` (default) will render them as slanted lines.</td>
  </tr>
</table>


## Configuring the Label Distance and Clearance

Given below is a brief description of the attributes used to configure the label distance and clearance:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`labelDistance`</td>
    <td>It is used to specify the distance, in pixels, between the label/value text boxes from the pie/doughnut edge.

This attribute is applicable only when smart labeling is disabled.</td>
  </tr>
  <tr>
    <td>`smartLabelClearance`</td>
    <td>It is used to specify the clearance distance, in pixels, of a label (for sliced-in pies) from adjacent sliced out pies.</td>
  </tr>
</table>


## Skipping Overlap Labels

When there are too many labels in the pie/doughnut chart (which is difficult to adjust even if you are using smart labels), the labels may overlap. In this case, you have the option to skip the overlapping labels. The labels of the least significant pies will be removed.

Given below is a brief description of the attribute used to skip overlap labels:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`skipOverlapLabels`</td>
    <td>It is used to specify whether overlapping labels will be skipped. Setting this attribute to `0`will render overlapping lables, setting it to `1` (default) will skip them.</td>
  </tr>
</table>


## Customizing Pie Radius

By default, for pie/doughnut charts, the chart automatically calculates the best fit pie radius based on the data provided. However, you can choose to explicitly set the outer radius of the pie chart.

A pie chart with the outer radius customized looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-6.js %}

Given below is a brief description of the attribute used to customize the outer radius:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pieRadius`</td>
    <td>It is used to specify the outer radius of the pie/doughnut chart.</td>
  </tr>
</table>


## Setting the Starting Angle

By default, pie/doughnut charts start plotting from the 0° angle. The chart allows you to explicitly set the starting angle.

A pie chart with the starting angle set to 45° looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-7.js %}

Given below is a brief description of the attribute used to set the starting angle:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startingAngle`</td>
    <td>It is used to specify the starting angle for the pie/doughnut chart. The first pie slice will start plotting from the angle measure specified in this attribute.</td>
  </tr>
</table>


## Slicing a Pie/Doughnut

When a pie/doughnut chart first renders, by default, all slices are sliced-in. However, to highlight a slice, you may want to render it sliced-out when the chart first loads.

A pie chart rendered with one slice sliced-out looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-8.js %}

Given below is a brief description of the attribute used to slice out a pie slice when the chart is first rendered:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`isSliced`</td>
    <td>It is used to specify whether the pie chart will be rendered with one slice sliced-out. Setting this attribute to `1` for a pie slice will render that slice sliced-out, setting it to `0` (default) will render it sliced-in. This attribute belongs to the `data` object.</td>
  </tr>
</table>


## Configuring the Slicing Distance

When a pie/doughnut slice is sliced-out, you can configure the distance between the center and the sliced-out slices.

A chart with the slicing distance configured looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-9.js %}

Given below is a brief description of the attribute used to configure the slicing distance:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`slicingDistance`</td>
    <td>It is used to specify the distance, in pixels, between the center of the chart and the sliced-out slices.</td>
  </tr>
</table>


## Configuring the Bevel Effect

For pie/doughnut charts, you can configure the bevel effect to render the chart with 3D effects.

A pie chart configured for the bevel effect looks like this:

{% embed_all chart-guide-pie-and-doughnut-charts-configuring-pie-and-doughnut-charts-example-10.js %}

Given below is a brief description of the attributes used to configure the bevel effect:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`use3DLighting`</td>
    <td>It is used to specify whether advanced gradients and shadow effects will be used to create better looking charts. Setting this attribute to `1` will render the pie/doughnut chart with 3D effects, setting it to `0` (default) will render it in the 2D mode.</td>
  </tr>
  <tr>
    <td>`radius3D`</td>
    <td>It is used to specify the 3D radius of the chart, in percentage, when the chart is rendered in the 3D lighting mode. It basically helps to set the bevel distance for the pie/doughnut.</td>
  </tr>
</table>

<p class="text-info"> For all the samples shown above, if you want so see how each attribute works for the doughnut chart, just change the value of the `type` attribute from `pie2D`/`pie3D` to `doughnut2D`/`doughnut3D`.</p>
