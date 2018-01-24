---
permalink: chart-guide/marimekko-chart/configuring-a-marimekko-chart.html
title: Configuring a Marimekko Chart | FusionCharts
description: Marimekko charts are used for plotting the total value of a market segment, combined share of all competitors in a market segment and individual share of competitors in a market segment.
heading: Configuring a Marimekko Chart
chartPresent: true
---

Marimekko charts are used for plotting the following three dimensions of marketing data for marketing analysis:

* Total value of a market segment

* Combined share of all competitors in a market segment

* Individual share of competitors in a market segment

This section focuses on how you can customize the appearance of the Marimekko chart.

In this section, you will be shown how you can:

* <a href="/chart-guide/marimekko-chart/configuring-a-marimekko-chart#displaying-actual-data-values-instead-of-percentage-values" class="smoth-scroll">Display actual data values, instead of percentage values</a>

* <a href="/chart-guide/marimekko-chart/configuring-a-marimekko-chart#hiding-the-total-value-of-market-segments" class="smoth-scroll">Hide the sum total of the market segments</a>

* <a href="/chart-guide/marimekko-chart/configuring-a-marimekko-chart#hiding-the-percentage-market-share-values" class="smoth-scroll">Hide the percentage market share value of competitors</a>

The section also talks about the <a href="/chart-guide/marimekko-chart/configuring-a-marimekko-chart#legend-interactivity-in-the-marimekko-chart" class="smoth-scroll">interactive legend</a>, __introduced for the Marimekko chart in FusionCharts v3.11.0__, works.

## Displaying Actual Data Values Instead of Percentage Values

The stacked columns in a Marimekko chart can be rendered:

* Using percentage values

* Using actual data values

By default, a Marimekko chart is rendered with percentage values along the y-axis. A Marimekko chart rendered with actual values instead of percentage values looks like this:

{% embed_all chart-guide-marimekko-chart-configuring-a-marimekko-chart-example-1.js %}

Given below is a brief description of the attribute used to display actual data values:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`usePercentDistribution `</td>
    <td>It is used to specify whether percentage distribution will be used on the y-axis to plot data. Setting this attribute to `0` disables the use of percentage distribution and renders actual values instead of percentage values, setting it to `1` (default) enables it.</td>
  </tr>
</table>

## Hiding the Total Value of Market Segments

By default, the total value of a market segment for a competitor is rendered at the top of each column. Users can choose to hide this value. A Marimekko chart with the total value of market segments hidden looks like this:

{% embed_all chart-guide-marimekko-chart-configuring-a-marimekko-chart-example-3.js %}

Given below is a brief description of the attribute used to hide the total value of market segments:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showSum`</td>
    <td>FusionCharts Suite XT allows you to show the sum of all data plots stacked above each other. The sum is shown above the stacked columns. This attribute is used to specify whether the sum of all stacked data plots will be shown. Setting this attribute to `0` will hide the sum, setting it to `1` (default) will show it.</td>
  </tr>
</table>


## Hiding the Percentage Market Share Values

By default, labels are rendered between the columns of a Marimekko chart, along the x-axis, to show the percentage market value share of the competitors. These labels can be shown/hidden, depending on what the user requirement is.

A Marimekko chart with the percentage labels on the x-axis hidden looks like this:

{% embed_all chart-guide-marimekko-chart-configuring-a-marimekko-chart-example-4.js %}

Given below is a brief description of the attribute used to hide the percentage labels:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showAxisPercentValues`</td>
    <td>It is used to specify whether percentage values will be shown along the x-axis. Setting this attribute to `0` will hide the percent values, setting it to `1` (default) will show them.</td>
  </tr>
</table>

## Legend Interactivity in the Marimekko Chart

The Marimekko chart includes support for an interactive legend starting FusionCharts Suite XT v3.11.0. The interactive legend implementation for the Marimekko chart not only lets you show/hide the data plots but also manages the space vacated when data plots are hidden. Consequently, the percentage labels are also updated to reflect the current state of the chart.

For example, in the Marimekko chart shown above, if you were to hide the data plots for Washington using the legend, the data plots for California and Nevada will be automatically arranged in the available space, as shown in the image below:

![Legend Interactivity in the Marimekko Chart](/assets/images/legend-interactivity-in-the-marimekko-chart.jpg)