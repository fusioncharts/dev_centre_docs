---
permalink: chart-guide/combination-charts/configuring-combination-charts.html
title: Configuring Combination Charts | FusionCharts
description: In fusionCharts using combination charts you can plot trend elements, format numbers and place secondary y-axis on the left.
heading: Configuring Combination Charts
chartPresent: true
---

Combination charts allow you to use more than one chart types on same chart canvas to plot your data.

In this section, you will be shown how you can:

* <a href="/chart-guide/combination-charts/configuring-combination-charts#plotting-trend-elements" class="smoth-scroll">Plot trend elements</a>

* <a href="/chart-guide/combination-charts/configuring-combination-charts#formatting-numbers-on-the-chart" class="smoth-scroll">Format Numbers</a>

* <a href="/chart-guide/combination-charts/configuring-combination-charts#placing-the-secondary-axis-on-the-left" class="smoth-scroll">Place the secondary y-axis on the left</a>

## Plotting Trend Elements

For a dual y-axis chart, you can plot trend-lines with respect to both, the primary y-axis and the secondary y-axis.

A combination chart rendered with two trend-lines looks like this:

{% embed_all chart-guide-combination-charts-configuring-combination-charts-example-1.js %}

In the above chart, the `Average Revenue` trend-line has been plotted against the primary y-axis that shows the amount in USD. The `Average Profit %` trend-line has been plotted against the secondary y-axis that shows the profit %.

Given below is a brief description of the attributes used to render a trend-line/trend-zone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`startValue`</td>
    <td>It is used to specify the starting value for the trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`endValue`</td>
    <td>It is used to specify the ending value for the trend-line. It is specified when you want to render a slanted trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code for the color that will be used to render a trend-line and its associated text. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to specify a string caption to be displayed with the trend-line. This attribute belongs to the `line` object, which in turn belongs to the `trendline` object.

If you don’t specify a value for this attribute, by default, it will take the value of the `startValue` attribute.</td>
  </tr>
  <tr>
    <td>`isTrendZone`</td>
    <td>It is used to specify whether a chart will be rendered with a trend-line or a trend-zone. Setting this attribute to `0` will render a trend-line, setting it to `1` (default) will render a trend-zone. This attribute belongs to the `line` object, which in turn belongs to the `trendlines` object.</td>
  </tr>
  <tr>
    <td>`valuePadding`</td>
    <td>It is used to specify the empty space to be rendered, pixels,  between the top-end of a data plot and the start of its corresponding value text box.</td>
  </tr>
  <tr>
    <td>`parentYAxis`</td>
    <td>It is used to specify the parent axis of a dataset. This attribute takes two values: `p` (default) and `s`. To plot a trend-line against the secondary y-axis, set this attribute to `s`.</td>
  </tr>
</table>






FusionCharts Suite XT includes several options to customize trend elements. To know more about the trend elements in a single y-axis chart, click [here](/chart-attributes?chart=mscombi2d).

## Formatting Numbers on the Chart

FusionCharts Suite XT includes separate configuration attributes to format numbers for the primary and secondary y-axes. Some of these attributes have been briefly described here.

Given below is a brief description of the number formatting attributes for the primary y-axis:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`formatNumber`</td>
    <td>It is used to specify whether the numbers displayed on the chart will be formatted using commas. Setting this attribute to `1` will  format the numbers using commas, e.g. 40,000. Setting it to `0` will format the numbers without commas, e.g. 40000.</td>
  </tr>
  <tr>
    <td>`formatNumberScale`</td>
    <td>It is used to specify whether a `K` (for thousands) or an `M` (for millions) will be added to a number after truncating and rounding it. Setting this number to `0` will disable this feature, setting it to `1` (default) will enable it.
Example: If `formatNumberScale` is set to `1`, 1043 will become 1.04K (with decimals set to 2 places). </td>
  </tr>
  <tr>
    <td>`defaultNumberScale`</td>
    <td>It is used to specify the default unit for the numbers rendered on the chart.</td>
  </tr>
  <tr>
    <td>`numberScaleUnit`</td>
    <td>It is used to specify the unit for a block of the scale.</td>
  </tr>
  <tr>
    <td>`numberScaleValue`</td>
    <td>It is used to specify the range of the various blocks that constitute the scale.</td>
  </tr>
  <tr>
    <td>`scaleRecursively`</td>
    <td>It is used to specify whether recursive scaling will be enabled for the chart.</td>
  </tr>
  <tr>
    <td>`numberPrefix`</td>
    <td>It is used to specify the character that will precede all numeric values on the chart, e.g. `$` for the currency symbol.</td>
  </tr>
  <tr>
    <td>`numberSuffix`</td>
    <td>It is used to specify the character that will be appended to all numeric values on the chart, e.g. `%` for percentages.</td>
  </tr>
</table>


The above attributes are applicable to the primary y-axis. To use these attributes for the secondary y-axis, precede the attribute name with an `s`. For example, `numberPrefix` becomes `sNumberPrefix`.

### Few of important number formatting attributes for secondary y-axis

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`sFormatNumber`</td>
    <td>This configuration determines whether the numbers belonging to secondary axis will be formatted using commas, e.g., 40,000 if `sFormatNumber='1'` and 40000 if `sFormatNumber= '0'`.</td>
  </tr>
  <tr>
    <td>`sFormatNumberScale`</td>
    <td>Configuration whether to add K (thousands) and M (millions) to a number belonging to secondary axis after truncating and rounding it - e.g., if `sFormatNumberScale` is set to 1, 10434 will become 1.04K (with decimalPrecision set to 2 places). Same with numbers in millions - an M will be added at the end.</td>
  </tr>
  <tr>
    <td>`sDefaultNumberScale`</td>
    <td>The default unit of the numbers belonging to secondary axis.</td>
  </tr>
  <tr>
    <td>`sNumberScaleUnit`</td>
    <td>Unit of each block of the scale of secondary y-axis.</td>
  </tr>
  <tr>
    <td>`sNumberScaleValue`</td>
    <td>Range of the various blocks that constitute the scale for secondary y-axis.</td>
  </tr>
  <tr>
    <td>`sScaleRecursively`</td>
    <td>To scale the numbers recursively only for the secondary y-axis you need to set this attribute to '1'.</td>
  </tr>
  <tr>
    <td>`sNumberPrefix`</td>
    <td>Using this attribute, you could add prefix to all the numbers belonging to secondary axis.</td>
  </tr>
  <tr>
    <td>`sNumberSuffix`</td>
    <td>Using this attribute, you could add prefix to all the numbers belonging to secondary axis.</td>
  </tr>
</table>


For the complete list of number formatting attributes available for both the axes, refer to the number formatting section [here](/chart-attributes?chart=mscombidy2d).

## Placing the Secondary Axis on the Left

You can choose to swap positions of the primary and secondary axes.

A combination chart rendered with the positions of the axes swapped looks like this:

{% embed_all chart-guide-combination-charts-configuring-combination-charts-example-2.js %}

Given below is a brief description of the attribute used to swap axis positions:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`primaryAxisOnLeft`</td>
    <td>It is used to specify whether the primary axis and secondary axis positions should be swapped. Setting this attribute to `0` will render the secondary axis on the left and the primary axis on the right, setting it to `1` (default) will render the primary axis on the left and the secondary axis on the right.</td>
  </tr>
</table>