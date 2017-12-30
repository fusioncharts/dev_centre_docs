---
permalink: basic-chart-configurations/chart-limits.html
title: Chart Limits | FusionCharts
description: Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits.
heading: Chart Limits
chartPresent: true
---

Chart limits are the minimum and maximum y-axis values. While FusionCharts Suite XT can automatically calculate the best chart limits, it also allows you to specify them explicitly.

The axis limits encompass all values present in the chart; no data value in the chart can be less than the minimum y-axis value or greater than the maximum y-axis value. If an axis limit outside of this range is specified, FusionCharts Suite XT will automatically adjust it.

This section will guide you on how you can configure the chart limits for single and dual y-axis charts. This section talks about:

* <a href="{{ site.baseurl }}basic-chart-configurations/chart-limits.html#setting-chart-limits-explicitly">Setting chart limits explicitly</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/chart-limits.html#setting-y-axis-minimum-value-based-on-data-values">Setting y-axis minimum value based on data values</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/chart-limits.html#setting-axis-limits-for-charts-with-dual-y-axis">Setting axis limits for charts with dual y-axis</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/chart-limits.html#setting-same-axis-limits-for-primary-and-secondary-y-axes">Setting same axis limits for primary and secondary y-axes</a>

* <a href="{{ site.baseurl }}basic-chart-configurations/chart-limits.html#showing-or-hiding-y-axis-values">Showing or hiding y-axis values</a>

## Setting chart limits explicitly

A column 2D chart with the chart limits explicitly set to 2,500,000 looks as below:

{% embed_all configuring-your-chart-chart-limits-example-1.js %}

Given below is the attributes used to define the chart limits:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`yAxisMinValue` and `yAxisMaxValue`</td>
    <td>They specify the values to be set as lower and upper chart limits, respectively, on the y-axis.</td>
  </tr>
</table>






## Setting y-axis minimum value based on data values

You can decide whether to set the y-axis lower limit  to `0` (zero) or should the y-axis lower limit adapt itself to a different figure based on the values provided to the chart.

A column 2D chart with adaptive minimum value for the y-axis set looks as below:

{% embed_all configuring-your-chart-chart-limits-example-2.js %}

Given below is the attribute used to set an adaptive minimum value for the y-axis:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`setAdaptiveYMin`</td>
    <td>If set to `1`, the minimum value of the y-axis adapts itself based on the minimum data value in the chart. If set to `0` (default), the y-axis minimum value is set to 0.</td>
  </tr>
</table>






## Setting axis limits for charts with dual y-axis

A combination chart with chart limits explicitly defined for the primary and secondary y-axis looks as below:

{% embed_all configuring-your-chart-chart-limits-example-3.js %}

Given below are the attributes used to explicitly set chart limits for the primary and secondary y-axis:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`pYAxisMinValue` and `pYAxisMaxValue`</td>
    <td>They specify the values to be rendered as lower and upper limits, respectively, for the primary y-axis.</td>
  </tr>
  <tr>
    <td>`sYAxisMinValue` and `sYAxisMaxValue`</td>
    <td>They specify the values to be rendered as lower and upper limits, respectively, for the secondary y-axis.</td>
  </tr>
</table>






## Setting same axis limits for primary and secondary y-axes

You can configure your charts to have the chart limits for the primary and secondary y-axis synced. For charts with static data this can be done by specifying the minimum and maximum y-axis values. This won’t work for dynamic chart data. You can use the sync axis limit feature to ensure that both y-axes have the same limits. A column 2D chart with synced chart limits for the primary and secondary y-axis looks as below:

{% embed_all configuring-your-chart-chart-limits-example-4.js %}

Given below is the attribute used to sync the chart limits in a dual y-axis chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`syncAxisLimits`</td>
    <td>If set to `1`, it will sync chart limits in a dual y-axis chart. By default, the chart limits are not synced.</td>
  </tr>
</table>






## Showing or hiding y-axis values

A column 2D chart with the y-axis limits showing, but all other y-axis values hidden looks as below:

{% embed_all configuring-your-chart-chart-limits-example-5.js %}

Given below is the attribute used to hide chart limits:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLimits`</td>
    <td>Set it to `0`, to hide the chart limits and to `1` (default) to show the chart limits. This overrides the setting of the `showYAxisValues` attribute.</td>
  </tr>
  <tr>
    <td>`showYAxisValues`</td>
    <td>Set it to `0`, to hide all values on the y-axis and to `1` (default) to show all values.</td>
  </tr>
</table>






