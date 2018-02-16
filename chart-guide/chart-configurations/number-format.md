---
title: Number Format | FusionCharts
description: The section talks about basics of number formatting/scaling. Examples for configuring decimal places by rounding off with trailing zeroes is also possible
heading: Number Format
breadcrumb: [["Home", "/"], ["Number Format"]]
---

FusionCharts Suite XT offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale.

## Round off Decimal Places

To round off the decimals for all the numbers on the chart set the number of decimal places to which all the numbers on the chart will be rounded off to using the `decimals` attribute. Valid range is from `0` to `10`.

Refer to the code below:

```json
{
    "chart": {
        "decimals": "2"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-number-format-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/cqah4e7x/ "@@open-newtab") to edit the above chart.

You can also round off the decimal places for only the horizontal and vertical div lines. To do so, set the decimal precision of the div lines using the `yAxisValueDecimals` (horizontal div lines) and `xAxisValueDecimals` (vertical div lines) attributes respectively. 

> Note: These settings will only work if the automatic adjustment of horizontal and vertical div lines is disabled.

Refer to the code below:

```json
{
    "chart": {
        "yAxisValueDecimals": "2",
        "xAxisValueDecimals": "3"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-number-format-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/6w50wtfd/ "@@open-newtab") to edit the above chart.

## Round off with Trailing Zeroes

Use the following attributes to force trailing zeroes:

* Set the `forceDecimals` attribute to `1`, to add/retain the same number of trailing zeros after the decimal point to all figures on the chart.

* Set the `forceYAxisValueDecimals` attribute to `1`, to add/retain the same number of trailing zeros after the decimal point to all Y-axis values on the chart.

* Set the `forceXAxisValueDecimals` to `1`, to add/retain the same number of trailing zeros after the decimal point to all X-axis values on the chart.

Refer to the code below:

```json
{
    "chart": {
        "forceDecimals": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/2g4ne3xf/ "@@open-newtab") to edit the above chart.

## Disable Automatic Formatting of Numbers

FusionCharts XT automatically formats numbers displayed on charts. Use the following attributes to disable automatic number formatting:

* Set the `formatNumber` attribute to `0`, to remove the commas in all the numbers on the chart. Note that this attribute will only work if you don't specifically mention the  `yFormatNumber` and `xFormatNumber` attributes.

* Set the `yFormatNumber` attribute to `0`, to remove the commas in all the numbers on the Y-axis of the chart. If you don't mention this attribute, the chart will inherit the default value from the `formatNumber` attribute.

* Set the `xFormatNumber` attribute to `0`, to remove the commas in all the numbers on the X-axis of the chart. If you don't mention this attribute, the chart will inherit the default value from the `formatNumber` attribute.

* Set the `formatNumberScale` attribute to `1`, to automatically add K (thousands) and M (millions) to a number after truncating and rounding it. Alternatively, set this to `0` to disallow automatic formatting. Note that this attribute will only work if you don't specifically mention the `yFormatNumberScale` and `xFormatNumberScale` attributes.

* Set the `yFormatNumberScale` attribute to `1`, to automatically add K (thousands) and M (millions) to all the numbers on the Y-axis of the chart. Alternatively, set this to `0` to disallow automatic formatting. If you don't mention this attribute, the chart will inherit the default value from the `formatNumberScale` attribute.

* Set the `xFormatNumberScale` attribute to `1`, to automatically add K (thousands) and M (millions) to all the numbers on the X-axis of the chart. Alternatively, set this to `0` to disallow automatic formatting. If you don't mention this attribute, the chart will inherit the default value from the `formatNumberScale` attribute.

Refer to the code below:

```json
{
    "chart": {
        "formatNumber": "0"
    }
}
```
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/L6bzmLd7/ "@@open-newtab") to edit the above chart.

A column 2D chart with automatic number formatting looks like the one given above. The data for the chart is `12523, 14570.230, 17375` and `18235.79`. FusionCharts Suite XT automatically formats the number scaling by converting it to `K` and `M`.

## Customize Thousand and Decimal Separator

You can customize the thousand and decimal separator characters from the default `,` (comma) and `.` (dot) respectively. To do so, use the attributes given below:

* Specify the character to be used as the decimal separator, using the `decimalSeparator` attribute.

* Specify the character to be used as the thousand separator, using the `thousandSeparator` attribute.

* Specify the character to be displayed as decimal separator, while leaving the actual character used for calculations to the default value, using the `inDecimalSeparator` attribute. This is useful if you follow the European number format, where a `,` (comma) is used as the decimal separator, instead of the default `.` (dot).

* Specify the character to be displayed as thousand separator, while leaving the actual character used for calculations to the default value, using the `inThousandSeparator` attribute. This is useful if you follow the European number format, where a `.` (dot) is used as the thousand separator, instead of the default `,` (comma).

Refer to the code below:

```json
{
    "chart": {
        "decimalSeparator": ",",
        "thousandSeparator": "."
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-number-format-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lab3ckjd/ "@@open-newtab") to edit the above chart.

## Configure Thousand Separator Position

Specify the number of digits after which the thousand separator character should be placed, using the `thousandSeparatorPosition` attribute. If you set its value to `0`, the attribute will take its default value, which is `3`, and places the separator after every three digits starting from the right.

Refer to the code below:

```json
{
    "chart": {
        "thousandSeparatorPosition": "2,3"
    }
}
```
The chart will look like as shown below:

{% embed_chart chart-configurations-number-format-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/r8bL2r4p/ "@@open-newtab") to edit the above chart.

## Add Number Prefix and Suffix

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

* Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

* Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

* Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

* Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

* Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

Refer to the code below:

```json
{
    "chart": {
        "numberSuffix": "/day",
        "numberPrefix": "$"
    }
}
```
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/hd8uvdfp/ "@@open-newtab") to edit the above chart.

> For dual y-axis charts, the primary axis performs number formatting and scaling by default. However, you have to explicitly define formatting and scaling for the secondary axis. To define the formatting and scaling properties for the secondary axis, prefix 's' to the attribute name. So, `numberPrefix` becomes `sNumberPrefix`, `forceYAxisValueDecimals` becomes `forceSYAxisValueDecimals`, and so on.

## Shorten Data Values

Shorten numbers displayed on charts by scaling them, with commonly used scales like K, M, etc..You can also define custom scales for numbers and then apply it to all numbers on the chart.

Let's start with the most basic example, which is already defined in the FusionCharts Suite XT- thousands (K) and millions (M) scales. 

To enable automatic scaling, use the `formatNumberScale` attribute, which decides whether to add K (thousands) and M (millions) to a number after truncating and rounding it. Set this to `0`, to disallow automatic formatting or `1` to allow it. Note that the value of this attribute works only if you don't specifically mention `yFormatNumberScale` and `xFormatNumberScale` attributes.

Refer to the code below:

```json
{
    "chart": {
        "formatNumberScale": "1"
    }
}
```

If you plot the data values as 1252322, 857023, 903753 and 1082357, then the rendered chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/xgufmpyw/ "@@open-newtab") to edit the above chart.

