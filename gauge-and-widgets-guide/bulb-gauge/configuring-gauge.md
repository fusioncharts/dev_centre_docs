---
permalink: gauge-and-widgets-guide/bulb-gauge/configuring-gauge.html
title: Configuring Bulb Gauge | FusionCharts
description: This section talks about configuring the gauge border, use the gradient fill mix for the gauge border, render a bulb in 2D, etc
heading: Configuring Bulb Gauge
chartPresent: true
---

FusionCharts Suite XT allows you to customize several functional and cosmetic properties for the bulb gauge.

In this section you will be shown how you can:

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#configuring-the-gauge-border" class="smoth-scroll">Configure the gauge border</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#using-gradient-fill-mix-for-the-gauge-border" class="smoth-scroll">Use the gradient fill mix for the gauge border</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#configuring-the-origin-and-the-radius-of-the-bulb-gauge" class="smoth-scroll">Configure the Origin and the Radius of the Bulb Gauge</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#rendering-the-bulb-gauge-in-2d" class="smoth-scroll">Render the bulb gauge in 2D</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#placing-the-gauge-value-inside-the-gauge" class="smoth-scroll">Place the gauge value inside the gauge</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#rendering-the-range-name-as-the-gauge-label" class="smoth-scroll">Show range name instead of numerical value</a>

* <a href="/gauge-and-widgets-guide/bulb-gauge/configuring-gauge#configuring-the-hover-effect" class="smoth-scroll">Configure hover effects</a>

## Configuring the Gauge Border

A bulb gauge rendered with customized gauge border properties looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-1.js %}

Given below is a brief description of the attributes used to customize the gauge border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showGaugeBorder`</td>
    <td>It is used to specify whether the gauge border will be shown or hidden. Setting this attribute to `0` will hide the gauge border, setting it to `1` (default) will show the border.</td>
  </tr>
  <tr>
    <td>`gaugeBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the entire border of the gauge, e.g. #111111.</td>
  </tr>
  <tr>
    <td>`gaugeBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the gauge border, e.g. 5.</td>
  </tr>
  <tr>
    <td>`gaugeBorderAlpha`</td>
    <td>It is used to specify the transparency for the gauge border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


## Using Gradient Fill Mix for the Gauge Border

The `gaugeBorderColor` attribute is used to apply a single solid color to the gauge border, where the border color can be different from the fill color for the gauge. Using a gradient fill mix, you can render the border in a color that is darker or lighter than the fill color used for the gauge.

<p class="text-info"> The gradient fill mix renders the border in a color that is darker/lighter than the initial color in which the gauge was rendered.</p>

A bulb gauge rendered using a gradient fill mix for the border looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-2.js %}

In the above chart, the gauge border is rendered in a color darker than the initial fill color. To do this, we have used one token of the gradient fill mix to render the bulb border using a color that is 30% darker than the fill color.



## Configuring the Origin and the Radius of the Bulb Gauge

By default, the gauge automatically determines its origin and radius based on the data you provide. However, FusionCharts Suite XT also allows you to explicitly specify the origin and radius of the gauge.

A bulb gauge rendered with the origin and radius configured manually looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-3.js %}

Given below is a brief description of the attributes used to manually configure the origin and radius of the bulb gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeOriginX`</td>
    <td>It is used to specify the x-origin value for the gauge, e.g. 150.</td>
  </tr>
  <tr>
    <td>`gaugeOriginY`</td>
    <td>It is used to specify the y-origin value for the gauge, e.g. 170.</td>
  </tr>
  <tr>
    <td>`gaugeRadius`</td>
    <td>It is used to specify the radius, in pixels, for the gauge, e.g. 105.</td>
  </tr>
</table>


## Rendering the Bulb Gauge in 2D

By default, the bulb gauge is rendered with a 3D look and feel. However, you can opt to render the bulb gauge in 2D.

A bulb gauge rendered in 2D looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-4.js %}

Given below is a brief description of the attribute used to render a bulb gauge in 2D:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`is3D`</td>
    <td>It is used to specify whether the bulb gauge will be rendered in 2D or 3D. Setting this attribute to `0` renders the gauge in 2D, setting it to `1` (default) renders it in 3D.</td>
  </tr>
</table>


## Placing the Gauge Value Inside the Gauge

By default, the gauge value is rendered outside the gauge. FusionCharts Suite XT allows you to render the value inside the gauge.

A bulb gauge configured to render the gauge value inside the gauge looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-5.js %}

Given below is a brief description of the attribute used to render the gauge value inside:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`placeValuesInside`</td>
    <td>It is used to specify whether the gauge value will be rendered inside the gauge or outside it. Setting this attribute to `1` will place the gauge values inside the gauge, setting it to `0` (default) will place them outside.</td>
  </tr>
</table>


## Rendering the Range Name as the Gauge Label

By default, the current numerical value of the gauge is rendered on the gauge. Instead, you can opt to show the range name on the gauge.

A bulb gauge configured to show the range name instead of the numerical as the gauge label looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-6.js %}

Given below is a brief description of the attribute used to render the range name:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useColorNameAsValue`</td>
    <td>It is used to specify whether the range name will be rendered on the gauge instead of the numerical value. Setting this attribute to `1` will show the color range name as the value, setting it to `0` (default) will show the numerical value.</td>
  </tr>
</table>


## Configuring the Hover Effect

FusionCharts Suite XT allows you to display hover effects for the gauge.

A bulb  gauge configured for hover effects looks like this:

{% embed_all gauge-and-widgets-guide-bulb-gauge-configuring-gauge-example-7.js %}

Given below is a brief description of the attribute used to enable the hover effect for the bulb gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled for the bulb gauge. Setting this attribute to `1` enables the hover effect, setting it to `0` (default) disables it.</td>
  </tr>
</table>