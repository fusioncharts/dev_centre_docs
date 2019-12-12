---
title: Spark Charts | FusionCharts
description: Spark charts are data-intensive, design-simple, word-sized graphics charts for embedding in a context of words, numbers and images.
heading: Spark Chart
---

> These chart types belong to **FusionWidgets XT**.

Spark charts are data-intensive, design-simple, word-sized graphics charts that you can embed in a context of words, numbers, and images.

Spark charts are succinct, memorable, and located right where they are discussed. You need to use these charts inline, which means that they are about the same height as the surrounding text. Use spark charts extensively in space-efficient executive dashboards to show a lot of KPIs within a single view.

## Salient features

The major features of spark charts include the following:

* Configure trend-lines and trend-zones for the spark line and spark column charts

* Depict win, loss, and draw in the spark Win-Loss chart.

* Use predefined palettes and custom single color palettes.

* Use predefined themes.

* Use different colors for open, close, high/low plots.

* Show/hide open, close, high/low value.

* Show/hide open, close, high/low anchors.

* Highlight period length by showing colored background blocks.

* Customize period length.

* Use a different color for scoreless games in win-loss charts.

## Types of Spark Charts

With FusionCharts Suite XT, you can build three types of spark charts -

* Line
* Column
* Win/loss

## Create a Spark Line Chart

A spark line chart looks as follows:

{% embed_chartAnatomy spark-line-chart.json %}

To create a spark line chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a spark line chart, set `sparkline`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Set the `value` attribute within the `data` object to show the numerical value of the data.

* Set the `value` attribute within the `data` object to show the numerical value for a point on the spark line chart.

