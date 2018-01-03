---
permalink: advanced-chart-configurations/annotations/grouping-annotations.html
title: Grouping Annotations | FusionCharts
description: This article describes the usefulness of creating and manipulating multiple annotations as a group than as individual items.
heading: Grouping Annotations
chartPresent: true
---

## Prerequisites:

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to Annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating Annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

Annotation groups are a number of annotation items consolidated and configured together as one item. Grouping annotations is useful when there are multiple annotations on a chart and common properties have to be configured for all of them.

This article describes the usefulness of creating and manipulating multiple annotations as a group than as individual items.

## Creating Annotation Groups

Assume that you have a spline chart that shows the footfalls for each day of a week. A rectangle and a text annotation are grouped together to show the total number of footfalls.

Take a look at the spline chart shown below:

{% embed_chart advanced-charting-annotations-grouping-annotations-example-1.js %}



The label that shows the total number of footfalls for the week is created as an annotation group.

To create an annotation group, all you have to do is create each annotation item as an object within the same `groups` → `items` object array.

The code snippet to create the above text and rectangle annotation, as a group, is given below:

```javascript
…
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
…

```

<p class="text-info"> When the annotation group is rendered on the chart, annotation items will be layered in the order they are defined. Because you want to position the text annotation above the rectangle annotation, define the rectangle annotation before the text annotation. </p>

When multiple annotations are grouped together, manipulating common functional and cosmetic properties and positioning annotations becomes easy. For example, assume that you had to change the position of the text and rectangle annotation from the spline chart above, you would have to first re-position the rectangle annotation and then re-position the text annotation.

Instead, if you manipulate them as a group, you will only have to change the group’s position.

