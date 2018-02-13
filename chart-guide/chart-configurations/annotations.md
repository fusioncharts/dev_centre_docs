---
title: Basic Annotations | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Annotations
breadcrumb: [["Home", "/"], ["Annotations"]]
---

Annotations are user-defined objects or shapes drawn on a chart. You can use annotations to increase the visual appeal of your charts and make them more informative. Annotations help end users interpret charts better. You can create different shapes, images, and text annotations for use with your chart.

For a glimpse of how this feature works, look at the example shown below:

Assume that Harry wants to compare sales of the top four chocolate brands at his SuperMart.

A conventional column 2D chart used to show this data will look like the following:

{% embed_chart chart-configurations-annotations-example-1.js %}

Now, see how the same chart will look, when rendered using annotations:

{% embed_chart chart-configurations-annotations-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/49dJJ/) to edit the above chart.

Looks much better, doesn't it? The chocolate bars shown in this chart are image annotations.

Take a look at this video of a [collaboration dashboard](https://www.fusioncharts.com/dashboards/collaboration/) created to help a sales team unify their analysis and discussion. Notice the **callouts** shown above the columns for April and August. These callouts are shape annotations and the **numbers** shown next to the callouts are text annotations. Click these callouts and see how the annotations work!

In addition to creating annotations, you can:

* Customize annotations for their functional properties as well as their look and feel

* Position them on your chart or gauge using absolute or relative values

* Create and control them dynamically

* Customize the response to user actions using annotation events

Now that you have seen what annotations look like and how useful they can be in making your charts informative, go ahead and see how you can create them.

## How annotations work

Annotations are defined inside the `annotations` object. This object has an array of `groups`, and each `group` element has a unique id. The `groups` object contains an array of `items`, each of which contains information on one specific annotation in the chart. 

Organising annotations in groups is useful when you manipulate multiple annotations at once through API calls. Refer to the code below to understand the structure of a simple `annotations` object.

```
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

## Use objects to create annotations

Use the following objects to create annotations:

* `annotations` is an object that encompasses all the code for generating annotations.

* `groups` is an object array that consolidates multiple annotations into one group. You can create multiple annotation groups for one chart. This is useful when you need to create a complex graphic using individual annotation items.

* `items` is an object array that defines individual annotation items contained in one annotation group.

## Add different types of annotations

You can add the following types of annotations to your chart:

* Text (custom notes, labels, or paragraphs of text)

* Image (external images)

* Shapes (rectangle, polygon, circle, arc, and line)

* Path connectors (freeform arrows, connectors, callouts, and so on)

Refer to the basic JSON structure to create annotations, given below:

```
{
    "chart": {
        ...
    },
    "annotations": {
        "groups": [{
                *//Annotation group 1*
                *//Define a unique identification string for the group.*
                "items": [
                    *//Define individual annotation items.*
                    {*//Annotation Item 1},*
                    {*//Annotation Item 2},*
                    ...
                    {*//Annotation Item *n*}*
                ]
            }, {
                *//Annotation group 2*
                *//Define a unique identification string for the group.*
                "items": [
                    *//Define individual annotation items.*
                    {*//Annotation Item 1},*
                    {*//Annotation Item 2},*
                    ...
                    {*//Annotation Item *n*}*
                ]
            },
            ...
             {
                *//Annotation group *n
                *//Define a unique identification string for the group.*
                "items": [
                    *//Define individual annotation items.*
                    {*//Annotation Item 1},*
                    {*//Annotation Item 2},*
                    ...
                    {*//Annotation Item *n*}*
                ]
            },
        ]
    }
}

```

The image of a chart rendered with different types of annotations items is shown below:

![Annotations]({% site.baseurl %}/images/chart-configurations-annotations-image-1.jpg)

## Create text annotations

Use the following attributes to text annotations, to add notes, labels, or any other contextual text information to charts.

* Set a unique identification for the annotation using the `id` attribute. You can then use it to identify and change other properties of the annotation.

* Set the type of annotation to be rendered using the `type` attribute. In this instance, set it to `text`.

* Set the x coordinate of the position of the text annotation with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the position of the text annotation with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

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

* Rotate the text annotation using the `rotateText` attribute, which accepts `0` (default), `1`, `left`, or `right` as values.

* Set the value of the `wrap` attribute to `1`, to enable text wrapping for the annotation.

* Set the width after which the text will be wrapped, using the `wrapWidth` attribute. You can also set the `toX` and `toY` attributes, if you provide the text wrapping dimensions in absolute pixels from the origin coordinates of the annotation group.

* Set the maximum height the text can occupy, using the `wrapHeight` attribute. The chart will append ellipses to the end of the annotation whenever the text overflows beyond the vertical space that you allocate using the `wrapHeight` or `toY` attribute.

The text "**Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years"** is a text annotation. 

Adding this text to the chart makes it self-descriptive and easy for a user to understand the chart. You can add multiple text annotations on a chart that can be notes, labels, or any text that adds more context to the chart.

The JSON structure for creating text annotations is given below:

```
"chart": {
    ...
},
"annotations": {
    "groups": [{
        "items": [{
            //Text annotation 1
            "type": "text",
            //Define the attributes needed to create a text annotation
            ...
        },
        ...
        {
            //Text annotation *n*
            "type": "text",
            //Define the attributes needed to create a text annotation
            ...
        }]
    }]
}

```

The column 2D chart rendered using text annotations looks like as shown below:

{% embed_chart chart-configurations-annotations-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/9xj50enk/) to edit the above chart.

## Create image annotations

Use the following attributes to create image annotations:

* Specify a unique identification string for each annotation item using the `id`.attribute.

* Specify the type of annotation using the `id`.attribute. In this instance, set it to `image`.

* Specify the location of the image file (JPEG, PNG, or GIF) that should be rendered on the chart using the `url` attribute. Note that chart rendering does not pause for images to load and asynchronously draws them as and when they are loaded. if you need to load them instantaneously, consider preloading the images.

* Set the x coordinate of the position of the image annotation with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the position of the image annotation with respect to the topmost position of the image annotation (taken as zero) of the chart using the `y` attribute.

* Specify the resize value for the image width using the `xScale` attribute.

* Specify the resize value for the image height using the `yScale` attribute.

* Set the transparency of the annotation using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default).

In this chart, images of brands are shown instead of the conventional 2D column data plots. Using these annotations makes the chart more intuitive while also increasing its visual appeal. Imagine how easy it becomes for your audience to read data in a chart like this, especially if the data is for a large number of brands.

The JSON structure for creating image annotations is given below:

```
"chart": {
    ...
},
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
        },
        ...
        {
            //Image *n*
            "type": "image",
            //Define the attributes needed to create the image annotation
            ...
        }]
    }]
}

```

The column 2D charts with image annotations looks like:

{% embed_chart chart-configurations-annotations-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/49dJJ/) to edit the above chart.

## Create shape annotations

You can draw annotations in any of the following shapes using FusionCharts Suite XT:

* Rectangle
* Polygon
* Line
* Circle
* Arc

FusionCharts Suite XT includes several attributes to create and customize shape annotations. While many of these attributes are common to all shapes, some attributes work only for specific shapes.

As such, the attributes have been divided into two sections below - Common and Ad Hoc:

### Common Attributes

Use the following attributes to create shape annotations: 

* Set a unique identification for the annotation using the `id` attribute. You can then use it to identify and change other properties of the annotation.

* Set the type of annotation to be rendered using the `type` attribute. In this instance, set it to the type of shape (`rectangle`, `polygon`, `line`, `circle`, or `arc`) that you want to create.

* Set the color of the shape annotation using the `color` attribute, which accepts hex codes of colors.

* Set the transparency of the annotation using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default).

* Specify whether a border will be shown around the annotation, by setting the `alpha` attribute to `1`.

* Specify the color for the annotation border using the `borderColor` attribute, which accepts color hex codes as value. Note that this attribute doesn't apply to the line annotation.

* Set the transparency of the border using the `borderAlpha` attribute, which accepts values between `0` (transparent) and `100` (opaque, default). Note that this attribute doesn't apply to the line annotation.

* Specify the thickness of the annotation border in pixels, using the `borderThickness` attribute. Note that this attribute doesn't apply to the line annotation.

* Specify whether a border will be drawn around the annotation, using dashed lines, by setting the `dashed` attribute to `1`. Note that for the line annotation, this attribute will render the annotation itself as a dashed line.

* Specify the length of each dash, if a dashed border is drawn around the annotation, using the `dashLen` attribute.

* Specify the gap between each dash, if a dashed border is drawn around the annotation, using the `dashGap` attribute.

The JSON structure to create shape annotation is given below:

```
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

The chart will look like as shown below:

{% embed_chart chart-configurations-annotations-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/9xj50enk/) to edit the above chart.

The rectangle around the text is a shape annotation.

> The complete data structure that shows how you use these attributes is given at the end of this article.

### Adhoc Attributes

#### Rectangle

Use the following attributes to create rectangular annotations:

* Set the type of annotation by setting the `type` attribute value to `rectangle`.

* Set the x coordinate of the starting position of the rectangular annotation with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the starting position of the rectangular annotation with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the x coordinate of the ending position of the rectangle with respect to the leftmost position (taken as zero) of the chart using the `toX` attribute.

* Specify the y coordinate of the ending position of the rectangle with respect to the topmost position (taken as zero) of the chart using the `toY` attribute.

* Specify the radius of the edges of the rectangle, in pixels, using the `radius` attribute. Use it when you want to render the annotation as a rounded rectangle.

A rectangle annotation will look as given below:

![Rectangle]({% site.baseurl %}/images/chart-configurations-annotations-image-2.jpg)

#### Polygon

Use the following attributes to create polygonal annotations:

* Specify the type of annotation by setting the `type` attribute value to `polygon`.

* Set the number of sides for the polygon using the `sides`attribute. Note that it's value must be greater than 2.

* Set the x coordinate of the center of the polygon with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the polygon with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the radius of the edges of the polygon, in pixels, using the `radius` attribute. Use it when you want to render the annotation as a rounded polygon.

A polygon annotation will look as given below:

![Polygon]({% site.baseurl %}/images/chart-configurations-annotations-image-3.jpg)

#### Line

Use the following attributes to create linear annotations:

* Specify the type of annotation by setting the `type` attribute value to `line`.

* Specify the x coordinate of the starting position of the line with respect to the leftmost position (taken as zero) of the chart, using the `x` attribute.

* Specify the y coordinate of the starting position of the line with respect to the topmost position (taken as zero) of the chart, using the `y` attribute.

* Specify the x coordinate of the ending position of the line with respect to the leftmost position (taken as zero) of the chart, using the `toX` attribute.

* Specify the y coordinate of the ending position of the line with respect to the topmost position (taken as zero) of the chart, using the `toY` attribute.

* Specify the thickness of the line (in pixels) using the `thickness` attribute.

A line annotation will look as given below:

![Line]({% site.baseurl %}/images/chart-configurations-annotations-image-4.jpg)

#### Circle

Use the following attributes to create circular annotations:

* Specify the type of annotation by setting the `type` attribute value to `circle`.

* Set the x coordinate of the center of the circle with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the circle with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the radius of the edges of the circle, in pixels, using the `radius` attribute. 

* Specify the height in pixels using the `yRadius` attribute, if you want to draw an oval annotation.

A circle annotation will look as given below:

![Circle]({% site.baseurl %}/images/chart-configurations-annotations-image-5.jpg)

#### Arc

An arc is suitable to draw doughnut like shapes or a slice of it. You can use it to highlight a slice of a pie chart, a doughnut chart, or an angular gauge. Use the following attributes to create arc annotations:

* Specify the type of annotation by setting the `type` attribute value to `arc`.

* Set the x coordinate of the center of the arc with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the center of the arc with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the outer radius of the arc in pixels using the `radius` attribute. 

* Specify the inner radius of the arc in pixels using the `innerRadius` attribute. 

* Specify the height in pixels using the `yRadius` attribute, if you want to draw an oval annotation.

* Specify the starting angle of the arc in degrees using the `startAngle` attribute, which takes values between 0 (default) and 360.

* Specify the ending angle of the arc in degrees using the `endAngle` attribute, which takes values between 0 (default) and 360.

An arc annotation will look as given below:

![Arc]({% site.baseurl %}/images/chart-configurations-annotations-image-6.jpg)

### How to create path annotations

You can draw free-form graphic elements on your charts using the `path` annotation. Use the following attributes to create path annotations:

* Specify a unique identification string for the path annotation using the `id` attribute.

* Specify the type of annotation by setting the `type` attribute value to `path`.

* Specify the path command and accepts standard SVG path format, using the `path` attribute. 

* Set the x coordinate of the starting position of the path with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the y coordinate of the starting position of the path with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the hex color code for the annotation using the `color` attribute. 

* Specify the transparency of the annotation using the `alpha` attribute, which takes values between 0 (transparent) and 100 (opaque, default).

The rectangle drawn to highlight the lowest footfall is created using the path annotation.

The JSON structure for creating path annotations is given below:

```
{
    "chart": {
        …
    },
    "annotations": {
        "groups": [{
            "items": [{
                "type": "path",
                //Define the attributes needed to create the path annotation
                …
            }]
        }]
    }
    …
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-annotations-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/an9hfrch/) to edit the above chart.

## Positioning Annotations 

You can configure positions of annotations either during their creation or after rendering them on a chart/gauge. Position annotation items by setting the positioning attributes (`x`, `y`, `toX`, `toY`, `radius`, and so on) to the required coordinates.

You can position annotations using:

* Absolute values

* Macros - that take dynamic values relative to chart elements

### Absolute values

In this section, you will see how to position annotations using static values. The attributes used to position annotations are as follows:

* Specify the unique identification string for the group using the `id` attribute.

* Set the **x** coordinate of the starting position of the annotation with respect to the leftmost position (taken as zero) of the chart using the `x` attribute.

* Set the **y** coordinate of the starting position of the annotation with respect to the topmost position (taken as zero) of the chart using the `y` attribute.

* Specify the **x** coordinate of the ending position of the annotation with respect to the leftmost position (taken as zero) of the chart, using the `toX` attribute. Note that this attribute applies only to the rectangle and line annotations.

* Specify the **y** coordinate of the ending position of the annotation with respect to the topmost position (taken as zero) of the chart, using the `toY` attribute. Note that this attribute applies only to the rectangle and line annotations.

* Specify the original width of the chart, in which the annotation will render as intended, using the `origW` attribute. It will be used as the reference width while automatically scaling annotations, if a chart is resized.

* Specify the original height of the chart, in which the annotation will render as intended, using the `origH` attribute. It will be used as the reference height while automatically scaling annotations, if a chart is resized.

* Specify the **x** coordinate position value of the final annotation items using the `xShift` attribute. When applying scaling, the value of this attribute will be included within the scale factor.

* Specify the **y** coordinate position value of the final annotation items using the `yShift` attribute. When applying scaling, the value of this attribute will be included within the scale factor.

The code snippet to position the rectangle annotation is given below:

```
...
"annotations": {
        ...
    "groups": [{
            "items": [{
                    "id": "dyn-labelBG",
                    "type": "rectangle",
                    "radius": "3",
                    "x": "290",
                    "y": "60",
                    "tox": "390",
                    "toy": "90",
                    "color": "#0075c2",
                    "alpha": "70",
                    "origW": "400",
                    "origH": "300"
                },
                ...
            ]
        }
    ]
}
...

```

A spline chart with a rectangle annotation and a text annotation positioned at the top-right corner of the canvas is shown below:

{% embed_chart chart-configurations-annotations-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ufgt8a10/) to edit the above chart.