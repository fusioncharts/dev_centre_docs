---
permalink: basic-chart-configurations/tick-marks.html
title: Configure Tick Marks in a Gauge| FusionCharts
description: Tick marks in gauges are calibration marks to help interpret reading. One show/hide tick marks,show tick mark values in decimals or show nth tick mark value
heading: Tick Marks
chartPresent: true
---

Tick marks, an element of gauges in FusionChart Suite XT, are calibration marks on the scale to help interpret readings on a gauge. There are two types of tick marks that can be drawn on the chart:

* Major Tick Marks – These are the bigger lines on the radial scale

* Minor Tick Marks – These are the smaller lines interspersed within the major tick marks

A LED gauge with major and minor tick marks looks like this:

![Tick marks](/assets/images/tick_marks.png)

This section talks about:

* <a href="/basic-chart-configurations/tick-marks#showinghiding-tick-marks-and-tick-values" class="smoth-scroll">Showing or hiding tick marks and tick values</a>

* <a href="/basic-chart-configurations/tick-marks#configuring-the-tick-value-position" class="smoth-scroll">Configuring tick value position</a>

* <a href="/basic-chart-configurations/tick-marks#showing-every-nth-tick-mark-value" class="smoth-scroll">Showing every nth tick mark value</a>

* <a href="/basic-chart-configurations/tick-marks#showing-tick-values-in-decimals" class="smoth-scroll">Showing tick values in decimals</a>

* <a href="/basic-chart-configurations/tick-marks#configuring-tick-mark-and-tick-value-padding" class="smoth-scroll">Configuring tick mark and tick value padding</a>

* <a href="/basic-chart-configurations/tick-marks#configuring-the-number-of-major-and-minor-tick-marks" class="smoth-scroll">Configuring the number of major and minor tick marks</a>

* <a href="/basic-chart-configurations/tick-marks#configuring-cosmetic-properties-of-tick-marks" class="smoth-scroll">Configuring cosmetics of tick marks</a>

## Showing/hiding tick marks and tick values

A LED gauge with tick marks and tick values hidden looks as below:

{% embed_all configuring-your-chart-tick-marks-example-1.js %}

The following attributes can be used to show/hide tick marks and tick values:


<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`showTickMarks`</td>
   <td>Set this to to `0`, to hide tick marks on a gauge. By default, tick marks are visible with the value set to `1`.</td>
 </tr>
 <tr>
   <td>`showTickValues`</td>
   <td>Set this to `0`, to hide data values corresponding to the tick marks. By default this is set to `1`, with the tick values being visible.</td>
 </tr>
 <tr>
   <td>`showLimits`</td>
   <td>Set this to `1` (default) to show the upper and lower limits of the gauge or to`0` to hide them.</td>
 </tr>
</table>


## Configuring the tick value position

By default, tick marks and tick values are placed outside a gauge. In vertical gauges (like the vertical LED gauge), by default, they are placed to the right of the gauge. Similarly, in horizontal gauges (like the horizontal LED gauge), they are placed below the gauge. FusionCharts Suite XT allows you to customize the placement of tick marks and tick values.

An angular gauge with tick marks and tick values placed inside looks as below:

{% embed_all configuring-your-chart-tick-marks-example-10a.js %}

Following is the list of attributes for configuring tick mark position and tick values:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`placeTicksInside`</td>
   <td>Set this to `1` to place the tick marks inside the gauge. Set it to `0` (default) otherwise.</td>
 </tr>
 <tr>
   <td>`placeValuesInside`</td>
   <td>Set this to `1` to place the tick values inside the gauge. Set it to `0` (default) otherwise.</td>
 </tr>
</table>


A linear gauge with tick marks and tick values placed above looks as below:

{% embed_all configuring-your-chart-tick-marks-example-10b.js %}

Given below is the attribute used to configure tick mark position and tick values for a horizontal gauge.

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`ticksBelowGauge`</td>
   <td>Set this to `1` (default) to place the ticks at the bottom of the horizontal gauge. Set it to `0` to place them on the top.</td>
 </tr>
