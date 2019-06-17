---
title: Positioning Annotations Using Absolute Values | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Positioning Annotations Using Absolute Values
---

## Prerequisites

- [Create a simple chart using FusionCharts Suite XT](/getting-started/plain-javascript/your-first-chart-using-plain-javascript)
- [Introduction to Annotations](/chart-guide/chart-configurations/annotations/introduction-to-annotations)
- [Creating simple annotations](/chart-guide/chart-configurations/annotations/creating-annotations/create-annotations)

You can configure positions of annotations either during their creation or after rendering them on a chart/gauge. Position annotation items by setting the positioning attributes (`x`, `y`, `toX`, `toY`, `radius`, and so on) to the required coordinates.

You can position annotations using:

- Absolute values

- Macros - that take dynamic values relative to chart elements

In this section, you will see how to position annotations using static values.

A spline chart with a rectangle annotation and a text annotation positioned at the top-right corner of the canvas is shown below:

{% embed_chart chart-configurations-annotations-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ufgt8a10/) to edit the above chart.

The code snippet to position the rectangle annotation is given below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
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
                "origW": "400",
                "origH": "300"
            }]
        }]
    }
}
```

The attributes used to position annotations are as follows:

- Specify the unique identification string for the group using the `id` attribute.

- Set the **x** coordinate of the starting position of the annotation for the leftmost position (taken as zero) of the chart using the `x` attribute.

- Set the **y** coordinate of the starting position of the annotation for the topmost position (taken as zero) of the chart using the `y` attribute.

- Specify the **x** coordinate of the ending position of the annotation for the leftmost position (taken as zero) of the chart, using the `toX` attribute. Note that this attribute applies only to the rectangle and line annotations.

- Specify the **y** coordinate of the ending position of the annotation for the topmost position (taken as zero) of the chart, using the `toY` attribute. Note that this attribute applies only to the rectangle and line annotations.

- Specify the original width of the chart, in which the annotation will render as intended, using the `origW` attribute. It will be used as the reference width while automatically scaling annotations if a chart is resized.

- Specify the original height of the chart, in which the annotation will render as intended, using the `origH` attribute. It will be used as the reference height while automatically scaling annotations if a chart is resized.

- Specify the **x** coordinate position value of the final annotation items using the `xShift` attribute. When applying to scale, the value of this attribute will be included within the scale factor.

- Specify the **y** coordinate position value of the final annotation items using the `yShift` attribute. When applying to scale, the value of this attribute will be included within the scale factor.