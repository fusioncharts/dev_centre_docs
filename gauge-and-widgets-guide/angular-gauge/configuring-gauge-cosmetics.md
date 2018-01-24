---
permalink: gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics.html
title: Configuring Angular Gauge Cosmetics | FusionCharts
description: This section talks about configuring the gauge gradient fill, gauge border, gauge radius, pivot properties.
heading: Configuring Angular Gauge Cosmetics
chartPresent: true
---

The angular gauge chart in the FusionCharts Suite XT offers you a lot of configuration options that help you improve the visual representation of the gauge.

In this section, you will be shown how you can configure the:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-gauge-gradient-fill" class="smoth-scroll">Gauge gradient fill</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-gauge-borders" class="smoth-scroll">Gauge borders</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-gauge-radius-and-inner-radius" class="smoth-scroll">Gauge radius and inner radius</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-pivot-properties" class="smoth-scroll">Pivot properties</a>

## Configuring the Gauge Gradient Fill

An angular gauge is usually rendered with solid colors filled in the background. To enhance the visual representation of charts, you can use a gradient fill for the background.

An angular gauge with the scale rendered using a gradient fill looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-1.js %}

Given below is a brief description of the attributes used to configure the gradient fill for the gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeFillMix`</td>
    <td>It is used to specify the gradient fill formula for the gauge scale. The color constituents start applying from the inner side to the outer side of the scale, which means that the color specified first will be applied to the inner radius and the subsequent colors will move out towards the outer radius. Example: {light-10},{light-20},{light-60},{dark-30},{dark-40}, {dark-40}</td>
  </tr>
  <tr>
    <td>`gaugeFillRatio`</td>
    <td>It is used to specify the ratio in which each of the colors specified for the gradient fill will be applied to the gauge scale. If you set this attribute as empty, it instructs the gauge to automatically distribute the gradient color constituents. Example: 4</td>
  </tr>
</table>


## Configuring Gauge Borders

There are several ways in which you can configure the borders of an angular gauge scale. You can:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#showinghiding-the-gauge-border" class="smoth-scroll">Show/hide the gauge border</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-border-cosmetics" class="smoth-scroll">Configure the border cosmetics</a>

### Showing/Hiding the Gauge Border

An angular gauge rendered with the gauge border hidden looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-2.js %}

Given below is a brief description of the attribute used to show/hide the gauge border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showGaugeBorder`</td>
    <td>It is used to specify whether the gauge border will be shown or hidden. Setting this attribute to `0` will hide the gauge border, setting it to `1` (default) will show the border.</td>
  </tr>
</table>


<p class="text-warning">On the above sample the shadow is hidden through the use of the `fint` theme. Shadows might interfere with the border color.</p>

### Configuring Border Cosmetics

#### Configuring Border Cosmetics for each Color Range

FusionCharts Suite XT allows you to individually configure the color and transparency of the border of each range on the gauge scale.

An angular gauge with the border cosmetics configured individually for each color range looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-3.js %}

To configure borders individually for each color range, we use the attributes that belong to the `color` object, which in turn belongs to the `colorRange` object. Given below is a brief description of the attributes used to configure individual borders:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`borderColor`</td>
    <td>It is used to specify the hex code for the color that will be applied to the range border, e.g. #780101. </td>
  </tr>
  <tr>
    <td>`borderAlpha`</td>
    <td>It is used to specify the transparency for the range border, using a value between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


#### Configuring the Entire Border for the Gauge at Once

You can also configure the cosmetics for the entire border at once.

An angular gauge rendered with the entire border customized at once looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-4.js %}

Given below is a brief description of the attributes used to configure the entire border of the gauge scale at once:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the entire border of the gauge, e.g. #111111.</td>
  </tr>
  <tr>
    <td>`gaugeBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the entire border of the gauge, e.g. 1.</td>
  </tr>
  <tr>
    <td>`gaugeBorderAlpha`</td>
    <td>It is used to specify the transparency for the entire border of the gauge, using a value between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


#### Setting the Border Color as a Derivative of the Fill Color

Another option to configure the gauge border is to use a derivative of the fill color used for the corresponding range.

An angular gauge rendered with the derivative of the fill color applied to the border looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-5.js %}

Given below is a brief description of the attribute used to apply the derivative fill color:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeBorderColor`</td>
    <td>It is used to specify the derivative of the fill color that should be applied to the border. For example, {dark-30} specifies that the color applied to the border for each range should be 30% darker than its corresponding fill color.</td>
  </tr>
