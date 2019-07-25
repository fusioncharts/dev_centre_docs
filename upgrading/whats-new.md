---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.14.0.

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

Click [here](http://jsfiddle.net/fusioncharts/4ygjco5m/) to edit an area chart with multiple data plots.

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
            "seriesname": "Bakersfield Central",
            "inheritPlotBorderColor": "1"
            "data": [
                ...
            ]
        }
    ]
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-multi-area-plot-inherit-border-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/L1kg5jv7/) to edit an area chart with multiple data plots.

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

### Pie/Doughnut chart

Starting v3.14.0, FusionCharts Suite XT allows you to place the values inside the pie/doughnut slices of a pie and doughnut chart respectively. This helps to improve the overall look as it saves the canvas area outside the chart.

You can place the value inside the slices by setting the value of the newly added attribute `valuePosition` to **inside**. The default value of `valuePosition` attribute is **outside**.

> `valuePosition` attribute can only be applied to 2D charts, i.e., pie2d and doughnut2d charts.

Refer to the code below:

```json
{
    "chart": {
        "valuePosition": "inside"
    }
}
```

`valuePosition` attribute can be applied both at `chart` and `data` level, i.e., you can set the position of the individual values of the slices.

Refer to the code below, showing the `valuePosition` attribute for a particular value:

```json
{
    "chart": {
        ...
    },
    "data": [{
            "label": "Food",
            "value": "285040"
        },
        {
            "label": "Apparels",
            "value": "146330",
            "valuePosition": "inside"
        },
        {
            "label": "Electronics",
            "value": "105070"
        },
        {
            "label": "Household",
            "value": "49100"
        }
    ]
}
```

A pie2d with `valuePosition` attribute set to **inside** (at chart level) is shown below:

{% embed_chart value-position-inside-pie-chart-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/3dts9evm/) to edit the above chart.

In pie/doughnut chart, changing the position of the value can sometimes overlap each other due to the unavailability of space. For this scenario, a new attribute `minAngleForValue` has been introduced which sets the minimum angle of the pie below which the values will not be visible.

Refer to the code below:

```json
{
    "chart": {
        "valuePosition": "inside",
        "minAngleForValue": "75"
    }
}
```

> This attribute will only work if the `valuePosition` attribute is set to `inside`.

A doughnut chart after applying `valuePosition` and `minAngleForValue` attribute look like:

{% embed_chart value-position-inside-doughnut-chart-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/2m8fskpa/) to edit the above chart.

## Set the radius as a percent value

Now, you already know how to customize the radius of the pie/doughnut chart. Here let's discuss how to configure the radius of the pie/doughnut chart using percent values.

You can set the radius of the pie chart in percent by setting the value of `pieRadius` attribute. When you set the value of `pieRadius` in percent, the radius of the pie is calculated with respect to the chart canvas space.

Refer to the image shown below:

![Percent Value on Pie Chart](/images/percent-value-in-pie-radius.png)

