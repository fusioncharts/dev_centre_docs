---
permalink: chart-guide/box-and-whisker-chart/creating-box-and-whisker-chart.html
title: Creating Box and Whisker Chart | FusionCharts
description: In this section, you will be shown how you can, create a simple box and whisker chart and use legends in the box and whisker chart.
heading: Creating Box and Whisker Chart
chartPresent: true
---

A box and whisker chart is used to examine a given set of data and draw the statistical conclusion using the five-number summary principle.

In this section, you will be shown how you can:

* <a href="/chart-guide/box-and-whisker-chart/creating-box-and-whisker-chart#creating-a-simple-box-and-whisker-chart" class="smoth-scroll">Create a simple box and whisker chart</a>

* <a href="/chart-guide/box-and-whisker-chart/creating-box-and-whisker-chart#legends-in-box-and-whisker-chart" class="smoth-scroll">Use legends in the box and whisker chart</a>


## Creating a Simple Box and Whisker Chart

As an example, we will create a box and whisker chart that shows the gender-wise distribution of annual salaries.

The box and whisker chart thus created looke like this:

{% embed_all chart-guide-box-and-whisker-chart-creating-box-and-whisker-chart-example-1.js %}

In the chart shown above, note that the minimum and maximum values and the median are displayed by default, whereas the upper and lower quartile values are hidden.

Given below is a brief description of the attributes used to create a box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`seriesName`</td>
    <td>It is used to specify the series name for a dataset. For example, you can name the dataset for the male employee salaries ‘Male’. This attribute belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`lowerBoxColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the lower quartile box. This attribute belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`upperBoxColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the upper quartile box. This attribute belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify a comma-separated list of values for each item in the dataset. This attribute belongs to the `data` object, which belongs to the `dataset` object.

The comma is the default data-separator. You can explicitly specify the data-separator using the `dataSeparator` attribute. For example, `"dataSeparator”: "|”`. This attribute belongs to the `data` object, which belongs to the `dataset` object.</td>
  </tr>
</table>


## Legends in Box and Whisker chart

FusionCharts Suite XT supports `legend` for the box and whisker chart. Legend allows you to display single color icons for numberic numbers.

A simple box and whisker chart rendered with a legend looks like this:

{% embed_all chart-guide-box-and-whisker-chart-creating-box-and-whisker-chart-example-1.js %}

Given below is a brief description of the attributes used to display legend in a box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showLegend`</td>
    <td>Whether to show legend on the chart. Set it to `1` to show the legend or to `0` to hide it.</td>
  </tr>
  <tr>
    <td>`legendPosition`</td>
    <td>The legend can be plotted at two positions on the chart - below the chart for value `bottom` and to the right of the chart for value `right`.</td>
  </tr>
  <tr>
    <td>`legendBorderAlpha`</td>
    <td>Border alpha for the legend. It can take values from `0`(transparent) to `100`(opaque).</td>
  </tr>
  <tr>
    <td>`legendShadow`</td>
    <td>Whether to show a shadow for legend. Set it to `1` to show shadow and `0` to hide it.</td>
  </tr>
</table>