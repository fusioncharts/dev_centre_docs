---
title: Create Image Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Create Image Annotations
---

## Prerequisites

* [Create a simple chart using FusionCharts Suite XT](/getting-started/plain-javascript/your-first-chart-using-plain-javascript)
* [Introduction to Annotations](/chart-guide/chart-configurations/annotations/introduction-to-annotations)
* [Creating simple annotations](/chart-guide/chart-configurations/annotations/creating-annotations/create-annotations)

The column 2D charts with image annotations look like:

{% embed_chart chart-configurations-annotations-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/49dJJ/) to edit the above chart.

In this chart, images of brands are shown instead of the conventional 2D column data plots. Using these annotations makes the chart more intuitive while also increasing its visual appeal. Imagine how easy it becomes for your audience to read data in a chart like this, especially if the data is for a large number of brands.

The JSON structure for creating image annotations is given below:

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
                //Image 1
                "type": "image",
                //Define the attributes needed to create the image annotation
                ...
            }, {
                //Image 2
                "type": "image",
                //Define the attributes needed to create the image annotation
                ...
            }, {
                //Image n
                "type": "image",
                //Define the attributes needed to create the image annotation
                ...
            }]
        }]
    }
}
```

Use the following attributes to create image annotations:

- Specify a unique identification string for each annotation item using the `id` attribute.

- Specify the type of annotation using the `id` attribute. In this instance, set it to `image`.

- Specify the location of the image file (JPEG, PNG, or GIF) that should be rendered on the chart using the `url` attribute. Note that chart rendering does not pause for images to load and asynchronously draws them as and when they are loaded. If you need to load them instantaneously, consider preloading the images.

- Set the x coordinate of the position of the image annotation for the leftmost position (taken as zero) of the chart using the `x` attribute.

- Set the y coordinate of the position of the image annotation for the topmost position of the image annotation (taken as zero) of the chart using the `y` attribute.

- Specify the resize value for the image width using the `xScale` attribute.

- Specify the resize value for the image height using the `yScale` attribute.

- Set the transparency of the annotation using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default).