Refer to the code given below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            "value": "38.42"
        },
        {
            "value": "41.43"
        }, 
        {
            "value": "34.78"
        }, 
        {
            "value": "40.67"
        }, 
        {
            "value": "44.12"
        }, 
        {
            "value": "38.45"
        }, 
        {
            "value": "40.71"
        }, 
        {
            "value": "49.90"
        }, 
        {
            "value": "40.12"
        }, 
        {
            "value": "34.91"
        }, 
        {
            "value": "42.02"
        }, 
        {
            "value": "35.21"
        }, 
        {
            "value": "43.31"
        }, 
        {
            "value": "40.21"
        }, 
        {
            "value": "40.54"
        }, 
        {
            "value": "40.90"
        }, 
        {
            "value": "54.21"
        }, 
        {
            "value": "41.90"
        }, 
        {
            "value": "33.43"
        }, 
        {
            "value": "46.73"
        }, 
        {
            "value": "50.42"
        }, 
        {
            "value": "40.74"
        }, 
        {
            "value": "42.31"
        }, 
        {
            "value": "50.39"
        }, 
        {
            "value": "51.10"
        }, 
        {
            "value": "44.84"
        }, 
        {
            "value": "51.64"
        }, 
        {
            "value": "47.62"
        }, 
        {
            "value": "39.61"
        }, 
        {
            "value": "35.13"
        }]
    }]
}
```

The chart will look like the following:

{% embed_all standard-charts-spark-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/wrm46/) to edit the above chart.

Configure the functional and cosmetic properties of a spark line chart in many ways, using FusionCharts Suite XT.

## Define period blocks for the chart

Use the following attributes, to define period blocks in the chart:

* Specify the number of data points that each period block will encapsulate, using the `periodLength` attribute.

* Specify the hex code for the color that will be used to render the period block using the `periodColor` attribute.

* Specify the transparency of the period block by setting the value of `periodAlpha` attribute between `0` (transparent) and `100` (opaque).

Refer to the code given below:

```json
{
    "chart": {
        "periodlength": "7",
        "periodcolor": "#cccccc",
        "periodalpha": "50"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/D2C4q/) to edit the above chart.

## Configure open, close, high, and low points

By default, the spark line chart highlights the open, close, high, and low points and also shows their values. However, you can configure how the highlighting is done.

Use the attributes given below, to define colors for the points:

* Set the value of the `openColor` attribute to the hex code of the color of the opening value anchor.

* Set the value of the `closeColor` attribute to the hex code of the color of the closing value anchor.

* Set the value of the `highColor` attribute to the hex code of the color of the high value anchor.

* Set the value of the `lowColor` attribute to the hex code of the color of the low value anchor.

Refer to the code given below:

```json
{
    "chart": {
        "openColor": "#0099ff",
        "closeColor": "#0099ff",
        "highColor": "#00cc33",
        "lowColor": "#cc0000"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/6ZVkb/) to edit the above chart.

## Show selective points

Use the attributes given below, to show/hide anchors:

* Set the value of `showOpenAnchor` attribute to `0`, to hide the opening anchor point.

* Set the value of `showCloseAnchor` attribute to `0`, to hide the closing anchor point.

* Set the value of `showHighAnchor`attribute to `0`, to hide the high anchor point.

* Set the value of `showLowAnchor`attribute to `0`, to hide the low anchor point.

Refer to the code given below:

```json
{
    "chart": {
        "showOpenAnchor": "0",
        "showCloseAnchor": "0",
        "showHighAnchor": "0",
        "showLowAnchor": "0"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/7rtvb/) to edit the above chart.

Notice that the chart is rendered with four checkboxes below the chart: **Show Open Anchor**, **Show Close Anchor**, **Show High Anchor**, and **Show Low Anchor**. Select the checkboxes to show the respective anchor points, or clear them to hide the respective anchor points.

## Show/hide anchor point values

Use the attributes given below, to show/hide anchor point values:

* Set the `showOpenValue` attribute to `0` to hide the opening value.

* Set the `showCloseValue`attribute to `0`, to hide the closing value.

* Set the `showHighLowValue`attribute to `0`, to hide the high and low values.

Refer to the code below:

```json
{
    "chart": {
        ...
        "showOpenValue": "0",
        "showCloseValue": "0",
        "showHighLowValue": "0"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/LWhcS/) to edit the above chart.

Notice that the chart is rendered with four checkboxes below the chart: **Show Open Value**, **Show Close Value**, **Show High Value**, and **Show Low Value**. Select the checkboxes to show the respective anchor values, or clear them to hide the values.

## Configure line and anchor cosmetics

Use the attributes given below, to configure line cosmetics:

* Set the value of the `lineColor` attribute to the hex code of the color of the lines on the chart.

* Set the value of the `lineThickness` attribute to the thickness of the lines on the chart. 

* Set the `lineAlpha` attribute to the degree of transparency of the lines on the chart.

Refer to the code below:

```json
{
    "chart": {
        ...
        "lineColor": "#ee8f49",
        "lineThickness": "2",
        "lineAlpha": "75"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/KEE66/) to edit the above chart.

## Configure anchor cosmetics

Use the attributes given below to configure anchor cosmetics:

* Set the value of the `drawAnchors` attribute to `1`, to draw anchors on the chart. Note that if this attribute is set to `0`, then the tooltip and links won't work.

* Set the value of the `anchorSides` attribute to specify the number of sides an anchor will have. Note that this will determine the shape of the anchor.

* Set the value of the `anchorRadius` attribute to specify the radius, in pixels, of the anchor.

* Set the value of the `anchorColor` attribute to specify the hex code of the color of the anchors.

* Set the value of the `anchorAlpha` attribute to specify the transparency of the anchors, between. `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
    "chart": {
        "drawAnchors": "1",
        "anchorSides": "3",
        "anchorRadius": "3",
        "anchorColor": "#ee8f49",
        "anchorAlpha": "40"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/745Az/) to edit the above chart.

## Show only points but no lines

You can show only points to represent the data values on the chart, without any line segments connecting them. To do so, set the value of `lineAlpha` attribute to specify the transparency of the lines on the chart, `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
    "chart": {
        "lineAlpha": "0"      
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/8975mgsx/) to edit the above chart.

### Add trend lines/trend zones

You can add trend lines or trend zones to a spark line chart.

Use the following attributes to render a trend-line:

* Set the `startValue` attribute to the starting value for the trend-line.

* Set the `endValue` attribute to the ending value for the trend-line.

Refer to the code given below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            "startValue": "40",
            "endValue": "42"
        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/KRZ9W/) to edit the above chart.

### Customize trend-lines

Use the attributes given below to configure trend-line cosmetics:

* Set the color for the trend-line and its associated text using the `color` attribute, which accepts hex color codes.

* Set the thickness of the trend-line, using the `thickness`attribute.

* Set the value of the `dashed`attribute to `1`, to render the trend-line as a dashed line.

* Set the value of the `dashedLen`attribute to the desired length of each dash, if the trend-line is rendered as a dashed line.

* Set the value of the `dashGap`attribute to the desired gap between each dash, if the trend-line is rendered as a dashed line.

* Set the value of the `alpha` attribute between `0` (transparent) and `100` (opaque) to the desired degree of transparency of the trend-line. 

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            "color": "#ff0000",
            "thickness": "1",
            "dashed": "1",
            "dashedLen": "3",
            "dashgap": "3",
            "alpha": "100"
        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/aFE6Q/) to edit the above chart.

### Add trend-zones

Use the attributes given below to render a trend-zone:

* Set the value of the `isTrendZone` attribute to `1`, to render a trend-zone.

* Set the value of the `startValue` attribute to the starting value for the trend-zone.

* Set the value of the `endValue` attribute to the ending value for the trend-zone.

* Set the value of the `color` attribute to the hex code of the color to be used to render the trend-zone and its associated text.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            "startValue": "30",
            "endValue": "45",
            "isTrendZone": "1",
            "color": "#999999"

        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/mLGD3/) to edit the above chart.

