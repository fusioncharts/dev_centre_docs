---
permalink: chart-guide/heat-map-chart/creating-category-based-heat-map-chart.html
title: Creating Category-based Heat Map Charts | FusionCharts
description: In heat map category-based mapping is done by defining several color categories or ranges and setting a specific color category to a cell.
heading: Creating Category-based Heat Map Charts
chartPresent: true
---

Category-based mapping is done by defining several color categories or ranges and setting a specific color category to a cell. We do not need to have numeric values to map to value ranges. Instead, a color-range label is used to map a cell with a color category.

In this section, you will be shown how you can create category-based heat map charts.

As an example, we will create a category-based heat map chart that shows the average temperature, across various seasons, for the top four cities in the U.S.

The category-based heat map chart thus rendered looks like this:

{% embed_all chart-guide-heat-map-chart-creating-category-based-heat-map-chart-example-1.js %}

Given below is a brief description of the attributes used to create a category-based heat map chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`mapByCateory`</td>
    <td>It is used to specify whether a category-based heat map chart will be rendered. Setting this attribute to `1` will render a category-based chart, setting it to `0` (default) will render a numeric heat map chart.</td>
  </tr>
  <tr>
    <td>`id`</td>
    <td>It is used to assign a unique ID for the rows and columns. This attribute belongs to the `row` and `column` objects, which in turn belong to the `rows` and `columns` objects, respectively.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the labels to be rendered for the rows, columns, and the legend. This attribute belongs to the `row`, `column`, and `color` objects, which in turn belong to the `rows`, `columns`, and `colorRange` objects.

If the labels for the numeric ranges are not specified, the chart will display the range in place of the labels. For example, 0-5, 5-8.5 and 8.5-10.</td>
  </tr>
  <tr>
    <td>`rowID`</td>
    <td>It is used to refer to the unique ID of the row in which the data has to be entered.</td>
  </tr>
  <tr>
    <td>`columnID`</td>
    <td>It is used to refer to the unique ID of the column in which the data has to be entered.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the data value to be entered in a cell.</td>
  </tr>
  <tr>
    <td>`tlLabel`, `trLabel`, `blLabel`, `brLabel`</td>
    <td>They are used to specify the labels to be rendered at the top-left, top-right, bottom-left, and bottom-right corners, respectively, of the data plot.</td>
  </tr>
  <tr>
    <td>`code`</td>
    <td>It is used to specify the hex code for the color that represents a particular range. For example, to show cells with good ratings in the green color, you can use the hex code #e24b1a.</td>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>It is used to specify the minimum value that can be plotted on the chart.</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>It is used to specify the maximum value that can be plotted on the chart.</td>
  </tr>
</table>

<p class="text-info"> In category-based heat map charts we can only define a single color for a particular category. Any data set to that category will appear in the color specified for that particular group. It is not possible to use gradient colors in a category based heat map chart. </p>