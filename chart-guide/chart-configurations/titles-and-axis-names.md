---
title: Titles and Axis Names | FusionCharts
description: This section talks about titles and axis names on the charts. One can insert caption, sub-caption, x-axis name and y-axis name in a chart
heading: Titles and Axis Names
breadcrumb: [["Home", "/"], ["Titles and Axis names"]]
---

The caption (also called the chart title) is the heading of your chart, whereas a sub-caption is the text that appears just below the caption. In the sections below, you can see how to add caption, subcaption, x-axis name, and y-axis name to your charts, as well as configure their font properties.

**image**

Cartesian charts have axes that run along the left and the bottom borders of the canvas. The x-axis runs along the bottom border of the canvas, running left to right. The y-axis runs along the left border of the canvas, going from the bottom and to the top.

## Set the caption and subcaption

* Specify the caption of the chart using the `caption` attribute, which accepts text values.

* Specify the sub-caption of the chart using the `subCaption` attribute, which accepts text values.


Refer to the code given below:

```
{
    "chart": {
        "caption": "Monthly Revenue",
        "subCaption": "Last year"
    },

```
The chart will look like as shown below:

**Insert Chart**

## Customize font properties 

Use the following attributes to customize the font color, size, formatting, etc., of the caption and subcaption.

* Set the caption font family using the `captionFont` attribute.

* Set the caption font color in hex code using the `captionFontColor` attribute.

* Set the caption font size (between `0` and `72`) using the `captionFontSize` attribute.

* Set caption font to bold by setting the value of the `captionFontBold` attribute to `1`.

* Set the subcaption font family using the `subCaptionFont` attribute.

* Set the subcaption font color in hex code using the `subCaptionFontColor` attribute.

* Set the subcaption font size (between `0` and `72`) using the `subCaptionFontSize` attribute.

* Set subcaption font to bold by setting the value of the `subCaptionFontBold` attribute to `1`.

Refer to the code given below:

```
{
    "chart": {
        "captionFont": "Arial",
        "captionFontSize": "18",
        "captionFontColor": "#993300",
        "captionFontBold": "1",
        "subcaptionFont": "Arial",
        "subcaptionFontSize": "14",
        "subcaptionFontColor": "#993300",
        "subcaptionFontBold": "0"
    },
```

The chart will look like as shown below:

**Insert Chart**

## Configure caption alignment

Use the following attributes to configure caption alignment:

* Specify the horizontal alignment of the caption using the `captionAlignment` attribute, which accepts the values of `left`, `center` (default), and `right`.

* Display the caption at the top of the chart by setting the value of the `captionOnTop` attribute to `1`.

* Align the caption with the canvas area instead of chart area, by setting the value of the `alignCaptionWithCanvas` attribute to `1`.

* Configure the padding (in pixels) from either edge when the caption is not center aligned, using the `captionHorizontalPadding` attribute.

Refer to the code given below:

```
{
    "chart": {
        "alignCaptionWithCanvas": "1",
        "captionHorizontalPadding": "2",
        "captionOnTop": "0",
        "captionAlignment": "right"
    },

```
The chart will look like as shown below:

**Insert Chart**

## Setting axes names

Use the following attributes to configure names of axes:

* Specify the title of the X-axis of the chart using the `xAxisName` attribute.

* Specify the title of the Y-axis of the chart using the `yAxisName` attribute.

Refer to the code given below:

```
{
    "chart": {
        "xAxisName": "Quarter",
        "yAxisName": "Amount {br}(In USD)" 
    },

```

The chart will look like as shown below:

**Insert Chart**

## Configure font cosmetic properties 

Configure cosmetic properties like font, color, and size of the X-axis (or Y-axis) name using the attributes given below:

* Set the font family of X-axis using the `xAxisNameFont` attribute or Y-axis using the `yAxisNameFont` attribute.

* Set the font color of the X-axis in hex code using the `xAxisNameFontColor` attribute, or that of the Y-axis using the `yAxisNameFontColor` attribute.

* Set the font size (between `0` and `72`) of the X-axis using the `xAxisNameFontSize` attribute, or that of the Y-axis using the `yAxisNameFontSize` attribute.

* Set the font style to bold of the X-axis using the `xAxisNameFontBold` attribute, or that of the Y-axis using the `yAxisNameFontBold` attribute. In either case, set the value to `1`.

* Set the font style to italic of the X-axis using the `xAxisNameFontItalic` attribute, or that of the Y-axis using the `yAxisNameFontItalic` attribute. In either case, set the value to `1`.


Refer to the code given below:

```
{
    "chart": {
        "xAxisNameFont": "Arial",
        "xAxisNameFontSize": "12",
        "xAxisNameFontColor": "#993300",
        "xAxisNameFontBold": "1",
        "xAxisNameFontItalic": "1",
        "yAxisNameFont": "Arial",
        "yAxisNameFontSize": "12",
        "yAxisNameFontColor": "#993300",
        "yAxisNameFontBold": "1",
        "yAxisNameFontItalic": "1"

},

```
The chart will look like as shown below:

**Insert Chart**

## Configure cosmetic properties of borders of the names

Use the following attributes to configure cosmetic properties of the borders around names of axes:

* Set the border color of the name of the X-axis in hex code using the `xAxisNameBorderColor` attribute, or that of the Y-axis using the `yAxisNameBorderColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the border around the name of the X-axis using the `xAxisNameBorderColor` attribute, or that of the Y-axis using the `yAxisNameBorderColor` attribute.

* Set the padding of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderPadding` attribute, or that of the Y-axis using the `yAxisNameBorderPadding` attribute.