### Configure hover effects

You can use hover effects to improve the visual representation of your chart. Use the following attributes to do that:

* Specify the hex code of the color to be used to render the opening value anchor when you hover the mouse pointer over it, using the `openHoverColor` attribute.

* Specify the hex code of the color to be used to render the closing value anchor when you hover the mouse pointer over it, using the `closeHoverColor` attribute.

* Specify the hex code of the color to be used to render the high value anchor when you hover the mouse pointer over it, using the `highHoverColor` attribute.

* Specify the hex code of the color to be used to render the low value anchor when you hover the mouse pointer over it, using the `lowHoverColor` attribute.

Refer to the code below:

```json
{
    "chart": {
        "openHoverColor": "#9bd6fd",
        "closeHoverColor": "#9bd6fd",
        "highHoverColor": "#90ff90",
        "lowHoverColor": "#fd6c6c"
    },
}
```

The chart will look like the following:

![Spark-Charts-GIF-1](/gif/standard-charts-spark-charts-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/fwaL5/) to edit the above chart.

## Create a spark column chart

A spark column chart looks as follows:

{% embed_chartAnatomy spark-column-chart.json %}

To create a spark column chart change the value of the `type` attribute from `sparkline` to `sparkcolumn`. The rest of the data structure remains the same.

The chart will look like the following:

{% embed_all standard-charts-spark-chart-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/nbTf9/) to edit the above chart.

Customize several cosmetic and functional properties of the spark column chart, using FusionCharts Suite XT.

## Configure period blocks for the chart

Show period blocks on the chart using colored bands, to easily interpret periods on the chart. Use the following attributes to do so:

* Set the value of the `periodLength` attribute to the number of data points that a period block will encapsulate.

* Set the value of the `periodColor` attribute to the hex code of the color to be used to render the period block.

* Set the value of the `periodAlpha` attribute to the degree of transparency of the period block, between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
    "chart": {
        "periodlength": "3",
        "periodcolor": "#cccccc",
        "periodalpha": "50"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/3MMH2/) to edit the above chart.

## Configure the high and low columns

By default, the spark column chart highlights the highest and lowest data plots using a default color, and also shows their values. You can, however, configure the colors for the highest and lowest columns based on your requirement. Use the following attributes to do so:

* Specify the hex code for the fill color of the column with the highest value using the `highColor` attribute. 

* Specify the hex code for the fill color of the column with the lowest value using the `lowColor` attribute.

Refer to the code below:

```json
{
    "chart": {
        "highColor": "#6baa01",
        "lowColor": "#e44a00"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/TQ6pv/) to edit the above chart.

## Add Trend-lines

Use the following attributes to add a trend-line to a spark column chart:

* Specify the starting value for the trend-line using the `startvalue` attribute.

* Specify the ending value for the trend-line using the `endValue` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            "startvalue": "550000",
            "endValue": "700000"
        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/ZLhAG/) to edit the above chart.

## Customize trend-lines

Use the attributes given below to configure trend-line cosmetics:

* Specify the hex code of the color that will be used to render the trend-line and its associated text using the `color` attribute.

* Specify the thickness of the trend-line using the `thickness` attribute.

* Specify whether the trend-line will be rendered as a dashed line by setting the value of the `dashed` attribute to `1`.

* Specify the length of each dash, if the trend-line is rendered as a dashed line, using the `dashedLen` attribute.

* Specify the gap between each dash, if the trend-line is rendered as a dashed line, using the `dashGap` attribute.

* Set the transparency of the trend-line between `0` (transparent) and `100` (opaque) using the `alpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            color": "#ff0000",
            "thickness": "1",
            "dashed": "1",
            "dashedLen": "3",
            "dashgap": "3",
            "alpha": "100"
        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/8WKu4/) to edit the above chart.

## Add trend-zones

Use the attributes given below to render a trend-zone:

* Set the value of the `isTrendZone` attribute to `1`, to render the chart with a trend-zone. 

* Set the value of the `startvalue` attribute to the starting value for the trend-zone.

* Set the value of the `endValue` attribute to the ending value for the trend-zone.

* Set the value of the `color` attribute to the hex code of the color to be used to render the trend-zone and its associated text.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "trendlines": [{
        "line": [{
            "startValue": "450000",
            "endValue": "650000",
            "isTrendZone": "1",
            "color": "#ff0000"
        }]
    }]
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/TZ3tB/) to edit the above chart.

## Configure hover effects for the chart

Use the attributes given below to configure the hover effect:

* Specify the hex code of the fill color of the highest value column when you hover the mouse pointer over it, using the `highHoverColor` attribute.

