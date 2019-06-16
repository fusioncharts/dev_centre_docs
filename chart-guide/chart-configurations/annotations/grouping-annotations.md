---
title: Grouping Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Grouping Annotations
---

## Prerequisites

- Creating a simple chart using FusionCharts Suite XT

- Introduction to annotations

- Creating simple annotations

You can group a number of annotation items together as one item. This is useful when there are multiple annotations on a chart and you have to configure common properties for all of them.

## Create Annotation Groups

To create an annotation group, all you have to do is create each annotation item as an object within the same `groups → items` object array. When you group multiple annotations together, you can easily manipulate common functional and cosmetic properties, as well as position them, using the following attributes:

- Specify a unique identification string for the annotation group, using the `id` attribute.

- Specify the x coordinate of the starting position of the group with respect to the leftmost position (taken as 0) of the chart, using the `x` attribute. Note that if you also configure it individually for the annotation item(s) within the group, then the value of the `x` attribute for the item will be relative to the value of the `x` attribute for the group.

- Specify the y coordinate of the starting position of the group with respect to the topmost position (taken as 0) of the chart, using the `y` attribute. Note that if you also configure it individually for the annotation item(s) within the group, then the value of the `y` attribute for the item will be relative to the value of the `y` attribute for the group.

- Set the value of the `autoScale` attribute to `1`, to automatically scale the annotation group, if you resize a chart.

- Set the value of the `scaleText` attribute to `1`, to automatically scale text annotations in the annotation group, if you resize a chart.

- Set the value of the `scaleImages` attribute to `1`, to automatically scale image annotations in the annotation group, if you resize a chart.

- Set the value of the `constrainedScale` attribute to `1`, to retain the aspect ratio (height:width) of annotations, even when they are scaled.

- Set the value of the `showBelow` attribute to `1`, to prevent annotations in the group from overlapping the data plots. The annotations will then be shown below the data plots.

- Specify the original width of the chart (in which the annotation renders as intended), using the `origW` attribute. Note that this value is used as the reference width while automatically scaling annotations, if you resize a chart.

- Specify the original height of the chart (in which the annotation renders as intended), using the `origH` attribute. Note that this value is used as the reference width while automatically scaling annotations, if you resize a chart.

- Specify the value to be added to the x coordinate position value of the final annotation items on the x-axis, using the `xShift` attribute. Note that if you place an annotation at 100 pixels left and set the value of `xShift` to 50, then the effective value of the x coordinate for the annotation will add up to 150 pixels. Also, whenever you apply scaling, the value of this attribute is included within the scale factor.

- Specify the value to be added to the y coordinate position value of the final annotation items on the y-axis, using the `yShift` attribute. Note that if you place an annotation at 100 pixels from the top and set the value of `yShift` to 50, then the effective value of the y coordinate for the annotation will add up to 150 pixels. Also, whenever you apply scaling, the value of this attribute is included within the scale factor.

- Specify the value to be added to all annotation groups along the x coordinate, using the `grpXShift` attribute. The difference between `xShift` and this attribute is that, during scaling, `xShift` is included within the scale factor whereas `grpXShift` is excluded.

- Specify the value to be added to all annotation groups along the y coordinate, using the `grpYShift` attribute. The difference between `yShift` and this attribute is that, during scaling, `yShift` is included within the scale factor whereas `grpYShift` is excluded.

- Specify the transparency (between `0` for transparent and `100` for opaque) for the group of annotations, using the `alpha` attribute.

- Set the value of the `visible` attribute of a group of annotations to `0`, to hide the group.

- Set the value of the `showShadow` attribute to `1`, to show a shadow effect for the annotation group.

- Specify the hex color code for the annotation group, using the `color` attribute.

- Specify the font family for all the text annotation(s) in the annotation group, using the `font` attribute.

- Specify the font size for all the text annotation(s) in the annotation group, using the `fontSize` attribute.

- Specify the horizontal alignment for all text annotation(s), using the `textAlign` attribute.

- Specify the vertical alignment for all text annotation(s), using the `textVAlign` attribute.

