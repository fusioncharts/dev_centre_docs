---
permalink: chart-guide/heat-map-chart/configuring-labels-and-tool-tips.html
title: Configuring Labels and Tool-tips | FusionCharts
description: In a heat map chart a dataplot can show multiple labels in different positions. For example, you can display labels at the center and the four corners of a dataplot.
heading: Configuring Labels and Tool-tips
chartPresent: true
---

FusionCharts XT allows you to configure the functional properties of labels and tool-tips.

In this section, you will be shown how you can:

* <a href="/chart-guide/heat-map-chart/configuring-labels-and-tool-tips#configuring-labels" class="smoth-scroll">Configure labels</a>

* <a href="/chart-guide/heat-map-chart/configuring-labels-and-tool-tips#configuring-tool-tips" class="smoth-scroll">Configure tool-tips</a>

## Configuring Labels

In a heat map chart a dataplot can show multiple labels in different positions. For example, you can display labels at the center and the four corners of a dataplot.

A heat map chart with the labels for the data plots configured looks like this:

{% embed_all chart-guide-heat-map-chart-configuring-labels-and-tool-tips-example-1.js %}

Given below is a brief description of the attributes used to configure labels:

<table>
  <tr>
    <th>Attribute name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to display a numeric value at the center of the dataplot. All number formatting features will be applicable if this attribute is used. </td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>It is used to display any numeric or string value at the center of the data plot. This attribute overrides the `value` attribute, if both are used in the code. Number formatting features are not applicable on the value of this attribute.</td>
  </tr>
  <tr>
    <td>`tlLabel`</td>
    <td>It is used to display a label in the top-left corner of a data plot. </td>
  </tr>
  <tr>
    <td>`trLabel`</td>
    <td>It is used to display a label in the top-right corner of a data plot. </td>
  </tr>
  <tr>
    <td>`blLabel`</td>
    <td>It is used to display a label in the bottom-left corner of a data plot. </td>
  </tr>
  <tr>
    <td>`brLabel`</td>
    <td>It is used to display a label in the bottom-right corner of a data plot. </td>
  </tr>
</table>


## Configuring Tool-tips

By default, a heat map chart configures the tool-tip by including the values assigned to the `value`, `displayValue`, `trLabel`, `tlLabel`, `brLabel`, `blLabel` , `tlType`, `trType`, `blType`, and `brType` attributes.

FusionCharts Suite XT allows you to customize the information displayed in the tool-tip.

A heat map chart rendered with customized tool-tip text looks like this:

{% embed_all chart-guide-heat-map-chart-configuring-labels-and-tool-tips-example-2.js %}

Given below is a brief description of the attribute used to customize a tool-tip:

<table>
  <tr>
    <th>Attribute name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`plotToolText`</td>
    <td>It is used to specify the custom text that will be displayed in the tool-tip.</td>
  </tr>
</table>