Notice that the numbers have been scaled down to K. By default, FusionCharts Suite XT has the K, M scaling defined for each chart. 

In the following subsections, you can see how to define the scaling to suit your requirements:

## Add Billions to Default Scaling

FusionCharts Suite XT does not have the scaling for billions defined. You have to explicitly modify the number scaling to add billions.

This scale, in human terms, will look like the following:

* 1000 = 1 K

* 1000 K = 1 M

* 1000 M = 1 B

Use the following attributes to add a billion scale to a chart:

* Define the conversion ratio from one unit to the next unit using the `numberScaleValue` attribute, which is a comma separated list of numbers, such as 10, 100, and 1000. Use it along with the `numberScaleUnit` attribute to define the scale used for displaying numbers.

* Define the units of conversion from a lower unit to a higher unit using the `numberScaleUnit` attribute, which is a comma separated list of units, such as K (thousands), M (millions), and B (billions). Use it along with the `numberScaleValue` attribute.

Refer to the code below:

```json
{
    "chart": {
        "numberScaleValue": "1000,1000,1000",
        "numberScaleUnit": "K,M,B"
    }
}
```
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/xpmu165b/ "@@open-newtab") to edit the above chart.

### Example 1: Display Time in the Scale

To display time in a chart in terms of progressively higher units (seconds, minutes, hours, days, etc.), build a scale indicating the time and then specify it in the chart. 

Refer to the code below:

```json
{
    "chart": {
        "numberScaleValue": "60",
        "numberScaleUnit": " minutes"
    }
}
```
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/obryn50m/ "@@open-newtab") to edit the above chart.

### Example 2: Display Storage Capacity in the Scale

To display storage capacity in terms of progressively higher units, (megabytes (MB), gigabytes (GB), terabytes (TB), etc.), build a scale indicating the capacity of storage space and then specify it to the chart.

Refer to the code below:

```json
{
    "chart": {
        "numberScaleValue": "1024,1024,1024",
        "numberScaleUnit": " MB, GB, TB"   
    }
}
``` 
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/oupfaws8/ "@@open-newtab") to edit the above chart.

## Use Recursive Number Scaling

Recursive number scaling comes into the picture when you have number scales defined for your chart. With this, you can display the chart data better by breaking up the predefined number scale into smaller sections. For example, in a chart where time is being plotted, you can display 3.87 days as 3 days, 20 hours, 52 minutes and 25 seconds.

Use the following attributes for recursive scaling:

* Set the value of the `scaleRecursively` attribute to `1` to break data values down to lower level units.

* Set the value of the `maxScaleRecursion` attribute to `-1` to enable recursion to the lowest possible unit level.

Refer to the code below:

```json
{
    "chart": {
        "scaleRecursively": "1",
        "maxScaleRecursion": "-1"
    }
}
``` 
The chart will look as shown below:

{% embed_chart chart-configurations-number-format-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/L57nsapm/ "@@open-newtab") to edit the above chart.

> For Scatter and Bubble charts, use the `xScaleRecursively`, `xMaxScaleRecursion`, and `xScaleSeparator` attributes to scale the numbers recursively on the x-axis. These attributes will work only when you set the `xAxisLabelMode` attribute to `AUTO` or `MIXED`. To scale the numbers recursively on the secondary y-axis in a Dual Y-Axis chart, use the attributes `sScaleRecursively`, `sMaxScaleRecursion`, and `sScaleSeparator`.