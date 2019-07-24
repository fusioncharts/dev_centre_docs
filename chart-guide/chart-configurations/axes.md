---
title: Axes | FusionCharts
description: This section talks about the x-axis and y-axis on the chart. 
heading: Configure axes
---

X-Axis refers to the categorical axis in FusionCharts. For the vertical charts it currently appears at bottom of the canvas, whereas, for the horizontal charts, it currently appears on the left of the canvas.

The vertical axis on the chart is refered to as the y-axis. Y-Axis refers to the value axis. For the vertical charts it currently appears at left of the canvas, whereas, for the horizontal charts (bar charts), it currently appears on the bottom of the canvas.

## Setting Axes Names

Use the following attributes to configure names of axes:

* Specify the title of the X-axis of the chart using the `xAxisName` attribute.

* Specify the title of the Y-axis of the chart using the `yAxisName` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "xAxisName": "Quarter",
        "yAxisName": "Amount {br}(In USD)" 
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/9y23m8vq/) to edit the above chart.

## Y-axis position

In FusionCharts Suite XT, previously, the position of the y-axis is always set to left. Starting 3.14.0, you can customize the position of the Y-axis by setting the value of `yAxisPosition` attribute to `right`. This will render a chart with y-axis on right.

>* The behavior of primary and secondary Y-Axis is not affected by this.*

Refer to the code given below:

```

CODE

```

In the above code, the value of the `yAxisPosition` attribute has been set to **right**.

By applying the above attribute, the chart looks like as shown in the image below:

IMAGE

For bar charts, the y-axis will appear on top as shown in the chart below:

Live chart

## X-Axis Position

With 3.14.0, the position of this axis will be configurable - TOP/BOTTOM for vertical charts, LEFT/RIGHT for horizontal charts.

To change the position of the x-axis to the **top**, set the value of `xAxisPosition` attribute to `top`.

Refer to the code below:

```

{

    "chart": {

        "xAxisPosition": "top"

    }

}

```

*> The default value of `xAxisPosition` attribute is `bottom`.*

The chart looks like as shown below:

Live Chart

Click here to edit the above chart.

*> Changing the position of the x-axis won't change the position of the legend of the chart.*

### X-Axis position for bar charts

For horizontal bar charts, the position of the x-axis can be set to `right` or `left`.

*> By default, the x-axis of bar charts will always be at the left of the chart.*

To change the position of the x-axis to the **right**, set the value of `xAxisPosition` attribute to `right`.

Refer to the code below:

```

{

    "chart": {

        "xAxisPosition": "right"

    }

}

```

The chart looks like as shown below:

Live Chart

Click here to edit the above chart.

## Configure Font Cosmetic Properties 

Configure cosmetic properties like font, color, and size of the X-axis name using the attributes given below:

* Set the font family of X-axis using the `xAxisNameFont` attribute.

* Set the font color of the X-axis in hex code using the `xAxisNameFontColor` attribute.

* Set the font size (between `0` and `72`) of the X-axis using the `xAxisNameFontSize` attribute.

* Set the font style to bold of the X-axis using the `xAxisNameFontBold` attribute.

* Set the font style to italic of the X-axis using the `xAxisNameFontItalic` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "xAxisNameFont": "Arial",
        "xAxisNameFontSize": "12",
        "xAxisNameFontColor": "#993300",
        "xAxisNameFontBold": "1",
        "xAxisNameFontItalic": "1"
    }
}
```

Configure cosmetic properties like font, color, and size of the Y-axis name using the attributes given below:

* Set the font family of Y-axis using the `yAxisNameFont` attribute.

* Set the font color of the Y-axis in hex code using the `yAxisNameFontColor` attribute.

* Set the font size (between `0` and `72`) of the Y-axis using the `yAxisNameFontSize` attribute.

* Set the font style to bold of the Y-axis using the `yAxisNameFontBold` attribute.

* Set the font style to italic of the Y-axis using the `yAxisNameFontItalic` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisNameFont": "Arial",
        "yAxisNameFontSize": "12",
        "yAxisNameFontColor": "#993300",
        "yAxisNameFontBold": "1",
        "yAxisNameFontItalic": "1"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/7o7qpcL2/) to edit the above chart.

## Configure Cosmetic Properties of Borders of the Names

Use the following attributes to configure cosmetic properties of the borders around names of x-axis:

* Set the border color of the name of the X-axis in hex code using the `xAxisNameBorderColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the border around the name of the X-axis using the `xAxisNameBorderAlpha` attribute.

* Set the padding of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderPadding` attribute.

* Set the radius of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderRadius` attribute

