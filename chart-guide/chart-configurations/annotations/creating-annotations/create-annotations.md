---
title: Create Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Create Annotations
---

## Prerequisites

* Create a simple chart using FusionCharts Suite XT
* Introduction to Annotations

FusionCharts Suite XT includes a wide range of charts, gauges, and maps that you can use to plot static as well as real-time data. Annotations, a compelling feature of the product, lets you make your charts self-descriptive and visually engaging.

In this article we'll discuss how to:

* Use Objects to create annotations

* Add different types of annotations

## Use Objects to Create Annotations

Use the following objects to create annotations:

* `annotations` is an object that encompasses all the code for generating annotations.

* `groups` is an object array that consolidates multiple annotations into one group. You can create multiple annotation groups for one chart. This is useful when you need to create a complex graphic using individual annotation items.

* `items` is an object array that defines individual annotation items contained in one annotation group.

## Add Different types of Annotations

You can add the following types of annotations to your chart:

* **Text** (custom notes, labels, or paragraphs of text)

* **Image** (external images)

* **Shapes** (rectangle, polygon, circle, arc, and line)

* **Path connectors** (freeform arrows, connectors, callouts, and so on)

Refer to the basic JSON structure to create annotations, given below:

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
            //Annotation group 1
            //Define a unique identification string for the group.
            "items": [
                //Define individual annotation items.
                { <<-- Annotation Item 1 -->> },
                { <<-- Annotation Item 2 -->> },
                ...
                { <<-- Annotation Item n -->> }
            ]
        }, {
            //Annotation group 2
            //Define a unique identification string for the group.
            "items": [
                //Define individual annotation items.
                { <<-- Annotation Item 1 -->> },
                { <<-- Annotation Item 2 -->> },
                ...
                { <<-- Annotation Item n -->> }
            ]
        }, {
            //Annotation group n
            //Define a unique identification string for the group.
            "items": [
                //Define individual annotation items.
                { <<-- Annotation Item 1 -->> },
                { <<-- Annotation Item 2 -->> },
                ...
                { <<-- Annotation Item n -->> }
            ]
        }]
    }
}
```

The image of a chart rendered with different types of annotation items is shown below:

![Annotations](/images/chart-configurations-annotations-image-1.jpg)