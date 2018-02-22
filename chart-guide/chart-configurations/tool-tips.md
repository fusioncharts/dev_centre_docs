---
title: Customizing the Tooltips | FusionCharts
description: A tooltip is displayed when the mouse is hovered over a particular data point. This article talk about customizing the tooltip.
heading: Tooltips
breadcrumb: [["Home", "/"], ["Tooltips"]]
---

A tooltip is displayed when the mouse cursor hovers over a particular data point. It denotes valuable information such as:

* It denotes the name and data value in single series charts.

* It denotes name and value/percentage in pie and doughnut charts.

* It denotes a series name, category name, and data value for multi-series and combination charts.

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-1.png)

## Show/Hide Tooltips

By default, the tooltip is displayed. To hide the tool tip set the `showToolTip` attribute to `0`. 

Refer to the code below:

```json
{
    "chart": {
        "showToolTip": "0"
    }
}
```
## Customize Tooltips

To customize the tooltip use the following attributes:

* Specify the hex code for the tooltip background color using the `toolTipBGColor` attribute. Example - #000ffa.

* Specify the hex code for the tooltip border color using the `toolTipBorderColor` attribute. Example - #ffaffa.

* By default, the character used to separate the name and the value within the tooltip is set as `,`. Set a different separator character using the `ToolTipSepChar` attribute. This attribute accepts any string, e.g. `:`.

* Set the `showTooltipShadow` attribute to `1` to display shadow. 

Refer to the code below:

```json
{
    "chart": {
        "toolTipBorderColor": "#FFFFFF",
        "toolTipBgColor": "#666666",
        "toolTipBgAlpha": "80",
        "showToolTipShadow": "1"
    }
}
```

The chart will look as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-2.png)

Click [here](http://jsfiddle.net/fusioncharts/df92k3t5/ "@@open-newtab") to edit the above chart.

## Display Multiline Tooltip Text

By default, a tooltip shows the data item name and value in a single line of text. However, if you want to display more information on the tooltip, you can use the attribute `tooltext` to show the text in multiline format.

Refer to the code below:

```json
{
    "chart": {
    },
    "data": [{
        "tooltext": "Quarter 1{br}Total Sale: $195K{br}Rank: 1"
    }]
}
```

The chart will look as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-3.png)

Click [here](http://jsfiddle.net/fusioncharts/13a8664h/ "@@open-newtab") to edit the above chart.

## Introduction to Macros

FusionCharts Suite XT 3.4 introduces macros to configure dynamic and contextual content in tooltips. A macro is an instruction recorded using a combination of characters for a specific purpose. 

You can use tooltip macros to customize chart labels, data values, display values, etc. as variables, and plain text, to form a completely customized tooltip text. Each chart contains labels, raw values, formatted values, display values, etc., as variables that you use in conjunction with your custom text to form the complete tooltext. 

Tooltips can be configured to include supplementary information about the data plotted on a chart. Macros allow you to automate the inclusion of this information, saving the effort of manual customization.

Keep the following pointers in mind when using macros:

* Macros are case-insensitive.

* A macro which is not applicable will be treated as string.

* To use a macro name as text in tooltip use `""` before the `"$"` sign. Example: to show "$value" in tooltip use "$value" in `tooltext` attribute.

* Tooltext can also be configured from corresponding parent nodes (that is, chart, dataset, etc.).

### How to use Tooltip Macros

To configure tooltip text with tooltip macros, set a custom tooltip using `plotToolText` attribute. The attribute accepts macros, plain text, and HTML tags, as strings to create custom tooltip text for data plots. You can use the following attributes with `plotToolText`:

* Use the `$label` macro to customize the data plot, category, connector, and marker labels.

* Use the `$dataValue` macro to customize the formatted data plot, entity, and marker data values. Alternatively, you can also use the `$value` macro, to customize the unformatted data value.

* Use the `$displayValue` macro to customize the value of the `displayValue` attribute of the `data` and `entity` objects.

Refer to the code below:

```json
{
    "chart": {
        "plotToolText": "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue"
    }
}
```

The chart will look like as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-4.png)

