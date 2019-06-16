---
title: Create Path Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Create Path Annotations
---

## Prerequisites

* [Create a simple chart using FusionCharts Suite XT](/getting-started/plain-javascript/your-first-chart-using-plain-javascript)
* [Introduction to Annotations](/chart-guide/chart-configurations/annotations/introduction-to-annotations)
* [Creating simple annotations](/chart-guide/chart-configurations/annotations/creating-annotations/create-annotations)

The path annotation lets you draw free-form graphic elements on your charts.

The JSON structure to create path annotations is given below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
    "annotations": {
        "groups": [{
            "items": [{
                "type": "path",
                //Define the attributes needed to create the path annotation
                ...
            }]
        }]
    }
}
```

You can draw free-form graphic elements on your charts using the `path` annotation. Use the following attributes to create path annotations:

* Specify a unique identification string for the path annotation using the `id` attribute.

* Specify the type of annotation by setting the `type` attribute value to `path`.

* Specify the path command and accepts standard SVG path format, using the `path` attribute. 

* Set the x coordinate of the starting position of the path for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the starting position of the path for the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the hex color code for the annotation using the `color` attribute. 

* Specify the transparency of the annotation using the `alpha` attribute, which takes values between 0 (transparent) and 100 (opaque, default).