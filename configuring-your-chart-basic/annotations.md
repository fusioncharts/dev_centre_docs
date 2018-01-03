---
permalink: basic-chart-configurations/annotations.html
title: Basic Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Annotations
chartPresent: true
---

Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user. This section will teach you how to create different shapes, images, and text annotations for use with your chart.

Annotations as part of FusionCharts Suite XT are defined inside the `annotations` object. This object has an array of `groups`, with each `group` element having a unique `id`. The `groups` object contains an array of `items`, each item contains information on one specific annotation in the chart. Having annotations organised in groups is useful when manipulating multiple annotations at once through API calls.

Shown below is a code snippet showing a the structure of a simple `annotations` object.

```html<html>
<body></body>
</html>
```

```javascript
"annotations": {

               "groups": [

                   {

                       "id": "custom-group-1",

                       "items": [

                           {

                            // Item definition goes here

                           },

                           {

                            // Item definition goes here

                           },

                           ]

                   },

                   {

                       "id": "custom-group-2",

                       "items": [

                           {

                            // Item definition goes here

                           },

                           {

                            // Item definition goes here

                           },

                           ]

                   },

                   ]

}
```

## Using shapes in an annotation

### Line Annotation

The simplest type of annotation is a line shaped annotation. The chart shown below has a simple dashed line and a label that highlights the point with the highest value over the week

{% embed_all configuring-your-chart-annotations-example-1.js %}

The attributes used to customize the annotation are:

<table>
 <tr>
   <th>Name </th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`type`</td>
   <td>If set to line, it renders a rectangle annotation.</td>
 </tr>
 <tr>
   <td>`x`</td>
   <td>It specifies the starting x-coordinate for the annotation. This x co-ordinate is relative to the x co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`y`</td>
   <td>It specifies the starting y-coordinate for the annotation. This y co-ordinate is relative to the y co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`toX`</td>
   <td>It specifies the ending x-coordinate for the annotation. This x co-ordinate is relative to the x co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`toY`</td>
   <td>It specifies the ending y-coordinate for the annotation. This y co-ordinate is relative to the y co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`thickness`</td>
   <td>It specifies the thickness of the line annotation.</td>
 </tr>
 <tr>
   <td>`color`</td>
   <td>It specifies the hex code for the color that will be used to render the line annotation.</td>
 </tr>
 <tr>
   <td>`dashed`</td>
   <td>It specifies if the line must be dashed or not.
</td>
 </tr>
 <tr>
   <td>`alpha`</td>
   <td>It specifies the transparency for the annotation.
</td>
 </tr>
</table>


### Circle Annotation

The same annotation as shown above can be drawn using a circle that shows the highest value for the week. The chart looks like this

{% embed_all configuring-your-chart-annotations-example-10.js %}

Given below is the list of attributes used to draw and configure a circle annotation:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>`type`</td>
   <td>If set to circle, it renders a circle annotation.</td>
 </tr>
 <tr>
   <td>`x`</td>
   <td>It specifies the center x-coordinate for the annotation. This x co-ordinate is relative to the x co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`y`</td>
   <td>It specifies the center y-coordinate for the annotation. This y co-ordinate is relative to the y co-ordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>`radius`</td>
   <td>It specifies the radius of the circle.</td>
 </tr>
 <tr>
   <td>`yRadius`</td>
   <td>if specifies the y-radius of the circle that allows you to stretch or compress the annotation vertically.</td>
 </tr>
 <tr>
   <td>`color`</td>
   <td>It specifies the hex code for the color that will be used to render the circle annotation.</td>
 </tr>
 <tr>
   <td>`alpha`</td>
   <td>It specifies the transparency for the annotation.</td>
 </tr>
 <tr>
   <td>`startAngle`</td>
   <td>It specifies the starting angle for the circle annotation.</td>
 </tr>
 <tr>
   <td>`endAngle`</td>
   <td>It specifies the ending angle for the circle annotation.
</td>
 </tr>
</table>


## Using images in an annotation

You can specify the url to an image instead of a shape. Shown below is an example where images are used for the annotations

{% embed_all configuring-your-chart-annotations-example-11.js %}

Given below is the list of attributes used to configure an image annotation:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>type</td>
   <td>If set to image, it renders an image annotation.</td>
 </tr>
 <tr>
   <td>x</td>
   <td>It specifies the center x-coordinate for the annotation. This x coordinate is relative to the x coordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>y</td>
   <td>It specifies the center y-coordinate for the annotation. This y coordinate is relative to the y coordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>url</td>
   <td>It specifies the relative path of the image to be used as annotation.
</td>
 </tr>
</table>


## Image scaling

It may be required at times to scale images based on chart specific requirements, in some cases you may want to keep one image to scale while scaling up or down other images based on the data being shown.

Shown here is an example where the images are scaled

{% embed_all configuring-your-chart-annotations-example-2.js %}

Given below is a brief description of the attributes used to scaling in an image annotation

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>xScale</td>
   <td>It specifies the percentage according to which the width of the image is scaled.</td>
 </tr>
 <tr>
   <td>yScale</td>
   <td>It specifies the percentage according to which the height of the image is scaled.
</td>
 </tr>
</table>


## Using text in an annotation

Shown here is a simple annotation with some text in a spline chart

{% embed_all configuring-your-chart-annotations-example-3.js %}

These are the attributes that help customize annotation text:

<table>
 <tr>
   <th>Attribute</th>
   <th>Description</th>
 </tr>
 <tr>
   <td>type</td>
   <td>If set to text, it renders a text annotation.</td>
 </tr>
 <tr>
   <td>x</td>
   <td>It specifies the center x-coordinate for the annotation. This x coordinate is relative to the x coordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>y</td>
   <td>It specifies the center y-coordinate for the annotation. This y coordinate is relative to the y coordinate of the annotation group in which the annotation is placed.</td>
 </tr>
 <tr>
   <td>label</td>
   <td>It specifies the text to render as the annotation.</td>
 </tr>
 <tr>
   <td>color</td>
   <td>It specifies the hex code of the color that will be used to render the text annotation.</td>
 </tr>
</table>
