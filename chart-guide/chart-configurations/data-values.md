---
title: Data Values | FusionCharts
description: Data values are plot values. The section talks about configuring text labels, rotation of data values, placement of data values and displaying data values.
heading: Data Values
breadcrumb: [["Home", "/"], ["Data Values"]]
---

Data values are plot values i.e. values of each data plot (line, column, bar, pie) displayed on the chart. 

![Data Values]({% site.baseurl %}/images/chart-configurations-data-values-image-1.png)

## Configure text labels instead of numeric data values

Instead of displaying numeric data values, you can use text labels to denote data values for each data item. Specify the text you want to display using the `displayValue` attribute under `data` within the particular data plot. Refer to the code below:

```
{
    "chart": {
        ...
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000"
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
            "value": "2120000",
            //Custom display string
            "displayValue": "Year's best"
        }
    ]
}

```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/kzqrpah6/ "@@open-newtab") to edit the above chart.

## Rotate data values

By default, the data values appear vertically as shown in the chart below:

{% embed_chart chart-configurations-data-values-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/7stgpskq/ "@@open-newtab") to edit the above chart.

You can opt to rotate the data values horizontally. Set the `rotateValues` to `0` under the `chart` object. The default value of this attribute is `1`.

Refer to the code below:

```
{
    "chart": {
        ...
        "rotateValues": "0"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/c8co0Lgv/ "@@open-newtab") to edit the above chart.

## Display data values outside columns

By default, the data values are displayed within the column data plots. Set the `placeValuesInside` attribute to `0` and display the data values outside the column data plots. Refer to the code below:

```
{
    "chart": {
        "...
        "placeValuesInside": "0"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/hpf7h7wr/ "@@open-newtab") to edit the above chart.

## Show/hide data values

By default, all the data values are displayed. Set the `showValues` attribute to `0` under the `chart` object to hide all the data values. Refer to the code below:

```
{
    "chart": {
        "...
        "showValues": "0"
    }
...
}

```

The chart will look like as shown in  the image below:

{% embed_chart chart-configurations-data-values-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/uezpdfff/ "@@open-newtab") to edit the above chart.

You can also opt to show/hide specific  data values instead of hiding all of them. Set the `showValue` attribute to `0` under the `data` for that specific data value which you want to hide. This setting overrides the `showValues` setting at the `chart` object level. 

Refer to the code below:

```
{
    "chart": {
        ...
        "showValues": "0"
    },
    "data": [
        {
            "label": "Q1",
            "value": "1950000",
            "showValue": "1"
        }
    ]
}

```

The chart looks like as shown below:

{% embed_chart chart-configurations-data-values-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/gs43rmof/ "@@open-newtab") to edit the above chart.

### Skip y-axis values

If there is a large number of values to be displayed along the y-axis, you can opt to display every nth y-axis value skipping the rest.

To do so, specify the n-th level using the `yAxisValuesStep` attribute. For  example, if you set the value as `2`, the y-axis will display every 2nd value starting from the minimum value. 

This attribute can also assume default values based on the space available in the chart to render y-axis values, and can override the values provided to avoid overlapping of y-axis values.

Refer to the code below:

```
{
    "chart": {
        ...
        "yAxisValuesStep": "2"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ekseaedo/ "@@open-newtab") to edit the above chart.

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
        "valueFontItalic": "0",
        "valueFontAlpha": "90"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/e8a91fty/ "@@open-newtab") to edit the above chart.

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
        "valueBorderDashGap": "2"
    }
...
}

```

The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/k8u7ront/ "@@open-newtab") to edit the above chart.

### Customize data value background

To customize the background of the data  values the following attributes are used:

* Specify the hex code for the background color using the `valueBgColor` attribute.

* Set the transparency of the background using the `valueBgAlpha` attribute.

* Set the transparency of the background on hover using the `valueBgHoverAlpha` attribute. 

Refer to the code below:

```
{
    "chart": {
        ...
        "valueBgColor": "#666666",
        "valueBgAlpha": "100",
        "valueBgHoverAlpha": "5"
    }
...
}

```
The chart will look like as shown below:

{% embed_chart chart-configurations-data-values-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/71x4njh2/ "@@open-newtab") to edit the above chart.