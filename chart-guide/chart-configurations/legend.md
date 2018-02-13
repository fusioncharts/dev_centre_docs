---
title: Configure Legend | FusionCharts
description: A legend is a chart element that is used to display the series name of each dataset in multi-series/combination charts
heading: Legend
breadcrumb: [["Home", "/"], ["Legends"]]
---

A legend is a chart element used to display the series name for each dataset, in case of multi-series or combination charts. Legends are used to correlate a data plot to its series name using its color.

> Legends are not applicable to single series charts. 

In the following image, the legend rendered below the x-axis helps identify the data plots corresponding to a series name. Each series is represented by its own icon in the legend.

![Legend]({% site.baseurl %}/images/chart-configurations-legend-image-1.png)

## Show/hide the legends

To show/hide the legends, set the `showLegend` attribute to 1/0. The default value of this attribute is `1`.

Refer to the code below:

```
{
    "chart": {
        ...
        "showLegend": "1"
    }
...
}

 ```
The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/gdu2539p/) to edit the above chart.

In the chart shown above, when you click the legend icon for **Last Year**, all data plots in blue, (showing the quarterly revenue for the last year) are hidden.

## Show/hide data plots via the legend

With FusionCharts Suite XT, show/hide the data plots belonging to a data series by clicking the corresponding legend icon. The legend interaction can also be disabled using `interactiveLegend` attribute. The default value of this attribute is `1`. Let's check out a sample without interactive legend.

Refer to the code below:

```
{
    "chart": {
        ...
        "interactiveLegend": "0"
    }
...
}
```
The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/u2q9Lte5/) to edit the above chart.

## Highlight a data series via the legend

Hover the mouse pointer over a legend text to highlight corresponding data plots in the chart. Whenever you do this, the chart reduces the opacity of the data plots belonging to other data series, making the one you clicked on stand out prominently. 

To enable this feature, set the `plotHighlightEffect` attribute to `fadeout` whenever the mouse pointer is hovered over a data plot.

Refer to the code below:

{
    "chart": {
        ...
        "plotHighlightEffect": "fadeout"
    }
...
}

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/sf0owgb4/) to edit the above chart.

In the chart shown above, when the mouse pointer is hovered over the legend text **This Year**, the data plots in blue (corresponding to **Last Year**) fade out and the data plots in green (corresponding to **This Year**) are highlighted.

### Customize the highlight effect

Instead of just reducing the opacity of the data plots that don't correspond to the hovered over legend text, you can customize a different effect.

Define `plotHighlightEffect` attribute in the following format, to customize the highlight effect:

`plotHighlightEffect=effectName|confStr`

Always set `effectName` to `fadeout`. Use `confStr`, a comma-separated list of customization properties for the effect.

Refer to the code below:

```
{
    "chart": {
        ...
        "plotHighlightEffect": "fadeout|color=#7f7f7f, alpha=60",
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/v39dnw63/) to edit the above chart.

In the above chart, when you hover the mouse pointer over the legend text **This Year**, data plots belonging to the **Last Year** data series are grayed out.

For the above chart, the attribute has been defined as shown below:

`"plotHighlightEffect": "fadeout|color=#7f7f7f, alpha=60"`

Use the following attributes to customize the highlight effect:

* Specify the hex code for the data plot fill color using the `color` attribute.

* Specify the transparency of the data plots using the `alpha` attribute.

* Specify the hex code for the plot border color using the `borderColor` attribute.

* Specify the transparency of the plot border using the `borderAlpha` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `alpha` (in the configuration string, as shown above).

* Specify the hex code for the anchor background color using the `anchorBgColor` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `color` (in the configuration string, as shown above).

* Specify the transparency of the anchor background using the `anchorBgAlpha` attribute. 

* Specify the hex code for the data value background color using the `valueBgColor` attribute.

* Specify the hex code for the data value border color using the `valueBorderColor` attribute.

* Specify the hex code for the data value font color using the `valueFontColor` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `color` (in the configuration string, as shown above).

## Set the legend position

Use the following attributes to set legend position:

* Specify the position of the legend using the `legendPosition` attribute. You can either set it below the chart for value `bottom` or to the right of the chart for value `right`.

* Set the `legendAllowDrag` attribute to `1` to make the legend draggable.

Refer to the code below:

```
{
    "chart": {
        ...
        "legendPosition": "right",
        "legendAllowDrag": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/5smv4kg4/) to edit the above chart.

## Configure legend icon size

Specify the legend icon size using the `legendIconScale` attribute. You can control the size of legend icon with values from `1` (100%) to `5` (500%).

Refer to the code below:

```
{
    "chart": {
        ...
        "legendIconScale": "2"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/0ca9wu47/) to edit the above chart.

## Draw a custom legend icon shape

Use the following attributes to draw a custom legend icon shape:

* Set the `drawCustomLegendIcon` attribute to `1` to enable drawing of a custom legend icon. All other legend icon customization attributes work only if you enable this feature.

* Specify the hex color code for the border of the legend icon using the `legendIconBorderColor` attribute. By default, it takes the data plot fill color.

* Specify the hex color code for the background of the legend icon using the `legendIconBgColor` attribute. 

* Set the legend icon transparency using the `legendIconAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque; default).

