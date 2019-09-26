---
title: Bubble and Scatter Charts | FusionCharts
description: Bubble and Scatter are used for plotting data that is defined in terms of two numeric parameters.
heading: Bubble and Scatter Charts
---

> These chart types belong to **FusionCharts XT**.

Bubble and Scatter charts are used for plotting data that can be defined in terms of multiple numeric parameters. In these charts, the x and y axes are numeric. So, the position of a data point is an indicator of two distinct numeric values.

## Scatter Chart

Scatter charts are used for plotting data that is defined in terms of two numeric parameters. Scatter charts are multi-series charts, but their data format is slightly different from that of conventional multi-series charts.

Let's create a scatter chart plotted for two numeric values - the average day temperature (plotted on the x-axis and the sales (in USD) of beer and ice-cream (plotted on the y-axis); the chart shows how the temperature affects the sales revenue of beer and ice-cream.

To create a scatter chart follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a scatter chart, set `scatter`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=scatter) page of scatter chart.

A scatter chart looks like:

{% embed_all standard-charts-bubble-and-xy-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/6deM9/) to edit the scatter chart.

## Bubble Charts

Bubble charts are used for plotting data that is defined in terms of three numeric parameters. The third numeric parameter is indicated by the diameter of the bubble. The JSON/XML format of a bubble chart is slightly different from that of a scatter chart, and this is because the bubble chart plots an additional numeric parameter.

So let's create a bubble chart showing sales analysis of shoes of different brands for Harry's SuperMart for last month. Specify the chart type using the `type` attribute. To render a bubble chart, set `bubble`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=bubble) page of bubble chart.

A bubble chart for the above code looks like:

{% embed_all standard-charts-bubble-and-xy-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/58sYu/) to edit the bubble chart.

> In case of the bubble and scatter charts, categories are optional because the x-axis is numeric. Categories can, however, be used to define customized x-axis labels for any location on the x-scale.

> A category can define numeric or non-numeric labels for the x-axis. Unlike other multi-series charts where each dataset contains the same number of objects present in the data array as the number of categories, scatter and bubble charts can have a varying number of objects present in the data array elements under each dataset array.

> In case categories are not defined, the x-axis displays an automatically-calculated numeric scale with vertical divisional lines and values of the divisional lines as x-axis labels.

> However, you can also explicitly define categories of your choice and show only those categories as x-axis labels. Moreover, you can also combine the categories and automatically-generated x-axis labels using a mixed mode. All of this will be explained in this section.

Now, let's customize the appearance and properties of the charts.

## Display Value Labels on Bubbles

By default, data labels are not rendered on the bubbles in a bubble chart. To show individual labels for the bubbles in the chart, set the `showValues` attribute to `1`.

Refer to the code given below:

```json
{
  "chart": {
    "showValues": "1"
  }
}
```

A bubble chart with data labels rendered on bubbles looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/apo6yp8r/) to edit the above chart.

## Segment the x-axis into Categorical Zones

The x-axis of the bubble/scatter chart can be segmented into categorical zones using vertical trend lines. To set the categorical zones follow the steps given below:

- Set the `isTrendZone` attribute to display the trendzone instead of the line.

- Set the `startValue` attribute to specify the starting value of the trendzone.

- Set the `endValue` attribute to specify the ending value of the trendzone.

- Set the `color` attribute in `line` object to specify the color of the trendzone.

- Set the `alpha` attribute in `line` object to specify the transparency of the trendzone.

Refer to the code below:

```
{
    "chart": {
        ...
    },
    "data": {
        ...
    },
    "vtrendlines": [{
        "line": [{
                "startValue": "0",
                "endValue": "20",
                "isTrendZone": "1",
                "color": "#adebff",
                "alpha": "25"
            },
            {
                "startValue": "20",
                "endValue": "40",
                "isTrendZone": "1",
                "color": "#adebff",
                "alpha": "15"
            },
            {
                "startValue": "40",
                "endValue": "60",
                "isTrendZone": "1"
            },
            {
                "startValue": "60",
                "endValue": "80",
                "isTrendZone": "1",
                "color": "#f2a485",
                "alpha": "25"
            },
            {
                "startValue": "80",
                "endValue": "100",
                "isTrendZone": "1",
                "color": "#f2a485",
                "alpha": "15"
            }
        ]
    }]
}
```