</table>


Similarly for a vertical gauge, tick marks and tick values can be placed on the right or left. Given below is the attribute used to configure the position of tick marks and tick values for a vertical gauge:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`ticksOnRight`</td>
   <td>Set this to `1` (default) to place the ticks to the right of the vertical gauge. Set it to `0` to place them on the left.</td>
 </tr>
</table>


## Showing every nth tick mark value

FusionCharts allows you to show every `n-th` value, where the upper and lower limit of the scale is always displayed. A Horizontal LED gauge displaying n-th value looks as below:

{% embed_all configuring-your-chart-tick-marks-example-2.js %}

Given below is the attribute used to every n-th tick value for a horizontal led gauge:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`tickValueStep`</td>
   <td>This attribute specifies every n-th tick value of the gauge, where upper and lower limit of the scale is always displayed.</td>
 </tr>
</table>


## Showing tick values in decimals

You can configure number of decimals and can also force the number of decimals on tick values. A horizontal LED gauge showing tick value in decimals looks as below:

{% embed_all configuring-your-chart-tick-marks-example-3.js %}

Given below are the attributes used to configure tick values in decimals:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`tickValueDecimals`</td>
   <td>This attribute specifies the number of decimals to which tick values will be rounded to.</td>
 </tr>
 <tr>
   <td>`forceTickValueDecimals`</td>
   <td>This attribute when set to `1`, will force the number of decimals on tick values.</td>
 </tr>
</table>


## Configuring tick mark and tick value padding

By setting the tick mark padding and tick value padding, you can control the amount of space between the tick mark and the gauge or between the tick values and tick marks. A horizontal led gauge with tick mark and tick values with defined padding is shown below:

{% embed_all configuring-your-chart-tick-marks-example-4.js %}

Given below are the attributes used to set the padding for gauge, tick marks and tick values:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`tickMarkDistance`</td>
   <td>This attribute specifies the distance between the gauge and the tick marks(in pixels).</td>
 </tr>
 <tr>
   <td>`tickValueDistance`</td>
   <td>This attribute specifies the distance between tick values and tick marks(in pixels).</td>
 </tr>
</table>


## Configuring the number of major and minor tick marks

FusionCharts Suite XT allows to you to define the number of major and minor tick marks to be rendered on a gauge. A horizontal LED gauge with the number of tick marks manually configured looks as below:

{% embed_all configuring-your-chart-tick-marks-example-11a.js %}

Given below is a list of attributes used to configure the number of tick marks:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`adjustTM`</td>
   <td>If set to `0`, it disables automatic adjustment of tick marks by the chart. By default, the chart automatically adjusts the number of major ticks to a best feasible value.</td>
 </tr>
 <tr>
   <td>`majorTMNumber` and `minorTMNumber`</td>
   <td>They specify the number of major and minor tick marks, respectively, to be rendered on the gauge. Accepts a non-negative integer.</td>
 </tr>
</table>


## Configuring cosmetic properties of tick marks

You can configure the color, transparency, height, and thickness of both, major and minor tick marks. A horizontal LED gauge with customized tick marks looks as below:

{% embed_all configuring-your-chart-tick-marks-example-11b.js %}

Given below is the list of attributes used to configure cosmetic properties of tick marks:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`majorTMColor` and `minorTMColor`</td>
   <td>They specify the hex code of the color, e.g `#00ffaa`, that will be used to render the major and minor tick marks, respectively.</td>
 </tr>
 <tr>
   <td>`majorTMAlpha` and `minorTMAlpha`</td>
   <td>They specify the transparency of the major and minor tick marks, respectively, with values from `0` (transparent) to `100` (opaque). </td>
 </tr>
 <tr>
   <td>`majorTMHeight` and `minorTMHeight`</td>
   <td>They specify the height of the major and minor tick marks in pixels, respectively.</td>
 </tr>
 <tr>
   <td>`majorTMThickness` and `minorTMThickness`</td>
   <td>They specify the thickness of the major and minor tick marks in pixels, respectively.</td>
 </tr>
</table>





