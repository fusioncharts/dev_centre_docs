---
permalink: chart-guide/box-and-whisker-chart/configuring-quartile-deviation.html
title: Configuring Quartile Deviation | FusionCharts
description: In this section, you will be shown how you can show/hide the quartile deviation icon in the legend and connect null data
heading: Configuring Quartile Deviation
chartPresent: true
---

The distance between the upper quartile and the lower quartile is called the interquartile range. Quartile deviation is half the distance between the two quartiles, i.e. half the interquartile range. It is also called the semi interquartile range.

In a box and whisker chart, along with the dataset seriesname, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to easily differentiate between them and their icons. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

In this section, you will be shown how you can:

* <a href="/chart-guide/box-and-whisker-chart/configuring-quartile-deviation#showinghiding-the-quartile-deviation-icon" class="smoth-scroll">Show/hide the quartile deviation icon in the legend</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-quartile-deviation#showinghiding-individual-quartile-deviation-values" class="smoth-scroll">Show/hide the individual quartile deviation values</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-quartile-deviation#customizing-the-quartile-deviation-icon" class="smoth-scroll">Customize the quartile deviation icon</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-quartile-deviation#drawing-quartile-deviation-connectors" class="smoth-scroll">Draw quartile deviation connectors</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-quartile-deviation#connecting-null-data" class="smoth-scroll">Connect null data</a>

## Showing/Hiding the Quartile Deviation Icon

A box and whisker chart with the quartile deviation icon shown in the legend box looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-quartile-deviation-example-1.js %}

Given below is a brief description of the attribute used to show/hide the quartile deviation icon in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showQD`</td>
    <td>It is used to specify whether the icon representing the quartile deviation value of the dataset will be shown in the legend. Setting this attribute to `1` will show the icon, setting it to `0` (default) will hide it.</td>
  </tr>
</table>


## Showing/Hiding Individual Quartile Deviation Values

You can opt to show/hide the quartile deviation for specific datasets.

A box and whisker chart with the quartile deviation value shown for the male staff and hidden for the female staff looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-quartile-deviation-example-2.js %}

To show/hide individual quartile deviation values, use the `showQD` attribute with the `data` object, that belongs to the `dataset` object.


## Customizing the Quartile Deviation Icon

Given below is a brief description of the attributes used to customize the quartile deviation icon:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`qdIconShape`</td>
    <td>It is used to specify the shape for the quartile deviation icon. This attribute can take one of the following two values: `polygon` or `spoke`. The default shape for a quartile deviation icon is the triangle.</td>
  </tr>
  <tr>
    <td>`qdIconRadius`</td>
    <td>It is used to specify the radius, in pixels, for the quartile deviation icon.</td>
  </tr>
  <tr>
    <td>`qdIconSides`</td>
    <td>It is used to specify the number of sides for the quartile deviation icon. The default value of this attribute is `3`.</td>
  </tr>
  <tr>
    <td>`qdIconColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the quartile deviation icon in the legend.</td>
  </tr>
  <tr>
    <td>`qdIconAlpha`</td>
    <td>It is used to specify the transparency of the quartile deviation icon. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


## Drawing Quartile Deviation Connectors

For multiple data plots, you can draw a line to connect the quartile deviation icons of each data plot.

A box and whisker chart rendered with a quartile deviation connector looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-quartile-deviation-example-3.js %}

Given below is a brief description of the attribute used to draw quartile deviation connectors for the box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawQDConnector`</td>
    <td>It is used to specify whether a connector will be drawn to connect the quartile deviation for multiple sets of data. Setting this attribute to `1` will draw the connector, setting it to `0` (default) will hide it.

The color that is used to render the quartile deviation icon is also used to render the connecting line.</td>
  </tr>
</table>


## Connecting Null Data

If you use the `showQD` attribute with the `data` object and set it to `0`, the chart will not display the quartile deviation icon for that particular set of data. In this case, the missing quartile deviation is considered as null data. Consequently, the quartile deviation connectors will skip this null data and draw a continuous connector.

A box and whisker chart with null data connected looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-quartile-deviation-example-4.js %}

In the above chart, a connector is drawn connecting the quartile deviation icons of the first and the third data plots, skipping the second data plot.

Given below is a brief description of the attribute used to connect null data using quartile deviation connectors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`connectNullData`</td>
    <td>It is used to specify whether the null values will be skipped and a continuous connector line will be drawn for multiple sets of data. Setting this attribute to `1` will ignore the null values and draw a continuous connector line, setting it to `0` will not ignore the null values.

This attribute is applicable for the quartile deviation icon and all the other deviation icons.</td>
  </tr>
</table>