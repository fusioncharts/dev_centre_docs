---
permalink: api/tutorials/highlight-specific-data-points-on-chart.html
title: Highlight Specific Data Points | FusionCharts
description: To help user visualize data, it is often necessary for you to highlight one or more data points in a chart.
heading: Highlight Specific Data Points
chartPresent: true
layout: page
---

To help user visualize data, it is often necessary for you to highlight one or more data points in a chart. There are a number of ways that you can take to make a data point stand out and draw attention. One of the most common way that we will discuss here is about tweaking the cosmetic properties of the data plot.

Data plots can be broadly classified into two groups.

- Plots that are graphically well defined and independent of other plots, e.g. individual columns in a Column chart
- Plots that are interlinked and lack independent existence, e.g. lines between two successive points in a Line chart

The well defined and independent data plots have in general 3 configurable properties that can be used to highlight a data point. The properties are detailed below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td>Fill color of the data plot in hex code, e.g. <code>#00ffaa</code></td>
  </tr>
  <tr>
    <td><code>alpha</code></td>
    <td>Fill alpha of the data plot ranging from <code>0</code> (transparent) to <code>100</code> (opaque)</td>
  </tr>
  <tr>
    <td><code>dashed</code></td>
    <td>Border of the plot fill is dashed for the value of <code>1</code> </td>
  </tr>
</table>

In charts like line, spline and area, the visualisation is more about the change in data. Data plots do not have any individual / independent existence or to be precise, they are missing! FusionCharts provides anchors to place on data points in these charts. Since, an anchor is graphically independent, it can be used to highlight a specific data point.

You can configure the anchors using the attributes detailed below.


<table>
<tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
<td><code>anchorSides</code>
</td>
<td>Number of sides of the polygon acting as the anchor, accepting any positive integer greater than <code>2</code>
</td>
  </tr>
  <tr>
<td><code>anchorRadius</code>
</td>
<td>Radius of the polygon acting as the anchor in pixels
</td>
  </tr>
  <tr>
<td><code>anchorBorderColor</code>
</td>
<td><p>Border color of the anchor in hex code, e.g. <code>#00ffaa</code>
</p></td>
  </tr>
  <tr>
<td><code>anchorBorderThickness</code>
</td>
<td><p>Border thickness of the anchor in pixels</p>
</td>
  </tr>
  <tr>
<td><code>anchorBgColor</code>
</td>
<td><p>Background color of the anchor in hex code, e.g <code>#00ffaa</code>
</p></td>
  </tr>
  <tr>
<td><code>anchorBgAlpha</code>
</td>
<td><p>Background alpha of the anchor ranging from <code>0</code> (transparent) to <code>100</code> (opaque)</p>
</td>
  </tr>
  <tr>
<td><code>anchorAlpha</code>
</td>
<td><p>Overall alpha of the anchor, affecting both fill and border, and ranging from <code>0</code> (transparent) to <code>100</code> (opaque)</p>
</td>
  </tr>
</table>

Some of the most prominent ways of highlighting data points using FusionCharts are:

* [Changing the color of an individual data point](/tutorials/highlight-specific-data-points-on-chart#changing-the-color-of-an-individual-data-point)
* [Highlighting the data point by changing its alpha and using dashed border](/tutorials/highlight-specific-data-points-on-chart#highlighting-the-data-point-by-changing-its-alpha-and-using-dashed-border)
* [Changing anchor properties in charts like line and area](/tutorials/highlight-specific-data-points-on-chart#changing-anchor-properties-in-charts-like-line-and-area)


## Changing the Color of an Individual Data Point

A plot with a distinctly different color stands out of a set of uniformly colored data plots. This is the easiest and most prominent way to highlight a data plot. But, this technique fails in case different colors are used on different data plots.

The following live chart highlights a column plot in the MSColumn2D chart.

{% embed_chart highlight-specific-data-points-on-chart-example-1.js %}

Inspect the data structure of the sample shown below on how to configure the attributes at data point object level in the data JSONs.

{% embed_data highlight-specific-data-points-on-chart-example-1.js %}

## Highlighting the Data Point by changing its Alpha and using Dashed Border

This is a more subtle way to highlight a data plot, where you may not prefer to colorize the plot with a distinctly different color. Change the plot opacity and you get a color derivative of the original color. If thats not enough as a highlighter, make the border dashed to add weight and help the plot stand out in the show.

The following live chart highlights a column plot in the Column2D chart.

{% embed_chart highlight-specific-data-points-on-chart-example-2.js %}

Inspect the data structure of the sample shown below on how to configure the attributes at data point object level in the data JSONs.

{% embed_data highlight-specific-data-points-on-chart-example-2.js %}

## Changing Anchor Properties in charts like Line and Area

Anchors represent data points in charts that lack data plots to represent numerical data. Charts plotting line or area or both (as in combination charts) fall in this category. Spline charts fall in this category either. In a nutshell, if you have line, spline or area plots in any chart and you need to highlight data points on any of these, use anchors if not yet and highlight the required data plot.

The following live chart highlights a line anchor in the Line chart.

{% embed_chart highlight-specific-data-points-on-chart-example-3.js %}

Inspect the data structure of the sample shown below on how to configure the attributes at data point object level in the data JSONs.

{% embed_data highlight-specific-data-points-on-chart-example-3.js %}
