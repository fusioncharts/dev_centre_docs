---
permalink: advanced-chart-configurations/annotations/creating-annotations/creating-path-annotations.html
title: Creating Path Annotations | FusionCharts
description: The path annotation lets you draw free-form graphic elements on your charts.
heading: Creating Path Annotations
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating simple annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

The path annotation lets you draw free-form graphic elements on your charts.

Take a look at the spline chart shown below:

{% embed_chart advanced-charting-annotations-creating-annotations-creating-path-annotations-example-1.js %}

The rectangle drawn to highlight the lowest footfall is created using the path annotation.

The JSON structure for creating path annotations is given below:

```javascript
{
    "chart": {
        …
    },
    "annotations": {
        "groups": [{
            "items": [{
                "type": “path”,
                //Define the attributes needed to create the path annotation
                …
            }]
        }]
    }
    …
}

```

The attributes used to create path annotations are:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies a unique identification string for the path annotation. </td>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Specifies the type of annotation to be drawn. To draw a path, set this attribute to `path`.</td>
  </tr>
  <tr>
    <td>`path`</td>
    <td>Specifies the path command and accepts standard SVG  path format. For example, the path command "M 10, 10, L 100, 100"  signifies that we start drawing from the coordinate at (10,10) pixel using M ( Move to) command and draw a line up to the coordinate (100,100) pixel as specified by the L (Line to) command. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the starting position of the path with respect to the leftmost position (taken as 0) of the chart. </td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the starting position of the path with respect to the topmost position (taken as 0) of the chart. </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>Specifies the hex color code for the annotation. For example, setting this attribute to `#6baa01` will draw an annotation in the green color.
The default value is `#ff0000`.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Specifies the transparency of the annotation. This attribute takes values between 0 (transparent) and 100 (opaque, default). </td>
  </tr>
</table>


The complete data structure for the chart with path annotations is given below:

{% embed_data advanced-charting-annotations-creating-annotations-creating-path-annotations-example-1.js %}
