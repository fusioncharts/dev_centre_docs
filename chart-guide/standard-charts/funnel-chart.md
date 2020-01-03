---
title: Funnel Chart | FusionCharts
description: A funnel chart is used to plot streamlined data. For example, it can be used to plot the sales data for a sales pipeline analysis.
heading: Funnel Chart
---

> These chart types belong to **FusionWidgets XT**.

Use a funnel chart to plot streamlined data. For instance, you can plot sales data into a funnel chart to analyze the sales pipeline. Structurally, a funnel chart consists of multiple segments, and each segment represents a data point. You can render a funnel chart in either 2D or 3D.

In a funnel chart, the data is streamlined, i.e., each slice (section) in the funnel represents a process flow that has filtered out data. For example, if you use a funnel chart to display the employment process, the first slice will represent the "Number of candidates who applied". After that, each process flow (like "Interview Phase 1", "IQ Test", "Project", etc.) will be represented by subsequent funnel slices, each slice filtering the data provided to the previous slice. The last slice bears the value that is the final result of the entire procedure (for example, "Candidates recruited" in this scenario).

## Salient Features

Features of a funnel chart that you may find useful:

* Click on the interactive funnel slices, to separate them from the main funnel.

* Plot funnel slices as hollow filled.

* Set same slant angle for each funnel slice (or make them dependent on data).

* Seamlessly convert 3D funnel to 2D funnel.

* Choose to render the funnel in 2D mode for more control over the border and fill properties.

* Show values as actual values or in percentage.

* Show a value as percentage of the first value or the previous value.

* Use smart labels to avoid overlapping of funnel labels.

* Place labels at the side or the center of the funnel chart.

* Enter custom tool text for each funnel slice.

* Link each funnel slice to a different target.

{% embed_chartAnatomy funnel-chart.json %}

## Create a Funnel Chart

We will create a funnel chart that shows the purchase-conversion analysis, using the data provided in the table below. It will filter out data to finally show how many people who visited the website actually purchased something.

Process|Number of People|
-|-
Unique Website Visits|1,460,000|
Programme Details Section Visits|930,000|
Attempts to Register|540,000|
Successful Registrations|210,000|
Logged In|190,000|
Purchased on Introductory Offers|120,000|

To create a funnel chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a funnel chart, set `funnel`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Use `value` attribute within the `data` object to show the numerical value of the data represented by a funnel slice. 

* Use the `label` attribute within the `data` object to specify the label to be rendered for a funnel slice, e.g., "Unique Website Visits".

A streamline funnel chart to show the purchase-conversion analysis looks like the following:

{% embed_all standard-charts-funnel-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/8sJdx/) to edit the above chart.

With FusionCharts Suite XT, you can configure several cosmetic and functional properties for the funnel chart.

## Draw a 2D funnel chart with customized borders

By default, a funnel chart renders as a 3D chart with a context menu, which you can use to switch between the 2D and the 3D modes of display. However, you can configure a funnel chart to be rendered in the 2D mode when it first loads, without using the context menu. You can also customize the border properties of a funnel chart for improved visual representation.

To render a 2D funnel chart with customized border properties, the following attributes are used:

* Set the value of the `is2D` attribute to `1`, to specify whether the funnel chart, on loading, will be rendered in the 2D mode. 

* Set the value of the `showPlotBorder` attribute to `1`, to specify whether the plot border will be visible. 

* Set the value of the `plotBorderColor` attribute to the hex code of the color that will be used to render the plot border.

* Set the value of the `plotBorderThickness` attribute to specify the thickness of the plot border in pixels.

* Set the value of the `plotBorderAlpha` attribute between 0 (transparent) and 100 (opaque), to specify the transparency of the plot border. 

Refer to the code below: 

```json
{
    "chart": {
        "is2D": "1",
        "showPlotBorder": "1",
        "plotBorderColor": "#333333",
        "plotBorderThickness": "1",
        "plotBorderAlpha": "50"
    }
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/4JfYt/) to edit the above chart.

## Show labels at the center of the chart

Set the value of the `showLabelsAtCenter` attribute to `1`, to specify whether the data labels should be shown in the center of the data plots. 

The JSON code will look as below: 

Refer to the code below: 

```json
{
    "chart": {
        "showLabelsAtCenter": "1"

    }
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/5rV6H/) to edit the above chart.

## Show Labels in the Legend

