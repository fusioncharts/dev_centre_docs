---
title: Create Shape Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Create Shape Annotations
---

## Prerequisites

- Creating a simple chart using FusionCharts Suite XT

- Introduction to annotations

- Creating simple annotations

You can draw annotations in any of the following shapes using FusionCharts Suite XT:

- Rectangle
- Polygon
- Line
- Circle
- Arc

The chart with a shape annotation is shown below:

{% embed_chart chart-configurations-annotations-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/9xj50enk/)to edit the above chart.

The rectangle around the text is a shape annotation.

The JSON structure to create shape annotation is given below:

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
                //Shape 1
                "type": ""//appropriate value according to required shape type, discussed later in this article,
                ...
            }, {
                //Shape 2
                "type": ""//appropriate value according to required shape type, discussed later in this article,
                ...
            }, {
                //Shape *n*
                "type": ""//appropriate value according to required shape type, discussed later in this article,
                ...
            }]
        }]
    }
}
```

FusionCharts Suite XT includes several attributes to create and customize shape annotations. While many of these attributes are common to all shapes, some attributes work only for specific shapes.

As such, the attributes have been divided into two sections below - **Common** and **Ad Hoc**:

## Common Attributes

Use the following attributes to create shape annotations:

* Set a unique identification for the annotation using the `id` attribute. You can then use it to identify and change other properties of the annotation.

* Set the type of annotation to be rendered using the `type` attribute. In this instance, set it to the type of shape (`rectangle`, `polygon`, `line`, `circle`, or `arc`) that you want to create.

* Set the color of the shape annotation using the `color` attribute, which accepts hex codes of colors.

* Set the transparency of the annotation using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default).

* Specify whether a border will be shown around the annotation, by setting the `showBorder` attribute to `1`.

* Specify the color for the annotation border using the `borderColor` attribute, which accepts color hex codes as value. Note that this attribute doesn't apply to the line annotation.

* Set the transparency of the border using the `borderAlpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default). Note that this attribute doesn't apply to the line annotation.

* Specify the thickness of the annotation border in pixels, using the `borderThickness` attribute. Note that this attribute doesn't apply to the line annotation.

* Specify whether a border will be drawn around the annotation, using dashed lines, by setting the `dashed` attribute to `1`. Note that for the line annotation, this attribute will render the annotation itself as a dashed line.

* Specify the length of each dash, if a dashed border is drawn around the annotation, using the `dashLen` attribute.

* Specify the gap between each dash, if a dashed border is drawn around the annotation, using the `dashGap` attribute.

## Ad-hoc Attributes

### Rectangle

Use the following attributes to create rectangular annotations:

* Set the type of annotation by setting the `type` attribute value to `rectangle`.

* Set the x coordinate of the starting position of the rectangular annotation for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the starting position of the rectangular annotation for the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the x coordinate of the ending position of the rectangle for the leftmost position (taken as zero) of the chart using the `toX` attribute.

* Specify the y coordinate of the ending position of the rectangle for the topmost position (taken as zero) of the chart using the `toY` attribute.

* Specify the radius of the edges of the rectangle, in pixels, using the `radius` attribute. Use it when you want to render the annotation as a rounded rectangle.

A rectangle annotation will look as given below:

![Rectangle](/images/chart-configurations-annotations-image-2.jpg)

### Polygon

Use the following attributes to create polygonal annotations:

* Specify the type of annotation by setting the `type` attribute value to `polygon`.

* Set the number of sides of the polygon using the `sides`attribute. Note that its value must be greater than 2.

* Set the x coordinate of the center of the polygon for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the polygon for the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the radius of the edges of the polygon, in pixels, using the `radius` attribute. Use it when you want to render the annotation as a rounded polygon.

A polygon annotation will look as given below:

![Polygon](/images/chart-configurations-annotations-image-3.jpg)

### Line

Use the following attributes to create linear annotations:

* Specify the type of annotation by setting the `type` attribute value to `line`.

* Specify the x coordinate of the starting position of the line for the leftmost position (taken as zero) of the chart, using the `x` attribute.

* Specify the y coordinate of the starting position of the line for the topmost position (taken as zero) of the chart, using the `y` attribute.

* Specify the x coordinate of the ending position of the line for the leftmost position (taken as zero) of the chart, using the `toX` attribute.

* Specify the y coordinate of the ending position of the line for the topmost position (taken as zero) of the chart, using the `toY` attribute.

* Specify the thickness of the line (in pixels) using the `thickness` attribute.

A line annotation will look as given below:

![Line](/images/chart-configurations-annotations-image-4.jpg)

### Circle

Use the following attributes to create circular annotations:

* Specify the type of annotation by setting the `type` attribute value to `circle`.

* Set the x coordinate of the center of the circle for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the circle for the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the radius of the edges of the circle, in pixels, using the `radius` attribute. 

* Specify the height in pixels using the `yRadius` attribute, if you want to draw an oval annotation.

A circle annotation will look as given below:

![Circle](/images/chart-configurations-annotations-image-5.jpg)

### Arc

An arc is suitable to draw doughnut like shapes or a slice of it. You can use it to highlight a slice of a pie chart, a doughnut chart, or an angular gauge. Use the following attributes to create arc annotations:

* Specify the type of annotation by setting the `type` attribute value to `arc`.

* Set the x coordinate of the center of the arc for the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the arc for the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the outer radius of the arc in pixels using the `radius` attribute. 

* Specify the inner radius of the arc in pixels using the `innerRadius` attribute. 

* Specify the height in pixels using the `yRadius` attribute, if you want to draw an oval annotation.

* Specify the starting angle of the arc in degrees using the `startAngle` attribute, which takes values between 0 (default) and 360.

* Specify the ending angle of the arc in degrees using the `endAngle` attribute, which takes values between 0 (default) and 360.

An arc annotation will look as given below:

![Arc](/images/chart-configurations-annotations-image-6.jpg)