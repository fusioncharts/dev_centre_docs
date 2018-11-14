---
title: Titles and Axis Names | FusionCharts
description: This section talks about titles and axis names on the charts. One can insert caption, sub-caption, x-axis name and y-axis name in a chart
heading: Titles and Axis Names
---

The caption (also called the chart title) is the heading of your chart, whereas a sub-caption is the text that appears just below the caption. In the sections below, you can see how to add a caption, subcaption, x-axis name, and y-axis name to your charts, as well as configure their font properties.

![Titles and Axis Names]({% site.baseurl %}/images/chart-configuration-titles-and-axis-names-image-1.png)

Cartesian charts have axes that run along the left and the bottom borders of the canvas. The x-axis runs along the bottom border of the canvas, running from left to right. The y-axis runs along the left border of the canvas, going from the bottom and to the top.

## Set the Caption and Subcaption

* Specify the caption of the chart using the `caption` attribute, which accepts text values.

* Specify the sub-caption of the chart using the `subCaption` attribute, which accepts text values.

Refer to the code given below:

```json
{
    "chart": {
        "caption": "Monthly Revenue",
        "subCaption": "Last year"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/ubw094z3/) to edit the above chart.

## Customize Font Properties 

Use the following attributes to customize the font color, size, formatting, etc., of the caption.

* Set the caption font family using the `captionFont` attribute.

* Set the caption font color in hex code using the `captionFontColor` attribute.

* Set the caption font size (between `0` and `72`) using the `captionFontSize` attribute.

* Set caption font to bold by setting the value of the `captionFontBold` attribute to `1`.

Refer to the code given below:

```json
{
    "chart": {
        "captionFont": "Arial",
        "captionFontSize": "18",
        "captionFontColor": "#993300",
        "captionFontBold": "1"
    }
}
```

To customize the font color, size, formatting, etc., of the subcaption, use the following attributes:

* Set the subcaption font family using the `subCaptionFont` attribute.

* Set the subcaption font color in hex code using the `subCaptionFontColor` attribute.

* Set the subcaption font size (between `0` and `72`) using the `subCaptionFontSize` attribute.

* Set subcaption font to bold by setting the value of the `subCaptionFontBold` attribute to `1`.

Refer to the code given below:

```json
{
    "chart": {
        "subcaptionFont": "Arial",
        "subcaptionFontSize": "14",
        "subcaptionFontColor": "#993300",
        "subcaptionFontBold": "0"
    }
}
```

The chart with customized caption and subcaption looks like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/o4xhvc0g/) to edit the above chart.

## Configure Caption Alignment

Use the following attributes to configure caption alignment:

* Specify the horizontal alignment of the caption using the `captionAlignment` attribute, which accepts the values of `left`, `center` (default), and `right`.

* Display the caption at the top of the chart by setting the value of the `captionOnTop` attribute to `1`.

* Align the caption with the canvas area instead of the chart area, by setting the value of the `alignCaptionWithCanvas` attribute to `1`.

* Configure the padding (in pixels) from either edge when the caption is not center aligned, using the `captionHorizontalPadding` attribute.

Refer to the code given below:

```json
{
    "chart": {
        "alignCaptionWithCanvas": "1",
        "captionHorizontalPadding": "2",
        "captionOnTop": "0",
        "captionAlignment": "right"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-titles-and-axis-names-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/bbsmmt84/) to edit the above chart.

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