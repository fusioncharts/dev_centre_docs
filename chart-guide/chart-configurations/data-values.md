---
title: Plot Data values in your Charts & Graphs | Cutomize labels, colors and orientations
description: The values of data points in a chart are essential to gather insights. Learn how to customize the values by changing the labels, colors, orientation, font, and much more.
heading: Data Values
---

Data values are plot values, i.e. values of each data plot (line, column, bar, pie) displayed on the chart. 

![Data Values](/images/chart-configurations-data-values-image-1.png)

## Configure Text Labels instead of Numeric Data Values

Instead of displaying numeric data values, you can use text labels to denote data values for each data item. Specify the text you want to display using the `displayValue` attribute under `data` within the particular data plot. Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000"
        },
        {
            "label": "Q2",
            "value": "1450000"
        },
        {
            "label": "Q3",
            "value": "1730000"
        }, 
        {
            "label": "Q4",
            "value": "2120000",
            //Custom display string
            "displayValue": "Year's best"
        }
    ]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/kzqrpah6/) to edit the above chart.

## Rotate Data Values

By default, the data values appear vertically as shown in the chart below:

{% embed_chart chart-configurations-data-values-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/7stgpskq/) to edit the above chart.

You can opt to rotate the data values horizontally. Set the `rotateValues` to `0` under the `chart` object. The default value of this attribute is `1`.

Refer to the code below:

```json
{
    "chart": {
        "rotateValues": "0"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/c8co0Lgv/) to edit the above chart.

## Control the visibility of data values

By default, all the data values are hidden for a chart. Setting the `showValues` attribute to `1` under the `chart` object displays all the data values in the chart. Given below is an image of a stacked chart, let's see how a stacked chart renders its data values for each data plot:

![Visibility Control](/images/minimum-plot-height-for-stacked-chart.png)

In the above image, as you can see the `showValues` attribute has been set to `1` and all the values are getting rendered on their respective data plots. The data values of the data plots with high numeric values are getting rendered properly, but the lower values' data plots are not looking nice to our eyes.

Starting v3.14.0, FusionCharts allows you to control the visibility of data values of the plots by specifying the minimum height of the columns. Data plots less than the minimum height specified will not show the data value text. This will help reduce clutter and improve the readability of the chart.

Refer to the code given below:

```json
{
    "chart": {
        "minPlotHeightForValue": "15"
    }
}
```

In the above code, the value of `minPlotHeightForValue` attribute is set to **20px**. In this case, the data values of the data plots with a height of more than 20 pixels will be visible. FusionCharts will disable the data values of the plots with a height of less than 20 pixels.

Now, after applying the `minPlotHeightForValue` attribute, the above chart looks like as shown below:

{% embed_chart minimum-plot-height-for-stacked-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/t8uecnyv/) to edit the above chart.

In the above chart, we can see that the data values of the data plots with height less than 20 pixels have been disabled.

### Bubble chart

A similar scenario can occur for a Bubble chart as well. We cannot calculate the height of a bubble chart so a new attribute `minRadiusForValue` has been introduced where u can specify the minimum radius of the bubble to display the data values of the plots.

Refer to the code below:

```json
{
    "chart": {
        "minRadiusForValue": "15"
    }
}
```

In the above code, the value of the `minRadiusForValue` attribute has been set to **10 pixels**. In this case, the data values of the data plots with a radius of more than 10 pixels will be visible. FusionCharts will disable the data values of the plots with a radius of less than 10 pixels.

A bubble chart looks like as shown below:

{% embed_chart minimum-plot-radius-for-bubble-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/thL71s9v/) to edit the above chart.

## Display Data Values outside Columns

By default, the data values are displayed within the column data plots. Set the `placeValuesInside` attribute to `1` and display the data values inside the column data plots. Refer to the code below:

```json
{
    "chart": {
        "placeValuesInside": "1"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/hpf7h7wr/) to edit the above chart.

## Show/Hide Data Values

By default, all the data values are hidden. Set the `showValues` attribute to `1` under the `chart` object to display all the data values. Refer to the code below:

> Hide the data values by setting the following attribute to `0`.

```json
{
    "chart": {
        "showValues": "1"
    }
}
```

The chart will look like as shown in  the image below:

{% embed_chart chart-configurations-data-values-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/uezpdfff/) to edit the above chart.

You can also opt to show/hide specific data values instead of hiding all of them. Set the `showValue` attribute to `1` under the `data` for that specific data value which you want to display. This setting overrides the `showValues` setting at the `chart` object level.

Refer to the code below:

```json
{
    "chart": {
        "showValues": "0"
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000",
            "showValue": "1"
        }
    ]
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-data-values-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/gs43rmof/) to edit the above chart.

### Skip Y-axis Values

If there is a large number of values to be displayed along the y-axis, you can opt to display every nth y-axis value skipping the rest.

To do so, specify the n-th level using the `yAxisValuesStep` attribute. For example, if you set the value as `2`, the y-axis will display every 2nd value starting from the minimum value. 

This attribute can also assume default values based on the space available in the chart to render y-axis values and can override the values provided to avoid overlapping of y-axis values.

Refer to the code below:

```json
{
    "chart": {
        "yAxisValuesStep": "2"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ekseaedo/) to edit the above chart.

## Customize Data Value Properties

You can customize the data value properties like font, border, background, and alpha. 

### Font Properties

To customize the font properties following attributes are used:

* Set the font family for the data values using the `valueFont` attribute. E.g. - `Arial`

* Specify the hex code for the color of the data values using the `valueFontColor` attribute. E.g. - `#00ffaa`.

* Set the size of the font using the `valueFontSize` attribute. 

* Set the `valueFontBold` attribute to `1` to and display the data values as `bold`.

*  Set the `valueFontItalic` attribute to `1` to and display the data values as `italics`

* Set the transparency of the data values using the `valueFontAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "placeValuesInside": "0",
        "rotateValues": "0",
        "valueFont": "Arial",
        "valueFontColor": "#5d62b5",
        "valueFontSize": "12",
        "valueFontBold": "1",
        "valueFontItalic": "0",
        "valueFontAlpha": "90"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/e8a91fty/) to edit the above chart.

### Customize Data Value Border

To customize the border of the data values, the following attributes are used:

* Specify the hex code of the border color using the `valueBorderColor` attribute.

* Set the transparency of the border using the `valueBorderAlpha` attribute.

* Set the thickness of the border using the `valueBorderThickness` attribute.

* Set the radius if the border using the `valueBorderRadius` attribute.

* Set the `valueBorderDashed` attribute to `1` to display the border as dashed lines.

* Specify the gap between two dashed lines using the `valueBorderDashGap` attribute.

* Set the length of each dash using the `valueBorderDashLen` attribute.

* Set the transparency of the border on hover using the `valueBorderHoverAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "valueBorderColor": "#666666",
        "valueBorderAlpha": "100",
        "valueBorderPadding": "5",
        "valueBorderRadius": "6",
        "valueBorderThickness": "0.5",
        "valueBorderDashed": "1",
        "valueBorderDashLen": "4",
        "valueBorderDashGap": "2"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/k8u7ront/) to edit the above chart.

### Customize Data Value Background

To customize the background of the data values, the following attributes are used:

* Specify the hex code for the background color using the `valueBgColor` attribute.

* Set the transparency of the background using the `valueBgAlpha` attribute.

* Set the transparency of the background on hover using the `valueBgHoverAlpha` attribute. 

Refer to the code below:

```json
{
    "chart": {
        "valueBgColor": "#666666",
        "valueBgAlpha": "100",
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/71x4njh2/) to edit the above chart.