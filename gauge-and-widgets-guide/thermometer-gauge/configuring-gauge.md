---
permalink: gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html
title: Configuring Thermometer Gauge | FusionCharts
description: This section talks about customizing the gauge fill color and border, also about setting the radius and height of the thermometer manually.
heading: Configuring Thermometer Gauge
chartPresent: true
---

FusionCharts Suite XT allows you to customize several cosmetic and functional properties for the thermometer gauge.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#customizing-the-gauge-fill">Customize the gauge fill</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#customizing-the-gauge-borders">Customize the gauge border</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#setting-the-thermometer-radius-and-height-manually">Set the thermometer radius and height manually</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#showinghiding-the-temperature-value">Show/hide temperature value</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#showinghiding-tick-marks-and-tick-values">Configure tick marks and values</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/thermometer-gauge/configuring-gauge.html#configuring-hover-effects-for-the-thermometer-gauge">Configure the hover effect</a>

## Customizing the Gauge Fill

A thermometer gauge with the gauge fill customized looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-1.js %}

Given below is a brief description of the attributes used to customize the gauge fill:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gaugeFillColor`</td>
    <td>It is used to specify the hex code of the color that will be used as the fill color for the thermometer gauge, e.g. #008ee4. </td>
  </tr>
  <tr>
    <td>`gaugeFillAlpha`</td>
    <td>It is used to specify the transparency for the gauge fill. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 50.</td>
  </tr>
</table>


## Customizing the Gauge Borders

A thermometer gauge with the borders customized looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-2.js %}

Given below is a brief description of the attributes used to customize the thermometer gauge border :

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
    <td>It is used to specify the hex code of the color that will be used to render the entire border of the gauge, e.g. #111111. </td>
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


## Setting the Thermometer Radius and Height Manually

By default, the gauge automatically calculates the best thermometer radius and height based on the data you provide. You can, however, explicitly set the thermometer radius and height.

A thermometer gauge with the thermometer radius and height set manually looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-3.js %}

Given below is a brief description of the attributes used to manually set the thermometer radius and height:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`thmBulbRadius`</td>
    <td>It is used to specify the thermometer bulb radius, in pixels, e.g 35.</td>
  </tr>
  <tr>
    <td>`thmHeight`</td>
    <td>It is used to specify the height of the scale for the thermometer, in pixels, e.g 180.</td>
  </tr>
</table>


## Showing/Hiding the Temperature Value

By default, the current temperature value is shown below the thermometer gauge. However, you can choose to hide this value.

A thermometer gauge rendered with the temperature value hidden looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-4.js %}

Given below is a brief description of the attribute used to show/hide the gauge value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the temperature value will be shown with the gauge. Setting this attribute to `0` will hide the value, setting it to `1` (default) will show it.</td>
  </tr>
</table>


## Showing/Hiding Tick Marks and Tick Values

A thermometer gauge with the tick marks and tick values hidden looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-5.js %}

Given below is a brief description of the attributes used to show/hide the tick marks and values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether the tick marks will be shown on the gauge scale. Setting this attribute to `0` will hide the tick marks, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether the tick values will be shown on the gauge scale. Setting this attribute to `0` will hide the tick values, setting it to `1` (default) will show them.</td>
  </tr>
</table>


## Configuring Tick Marks and Tick Values

A thermometer gauge rendered with customized tick marks and tick values looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-6.js %}

Given below is a brief description of the attributes used to configure the tick marks and tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ticksOnRight`</td>
    <td>It is used to specify whether the tick marks and values will be rendered to the left or the right of the gauge. Setting this attribute to `0` renders the tick marks and values on the left, setting it to `1` (default) renders them on the right. </td>
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
    <td>If you need to show only every n-th tick value, this attribute is used to specify that value. </td>
  </tr>
</table>


## Customizing Tick Marks

A thermometer gauge configured for the tick marks cosmetic properties looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-7.js %}

Given below is a brief description of the attributes used to customize the tick marks’ cosmetic properties:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMColor`</td>
    <td>It is used to specify hex code of the color using which the major tick marks will be rendered, e.g. #666666.</td>
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
    <td>It is used to specify hex code of the color using which the minor tick marks will be rendered, e.g. #AAAAAA.</td>
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


## Configuring Hover Effects for the Thermometer Gauge

A thermometer gauge configured to enable hover effects looks like this:

{% embed_all gauge-and-widgets-guide-thermometer-gauge-configuring-gauge-example-8.js %}

Given below is a brief description of the attribute used to enable the hover effect for the thermometer gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled for the thermometer gauge. Setting this attribute to `1` enables the hover effect, setting it to `0` (default) disables it.</td>
  </tr>
</table>