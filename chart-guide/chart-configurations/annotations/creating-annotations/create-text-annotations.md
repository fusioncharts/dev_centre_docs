---
title: Create Text Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Create Text Annotations
---

## Prerequisites

* Creating a simple chart using FusionCharts Suite XT

* Introduction to annotations

* Creating simple annotations

You can use text annotations to add notes, labels, or any other contextual text information that you may want to make available to your users.

A column 2D chart rendered using text annotations is shown below:

{% embed_chart chart-configurations-annotations-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/9xj50enk/) to edit the above chart.

The text "Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years" is a text annotation.

Adding this text to the chart makes it self-descriptive and easy for a user to understand the chart. You can add multiple text annotations on a chart that can be notes, labels, or any text that adds more context to the chart.

The JSON structure for creating text annotations is given below:

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
                //Text annotation 1
                "type": "text",
                //Define the attributes needed to create a text annotation
                ...
            }, {
                //Text annotation n
                "type": "text",
                //Define the attributes needed to create a text annotation
                ...
            }]
        }]
    }
}
```

Use the following attributes to text annotations, to add notes, labels, or any other contextual text information to charts.

* Set a unique identification for the annotation using the `id` attribute. You can then use it to identify and change other properties of the annotation.

* Set the type of annotation to be rendered using the `type` attribute. In this instance, set it to text.

* Set the x coordinate of the position of the text annotation for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the position of the text annotation for the topmost position (taken as zero) of the chart using the `y` attribute.

* Set the font family for the text annotation using the `font` attribute.

* Set the font size for the text annotation using the `fontSize` attribute.

* Set the horizontal alignment of the text annotation using the `align` attribute, which accepts `left`, `center` (default), or `right` as value.

* Set the vertical alignment of the text annotation using the `vAlign` attribute, which accepts `top`, `middle` (default), or `bottom` as values.

* Set the value of `bold` attribute to `1`, to render the annotation text in bold formatting.

* Set the value of `italic` attribute to `1`, to render the annotation text in italic formatting.

* Set the color of the text annotation using the `color` attribute, which accepts hex codes of colors.

* Set the transparency of the annotation using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default).

* Set the background color of the text annotation using the `bgColor` attribute, which accepts hex codes of colors.

* Set a fixed margin in pixels, to the left of the text, using the `leftMargin` attribute.

* Rotate the text annotation using the rotateText attribute, which accepts `0` (default), `1`, `left`, or `right` as values.

* Set the value of the `wrap` attribute to `1`, to enable text wrapping for the annotation.

* Set the width after which the text will be wrapped, using the `wrapWidth` attribute. You can also set the `toX` and `toY` attributes if you provide the text wrapping dimensions in absolute pixels from the origin coordinates of the annotation group.

* Set the maximum height the text can occupy, using the `wrapHeight` attribute. The chart will append ellipses to the end of the annotation whenever the text overflows beyond the vertical space that you allocate using the `wrapHeight` or `toY` attribute.