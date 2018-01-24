---
permalink: gauge-and-widgets-guide/led-gauge/configuring-gauge.html
title: Configuring LED Gauge | FusionCharts
description: In LED gauge, you can configure various cosmetic & functional properties. This section talks about configuring background color, gauge border, bar size, etc
heading: Configuring LED Gauge
chartPresent: true
---

FusionCharts Suite XT allows you to configure various cosmetic and functional properties of LED gauges.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#configuring-the-led-gauge-background-color" class="smoth-scroll">Configure the LED gauge background color</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#using-a-single-color-for-the-led-fill-and-background" class="smoth-scroll">Use a single color fill for the LED background</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#showinghiding-the-gauge-border" class="smoth-scroll">Show/hide the gauge border</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#customizing-gauge-border-properties" class="smoth-scroll">Customize gauge border properties</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#configuring-the-led-bar-size-and-gap" class="smoth-scroll">Configure the LED bar size and gap</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#showinghiding-chart-value" class="smoth-scroll">Show/hide the chart value</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#showinghiding-tick-marks-and-tick-values" class="smoth-scroll">Show/hide tick marks and tick values</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#configuring-tick-marks-and-tick-values" class="smoth-scroll">Configure tick marks and tick values</a>

* <a href="/gauge-and-widgets-guide/led-gauge/configuring-gauge#configuring-hover-effects" class="smoth-scroll">Configure hover effects</a>

## Configuring the LED Gauge Background Color

A LED gauge with the background color configured looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-1.js %}

Given below is a brief description of the attribute used to configure the background color:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeFillColor`</td>
    <td>It is used to specify the hex code for the color that will applied to the gauge background, e.g. #666666.</td>
  </tr>
</table>


## Using a Single Color for the LED Fill and Background

When you divide the LED scale into color ranges, the LED bars in each zone take up the fill color of that color range. You can, however, render the LED background using a single fill color - the color of the range to which the current value belongs.

A LED gauge rendered with a single color for the LED fill and background looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-2.js %}

Given below is a brief description of the attributes used to apply a single color for the LED fill and the LED background::

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`useSameFillColor`</td>
    <td>It is used to specify whether a single fill color - the color of the range to which the current value belongs - will be applied to the activated LED bars. Setting this attribute to `1` will apply the same fill color, setting it to `0` (default) will apply the color specific to that range.</td>
  </tr>
  <tr>
    <td>`useSameFillBgColor`</td>
    <td>It is used to specify whether a single color - the color of the range to which the current value belongs - will be applied to the entire LED background. Setting this attribute to `1` will apply the same fill color, setting it to `0` (default) will apply the color specific to that range. </td>
  </tr>
</table>


## Showing/Hiding the Gauge Border

A LED gauge rendered with the border hidden looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-3.js %}

Given below is a brief description of the attribute used to show/hide the LED gauge border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showGaugeBorder`</td>
    <td>It is used to specify whether the border for the LED gauge will be shown. Setting this attribute to 0 hides the gauge border, setting it to 1 (default) shows it. </td>
  </tr>
</table>


## Customizing Gauge Border Properties

A LED gauge rendered with a customized border looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-4.js %}

Given below is a brief description of the attributes used to customize the gauge border:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the entire border of the gauge, e.g. #111111. </td>
  </tr>
  <tr>
    <td>`gaugeBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the gauge border, e.g. 5.</td>
  </tr>
  <tr>
    <td>`gaugeBorderAlpha`</td>
    <td>It is used to specify the transparency for the gauge border. This attribute takes values 0 (transparent) and 100 (opaque), e.g. 40.</td>
  </tr>
</table>


## Configuring the LED Bar Size and Gap

By default, the gauge determines the bar size and the gap automatically, based on the data provided by you. However, you can explicitly specify the bar size and gap.

A LED gauge configured for the LED bar size and gap looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-5.js %}

Given below is a brief description of the attributes used to configure the LED bar size and gap:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ledSize`</td>
    <td>It is used to specify the size, in pixels, of the LED bar, e.g. 5.</td>
  </tr>
  <tr>
    <td>`ledGap`</td>
    <td>It is used to specify the gap, in pixels, between consecutive LED bars,e.g. 3.</td>
  </tr>
</table>


<p class="text-info">To make the LEDs appear continuous, you can set `ledGap` to 0.</p>

## Showing/Hiding Chart Value

An LED gauge rendered with the chart value hidden looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-6.js %}

