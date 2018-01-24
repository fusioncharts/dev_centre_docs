---
permalink: basic-chart-configurations/number-format.html
title: Number Format | FusionCharts
description: The section talks about basics of number formatting/scaling. Examples for configuring decimal places by rounding off with trailing zeroes is also possible
heading: Number Format
chartPresent: true
---

FusionCharts Suite XT offers multiple options to format numbers on the chart. You can configure number prefixes & suffixes, decimal places, and scale numbers based on a pre-defined scale.

This section talks about:

* <a href="/basic-chart-configurations/number-format#number-formatting-basics" class="smoth-scroll">Number formatting basics</a>

    * <a href="/basic-chart-configurations/number-format#configuring-decimal-places-rounding-off" class="smoth-scroll">Configuring decimal places (rounding off)</a>

    * <a href="/basic-chart-configurations/number-format#configuring-decimal-places-rounding-off-with-trailing-zeroes" class="smoth-scroll">Configuring decimal places (rounding off with trailing zeroes)</a>

    * <a href="/basic-chart-configurations/number-format#automatic-number-formatting" class="smoth-scroll">Automatic number formatting</a>

    * <a href="/basic-chart-configurations/number-format#setting-custom-thousand-and-decimal-separator-character" class="smoth-scroll">Setting custom thousand and decimal separator character</a>

    * <a href="/basic-chart-configurations/number-format#configuring-thousand-separator-position" class="smoth-scroll">Configuring thousand separator position</a>

    * <a href="/basic-chart-configurations/number-format#adding-number-prefix-and-suffix" class="smoth-scroll">Adding number prefix and suffix</a>

* <a href="/basic-chart-configurations/number-format#number-scaling" class="smoth-scroll">Number Scaling</a>

    * <a href="/basic-chart-configurations/number-format#basic-example" class="smoth-scroll">Basic example</a>

    * <a href="/basic-chart-configurations/number-format#adding-billions-to-default-scaling" class="smoth-scroll">Adding billions to default scaling</a>

    * <a href="/basic-chart-configurations/number-format#putting-time-in-scale" class="smoth-scroll">Putting time in scale</a>

    * <a href="/basic-chart-configurations/number-format#storage-size-example" class="smoth-scroll">Storage size example</a>

    * <a href="/basic-chart-configurations/number-format#recursive-number-scaling" class="smoth-scroll">Recursive number scaling</a>

## Number formatting basics

### Configuring decimal places (rounding off)

A column 2D chart with values rounded off to two decimal places looks as below:

{% embed_all configuring-your-chart-number-format-example-1.js %}

Given below are the attributes used to configure decimal places:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`decimals`</td>
    <td>Number of decimal places to which all numbers on the chart will be rounded off to. Valid range is from `0` to `10`.</td>
  </tr>
  <tr>
    <td>`yAxisValueDecimals`</td>
    <td>If you've disabled automatic adjustment of div lines, you can specify the div line values decimal precision using this attribute.  Valid range is from `0` to `10`.</td>
  </tr>
  <tr>
    <td>`xAxisValueDecimals`</td>
    <td>If you've opted not to adjust vertical div lines, you can specify the decimal precision of the div line values using this attribute.  Valid range is from `0` to `10`.</td>
  </tr>
</table>






### Configuring decimal places (rounding off with trailing zeroes)

A column 2D chart with trailing zeroes will look as below:

{% embed_all configuring-your-chart-number-format-example-2.js %}

Given below are the attribute needed to force trailing zeroes:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`forceDecimals`</td>
    <td>Set this to `1`, to add/retain trailing zeroes so that all figures on the chart have the same number of digits after the decimal point. And `0`, to keep the numbers as is.</td>
  </tr>
  <tr>
    <td>`forceYAxisValueDecimals`</td>
    <td>Set this to `1`, to add/retain trailing zeroes so that y-axis values have the same number of digits after the decimal point. And `0`, to keep the numbers as is.</td>
  </tr>
  <tr>
    <td>`forceXAxisValueDecimals`</td>
    <td>Set this to `1`, to add/retain trailing zeroes so that x-axis values have the same number of digits after the decimal point. And `0`, to keep the numbers as is.</td>
  </tr>
</table>






### Automatic number formatting

FusionCharts Suite XT automatically formats your numbers by adding K, M (Kilo, Million) and proper commas to the numbers. A column 2D chart with automatic number formatting will look as below:

{% embed_all configuring-your-chart-number-format-example-3.js %}

In the above example, the data for chart is 12523, 14570.230, 17375 and 18235.79. FusionCharts Suite XT automatically formats the number scaling to convert to K (Thousands) & M (Millions).

Given below are the attributes needed for removing automatic number formatting :

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`formatNumber`</td>
    <td>Set this to `0` , to remove the commas in all the numbers on the chart. Or `1`(default) to add commas.
The value of this attribute works only if `yFormatNumber` and `xFormatNumber` attributes are not specifically mentioned.</td>
  </tr>
  <tr>
    <td>`yFormatNumber`</td>
    <td>Set this to `0` , to remove the commas in the numbers displayed on the y-axis. Or `1`(default) to add commas.
