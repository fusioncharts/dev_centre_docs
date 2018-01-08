---
permalink: chart-guide/heat-map-chart/legend-options.html
title: Legend Options | FusionCharts
description: FusionCharts Suite XT supports two types of legends for the heat map chart - the gradient legend and the icon legend.
heading: Legend Options
chartPresent: true
---

FusionCharts Suite XT supports two types of legends for the heat map chart - the gradient legend and the icon legend.

In this section, you will be shown how you can work with:

* <a href="/chart-guide/heat-map-chart/legend-options#working-with-the-icon-legend" class="smoth-scroll">the icon legend</a>

* <a href="/chart-guide/heat-map-chart/legend-options#working-with-the-gradient-legend" class="smoth-scroll">the gradient legend</a>

* <a href="/chart-guide/heat-map-chart/legend-options#configuring-a-single-color-gradient-legend" class="smoth-scroll">percentage mapping</a>

## Working with the Icon Legend

Icon legend allows us to display single color icons for numeric ranges. By default, a heat map chart is rendered with an icon legend.

A simple icon legend looks as shown in the image below:

![Icon Legend](/assets/images/chart-guide-heat-map-chart-legend-options-image-1.jpg)

A simple heat map chart rendered with an icon legend looks like this:

{% embed_all chart-guide-heat-map-chart-legend-options-example-1.js %}

Given below is a brief description of the attribute used to specify the color for each icon in the legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`code`</td>
    <td>It is used to specify the __hex code__ of the color that will be used to represent a color range in legends. This attribute can be used with colorRange and color object.
    In colorRange when `gradient` attribute is set to `1` (gradient legend), the `code` attribute under colorRange is used to set the color of the `minValue` (the immediate child of colorRange) and color object both works simultaneously. Whereas, when `gradient` attribute is set to `0` (icon legend), color object is necessary to render the chart.
    __Note:__ The color is set for a specific range or values (minValue or maxValue).</td>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>This attribute specifies the lower limits of each numeric range. This attribute is __mandatory__ in each color object when `icon legend` is used.</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>This attribute specifies the upper limits of each numeric range. This attribute is __mandatory__ in each color object for both `gradient and icon legend`.</td>
  </tr>
</table>


### Interactivity using the Icon Legend

Icon legends are interactive. You  can click a legend item to show or hide all the cells mapped with the color range represented by the legend item. For example, if you want to hide all data plots mapped to the range 5-8.5, click the "Average" legend icon.

A heat map chart rendered with all "average" ratings hidden looks as shown in the image below:

![Average Ratings](/assets/images/chart-guide-heat-map-chart-legend-options-image-2.jpg)


## Working with the Gradient Legend

Gradient legend is a pane of blended colors derived from the `colorRange` definitions. A linear scale is drawn with two drag-able pointers. Each color defined for a numeric range blends with the next color, thus forming a gradient strip. Each point on the gradient scale represents a unique color and value. So, all different values in the chart will appear in unique colors as per the position on the gradient scale.

A simple gradient legend is looks as shown in the image below:

![Gradient Legend](/assets/images/chart-guide-heat-map-chart-legend-options-image-3.jpg)

A heat map chart rendered with a gradient legend looks like this:

{% embed_all chart-guide-heat-map-chart-legend-options-example-2.js %}

Given below is a brief description of the attributes used to configure a gradient legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`gradient`</td>
    <td>It is used to specify whether a gradient legend will be rendered for the chart. Setting this attribute to `1` will render the gradient legend, setting it to `0` (default) will render the icon legend. This attribute is used with the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`startLabel`</td>
    <td>It is used to specify the label for the lower limit on the gradient legend, e.g. Poor. This attribute is used with the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`endLabel`</td>
    <td>It is used to specify the label for the upper limit on the gradient legend, e.g. Good. This attribute is used with the `colorRange` object.</td>
  </tr>
  <tr>
    <td>`code`</td>
    <td>It is used to specify the __hex code__ of the color that will be used to represent a color range in legends. This attribute can be used with colorRange and color object.
    In colorRange when `gradient` attribute is set to `1` (gradient legend), the `code` attribute under colorRange is used to set the color of the `minValue` (the immediate child of colorRange) and color object both works simultaneously. Whereas, when `gradient` attribute is set to `0` (icon legend), color object is necessary to render the chart.
    __Note:__ The color is set for a specific range or values (minValue or maxValue).</td>
  </tr>
</table>


### Configuring a Single-color Gradient Legend

The default gradient legend is rendered using several different colors. However, you can also render a gradient legend using shades of the same color.

A single-color gradient legend looks as shown in the image below:

![Single Color Gradient Legend](/assets/images/chart-guide-heat-map-chart-legend-options-image-4.jpg)

The code snippet needed to show a single-color gradient legend is given below:

```javascript

{
    "chart": {
        ...
    },
    ...
    "colorRange": {
        "gradient": "1",
        "mapByPercent": "0",
        "minValue": "0",
        "code": "#00ccff",
        "startLabel": "Poor",
        "endLabel": "Good"
    }
}

```

### Interactivity using the Gradient Legend

#### Showing/Hiding Data Values

The gradient legend is interactive and allows filtering of cells within a specific range of values. To specify the range that should be shown on the chart, click and hold the cursor on any one or both of the scale pointers and drag them to set the required lower and upper limit.

For example, in a numeric range 0-10, you may want to show the numbers between 5 and 9. To do this, drag the lower limit pointer to 5 and the upper limit pointer to 9. T The chart will display only those data plots that lie in the range between 5 and 9. The rest of the numbers will be hidden.

A chart with data plots only in the range of 5 and 9 shown looks like this:

![Chart with fixed range](/assets/images/chart-guide-heat-map-chart-legend-options-image-5.jpg)