A bubble chart with the x-axis segmented looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/jcjjmhon/) to edit the above chart.

## Configure X-axis Labels

You can configure the display mode of the x-axis labels for bubble and scatter charts. You can either choose to make the chart automatically generate the x-axis labels along with vertical divisional lines or you can explicitly define each x-axis label. Additionally, you can also opt to mix these two modes.

To configure the x-axis labels set the `xAxisLabelMode` attribute to specify the mode to render the x-axis labels. This attribute takes three values:

- Auto (default)

- Categories

- Mixed

### Auto Mode

In the auto mode, the chart automatically calculates and displays the x-axis labels. In this mode, the chart ignores the `categories` object array and allows the x-axis to inherit the properties similar to that of the vertical y-Axis.

A bubble chart with the x-axis labels rendered in the auto mode looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/vu6spe8b/) to edit the above chart.

In the above chart, you can see that the x-axis labels are automatically calculated and displayed. These x-axis labels are based on x-axis values which in turn are generated using the `x` values of the chart data. Additionally, along with each label, a vertical divisional line is also rendered.

### Categories Mode

In this mode, the x-axis display labels explicitly defined by the objects in the `category` array within the `categories` object array.

A bubble chart with the x-axis labels rendered in the categories mode looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/grkoppxq/) to edit the above chart.

In the above chart, you can see that the labels explicitly defined in the `category` object array within the `categories` object array are displayed. The automatically calculated labels are not displayed.

To render the x-axis labels in the categories, set the value of the `xAxisLabelMode` attribute to CATEGORIES.

### Mixed Mode

This mode is a combination of the auto mode and the category mode. It allows the x-axis to display the automatically calculated x-axis labels as well as the explicitly defined x-axis labels simultaneously.

A bubble chart with the x-axis labels rendered in the mixed mode looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/rkqm4hLn/) to edit the above chart.

In the above chart, you can see that the x-axis displays the automatically calculated labels as well as the explicitly defined labels.

To render the x-axis labels in the categories, set the value of the `xAxisLabelMode` attribute to `MIXED`.

> By default, when `xAxisLabelMode` attribute is not defined, and when categories are not explicitly defined in the data, the chart displays x-axis labels in the `auto` mode.

> In case, categories are defined (and the `xAxisLabelMode` attribute is not defined), the chart switches to the `categories` mode. You can also force any of the above three modes by explicitly defining the mode using the `xAxisLabelMode` attribute.

## Configure the x-axis Vertical Divisional Lines

X-axis vertical divisional lines are vertical lines running through the canvas in the chart. These lines are important in case of bubble charts as they divide the canvas into different sections. You can configure these lines as per your requirement.

Configure the vertical divisional lines, by following the points below:

- Set the `adjustDiv` attribute to explicitly set the lower and upper limit values and the number of divisional lines for this x-axis. By default, this is done automatically. Set this attribute to `0` to disable the automatic adjustment. To enable it, set this attribute to `1`.

- To show the divisional lines' values along the x-axis, set the value of `showXAxisValues` to `1`.

- Set the `numVDivLines` attributes to specify the number of vertical axis divisional lines to be rendered on the chart.

- By default, all divisional lines show their values. However, opt to skip every x(th) divisional line values using `xAxisValuesStep` attribute.

```json
{
  "chart": {
    "adjustVDiv": "1",
    "showXAxisValues": "1",
    "numVDivlines": "5",
    "xAxisValuesStep": "1"
  }
}
```

- Set the `vDivlineColor` attribute to specify the hex color code for the vertical divisional lines.

- Set the `vDivlineThickness` attribute to specify the thickness of the vertical divisional lines. This attribute takes values between `1` (thinnest) and `5` (thickest).

- Set the `vDivlineAlpha` attribute to specify the transparency for the vertical divisional lines. This attribute takes values between `0` (transparent) and `100` (opaque).

- To render the vertical divisional lines as dashed lines, set the value of `vDivlineIsDashed` attribute to `1`. The default value of this attribute is `0`, which renders the normal divisional line.

- Set the `vDivlineDashLen` attribute to specify the length of each dash.

- Set the `vDivlineDashGap` attribute to specify the gap between each dash.

