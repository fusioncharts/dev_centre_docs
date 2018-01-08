---
permalink: gauge-and-widgets-guide/angular-gauge/configuring-tick-marks.html
title: Configuring Tick Marks in Angular Gauge | FusionCharts
description: This section talks about showing/hiding the tick marks and tick values, configuring tick mark cosmetics, munber of major and minor tick marks, etc
heading: Configuring Tick Marks in Angular Gauge
chartPresent: true
---

FusionCharts Suite XT allows you to configure several functional and cosmetic properties for tick marks and tick values.

In this section, you will be shown how to:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#showinghiding-tick-marks-and-tick-values" class="smoth-scroll">Show/hide the tick marks and tick values</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#placing-tick-marks-and-tick-values-inside-the-gauge" class="smoth-scroll">Place tick marks and tick values inside the gauge</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#configuring-the-number-of-major-and-minor-tick-marks" class="smoth-scroll">Configure the number of major and minor tick marks</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#configuring-cosmetics-for-major-and-minor-tick-marks" class="smoth-scroll">Configure tick mark cosmetics</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#configuring-tick-values" class="smoth-scroll">Configure tick values</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks#setting-tick-value-distance" class="smoth-scroll">Set the tick value distance</a>

## Showing/Hiding Tick Marks and Tick Values

An angular gauge rendered with the tick marks and tick values hidden looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-1.js %}

Given below is a brief description of the attributes used to show/hide the tick marks and values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether the tick marks will be shown or hidden. Setting this attribute to `0` hides the tick marks, setting it to `1` (default) shows them. </td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether the tick values will be shown or hidden. Setting this attribute to `0` hides the tick values, setting it to `1` (default) shows them. </td>
  </tr>
</table>



## Placing Tick Marks and Tick Values Inside the Gauge

By default, the tick marks and tick values are rendered outside the gauge scale. However, you can configure them to be placed inside the gauge.

An angular gauge rendered with the tick marks and tick values placed inside looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-2.js %}

Given below is a brief description of the attributes used to place the tick marks and tick values inside the gauge:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`placeTicksInside`</td>
    <td>It is used to specify whether the tick marks should be placed inside (on the inner radius) or outside (on the outer radius) the gauge. Setting this attribute to `1` places the tick marks inside the gauge, setting it to `0` (default) places them outside.</td>
  </tr>
  <tr>
    <td>`placeValuesInside`</td>
    <td>It is used to specify whether the tick values should be placed inside or outside the gauge. Setting this attribute to `1` places the tick values inside the gauge, setting it to `0` (default) places them outside.</td>
  </tr>
</table>



## Configuring the Number of Major and Minor Tick Marks

Based on the data you provide, the gauge automatically decides the number of major and minor tick marks to render. However, you can explicitly specify the number of major and minor tick marks.

An angular gauge with the number of major and minor tick marks explicitly set to 12 and 4, respectively, looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-3.js %}

Given below is a brief description of the attributes used to explicitly set the number of major and minor tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMNumber`</td>
    <td>It is used to specify the number of major tick marks to be rendered on the gauge scale.</td>
  </tr>
  <tr>
    <td>`minorTMNumber`</td>
    <td>It is used to specify the number of minor tick marks to be rendered on the gauge scale.</td>
  </tr>
</table>



## Configuring Cosmetics for Major and Minor Tick Marks

You can customize the appearance of the major and minor tick marks for their color, transparency, height, and thickness.

An angular gauge rendered with the cosmetics for major and minor tick marks configured looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-4.js %}

Given below is a brief description of the attributes used to configure the cosmetics for major and minor tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMColor`</td>
    <td>It is used to specify the hex code of the color using which the major tick marks will be rendered on the gauge, e.g. #333333.</td>
  </tr>
  <tr>
    <td>`majorTMAlpha`</td>
    <td>It is used to specify the transparency of the major tick marks, e.g. 100.</td>
  </tr>
  <tr>
    <td>`majorTMHeight`</td>
    <td>It is used to specify the height of the major tick marks, e.g. 15.</td>
  </tr>
  <tr>
    <td>`majorTMThickness`</td>
    <td>It is used to specify the thickness of the major tick marks, e.g. 2.</td>
  </tr>
  <tr>
    <td>`minorTMColor`</td>
    <td>It is used to specify the hex code of the color using which the minor tick marks will be rendered on the gauge, e.g. #666666.</td>
  </tr>
  <tr>
    <td>`minorTMAlpha`</td>
    <td>It is used to specify the transparency of the minor tick marks, e.g. 100.</td>
  </tr>
  <tr>
    <td>`minorTMHeight`</td>
    <td>It is used to specify the height of the minor tick marks, e.g. 12.</td>
  </tr>
  <tr>
    <td>`minorTMThickness`</td>
    <td>It is used to specify the thickness of the minor tick marks, e.g. 1.</td>
  </tr>
</table>



## Configuring Tick Values

### Showing Every nth Tick Value

You can opt to show only every nth tick value on the angular gauge scale.

An angular gauge configured to show only every alternate tick value looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-5.js %}

Given below is a brief description of the attribute used to show only every nth tick value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickValueStep`</td>
    <td>Set this to a whole number N to display every Nth tick mark and hide all intervening tick marks. </td>
  </tr>
</table>



### Setting Decimals for Tick Values

You can also show decimal numbers as tick values. For these decimal numbers, you can configure how many digits will be rendered after the decimal point and whether digits will be forced after the decimal point.

An angular gauge configured to render one digit after the decimal point and force decimals looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-6.js %}

Given below is a brief description of the attributes used to configure decimals for tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickValueDecimals`</td>
    <td>It is used to specify the number of digits that will be rendered after the decimal point, e.g. 2.</td>
  </tr>
  <tr>
    <td>`forceTickValueDecimals`</td>
    <td>It is used to specify whether decimals will be forced on tick values. Setting this attribute to `1` will force decimals on tick values, setting it to `0` (default) will not force them. </td>
  </tr>
</table>



## Setting Tick Value Distance

An angular gauge rendered with a distance of 25 pixels between the tick marks and values looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-tick-marks-example-7.js %}

Given below is a brief description of the attribute used to set the tick value distance:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickValueDistance`</td>
    <td>It is used to specify the distance, in pixels, between tick marks and their corresponding values.</td>
  </tr>
  <tr>
    <td>`manageValueOverLapping`</td>
    <td>It is used to specify whether overlapping of tick values and trend values will be eliminated. Setting this attribute to 1 enables automatic management of overlapping values, setting it to 0 disables it.</td>
  </tr>
  <tr>
    <td>`autoAlignTickValues`</td>
    <td>It is used to specify whether the gauge will automatically place tick values to reduce overlapping of the tick values with the gauge. Setting this attribute to 1 enables the automatic alignment, setting it to 0 disables it.</td>
  </tr>
</table>