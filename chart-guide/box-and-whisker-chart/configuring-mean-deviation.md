---
permalink: chart-guide/box-and-whisker-chart/configuring-mean-deviation.html
title: Configuring Mean Deviation | FusionCharts
description: In a box and whisker chart, along with the dataset seriesname, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot.
heading: Configuring Mean Deviation
chartPresent: true
---

Mean deviation is the average of distances between each of the values and the mean. It gives us an idea of how spread out is the set of values from the center.

In a box and whisker chart, along with the dataset seriesname, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to easily differentiate between them and their icons. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-mean-deviation.html#showinghiding-the-mean-deviation-icon">Show/hide the mean deviation icon in the legend</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-mean-deviation.html#customizing-the-mean-deviation-icon">Customize the mean deviation icon</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-mean-deviation.html#drawing-mean-deviation-connectors">Draw mean deviation connectors</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-mean-deviation.html#connecting-null-data">Connect null data</a>

## Showing/Hiding the Mean Deviation Icon

A box and whisker chart with the mean deviation icon shown in the legend box looks like thi:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-deviation-example-1.js %}

Given below is a brief description of the attribute used to show the mean deviation icon in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showMD`</td>
    <td>It is used to specify whether the icon representing the mean deviation value of the dataset will be shown in the legend. Setting this attribute to `1` will show the icon, setting it to `0` (default) will hide it.

Using this attribute with the `data` object, you can opt to show/hide the mean deviation icon for specific datasets. </td>
  </tr>
</table>


## Customizing the Mean Deviation Icon

Given below is a brief description of the attributes used to customize the mean deviation icon:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`mdIconSides`</td>
    <td>It is used to specify the number of sides for the mean deviation icon. The default value of this attribute is `3`.</td>
  </tr>
  <tr>
    <td>`mdIconColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the mean deviation icon in the legend.</td>
  </tr>
  <tr>
    <td>`mdIconShape`</td>
    <td>It is used to specify the shape for the mean deviation icon. This attribute can take one of the following two values: `polygon` or `spoke`.  The default shape for a mean deviation icon is the triangle - a polygon with three sides.</td>
  </tr>
  <tr>
    <td>`mdIconRadius`</td>
    <td>It is used to specify the radius, in pixels, for the mean deviation icon.</td>
  </tr>
  <tr>
    <td>`mdIconAlpha`</td>
    <td>It is used to specify the transparency for the mean deviation icon. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


## Drawing Mean Deviation Connectors

For multiple data plots, you can draw a line to connect the mean deviation icons of each dataplot.

A box and whisker chart rendered with a mean deviation connector looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-deviation-example-2.js %}

Given below is a brief description of the attribute used to draw mean deviation connectors for the box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawMDConnector`</td>
    <td>It is used to specify whether a connector will be drawn to connect the mean deviation for multiple sets of data.Setting this attribute to `1` will draw the connector, setting it to `0` (default) will hide it.

The color that is used to render the mean deviation icon is also used to render the connecting line. </td>
  </tr>
</table>


## Connecting Null data

If you use the `showMD` attribute with the `data` object and set it to `0`, the chart will not display the mean deviation icon for that particular set of data. In this case, the missing mean deviation is considered as null data. Consequently, the mean deviation connectors will skip this null data and draw a continuous connector.

A box and whisker chart with the mean deviation null data connected looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-deviation-example-3.js %}

In the above chart, a connector is drawn connecting the mean deviation icons of the first and the third data plots, skipping the second data plot.

Given below is a brief description of the attribute used to connect null data using mean deviation connectors::

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`connectNullData`</td>
    <td>It is used to specify whether the null values will be skipped and a continuous connector line will be drawn for multiple sets of data. Setting this attribute to `1` will ignore the null values and draw a continuous connector line, setting it to `0` will not ignore the null values.

This attribute is applicable for the mean deviation icon and all the other deviation icons. </td>
  </tr>
</table>