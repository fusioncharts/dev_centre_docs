---
title: Canvas | FusionCharts
description: With FusionCharts Suite XT, you can customize the canvas area of your chart. Chart canvas refers to the area in which the chart data is plotted.
heading: Canvas
breadcrumb: [["Home", "/"], ["Canvas"]]
---

Chart canvas refers to the area in which the chart data is plotted, excluding the area where titles, legends, and axis names are rendered.

The blue coloured area shown in the chart below is the canvas area:

{% embed_chart chart-configurations-canvas-example-1.js %}

We will learn how to customize different properties of the canvas.

## Customize the canvas fill color

To customize the canvas fill color the following attributes are used:

* Specify the hex code of the canvas background color using the `showCanvasBorder` attribute.

* Set the transparency of the canvas background using the `canvasBgAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
       ...
        "canvasbgColor": "#1790e1",
        "canvasbgAlpha": "10",
        "canvasBorderThickness": "1",
        "showAlternateHGridColor": "0",
        "bgColor": "#eeeeee",
        "theme": "fint"
    }
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-canvas-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/qx1djybc/ "@@open-newtab") to edit the above chart.

## Hide canvas border

By default, the canvas border is not visible. To show the canvas border, set the `showCanvasBorder` attribute to `1`. 

Refer to the code below:

```
 {
    "chart": {

        "showCanvasBorder":"1",
        ...
    }
}

```

The chart without canvas border will look like as shown below:

**INSERT CHART**

## Customize canvas border

To customize the border the following attributes are used:

* Specify the hex code to set the border color using the `canvasBorderColor` attribute.

* Set the thickness of the border using the `canvasBorderThickness` attribute. Valid range is **0-5**.

* Set the transparency of the border using the `canvasBorderAlpha` attribute. 

Refer to the code below:

```
 {
    "chart": {
        "canvasBorderThickness": "1",
        " canvasBorderColor":"'666666",
        "canvasBorderThickness":"1",
        "canvasBorderAlpha":"80"
    }
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-canvas-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/ju5dvkoh/ "@@open-newtab") to edit the above chart.

## Use gradient fill

To set gradient fill for the canvas follow the steps given below:

* Specify the hex codes of the gradient colors separated by comma using the `canvasBgColor` attribute.

* Set the transparency of the background color using the `canvasBgAlpha` attribute.

* Set the canvas background ratio in percentage for gradients separated by comma using the `canvasBgRatio` attribute.

* Specify canvas background angle (in degrees) in case of gradient. Valid range is `0` to `360`.

Refer to the code below:

```
{
    "chart": {
        "canvasbgColor": "#eeeeee,#b3b3b3",
        "canvasbgAlpha": "100",
        "canvasBgRatio": "40,60",
        "canvasBgAngle": "0"
    },

```

Below is a sample chart with a gradient filled chart canvas:

{% embed_chart chart-configurations-canvas-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/yngu2v81/ "@@open-newtab") to edit the above chart.

## Configure the 3D effect

The canvas can be configured to have a 3D effect. To do so, follow the steps given below:

* Set the `showCanvasBg` attribute to `1` to show the canvas background. 

* Set the `showCanvasBase` attribute to `1` to show the canvas base.

* Specify the hex code of the base color using the `canvasBaseColor` attribute.

* Set the height of the canvas base using the `canvasBaseDepth` attribute.

* Set the depth of the canvas background using the `cnavsBgDepth` attribute.

Refer to the code below:

```
{
    "chart": {
       ...
        "showCanvasBg": "1",
        "showCanvasBase": "1",
        "canvasBaseDepth": "14",
        "canvasBgDepth": "5",
        "canvasBaseColor": "#aaaaaa",
        "canvasBgColor": "#eeeeee"
    },

```

The chart will look like as shown below:

{% embed_chart chart-configurations-canvas-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/xmtdue42/ "@@open-newtab") to edit the above chart.