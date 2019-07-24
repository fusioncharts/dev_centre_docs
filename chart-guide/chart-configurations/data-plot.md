---
title: Configuring Data Plot | FusionCharts
description: Data plot is column in column chart, line in line chart. You can enhance the way your data plot looks with the help of colors, gradients and hover effects
heading: Data Plot
---

Data plot refers to the columns of the column chart, lines in a line chart, pie/doughnut slices in a pie/doughnut chart. You can enhance the way your data plot looks using colors, gradients and hover effects. 

## Color individual data plots

You can specify a custom color for each data plot. Specify the hex code of the color using the `color` attribute within `data`under the `chart` object.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [
        {
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000",
            "color": "#9b59b6" //Custom Color
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000",
            "color": "#e44a00"  //Custom Color
        }, {
            "label": "Dec",
            "value": "730000"
        }
    ]
}
```  

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/2kayhgmk/) to edit the above chart.

## Color different Data Plots

You can also specify a comma separated list of colors for use in different data series (or in case of single series charts, different data plots). The colors are selected from the list in a round-robin way for each data series. 

Specify your custom palette for data plots by providing a list of hex colors using the `paletteColors` attribute. Refer to the code below:

```json
{
    "chart":{
        "palettecolors":"5d62b5,29c3be,f2726f"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/j7cbwm5o/) to edit the above chart.

## Add Gradient Effect to Data Plots

You can apply a global gradient color for an entire data plot. To do so follow the steps given below:

* `usePlotGradientColor` - Set this attribute to `1` to turn use the gradient effect.

* `plotGradientColor` - Specify the hex code of the gradient color. 

Refer to the code below:

```json
{
    "chart": {
        "usePlotGradientColor": "1",
        "plotGradientColor":"#ffffff"
    }
}    
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/b781gp10/) to edit the above chart.

## Customize Gradient Properties

Apart from a basic gradient effect, you can also customize the gradient angle and fill ratio for a data plot. To customize the gradient properties, the following attributes are used:

* `plotFillAngle` - Set the fill angle for the gradient (for column, area and pie charts). Values can range from `0-360`.

* `plotFillRatio` - Specify the start and end of the gradient effect in a comma separated format. For example, a setting of "20, 40" would cause the gradient effect to start at 20% of width and end at 40% of the width. The color before gradient start would be set to the data plot color, and after the gradient end would get set to the gradient fill color.

* `plotFillAlpha` - Set the transparency of the gradient fill. 

Refer to the code below:

```json
{
    "chart": {
        "usePlotGradientColor": "1",
        "plotGradientColor": "#003366",
        "plotFillAngle": "0",
        "plotFillAlpha": "60",
        "plotFillRatio": "90,100"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/p26mehrm/) to edit the above chart.

## Show/Hide Plot Border

Every data plot (column, area, or pie) has a border by default. Set the `showPlotBorder` to `0` to hide the plot border. 

Refer to the code below:

```json
{
    "chart": {
        "showPlotBorder": "0"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/bofsxted/) to edit the above chart.

## Top plot border of an area chart

In area charts, you can draw the borders of the data plots either only at the top of an area plot or on all the four sides of the area plot.

Take a look at the image with borders on all four sides of the are plot.

![Four Side Plot Border](/images/area-chart-drawfullareaborder.png)

Now, let's take a look an the image with the border only at the top of an area plot.

![Top Plot Border](/images/area-chart-drawfullareaborder-top.png)

To set the top border of the area plot follow the steps below:

* To set the top border of the area chart, set the value of `drawFullAreaBorder` attribute to `0`. This will work only if the `showPlotBorder` is set to `1`.

* Set the value of `drawFullAreaBorder` to `1` to draw the border around all four sides of an area chart.

* The default color of the border drawn with `drawFullAreaBorder` attribute would be black. It can be controlled by specifying the color in `plotbordercolor` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "showPlotBorder": "1",
        "drawFullAreaBorder": "0"
    }
}
```

Click [here](http://jsfiddle.net/fusioncharts/h6rvyjax/) to edit an area chart.

You can also configure the top border of a particular data plot in an area chart with multiple data plots.

Take a look at the image given below:

![Multi-Series Area Chart](/images/draw-full-area-border-multi-series-area-chart.png)

To set the top border of a particular data plot in an area chart with multiple data plots, set the value of `drawFullAreaBorder` attribute to `0` under `dataset` object.

Refer to the code given below:

```json
{
    "chart": {
        ...
    },
    "categories": [
        {
            "category": [
                ...
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Bakersfield Central",
            "showPlotBorder": "1",
            "drawFullAreaBorder": "0",
            "plotBorderThickness": "3",
            "data": [
                ...
            ]
        }
    ]
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-area-plot-border-top-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/5o9wfzd3/) to edit an area chart with multiple data plots.

## Inherit plot border color of an area chart

FusionCharts Suite allows you to set the border color of the area chart by inheriting the plot color.

A chart without inheriting the plot color looks like:

![Inherit Plot Border Color](/images/area-chart-inheritplotborder.png)

To enable the plot border to inherit the color of an area plot, set the `inheritPlotBorderColor` attribute to `1`. By default, the value of the attribute is set to `0`.

Refer to the code given below:

```json
{
    "chart": {
        "showPlotBorder": "1",
        "inheritPlotBorderColor": "1"
    }
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-area-plot-inherit-border-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/45a6e8q2/) to edit an area chart.

> Other `plotBorder` cosmetic attributes  will work even if this attribute is set to `1`.

You can configure the `inheritPlotBorderColor` attribute for a particular data plot of an area chart with multiple data plots.

To inherit the color of the plot border from a particular data plot of an area chart with multiple data plots, set the value of `inheritPlotBorderColor` attribute to `1` under `dataset` object.

Refer to the code given below:

```json
{

    "chart": {

        ...

    },

    "categories": [

        {

            "category": [

                ...

            ]

        }

    ],

    "dataset": [

        {

            "seriesname": "Series Name",

            "inheritPlotBorderColor": "1"

            "data": [

                ...

            ]

        },

        

    ]

}

```

The chart looks like as shown below:

LIVE CHART

Click here to edit an area chart with multiple data plots.

## Dashed data Plot Border

You can set a dashed border for the data plot and can also customize dash-length and the gap between dashes. To do so, the following attributes are used:

* `plotBorderDashed` - Set this to `1` to make the border dashed. 

* `plotBorderDashLen` - Set the length of each dash in plot-border (in pixels).

* `plotBorderDashGap` -  Set the gap between two consecutive dashes in plot border (in pixels). 

* `plotBorderThickness` - Set the thickness of the plot border.

* `plotBorderColor` - Set the hex color code of the plot border.

Refer to the code below:

 ```json
{
    "chart": {
        "showPlotBorder": "1",
        "plotBorderDashed": "1",
        "plotBorderDashLen": "4",
        "plotBorderDashGap": "4",
        "plotBorderThickness": "1",
        "plotBorderColor": "#000000"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/3dmmvjzL/) to edit the above chart.

The above attributes are used in the `chart` object which affects globally. You can also use dashed plot borders for specific data plots instead of the whole chart data plots. To do so, use the following attributes within `data` under the `chart` object:

* `dashed` - Set this to `1` to make the border dashed. 

* `dashLen` - Set the length of each dash in plot-border (in pixels).

* `dashGap` -  Set the gap between two consecutive dashes in plot border (in pixels).

> The settings of these attributes will override the settings of the attributes under the `chart` object. 

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Q1",
        "value": "1950000",
        "Dashed": "1",
        "DashLen": "4",
        "DashGap": "4",
    }]
}
```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/0uq53Leq/) to edit the above chart.

## Round Edges

You can configure data plots with rounded edges in 2D Column or Bar charts. Set the `useRoundEdges` attribute to `1`. 

Refer to the code below:

```json
{
    "chart": {
        "useRoundEdges":"1"
    }
}
```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/95kbo47f/) to edit the above chart.

## Plot Hover Effects

You can display hover effects for data plots to add an interactive element to the charts. To apply the hover effects at the `chart` level, the following attributes are used:

* `plotHoverEffect` - Set this attribute to `1` to enable hover effects for the data plots.

* `plotFillHoverColor` - Set the hover color for data plots in hex code format, e.g. `#00ffaa`.

* `plotFillHoverAlpha` - Set the transparency for hover color for data plots. 

* `plotBorderHoverColor` - Set the hover border color in hex code format, e.g. `#00ffaa`.

* `plotBorderHoverAlpha` - Set the transparency of hover border for data plots.

* `plotBorderHoverThickness` - Set the hover border thickness (in pixels).

* `plotBorderHoverDashed` - Set this to `1` to make data plot borders appear dashed on hover. 

* `plotBorderHoverDashLen` - Set the length of each dash for all data plots on hover(in pixels).

* `plotBorderHoverDashGap` - Set the gap between two consecutive dashes for all data plots on hover(in pixels).

Refer to the code below:

 ```json
{
    "chart": {
        "plotHoverEffect":"1",
        "plotFillHoverColor":"#00ffaa",
        "plotBorderHoverThickness": "1",
        "plotBorderHoverDashed": "1",
        "plotBorderHoverDashLen": "6",
        "plotBorderHoverDashGap": "2"
    }
}
```

Shown below is a chart with hover effects enabled:

![Data plot hover effect](/gif/configurations-dataplot-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/znr9r87z/) to edit the above chart.

You can also apply hover effects for individual data plots instead of applying them for all the data plots. To do so, you have to set the attributes within `data` for individual values. The attributes are: 

* `hoverColor` - Set the hover color for data plots in hex code format, e.g. `#00ffaa`.

* `hoverAlpha` - Set the transparency for hover color for data plots. 

* `borderHoverColor` - Set the hover border color in hex code format, e.g. `#00ffaa`.

* `borderHoverAlpha` - Set the transparency of hover border for data plots.

* `borderHoverThickness` - Set the hover border thickness (in pixels).

* `borderHoverDashed` - Set this to `1` to make data plot borders appear dashed on hover. 

* `borderHoverDashLen` - Set the length of each dash for all data plots on hover (in pixels).

* `borderHoverDashGap` - Set the gap between two consecutive dashes for all data plots on hover(in pixels).

* `hoverGradientColor` - Set the gradient color of the data plot on hover (in pixels). For example, if you've specified individual colors and now you want hover color that ends in white, You need to specify it.

* `hoverRatio` - Set the ratio of the gradient color for data plots on hover.

* `hoverAngle` - Set the angle of the gradient color for data plots on hover.

> All the above attributes will work only if `plotHoverEffect` is set to `1` under the chart object.

Refer to the code below:

```json
{
    "chart": {
        "plotHoverEffect":"1"
    },
    "data": [{
        "label": "Q1",
        "value": "1950000",
        "HoverColor": "1",
        "HoverAlpha": "1"
    },
    {
        "label": "Q2",
        "value": "1450000"
    }]
}
```

Shown below is a chart with hover effects enabled for an individual data plot:

![Data plot hover effect](/gif/configurations-dataplot-gif-2.gif)

Click [here](http://jsfiddle.net/fusioncharts/5rgy5Let/) to edit the above chart.