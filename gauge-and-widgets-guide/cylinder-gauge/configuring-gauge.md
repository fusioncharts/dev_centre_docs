---
permalink: gauge-and-widgets-guide/cylinder-gauge/configuring-gauge.html
title: Configuring Cylinder Gauge | FusionCharts
description: This article talks about configurations of cylinder gauge, on how to set the fill color, show or hide the chart value, etc
heading: Configuring Cylinder Gauge
chartPresent: true
---

FusionCharts Suite XT offers you several options to configure and customize the cylinder gauge to suit your requirements.

In this section, using a simple example, you will be shown how to:

* <a href="/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge#setting-cylinder-fill-color" class="smoth-scroll">Set the cylinder fill color</a>

* <a href="/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge#customizing-cylinder-origin-radius-and-height" class="smoth-scroll">Customize the cylinder origin, radius, and height</a>

* <a href="/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge#configuring-chart-value-display" class="smoth-scroll">Show or hide the chart value</a>

* <a href="/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge#configuring-tick-marks-and-tick-values" class="smoth-scroll">Configure tick marks and tick values</a>

* <a href="/gauge-and-widgets-guide/cylinder-gauge/configuring-gauge#applying-hover-effects" class="smoth-scroll">Apply hover effects to the gauge</a>

## Setting Cylinder Fill Color

By default, the cylinder gauge is filled using the default fill color. However, you can set a different fill color for the gauge.

A cylinder gauge with the fill color set to green looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-1.js %}

Given below is the attribute used to define custom colors for cylinder fill:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`cylFillColor`</td>
    <td>It is used to specify the hex code of the fill color for the cylinder, eg. `#1aaf5d`. </td>
  </tr>
</table>


## Customizing Cylinder Origin, Radius, and Height

By default, the chart automatically calculates the best-fit coordinates and size for the cylinder. However, you can also customize the origin, radius, and height of the cylinder gauge, if your requirement differs from the default measures.

A cylinder gauge rendered using user-defined origin, radius, and height looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-2.js %}

Given below is a brief description of the attributes used to customize the cylinder origin, radius, and height:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`cylOriginX`</td>
    <td>It is used to specify the origin x-coordinate of the cylinder. e.g 30</td>
  </tr>
  <tr>
    <td>`cylOriginY`</td>
    <td>It is used to specify the origin y-coordinate of the cylinder. e.g. 260</td>
  </tr>
  <tr>
    <td>`cylRadius`</td>
    <td>It is used to specify the radius of the cylinder. e.g. 40</td>
  </tr>
  <tr>
    <td>`cylHeight`</td>
    <td>It is used to specify the height of the cylinder. e.g. 150</td>
  </tr>
</table>


## Configuring Chart Value Display

By default, the chart data value indicated by the cylinder gauge is shown  below the gauge. You can also choose to hide this value.

A cylinder gauge rendered with the chart value hidden looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-3.js %}

Given below is a brief description of the attribute used to show/hide the chart value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It specifies whether to show/hide the chart value. Setting this attribute to `1` (default) will show the chart value below the gauge, setting it to `0` will hide the chart value.</td>
  </tr>
</table>



## Configuring Tick Marks and Tick Values

### Hiding Ticks

A cylinder gauge configured to hide all tick marks and tick values looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-4.js %}

The cylinder gauge shown here is designed in a way that the user decides whether or not to render the tick marks and tick values. Selecting the check boxes below the chart will show the tick marks and values; clearing them hides tick marks and values again.

Given below is the list of attributes used to show/hide tick marks and values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether to show/hide the tick marks. Setting this attribute to `0` will hide the tick marks, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether to show/hide the tick values. Setting this attribute to `1` will show the tick values, setting it to `0` (default) will hide them.</td>
  </tr>
</table>


### Positioning Ticks

By default, the tick marks and tick values are rendered to the right of the gauge.

A cylinder gauge rendered with the tick marks and values positioned to the left looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-5.js %}