If this attribute is not specifically mentioned, the chart inherits the default value from `formatNumber` attribute.</td>
  </tr>
  <tr>
    <td>`xFormatNumber`</td>
    <td>Set this to `0` , to remove the commas in the numbers displayed on the x-axis. Or `1`(default) to add commas.
If this attribute is not specifically mentioned, the chart inherits the default value from `formatNumber` attribute.</td>
  </tr>
  <tr>
    <td>`formatNumberScale`</td>
    <td>Decides whether to add `K` (thousands) and `M` (millions) to a number after truncating and rounding it. Set this to `0`, to disallow automatic formatting or `1` to allow it.
The value of this attribute works only if `yFormatNumberScale` and `xFormatNumberScale` attributes are not specifically mentioned. </td>
  </tr>
  <tr>
    <td>`yFormatNumberScale`</td>
    <td>Decides whether to add `K` (thousands) and `M` (millions) to y-axis values after truncating and rounding them. Set this to `0`, to disallow automatic formatting or `1` to allow it.
If this attribute is not specifically mentioned, the chart inherits the default value from `formatNumberScale` attribute.</td>
  </tr>
  <tr>
    <td>`xFormatNumberScale`</td>
    <td>Decides whether to add `K` (thousands) and `M` (millions) to x-axis values after truncating and rounding them. Set this to `0`, to disallow automatic formatting or `1` to allow it.
If this attribute is not specifically mentioned, the chart inherits the default value from `formatNumberScale` attribute.</td>
  </tr>
</table>






### Setting custom thousand and decimal separator character

By default, a '**.'** (dot) is used as decimal separator and a '**,'** (comma) is used as thousand separator character. A column 2D chart with the thousand and decimal separator characters swapped will look as below:

{% embed_all configuring-your-chart-number-format-example-4.js %}

Given below are the attributes used to customize the thousand and decimal separator characters:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`decimalSeparator`</td>
    <td>Specifies the character to be used as the decimal separator in a number. </td>
  </tr>
  <tr>
    <td>`thousandSeparator`</td>
    <td>Specifies the character to be used as the thousand separator in a number. </td>
  </tr>
  <tr>
    <td>`inDecimalSeparator`</td>
    <td>In some countries, commas are used as decimal separators and dots as thousand separators. In data, if you specify such values, it will give an error while converting to number. So, FusionCharts XT accepts the input decimal and thousand separator for just display purposes, and converts it into the required format. This attribute lets you input the decimal separator. </td>
  </tr>
  <tr>
    <td>`inThousandSeparator`</td>
    <td>In some countries, commas are used as decimal separators and dots as thousand separators. In data, if you specify such values, it will give an error while converting to number. So, FusionCharts XT accepts the input decimal and thousand separator from user, so that it can convert it accordingly into the required format. This attribute lets you input the thousand separator. </td>
  </tr>
</table>






### Configuring thousand separator position

By default, a thousand separator character is placed in numbers greater than 999 after every third digit from the right. A column 2D chart with the thousand separator configured for multiple values will look as below:

{% embed_all configuring-your-chart-number-format-example-5.js %}

Given below is the attribute used to configure the thousand position value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`thousandSeparatorPosition`</td>
    <td>It specifies the number of digits after which the separator character should be placed. This attribute can take multiple values. In this case, the first thousand separator is placed after the number of digits specified by the second value. Thereafter, the separators are placed after the number of digits specified by the first value. When this attribute is set to `0`, it takes the default value, which is `3`, and places the separator after every three digits starting from right.</td>
  </tr>
</table>






### Adding number prefix and suffix

A column 2D chart with customized number prefix(set to $) and suffix(set to /day )looks as below:

{% embed_all configuring-your-chart-number-format-example-6.js %}

Given below are the attributes used to customize the number prefix and suffix:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>Specifies the prefix for all the numbers on the chart.
The value of this attribute works only if `yNumberPrefix` and `xNumberPrefix` attributes are not specifically mentioned.</td>
  </tr>
  <tr>
    <td>`yNumberPrefix`</td>
    <td>Specifies the prefix for all y-axis values on the chart.
If this attribute is not specifically mentioned, the chart inherits the default value from `numberPrefix` attribute.</td>
  </tr>
  <tr>
    <td>`xNumberPrefix`</td>
    <td>Specifies the prefix for all x-axis values on the chart.
If this attribute is not specifically mentioned, the chart inherits the default value from `numberPrefix` attribute.</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>Specifies the suffix for all the numbers on the chart.
The value of this attribute works only if `yNumberSuffix` and `xNumberSuffix` attributes are not specifically mentioned.</td>
  </tr>
  <tr>
    <td>`yNumberSuffix`</td>
    <td>Specifies the suffix for all y-axis values on the chart.
If this attribute is not specifically mentioned, the chart inherits the default value from `numberSuffix` attribute.</td>
  </tr>
  <tr>
    <td>`xNumberSuffix`</td>
    <td>Specifies the suffix for all x-axis values on the chart.
If this attribute is not specifically mentioned, the chart inherits the default value from `numberSuffix` attribute.</td>
  </tr>
