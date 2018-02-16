---
permalink: gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html
title: Configuring Linear Gauge Cosmetics | FusionCharts
description: This section of linear gauge talks how to configure pointer properties, add tooltext, add multiple pointers, configure the pointer value, position, etc
heading: Configuring Linear Gauge Cosmetics
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional and cosmetic properties of the linear gauge to improve its visual representation.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-pointer-properties">Configure pointer properties</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#adding-tool-text-and-a-link-to-the-pointer">Add tool text and link to a pointer</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#adding-multiple-pointers">Add multiple pointers</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-the-pointer-value">Configure the pointer value</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-the-pointer-position">Configure the pointer position</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-the-gauge-gradient-mix">Configure the gauge gradient mix</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-gauge-borders">Configure the gauge borders</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#hiding-gauge-labels">Hide gauge labels</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-gauge-cosmetics.html#configuring-hover-effects-for-the-gauge">Configure hover effects for the gauge</a>

## Configuring Pointer Properties

A linear gauge configured for the cosmetic properties of the pointer looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-1.js %}

Given below is a brief description of the attributes used to configure the pointer cosmetic properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`borderColor `</td>
    <td>It is used to specify the hex code for the color that will be applied to the pointer border, e.g. #1aaf5d.</td>
  </tr>
  <tr>
    <td>`borderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the pointer border, e.g. 5</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>It is used to specify the hex code for the color that will applied to the background of the pointer, e.g. #E3234A</td>
  </tr>
  <tr>
    <td>`bgAlpha`</td>
    <td>It is used to specify the transparency for the background of the pointer. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>It is used to specify the radius, in pixels, of the pointer.</td>
  </tr>
  <tr>
    <td>`sides`</td>
    <td>It is used to specify the number of sides for the pointer; this determines the shape of the pointer, e.g a 4-sided pointer looks like a diamond.</td>
  </tr>
</table>


These attributes belong to the `pointer` object, which in turn belongs to the `pointers` object.


## Adding Tool-text and a Link to the Pointer

A linear gauge with the pointer having a tool-text and pointing to an external link looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-2.js %}

Given below is a brief description of the attributes used to add a tool-text and an external link for the pointer:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`toolText`</td>
    <td>It is used to specify the tooltip that will be rendered when the mouse pointer is hovered over the pointer.</td>
  </tr>
  <tr>
    <td>`link`</td>
    <td>It is used to specify the URL to which you will be navigated if you click the pointer. The link to the external URL is defined using the FusionCharts link format.</td>
  </tr>
</table>


These attributes belong to the `pointer` object, which in turn belongs to the `pointers` object.


## Adding Multiple Pointers

A linear gauge rendered with two pointers, showing the server CPU utilization for a transaction server and a web server looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-3.js %}

To add multiple pointers, you only need to create multiple instances of the `pointer` object, which belongs to the `pointers` object.


## Configuring the Pointer Value

A linear gauge rendered with the pointer value configured looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-4.js %}

The gauge shown above is rendered with two check boxes below it: __Show Value__ and __Place Value Above Pointer__. If you select the __Show Value__ check box, the value of the pointer is shown; if you clear it, the value is hidden. If you select the __Place Value Above Pointer__ check box, the value is placed above the pointer; if you clear it, the value is shown below.

Given below is a brief description of the attributes used to configure the pointer value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the pointer’s value will be shown or hidden. Setting this attribute to `0` will hide the pointer value, setting it to `1` (default) will show it. </td>
  </tr>
  <tr>
    <td>`valueAbovePointer`</td>
    <td>It is used to specify whether the value will be shown above or below the pointer. Setting this attribute to `1` will place the value above the pointer, setting it to `0` (default) will place the value below it. </td>
  </tr>
</table>


These attributes belong to the `pointer` object, which in turn belongs to the `pointers` object.


## Configuring the Pointer Position

You can configure the linear gauge to show the pointer along the top edge or the bottom edge of the gauge.

A linear gauge that allows you to configure the pointer position looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-5.js %}

The gauge shown above is rendered with two check boxes below it: __Pointer on Top__ and __Pointer at Bottom__. If you select the __Pointer on Top__ check box, the pointer is shown along the top edge of the gauge; if you select the __Pointer at Bottom__ check box, the pointer is shown along the bottom edge of the gauge.

Given below is a brief description of the attribute used to configure the pointer position:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pointerOnTop`</td>
    <td>It is used to specify whether the pointer will be shown along the top or the bottom edge of the gauge. Setting this attribute to `0` will show the pointer at the bottom of the gauge, setting it to `1` (default) will show the pointer at the top.</td>
  </tr>