* Set the thickness of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderThickness` attribute.

* Make the border around the name of the X-axis dashed using the `xAxisNameBorderDashed` attribute.

* Set the length of each dash (in pixels) in the dashed border around the name of the X-axis using the `xAxisNameBorderDashLen` attribute.

* Set the gap between two consecutive dashes (in pixels) in the dashed border around the name of the X-axis using the `xAxisNameBorderDashGap` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "xAxisNameBorderColor": "#6666FF",
        "xAxisNameBorderAlpha": "50",
        "xAxisNameBorderPadding": "6",
        "xAxisNameBorderRadius": "3",
        "xAxisNameBorderThickness": "2",
        "xAxisNameBorderDashed": "1",
        "xAxisNameBorderDashLen": "4",
        "xAxisNameBorderDashGap": "2"
    }
}
```

Use the following attributes to configure cosmetic properties of the borders around names of y-axis:

* Set the border color of the name of the X-axis in hex code using the `yAxisNameBorderColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the border around the name of the X-axis using the `yAxisNameBorderAlpha` attribute.

* Set the padding of the border (in pixels) around the name of the X-axis using the `yAxisNameBorderPadding` attribute.

* Set the radius of the border (in pixels) around the name of the X-axis using the `yAxisNameBorderRadius` attribute.

* Set the thickness of the border (in pixels) around the name of the X-axis using the `yAxisNameBorderThickness` attribute.

* Make the border around the name of the X-axis dashed using the `yAxisNameBorderDashed` attribute.

* Set the length of each dash (in pixels) in the dashed border around the name of the X-axis using the `yAxisNameBorderDashLen` attribute.

* Set the gap between two consecutive dashes (in pixels) in the dashed border around the name of the X-axis using the `yAxisNameBorderDashGap` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisNameBorderColor": "#6666FF",
        "yAxisNameBorderAlpha": "50",
        "yAxisNameBorderPadding": "6",
        "yAxisNameBorderRadius": "3",
        "yAxisNameBorderThickness": "2",
        "yAxisNameBorderDashed": "1",
        "yAxisNameBorderDashLen": "4",
        "yAxisNameBorderDashGap": "2"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/js1h6pgm/) to edit the above chart.

## Configure the Font Opacity and Background

Use the following attributes to configure the background for names of x-axis:

* Set the font family of x-axis name using `xAxisNameFont` attribute.

* Set the x-axis name font size (between `0` and `72`) using `xAxisNameFontSize` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the x-axis using the `xAxisNameFontAlpha` attribute.

* Set the background color (in hex code) of the name of the x-axis using the `xAxisNameBgColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the background of the name of the x-axis using the `xAxisNameBgAlpha` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the x-axis using the `xAxisNameAlpha` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "xAxisNameFont": "Arial",
        "xAxisNameFontSize": "14",
        "xAxisNameBgColor": "#3399ff",
        "xAxisNameBgAlpha": "20",
        "xAxisNameFontAlpha": "50",
        "xAxisNameBorderPadding": "10"       
    }
}
```

Use the following attributes to configure the background for names of y-axis:

* Set the font family of X-axis name using `yAxisNameFont` attribute.

* Set the x-axis name font size (between `0` and `72`) using `yAxisNameFontSize` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the X-axis using the `yAxisNameFontAlpha` attribute.

* Set the background color (in hex code) of the name of the X-axis using the `yAxisNameBgColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the background of the name of the X-axis using the `yAxisNameBgAlpha` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the X-axis using the `yAxisNameAlpha` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "yAxisNameFont": "Arial",
        "yAxisNameFontSize": "14",
        "yAxisNameBgColor": "#3399ff",
        "yAxisNameBgAlpha": "20",
        "yAxisNameFontAlpha": "50",
        "yAxisNameBorderPadding": "10"       
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/4q55b6z5/) to edit the above chart.

## Configure background properties for y-axis values

Use the following attributes to set a semi-transparent background in a chosen color of y-axis values:

* Set the background color of the y-axis values using the `yAxisValueBgColor` attribute.

* You can also set the degrees of transparency of the background color using `yAxisValueBgAlpha` attribute.

Refer to the code below:

```

{

    "chart": {

        "yAxisValueBgColor": "#ff0000",

        "yAxisValueBgAlpha": "50"

    }

}

```

The chart will look like as shown below:

LIVE CHART

Click here to edit the above chart.

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

```

{

    "chart": {

        "yAxisValueBorderColor": "",

        "yAxisValueBorderAlpha": "",

        "yAxisValueBorderPadding": "",

        "yAxisValueBorderRadius": "",

        "yAxisValueBorderThickness": "",

        "yAxisValueBorderDashed ": "",

        "yAxisValueBorderDashLen": "",

        "yAxisValueBorderDashGap": ""        

    }

}

```

The chart will look like as shown in the image below:

Live Chart

Click here to edit the above chart.

## Configure font properties for y-axis values

Use the following attributes to configure the font properties of y-axis values:

* Set the font of the y-axis values using `yAxisValueFont` attribute.