Given below is a brief description of the attribute used to show/hide the chart value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the current data value, or the chart value, should be shown. Setting this attribute to `0` hides the chart value, setting it to `1` (default) shows it.</td>
  </tr>
</table>


## Showing/Hiding Tick Marks and Tick Values

An LED gauge with the tick marks and tick values hidden looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-7.js %}

Given below is a brief description of the attributes used to show/hide tick marks and tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether tick marks will be shown for the LED gauge. Setting this attribute to `0` hides the tick marks, setting it to `1` (default) shows them.</td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether tick values will be shown for the LED gauge. Setting this attribute to `0` hides the tick values, setting it to `1` (default) shows them.</td>
  </tr>
</table>



## Configuring Tick Marks and Tick Values

By default, the tick marks and values are placed below the gauge in the horizontal LED gauge and to the right in the vertical LED gauge. However, you can explicitly configure the position of tick marks and tick values as required.

You can also configure the number of tick marks, set the tick marks and tick values distance, and skip the tick values.

A LED gauge with the tick marks and tick values configured looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-8.js %}

Given below is a brief description of the attributes used to configure tick marks and tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ticksBelowGauge`</td>
    <td>It is used to specify whether the tick marks and values will be rendered below or above the gauge. Setting this attribute to `0` renders the tick marks and values above the gauge, setting it to `1` (default) renders them below the gauge. This attribute is applicable only to the horizontal LED gauge.</td>
  </tr>
  <tr>
    <td>`ticksOnRight`</td>
    <td>It is used to specify whether the tick marks and values will be rendered to the left or the right. Setting this attribute to `0` renders the tick marks and values on the left, setting it to `1` (default) renders them on the right. This attribute is applicable only to the vertical LED gauge.</td>
  </tr>
  <tr>
    <td>`tickMarkDistance`</td>
    <td>It is used to specify the distance, in pixels, between the tick marks and the gauge scale, e.g. 10.</td>
  </tr>
  <tr>
    <td>`tickValueDistance`</td>
    <td>It is used to specify the distance, in pixels, between the tick marks and the tick values, e.g. 5.</td>
  </tr>
  <tr>
    <td>`adjustTM`</td>
    <td>It is used to specify whether the number of major tick marks should be automatically adjusted to ensure better distribution of the chart scale. Setting this attribute to `0` disables automatic adjustment of tick marks, setting it to `1` (default) enables it. </td>
  </tr>
  <tr>
    <td>`majorTMNumber`</td>
    <td>It is used to specify the number of major tick marks to be rendered, e.g. 12.</td>
  </tr>
  <tr>
    <td>`majorTMHeight`</td>
    <td>It is used to specify the height of major tick marks, e.g., 5</td>
  </tr>
  <tr>
    <td>`minorTMNumber`</td>
    <td>It is used to specify the number of minor tick marks to be rendered, e.g. 4.</td>
  </tr>
  <tr>
    <td>`minorTMHeight`</td>
    <td>It is used to specify the height of minor tick marks, e.g., 7.</td>
  </tr>
  <tr>
    <td>`tickValueStep`</td>
    <td>If you need to show only every n-th tick value , this attribute is used to specify that value.</td>
  </tr>
</table>


FusionCharts Suite XT also allows you to configure the cosmetics of major and minor tick marks.

A LED gauge rendered with customized major and minor tick marks looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-9.js %}

Given below is a brief description of the attributes used to configure the major and minor tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the major tick marks, e.g. #666666.</td>
  </tr>
  <tr>
    <td>`majorTMAlpha`</td>
    <td>It is used to specify the transparency of the major tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
  <tr>
    <td>`majorTMThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the major tick marks, e.g. 5.</td>
  </tr>
  <tr>
    <td>`minorTMColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the minor tick marks, e.g. #AAAAAA.</td>
  </tr>
  <tr>
    <td>`minorTMAlpha`</td>
    <td>It is used to specify the transparency of the minor tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
  <tr>
    <td>`minorTMThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the minor tick marks, e.g. 5.</td>
  </tr>
</table>


## Configuring Hover Effects

FusionCharts Suite XT allows you to display hover effects for the gauge.

An LED gauge configured for hover effects looks like this:

{% embed_all gauge-and-widgets-guide-led-gauge-configuring-gauge-example-10.js %}

Given below is a brief description of the attribute used to enable the hover effect for the LED gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled for the LED gauge. Setting this attribute to `1` enables the hover effect, setting it to `0` (default) disables it.</td>
  </tr>
</table>