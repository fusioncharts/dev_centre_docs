---
title: Introduction to Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Introduction to Annotations
---

Annotations are user-defined objects or shapes drawn on a chart. You can use annotations to increase the visual appeal of your charts and make them more informative. Annotations help end users interpret charts better. You can create different shapes, images, and text annotations for use with your chart.

For a glimpse of how this feature works, look at the example shown below:

Assume that Harry wants to compare sales of the top four chocolate brands at his SuperMart. A conventional column 2D chart used to show this data will look like the following:

{% embed_chart chart-configurations-annotations-example-1.js %}

Now, see how the same chart will look, when rendered using annotations:

{% embed_chart chart-configurations-annotations-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/49dJJ/) to edit the above chart.

Looks much better, doesn't it? The chocolate bars shown in this chart are image annotations.

Take a look at this video of a [collaboration dashboard](https://www.fusioncharts.com/dashboards/sales-and-collaboration-dashboard/) created to help a sales team unify their analysis and discussion. Notice the **callouts** shown above the columns for April and August. These callouts are **shaped** annotations and the **numbers** shown next to the callouts are text annotations. Click these callouts and see how the annotations work!

In addition to creating annotations, you can:

- Customize annotations for their functional properties as well as their look and feel

- Position them on your chart or gauge using absolute or relative values

- Create and control them dynamically

- Customize the response to user actions using annotation events

Now that you have seen what annotations look like and how useful they can be in making your charts informative go ahead and see how you can create them.

## How Annotation Works

Annotations are defined inside the `annotations` object. This object has an array of `groups`, and each `group` element has a unique id. The `groups` object contains an array of `items`, each of which contains information on one specific annotation in the chart.

Organizing annotations in groups is useful when you manipulate multiple annotations at once through API calls. Refer to the code below to understand the structure of a simple `annotations` object.

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
            "id": "custom-group-1",
            "items": [{
                // Item definition goes here
            },
            {
                // Item definition goes here
            }]
        },
        {
            "id": "custom-group-2",
            "items": [{
                // Item definition goes here
            },
            {
                // Item definition goes here
            }]
        }]
    }
}
```

## Use Objects to Create Annotations

Use the following objects to create annotations:

* `annotations` is an object that encompasses all the code for generating annotations.

* `groups` is an object array that consolidates multiple annotations into one group. You can create multiple annotation groups for one chart. This is useful when you need to create a complex graphic using individual annotation items.

* `items` is an object array that defines individual annotation items contained in one annotation group.

## Add Different types of Annotations

You can add the following types of annotations to your chart:

- [Text](/chart-guide/chart-configurations/annotations/creating-annotations/create-text-annotations) (custom notes, labels, or paragraphs of text)

- [Image](/chart-guide/chart-configurations/annotations/creating-annotations/create-image-annotations) (external images)

- [Shapes](/chart-guide/chart-configurations/annotations/creating-annotations/create-shape-annotations) (rectangle, polygon, circle, arc, and line)

- [Path](/chart-guide/chart-configurations/annotations/creating-annotations/create-path-annotations)

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