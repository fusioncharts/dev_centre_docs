---
permalink: chart-guide/box-and-whisker-chart/configuring-outliers.html
title: Configuring Outliers | FusionCharts
description: In this section, you will be shown how you can customize the outlier icon and show outliers beyond the range of the y-axis.
heading: Configuring Outliers
chartPresent: true
---

Outliers are values that are numerically distant from the set of numbers provided. They are indicative values which may occur by chance or by error for any set of data provided. Outliers are not included in the statistical calculation of the five summary numbers - the minimum and maximum values, the median value, and the lower and upper quartile values. Instead, they are placed as separate points on the chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-outliers.html#customizing-the-outlier-icon">Customize the outlier icon</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-outliers.html#showing-outliers-beyond-the-range-of-the-y-axis">Show outliers beyond the range of the y-axis</a>

## Customizing the Outlier Icon

A box and whisker chart with outliers looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-outliers-example-1.js %}

In the above chart, outlier values are displayed as triangle icons above each data plot.

Given below is a brief description of the attributes used to customize the outlier icon:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`outliers`</td>
    <td>It is used to specify the outliers or the values greater than the maximum value from the data set provided. This attribute belongs to the `data` object, which in turn belongs to the `dataset` object.</td>
  </tr>
  <tr>
    <td>`outlierIconShape`</td>
    <td>It is used to specify the shape for the outlier icon. This attribute can take one of the following two values: `polygon` or `spoke`.  The default shape for the outlier icon is the triangle-a polygon with three sides.</td>
  </tr>
  <tr>
    <td>`outlierIconRadius`</td>
    <td>It is used to specify the radius, in pixels, for the outlier icon.</td>
  </tr>
  <tr>
    <td>`outlierIconSides`</td>
    <td>It is used to specify the number of sides for the outlier icon. The default value of this attribute is `3`.</td>
  </tr>
  <tr>
    <td>`outlierIconColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the outlier icon in the legend.</td>
  </tr>
  <tr>
    <td>`outlierIconAlpha`</td>
    <td>It is used to specify the transparency for the outlier icon. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


## Showing Outliers Beyond the Range of the Y-axis

For the chart shown above, all outliers provided as values to the `outliers` attribute are in the range of the y-axis scale. However, there can be instances where the outlier values lie outside the range of the y-axis. In this case, by default, such outlier values are not shown on the chart to maintain the visual integrity of the data plots.

A box and whisker chart with outliers beyond the range of the y-axis hidden looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-outliers-example-2.js %}


In the data above, you will see that the outlier values for Grade 3 are 72000 for male and 71000 for female. Therefore, the outliers for these values are not shown on the chart.

You can opt to show these hidden outlier values.

A box and whisker chart with outlier values shown on the chart looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-outliers-example-3.js %}

Given below is a brief description of the attribute used to show all outliers on the box and whisker chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showAllOutliers`</td>
    <td>It is used to specify whether outliers beyond the range of the y-axis will be shown on the chart. Setting this attribute to `1` will show the outlier values beyond the range of the y-axis, setting it to `0` (default) will hide them.</td>
  </tr>
</table>