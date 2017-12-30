---
permalink: chart-guide/box-and-whisker-chart/configuring-standard-deviation.html
title: Configuring Standard Deviation | FusionCharts
description: In this section, you will be shown how you can show/hide the standard deviation icon in the legend, show/hide the individual standard deviation values, etc
heading: Configuring Standard Deviation
chartPresent: true
---

Standard deviation is the measure of the variation or the dispersion of a set of data from the mean. It gives an idea of how spread out is the set of data from the mean.

In a box and whisker chart, along with the dataset seriesname, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to easily differentiate between them and their icons. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-standard-deviation.html#showinghiding-the-standard-deviation-icon">Show/hide the standard deviation icon in the legend</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-standard-deviation.html#showinghiding-individual-standard-deviation-values">Show/hide the individual standard deviation values</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-standard-deviation.html#customizing-the-standard-deviation-icon">Customize the standard deviation icon</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-standard-deviation.html#drawing-standard-deviation-connectors">Draw standard deviation connectors</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-standard-deviation.html#connecting-null-data">Connect null data</a>

## Showing/Hiding the Standard Deviation Icon

A box and whisker chart with the standard deviation icon shown in the legend box looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-standard-deviation-example-1.js %}

Given below is a brief description of the attribute used to show the standard deviation icon in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showSD `</td>
    <td>It is used to specify whether the icon representing the standard deviation value of the dataset will be shown in the legend. Setting this attribute to `1` will show the icon, setting it to `0` (default) will hide it.</td>
  </tr>
</table>


## Showing/Hiding Individual Standard Deviation Values

You can opt to show/hide the standard deviation for specific datasets.

A box and whisker chart with the standard deviation icon shown for a specific dataset in the legends box looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-standard-deviation-example-2.js %}

To show/hide individual quartile deviation values, use the `showSD` attribute with the `data` object, that belongs to the `dataset` object.


## Customizing the Standard Deviation Icon

Given below is a brief description of the attributes used to customize the standard deviation icon:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`sdIconSides`</td>
    <td>It is used to specify the number of sides for the standard deviation icon. The default value of this attribute is `3`.</td>
  </tr>
  <tr>
    <td>`sdIconColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the standard deviation icon in the legend.</td>
  </tr>
  <tr>
    <td>`sdIconShape`</td>
    <td>It is used to specify the shape for the standard deviation icon. This attribute can take one of the following two values: `polygon` or `spoke`.  The default shape for a standard deviation icon is the triangle.</td>
  </tr>
  <tr>
    <td>`sdIconRadius`</td>
    <td>It is used to specify the radius, in pixels, for the standard deviation icon.</td>
  </tr>
  <tr>
    <td>`sdIconAlpha`</td>
    <td>It is used to specify the transparency for the standard deviation icon. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


## Drawing Standard Deviation Connectors

For multiple data plots, you can draw a line to connect the standard deviation icons of each dataplot.

A box and whisker chart rendered with a standard deviation connector looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-standard-deviation-example-3.js %}

Given below is a brief description of the attribute used to draw standard deviation connectors for the box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawSDConnector`</td>
    <td>It is used to specify whether a connector will be drawn to connect the standard deviation for multiple sets of data. Setting this attribute to `1` will draw the connector, setting it to `0` (default) will hide it.

The color that is used to render the standard deviation icon is also used to render the connecting line.</td>
  </tr>
</table>


## Connecting Null data

If you use the `showSD` attribute with the `data` object and set it to `0`, the chart will not display the standard deviation icon for that particular set of data. In this case, the missing standard deviation is considered as null data. Consequently, the standard deviation connectors will skip this null data and draw a continuous connector.

A box and whisker chart with the standard deviation null data connected looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-standard-deviation-example-4.js %}

In the above chart, a connector is drawn connecting the standard deviation icons of the first and the third data plots, skipping the second data plot.

Given below is a brief description of the attribute used to connect null data using standard deviation connectors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`connectNullData`</td>
    <td>It is used to specify whether the null values will be skipped and a continuous connector line will be drawn for multiple sets of data. Setting this attribute to `1` will ignore the null values and draw a continuous connector line, setting it to `0` will not ignore the null values.
This attribute is applicable for the standard deviation icon and all the other deviation icons.</td>
  </tr>
</table>