Click [here](http://jsfiddle.net/fusioncharts/j1327y7v/ "@@open-newtab") to edit the above chart.

> In the chart above, if the data plot value is 750000 and you use `$value`, `750000` will be rendered as the value. However, if you use `$dataValue`, then `$750K` will be rendered as the value.

### Other Attributes

The following are some of the FusionCharts attributes that take tooltip macros as values. You can use these to customize tooltip text for the various chart elements.

* Specify the tooltip text using the `trendLineToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for all/individual data plots in a Pareto Chart using the `cumulativePlotTooltext` attribute under the `chart` and the `data` object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the target in the horizontal and vertical bullet graphs using the `targetToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the milestones in Gantt charts using the `milestoneToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the data plots in error charts using the `errorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the horizontal error bars in error scatter charts. The attribute `horizontalErrorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the vertical error bars in error scatter charts using the `verticalErrorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the entities in maps using the `entityToolText` attribute under the `map` (or the `chart`) object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the markers in maps using the `markerToolText` attribute under the `map` (or the `chart`) object. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the connectors in maps and the drag-node chart using the `connectorToolText` attribute under the `map` (or the `chart`) object (for maps) and the `connectors` object (for the drag-node chart). It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the outliers in the Box and Whisker chart using the `outliersTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the mean icon in the Box and Whisker chart using the `meanTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the standard deviation icon in the Box and Whisker chart using the `SDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the quartile deviation icon in the Box and Whisker chart using the `QDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

* Customize tooltip text for the mean deviation icon in the Box and Whisker charts using the `MDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

### Tooltip Macros: Additional Examples

FusionCharts Suite XT includes about a 100 macros that you can use to customize the text and the formatting of tooltips.

### Example 1: Tooltip Macros for Trend Lines

By default, trend lines don't have a tooltip text configured for them. However, you can use tooltip macros to set a custom tooltip text.

Refer to the code below:

```json
{
    "chart": {
        "trendlineToolText": "$displayValue: $startDataValue"
    }
}
```

The chart will look like as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-6.png)

Click [here](http://jsfiddle.net/fusioncharts/67Lzs1fq/ "@@open-newtab") to edit the above chart.

In the above chart, hover the mouse pointer over the trend-lines to see the tooltip text. You can find the description of the `trendlineToolText` attribute, in the Other attributes you can use section. 

Apart from the ones given above, you can use either the `$startDataValue` macro (which represents the formatted starting value of a trend-line/trend-zone) or the `$startValue` macro (which represents the unformatted starting value). If the starting value is 680000 and you use `$startDataValue`, then the chart will show $680k as the data value. On the other hand, if you use `$startValue`, then the chart will show 680000 as the data value.  

Click here for the complete list of tooltip macros supported by FusionCharts Suite XT.

### Example 2: Tooltip Macros for Map Connectors

Use the following attribute and tooltip macros to set a tooltip text for connectors in maps:

* Specify tooltip text for the connectors in maps and the drag-node chart using the `connectorToolText` attribute. It accepts macros, plain text and HTML tags, as strings.

* Specify the label of the source marker (for maps)/node (for the drag-node chart) using the `$fromLabel` macro. 

* Specify the label of the destination marker (for maps)/node (for the drag-node chart) using the `$toLabel` macro.

* Specify the data plot, category, connector, and marker labels using the `$label` macro. 

Refer to the code below:

```json
{
    "chart": {
        "connectorToolText": "<b>From</b>: $fromLabel <br> <b>To</b>: $toLabel <br> <b>Daily shipments (avg)</b>: $label Units"
    }
}
```

The chart will look as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-5.png)

Click [here](http://jsfiddle.net/fusioncharts/0dwyegdw/ "@@open-newtab") to edit the above chart.

In the chart above, you can see that the `connectorToolText` attribute has been used to configure a tooltip for the average shipping volume of a distribution network. The tooltip includes:

* Connector source

* Connector destination

* Average number of shipments made every day for the last quarter, from the source to the destination

Click here for the complete list of tooltip macros supported by FusionCharts Suite XT.|

### Example 3: Tooltip Macros for the Box and Whisker Chart

Create and format the custom tooltip text for data plots using the `plotToolText` attribute. It accepts macros, plain text, and HTML tags, as strings.

Use the following macros to set a tooltip text for data plots in a box and whisker chart:

* Specify the data plot, category, connector, and marker labels using the `$label` macro.

* Specify the maximum value (formatted) of the data plot using the `$maxDataValue` macro, or the maximum value (unformatted) using the `$maxValue` macro. For example, if the maximum value is 66000, use the `$maxDataValue` macro to render it as $66k, or the `$maxValue` macro to render it as 66000.

* Specify the minimum value (formatted) of the data plot using the `$minDataValue` macro, or the minimum value (unformatted) using the `$minValue` macro. For example, if the minimum value is 30000, use the `$minDataValue` macro to render it as $33k, or the `$minValue` macro to render it as 33000.

* Specify the formatted value of the upper quartile of the data plot using the `$Q3` macro, or the unformatted value of the upper quartile of the data plot using the `$unformattedQ3` macro. For example, if the upper quartile value is 60822, use the `$Q3` macro to render it as $60.82K, or the `$unformattedQ3` macro to render it as 60822.

* Specify the formatted value of the lower quartile of the data plot using the `$Q1` macro, or the unformatted value of the lower quartile of the data plot using the `$unformattedQ1` macro. For example, if the upper quartile value is 41475, use the `$Q1` macro to render it as $41.48K, or the `$unformattedQ1` macro to render it as 41475.

* Specify the formatted median value of the data plot using the `$median` macro, or the unformatted median value of the data plot using the `$unformattedMedian` macro. For example, if the median value is 50500, use the `$median` macro to render it as $50.5K, or the `$unformattedMedian` macro to render it as 50500.

* Specify the formatted mean value of the data plot using the `$mean` macro, or the unformatted mean value of the data plot using the `$unformattedMean` macro. For example, if the mean value is 49720, use the `$mean` macro to render it as $49.72K, or the `$unformattedMean` macro to render it as 49720.

* Specify the formatted standard deviation value of the data plot using the `$SD` macro, or the unformatted standard deviation value of the data plot using the `$unformattedSD` macro. For example, if the standard deviation value is 2290, use the `$SD` macro to render it as $2.29K, or the `$unformattedSD` macro to render it as 2290.

* Specify the formatted quartile deviation value of the data plot using the `$QD` macro, or the unformatted quartile deviation value of the data plot using the `$unformattedQD` macro. For example, if the quartile deviation value is 9673, use the `$QD` macro to render it as $9.76K, or the `$unformattedQD` macro to render it as 9673.

* Specify the formatted mean deviation value of the data plot using the `$MD` macro, or the unformatted mean deviation value of the data plot using the `$unformattedMD` macro. For example, if the mean deviation value is 9113, use the `$MD` macro to render it as $9.11K, or the `$unformattedMD` macro to render it as 9113.

Refer to the code below:

```json
{
    "chart": {
        "plotToolText": "$seriesName Teachers-$label  <br> <br> Max value: $maxDataValue <br> Min value: $minDataValue <br> <br> Q3: $Q3 <br> Median: $median <br> Q1: $Q1 <br> <br> Mean: $mean <br> <br> Standard deviation: $SD <br> Quartile Deviation: $QD <br> Mean Deviation: $MD"
    }
}
```

The chart will look as shown below:

![Tooltips]({% site.baseurl %}/images/chart-configurations-tooltip-image-7.png)

Click [here](http://jsfiddle.net/fusioncharts/mgkhxywt/ "@@open-newtab") to edit the above chart.

In the chart shown above, tooltip macros for the box and whisker chart have been used to add the mean, quartile deviation, standard deviation, and mean deviation values to the tooltip text.

> By default, the tooltip text for the data plots in a box and whisker chart includes the following values:

* Minimum value

* Maximum value

* Upper and lower quartile values

* Median

Click here for the complete list of tooltip macros supported by FusionCharts Suite XT.