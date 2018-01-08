---
permalink: chart-guide/logarithmic-charts/configuring-logarithmic-charts.html
title: Configuring Logarithmic Charts | FusionCharts
description: FusionCharts Suite XT allows you to configure the functional aspects of logarithmic charts.
heading: Configuring Logarithmic Charts
chartPresent: true
---

FusionCharts Suite XT allows you to configure the functional aspects of logarithmic charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/logarithmic-charts/configuring-logarithmic-charts#custom-selection-of-base" class="smoth-scroll">Custom select the base</a>

* <a href="/chart-guide/logarithmic-charts/configuring-logarithmic-charts#inverse-axis-support" class="smoth-scroll">Configure inverse axis support</a>

* <a href="/chart-guide/logarithmic-charts/configuring-logarithmic-charts#custom-selection-of-y-axis-lower-and-upper-limits" class="smoth-scroll">Custom select the y-axis upper and lower limits</a>

* <a href="/chart-guide/logarithmic-charts/configuring-logarithmic-charts#custom-selection-of-the-number-of-minor-divisional-lines" class="smoth-scroll">Custom select the number of minor divisional lines</a>

## Custom Selection of Base

By default, the base of a logarithmic chart is set to 10. You can, however, set the base to any value of your requirement. Just ensure that the base value is any positive number greater than 1.

A log column chart with the base set to 5 looks like this:

{% embed_all chart-guide-logarithmic-charts-configuring-logarithmic-charts-example-1.js %}

Given below is a brief description of the attribute used to customize the base value:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`base`</td>
    <td>It is used to specify the base value for the logarithmic chart. This attribute can take any value that is a positive number greater than 1. The default value for this attribute is 10.</td>
  </tr>
</table>


## Inverse Axis Support

Logarithmic charts allow you to plot the y-axis values inversely so that the y-axis upper limit appears at the bottom of the chart canvas instead of at the top.

A log column 2D chart rendered with an inverted y-axis looks like this:

{% embed_all chart-guide-logarithmic-charts-configuring-logarithmic-charts-example-2.js %}

Given below is a brief description of the attribute used to render an inverted y-axis:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`invertYAxis`</td>
    <td>It is used to specify whether the log chart will be rendered with an inverted y-axis. Setting this attribute to `1` will render an inverted y-axis, setting it to `0` (default) will not.</td>
  </tr>
</table>


## Custom Selection of Y-axis Lower and Upper Limits

By default, the chart automatically decides the y-axis limits based on the data you provide. However, you can explicitly set the y-axis limits according to your requirements.

Given below is a brief description of the attributes used to custom select the y-axis limits:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`yAxisMinValue`</td>
    <td>It is used to explicitly specify the lower limit for the y-axis.</td>
  </tr>
  <tr>
    <td>`yAxisMaxValue`</td>
    <td>It is used to explicitly specify the upper limit for the y-axis.</td>
  </tr>
</table>


## Custom Selection of the Number of Minor Divisional Lines

By default, the chart automatically calculates the number of minor divisional lines depending on the logarithmic base defined in the chart. You can, however, explicitly specify the number of minor divisional lines.

A log column chart with the number of minor divisional lines explicitly specified looks like this:

{% embed_all chart-guide-logarithmic-charts-configuring-logarithmic-charts-example-3.js %}

Given below is a brief description of the attribute used to set the number of minor div lines:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numMinorDivLines`</td>
    <td>It is used to specify the number of minor divisional lines to be rendered between any two major divisional lines. This attribute can take value that is greater than 0.</td>
  </tr>
</table>