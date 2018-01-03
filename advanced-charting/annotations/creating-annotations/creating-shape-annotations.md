---
permalink: advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html
title: Creating Shape Annotations | FusionCharts
description: FusionCharts Suite XT lets you draw annotations in any of the shapes rectangle, polygon, line, circle, arc.
heading: Creating Shape Annotations
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Introduction to annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}

* [Creating simple annotations]{% linkTo tutorials/advanced-charting/annotations/creating-annotations/introduction.md %}

FusionCharts Suite XT lets you draw annotations in any of the following shapes:

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html#rectangle">Rectangle</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html#polygon">Polygon</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html#line">Line</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html#circle">Circle</a>

* <a href="{{ site.baseurl }}advanced-chart-configurations/annotations/creating-annotations/creating-shape-annotations.html#arc">Arc</a>

Take a look at the column 2D chart shown below:

{% embed_chart advanced-charting-annotations-creating-annotations-creating-shape-annotations-example-1.js %}

The rectangle around the text is a shape annotation.

The JSON structure for creating image annotations is given below:

```javascript
"chart": {
        ...
},
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
```

FusionCharts Suite XT includes several attributes to create and customize shape annotations. While many of these attributes are common to all shapes, some attributes work for only specific shapes.

For ease of understanding, therefore, the attributes have been divided into two sections:

* Common attributes

* Adhoc attributes

<p class="text-info"> The complete data structure that shows how you use these attributes is given at the end of this article. </p>

## Common Attributes

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies a unique identification for the annotation. This `id` is used to identify and change other properties of the annotation.
This attribute is applicable to all annotation items.</td>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Specifies the type of annotation to be drawn.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>Specifies the hex color code for the annotation. For example, setting this attribute to `#6baa01` will draw an annotation in the green color.
The default value is `#ff0000`.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Specifies the transparency of the annotation. This attribute takes values between 0 (transparent) and 100 (opaque, default). </td>
  </tr>
  <tr>
    <td>`showBorder`</td>
    <td>Specifies whether a border will be shown around the annotation. Setting this attribute to `1` shows the border, setting it to `0` (default) hides it.</td>
  </tr>
  <tr>
    <td>`borderColor`</td>
    <td>Specifies the hex color code for the annotation border. For example, setting this attribute to `#f8bd19` will show a yellow border around the annotation.
This attribute is not applicable to the line annotation.</td>
  </tr>
  <tr>
    <td>`borderAlpha`</td>
    <td>Specifies the transparency of the annotation border. This attribute takes values between 0 (transparent) and 100 (opaque, default).
This attribute is not applicable to the line annotation.</td>
  </tr>
  <tr>
    <td>`borderThickness`</td>
    <td>Specifies the thickness of the annotation border, in pixels. The default value is 2 pixels.
This attribute is not applicable to the line annotation.</td>
  </tr>
  <tr>
    <td>`dashed`</td>
    <td>Specifies whether the annotation border will be drawn using dashed lines. Setting this attribute to `1` will render the border using dashed lines, setting it to `0` (default) will render it using whole lines.
For the line annotation, it renders the annotation itself as a dashed line.</td>
  </tr>
  <tr>
    <td>`dashLen`</td>
    <td>Specifies the length of each dash, if a dashed border is drawn around the annotation.</td>
  </tr>
  <tr>
    <td>`dashGap`</td>
    <td>Specifies the gap between each dash, if a dashed border is drawn around the annotation.</td>
  </tr>
</table>


## Adhoc Attributes

### Rectangle

A rectangle annotation will look as under:

![image rectangle]({{ site.baseurl }}assets/images/advanced-charting-annotations-creating-annotations-creating-shape-annotations-image-1.jpg)

The attributes used to configure a rectangle annotation are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Set this attribute to `rectangle`. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the starting position of the rectangle with respect to the leftmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the starting position of the rectangle with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`toX`</td>
    <td>Specifies the x coordinate of the ending position of the rectangle with respect to the leftmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`toY`</td>
    <td>Specifies the y coordinate of the ending position of the rectangle with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>Specifies the radius of the edges of a rectangle, in pixels. This attribute is used when you want to render the annotation as a rounded rectangle.</td>
  </tr>
</table>


### Polygon

A polygon annotation will look as under:

![image polygon]({{ site.baseurl }}assets/images/advanced-charting-annotations-creating-annotations-creating-shape-annotations-image-2.jpg)

The attributes used to configure a polygon annotation are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Set it to `polygon`. </td>
  </tr>
  <tr>
    <td>`sides`</td>
    <td>Specifies the number of sides for the polygon. Its value must be greater than 2. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the center of the polygon with respect to the leftmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the center of the polygon with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>Specifies the radius of the edges of a polygon, in pixels.</td>
  </tr>
</table>


### Line

A line annotation will look as under:

![image alt text]({{ site.baseurl }}assets/images/advanced-charting-annotations-creating-annotations-creating-shape-annotations-image-3.jpg)

The attributes used to configure a line annotation are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Set this attribute to `line`.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the starting position of the line with respect to the leftmost position (taken as zero) of the chart. </td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the starting position of the line with respect to the topmost position (taken as zero) of the chart. </td>
  </tr>
  <tr>
    <td>`toX`</td>
    <td>Specifies the x coordinate of the ending position of the line with respect to the leftmost position (taken as zero) of the chart. </td>
  </tr>
  <tr>
    <td>`toY`</td>
    <td>Specifies the y coordinate of the ending position of the line with respect to the topmost position (taken as zero) of the chart. </td>
  </tr>
  <tr>
    <td>`thickness`</td>
    <td>Specifies the thickness of the line, in pixels.  </td>
  </tr>
</table>


### Circle

A circle annotation will look as under:

![image alt text]({{ site.baseurl }}assets/images/advanced-charting-annotations-creating-annotations-creating-shape-annotations-image-4.jpg)

The attributes used to configure a circle annotation are:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Set this attribute to `circle`. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the center of the circle with respect to the leftmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the center of the circle with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>Specifies the radius of the circle, in pixels.</td>
  </tr>
  <tr>
    <td>`yRadius`</td>
    <td>Specifies the height, in pixels, if you want to draw an oval annotation.</td>
  </tr>
</table>


### Arc

An arc is suitable to draw doughnut like shapes or a slice of it. It can be used to highlight a slice of a pie chart, a doughnut chart, or an angular gauge.

An arc annotation will look as under:

![image alt text]({{ site.baseurl }}assets/images/advanced-charting-annotations-creating-annotations-creating-shape-annotations-image-5.jpg)

The attributes used to configure an arc annotation are:



<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Set this attribute to `arc`. </td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the center of the arc with respect to the leftmost position (taken as zero) of the chart. </td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the center of the arc with respect to the topmost position (taken as zero) of the chart.</td>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>Specifies the outer radius of the arc, in pixels. </td>
  </tr>
  <tr>
    <td>`innerRadius`</td>
    <td>Specifies the inner radius of the arc, in pixels.</td>
  </tr>
  <tr>
    <td>`startAngle`</td>
    <td>Specifies the starting angle of the arc, in degrees. This attribute takes values between 0 (default) and 360.  </td>
  </tr>
  <tr>
    <td>`endAngle`</td>
    <td>Specifies the ending angle of the arc, in degrees. This attribute takes values between 0 (default) and 360.  </td>
  </tr>
</table>


## Complete Data Structure

The complete data structure for the column 2D chart with image annotations is given below:

{% embed_data advanced-charting-annotations-creating-annotations-creating-shape-annotations-example-1.js %}