* Specify the hex code of the fill color of the lowest value column when you hover the mouse pointer over it, using the `lowHoverColor` attribute.

Refer to the code below:

```json
{
    "chart": {
      
        "highHoverColor": "#b0fdb0",
        "lowHoverColor": "#fcb0b0"
    },
}
```

The chart will look like the following:

![Spark-Charts-GIF-2](/gif/standard-charts-spark-charts-gif-2.gif)

Click [here](http://jsfiddle.net/fusioncharts/UhMzX/) to edit the above chart.

## Create spark win/loss charts

A spark win/loss chart looks as follows:

{% embed_chartAnatomy spark-win-loss-chart.json %}

To create a spark column chart change the value of the `type` attribute from `sparkcolumns` to `sparkwinloss`. The rest of the data structure remains the same.

Show the value of a column on the spark win/loss chart using the `value` attribute, which accepts the values `W` (win), `L` (loss), and `D` (draw). Use the following code to create a spark win/loss chart to show the scorecard of Bobby Fischer (vs. Spassky) from the World Chess Championship of 1972.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            "value": "W"
        },
        {
            "value": "W"
        },
        {
            "value": "W"
        },
        {
            "value": "L"
        },
        {
            "value": "W"
        },
        {
            "value": "W"
        },
        {
            "value": "L"
        },
        {
            "value": "L"
        },
        {
            "value": "W"
        },
        {
            "value": "L"
        },
        {
            "value": "W"
        },
        {
            "value": "W"
        }]
    }]
}
```

The chart will look like the following:

{% embed_all standard-charts-spark-chart-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/nn5hx/) to edit the above chart.

Configure the functional and cosmetic properties of spark win-loss charts, using FusionCharts Suite XT.

## Configure Period Blocks

Use the following attributes to show period blocks on the chart using colored bands, and easily interpret periods:

* Specify the number of data points that each period block will encapsulate, using the `periodLength` attribute.

* Specify the hex code for the color to be used to render the period block, using the `periodColor` attribute.

* Specify the transparency for the period block by setting the value of the `periodAlpha` attribute between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
    "chart": {      
        "periodlength": "3",
        "periodcolor": "#cccccc",
        "periodalpha": "90"
    },
}
```

The chart will look like the following:

{% embed_all standard-charts-spark-chart-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/6c5hbzLn/) to edit the above chart.

> When configuring period blocks, ensure that the period length is always less than the number of data points that you have specified, as period length is directly numbered on data points.

## Configure win, loss, and draw colors

Use the following attributes to configure the win, loss, and draw colors:

* Specify the hex code of the fill color for the bars indicating win, using the `winColor` attribute.

* Specify the hex code of the fill color for the bars indicating loss, using the `lossColor` attribute.

* Specify the hex code of the fill color for the bars indicating draw, using the `drawColor` attribute.

Refer to the code below:

```json
{
    "chart": {
        "winColor": "#00cc33",
        "lossColor": "#cc0000",
        "drawColor": "#0075c2"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/RAVML/) to edit the above chart.

## Configure colors to show scoreless matches

Specify a fill color for the bars indicating a scoreless match, by setting the value of the `scoreLessColor` attribute to the hex code of the color.

Refer to the code below:

```json
{
    "chart": {
        "scoreLessColor": "#aa0000"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/q6m35/) to edit the above chart.

## Show/hide chart values

Set the value of the `showValue` attribute to `1`, to show data chart values within the chart.

Refer to the code below:

```json
{
    "chart": {       
        "showValue": "1"
    },
}
```

The chart will look like the following:

{% embed_chart standard-charts-spark-chart-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/U3Qkj/) to edit the above chart.

## Configure hover effects

Use the attributes mentioned below, to configure the hover effects for a spark win-loss chart:

* Set the value of the `winHoverColor` attribute to the hex code of the fill color of the `win` bar when you hover the mouse pointer over it.

* Set the value of the `lossHoverColor` attribute to the hex code of the fill color of the `loss` bar when you hover the mouse pointer over it.

* Set the value of the `drawHoverColor` attribute to the hex code of the fill color of the `draw` bar when you hover the mouse pointer over it.

* Set the value of the `scoreLessHoverColor` attribute to the hex code of the fill color of the `no score` bar when you hover the mouse pointer over it.

Refer to the code below:

```json
{
    "chart": {
        "winHoverColor": "#49b6fe",
        "lossHoverColor": "#55e395",
        "drawHoverColor": "#ba9803",
        "scoreLessHoverColor": "#cccccc"
    },
}
```

The chart will look like the following:

![Spark-Charts-GIF-3](/gif/standard-charts-spark-charts-gif-3.gif)

Click [here](http://jsfiddle.net/fusioncharts/8myGp/) to edit the above chart.