</table>


This attribute belongs to the `chart` object.


## Configuring the Gauge Gradient Mix

A linear gauge configured using the gauge gradient mix looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-6.js %}

Given below is a brief description of the attributes used to configure the gauge gradient mix:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeFillMix`</td>
    <td>It is used to specify the gradient fill formula for the linear gauge scale, e.g. {light-10},{light-70},{dark-10}</td>
  </tr>
  <tr>
    <td>`gaugeFillRatio`</td>
    <td>It is used to specify the ratio in which the fill mix will be applied to the gauge, e.g. 40,20,40.</td>
  </tr>
</table>


## Configuring Gauge Borders

A linear gauge configured for border cosmetic properties looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-7.js %}

Given below is a brief description of the attributes used to configure gauge borders:

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
    <td>It is used to specify the hex code of the color that will be used to render the entire border of the gauge, e.g. #111111. You can either specify a hex code here or a single token from the  gradient fill mix like {dark-20} or {light-30}. The chart will then calculate the border color for each color range individually (based on the color code for each color range).</td>
  </tr>
  <tr>
    <td>`gaugeBorderThicknes`</td>
    <td>It is used to specify the thickness, in pixels, for the gauge border, e.g. 5.</td>
  </tr>
  <tr>
    <td>`gaugeBorderAlpha`</td>
    <td>It is used to specify the transparency for the gauge border. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


## Hiding Gauge Labels

A linear gauge configured to hide gauge labels looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-8.js %}

Look at the __Show Labels?__ check box rendered below the above linear gauge. If you select this check box, you can see the label for each color range on the gauge scale. If you clear the check box, the labels are hidden.

Given below is a brief description of the attribute used to hide gauge labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showGaugeLabels`</td>
    <td>It is used to specify whether the gauge (color range scale) labels will be shown or not. Setting this attribute to `0` will hide gauge labels, setting it to `1` (default) will show them.</td>
  </tr>
</table>


<p class="text-info"> An alternate way to not show gauge labels is by not initializing the `label` attribute for the `color` object. </p>

## Configuring Hover Effects for the Gauge

You can use hover effects to improve the visual representation of your gauge; you can configure the pointer cosmetics to change when the mouse pointer is hovered over it.

A linear gauge configured for hover effects looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-gauge-cosmetics-example-9.js %}

Hover your mouse pointer above the gauge pointer and observe how the cosmetics of the pointer change.

Given below is a brief description of the attributes used to configure hover effects for the gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pointerBgHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the pointer when the mouse pointer is hovered over it, e.g. #333333. </td>
  </tr>
  <tr>
    <td>`pointerBgHoverAlpha`</td>
    <td>It is used to specify the transparency of the pointer when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 70.</td>
  </tr>
  <tr>
    <td>`showBorderOnHover`</td>
    <td>It is used to specify whether the pointer border will be shown when the mouse pointer is hovered over it. Setting this attribute to `1` will show the pointer border, setting it to `0` (default) will hide it. </td>
  </tr>
  <tr>
    <td>`pointerBorderHoverThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the pointer border when the mouse pointer is hovered over it. This attribute works only if you have set the `showBorderOnHover` attribute to 1. </td>
  </tr>
  <tr>
    <td>`pointerBorderHoverColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the pointer border when the mouse pointer is hovered over it. This attribute works only if you have set the `showBorderOnHover` attribute to 1. </td>
  </tr>
  <tr>
    <td>`pointerBorderHoverAlpha`</td>
    <td>It is used to specify the transparency of the pointer border when the mouse pointer is hovered over it.  It takes values between 0 (transparent) and 100 (opaque). This attribute works only if you have set the `showBorderOnHover` attribute to 1. </td>
  </tr>
  <tr>
    <td>`pointerHoverRadius`</td>
    <td>It is used to specify the radius, in pixels, of the pointer when the mouse pointer is hovered over it. </td>
  </tr>
</table>