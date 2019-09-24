---
title: Chart Paddings and Margins | FusionCharts
description: FusionCharts Suite XT lets you manage the space around the canvas and within the chart by configuring chart paddings and margins.
heading: Chart Paddings and Margins
---

FusionCharts Suite XT lets you manage the space around the canvas and within the **chart** by configuring **chart paddings** and **margins**.

## Set Chart Margins

Chart margin is the space between the chart border and the canvas border. You can set the chart margins on any one of the chart's four sides. To do so, the following attributes are used:

- Set the amount of empty space on the left of the chart using the `chartLeftMargin` attribute.

- Set the amount of empty space on the top of the chart using the `chartTopMargin` attribute.

- Set the amount of empty space on the right of the chart using the `chartRightMargin` attribute.

- Set the amount of empty space on the bottom of the chart using the `chartBottomMargin` attribute.

Refer to the code below:

```json
{
  "chart": {
    "chartLeftMargin": "40",
    "chartTopMargin": "40",
    "chartRightMargin": "40",
    "chartBottomMargin": "40"
  }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/nzz8pwv4/) to edit the above chart.

## Set Padding for Caption

Set the amount of empty space between the sub-caption and the top of the chart canvas using the `captionPadding` attribute. Refer to the code below:

```json
{
  "chart": {
    "captionPadding": "40"
  }
}
```

The chart will look like as shown in the image below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/8jfb6ozx/) to edit the above chart.

## Set Padding for Axes Names

Set the axis name padding and axis value padding, to control the amount of space between the axes and the canvas. To do so, the following attributes are used:

- Specify the distance between the top of x-axis title and the bottom of data labels using the `xAxisNamePadding` attribute.

- Specify the distance between the top of y-axis title and the start of y-axis values using the `yAxisNamePadding` attribute.

Refer to the code below:

```json
{
  "chart": {
    "xAxisNamePadding": "10",
    "yAxisNamePadding": "10"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/o618rzq3/) to edit the above chart.

## Set Padding for Axis Values

Specify the amount of horizontal space between the left edge of the canvas and the y-axis values or trend line values (on left/right side) using the `yAxisValuePadding` attribute.

Refer to the code below:

```json
{
  "chart": {
    "yAxisValuesPadding": "20"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/dq73doa6/) to edit the above chart.

## Set Padding for Data Label

Specify the vertical space between the canvas bottom edge and the data labels using the `labelPadding` attribute.

Refer to the code below:

```json
{
  "chart": {
    "labelPadding": "5"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/xz890my7/) to edit the above chart.

## Set Padding for Data Value

Specify the space between the columns/anchors and the value text boxes using the `valuePadding` attribute.

Refer to the code below:

```json
{
  "chart": {
    "valuePadding": "5"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/eozmehL3/) to edit the above chart.

## Set Canvas Padding

For a **line/area** chart, canvas padding is the space between the canvas border and the position where the line/area chart begins. Specify the amount of gap using the `canvasPadding` attribute.

Refer to the code below:

```json
{
  "chart": {
    "canvasPadding": "30"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/v0d46ngb/) to edit the above chart.

Starting v3.14.1, FusionCharts Suite XT allows you to add space between the canvas border and the particular side of the chart canvas. To do so, the following attributes are used:

- Set the space between the **left** of the canvas border and the canvas of the chart using `canvasLeftPadding` attribute.
- Set the space between the **right** of the canvas border and the canvas of the chart using `canvasRightPadding` attribute.
- Set the space between the **top** of the canvas border and the canvas of the chart using `canvasTopPadding` attribute.
- Set the space between the **bottom** of the canvas border and the canvas of the chart using `canvasBottomPadding` attribute.

> The above attributes override the `canvasPadding` attribute.

Refer to the code below:

```javascript
{
    "chart": {
        "canvasLeftPadding": "40",
        "canvasRightPadding": "40",
        "canvasTopPadding": "40",
        "canvasBottomPadding": "40",
    }
}
```

> You can also set the above attributes individually to add space to the particular side of the chart canvas.

Now, let’s look at the chart given below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-9.js %}

As you can see in the above chart, the bubble for **Reebok** is getting partially cropped by the canvas border. You can prevent this from happening and display the entire bubble, by applying the `canvasTopPadding` attribute to the chart.

In the above chart, when you set the value of `canvasTopPadding` attribute to `15`, it will look as shown below:

{% embed_chart chart-configurations-chart-paddings-and-margins-example-8.js %}

As you can see in the above chart, the bubble for **Reebok** is now fully visible.

Click [here](http://jsfiddle.net/fusioncharts/5amt92Le/) to edit the above chart.