```json
{
  "chart": {
    "vDivlineColor": "ff0000",
    "vDivlineThickness": "2",
    "vDivlineAlpha": "70",
    "vDivlineIsDashed": "1",
    "vDivlineDashLen": "4",
    "vDivlineDashGap": "3"
  }
}
```

- Set the `showAlternateVGridColor` attribute to specify the alternate color for the vertical grid bands. The hex color code for the vertical grids is specified in `alternateVGridColor` attribute.

- Set the `alternateVGridAlpha` attribute to specify the transparency for the alternate vertical grid bands. This attribute takes values between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
  "chart": {
    "showAlternateVGridColor": "1",
    "alternateVGridColor": "0ffff0",
    "alternateVGridAlpha": "40"
  }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-bubble-and-xy-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/26Lsqna9/) to edit the above chart.

## Connect Scatter Plots by a Line

In scatter charts, you can connect the scatter plots by a line. Set the `drawLine` attribute to `1`, which will connect the data points using a line. The default value for this attribute is `0`. This attribute belongs to the `dataset` object.

Refer to the code given below:

```json
{
  "chart": {
    "drawLine": "1"
  }
}
```

A scatter chart with all the data points connected by a line looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/t7Ladarf/) to edit the above chart.

## Draw Regression Lines

In scatter and bubble charts, each data point has two distinct numeric values: the **x** value for the x-axis and the **y** value for the y-axis.

A regression line, rendered as a straight line, is used to show the trend of **y** values for the **x** values or the trend of **x** values for the **y** values. A regression line, therefore, can be used to derive a particular trend from the scattered data points in the chart canvas and predict values accordingly. For example, regression lines can be used to find trends and predict future sales, stock prices, currency exchange rates, productivity gains resulting from a training program, and so on.

For scatter and bubble charts, regression lines can be drawn based on the values provided in the charts.

There are several methods to calculate and draw regression lines; scatter charts, using linear regression, use the **least-squares** deviation method (also known as the least absolute deviation method). This method calculates the best-fitting straight-line for the observed data by minimizing the sum of the squares of the vertical deviation of each data point from the line (if a point lies on the fitted line exactly, then its vertical deviation is 0). As the deviation values are first squared and then summed, there are no cancellations between positive and negative values.

To show the regression lines in the chart, set the `showRegressionLine` attribute to `1`. The default value of this attribute is `0`, which hides the line. This attribute belongs to the `dataset` object.

