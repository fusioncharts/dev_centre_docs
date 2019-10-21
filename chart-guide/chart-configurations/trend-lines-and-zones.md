---
title: Trend Lines and Zones | FusionCharts
description: Trend lines are customisable reference horizontal or vertical lines which aid in interpretation of data. Section talks about trend lines and zones
heading: Trend Lines and Zones
---

Trend lines are reference horizontal or vertical lines which help to interpret data. They are customizable and can be used to set context or define limits and targets. For example, while plotting quarterly sales of a company, you might want to use a trendline to depict the target sales.

> In the FusionCharts Suite XT, you can only use trendlines to add context to data, To show trends for data points, use regression lines.

## Add Tool-text to a Trend Line

You can specify a custom tool-text which will be rendered when the mouse pointer hovers over the trend line. To do so, specify the text you want to display using the `toolText` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
            ...
            "tooltext": "Quarterly sales target was $startDataValue",
        }]
    }]
}
```

The chart will look like as shown below:

![Trendlines](/images/chart-configurations-trendlines-image-1.png)

Click [here](http://jsfiddle.net/fusioncharts/qfeojqqq/) to edit the above chart.

## Add Trend Zones

Trend zones are similar to trend lines, except that they mark out an entire zone rather than just a line. Use the following attributes to create trend zones:

* Set the `isTrendZone` attribute to `1`, to render a trend zone on a chart.

* Specify the data value of the starting point of a trend zone using the `startValue` attribute.

* Specify the data value of the end point of a trend zone using the `endValue` attribute. If you include this attribute in the code and set the `IsTrendZone` attribute to `0`, the trend-line will be rendered as a slanted line, starting at the `startValue` on the primary y-axis and ending at `endValue` on the secondary y-axis (which can be an imaginary secondary y-axis).

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
    	...
        "isTrendZone": "1",
        "startvalue": "175000",
        "endValue": "150000"
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lwhvy97s/) to edit the above chart.

## Customize Trend Lines and Trend Zones

Use the following attributes to customize trend lines and trend zones:

* Specify the hex code for the color of the trend-line/zone using the `color` attribute.

* Specify the thickness of the trend-line(in pixels) using the `thickness` attribute.

* Specify the transparency of trend line/zone using the `alpha` attribute, which accepts values between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
            ...
            "color": "#8cbb2c",
            "thickness": "4",
            "alpha": "60",
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/0x1zrh55/) to edit the above chart.

## Customize the Trend Line Display Value Text

Use the attributes given below to customize the trend line display value text:

* Set the font family for the trend-line display values using the `trendValueFont` attribute.

* Set the font size for the trend-line display values using the `trendValueFontSize` attribute.

* Set the value of `trendValueFontBold` attribute to `1` to make trend-line display values appear in bold.

* Set the value of `trendValueFontItalic` attribute to `1` to make trend-line display values appear in italics.

* Set the transparency for the trend-line display values using the `trendValueAlpha` attribute, which accepts values between `0` (transparent) and `100` (opaque; default). 

```json
{
    "chart": {
        "trendValueFont": "Arial",
        "trendValueFontSize": "12",
        "trendValueFontBold": "1",
        "trendValueFontItalic": "1",
        "trendValueAlpha": "80"
    }
}
```

{% embed_chart chart-configurations-trend-lines-and-zones-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/kmpe918g/) to edit the above chart.

Use the attributes given below to customize the background of the trend line value text:

* Set the color for the background of the trend-line display values using the `trendValueBgColor` attribute, which accepts hex codes of colors.

* Set the transparency for the background of trend-line display values using the `trendValueBgAlpha` attribute, which accepts values between `0` (transparent) and `100` (opaque; default).

```json
{
    "chart": {
        "trendValueBgColor": "000000",
        "trendValueBgAlpha": "70"
    }
}
```

{% embed_chart chart-configurations-trend-lines-and-zones-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/vvrduaek/) to edit the above chart.

Use the attributes given below to customize the border of trend line value text:

* Set the color for the border around the trend-line display values using the `trendValueBorderColor` attribute, which accepts hex codes of colors.

* Set the transparency for the border around the trend-line display values using the `trendValueBorderAlpha` attribute, which accepts values between `0` (transparent) and `100` (opaque; default).

* Set the padding for the border around the trend-line display values using the `trendValueBorderPadding` attribute.

* Set the radius for the border around the trend-line display values using the `trendValueBorderRadius` attribute.

* Set the thickness of the border around the trend-line display values using the `trendValueBorderThickness` attribute.

```json
{
    "chart": {
        "trendValueBorderColor": "ff0000",
        "trendValueBorderAlpha": "80",
        "trendValueBorderPadding": "4",
        "trendValueBorderRadius": "5",
        "trendValueBorderThickness": "2"
    }
}
```

{% embed_chart chart-configurations-trend-lines-and-zones-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/oxmchda6/) to edit the above chart.

Use the attributes given below to customize the dashed border of trend line value text:

* Specify whether the border around the trend-line display value will be drawn as a dashed line by setting the value of `trendValueBorderDashed` attribute to `1`.

* Set the length of each dash, if the border around the trend-line display value is drawn as a dashed line, using the `trendValueBorderDashLen` attribute.

* Set the gap between each dash, if the border around the trend-line display value is drawn as a dashed line, using the `trendValueBorderDashGap` attribute.

Refer to the code below:

```json
{
    "chart": {
        "trendValueBorderDashed": "1",
        "trendValueBorderDashLen": "#123456",
        "trendValueBorderDashGap": "1"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/stht1u4c/) to edit the above chart.

## Add Dashed Trend Lines

Use the attributes given below to render a dashed trend line instead of the continuous line:

* Set the value of `dashed` attribute to `1` to make trend lines dashed.

* Set the length of each dash of a trend line(in pixels) using the `dashLen` attribute.

* Set the gap between two consecutive dashes in trend lines (in pixels) using the `dashGap` attribute.

```json
{
    "chart":{
        ...
    },
    "trendlines": [{
        "line": [{
            "dashed": "1",
            "dashLen": "4",
            "dashGap": "2"
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/mepm69sL/) to edit the above chart.

## Add Slanted Trend Lines

Use the following attributes to render a slanted trend line:

* Specify the starting point data-value for the slanted trend line (to be plotted on the Y-axis on the left) using the `startValue` attribute. 

* Specify the ending point data-value for the slanted trend line (to be plotted on the imaginary Y-axis on the right) using the `endValue` attribute.

Refer to the code below:

```json
{
    "chart":{
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
            "startvalue":400",
            "endValue":000"
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/3r9r9bsr/) to edit the above chart.

## Configure the Trend Line Label

Show the trend line label to the right of the chart canvas by setting the value of `valueOnRight` attribute to `1`.

Refer to the code below:

```json
{
    "chart":{
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
            "valueOnRight": "1"
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/0u6eLpzc/) to edit the above chart.

## Add Trend Lines for a Dual Y-axis Chart

Since a dual y-axis chart has 2 y-axes, you need to define both the trend line and the axis on which the line will be defined. Set the value of the `parentYAxis` attribute of the `line` object to `S`, to show the trend line on the secondary axis.

Refer to the code below:

```json
{
    "chart":{
        ...
    },
    "data": [{
        ...
    }],
    "trendlines": [{
        "line": [{
            "parentYAxis": "S"
        }]
    }]
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-trend-lines-and-zones-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/Loxc6eak/) to edit the above chart.