Click [here](http://jsfiddle.net/fusioncharts/7g15v0nq/) to edit the above chart.

In the doughnut chart, you can apply the `pieRadius` attribute to set the radius of the upper threshold of the doughnut chart.

Refer to the image below:

![Percent Value on Doughnut Chart](/images/pie-radius-in-doughnut-chart.png)

Click [here](http://jsfiddle.net/fusioncharts/eh6rsmnt/) to edit the above chart.

To customize the inner radius of the doughnut chart, set the value of `doughnutRadius` attribute in percent.

Refer to the image below:

![Doughnut Radius on Doughnut Chart](/images/percent-value-in-doughnut-radius.png)

In the above image, the `doughnutRadius` has been set to **80%** and as you can see that the percent of the radius has been calculated with respect to the upper threshold of the doughnut chart.

Refer to the code given below:

```json
{
  "chart": {
    "pieRadius": "90",
    "doughnutRadius": "80"
  }
}
```
Click [here](http://jsfiddle.net/fusioncharts/osezmt87/) to edit the above chart.


## X-axis Position

With 3.14.0, the position of this axis will be configurable - TOP/BOTTOM for vertical charts, LEFT/RIGHT for horizontal charts.

To change the position of the x-axis to the **top**, set the value of `xAxisPosition` attribute to `top`.

Refer to the code below:

```json
{
    "chart": {
        "xAxisPosition": "top"
    }
}
```

> The default value of `xAxisPosition` attribute is `bottom`.

The chart looks like as shown below:

{% embed_chart chart-configurations-axes-sample-x-axis-position-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/5Lmk4bo3/) to edit the above chart.

> Changing the position of the x-axis won't change the position of the legend of the chart.

### X-axis position for bar charts

For horizontal bar charts, the position of the x-axis can be set to `right` or `left`.

> By default, the x-axis of bar charts will always be at the left of the chart.

To change the position of the x-axis to the **right**, set the value of `xAxisPosition` attribute to `right`.

Refer to the code below:

```json
{
    "chart": {
        "xAxisPosition": "right"
    }
}
```

The chart looks like as shown below:

{% embed_chart chart-configurations-axes-sample-x-axis-position-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/v9oenc7g/) to edit the above chart.

## Y-axis position

In FusionCharts Suite XT, previously, the position of the y-axis is always set to left. Starting 3.14.0, you can customize the position of the Y-axis by setting the value of `yAxisPosition` attribute to `right`. This will render a chart with y-axis on right.

> The behavior of primary and secondary Y-Axis is not affected by this.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisPosition": "right"
    }
}
```

In the above code, the value of the `yAxisPosition` attribute has been set to **right**.

By applying the above attribute, the chart looks like as shown below:

{% embed_chart chart-configurations-axes-sample-y-axis-position-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/bh2fxgnq/) to edit the above chart.

For bar charts, the y-axis will appear on top as shown in the chart below:

{% embed_chart chart-configurations-axes-sample-y-axis-position-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/ud5baexj/) to edit the above chart.

## Configure background properties for y-axis values

Use the following attributes to set a semi-transparent background in a chosen color of y-axis values:

* Set the background color of the y-axis values using the `yAxisValueBgColor` attribute.
* You can also set the degrees of transparency of the background color using `yAxisValueBgAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "yAxisValueBgColor": "#ff0000",
        "yAxisValueBgAlpha": "40"
    }
}
```

The chart will look like as shown below:

{% embed_chart configure-background-properties-for-y-axis-values-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/f78h4k0s/) to edit the above chart.

## Configure border properties for y-axis values

Use the following attributes to customize the border of the y-axis values:

* Set the border color of the y-axis values using `yAxisValueBorderColor` attribute.

* Set the transparency of the border of the y-axis values using `yAxisValueBorderAlpha` attribute.

* Set the padding (in pixels) of the y-axis values border using `yAxisValueBorderPadding` attribute.

* Set the border radius (in pixels) of the y-axis values using `yAxisValueBorderRadius` attribute.

* Set the border thickness (in pixels) of the y-axis values using `yAxisValueBorderThickness` attribute.

* Make the y-axis values' border dashed using the `yAxisValueBorderDashed` attribute.

* Set the length of each dash (in pixels) for the dashed borders around y-axis values using `yAxisValueBorderDashLen` attribute.

* Set the gap between two consecutive dashes (in pixels) for the dashed borders around the y-axis values using `yAxisValueBorderDashGap` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisValueBorderColor": "#ff0000",
        "yAxisValueBorderAlpha": "60",
        "yAxisValueBorderPadding": "5",
        "yAxisValueBorderRadius": "2",
        "yAxisValueBorderThickness": "3",
        "yAxisValueBorderDashed": "1",
        "yAxisValueBorderDashLen": "2",
        "yAxisValueBorderDashGap": "2",
    }
}
```

The chart will look like as shown in the image below:

{% embed_chart configure-border-properties-for-y-axis-values-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/tbq5dxj7/) to edit the above chart.

## Configure font properties for y-axis values

Use the following attributes to configure the font properties of y-axis values:

* Set the font of the y-axis values using `yAxisValueFont` attribute.

* Set the font size (between `0` to `72`) of the y-axis values using `yAxisValueFontSize` attribute.

* Set the font color (in hex codes) of the y-axis using `yAxisValueFontColor` attribute.

* Set the font of the y-axis values to bold using `yAxisValueFontBold` attribute.