- Specify whether text annotation(s) are to be rotated, using the `rotateText` attribute. Note that this attribute takes `0` (default), `1`, `left`, and `right`, as values.

- Set the value of the `wrapText` attribute to `1`, to automatically wrap words that are too long to fit in a line, to the next one. 

- Specify the URL to which you will be redirected if you click the annotation group, using the `link` attribute.

- Specify the tooltip for the annotation group using the `toolText` attribute.

- Specify a list of hex color codes, if the group has to be rendered with a gradient effect, using the `fillColor` attribute.

- Specify the fill color ratio for an annotation group, if the group has to be rendered with a gradient effect, using the `fillRatio` attribute. Note that this attribute is useful only if you specify multiple colors using the `fillColor` attribute. It is a comma-separated list of numbers that lie between 0 and 100. The number of values you provide for this attribute should be the same as that for the `fillColor` attribute. In case the number of ratio values is less than the number of colors you provide, the last of the comma-separated values is repeated for the remaining colors. The summation of these values should not exceed 100.

> These attributes belong to the **annotations** → **groups** object array.

Refer to the code below:

```json
{
    "annotations": {
        "origw": "400",
        "origh": "300",
        "autoscale": "1",
        "groups": [{
            "items": [{
                "id": "dyn-labelBG",
                "type": "rectangle",
                "radius": "3",
                "x": "$canvasEndX - 100",
                "y": "$canvasStartY",
                "tox": "$canvasEndX",
                "toy": "$canvasStartY + 30",
                "color": "#0075c2",
                "alpha": "70"
            }, {
                "id": "dyn-label",
                "type": "text",
                "text": "Total: 119,507",
                "fillcolor": "#ffffff",
                "fontsize": "10",
                "x": "$canvasEndX - 50",
                "y": "$canvasStartY + 15"
            }]
        }]
    }
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-annotations-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/p6t4g981/) to edit the above chart.

In the spline chart given above, you can see the total number of footfalls for each week created as an annotation group. A rectangle and a text annotation are grouped together to show the total number of footfalls. Note that if you have to change the position of the text and rectangle annotation from the spline chart above, you would have to first reposition the rectangle annotation and then re-position the text annotation. Instead, if you manipulate them as a group, you only have to change the group's position.

> When an annotation group is rendered on a chart, annotation items are layered in the order they are defined. In the above chart, you can position the text annotation above the rectangle annotation, by defining the rectangle annotation before the text annotation.

## Manipulate Annotation Groups

In the example given below, you can see how manipulating annotations as a group is easier than manipulating them as individual items.

Refer to the code below:

```json
{
    "chart": {
        "caption": "Bakersfield Central - Total footfalls",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors",
        "showTooltip": "0",
        "formatNumberScale": "0",
        "theme": "fusion"
    },
    "annotations": {
        "origw": "400",
        "origh": "300",
        "autoscale": "1",
        "groups": [{
            "id": "total-footfall",
            "items": [{
                "id": "dyn-labelBG",
                "type": "rectangle",
                "radius": "3",
                "x": "$canvasEndX - 100",
                "y": "$canvasStartY",
                "tox": "$canvasEndX",
                "toy": "$canvasStartY + 30",
                "color": "#0075c2",
                "alpha": "70"
            }, {
                "id": "dyn-label",
                "type": "text",
                "text": "Total: 119,507",
                "fillcolor": "#ffffff",
                "fontsize": "10",
                "x": "$canvasEndX - 50",
                "y": "$canvasStartY + 15"
            }]
        }]
    },
    "data": [{
        "label": "Mon",
        "value": "15123"
    }, {
        "label": "Tue",
        "value": "14233"
    }, {
        "label": "Wed",
        "value": "25507"
    }, {
        "label": "Thu",
        "value": "9110"
    }, {
        "label": "Fri",
        "value": "15529"
    }, {
        "label": "Sat",
        "value": "20803"
    }, {
        "label": "Sun",
        "value": "19202"
    }]
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-annotations-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/zfvp8ffp/) to edit the above chart.

> In the above spline chart, you can control whether the total number of footfalls will be shown or hidden, by manipulating attributes as a group.