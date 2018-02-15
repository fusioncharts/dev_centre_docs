---
title: Border and Background | FusionCharts
description: A chart's background refers to the whole area on which a chart is drawn. The background of the chart is enclosed by a chart border.
heading: Border and Background
breadcrumb: [["Home", "/"], ["Border and Background"]]
---

A chart's background refers to the whole area on which it is drawn and it is enclosed by the chart border, the rectangle around a chart's background.

![Border and Background]({% site.baseurl %}/images/chart-configurations-border-and-background-image-1.png)

This article shows how to configure the border and background of your chart. It will also explain a few attributes that control the behavior of these elements. 

## Show/Hide Chart Borders

By default, the chart borders are visible for 2D charts. To hide the chart border, set the `showBorder` attribute to `0`.

Refer to the code below:

```
{
    "chart": {
        "showBorder": "1",
    }
}

```
The chart without border will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/b58ma056/ "@@open-newtab") to edit the above chart.

## Customize chart borders

To customize the chart border the following attributes are used:

* Specify the hex code of the border color using the `borderColor` attribute.

* Set the thickness of the border using the `borderThickness` attribute.

* Set the transparency of the border using the `borderAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
       ...
        "borderColor": "#666666",
        "borderThickness": "4",
        "borderAlpha": "80",
       ...
    }
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/5vj22scs/ "@@open-newtab") to edit the above chart.

### Customize chart background

To customize the chart background the following attributes are used:

* Set the hex code of the color of the background using the `bgColor` attribute.

* Set the transparency of the background using the `bgAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "bgColor": "#DDDDDD",
        "bgAlpha": "50",
        ...
    }
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/c5o8spm5/ "@@open-newtab") to edit the above chart.

## Use gradient background

When using a gradient fill for the background, you can configure three aspects:

* Set gradient transparency

* Set ratio of colour distribution

* Set the gradient angle

To do so, the following attributes are used:

* Set the hex codes of the gradient colors separated by comma using the `bgColor` attribute.

* Set the transparency of the background using the `bgAlpha` attribute.

* Set the radius of each color in the gradient using the `bgRatio` attribute.

* Set the angle in degrees of each color using the `bgAngle` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "bgColor": "EEEEEE,CCCCCC",
        "bgratio": "60,40",
        "bgAlpha": "70,80",
        "bgAngle": "180"
    }
}

```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-border-and-background-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/73h05m4q/ "@@open-newtab") to edit the above chart.

## Use external image

You can specify an external image (GIF, JPEG or PNG only) as the background of the chart. Use the `bgImage` attribute to specify the **URL** of the external image as shown in the code below:

```
{

    "chart":{ 
    ...   
    "bgImage":"pizza.jpg"
},

```

The chart will look like as shown below:

{% embed_chart chart-configurations-border-and-background-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/ceqLLtwk/ "@@open-newtab") to edit the above chart.

## Customize background image

You can even customize the external image rendered as the chart background. To do so, the following attributes are used:

* Set the transparency level of the background image using the `bgImageApha` attribute.

* Specify a display mode using the `bgImageDisplayMode` attribute. Possible values are `stretch`, `tile`, `fit`, `fill`, `center` and `none`.

* Set the alignment of the image using the `bgImageHAlign` and the `bgImageVAlign` attributes. Possible values for these attributes are `top`, `middle` and `bottom`.

* Increase or decrease the scale of the image using the `bgImageScale` attribute.

Refer to the code below:

```
{

    "chart":{
        ...    
        "bgImage":"pizza.jpg",
        "bgImageAlpha":"30",
        "bgImageScale":"50",
        "bgImageVAlign":"bottom",
        "bgImageHAlign":"middle",
        "bgImageDisplayMode":"center",
        ...
    },
    ...
}  

```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-border-and-background-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/gyjd7y46/ "@@open-newtab") to edit the above chart.

> Note that alignment attributes are ignored for `center` and `stretch` display modes and `bgImageScale` attribute works only for `none`, `center` and `tile` display modes.