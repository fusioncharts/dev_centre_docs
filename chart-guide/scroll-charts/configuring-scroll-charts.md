---
permalink: chart-guide/scroll-charts/configuring-scroll-charts.html
title: Configuring Scroll Charts | FusionCharts
description: Using scroll charts in FusionCharts you can customize several functional and cosmetic properties.
heading: Configuring Scroll Charts
chartPresent: true
---

FusionCharts Suite XT allows you to customize several functional and cosmetic properties for scroll charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/scroll-charts/configuring-scroll-charts#configuring-the-number-of-visible-data-plots" class="smoth-scroll">Configure the number of visible data plots</a>

* <a href="/chart-guide/scroll-charts/configuring-scroll-charts#rendering-a-scroll-bar-with-the-gradient-effect" class="smoth-scroll">Render a scroll bar with gradient effect</a>

* <a href="/chart-guide/scroll-charts/configuring-scroll-charts#customizing-the-scroll-bar" class="smoth-scroll">Customize the scroll bar</a>

## Configuring the Number of Visible Data Plots

A scroll chart with the number of visible data plots set to twelve looks like this:

{% embed_all chart-guide-scroll-charts-configuring-scroll-charts-example-1.js %}

Given below is a brief description of the attribute used to set the number of visible plots:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`numVisiblePlot` </td>
    <td>It is used to specify the number of data plots that will be visible in the scroll pane when the chart is first loaded.</td>
  </tr>
</table>


## Rendering a Scroll Bar with the Gradient Effect

By default, a scroll chart has a flat scroll bar. You can opt to render a gradient scroll to visually enhance your chart.

A scroll chart with a gradient scroll bar looks like this:

{% embed_all chart-guide-scroll-charts-configuring-scroll-charts-example-2.js %}

Given below is a brief description of the attribute used to select a flat / gradient scroll bar:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`flatScrollBars` </td>
    <td>It is used to specify whether a gradient scroll bar or a flat scroll bar will be rendered on the chart. Setting this attribute to `0` will render a gradient scroll bar, setting it to `1` (default) will render a flat scroll bar.</td>
  </tr>
</table>


## Customizing the Scroll Bar

A scroll chart with the cosmetic properties of the scroll bar customized looks like this:

{% embed_all chart-guide-scroll-charts-configuring-scroll-charts-example-3.js %}

Given below is a brief description of the attributes used to customize the scroll bar :

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`scrollColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the scroll bar.</td>
  </tr>
  <tr>
    <td>`scrollHeight`</td>
    <td>It is used to specify the height of the scroll bar.</td>
  </tr>
  <tr>
    <td>`scrollPadding`</td>
    <td>It is used to specify the distance, in pixels, of the scroll bar from the canvas.</td>
  </tr>
</table>