Refer to the code given below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "showRegressionLine": "1"
    }]
}
```

A scatter chart with regression lines looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/8wwg1pat/) to edit the above chart.

### Modes of Regression

Regression lines can be drawn in one of the following modes:

- **Y** on **X**: (Default mode) When **y** values are predicted, or a trend of **y** values is calculated, based on the **x**values

- **X** on **Y**: When **x** values are predicted, or a trend of **x** values is calculated, based on the **y** values

The scatter chart with regression lines shown above uses the **Y on X** mode.

Here, let's try out the same chart with the regression lines drawn using the **X on Y** mode. A brief description of the attributes used to set the mode and customize regression lines are:

- Setting the `showYonX` attribute to `0` will draw the regression lines in **X on Y** mode. The default value for this attribute is `1`, which draws the regression lines in **Y on X** mode. This attribute belongs to the `dataset` object.

- To set the color in which regression line will be drawn, specify the hex color code to `regressionLineColor` attribute.

- Set the thickness of the regression line using `regressionLineThickness` attribute.

- Set the transparency of the regression line using `regressionLineAlpha` attribute.

Refer to the code below:

```json
{
  "chart": {
    "showYonX": "1",
    "regressionLineColor": "ff0000",
    "regressionLineThickness": "5",
    "regressionLineAlpha": "70"
  }
}
```

The same chart with regression lines drawn using the **X on Y** mode looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/yo0dc81r/) to edit the above chart.

> The formulae used to draw the regression lines for both the modes are given below:

> **Y on X**: The regression equation of **Y on X** is the equation of the best fitting straight line in the form **y=a+bx**, where **x** is the explanatory variable and **y** is the dependent variable and **b=(n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σx² – (Σx)²)**.

> **X on Y**: The regression equation of **X on Y** is the equation of the best fitting straight line in the form **x=a+by**, where **y** is the explanatory variable and **x** is the dependent variable and **b=(n . Σ (x.y) - (Σ x).(Σ y) )/ (n Σy² – (Σy)²)**.

## Draw Quadrants

Dividing the canvas of a bubble/scatter chart into quadrants makes the analysis of the chart easier. Set the value of `drawQuadrant` attribute to `1` to draw quadrants for the chart. The default value of this attribute is `0`.

Refer to the code given below:

```json
{
  "chart": {
    "drawQuadrant": "1"
  }
}
```

A bubble chart rendered with quadrants looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/9Lk3u31L/) to edit the above chart.

A bubble chart rendered with quadrants can also be drawn at user-defined positions. To specify the position of the vertical and horizontal quadrant lines, set the value to `quadrantXVal` and `quadrantYVal` attribute respectively. The value of these attribute should be within the range of its corresponding relative axis (and not pixels).

Refer to the code given below:

```json
{
  "chart": {
    //Drawing quadrants on chart
    "drawQuadrant": "1",

    //Setting x quadrant value to 54
    "quadrantXVal": "54",

    //Setting y quadrant value to 12000
    "quadrantYVal": "12000"
  }
}
```

A bubble chart rendered with quadrants drawn at user-defined positions looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/28m91mnh/) to edit the above chart.

## Display Quadrant Labels

In XY charts you can also set the label for all individual quadrants. To add labels the charts, follow the points given below:

- Set the `quadrantLabelTL` attribute to specify the label of the top-left quadrant.

- Set the `quadrantLabelTR` attribute to specify the label of the top-right quadrant.

- Set the `quadrantLabelBL` attribute to specify the label of the bottom-left quadrant.

- Set the `quadrantLabelBR` attribute to specify the label of the bottom-right quadrant.

Refer to the code given below:

```json
{
  "chart": {
    "quadrantLabelTL": "Low Price / High Sale",
    "quadrantLabelTR": "High Price / High Sale",
    "quadrantLabelBL": "Low Price / Low Sale",
    "quadrantLabelBR": "High Price / Low Sale"
  }
}
```

A bubble chart with quadrant labels displayed looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/ot94tuqg/) to edit the above chart.

## Customize Quadrant Labels

The quadrant labels shown in the above chart can be customized according to the use case. Each cosmetic property can be customized by setting the attribute for it. You can customize the font, font color, the transparency and the size of the font. The cosmetics of the label border and the background can also be customized if required.

We'll create a sample using some of the cosmetic properties for the quadrant labels. Refer to the code given below:

```json
{
  "chart": {
    "quadrantLabelFontItalic": "1",
    "quadrantLabelFontBold": "1",
    "quadrantLabelTLFontColor": "#123456",
    "quadrantLabelTRFontColor": "#ABCDEF",
    "quadrantLabelBLFontColor": "#123ABC",
    "quadrantLabelBRFontColor": "#DEF456"
  }
}
```

A bubble chart showcasing the above cosmetic attributes for quadrant labels is shown below:

{% embed_chart standard-charts-bubble-and-xy-charts-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/6o6jh6jm/) to edit the above chart.

## Customize Quadrant Lines

Customize the quadrant lines in the bubble chart using the list of attributes given below:

- Set the `quadrantLineThickness` attribute to specify the thickness of the quadrant lines.

- Set the value of `quadrantLineAlpha` attribute to specify the transparency of the quadrant lines between `0` (transparent) and `100` (opaque).

- Set the `quadrantLineColor` attribute to specify the hex color code for the quadrant lines.

- To render the quadrant lines as dashed lines, set the `quadrantLineIsDashed` attribute to `1`.

- Set the `quadrantLineDashLen` attribute to specify the length of each dash.

- Set the `quadrantLineDashGap` attribute to specify the gap between each dash.

- Set the `quadrantLabelPadding` attribute to specify the space between quadrant labels and the associated quadrant lines.

Refer to the code given below:

```json
{
  "chart": {
    "quadrantLineThickness": "2",
    "quadrantLineAlpha": "30",
    "quadrantLineColor": "#ac3d44",
    "quadrantLineIsDashed": "1",
    "quadrantLineDashLen": "2",
    "quadrantLineDashGap": "3",
    "quadrantLabelPadding": "5"
  }
}
```

A bubble chart rendered with customized quadrant lines looks like this:

{% embed_chart standard-charts-bubble-and-xy-charts-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/mgf2z57n/) to edit the above chart.