* Set the legend icon background transparency using the `legendIconBgAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque; default). 

* Set the number of sides for the legend icon using the `legendIconBgAlpha` attribute. 

* Set the thickness of the legend icon border using the `legendIconBorderThickness` attribute. 

* Set the starting angle for drawing the legend icon using the `legendIconStartAngle` attribute. 

Refer to the code below:

```
{
    "chart": {
        ...
        "legendBgAlpha": "0",
        "legendBorderAlpha": "0",
        "legendShadow": "0",
        "legendItemFontSize": "10",
        "legendItemFontColor": "#666666",
        "drawCustomLegendIcon": "1",
        "legendIconAlpha": "50",
        "legendIconBorderColor": "#123456",
        "legendIconBorderThickness": "3",
        "legendIconSides": "5",
        "legendIconStartAngle": "60"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/x8182enw/) to edit the above chart.

## Customize legend scroll bar

If you have multiple data items in a multi-series chart, the legend automatically displays a scroll bar. Use the following attributes to customize cosmetic properties of the scroll bar:

* Specify the background color of the scroll bar using the `legendScrollBgColor`attribute, which accepts hex codes as values.

* Specify the color of the scroll bar using the `legendScrollBarColor`attribute, which accepts hex codes as values.

Refer to the code below:

```
{
    "chart": {
        ...
        "legendScrollBgColor": "#cccccc",
        "legendScrollBarColor": "#999999"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/8qzuqa1m/) to edit the above chart.

## Reverse legend order

Set the value of `reverseLegend` attribute to `1`, to reverse the order of datasets in the legend. 

Refer to the code below:

```
{
    "chart": {
        ...
        "reverseLegend": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lgq5tcko/) to edit the above chart.

## Hide data series upon loading

Set the value of `initiallyHidden`attribute to `1`, to hide the data plots of a data series initially, on chart load. The plots will become visible when you click on the name of the series in the legend. This attribute works from the `dataset` object level in JSON data, and by default takes the value of `0`, thereby displaying data plots of every series when you load the chart. 

Refer to the code below:

```
"dataset": [
        {
            ...
            "initiallyHidden": "1",

        },

```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/vhydr4f9/) to edit the above chart.

## Customize legend appearance

Use the following attributes used to customize legend appearance:

* Specify the background color for the legend using the `legendBgColor` attribute, which accepts hex codes as values.

* Specify the background transparency for the legend using the `legendBgAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque).

* Specify the border color for the legend using the `legendBorderColor` attribute, which accepts hex codes as values.

* Specify the border thickness for the legend in pixels, using the `legendBorderThickness` attribute.

* Specify the border transparency for the legend using the `legendBorderAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque).

* Set the value of the `legendShadow` attribute to `1`, to display legend shadow. 

* If you have too many items on the legend, it will automatically display a scroll bar. Specify the background color of the scroll bar using the `legendScrollBgColor` attribute, which accepts hex codes.

* Specify the horizontal alignment of the legend caption with the `legendCaptionAlignment` attribute, which accepts the values `left`, `center`, and `right`.

Refer to the code below:

```
{
    "chart": {
        "legendBgColor": "#CCCCCC",
        "legendBgAlpha": "20",
        "legendBorderColor": "#666666",
        "legendBorderThickness": "1",
        "legendBorderAlpha": "40",
        "legendCaptionAlignment": "center",
        "legendScrollBgColor": "#ffffff",
        "legendShadow": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/Laqyo45v/) to edit the above chart.

## Customize legend font cosmetics

Use the following attributes to customize the legend font cosmetics:

* Specify the legend item font using the `legendItemFont` attribute.

* Specify the legend item font size using the `legendItemFontSize` attribute, which accepts values between `0` and `72`.

* Specify the legend item font color using the `legendItemFontColor` attribute, which accepts hex codes as values.

* Display legend keys in bold, by setting the value of `legendItemFontBold` attribute to `1`.

* Specify the legend item font color on hover, using the `legendItemHoverFontColor` attribute, which accepts hex codes as values.

* Specify the legend caption value using the `legendCaption` attribute, which accepts strings.

* Specify the legend caption font using the `legendCaptionFont` attribute.

* Specify the legend caption font size using the `legendCaptionFontSize` attribute, which accepts values between `0` and `72`.

* Display legend captions in bold, by setting the value of `legendItemFontBold` attribute to `1`.


Refer to the code below:

```
{
    "chart"**:** {
        ...
        "legendPosition": "right",
        "legendCaption": "Which year?",
        "legendCaptionBold": "1",
        "legendCaptionFont": "Arial",
        "legendCaptionFontSize": "14",
        "legendCaptionFontColor": "#333333",
        "legendItemFontBold": "0",
        "legendItemFont": "Arial",
        "legendItemFontSize": "11",
        "legendItemFontColor": "#666666",
        "legendItemHoverFontColor": "#000000", 
        "legendItemHiddenColor": "#e8e8e8"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/zyw5z2za/) to edit the above chart.