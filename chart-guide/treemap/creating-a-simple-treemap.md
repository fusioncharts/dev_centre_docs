---
permalink: chart-guide/treemap/creating-a-simple-treemap.html
title: Creating a Simple Treemap | FusionCharts
description: A treemap is useful when hierarchical information has to be analyzed, created using 2D nested rectangles, which can be compared to gain insights
heading: Creating a Simple Treemap
chartPresent: true
---

A treemap is useful when hierarchical information has to be analyzed. A treemap is created using 2D nested rectangles, which can be compared to gain insights from hierarchical information.

<p class="text-info"> In order to render treemap chart, include fusioncharts.treemap.js in the project folder with rest of the .js files as mentioned [here]{% linkTo tutorials/getting-started/installation.md %}. </p>

A simple treemap is shown below:

{% embed_all chart-guide-treemap-chart-creating-a-simple-treemap-chart-example-1.js %}

This treemap compares the sales team's performance in the present year with their performance in the previous year.

When a rectangle is clicked, the clicked node and its subtree replaces the current root node. For example, when any rectangle (node) in the __Northern Region__ is clicked, the chart view changes to what is shown in the image below:

![Treemap with Northern Region as the current node]({{ site.baseurl }}assets/images/chart-guide-treemap-chart-creating-a-simple-treemap-chart-image-6.jpg)

<p class="text-info"> Click the rectangles in the treemap shown above and see how you can traverse through the leaf nodes. </p>


## Brief Explanation of the Data Structure

Given below is a brief explanation of the data structure shown above:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Type of chart to render. To render a treemap, the value for this attribute will be `treemap`.</td>
  </tr>
  <tr>
    <td>`renderAt`</td>
    <td>Container object within which the chart will be rendered</td>
  </tr>
  <tr>
    <td>`width`</td>
    <td>Width of the chart, in pixels </td>
  </tr>
  <tr>
    <td>`height`</td>
    <td> Height of the chart, in pixels </td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td> Format in which data that will passed to the chart object. This attribute takes two four  values: <br> __json__ (JSON data to render the chart is passed to the `dataSource` attribute) <br> __jsonurl__ (the relative path to a .json file is passed to the `dataSource` attribute) <br> Similarly, __xml__ and __xmlurl__ are also valid values. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>Source from where chart data will be fetched, depending on the value passed to the `dataFormat` attribute </td>
  </tr>
  <tr>
    <td>`caption`</td>
    <td> Chart caption <br> This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`subCaption`</td>
    <td> Chart sub-caption <br> This attribute belongs to the `chart` object. </td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>Label for a data item. The label is rendered within its corresponding rectangle. <br> This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>Value for a data item <br> The value of this attribute is used to set the area of the rectangle (node). <br> This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`sValue`</td>
    <td> Secondary value for a data item <br> The value of this attribute is used to set the color (based on the color range defined using the `colorRange` object) of the rectangle (node). <br> This attribute belongs to the `data` object.</td>
  </tr>
</table>

## Rendering the Legend in the Treemap

A treemap can be rendered with the gradient legend. 

A gradient legend is a pane of blended colors derived from the `colorRange` definitions. A linear scale is drawn with two drag-able pointers. Each color defined for a numeric range blends with the next color, thus forming a gradient strip. Each point on the gradient scale represents a unique color and value. So, all different values in the chart will appear in unique colors as per their position on the gradient scale.

A simple gradient legend looks as shown in the image below:

![Gradient Legend]({{ site.baseurl }}assets/images/chart-guide-tree-map-chart-legend-options-image-1.jpg)

Given below is a brief description of the attributes used to render the treemap with a gradient legend:

<table>
  <tr>
    <th> Attribute Name </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> `showLegend` </td>
    <td> Set this attribute to `1` to show the legend, set it to `0` (default) to hide it. This attribute belongs to the `chart` object. <br><br> __Note__: For rendering the gradient legend, both, the `showLegend` and the `gradient` attributes, have to be set to `1`.</td>
  </tr>
  <tr>
    <td> `gradient` </td>
    <td> Set this attribute to `1` to show the gradient legend, set it to `0` (default) to hide it. This attribute belongs to the `colorRange` object. <br> <br> __Note__: For rendering the gradient legend, both, the `showLegend` and the `gradient` attributes, have to be set to `1`. </td>
  </tr>
  <tr>
    <td> `startLabel` </td>
    <td> Sets the label for the lower limit on the gradient legend scale. This attribute belongs to the `colorRange` object. </td>
  </tr>
  <tr>
    <td> `endLabel` </td>
    <td> Sets the label for the upper limit on the gradient legend scale. This attribute belongs to the `colorRange` object. </td>
  </tr>
  <tr> 
    <td> The `color` object </td>
    <td> Child object of the `colorRange` object; used to define color ranges for the gradient legend scale </td>
  </tr>
  <tr>
    <td> `code` </td>
    <td> Sets the hex color code for a color range on the gradient legend scale. This attribute belongs to the `color` object. </td>
  </tr>
  <tr>
    <td> `maxValue` </td>
    <td> Sets the upper limit for a color range on the gradient legend scale. The limit is inclusive of the value assigned to this attribute. This attribute belongs to the `color` object. </td>
  </tr>
  <tr>
    <td> `label` </td>
    <td> Sets the label for a color range on the gradient legend scale. The label is rendered within the tooltip text for all nodes that fall under this color range. This attribute belongs to the `color` object. </td>
  </tr>
</table>

<p class="text-info"> The value assigned to the `sValue` attribute in the chart data is used to assign color to a data plot based on which numeric range it falls in. </p>

### Showing/Hiding Data Values Using the Gradient Legend

The gradient legend is interactive and allows filtering of nodes within a specific range of values. Drag the scale pointers to set the required lower and upper limit.

The sample treemap with the gradient legend set to show only those nodes that have values (assigned to the `sValue` attribute) between __-10__ and __10__ is shown in the image below. Notice that the nodes that don't fall in this bracket have been grayed out.

![Showing/Hiding Data Values Using the Gradient Legend]({{ site.baseurl }}assets/images/chart-guide-treemap-chart-creating-a-simple-treemap-chart-image-7.jpg)

Click [here]{% linkTo attrs.md chart=treemap %}{:target='_blank'} for the complete list of attributes supported by the treemap.