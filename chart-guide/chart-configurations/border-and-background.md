---
title: Learn to change Borders & Backgrounds in your Charts & Graphs 
description: Customize your charts border & background in FusionCharts blog. Learn how to show or hide chart borders, its color, gradient, thickness & transparency now.
heading: Borders and Backgrounds
---

A chart's background refers to the whole area on which it is drawn, and it is enclosed by the chart border, the rectangle around a chart's background.

![Border and Background](/images/chart-configurations-border-and-background-image-1.png)

## Show/Hide Chart Borders

By default, the chart borders are visible for 2D charts. To hide the chart border, set the `showBorder` attribute to `0`. Set this attribute to `1` (default) to show the border around the canvas of the chart.

Refer to the code below:

```json
{
    "chart": {
        "showBorder": "1",
    }
}
```

The chart without border will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/b58ma056/) to edit the above chart.

## Customize Chart Borders

To customize the chart border, the following attributes are used:

* Specify the hex code of the border color using the `borderColor` attribute.

* Set the thickness of the border using the `borderThickness` attribute.

* Set the transparency of the border using the `borderAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "borderColor": "#666666",
        "borderThickness": "4",
        "borderAlpha": "80"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/5vj22scs/) to edit the above chart.

## Customize Chart Background

To customize the chart background, the following attributes are used:

* Set the hex code of the color of the background using the `bgColor` attribute.

* Set the transparency of the background using the `bgAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "bgColor": "#DDDDDD",
        "bgAlpha": "50"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/c5o8spm5/) to edit the above chart.

## Use Gradient Background

When using a gradient fill for the background, you can configure three aspects:

* Set gradient transparency

* Set ratio of color distribution

* Set the gradient angle

To do so, the following attributes are used:

* Set the hex codes of the gradient colors separated by a comma using the `bgColor` attribute.

* Set the transparency of the background using the `bgAlpha` attribute.

* Set the radius of each color in the gradient using the `bgRatio` attribute.

* Set the angle in degrees of each color using the `bgAngle` attribute.

Refer to the code below:

```json
{
    "chart": {
        "bgColor": "EEEEEE,CCCCCC",
        "bgratio": "60,40",
        "bgAlpha": "70,80",
        "bgAngle": "180"
    }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-border-and-background-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/73h05m4q/) to edit the above chart.

## Use External Image

You can specify an external image (GIF, JPEG or PNG only) as the background of the chart. Use the `bgImage` attribute to specify the **URL** of the external image as shown in the code below:

```json
{
    "chart":{
        "bgImage":"http://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg"
    }
}    
```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/ceqLLtwk/) to edit the above chart.

## Customize Background Image

You can even customize the external image rendered as the chart background. To do so, the following attributes are used:

* Set the transparency level of the background image using the `bgImageApha` attribute.

* Specify a display mode using the `bgImageDisplayMode` attribute. Possible values are `stretch`, `tile`, `fit`, `fill`, `center` and `none`.

* Set the alignment of the image using the `bgImageHAlign` and the `bgImageVAlign` attributes. Possible values for these attributes are `top`, `middle` and `bottom`.

* Increase or decrease the scale of the image using the `bgImageScale` attribute.

Refer to the code below:

```json
{
    "chart":{
        "bgImage":"pizza.jpg",
        "bgImageAlpha":"30",
        "bgImageScale":"50",
        "bgImageVAlign":"bottom",
        "bgImageHAlign":"middle",
        "bgImageDisplayMode":"center",
    }
}  
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-border-and-background-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/gyjd7y46/) to edit the above chart.

> Note that alignment attributes are ignored for `center` and `stretch` display modes and `bgImageScale` attribute works only for `none`, `center` and `tile` display modes.
