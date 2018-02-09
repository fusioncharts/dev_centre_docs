---
title: Anchors and Lines | FusionCharts
description: Anchors help to identify the data point better in the chart. They also show a tooltip showing the data plot details when the mouse is hovered over them
heading: Anchors and Lines
breadcrumb: [["Home", "/"], ["Anchors and Lines"]]
---

Each data point in a line/spline/area chart is represented by an anchor. Anchors help to easily identify the data point in the chart. Anchors show a tooltip showing the data plot details when the mouse is hovered over them, and can be linked to other pages as well. In this article we will discuss different configurations of the anchors.

## Hide anchors

The anchors and their corresponding tooltips are displayed by default. To hide the anchors set the `drawAnchors` attribute to `0` as shown in the code below:

```
{
    "chart": {
        "drawAnchors": "0",
        "theme": "fint"
    },

  ```
A line chart with anchors hidden looks as below:

<chart>

## Customize anchor properties

To customize the properties of the anchors follow the steps given below:

* Specify the number of sides using the `anchorSides` attribute to define the shape of the anchor. Set the value to `3` to draw the anchor shape as a triangle.

* Set the radius (in pixels) of the anchor using the `anchorRadius` attribute.

* Set the hex code for anchor border color using the `anchorBorderColor` attribute.

* Set the thickness (in pixels) of the anchor border using the `anchorBorderThickness` attribute.

* Set the hex code for anchor background color using the `anchorBgColor` attribute.

* Set the transparency of the anchor background using the `anchorBgAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
        "anchorRadius": "6",
        "anchorBorderThickness": "2",
        "anchorBorderColor": "#127fcb",
        "anchorSides": "3",
        "anchorBgColor": "#d3f7ff",
        "theme": "fint"
    },

```

A line chart with customized anchors looks like as shown below:

<chart>

## Customize anchors for specific data points

You can highlight a particular data point by customizing specific anchor points explicitly. To highlight a specific anchor,customize the cosmetics for only that particular anchor. 

To customize the anchor of a specific data point use the same attributes as mentioned [above](#bookmark=id.jk8ar5vl5h0). In this scenario, instead of using the attributes within the `chart` object use them within the `data` object if you are using JSON.

While using XML you can use the attributes within the `<set>` element of that specific data point instead of the `<chart>` element. 

Refer to the code below:

```
{
    "chart": {
        "caption": "Customer Satisfaction Averages",
        "subcaption": "Last week",
        "xaxisname": "Day",
        "yaxisname": "Satisfaction (In %)",
        "numbersuffix": "%",
        "showvalues": "0",
        "anchorRadius": "6",
        "anchorBorderThickness": "2",
        "theme": "fint"
    },
    "data": [
        {
            "label": "Mon",
            "value": "22.5",
            "anchorBorderColor": "#cc3333",
            "anchorBgColor": "#ff9900"
        },
        {
            "label": "Tue",
            "value": "42.4"
        },
        {
            "label": "Wed",
            "value": "28.2"
        },
        {
            "label": "Thu",
            "value": "22.8"
        },
        {
            "label": "Fri",
            "value": "39.2"
        },
        {
            "label": "Sat",
            "value": "66.45"
        }
    ]
}

```

A line chart with anchors for specific data points customized looks as below:

<chart>

## Add external images

You can add external images in place of anchors for line and area charts. This allows you to use different images for each anchor, and lets you highlight special values. To do so, you have to set the attributes in individual `data` object. The attributes use are:

* Specify the URL of the image using the `anchorImageUrl` attribute.

* Set the transparency of the image using the `anchorImageAlpha` attribute.

* Set the scale of the image using the `anchorImageScale` attribute.

* Set the scale of the image when the cursor is hovered on it using the `anchorImageHoverScale` attribute. 

* Set the transparency of the image when the cursor is hovered on it using the `anchorImageHoverAlpha` attribute.

Refer to the code below:

**<XML/JSON>**

A line chart with external images in the anchors looks as below:

<chart>