* Set the font for the y-axis values to italics using `yAxisValueFontItalic` attribute.

* Set the degree of transparency of the y-axis values using `yAxisValueAlpha` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisValueFont": "verdana,sans",
        "yAxisValueFontSize": "10px",
        "yAxisValueFontColor": "#ff0000",
        "yAxisValueFontBold": "1",
        "yAxisValueFontItalic": "1",
        "yAxisValueAlpha": "50",
    }
}
```

The chart will look like as shown below:

{% embed_chart configure-font-properties-for-y-axis-values-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/u8n3k46c/) to edit the above chart.

## Configure Font Properties for Y-axis Names

Use the following attributes to configure font properties of a multi-series combination 2D chart with the primary and secondary y-axis names italicized:

* Set the titles of the primary and secondary axes using the `pYAxisName` and `sYAxisName` attributes, respectively.

* Set the fonts of the primary and secondary axes using the `pYAxisNameFont` and `sYAxisNameFont` attributes, respectively.

* Set the font colors (in hex codes) for the primary and secondary axes using the `pYAxisNameFontColor` and `sYAxisNameFontColor` attributes, respectively.

* Set the font sizes (between `0` and `72`) for the primary and secondary axes using the `pYAxisNameFontSize` and `sYAxisNameFontSize` attributes, respectively.

* Set the fonts for the primary and secondary axes to bold using the `pYAxisNameFontBold` and `sYAxisNameFontBold` attributes (set both to `1`), respectively.

* Set the fonts for the primary and secondary axes to italic using the `pYAxisNameFontItalic` and `sYAxisNameFontItalic` attributes (set both to `1`), respectively.

* Set the degree of transparencies of the primary and secondary axes' name fonts and backgrounds (between `0` for transparent and `100` for opaque) using the `pYAxisNameFontAlpha` and `sYAxisNameFontAlpha` attributes, respectively.

Refer to the code given below:

```json
{
    "chart": {
        "pYAxisName": "Amount (In USD)",
        "sYAxisName": "Profit %",
        "pYAxisNameFont": "Arial",
        "pYAxisNameFontSize": "12",
        "pYAxisNameFontColor": "#003366",
        "pYAxisNameFontBold": "1",
        "pYAxisNameFontItalic": "1",
        "pYAxisNameFontAlpha": "50",
        "sYAxisNameFont": "Arial",
        "sYAxisNameFontSize": "12",
        "sYAxisNameFontColor": "#003366",
        "sYAxisNameFontBold": "1",
        "sYAxisNameFontItalic": "1",
        "sYAxisNameFontAlpha": "50" 
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/pfsytcca/) to edit the above chart.

## Set the radius as a percent value

Now, you already know how to customize the radius of the pie/doughnut chart. Here let's discuss how to configure the radius of the pie/doughnut chart using percent values.

You can set the radius of the pie chart in percent by setting the value of `pieRadius` attribute. When you set the value of `pieRadius` in percent, the radius of the pie is calculated with respect to the chart canvas space.

Refer to the image shown below:

![Percent Value on Pie Chart](/images/percent-value-in-pie-radius.png)

Click [here](http://jsfiddle.net/fusioncharts/7g15v0nq/) to edit the above chart.

In the doughnut chart, you can apply the `pieRadius` attribute to set the radius of the upper threshold of the doughnut chart.

Refer to the image below:

![Percent Value on Doughnut Chart](/images/pie-radius-in-doughnut-chart.png)

Click [here](http://jsfiddle.net/fusioncharts/eh6rsmnt/) to edit the above chart.

To customize the inner radius of the doughnut chart, set the value of `doughnutRadius` attribute in percent.

Refer to the image below:

![Doughnut Radius on Doughnut Chart](/images/percent-value-in-doughnut-radius.png)

In the above image, the `doughnutRadius` has been set to **80%** and as you can see that the percent of the radius has been calculated with respect to the upper threshold of the doughnut chart.

Refer to the code given below:

```json
{
  "chart": {
    "pieRadius": "90",
    "doughnutRadius": "80"
  }
}
```

Click [here](http://jsfiddle.net/fusioncharts/osezmt87/) to edit the above chart.