---
title: Configuring Data Plot | FusionCharts
description: Data plot is column in column chart, line in line chart. You can enhance the way your data plot looks with the help of colors, gradients and hover effects
heading: Data Plot
breadcrumb: [["Home", "/"], ["Data Plot"]]
---

Data plot refers to the column in column chart, lines in a line chart, pie/doughnut slices in a pie/doughnut chart. You can enhance the way your data plot looks using colors, gradients and hover effects. 


## Color individual data plots

You can specify a custom color for each data plot. Specify the hex code of the color using the `color` attribute within `data` under the `chart` object.

Refer to the code below:

```
{
    "chart": {
        ...
    },
    "data": [
        {
            "label": "Jan",
            "value": "420000",
            "color": "#008ee4"
        },
        {
            "label": "Feb",
            "value": "810000",
            "color": "#008ee4"
        },
        {
            "label": "Mar",
            "value": "720000",
            "color": "#008ee4"
        },
        {
            "label": "Apr",
            "value": "550000",
            "color": "#9b59b6"
        },
        {
            "label": "May",
            "value": "910000",
            "color": "#9b59b6"
        },
        {
            "label": "Jun",
            "value": "510000",
            "color": "#9b59b6"
        },
        {
            "label": "Jul",
            "value": "680000",
            "color": "#6baa01"
        },
        {
            "label": "Aug",
            "value": "620000",
            "color": "#6baa01"
        },
        {
            "label": "Sep",
            "value": "610000",
            "color": "#6baa01"
        },
        {
            "label": "Oct",
            "value": "490000",
            "color": "#e44a00"
        },
        {
            "label": "Nov",
            "value": "900000",
            "color": "#e44a00"
        },
        {
            "label": "Dec",
            "value": "730000",
            "color": "#e44a00"
        }
    ]
}

```  

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/2kayhgmk/) to edit the above chart.

## Color different data series/data plots

You can also specify a comma separated list of colors for use in different data series (or in case of single series charts, different data plots). The colors are selected from the list in a round-robin way for each data series. 

Specify your own palette for data plots by providing a list of hex colors using the `paletteColors` attribute. Refer to the code below:

```
{
    "chart":{
    ...
    "palettecolors":"FF5904,0372AB,FF0000"
    }
    ...
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/j7cbwm5o/) to edit the above chart.

## Add gradient effect to data plots

You can apply a global gradient color for an entire data plot. To do so follow the steps given below:

* `usePlotGradientColor` - Set this attribute to `1` to turn use the gradient effect.

* `plotGradientColor` - Specify the hex code of the gradient color. 

Refer to the code below:

```
{
    "chart": {
        ...
        "usePlotGradientColor": "1",
        "plotGradientColor":"#ffffff"
        ...
    }
...
}    
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/b781gp10/) to edit the above chart.

## Customize gradient properties

Apart from a basic gradient effect, you can also customize the gradient angle and fill ratio for a data plot. To customize the gradient properties the following attributes are used:

* `plotFillAngle` - Set the fill angle for gradient (for column, area and pie charts). Values can range from `0-360`.

* `plotFillRatio` - Specify the start and end of the gradient effect in a comma separated format. For example a setting of "20, 40" would cause the gradient effect to start at 20% of width and end at 40% of width. The color before gradient start would be set to the data plot color and after gradient end would get set to the gradient fill color.

* `plotFillAlpha` - Set the transparency of the gradient fill. 

Refer to the code below:

```
{
    "chart": {
        ...
        "usePlotGradientColor": "1",
        "plotGradientColor": "#003366",
        "plotFillAngle": "0",
        "plotFillAlpha": "90",
        "plotFillRatio": "0,100"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/p26mehrm/) to edit the above chart.

## Show/hide plot border

Every data plot (column, area, or pie) has a border by default. Set the `showPlotBorder` to `0` to hide the plot border. 

Refer to the code below:

```
{
    "chart": {
        ...
        "showPlotBorder": "0"
    },
...
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/bofsxted/) to edit the above chart.

## Dashed data plot border

You can set a dashed border for the data plot and can also customize dash-length and the gap between dashes. To do so, the following attributes are used:

* `plotBorderDashed` - Set this to `1` to make the border dashed. 

* `plotBorderDashLen` - Set the length of each dash in plot-border (in pixels).

* `plotBorderDashGap` -  Set the gap between two consecutive dashes in plot border (in pixels). 

* `plotBorderThickness` - Set the thickness of the plot border.

* `plotBorderColor` - Set the hex color code of the plot border.

Refer to the code below:

 ```
{
    "chart": {
        ...
        "showPlotBorder": "1",
        "plotBorderDashed": "1",
        "plotBorderDashLen": "4",
        "plotBorderDashGap": "4",
        "plotBorderThickness": "1",
        "plotBorderColor": "#000000"
    },
...
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

 ```
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
...
}

```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/0uq53Leq/) to edit the above chart.

## Round edges

You can configure data plots with rounded edges in 2D Column or Bar charts. Set the `useRoundEdges` attribute to `1`. 

Refer to the code below:

 ```
{
    "chart": {
        "useRoundEdges":"1"
    }
...
}

```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-plot-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/95kbo47f/) to edit the above chart.

## Plot hover effects

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

 ```
{
    "chart": {
        ...
        "plotHoverEffect":"1",
        "plotFillHoverColor":"#00ffaa",
        "plotBorderHoverThickness": "1",
        "plotBorderHoverDashed": "1",
        "plotBorderHoverDashLen": "6",
        "plotBorderHoverDashGap": "2"
    }
...
}

```

Shown below is a chart with hover effects enabled:

![Data plot hover effect]({% site.baseurl %}/gif/configurations-dataplot-gif-1.gif)

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

> All the above attributes will work only if `plotHoverEffect` is set to `1` under the chart object.

Refer to the code below:

```
{
    "chart": {
        ...
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

![Data plot hover effect]({% site.baseurl %}/gif/configurations-dataplot-gif-2.gif)

Click [here](http://jsfiddle.net/fusioncharts/5rgy5Let/) to edit the above chart.