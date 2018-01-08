---
permalink: chart-guide/pareto-chart/configuring-a-pareto-chart.html
title: Configuring a Pareto Chart | FusionCharts
description: The Pareto chart, named after Vilfredo Pareto, is a type of chart which contains both bars and a line.
heading: Configuring a Pareto Chart
chartPresent: true
---

The Pareto chart, named after Vilfredo Pareto, is a type of chart which contains both bars and a line. FusionCharts Suite XT allows you to configure several functional and cosmetic properties for the Pareto chart.

In this section you will be shown how you can:

* <a href="/chart-guide/pareto-chart/configuring-a-pareto-chart#displaying-values-for-the-line-series" class="smoth-scroll">Display values for the line series</a>

* <a href="/chart-guide/pareto-chart/configuring-a-pareto-chart#customizing-the-line-dataset" class="smoth-scroll">Customize the line dataset</a>

* <a href="/chart-guide/pareto-chart/configuring-a-pareto-chart#hiding-secondary-axis-values" class="smoth-scroll">Hide secondary axis values</a>

* <a href="/chart-guide/pareto-chart/configuring-a-pareto-chart#showinghiding-the-line-chart" class="smoth-scroll">Show/hide the line chart</a>

## Displaying Values for the Line Series

By default, the auto-generated percentage values for the line chart are not rendered.

A pareto chart configured to render the percentage values for the line chart looks like this:

{% embed_all chart-guide-pareto-chart-configuring-a-pareto-chart-example-1.js %}

Given below is a brief description of the attribute that is used to show data values for the line series:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLineValues`</td>
    <td>It is used to specify whether the percentage data values will be shown for the line chart. Setting this attribute to `1` will show them, setting it to `0` (default) will hide them. </td>
  </tr>
</table>


## Customizing the Line Dataset

A pareto chart with the line segments customized looks like this:

{% embed_all chart-guide-pareto-chart-configuring-a-pareto-chart-example-2.js %}

Given below is a brief description of the attributes used to customize the line segments:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`lineColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the line.</td>
  </tr>
  <tr>
    <td>`lineThickness`</td>
    <td>It is used to configure the thickness of the line, in pixels.</td>
  </tr>
  <tr>
    <td>`lineAlpha`</td>
    <td>It use to set the transparency for the line segments. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`lineDashed`</td>
    <td>It is used to specify whether the line segments will be rendered as dashed lines. Setting this attribute to `1` will render them as dashed lines, setting it to `0` will render them as whole lines.</td>
  </tr>
  <tr>
    <td>`lineDashLen`</td>
    <td>It is used to specify the length of each dash, if the line segments are to be rendered as dashed lines.</td>
  </tr>
  <tr>
    <td>`lineDashGap`</td>
    <td>It is used to specify the gap between each dash, if the line segments are to be rendered as dashed lines.</td>
  </tr>
</table>


## Hiding Secondary Axis Values

A pareto chart with the secondary y-axis values hidden looks like this:

{% embed_all chart-guide-pareto-chart-configuring-a-pareto-chart-example-3.js %}

Given below is a brief description of the attributes used to hide the secondary y-axis values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showSecondaryLimits`</td>
    <td>It is used to specify whether the upper and lower limits for the secondary y-axis will be shown. Setting this attribute to `0` will hide the limits, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`showDivLineSecondaryValue`</td>
    <td>It is used to specify whether the divisional line values for the secondary y-axis will be shown. Setting this attribute to `0` will hide the values, setting it to `1` (default) will show them.</td>
  </tr>
</table>


## Showing/Hiding the Line Chart

Given below is a brief description of the attribute used to show/hide the line chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showCumulativeLine`</td>
    <td>It is used to specify whether the line chart will be rendered in the Pareto chart. Setting this attribute to `0` will hide the line chart, setting it to `1` (default) will show it.</td>
  </tr>
</table>