</table>






<p class="text-info">For dual y-axis charts, the primary axis performs number formatting and scaling by default. However, formatting and scaling have to be explicitly defined for the secondary axis. To define the formatting and scaling properties for the secondary axis, prefix 's' to the attribute name. So, `numberPrefix` becomes `sNumberPrefix`, `forceYAxisValueDecimals` becomes `forceSYAxisValueDecimals`, and so on.</p>

## Number Scaling

Number scaling lets you shorten the numbers on charts using commonly used scales (like K, M etc.). You can define your own scales for numbers and then apply it to all numbers on the chart.

### Basic example

Let's start with the most basic example which is already defined in FusionCharts Suite XT- thousands (K) and millions (M) scale.

If you plot a chart with data as 1252322, 857023, 903753 and 1082357, the rendered chart looks as shown in the image below:

{% embed_all configuring-your-chart-number-format-example-7.js %}

Notice that FusionCharts Suite XT has scaled the numbers down to K. By default, FusionCharts Suite XT has the K, M (1000, 1000) scaling defined for each chart. Given below is the attribute used to allow automatic scaling:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`formatNumberScale`</td>
    <td>Decides whether to add `K` (thousands) and `M` (millions) to a number after truncating and rounding it. Set this to `0`, to disallow automatic formatting or `1` to allow it.
The value of this attribute works only if `yFormatNumberScale` and `xFormatNumberScale` attributes are not specifically mentioned. </td>
  </tr>
</table>






The following sub-sections will demonstrate how you can define the scaling to suit your requirements:

### Adding billions to default scaling

FusionCharts Suite XT does not have the scaling for billions defined. You will have to explicitly modify the number scaling to add billion.

This scale, in human terms, will look something as under:

1000 = 1 K, 1000 K = 1 M, 1000 M = 1 B

If you now plot a chart containing data in billions, the rendered chart looks as shown in the image below:

{% embed_all configuring-your-chart-number-format-example-8.js %}

Given below are the attributes used to add a billion scale:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`numberScaleValue`</td>
    <td>This defines the conversion ratio from one unit to the next unit. This attribute along with the `numberScaleUnit` attribute defines the scale used for display. This is a comma separated list of numbers, e.g. "60, 60, 24, 7" for a minutes to hour to days conversion.</td>
  </tr>
  <tr>
    <td>`numberScaleUnit`</td>
    <td>This defines the units of conversion from a lower unit to a higher unit. This has to be used along with the `numberScaleValue` attribute. Specified as a comma separated list, e.g. “Min, Hr, Day, Wk”.</td>
  </tr>
</table>


### Putting time in scale

Suppose we're plotting a chart which indicates the time taken by a list of automated processes. Each process in the list can take time ranging from a few seconds to few days. And we've the data for each process in seconds. Now, if we were to show all the data on the chart in seconds, it will become illegible.

What we can instead do is build a scale indicating time and then specify it to the chart. This scale, in human terms, will look something as under. A chart with the time scaled to minutes, hours or days looks as below:

{% embed_all configuring-your-chart-number-format-example-9.js %}





### Storage size example

Let’s see another example. Suppose you're plotting a chart indicating free storage volume of a backup server over a span of 24 hours. The free storage volume can be from few bits to a few gigabytes. Again, you have all your data in bits - so we can render the range as under:

{% embed_all configuring-your-chart-number-format-example-10.js %}

### Recursive number scaling

Recursive number scaling comes into the picture when you have number scales defined for your chart. It helps you display the chart data better by breaking-up the predefined number scale into smaller sections. For example, in a chart where time is being plotted, you can display 3.87 days as 3 days, 20 hours, 52 minutes and 25 seconds.

Let us build a chart which indicates the power back up used by a grocery store in a week. The power back up used for each day of the week can vary widely based on store operations. We have the data for each day in seconds. Now, if we were to show all the data on the chart in seconds, it will become illegible. What we can do is build a scale indicating time and then specify it to the chart.

The chart with recursive number scaling looks as below:

{% embed_all configuring-your-chart-number-format-example-11.js %}

Given below is the list of attributes used to enable recursive scaling:

<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`scaleRecursively`</td>
    <td>Set this to `1` to enable recursive scaling such that data values are broken down into lower level units. Set this to `0` (default) to show value at the topmost unit level.</td>
  </tr>
  <tr>
    <td>`maxScaleRecursion`</td>
    <td>Defines the number of steps of recursion allowed using an integer value. Set it to `-1` to enable recursion to the lowest possible unit level.</td>
  </tr>
</table>






<p class="text-info">For Scatter and Bubble charts, `xScaleRecursively`, `xMaxScaleRecursion`, and `xScaleSeparator` attributes are used to scale the numbers recursively on the x-axis. These attributes will work only when the `xAxisLabelMode` attribute is set to `AUTO` or `MIXED`. To scale the numbers recursively on the secondary y-axis in a Dual Y-Axis chart, the attributes `sScaleRecursively`, `sMaxScaleRecursion`, and `sScaleSeparator` are used.</p>

