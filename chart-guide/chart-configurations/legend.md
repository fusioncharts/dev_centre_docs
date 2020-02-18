---
title: Configure Legend | FusionCharts
description: A legend is a chart element that is used to display the series name of each dataset in multi-series/combination charts
heading: Legend
---

A legend is a chart element used to display the series name for each dataset, in case of multi-series or combination charts. Legends are used to correlate a data plot to its series name using its color.

> Legends are not applicable to single series charts.

In the following image, the legend rendered below the x-axis helps identify the data plots corresponding to a series name. Each series is represented by its own icon in the legend.

![Legend](/images/chart-configurations-legend-image-1.png)

## Show/Hide the Legends

To show/hide the legends, set the `showLegend` attribute to 1/0. The default value of this attribute is `1`.

Refer to the code below:

```json
{
  "chart": {
    "showLegend": "1"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/gdu2539p/) to edit the above chart.

In the chart shown above, when you click the legend icon for **Last Year**, all data plots in blue, (showing the quarterly revenue for the last year) are hidden.

## Show/Hide Data Plots via the Legend

With FusionCharts Suite XT, show/hide the data plots belonging to a data series by clicking the corresponding legend icon. The legend interaction can also be disabled using `interactiveLegend` attribute. The default value of this attribute is `1`. Let's check out a sample without the interactive legend.

Refer to the code below:

```json
{
  "chart": {
    "interactiveLegend": "0"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/u2q9Lte5/) to edit the above chart.

## Highlight a Data Series via the Legend

Hover the mouse pointer over a legend text to highlight corresponding data plots in the chart. Whenever you do this, the chart reduces the opacity of the data plots belonging to other data series, making the one you hover on stand out prominently.

To enable this feature, set the `plotHighlightEffect` attribute to `fadeout`.

Refer to the code below:

```json
{
  "chart": {
    "plotHighlightEffect": "fadeout"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/sf0owgb4/) to edit the above chart.

In the chart shown above, when the mouse pointer hovers over the legend text **This Year**, the data plots in blue (corresponding to **Last Year**) fade out, and the data plots in green (corresponding to **This Year**) are highlighted.

### Customize the Highlight Effect

Instead of just reducing the opacity of the data plots that don't correspond to the hovered over legend text, you can customize a different effect.

Define `plotHighlightEffect` attribute in the following format, to customize the highlight effect:

`plotHighlightEffect=effectName|confStr`

Always set `effectName` to `fadeout`. Use `confStr`, a comma-separated list of customization properties for the effect. Use the following attributes to see the difference:

- Specify the hex code for the data plot fill color using the `color` attribute.

- Specify the transparency of the data plots using the `alpha` attribute.

Refer to the code below:

```json
{
  "chart": {
    "plotHighlightEffect": "fadeout|color=#7f7f7f, alpha=60"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/dy42jqc3/) to edit the above chart.

In the above chart, when you hover the mouse pointer over the legend text **This Year**, data plots belonging to the **Last Year** data series are grayed out.

For the above chart, the attribute has been defined as shown below:

`"plotHighlightEffect": "fadeout|color=#7f7f7f, alpha=60"`

Use the following attributes to customize the border while highlight effect is set:

- Specify the hex code for the plot border color using the `borderColor` attribute.

- Specify the transparency of the plot border using the `borderAlpha` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `alpha` (in the configuration string, as shown above).

Refer to the code below:

```json
{
  "chart": {
    "showplotBorder": "1",
    "plotHighlightEffect": "fadeout|borderColor=ff0000, borderAlpha=50"
  }
}
```

{% embed_chart chart-configurations-legend-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/v39dnw63/) to edit the above chart.

Use the following attributes to customize the background of the anchor:

- Specify the hex code for the anchor background color using the `anchorBgColor` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `color` (in the configuration string, as shown above).

- Specify the transparency of the anchor background using the `anchorBgAlpha` attribute.

Refer to the code below:

```json
{
  "chart": {
    "plotHighlightEffect": "fadeout|anchorBgColor=ff0000, anchorBgAlpha=50"
  }
}
```

{% embed_chart chart-configurations-legend-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/kLk72vnz/) to edit the above chart.

The attributes to customize the values of highlight effect are:

- Specify the hex code for the data value background color using the `valueBgColor` attribute.

- Specify the hex code for the data value border color using the `valueBorderColor` attribute.

- Specify the hex code for the data value font color using the `valueFontColor` attribute. If you don't include this attribute into the configuration string, then it takes the value assigned to the attribute `color` (in the configuration string, as shown above).

Refer to the code below:

```json
{
  "chart": {
    "showplotBorder": "1",
    "plotHighlightEffect": "fadeout|alpha=60, valueBgColor=#ff0000, valueBorderColor=#3a4660, valueFontColor=#000000"
  }
}
```

{% embed_chart chart-configurations-legend-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/kj9bofzm/) to edit the above chart.

## Set the Legend Position

Use the following attributes to set legend position:

- Specify the position of the legend using the `legendPosition` attribute. You can set its value to one of the following, to position the legend likewise with respect to the chart - `bottom`, `top`, `top-left`, `top-right`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, or `absolute`.

- If you set the value of `legendPosition` to `absolute`, you also need to set the coordinates for the legend using the attributes `legendXPosition` and `legendYPosition`, both of which accept absolute or percentage values.

- Set the `legendAllowDrag` attribute to 1 to make the legend draggable.

Refer to the code below:

```json
{
  "chart": {
    "legendPosition": "top-right",
    "legendAllowDrag": "1"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/5smv4kg4/) to edit the above chart.

## Set Legend Coordinates

When you set the value of the `legendPosition` attribute to `absolute`, you need to manually set the coordinates of the legend. Use the following attributes to do so:

- Set the value of the X-coordinate of the legend in pixels using the attribute `legendXPosition`. This attribute accepts values between `0` and the width of the chart.

- Set the value of the Y-coordinate of the legend in pixels using the attribute `legendYPosition`. This attribute accepts values between `0` and the height of the chart.

Note that if you set the value of the `legendPosition` attribute to `absolute` but do not specify the values of `legendXPosition` and `legendYPosition`, the values of these attributes are set to `0` by default.

Refer to the code below:

```javascript
{
    "chart": {
        "legendPosition": "absolute",
        "legendXPosition": "700",
        "legendYPosition": "420"
    }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-17.js %}

Click [here](https://jsfiddle.net/fusioncharts/qybh1rdt/) to edit the above chart.

## Configure Legend Icon Size

Specify the legend icon size using the `legendIconScale` attribute. You can control the size of legend icon with values from `1` (100%) to `5` (500%).

Refer to the code below:

```json
{
  "chart": {
    "legendIconScale": "2"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/0ca9wu47/) to edit the above chart.

## Draw a Custom Legend Icon Shape

Use the following attributes to draw a custom legend icon shape:

- Set the `drawCustomLegendIcon` attribute to `1` to enable drawing of a custom legend icon. All other legend icon customization attributes work only if you enable this feature.

Refer to the code below:

```json
{
  "chart": {
    "drawCustomLegend": "1"
  }
}
```

- By default, the background color of the icons are same as that of the plot colors. Specify the hex color code for the background of the legend icon using the `legendIconBgColor` attribute.

- Set the legend icon transparency using the `legendIconAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque; default).

- Set the legend icon background transparency using the `legendIconBgAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque; default).

- Set the thickness of the legend icon border using the `legendIconBorderThickness` attribute.

- Specify the hex color code for the border of the legend icon using the `legendIconBorderColor` attribute. By default, it takes the data plot fill color.

Refer to the code below:

```json
{
    "chart": {
        "legendIconBgColor": "#ff0000"
        "legendIconAlpha": "50",
        "legendIconBgAlpha": "30",
        "legendIconBorderColor": "#123456",
        "legendIconBorderThickness": "3"
    }
}
```

- Set the number of sides for the legend icon using the `legendIconSides` attribute.

- Set the starting angle for drawing the legend icon using the `legendIconStartAngle` attribute.

Refer to the code below:

```json
{
  "chart": {
    "legendIconSides": "5",
    "legendIconStartAngle": "60"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/x8182enw/) to edit the above chart.

## Customize Legend Scroll Bar

If you have multiple data items in a multi-series chart, the legend automatically displays a scroll bar. Use the `legendScrollBgColor` attribute to specify the background color of the scroll bar.

Refer to the code below:

```json
{
  "chart": {
    "legendScrollBgColor": "#f0000f"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/8qzuqa1m/) to edit the above chart.

## Reverse Legend Order

Set the value of `reverseLegend` attribute to `1`, to reverse the order of datasets in the legend.

Refer to the code below:

```json
{
  "chart": {
    "reverseLegend": "1"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lgq5tcko/) to edit the above chart.

## Hide Data Series upon Loading

Set the value of `initiallyHidden`attribute to `1`, to hide the data plots of a data series initially, on chart load. The plots will become visible when you click on the name of the series in the legend. This attribute works from the `dataset` object level in JSON data, and by default takes the value of `0`, thereby displaying data plots of every series when you load the chart.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "initiallyHidden": "1"
    }]
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/vhydr4f9/) to edit the above chart.

## Customize Legend Appearance

Use the following attributes used to customize legend appearance:

- Specify the background color for the legend using the `legendBgColor` attribute, which accepts hex codes as values.

- Specify the background transparency for the legend using the `legendBgAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
  "chart": {
    "legendBgColor": "#CCCCCC",
    "legendBgAlpha": "20"
  }
}
```

- Specify the border color for the legend using the `legendBorderColor` attribute, which accepts hex codes as values.

- Specify the border thickness for the legend in pixels, using the `legendBorderThickness` attribute.

- Specify the border transparency for the legend using the `legendBorderAlpha` attribute. It takes values between `0` (transparent) and `100` (opaque).

Refer to the code below:

```json
{
  "chart": {
    "legendBorderColor": "#666666",
    "legendBorderThickness": "1",
    "legendBorderAlpha": "40"
  }
}
```

- Set the value of the `legendShadow` attribute to `1`, to display legend shadow.

- If you have too many items in the legend, it will automatically display a scroll bar. Specify the background color of the scroll bar using the `legendScrollBgColor` attribute, which accepts hex codes.

- Specify the horizontal alignment of the legend caption with the `legendCaptionAlignment` attribute, which accepts the values `left`, `center`, and `right`.

Refer to the code below:

```json
{
  "chart": {
    "legendCaptionAlignment": "center",
    "legendScrollBgColor": "#ffffff",
    "legendShadow": "1"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/Laqyo45v/) to edit the above chart.

## Customize Legend Font Cosmetics

Use the following attributes to customize the legend font cosmetics:

- Specify the legend item font using the `legendItemFont` attribute.

- Specify the legend item font size using the `legendItemFontSize` attribute, which accepts values between `0` and `72`.

- Specify the legend item font color using the `legendItemFontColor` attribute, which accepts hex codes as values.

- Display legend keys in bold, by setting the value of `legendItemFontBold` attribute to `1`.

Refer to the code below:

```json
{
  "chart": {
    "legendItemFontBold": "0",
    "legendItemFont": "Arial",
    "legendItemFontSize": "11",
    "legendItemFontColor": "#666666"
  }
}
```

- Specify the legend item font color on hover, using the `legendItemHoverFontColor` attribute, which accepts hex codes as values.

Refer to the code below:

```json
{
  "chart": {
    "legendItemHoverFontColor": "#000000"
  }
}
```

- Specify the legend caption value using the `legendCaption` attribute, which accepts strings.

- Specify the legend caption font using the `legendCaptionFont` attribute.

- Specify the legend caption font size using the `legendCaptionFontSize` attribute, which accepts values between `0` and `72`.

- Specify the hex color code for the caption font of the legend using the `legendCaptionFontColor` attribute.

- Set the `legendCaptionBold` attribute to `1` to make the caption appear bold.

Refer to the code below:

```json
{
  "chart": {
    "legendCaption": "Which year?",
    "legendCaptionBold": "1",
    "legendCaptionFont": "Arial",
    "legendCaptionFontSize": "14",
    "legendCaptionFontColor": "#333333"
  }
}
```

The chart will look as shown below:

{% embed_chart chart-configurations-legend-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/zyw5z2za/) to edit the above chart.
