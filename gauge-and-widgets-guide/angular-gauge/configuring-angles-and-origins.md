---
permalink: gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins.html
title: Configuring Angles & Origins | FusionCharts
description: This section talks about configuring anlges and origins, how to use various chart object to create angles, configure gauge angles, set gauge origins, etc
heading: Configuring Angles & Origins
chartPresent: true
---

FusionCharts Suite XT allows you to draw the angular gauge from virtually any start angle to any end angle and in both directions.

In this section, you will be shown you can:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins#using-the-chart-object-attributes-to-create-gauges" class="smoth-scroll">Use the various chart object attributes to create angles</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins#configuring-angular-gauge-angles" class="smoth-scroll">Configure gauge angles to render angles of different shapes</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins#automatic-positioning-of-gauge-origins" class="smoth-scroll">Position gauge origins automatically</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins#manually-setting-gauge-origins" class="smoth-scroll">Set gauge origins manually</a>

## Using the `chart` Object Attributes to Create Gauges

The following attributes of the `chart` object are the main control parameters that help to create charts of various angles and from various starting points:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeStartAngle`</td>
    <td>It is used to specify the angle at which the gauge will start drawing.This attribute takes values between - 360 and 360 with 180 as the default value.</td>
  </tr>
  <tr>
    <td>`gaugeEndAngle`</td>
    <td>It is used to specify the angle at which the gauge will finish drawing. This attribute takes values between -360 and 360 with 0 as the default value.</td>
  </tr>
  <tr>
    <td>`gaugeOriginX`</td>
    <td>It is used to manually specify the x - coordinate at which the center of the gauge will be placed.This attribute is useful when you are designing small angle gauges or when you are using custom objects to draw certain objects and need to set the exact center position.</td>
  </tr>
  <tr>
    <td> `gaugeOriginY` </td>
    <td>It is used to manually specify the y-coordinate at which the center of the gauge will be placed. This attribute is useful when you are designing small angle gauges or when you are using custom objects to draw certain objects and need to set the exact center position. </td>
  </tr>
  <tr>
    <td>`gaugeOuterRadius`</td>
    <td>It is used to specify the outer radius,in pixels,for the color range scale.</td>
  </tr>
  <tr>
    <td> `gaugeInnerRadius` </td>
    <td>It is used to specify the inner radius, in pixels, for the color range scale. This attribute can take two types of values: one as exact pixels and the second as a percentage of the outer radius (e.g. 75%).</td>
  </tr>
</table>


## Configuring Angular Gauge Angles

The angular gauge comprehends angles as shown in the images below:

![image angular-gauge-angles1](/assets/images/angular-angles-1.jpg)![image angular-gauge-angles2](/assets/images/angular-angles-2.jpg)

Each point in the circle can be represented by two angles - a positive angle and a negative angle.This enables you to plot bi-directional angular gauges.

An angular gauge flipped horizontally looks like this:

{% embed_all chart-guide-fusionwidgets-xt-angular-gauge-configuring-angles-and-origins-example-1.js %}


To flip the gauge, all you need to do is swap the default values of the `gaugeStartAngle` and the `gaugeEndAngle` attributes.

<p class="text-warning"> When specifying the start and end angles for gauges, you should always make sure that the difference between start and end angle should not be more than 360 degrees, else the gauge will not behave as intended.</p>

## Automatic Positioning of Gauge Origins

Based on the start and end angle measures of the gauge, the x and y center points (origins) of the gauge are automatically positioned.

Shown below are some examples that will help you understand how the origin points shift based on the angle measures.

#### Example:

An angular gauge with the start angle and end angle measuring 0° and 90° respectively looks like this:

{% embed_all chart-guide-fusionwidgets-xt-angular-gauge-configuring-angles-and-origins-example-2.js %}



You can change the values of the `startAngle` and the `endAngle` attributes and see how the position of the origin
for each gauge changes depending on the combination of the start and end angle measures.

<p class="text-info"> Important note: Along with positioning the origins, a JavaScript Angular gauge also scales itself to best - fit into the available space.</p>

## Manually Setting Gauge Origins

You can manually configure the gauge origins if the automatic adjustment of the origins based on the start and end angle measures does not meet your requirement. To manually set gauge origins, you will need to explicitly set your required values for the `gaugeOriginX` and `gaugeOriginY` attributes.

An angular gauge rendered with manually-specified gauge origins looks like this:

{% embed_all chart-guide-fusionwidgets-xt-angular-gauge-configuring-angles-and-origins-example-3.js %}


<p class="text-info">In the above example we have only modified the `gaugeOriginY` attribute to shift the origin upward, you can do similar adjustments with `gaugeOriginX` also.</p>

<p class="text-info"> If you were to dynamically resize the gauge now with proper configuration, as explained in the (/gauge-and-widgets-guide/angular-gauge/dynamically-resizing-gauges) section, FusionCharts Suite XT will automatically resize the origin positions and radius specified.</p>