* Set the font size (between `0` to `72`) of the y-axis values using `yAxisValueFontSize` attribute.

* Set the font color (in hex codes) of the y-axis using `yAxisValueFontColor` attribute.

* Set the font of the y-axis values to bold using `yAxisValueFontBold` attribute.

* Set the font for the y-axis values to italics using `yAxisValueFontItalic` attribute.

* Set the degree of transparency of the y-axis values using `yAxisValueAlpha` attribute.

Refer to the code given below:

```

{

    "chart": {

        "yAxisValueFont": "verdana,sans",

        "yAxisValueFontSize": "10px",

        "yAxisValueFontColor": "#555555"

        "yAxisValueFontBold": "1"

        "yAxisValueFontItalic": "1"

        "yAxisValueAlpha": "100"

    }

}

```

The chart will look like as shown below:

LIVE CHART

Click here to edit the above chart.

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

## Configure Background Properties of Y-axis Names

Use the following attributes to set a semi-transparent background in a chosen color for the primary and secondary y-axis names of a multi-series, combination 2D chart:

* Set the degrees of transparencies of the primary and secondary axes' names (between `0` for transparent and `100` for opaque) using the `pYAxisNameAlpha` and `sYAxisNameAlpha` attributes, respectively.

* Set the background colors for the primary and secondary axes' names in hex codes using the `pYAxisNameBgColor` and `sYAxisNameBgColor` attributes, respectively.

* Set the degrees of transparencies of the primary and secondary axes' name backgrounds (between `0` for transparent and `100` for opaque) using the `pYAxisNameBgAlpha` and `sYAxisNameBgAlpha` attributes, respectively.

Refer to the code given below:

```json
{
    "chart": {
        "pYAxisNameBgColor": "#3399ff",
        "pYAxisNameBgAlpha": "20",
        "pYAxisNameBorderPadding": "6",
        "pYAxisNameAlpha": "50",
        "sYAxisNameFont": "Arial",
        "sYAxisNameFontSize": "12",
        "sYAxisNameBgColor": "#3399ff",
        "sYAxisNameBgAlpha": "20",
        "sYAxisNameBorderPadding": "6",
        "sYAxisNameAlpha": "50"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/999f2Lbw/) to edit the above chart.

## Configure the Border Properties of Y-axis Names

Use the following attributes to customize the primary and secondary y-axis names for a multi-series, combination 2D chart with a dashed border and a chosen color:

* Set the background colors for the primary and secondary axes' name borders in hex codes using the `pYAxisNameBorderColor` and `sYAxisNameBorderColor` attributes, respectively.

* Set the degrees of transparencies of the primary and secondary axes' name borders (between `0` for transparent and `100` for opaque) using the `pYAxisNameBorderAlpha` and `sYAxisNameBorderAlpha` attributes, respectively.

* Set the border padding (in pixels) for the primary and secondary axes' names using the `pYAxisNameBorderPadding` and `sYAxisNameBorderPadding` attributes, respectively.

* Set the border radius (in pixels) for the primary and secondary axes' names using the `pYAxisNameBorderRadius` and `sYAxisNameBorderRadius` attributes, respectively.

* Set the border thickness (in pixels) for the primary and secondary axes' names using the `pYAxisNameBorderThickness` and `sYAxisNameBorderThickness` attributes, respectively.

* Make the name borders for the primary and secondary axes' names dashed using the `pYAxisNameBorderDashed` and `sYAxisNameBorderDashed` attributes (set both to `1`), respectively.

* Set the length of each dash (in pixels) for the dashed borders around primary and secondary axes' names using the `pYAxisNameBorderDashLen` and `sYAxisNameBorderDashLen` attributes, respectively.

* Set the gap between two consecutive dashes (in pixels) for the dashed borders around primary and secondary axes' names using the `pYAxisNameBorderDashGap` and `sYAxisNameBorderDashGap` attributes, respectively.

Refer to the code given below:

```json
{
    "chart": {
        "pYAxisNameBorderColor": "#6666FF",
        "pYAxisNameBorderAlpha": "50",
        "pYAxisNameBorderPadding": "6",
        "pYAxisNameBorderRadius": "0",
        "pYAxisNameBorderThickness": "1",
        "pYAxisNameBorderDashed": "1",
        "pYAxisNameBorderDashLen": "4",
        "pYAxisNameBorderDashGap": "2",
        "sYAxisNameBorderColor": "#6666FF",
        "sYAxisNameBorderAlpha": "50",
        "sYAxisNameBorderPadding": "6",
        "sYAxisNameBorderRadius": "0",
        "sYAxisNameBorderThickness": "1",
        "sYAxisNameBorderDashed": "1",
        "sYAxisNameBorderDashLen": "4",
        "sYAxisNameBorderDashGap": "2",       
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/d09622mw/) to edit the above chart.