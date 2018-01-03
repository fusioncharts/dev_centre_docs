---
permalink: advanced-chart-configurations/annotations/positioning-annotations-using-absolute-values.html
title: Positioning Annotations Using Absolute Values | FusionCharts
description: The FusionCharts XT annotation API lets you configure positions of annotations either during their creation or after rendering them on a chart/gauge. This article describes how you can position annotations using static values.
heading: Positioning Annotations Using Absolute Values
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating simple annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

The FusionCharts XT annotation API lets you configure positions of annotations either during their creation or after rendering them on a chart/gauge. You can position annotation items by setting the positioning attributes (`x`, `y`, `toX`, `toY`, `radius`, and so on) to the required coordinates.

Annotations can be positioned using:

* absolute values

* [macros]{% linkTo tutorials/advanced-charting/annotations/positioning-annotations-using-macros.md %} - that take dynamic values relative to chart elements

This article describes how you can position annotations using static values.

A spline chart with a rectangle annotation and a text annotation positioned at the top-right corner of the canvas is shown below:

{% embed_chart advanced-charting-annotations-positioning-annotations-using-absolute-values-example-1.js %}

The code snippet to position the rectangle annotation is given below:

```javascript
...
"annotations": {
        ...
    "groups": [{
            "items": [{
                    "id": "dyn-labelBG",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "290",
                    "y": "60",
                    "tox": "390",
                    "toy": "90",
                    "color": "#0075c2",
                    "alpha": "70",
                    "origW": “400”,
                    "origH": “300”
                },
                ...
            ]
        }
    ]
}
...

```

The attributes used for positioning annotations are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies the unique identification string for the group.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the starting x coordinate position of the annotation with respect to the leftmost position (taken as 0) of the chart.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the the starting y coordinate position of the annotation with respect to the topmost position (taken as 0) of the chart.</td>
  </tr>
  <tr>
    <td>`toX`</td>
    <td>Specifies the x coordinate of the ending position of the annotation with respect to the leftmost position (taken as zero) of the chart.

This attribute is applicable only to the rectangle and line annotations.</td>
  </tr>
  <tr>
    <td>`toY`</td>
    <td>Specifies the y coordinate of the ending position of the annotation with respect to the topmost position (taken as zero) of the chart.

This attribute is applicable only to the rectangle and line annotations.</td>
  </tr>
  <tr>
    <td>`origW`</td>
    <td>Specifies the original width of the chart, in which the annotation renders as intended. It is used as the reference width while automatically scaling annotations, it the event that a chart is resized.</td>
  </tr>
  <tr>
    <td>`origH`</td>
    <td>Specifies the original height of chart, in which the annotation renders as intended. It is used as the reference height while automatically scaling annotations, it the event that a chart is resized.</td>
  </tr>
  <tr>
    <td>`xShift`</td>
    <td>The value of this attribute is added to the x coordinate position value of the final annotation items. When applying scaling, the value of this attribute is included within the scale factor.</td>
  </tr>
  <tr>
    <td>`yShift`</td>
    <td>Like the `xShift` attribute, this attribute applies to the y axis.</td>
  </tr>
</table>


The complete data structure needed to render the above chart is given below:

{% embed_data advanced-charting-annotations-positioning-annotations-using-absolute-values-example-1.js %}