</table>


## Configuring the Gauge Radius and Inner Radius

Based on the data values provided, the gauge automatically calculates the outer and inner radius for the color range scale. You can, however, explicitly set the radius for the gauge.

An angular gauge with the outer and inner radius explicitly set to 180 and 30, respectively, looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-6.js %}

Given below is a brief description of the attributes used to explicitly set the radius:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeOuterRadius`</td>
    <td>It is used to specify the outer radius, in pixels, for the color range scale.</td>
  </tr>
  <tr>
    <td>`gaugeInnerRadius`</td>
    <td>It is used to specify the inner radius, in pixels, for the color range scale. This attribute can take two types of values: one as exact pixels and the second as a percentage of the outer radius (e.g. 75%).</td>
  </tr>
</table>



An angular gauge rendered with the inner radius specified as 75% of the outer radius looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-7.js %}


## Configuring Pivot Properties

Like the range scale and the border of the angular gauge, you can also configure the pivot that points to a data value on the range scale. For a pivot, you can:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#setting-the-pivot-radius" class="smoth-scroll">Set the radius</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-pivot-cosmetics" class="smoth-scroll">Configure the cosmetic properties</a>

### Setting the Pivot Radius

The gauge automatically calculates the pivot radius based on the data values that you provide. However, you can also explicitly set the pivot radius.

An angular gauge with the pivot radius explicitly set to 10 looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-8.js %}

Given below is a brief description of the attribute used to explicitly set the pivot radius:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pivotRadius`</td>
    <td>It is used to specify the pivot radius, in pixels.</td>
  </tr>
</table>


### Configuring Pivot Cosmetics

For a pivot, you can:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-pivot-border-cosmetics" class="smoth-scroll">Configure the pivot border cosmetics</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-pivot-fill-cosmetics" class="smoth-scroll">Configure the pivot fill cosmetics</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-pivot-fill-color-with-a-gradient-fill-mix" class="smoth-scroll">Configure the pivot fill color with a gradient fill mix</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-gauge-cosmetics#configuring-the-pivot-fill-with-a-linear-gradient" class="smoth-scroll">Configure the pivot fill color with a linear gradient</a>


#### Configuring the Pivot Border Cosmetics

An angular gauge with the pivot border color and transparency set to #333333 and 100, respectively, looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-9.js %}

Given below is a brief description of the attributes used to configure the pivot border cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pivotBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be applied to the pivot border.</td>
  </tr>
  <tr>
    <td>`pivotBorderAlpha`</td>
    <td>It is used to specify the transparency of the pivot border.</td>
  </tr>
</table>


#### Configuring the Pivot Fill Cosmetics

An angular gauge with the pivot fill color and transparency set to #333333 and 100 looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-10.js %}

Given below is a brief description of the attributes used to configure the pivot fill cosmetics:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pivotFillColor`</td>
    <td>It is used to specify the hex code for the fill color for the pivot.</td>
  </tr>
  <tr>
    <td>`pivotFillAlpha`</td>
    <td>It is used to specify the transparency for the fill color for the pivot.</td>
  </tr>
</table>


#### Configuring the Pivot Fill Color with a Gradient Fill Mix

The `pivotFillColor` attribute fills the pivot with a single solid color. However, you can also fill the pivot with a gradient fill.

An angular gauge rendered with the gradient fill mix configured for the pivot looks like this

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-11.js %}

Given below is a brief description of the attributes used to apply a gradient fill mix to the pivot:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pivotFillMix`</td>
    <td>It is used to specify the gradient fill formula, e.g. {dark-50},{light-30},{dark-40}</td>
  </tr>
  <tr>
    <td>`pivotFillRatio`</td>
    <td>It is used to specify the ratio in which the gradient color constituents will be applied to the pivot.</td>
  </tr>
</table>


#### Configuring the Pivot Fill with a Linear Gradient

You can also specify the pivot to be filled with a linear gradient instead of the default radial gradient.

An angular gauge rendered with a linear gradient pivot fill looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-gauge-cosmetics-example-12.js %}

Given below is a brief description of the attribute used to configure a linear gradient pivot fill:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pivotFillType`</td>
    <td>It is used to specify whether the gradient fill for the pivot should be linear or radial. This attribute takes only the following two values: linear and radial (default).</td>
  </tr>
</table>