* Set the radius of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderRadius` attribute, or that of the Y-axis using the `yAxisNameBorderRadius` attribute.

* Set the thickness of the border (in pixels) around the name of the X-axis using the `xAxisNameBorderThickness` attribute, or that of the Y-axis using the `yAxisNameBorderThickness` attribute.

* Make the border around the name of the X-axis dashed using the `xAxisNameBorderDashed` attribute, or that of the Y-axis using the `yAxisNameBorderDashed` attribute. In either case, set the value to `1`.

* Set the length of each dash (in pixels) in the dashed border around the name of the X-axis using the `xAxisNameBorderDashLen` attribute, or that of the Y-axis using the `yAxisNameBorderDashLen` attribute.

* Set the gap between two consecutive dashes (in pixels) in the dashed border around the name of the X-axis using the `xAxisNameBorderDashGap` attribute, or that of the Y-axis using the `yAxisNameBorderDashGap` attribute.


Refer to the code given below:

```
{
    "chart": {
        "xAxisNameBorderColor": "#6666FF",
        "xAxisNameBorderAlpha": "50",
        "xAxisNameBorderPadding": "6",
        "xAxisNameBorderRadius": "3",
        "xAxisNameBorderThickness": "2",
        "xAxisNameBorderDashed": "1",
        "xAxisNameBorderDashLen": "4",
        "xAxisNameBorderDashGap": "2",
        "yAxisNameBorderColor": "#6666FF",
        "yAxisNameBorderAlpha": "50",
        "yAxisNameBorderPadding": "6",
        "yAxisNameBorderRadius": "3",
        "yAxisNameBorderThickness": "2",
        "yAxisNameBorderDashed": "1",
        "yAxisNameBorderDashLen": "4",
        "yAxisNameBorderDashGap": "2"
       
    },

```
The chart will look like as shown below:

**Insert Chart**

## Configure the font opacity and background

Use the following attributes to configure the background for names of axes:

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the X-axis using the `xAxisNameFontAlpha` attribute, or that of the Y-axis using the `yAxisNameFontAlpha` attribute.

* Set the background color (in hex code) of the name of the X-axis using the `xAxisNameBgColor` attribute, or that of the Y-axis using the `yAxisNameBgColor` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the background of the name of the X-axis using the `xAxisNameBgAlpha` attribute, or that of the Y-axis using the `yAxisNameBgAlpha` attribute.

* Set the transparency (between `0` for transparent and `100` for opaque) of the name of the X-axis using the `xAxisNameAlpha` attribute, or that of the Y-axis using the `yAxisNameAlpha` attribute.

Refer to the code given below:

```
{
    "chart": {
        "xAxisNameBgColor": "#3399ff",
        "xAxisNameBgAlpha": "20",
        "xAxisNameFontAlpha": "50",
        "xAxisNameBorderPadding": "10",
        "yAxisNameFont": "Arial",
        "yAxisNameFontSize": "14",
        "yAxisNameBgColor": "#3399ff",
        "yAxisNameBgAlpha": "20",
        "yAxisNameFontAlpha": "50",
        "yAxisNameBorderPadding": "10"       
    },

```
The chart will look like as shown below:

**Insert Chart**

## Configure font cosmetic properties for primary and secondary y-axis names

Use the following attributes to configure font properties of a multi-series, combination 2D chart with the primary and secondary y-axis names italicized:

* Set the titles of the primary and secondary axes using the `pYAxisName` and `sYAxisName` attributes, respectively.

* Set the fonts of the primary and secondary axes using the `pYAxisNameFont` and `sYAxisNameFont` attributes, respectively.

* Set the font colors (in hex codes) for the primary and secondary axes using the `pYAxisNameFontColor` and `sYAxisNameFontColor` attributes, respectively.

* Set the font sizes (between `0` and `72`) for the primary and secondary axes using the `pYAxisNameFontSize` and `sYAxisNameFontSize` attributes, respectively.

* Set the fonts for the primary and secondary axes to bold using the `pYAxisNameFontBold` and `sYAxisNameFontBold` attributes (set both to `1`), respectively.

* Set the fonts for the primary and secondary axes to italic using the `pYAxisNameFontItalic` and `sYAxisNameFontItalic` attributes (set both to `1`), respectively.

* Set the degree of transparencies of the primary and secondary axes' name fonts and backgrounds (between `0` for transparent and `100` for opaque) using the `pYAxisNameFontAlpha` and `sYAxisNameFontAlpha` attributes, respectively.

Refer to the code given below:

```
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
    },

```
The chart will look like as shown below:

**Insert Chart**

## Configure background properties for primary and secondary y-axis names

Use the following attributes to set a semi-transparent background in a chosen color for the primary and secondary y-axis names of a multi-series, combination 2D chart:

* Set the degrees of transparencies of the primary and secondary axes' names (between `0` for transparent and `100` for opaque) using the `pYAxisNameAlpha` and `sYAxisNameAlpha` attributes, respectively.

* Set the background colors for the primary and secondary axes' names in hex codes using the `pYAxisNameBgColor` and `sYAxisNameBgColor` attributes, respectively.

* Set the degrees of transparencies of the primary and secondary axes' name backgrounds (between `0` for transparent and `100` for opaque) using the `pYAxisNameBgAlpha` and `sYAxisNameBgAlpha` attributes, respectively.

Refer to the code given below:

```
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
        "sYAxisNameAlpha": "50",
        "theme": "fint"
    },

```
The chart will look like as shown below:

**Insert Chart**

## Configure the border cosmetic properties for the primary and secondary y-axis names

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

```
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
       
    },

```

The chart will look like as shown below:

**Insert Chart**

