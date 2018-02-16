---
permalink: gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html
title: Configuring Tick Marks in Linear Gauge | FusionCharts
description: This sections of led gauge talks about configuring tick values, position of tick marks, number of major and minor tick marks and their cosmetics.
heading: Configuring Tick Marks in Linear Gauge
chartPresent: true
---

FusionCharts Suite XT allows you to configure several functional and cosmetic properties for tick marks and tick values.

In this section, you will be shown how to:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#showinghiding-tick-marks-and-tick-values">Show/hide tick marks and tick values</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#configuring-tick-values">Configure tick values</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#configuring-the-position-of-tick-marks-and-tick-values">Configure the position of tick marks and values</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#configuring-the-number-of-major-and-minor-tick-marks">Configure the number of major and minor tick marks</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#configuring-cosmetics-for-tick-marks">Configure tick mark cosmetics</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/configuring-tick-marks.html#configuring-the-tick-mark-and-tick-value-padding">Configure tick mark and tick value padding</a>

## Showing/Hiding Tick Marks and Tick Values

A linear gauge configured to show/hide tick marks and tick values looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-1.js %}

Look at the check boxes rendered below the gauge. If you select the __Show Tick Mark?__ check box, the tick marks will be shown; if you clear it, they will be hidden. Similarly, you can select/clear the __Show Tick Value?__ check box to show/hide tick values.

Given below is a brief description of the attributes used to show/hide tick marks and tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTickMarks`</td>
    <td>It is used to specify whether the tick marks will be shown or hidden on the gauge scale. Setting this attribute to `0` will hide the tick marks, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`showTickValues`</td>
    <td>It is used to specify whether the tick values will be shown or hidden on the gauge scale. Setting this attribute to `0` will hide the tick values, setting it to `1` (default) will show them.</td>
  </tr>
</table>


## Configuring Tick Values

When you have a large number of tick marks on the gauge scale, showing all tick values can make the gauge appear clumsy. To avoid this, you can opt to show every nth tick value on the gauge scale. You can also configure whether decimal values will be rendered as tick values and the number of digits that appear after the decimal point.

A linear gauge configured to render decimal tick values corresponding to every alternate tick mark looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-2.js %}

Given below is a brief description of the attributes used to configure tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickValueStep`</td>
    <td>If you need to show only every n-th tick value, this attribute is used to specify that value.</td>
  </tr>
  <tr>
    <td>`tickValueDecimals`</td>
    <td>It is used to specify the number of digits that will be rendered after the decimal point, e.g. 2.</td>
  </tr>
  <tr>
    <td>`forceTickValueDecimals`</td>
    <td>It is used to specify whether decimals will be forced on tick values. Setting this attribute to `1` will force decimals on tick values, setting it to `0` (default) will not force them.</td>
  </tr>
</table>


## Configuring the Position of Tick Marks and Tick Values

By default, the tick marks are placed outside the gauge, below the gauge scale. The tick values are also rendered outside the gauge. You can, however, configure the position of tick marks and tick values based on your requirements.

A linear gauge configured to place tick marks and tick values inside the gauge, above the gauge scale, looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-3.js %}

Given below is a brief description of the attributes used to configure the positions of tick marks and tick values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`ticksBelowGauge`</td>
    <td>It is used to specify whether the tick marks will be rendered above or below the gauge. Setting this attribute to `0` will render the tick marks above the gauge, setting it to `1` (default) will place them below the gauge.</td>
  </tr>
  <tr>
    <td>`placeTicksInside`</td>
    <td>It is used to specify whether the tick marks will be placed inside the gauge or outside it. Setting this attribute to `1` will place the tick marks inside the gauge, setting it to `0` (default) will place them outside.</td>
  </tr>
  <tr>
    <td>`placeValuesInside`</td>
    <td>It is used to specify whether the tick values will be placed inside the gauge or outside it. Setting this attribute to `1` will place the tick values inside the gauge, setting it to `0` (default) will place them outside.</td>
  </tr>
</table>


## Configuring the Number of Major and Minor Tick Marks

By default, the gauge automatically decides the number of major and minor tick marks to be rendered based on the data you provide. However, you can explicitly specify the number of tick marks to be rendered.

A linear gauge with the number of major and minor tick marks explicitly set to 9 and 5, respectively, looks like this

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-4.js %}

Given below is a brief description of the attributes used to configure the number of tick marks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`majorTMNumber`</td>
    <td>It is used to specify the number of major tick marks to be rendered.</td>
  </tr>
  <tr>
    <td>`minorTMNumber`</td>
    <td>It is used to specify the number of minor tick marks to be rendered.</td>
  </tr>
  <tr>
    <td>`adjustTM`</td>
    <td>It is used to specify whether the number of major tick marks should be automatically adjusted to ensure better distribution of the chart scale. Setting this attribute to `0` disables automatic adjustment of tick marks, setting it to `1` (default) enables it. </td>
  </tr>
</table>


## Configuring Cosmetics for Tick Marks

A linear gauge configured for the cosmetic properties of major and minor tick marks looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-5.js %}

Given below is a brief description of the attributes used to configure the tick marks’ cosmetics:

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
    <td>It is used to specify the transparency of the major tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
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
    <td>It is used to specify the transparency of the minor tick marks. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 100.</td>
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


## Configuring the Tick Mark and Tick Value Padding

By default, the gauge automatically decides the padding distance for tick marks and tick values. However, you can explicitly specify the padding distance.

A linear gauge configured for the tick mark and tick value padding looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-configuring-tick-marks-example-6.js %}

Given below is a brief description of the attributes used to configure the tick mark and tick value padding:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tickMarkDistance`</td>
    <td>It used to specify the distance, in pixels, between the gauge scale and the tick marks.</td>
  </tr>
  <tr>
    <td>`tickValueDistance`</td>
    <td>It is used to specify the distance, in pixels, between the tick marks and their corresponding tick values.</td>
  </tr>
</table>