The attributes that you can use to manipulate annotation groups are given below:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies a unique identification string for the annotation group.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the starting position of the group with respect to the leftmost position (taken as 0) of the chart. If it is also configured individually for the annotation item(s) within the group, then the value of the `x` attribute for the item is set relative to the value of the `x` attribute for the group.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the starting position of the group with respect to the topmost position (taken as 0) of the chart. If it is also configured individually for the annotation item(s) within the group, then the value of the `y` attribute for the item is set relative to the value of the `y` attribute for the group.</td>
  </tr>
  <tr>
    <td>`autoScale`</td>
    <td>Specifies whether the annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` disables the automatic scaling of the group, setting it to `1` (default) enables it. </td>
  </tr>
  <tr>
    <td>`scaleText`</td>
    <td>Specifies whether text annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` (default) disables the automatic scaling of text annotations, setting it to `1` enables it.</td>
  </tr>
  <tr>
    <td>`scaleImages`</td>
    <td>Specifies whether image annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` (default) disables the automatic scaling of image annotations, setting it to `1` enables it.</td>
  </tr>
  <tr>
    <td>`constrainedScale`</td>
    <td>Specifies whether annotations will retain their aspect ratio (the height:width ratio) when scaled. Setting this attribute to `0` will disable constrained scaling, setting it to `1` (default) will enable it.</td>
  </tr>
  <tr>
    <td>`showBelow`</td>
    <td>Specifies whether the annotation group will overlap the data plots. Setting this attribute to `0` will enable the group to overlap, setting it to `1` (default) will disable it. That is, by default, the annotation group is shown __below__ the data plots.</td>
  </tr>
  <tr>
    <td>`origW`</td>
    <td>Specifies the original width of the chart, in which the annotation renders as intended. It is used as the reference width while automatically scaling annotations, in the event that a chart is resized.</td>
  </tr>
  <tr>
    <td>`origH`</td>
    <td>Specifies the original height of chart, in which the annotation renders as intended. It is used as the reference height while automatically scaling annotations, in the event that a chart is resized.</td>
  </tr>
  <tr>
    <td>`xShift`</td>
    <td>The value of this attribute is added to the x coordinate position value of the final annotation items on the x-axis. In other words, if an annotation is placed at 100 pixels left and the value of `xShift` is set to 50, then the effective value of the x coordinate for the annotation adds up to 150 pixels. When applying scaling, the value of this attribute is included within the scale factor.</td>
  </tr>
  <tr>
    <td>`yShift`</td>
    <td>Like the `xShift` attribute, this attribute applies to the y-axis.</td>
  </tr>
  <tr>
    <td>`grpXShift`</td>
    <td>Shifts all annotation groups along the x coordinate. The difference between `xShift` and this attribute is that, during scaling, `xShift` is included within the scale factor whereas `grpXShift` is excluded.</td>
  </tr>
  <tr>
    <td>`grpYShift`</td>
    <td>Like the `grpXShift` attribute, this attribute applies to the y-axis.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Specifies the transparency for the group. This attribute takes values between 0 (transparent) and 100 (opaque, default). </td>
  </tr>
  <tr>
    <td>`visible`</td>
    <td>Specifies the visibility of the group. Setting this value to `0` hides the group, setting it to `1` (default) shows it. </td>
  </tr>
  <tr>
    <td>`showShadow`</td>
    <td>Specifies whether a shadow effect will be shown for the annotation group. Setting this attribute to `1` shows the effect, setting it `0` (default) does not show the effect.  </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>Specifies the hex color code for the annotation group. </td>
  </tr>
  <tr>
    <td>`font`</td>
    <td>Specifies the font family for all the text annotation(s) in the annotation group. </td>
  </tr>
  <tr>
    <td>`fontSize`</td>
    <td>Specifies the font size for all the text annotation(s).</td>
  </tr>
  <tr>
    <td>`textAlign`</td>
    <td>Specifies the horizontal alignment for all the text annotation(s).</td>
  </tr>
  <tr>
    <td>`textVAlign`</td>
    <td>Specifies the vertical alignment for all the text annotation(s).</td>
  </tr>
  <tr>
    <td>`rotateText`</td>
    <td>Specifies whether the text annotation(s) will be rotated. This attribute takes `0` (default), `1`, `left`, and `right` as values.</td>
  </tr>
  <tr>
    <td>`wrapText`</td>
    <td>Specifies whether words that are too long to fit in a line should be wrapped to the next line. Setting this attribute to `0` disables wrapping of text, setting it to `1` (default) enables it.  </td>
  </tr>
  <tr>
    <td>`link`</td>
    <td>Specifies the URL to which the user will be redirected, if the annotation group is clicked.</td>
  </tr>
  <tr>
    <td>`toolText`</td>
    <td>Specifies the tooltip for the annotation group. </td>
  </tr>
  <tr>
    <td>`fillColor`</td>
    <td>Specifies a list of hex color codes, if the group has to be rendered with a gradient effect. For example, `"fillColor”: "#ffcc66,#2deaff,#a6992a”`.</td>
  </tr>
  <tr>
    <td>`fillRatio`</td>
    <td>Specifies the fill color ratio for an annotation group, if the group has to be rendered with a gradient effect. This attribute is useful only if you are specifying multiple colors using the `fillColor` attribute. It is a comma-separated list of numbers that lie between 0 and 100. For example, `”fillRatio”: “25, 25, 50”`. The number of values provided for this attribute should be the same as that for the `fillColor` attribute.

In case the number of ratio values is less than the number of colors provided, the last of the comma-separated values is repeated for the remaining colors.

The summation of these values should not exceed 100. </td>
  </tr>
</table>


<p class="text-info"> These attributes belong to the `annotations` → `groups` object array. </p>

## Manipulating Annotation Groups

Next, take a look at an example that shows how manipulating annotations as a group is easier than manipulating them as individual items.

For the above spline chart, this example will let the user control whether the total number of footfalls will be shown or hidden.

The chart thus rendered looks like this:

{% embed_chart advanced-charting-annotations-grouping-annotations-example-2.js %}

Selecting the **Show total footfall** radio button will show the annotation group, selecting the **Hide total footfall** radio button will hide it.

The complete data structure for this chart is given below:

{% embed_data advanced-charting-annotations-grouping-annotations-example-2.js %}