Given below is the list of attributes used to customize the tick position:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ticksOnRight`</td>
    <td>It is used to specify whether to render the tick marks on the left or the right side of gauge. Setting this attribute to `0` will render the tick marks on the left side of the gauge scale, setting it to `1` (default) will render them on the right.</td>
  </tr>
</table>


### Customizing the Number of Ticks

A cylinder gauge rendered with the number of tick marks explicitly specified looks this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-6.js %}

Given below is the list of attributes used to customize the number of tick marks::

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMNumber`</td>
    <td>It is used to specify the number of major tick marks.</td>
  </tr>
  <tr>
    <td>`minorTMNumber`</td>
    <td>It is used to specify the number of minor tick marks. Minor tick marks refer to the tick marks between two major tick marks.</td>
  </tr>
</table>


### Auto Adjustment of Ticks

The cylinder gauge can automatically adjust the number of major ticks to a best feasible value.

A cylinder gauge rendered with the automatic adjustment of tick marks disabled looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-7.js %}

Given below is the list of attributes used to enable/disable the auto adjustment of tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`adjustTM`</td>
    <td>It is used to specify whether to adjust the major tick mark number so as to best distribute the specified chart scale. Setting this attribute to `0` disables the automatic adjustment of tick marks, setting it to `1` (default) will enable it.</td>
  </tr>
</table>


### Configuring Tick Value Step

You can opt to show only every nth tick value on the gauge, instead of showing all the tick values.

A cylinder gauge configured to show tick values for only every second major tick mark looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-8.js %}

Given below is the list of attributes used to configure the tick value step:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickValueStep`</td>
    <td>If we need to show every n-th tick value only, we can specify that value here. The upper and lower limit of the scale is always displayed.</td>
  </tr>
</table>


### Configuring Tick Mark Cosmetics

A cylinder gauge rendered with the appearance of the tick marks customized looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-9.js %}

Given below is the list of attributes used to configure tick value step:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the major tick marks. e.g. `#1aaf5d`</td>
  </tr>
  <tr>
    <td>`majorTMAalpha`</td>
    <td>It is used to specify the transparency of the major tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 40.</td>
  </tr>
  <tr>
    <td>`majorTMHeight`</td>
    <td>It is used to specify the height of the major tick marks, in pixels.</td>
  </tr>
  <tr>
    <td>`majorTMThickness`</td>
    <td>It is used to specify the thickness of the major tick marks, in pixels.</td>
  </tr>
  <tr>
    <td>`minorTMColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the minor tick marks. e.g. `#1aaf5d`</td>
  </tr>
  <tr>
    <td>`minorTMAlpha`</td>
    <td>It is used to specify the transparency of the minor tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 70.</td>
  </tr>
  <tr>
    <td>`minorTMHeight`</td>
    <td>It is used to specify the height of the minor tick marks, in pixels.</td>
  </tr>
  <tr>
    <td>`minorTMThickness`</td>
    <td>It is used to specify the thickness of the minor tick marks, in pixels.</td>
  </tr>
  <tr>
    <td>`tickmarkDistance`</td>
    <td>It is used to specify the distance between the gauge and the tick marks, in pixels.</td>
  </tr>
</table>


## Applying Hover Effects

We can set hover/touch effects for the cylinder gauge to boost visualization; it allows you to give a prominent visual feedback from the point of focus.

A cylinder gauge rendered with the hover effects applied looks like this:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-configuring-gauge-example-10.js %}

Given below is the list of attributes used to configure hover effects for a cylinder gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`cylFillHoverColor`</td>
    <td>It is used to specify the hex code for the color that will be used to fill the cylinder when the mouse pointer is hovered over it. e.g #0099fd.</td>
  </tr>
  <tr>
    <td>`cylFillHoverAlpha`</td>
    <td>It is used to specify the transparency of the cylinder when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 70.</td>
  </tr>
</table>