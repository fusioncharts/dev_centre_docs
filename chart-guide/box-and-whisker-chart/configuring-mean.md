---
permalink: chart-guide/box-and-whisker-chart/configuring-mean.html
title: Configuring Mean | FusionCharts
description: In this section, you will be shown how you can show/hide the mean icon in the legend, customize the mean icon, draw mean connectors and connect null data.
heading: Configuring Mean
chartPresent: true
---

Mean is the mathematical average for a set of numbers.

In a box and whisker chart, along with the dataset seriesname, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to easily differentiate between them and their icons. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

In this section, you will be shown how you can:

* <a href="/chart-guide/box-and-whisker-chart/configuring-mean#showinghiding-the-mean-icon" class="smoth-scroll">Show/hide the mean icon in the legend</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-mean#customizing-the-mean-icon" class="smoth-scroll">Customize the mean icon</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-mean#drawing-mean-connectors" class="smoth-scroll">Draw mean connectors</a>

* <a href="/chart-guide/box-and-whisker-chart/configuring-mean#connecting-null-data" class="smoth-scroll">Connect null data</a>

## Showing/Hiding the Mean Icon

A box and whisker chart with the mean icon shown in the legend looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-example-1.js %}

Given below is a brief description of the attribute used to show the mean deviation icon in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showMean`</td>
    <td>It is used to specify whether the icon representing the mean of the dataset will be shown in the legend. Setting this attribute to `1` will show the icon, setting it to `0` (default) will hide it. This attribute can be used with the `chart`, `dataset`, and `data` objects.</td>
  </tr>
</table>


## Customizing the Mean Icon

Given below is a brief description of the attributes used to customize the mean icon:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`meanIconRadius`</td>
    <td>It is used to specify the radius for the mean icon.</td>
  </tr>
  <tr>
    <td>`meanIconSides`</td>
    <td>It is used to specify the number of sides for the mean icon.</td>
  </tr>
  <tr>
    <td>`meanIconShape`</td>
    <td>It is used to specify the shape for the mean icon. This attribute can take one of the following two values: `polygon` or `spoke`.  The default shape for a mean icon is the triangle - a polygon with three sides.</td>
  </tr>
  <tr>
    <td>`meanIconColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the mean icon.</td>
  </tr>
  <tr>
    <td>`meanIconAlpha`</td>
    <td>It is used to specify the transparency of the mean icon. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


## Drawing Mean Connectors

For multiple data plots, you can draw a line to connect the mean values of each dataplot.

A box and whisker chart rendered with mean connectors looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-example-2.js %}

Given below is a brief description of the attribute used to draw mean connectors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawMeanConnector`</td>
    <td>It is used to specify whether a connector will be drawn to connect the mean for multiple sets of data. Setting this attribute to `1` will draw the connector, setting it to `0` (default) will hide it.

The color that is used to render the mean deviation icon is also used to render the connecting line.</td>
  </tr>
</table>


## Connecting Null Data

If you use the `showMean` attribute with the `data` object and set it to `0`, the chart will not display the mean icon for that particular set of data. In this case, the missing mean deviation is considered as null data. Consequently, the mean connectors will skip this null data and draw a continuous connector.

A box and whisker chart with null data connected using mean connectors is given below:

{% embed_all chart-guide-box-and-whisker-chart-configuring-mean-example-3.js %}

In the above chart, a connector is drawn connecting the mean deviation icons of the first and the third data plots, skipping the second data plot.


Given below is a brief description of the attribute used to connect null data using mean connectors:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`connectNullData`</td>
    <td>It is used to specify whether the null values will be skipped and a continuous connector line will be drawn for multiple sets of data. Setting this attribute to `1` will ignore the null values and draw a continuous connector line, setting it to `0` will not ignore the null values.

This attribute is applicable for the mean icon and all the other deviation icons.</td>
  </tr>
</table>