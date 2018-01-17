---
permalink: advanced-chart-configurations/annotations/creating-annotations/creating-image-annotations.html
title: Creating Image Annotations | FusionCharts
description: In this article, images of brands are shown instead of the conventional 2D column data plots. Using these annotations makes the chart more intuitive while also increasing its visual appeal.
heading: Creating Image Annotations
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Introduction to annotations](/advanced-charting/annotations/introduction)

* [Creating simple annotations](/advanced-charting/annotations/creating-annotations/introduction)

A column 2D chart rendered using image annotations is shown below:

{% embed_chart advanced-charting-annotations-creating-annotations-creating-image-annotations-example-1.js %}

In this chart, images of brands are shown instead of the conventional 2D column data plots. Using these annotations makes the chart more intuitive while also increasing its visual appeal. Imagine how easy it becomes for your audience to read data in a chart like this, especially if the data is for a large number of brands.

The JSON structure for creating image annotations is given below:

```javascript
"chart": {
    ...
},
"annotations": {
    "groups": [{
        "items": [{
            //Image 1
            "type": “image”,
            //Define the attributes needed to create the image annotation
            ...
        }, {
            //Image 2
            "type": “image”,
            //Define the attributes needed to create the image annotation
            ...
        },
        ...
        {
            //Image *n*
            "type": “image”,
            //Define the attributes needed to create the image annotation
            ...
        }]
    }]
}
```

The attributes used to create image annotations are:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>Specifies a unique identification string for each annotation item. </td>
  </tr>
  <tr>
    <td>`type`</td>
    <td>Specifies the type of annotation. Set this attribute to `image`. </td>
  </tr>
  <tr>
    <td>`url`</td>
    <td>Specifies the location of the image file (JPEG, PNG, or GIF) that should be rendered on the chart.
Chart rendering does not pause for the images to load and, therefore, asynchronously draws them as and when they are loaded. In case you need to load them instantaneously, you may considering preloading the images.</td>
  </tr>
  <tr>
    <td>`x`</td>
    <td>Specifies the x coordinate of the starting position of the image annotation with respect to the leftmost position (taken as 0) of the chart. </td>
  </tr>
  <tr>
    <td>`y`</td>
    <td>Specifies the y coordinate of the starting position of the image annotation with respect to the topmost position (taken as 0) of the chart.</td>
  </tr>
  <tr>
    <td>`xScale`</td>
    <td>Specifies the resize value for the image width.</td>
  </tr>
  <tr>
    <td>`yScale`</td>
    <td>Specifies the resize value for the image height.</td>
  </tr>
  <tr>
    <td>`alpha`</td>
    <td>Specifies the transparency of the annotation. This attribute takes values between 0 (transparent) and 100 (opaque, default). </td>
  </tr>
</table>


The complete data structure for the column 2D chart with image annotations is given below:

{% embed_data advanced-charting-annotations-creating-annotations-creating-image-annotations-example-1.js %}
