---
permalink: advanced-chart-configurations/annotations/creating-annotations/creating-text-annotations.html
title: Creating Text Annotations | fusionCharts
description: You can use text annotations to add notes, labels, or any other contextual text information that you may want to make available to your users.
heading: Creating Text Annotations
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating simple annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

You can use text annotations to add notes, labels, or any other contextual text information that you may want to make available to your users.

A column 2D chart rendered using text annotations is shown below:

{% embed_chart advanced-charting-annotations-creating-annotations-creating-text-annotations-example-1.js %}

The text **Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years** is a text annotation. Adding this text to the chart makes it self-descriptive and easy for a user to understand the chart. You can add multiple text annotations on a chart that can be notes, labels, or any text that adds more context to the chart.

The JSON structure for creating text annotations is given below:

```javascript
"chart": {
    ...
},
"annotations": {
    "groups": [{
        "items": [{
            //Text annotation 1
            "type": “text”,
            //Define the attributes needed to create a text annotation
            ...
        },
        ...
        {
            //Text annotation *n*
            "type": “text”,
            //Define the attributes needed to create a text annotation
            ...
        }]
    }]
}
```

The attributes used to create text annotations are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies a unique identification for the annotation. This `id` is used to identify and change other properties of the annotation.</td>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Specifies the type of annotation to be rendered. Set this attribute to `text`. </td>
  </tr>
  <tr>
    <td>`text`</td>
    <td>Specifies the text that is to be rendered as the annotation. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the position of the text annotation with respect to the leftmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the position of the text annotation with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`font`</td>
    <td>Specifies the font family for the text annotation. </td>
  </tr>
  <tr>
    <td>`fontSize`</td>
    <td>Specifies the font size for the text annotation. </td>
  </tr>
  <tr>
    <td>`align`</td>
    <td>Specifies the horizontal alignment of the text annotation. This attribute takes `left`, `center` (default), and `right` as values. </td>
  </tr>
  <tr>
    <td>`vAlign`</td>
    <td>Specifies the vertical alignment of the text annotation. This attribute takes `top`, `middle` (default), and `bottom` as values. </td>
  </tr>
  <tr>
    <td>`bold`</td>
    <td>Specifies whether the text will be in bold. Setting this attribute to `1` renders the text in bold, setting it to `0` (default) removes the bold formatting. </td>
  </tr>
  <tr>
    <td>`italic`</td>
    <td>Specifies whether the text will be in italic. Setting this attribute to `1` renders the text in italic, setting it to `0` (default) removes the italic formatting. </td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>Specifies the hex color code for the text annotation. For example, setting this attribute to `#6baa01` will render the text in the annotation in green.
The default value is `#ff0000`.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Specifies the transparency of the annotation. This attribute takes values between 0 (transparent) and 100 (opaque, default). </td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>Specifies the hex color code for the text annotation's background. For example, a value of `#fcfc00` colors the background yellow.</td>
  </tr>
  <tr>
    <td>`leftMargin`</td>
    <td>Sets a fixed margin, in pixels, to the left of the text.</td>
  </tr>
  <tr>
    <td>`rotateText`</td>
    <td>Specifies whether the text annotation(s) will be rotated. This attribute takes `0` (default), `1`, `left`, and `right` as values.</td>
  </tr>
  <tr>
    <td>`wrap`</td>
    <td>Specifies whether text wrapping will be enabled. Setting this attribute to `1` will enable text wrapping, setting it to `0` (default) will disable it. </td>
  </tr>
  <tr>
    <td>`wrapWidth`</td>
    <td>Specifies the width wrapping dimension for the text. When this width is reached, it will cause the text to break into a new line.
The `toX` and `toY` attributes can also be set on text if text wrapping dimensions are provided in absolute pixels from annotation group's origin coordinates.</td>
  </tr>
  <tr>
    <td>`wrapHeight`</td>
    <td>Like the `wrapWidth` attribute, this attribute applies to the height occupied by the text. Ellipses are appended to the end of text when text overflows beyond allocated vertical space of `wrapHeight` or `toY` attributes.</td>
  </tr>
</table>


The complete data structure for the column 2D chart with the text annotation is given below:

{% embed_data advanced-charting-annotations-creating-annotations-creating-text-annotations-example-1.js %}