You can show the labels in the legend box, instead of showing them with the data plots. To do this, show the legend box and hide the labels for the data plots. The following attributes are used:

* Set the value of the `showLegend` attribute to `1`, to display the legend.

* Set the value of the `showLabels` attribute to `1`, to show the labels for data plots.

Refer to the code below:

```json
{
    "chart": {
        "showLegend": "1",
        "showLabels": "0"
    }
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/mmxwek55/) to edit the above chart.

## Configure the position of the legend box

By default, the legend box is placed at the bottom of the funnel chart. You can, however, change the position of the legend box and shift it to the right.

Set the value of the `legendPosition` attribute to `RIGHT`, to place the legend box to the right.

Refer to the code below:

```json
{
    "chart": {
        "legendPosition": "RIGHT"
    },
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/6wjnfz2m/) to edit the above chart.

## Draw Filled Funnel Slices (in 3D Mode)

In a 3D funnel chart, the slices are rendered as hollow by default. You can, however, render them as filled. Set the `isHollow` attribute to `1`, to render filled funnel slices.

Refer to the code below:

```json
{
    "chart": {
       "isHollow": "1"
    },
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/rjqgfxwf/) to edit the above chart.

## Draw all slices with the same slant angle

By default, whenever you plot streamlined data, the chart uses variable funnel slice width - the slant angle - to visually depict the filtering process. However, you can also use the same slant angle for all funnel slices. Set the `useSameSlantAngle` attribute to `1`, to use the same slant angle for all slices.

Refer to the code below:

```json
{
    "chart": {
       "useSameSlantAngle": "1"
    },
}
```
The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/7vtkkb4n/) to edit the above chart.

## Show values as percentage of the previous value

When showing values in percentage for each slice, you can ask the chart to calculate the percentage value of the slice with respect to the previous slice (instead of the first slice). To do so, use the attributes given below:

* Set the `showPercentValues` attribute to `1`, to render the data values as percent values.

* Set the `percentOfPrevious` attribute to `1`, to determine the percent values on the basis of the previous slice. Note that this attribute works only when you set the `showPercentValues` attribute to `1`.

Refer to the code below:

```json
{
    "chart": {
        "showPercentValues": "1",
        "percentOfPrevious": "1"
    },
}
```
The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/zh4w2z7r/) to edit the above chart.

## Slice Out Individual Funnel Slices

At times, you may want to highlight important data so that it can be easily noticed. In a funnel chart, you can slice out the funnel slice that represents any such data. Set the `isSliced` attribute to `1` to slice out a particular data slice. Note that you can either use this attribute as part of the `chart` object (in which case it will apply to all slices), or the `data` object (in which case it will only apply to the slice(s) for which you define it).

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [
        ...        
        {
            ...
            "isSliced": "1"
        },
    ]
}
```

The chart will look like the one given below:

{% embed_chart standard-charts-funnel-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/vknfqok4/) to edit the above chart.

## Configure Hover Effects

Use the following attributes to configure the hover effect:

* Set the `showhovereffect` to `1`, to enable the hover effect.

* Set the value of `plotFillHoverColor` attribute to the hex code of the color that will fill the slice when you hover the mouse pointer over it.

* Set the `plotFillHoverAlpha` attribute to any value between 0 (transparent) and 100 (opaque) to specify the degree of transparency of the slice when you hover the mouse pointer over it.

* Set the value of `plotBorderHoverColor` attribute to the hex code of the color of the plot border, when you hover the mouse pointer over it.

* Set the `plotBorderHoverAlpha`attribute to any value between 0 (transparent) and 100 (opaque) to specify the transparency of the slice border when you hover the mouse pointer over it.

* Set the value of the `plotBorderHoverThickness` attribute to the thickness, in pixels, of the slice border when you hover the mouse pointer over it.

Refer to the code below:

```json
{
    "chart": {
        "showPercentValues": "1",
        "showPlotBorder": "1",
        "PlotBorderAlpha": "0",
        "showHoverEffect": "1",
        "plotFillHoverColor": "#cccccc",
        "plotFillHoverAlpha": "60",
        "plotBorderHoverColor": "#333333",
        "plotBorderHoverAlpha": "60",
        "plotBorderHoverThickness": "2"
    },
}
```

The chart with hover effects enabled will look like the following:

![funnel](/gif/standard-charts-funnel-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/ecrjq9jz/) to edit the above chart.