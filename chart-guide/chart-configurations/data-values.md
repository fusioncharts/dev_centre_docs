---
title: Data Values | FusionCharts
description: Data values are plot values. The section talks about configuring text labels, rotation of data values, placement of data values and displaying data values.
heading: Data Values
breadcrumb: [["Home", "/"], ["Data Values"]]
---

Data values are plot values i.e. values of each data plot (line, column, bar, pie) displayed on the chart. 

## Configure text labels instead of numeric data values

Instead of displaying numeric data values, you can use text labels to denote data values for each data item. Specify the text you want to display using the `displayValue` attribute under `data` within the particular data plot. Refer to the code below:

```

{
    "chart": {
        "theme": "fint",
        "caption": "Quarterly Revenue",
        "subcaption": "Last year",
        "xAxisName": "Quarter",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$"
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000",

            "displayValue": "Year's best"
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
            "value": "2120000"
          
        }
    ]
}

 ```

The chart will look like as shown below:

<chart>

## Rotate data values

By default, the data values appear horizontally as shown in the chart below:

<chart>

You can opt to rotate the data values vertically. Set the `rotateValues` to `1` under the `chart` object. Refer to the code below:

``
{
    "chart": {
        ...
        "rotateValues": "1"
    },
 ```

The chart will look like as shown below:

<chart>

## Display data values outside columns

By default, the data values are displayed within the column data plots. Set the `placeValuesInside` attribute to `0` and display the data values outside the column data plots. Refer to the code below:

```
{
    "chart": {
        "...
        "placeDataValues": "0"
    },
 ```

The chart will look like as shown below:

<chart>

## Show/hide data values

By default, all the data values are displayed. Set the `showValues` attribute to `0` under the `chart` object to hide all the data values. Refer to the code below:

```
{
    "chart": {
        "...
        "showValues": "0"
    },
 ```

The chart will look like as shown in  the image below:

<chart>

You can also opt to show/hide specific  data values instead of hiding all of them. Set the `showValue` attribute to `0` under the `data` for that specific data value which you want to hide. This setting overrides the `showValues` setting at the chart object level. 

Refer to the code below:

```
{
    "chart"**:** {
        ...
        "showValues": "0"
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000",
            "showValue": "1"
        },
 ```

### Skip y-axis values

If there is a large number of values to be displayed along the y-axis, you can opt to display every nth y-axis value skipping the rest.

To do so, specify the n-th level using the `yAxisValuesStep` attribute. For  example, a chart showing data for 12 months and set with `yAxisValuesStep: 3` will show labels for January, April, July and October. The rest of the values will be skipped.

This attribute can also assume default values based on the space available in the chart to render y-axis values, and can override the values provided to avoid overlapping of y-axis values.

Refer to the code below:

```
{
    "chart": {
        ...
        "yAxisValuesStep": "3"
    },
     ```

The chart will look like as shown below:

<chart>

## Customize data value properties

You can customize the data value properties in terms of font, border, background, and alpha. 

### Font Properties

To customize the font properties following attributes are used:

* Set the font family for the data values using the `valueFont` attribute. E.g. - `Arial`

* Specify the hex code for the color of the data values using the `valueFontColor` attribute. E.g. - `#00ffaa`.

* Set the size of the font using the `valueFontSize` attribute. 

* Set the `valueFontBold` attribute to `1` to and display the data values as `bold`.

*  Set the `valueFontItalic` attribute to `1` to and display the data values as `italics`

* Set the tramsparency of the data values using the `valueFontAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "placeValuesInside": "0",
        "rotateValues": "0",
        "valueFont": "Arial",
        "valueFontColor": "#6699cc",
        "valueFontSize": "12",
        "valueFontBold": "1",
        "valueFontItalic": "0"
    },

     ```

The chart will look like as shown below:

<chart>

### Customize data value border

To customize the border of the data values the following attributes are used:

* Specify the hex code of the border color using the `valueBorderColor` attribute.

* Set the transparency of the border using the `valueBorderAlpha` attribute.

* Set the thickness of the border using the `valueBorderThickness` attribute.

* Set the radius if the border using the `valueBorderRadius` attribute.

* Set the `valueBorderDashed` attribute to `1` to display the  border as dashed lines.

* Specify the gap between two dashed lines using the `valueBorderDashGap` attribute.

* Set the length of each dash using the `valueBorderDashLen` attribute.

* Set the transparency of the border on hover using the `valueBorderHoverAlpha` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "valueBorderColor": "#666666",
        "valueBorderAlpha": "100",
        "valueBorderPadding": "5",
        "valueBorderRadius": "6",
        "valueBorderThickness": "0.5",
        "valueBorderDashed": "1",
        "valueBorderDashLen": "4",
        "valueBorderDashGap": "2",
        "valueFontSize": "11"
    },

     ```

The chart will look like as shown below:

<chart>

### Customize data value background

To customize the background of the data  values the following attributes are used:

* Specify the hex code for the background color using the `valueBgColor` attribute.

* Set the transparency of the background using the `valueBgAlpha` attribute.

* Set the transparency of the background on hover using the `valueBgHoverAlpha` attribute. 

Refer to the code below:

**INSERT CODE**

The chart will look like as shown below:

<chart>