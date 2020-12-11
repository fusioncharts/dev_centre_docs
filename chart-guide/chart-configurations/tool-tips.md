---
title: Customizing the Tooltips | FusionCharts
description: A tooltip is displayed when the mouse is hovered over a particular data point. This article talk about customizing the tooltip.
heading: Tooltips
---

A tooltip is displayed when the mouse cursor hovers over a particular data point. It denotes valuable information such as:

- Name and data value in single series charts.

- Name and value/percentage in pie and doughnut charts.

- A series name, category name, and data value for multi-series and combination charts.

![Tooltips](/images/chart-configurations-tooltip-image-1.png)

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

- Specify the hex code for the tooltip background color using the `toolTipBGColor` attribute. Example - #efefef.

- Specify the hex code for the tooltip border color using the `toolTipBorderColor` attribute. Example - #666666.

- By default, the character used to separate the name and the value within the tooltip is set as `,`. Set a different separator character using the `ToolTipSepChar` attribute. This attribute accepts any string, e.g. `:`.

- Set the `showTooltipShadow` attribute to `1` to display shadow.

Refer to the code below:

```json
{
  "chart": {
    "toolTipBorderColor": "#666666",
    "toolTipBgColor": "#efefef",
    "toolTipBgAlpha": "80",
    "showToolTipShadow": "1"
  }
}
```

The chart will look as shown below:

![Tooltips](/images/chart-configurations-tooltip-image-2.png)

Click [here](http://jsfiddle.net/fusioncharts/df92k3t5/) to edit the above chart.

## Display Multiline Tooltip Text

By default, a tooltip shows the data item name and value in a single line of text. However, if you want to display more information on the tooltip, you can use the attribute `tooltext` to show the text in multiline format.

Refer to the code below:

```json
{
  "chart": {},
  "data": [
    {
      "tooltext": "Quarter 1{br}Total Sale: $195K{br}Rank: 1"
    }
  ]
}
```

The chart will look as shown below:

![Tooltips](/images/chart-configurations-tooltip-image-3.png)

Click [here](http://jsfiddle.net/fusioncharts/13a8664h/) to edit the above chart.

## Introduction to Macros

FusionCharts Suite XT 3.4 introduces macros to configure dynamic and contextual content in tooltips. A macro is an instruction recorded using a combination of characters for a specific purpose.

You can use tooltip macros to customize chart labels, data values, display values, etc. as variables, and plain text, to form a completely customized tooltip text. Each chart contains labels, raw values, formatted values, display values, etc., as variables that you use in conjunction with your custom text to form the complete tooltext.

Tooltips can be configured to include supplementary information about the data plotted on a chart. Macros allow you to automate the inclusion of this information, saving the effort of manual customization.

Keep the following pointers in mind when using macros:

- Macros are case-insensitive.

- A macro which is not applicable will be treated as string.

- To use a macro name as text in tooltip use `""` before the `"$"` sign. Example: to show "$value" in tooltip use "$value" in `tooltext` attribute.

- Tooltext can also be configured from corresponding parent nodes (that is, chart, dataset, etc.).

### How to use Tooltip Macros

To configure tooltip text with tooltip macros, set a custom tooltip using `plotToolText` attribute. The attribute accepts macros, plain text, and HTML tags, as strings to create custom tooltip text for data plots. You can use the following attributes with `plotToolText`:

- Use the `$label` macro to customize the data plot, category, connector, and marker labels.

- Use the `$dataValue` macro to customize the formatted data plot, entity, and marker data values. Alternatively, you can also use the `$value` macro, to customize the unformatted data value.

- Use the `$displayValue` macro to customize the value of the `displayValue` attribute of the `data` and `entity` objects.

Refer to the code below:

```json
{
  "chart": {
    "plotToolText": "Store location: $label <br> Sales (YTD): $dataValue <br> $displayValue"
  }
}
```

The chart will look like as shown below:

![Tooltips](/images/chart-configurations-tooltip-image-4.png)

Click [here](http://jsfiddle.net/fusioncharts/j1327y7v/) to edit the above chart.

> In the chart above, if the data plot value is 750000 and you use `$value`, `750000` will be rendered as the value. However, if you use `$dataValue`, then `$750K` will be rendered as the value.

### Other Attributes

The following are some of the FusionCharts attributes that take tooltip macros as values. You can use these to customize tooltip text for the various chart elements.

- Specify the tooltip text using the `trendLineToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for all/individual data plots in a Pareto Chart using the `cumulativePlotTooltext` attribute under the `chart` and the `data` object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the target in the horizontal and vertical bullet graphs using the `targetToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the milestones in Gantt charts using the `milestoneToolText` attribute under the `chart` object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the data plots in error charts using the `errorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the horizontal error bars in error scatter charts. The attribute `horizontalErrorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the vertical error bars in error scatter charts using the `verticalErrorPlotToolText` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the entities in maps using the `entityToolText` attribute under the `map` (or the `chart`) object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the markers in maps using the `markerToolText` attribute under the `map` (or the `chart`) object. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the connectors in maps and the drag-node chart using the `connectorToolText` attribute under the `map` (or the `chart`) object (for maps) and the `connectors` object (for the drag-node chart). It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the outliers in the Box and Whisker chart using the `outliersTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the mean icon in the Box and Whisker chart using the `meanTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the standard deviation icon in the Box and Whisker chart using the `SDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the quartile deviation icon in the Box and Whisker chart using the `QDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

- Customize tooltip text for the mean deviation icon in the Box and Whisker charts using the `MDTooltext` attribute under the `dataset` and `data` objects. It accepts macros, plain text, and HTML tags, as strings.

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

![Tooltips](/images/chart-configurations-tooltip-image-5.png)

Click [here](http://jsfiddle.net/fusioncharts/67Lzs1fq/) to edit the above chart.

In the above chart, hover the mouse pointer over the trend-lines to see the tooltip text. You can find the description of the `trendlineToolText` attribute, in the Other attributes you can use section.

Apart from the ones given above, you can use either the `$startDataValue` macro (which represents the formatted starting value of a trend-line/trend-zone) or the `$startValue` macro (which represents the unformatted starting value). If the starting value is 680000 and you use `$startDataValue`, then the chart will show \$680k as the data value. On the other hand, if you use `$startValue`, then the chart will show 680000 as the data value.

Click [here](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros) for the complete list of tooltip macros supported by FusionCharts Suite XT.

### Example 2: Tooltip Macros for Map Connectors

Use the following attribute and tooltip macros to set a tooltip text for connectors in maps:

- Specify tooltip text for the connectors in maps and the drag-node chart using the `connectorToolText` attribute. It accepts macros, plain text and HTML tags, as strings.

- Specify the label of the source marker (for maps)/node (for the drag-node chart) using the `$fromLabel` macro.

- Specify the label of the destination marker (for maps)/node (for the drag-node chart) using the `$toLabel` macro.

- Specify the data plot, category, connector, and marker labels using the `$label` macro.

Refer to the code below:

```json
{
  "chart": {
    "connectorToolText": "<b>From</b>: $fromLabel <br> <b>To</b>: $toLabel <br> <b>Daily shipments (avg)</b>: $label Units"
  }
}
```

The chart will look as shown below:

![Tooltips](/images/chart-configurations-tooltip-image-6.png)

Click [here](http://jsfiddle.net/fusioncharts/0dwyegdw/) to edit the above chart.

In the chart above, you can see that the `connectorToolText` attribute has been used to configure a tooltip for the average shipping volume of a distribution network. The tooltip includes:

- Connector source

- Connector destination

- Average number of shipments made every day for the last quarter, from the source to the destination

### Example 3: Tooltip Macros for the Box and Whisker Chart

Create and format the custom tooltip text for data plots using the `plotToolText` attribute. It accepts macros, plain text, and HTML tags, as strings.

Use the following macros to set a tooltip text for data plots in a box and whisker chart:

- Specify the data plot, category, connector, and marker labels using the `$label` macro.

- Specify the maximum value (formatted) of the data plot using the `$maxDataValue` macro, or the maximum value (unformatted) using the `$maxValue` macro. For example, if the maximum value is 66000, use the `$maxDataValue` macro to render it as \$66k, or the `$maxValue` macro to render it as 66000.

- Specify the minimum value (formatted) of the data plot using the `$minDataValue` macro, or the minimum value (unformatted) using the `$minValue` macro. For example, if the minimum value is 30000, use the `$minDataValue` macro to render it as \$33k, or the `$minValue` macro to render it as 33000.

- Specify the formatted value of the upper quartile of the data plot using the `$Q3` macro, or the unformatted value of the upper quartile of the data plot using the `$unformattedQ3` macro. For example, if the upper quartile value is 60822, use the `$Q3` macro to render it as \$60.82K, or the `$unformattedQ3` macro to render it as 60822.

- Specify the formatted value of the lower quartile of the data plot using the `$Q1` macro, or the unformatted value of the lower quartile of the data plot using the `$unformattedQ1` macro. For example, if the upper quartile value is 41475, use the `$Q1` macro to render it as \$41.48K, or the `$unformattedQ1` macro to render it as 41475.

- Specify the formatted median value of the data plot using the `$median` macro, or the unformatted median value of the data plot using the `$unformattedMedian` macro. For example, if the median value is 50500, use the `$median` macro to render it as \$50.5K, or the `$unformattedMedian` macro to render it as 50500.

- Specify the formatted mean value of the data plot using the `$mean` macro, or the unformatted mean value of the data plot using the `$unformattedMean` macro. For example, if the mean value is 49720, use the `$mean` macro to render it as \$49.72K, or the `$unformattedMean` macro to render it as 49720.

- Specify the formatted standard deviation value of the data plot using the `$SD` macro, or the unformatted standard deviation value of the data plot using the `$unformattedSD` macro. For example, if the standard deviation value is 2290, use the `$SD` macro to render it as \$2.29K, or the `$unformattedSD` macro to render it as 2290.

- Specify the formatted quartile deviation value of the data plot using the `$QD` macro, or the unformatted quartile deviation value of the data plot using the `$unformattedQD` macro. For example, if the quartile deviation value is 9673, use the `$QD` macro to render it as \$9.76K, or the `$unformattedQD` macro to render it as 9673.

- Specify the formatted mean deviation value of the data plot using the `$MD` macro, or the unformatted mean deviation value of the data plot using the `$unformattedMD` macro. For example, if the mean deviation value is 9113, use the `$MD` macro to render it as \$9.11K, or the `$unformattedMD` macro to render it as 9113.

Refer to the code below:

```json
{
  "chart": {
    "plotToolText": "$seriesName Teachers-$label  <br> <br> Max value: $maxDataValue <br> Min value: $minDataValue <br> <br> Q3: $Q3 <br> Median: $median <br> Q1: $Q1 <br> <br> Mean: $mean <br> <br> Standard deviation: $SD <br> Quartile Deviation: $QD <br> Mean Deviation: $MD"
  }
}
```

The chart will look as shown below:

![Tooltips](/images/chart-configurations-tooltip-image-7.png)

Click [here](http://jsfiddle.net/fusioncharts/mgkhxywt/) to edit the above chart.

In the chart shown above, tooltip macros for the box and whisker chart have been used to add the mean, quartile deviation, standard deviation, and mean deviation values to the tooltip text.

By default, the tooltip text for the data plots in a box and whisker chart includes the following values:

- Minimum value

- Maximum value

- Upper and lower quartile values

- Median

## List of Tooltip Macros

<table>
    <tr>
        <th> Macro name </th>
        <th> Description </th>
        <th> Supported by </th>
        <th> Format </th>
    </tr>

    <tr>
        <td> `$value` </td>
        <td> Represents the unformatted data plot, entity, and marker data values </td>
        <td> <ul> <li> All charts that support the `value` attribute in the `data` object </li> <li> Horizontal and vertical bullet graph </li> <li> Real-time thermometer gauge </li> <li> Real-time bulb gauge </li> <li> Real-time horizontal linear gauge </li> <li> Real-time angular gauge </li> <li> Multi-level pie chart </li> <li> Map entity and marker tooltext </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `axis`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> <li> `dial`: {`toolText`} </li> <li> `category`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$dataValue` </td>
        <td> Represents the formatted data plot, entity, and marker data values </td>
        <td> <ul> <li> All charts that support the `value` attribute in the `data` object </li> <li> Horizontal and vertical bullet graph </li> <li> Real-time thermometer gauge </li> <li> Real-time bulb gauge </li> <li> Real-time horizontal linear gauge </li> <li> Real-time angular gauge </li> <li> Multi-level pie chart </li> <li> Map entity and marker tooltext </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `axis`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> <li> `dial`: {`toolText`} </li> <li> `category`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$label` </td>
        <td> Represents the data plot, category, connector, and marker labels </td>
        <td> <ul> <li> All charts where the data plots correspond to the x-axis label </li> <li> Pyramid chart </li> <li> Funnel chart </li> <li> Multi-level pie chart </li> <li> Map connector and marker tooltext </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> <li> `map`: {`markerToolText`} </li> <li> `marker`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$displayValue` </td>
        <td> Represents the value of the `displayValue` attribute of the `data` and `entity` objects </td>
        <td> <ul> <li> All charts that support the `displayValue` attribute in the `data` object </li> <li> Pyramid chart </li> <li> Funnel chart </li> <li> Kagi  chart </li> <li> Waterfall/Cascade chart </li> <li> Map entity, connector, and marker tooltext </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$datasValue` </td>
        <td> Represents the formatted data plot of the gradient legend </td>
        <td> <li> Treemap </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$svalue` </td>
        <td> Represents the unformatted data plot of the gradient legend </td>
        <td> <li> Treemap </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$seriesName` </td>
        <td> Represents the series name </td>
        <td> <li> All multi-series charts </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$yAxisName` </td>
        <td> Represents the y-axis name </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$xAxisName` </td>
        <td> Represents the x-axis name </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$xValue` </td>
        <td> Represents the x-coordinate (unformatted value) of a data plot </td>
        <td> <li> XY charts </li> <li> Drag-node chart </li> <li> Candlestick chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$xDataValue` </td>
        <td> Represents the x-coordinate (formatted value) of a data plot </td>
        <td> <li> XY charts </li> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$yValue` </td>
        <td> Represents the y-coordinate (unformatted value) of a data plot </td>
        <td> <li> XY charts </li> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$yDataValue` </td>
        <td> Represents the y-coordinate (formatted value) of a data plot </td>
        <td> <li> XY charts </li> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$zValue` </td>
        <td> Represents the z-coordinate (unformatted value) of a data plot </td>
        <td> <li> Bubble chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$zDataValue` </td>
        <td> Represents the z-coordinate (formatted value) of a data plot </td>
        <td> <li> Bubble chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$name` </td>
        <td> Represents the name of a data plot </td>
        <td> <li> Bubble chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$percentValue` </td>
        <td> Represents the corresponding percentage value (formatted number) of a data value </td>
        <td> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Multi-level pie chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$sum` </td>
        <td> Represents the sum (formatted) of data values of all/stacked (in stacked charts) data plots </td>
        <td> <li> Pareto 2D/3D </li> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Waterfall/Cascade chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedSum` </td>
        <td> Represents the sum (unformatted) of data values of all/stacked (in stacked charts) data plots </td>
        <td> <li> Pareto 2D/3D </li> <li> Pie 2D/3D chart </li> <li> Doughnut 2D/3D chart </li> <li> Funnel chart </li> <li> Pyramid chart </li> <li> Stacked charts </li> <li> Marimekko chart </li> <li> Waterfall/Cascade chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$cumulativeValue` </td>
        <td> Represents the sum (unformatted) of data values upto the current data plot </td>
        <td> <li> Pareto 2D/3D </li> <li> Waterfall/Cascade chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$cumulativeDataValue` </td>
        <td> Represents the sum (formatted) of data values upto the current data plot </td>
        <td> <li> Pareto 2D/3D </li> <li> Waterfall/Cascade chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$cumulativePercentValue` </td>
        <td> Represents the sum (unformatted) of data values, in percent, upto the current data plot </td>
        <td> <li> Pareto 2D/3D </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$cumulativePercentDataValue` </td>
        <td> Represents the sum (formatted) of data values, in percent, upto the current data plot </td>
        <td> <li> Pareto 2D/3D </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$xAxisPercentValue` </td>
        <td> Represents the x-axis value, in percent, which is covered by the corresponding stack </td>
        <td> <li> Marimekko chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$errorValue` </td>
        <td> Represents the error value (unformatted) of a data plot </td>
        <td> <li> Error bar chart </li> <li> Error line chart </li> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$errorDataValue` </td>
        <td> Represents the error value (formatted) of a data plot </td>
        <td> <li> Error bar chart </li> <li> Error line chart </li> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$errorPercentValue` </td>
        <td> Represents the error value, in percent, of a data plot </td>
        <td> <li> Error bar chart </li> <li> Error line chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$horizontalErrorValue` </td>
        <td> Represents the horizontal error value (unformatted) of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$horizontalErrorDataValue` </td>
        <td> Represents the horizontal error value (formatted) of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$verticalErrorValue` </td>
        <td> Represents the vertical error value (unformatted) of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$verticalErrorDataValue` </td>
        <td> Represents the vertical error value (formatted) of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$horizontalErrorPercent` </td>
        <td> Represents the horizontal error value, in percent, of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$verticalErrorPercent` </td>
        <td> Represents the vertical error value, in percent, of a data plot </td>
        <td> <li> Error scatter chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$openValue` </td>
        <td> Represents the opening value (unformatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$openDataValue` </td>
        <td> Represents the opening value (formatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$closeValue` </td>
        <td> Represents the closing value (unformatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$closeDataValue` </td>
        <td> Represents the closing value (formatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$highValue` </td>
        <td> Represents the highest value (unformatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$highDataValue` </td>
        <td> Represents the highest value (formatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$lowValue` </td>
        <td> Represents the lowest value (unformatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$lowDataValue` </td>
        <td> Represents the lowest value (formatted) of a data plot </td>
        <td> <li> Candlestick chart </li> <li> Spark line chart </li> <li> Spark column </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$volumeValue` </td>
        <td> Represents the transaction volume value (unformatted) for a data plot </td>
        <td> <li> Candlestick chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$volumeDataValue` </td>
        <td> Represents the transaction volume value (formatted) for a data plot </td>
        <td> <li> Candlestick chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$tlLabel` </td>
        <td> Represents the top-left corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$trLabel` </td>
        <td> Represents the top-right corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$blLabel` </td>
        <td> Represents the bottom-left corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$brLabel` </td>
        <td> Represents the bottom-right corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$tlType` </td>
        <td> Represents the type of the top-left corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$trType` </td>
        <td> Represents the type of the top-right corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$blType` </td>
        <td> Represents the type of the bottom-left corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$brType` </td>
        <td> Represents the type of the bottom-right corner label of a data plot </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$rowLabel` </td>
        <td> Represents the label of the row in which the data plot is located </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$columnLabel` </td>
        <td> Represents the label of the column in which the data plot is located </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$colorRangeLabel` </td>
        <td> Represents the label of the color range to which the data plot belongs </td>
        <td> <li> Heat map chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `dataset`: {`plotToolText`} </li> <li> `data`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromXValue` </td>
        <td> Represents the x-coordinate of the source node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromXDataValue` </td>
        <td> Represents the x-coordinate (formatted) of the source node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromYValue` </td>
        <td> Represents the y-coordinate of the source node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromYDataValue` </td>
        <td> Represents the y-coordinate (formatted) of the source node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromLabel` </td>
        <td> Represents the label of the source node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toXValue` </td>
        <td> Represents the x-coordinate of the destination node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toXDataValue` </td>
        <td> Represents the x-coordinate (formatted) of the destination node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toYValue` </td>
        <td> Represents the y-coordinate of the destination node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toYDataValue` </td>
        <td> Represents the y-coordinate (formatted) of the destination node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toLabel` </td>
        <td> Represents the label of the destination node </td>
        <td> <li> Drag-node chart </li> </td>
        <td> <li> `chart`: {`connectorToolText`} </li> <li> `connectors`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$maxValue` </td>
        <td> Represents the maximum value (unformatted) of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$maxDataValue` </td>
        <td> Represents the maximum value (formatted) of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$minValue` </td>
        <td> Represents the minimum value (unformatted) of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$minDataValue` </td>
        <td> Represents the minimum value (formatted) of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`outlierToolText`} | {`meanToolText`} | {`SDToolText`} | {`QDToolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$Q1` </td>
        <td> Represents the value of the lower quartile of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedQ1` </td>
        <td> Represents the unformatted value of the lower quartile of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$Q3` </td>
        <td> Represents the value of the upper quartile of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedQ3` </td>
        <td> Represents the unformatted value of the upper quartile of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$SD` </td>
        <td> Represents the standard deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`SDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`SDToolText`} </li> <li> `data`: {`toolText`} | {`SDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedSD` </td>
        <td> Represents the unformatted standard deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`SDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`SDToolText`} </li> <li> `data`: {`toolText`} | {`SDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$QD` </td>
        <td> Represents the quartile deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedQD` </td>
        <td> Represents the unformatted quartile deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`QDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`QDToolText`} </li> <li> `data`: {`toolText`} | {`QDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$MD` </td>
        <td> Represents the mean deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedMD` </td>
        <td> Represents the unformatted mean deviation value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`MDToolText`} </li> <li> `dataset`: {`plotToolText`} | {`MDToolText`} </li> <li> `data`: {`toolText`} | {`MDToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$mean` </td>
        <td> Represents the mean value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedMean` </td>
        <td> Represents the unformatted mean value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$median` </td>
        <td> Represents the median value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$unformattedMedian` </td>
        <td> Represents the unformatted median value of the data plot </td>
        <td> <li> Box and whisker chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$targetValue` </td>
        <td> Represents the unformatted target value </td>
        <td> <li> Horizontal bullet graph </li>  <li> Vertical bullet graph </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$targetDataValue` </td>
        <td> Represents the formatted target value </td>
        <td> <li> Horizontal bullet graph </li>  <li> Vertical bullet graph </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$percentOfPrevValue` </td>
        <td> Represents the current value as a percentage (unformatted) of the previous value <br> Applicable only when the `streamlinedData` attribute is set to __1__ </td>
        <td> <li> Funnel chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} | {`meanToolText`} </li> <li> `dataset`: {`plotToolText`} | {`meanToolText`} </li> <li> `data`: {`toolText`} | {`meanToolText`} </li> </td>
    </tr>

    <tr>
        <td> `$start` </td>
        <td> Represents the start time of a task </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$end` </td>
        <td> Represents the end time of a task </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$label` </td>
        <td> Represents the task label </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$percentComplete` </td>
        <td> Represents the percent complete rate of a task </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`plotToolText`} </li> <li> `tasks`: {`plotToolText`} </li> <li> `task`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$date` </td>
        <td> Represents the milestone date </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$taskStartDate` </td>
        <td> Represents the start date of a task for the milestone </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$taskEndDate` </td>
        <td> Represents the end date of a task for the milestone </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$taskLabel` </td>
        <td> Represents the task label for the milestone </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$taskPercentComplete` </td>
        <td> Represents the percent complete rate of a task for the milestone </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$processName` </td>
        <td> Represents the name of a process for the milestone </td>
        <td> <li> Gantt chart </li> </td>
        <td> <li> `chart`: {`milestoneToolText`} </li> <li> `milestone`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$sName` </td>
        <td> Represents the short name of an entity </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$lName` </td>
        <td> Represents the long name of an entity </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`entityToolText`} </li> <li> `entity`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromID` </td>
        <td> Represents the ID of the marker from which the connector starts </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$fromLabel` </td>
        <td> Represents the label of the marker from which the connector starts </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toID` </td>
        <td> Represents the ID of the marker at which the connector ends </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$toLabel` </td>
        <td> Represents the label of the marker at which the connector ends </td>
        <td> <li> Maps </li> </td>
        <td> <li> `map`: {`connectorToolText`} </li> <li> `connector`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$startValue` </td>
        <td> Represents the starting value (unformatted) of a trend-line/trend-zone </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$startDataValue` </td>
        <td> Represents the starting value (formatted) of a trend-line/trend-zone </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$endValue` </td>
        <td> Represents the ending value (unformatted) of a trend-line/trend-zone </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$endDataValue` </td>
        <td> Represents the ending value (formatted) of a trend-line/trend-zone </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$displayValue` </td>
        <td> Represents the display of a trend-line/trend-zone </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$axisName` </td>
        <td> Represents the axis name against which the trend-line/trend-zone is plotted </td>
        <td> <li> All Cartesian (x- and y-coordinate) charts </li> </td>
        <td> <li> `trendLines`: {`toolText`} </li> <li> `line`: {`toolText`} </li> </td>
    </tr>

    <tr>
        <td> `$positiveErrorValue` </td>
        <td> It refers to the unformatted `positiveErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` </td>
        <td> <li> Error bar chart </li>  <li> Error line chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$positiveErrorDataValue` </td>
        <td> It refers to the formatted `positiveErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` </td>
        <td> <li> Error bar chart </li>  <li> Error line chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$negativeErrorValue` </td>
        <td> It refers to the unformatted `negativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` </td>
        <td> <li> Error bar chart </li>  <li> Error line chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$negativeErrorDataValue` </td>
        <td> It refers to the formatted `negativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` </td>
        <td> <li> Error bar chart </li>  <li> Error line chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$horizontalPositiveErrorValue` </td>
        <td> It refers to the unformatted `horizontalPositiveErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `horizontalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$horizontalPositiveErrorDataValue` </td>
        <td> It refers to the formatted `horizontalPositiveErrorValue` provided by the user for individual data plot. default: inherited from `errorValue` / `horizontalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$horizontalNegativeErrorValue` </td>
        <td> It refers to the unformatted `horizontalNegativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `horizontalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$horizontalNegativeErrorDataValue` </td>
        <td> It refers to the formatted `horizontalNegativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `horizontalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$verticalPositiveErrorValue` </td>
        <td> It refers to the unformatted `verticalPositiveErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `verticalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$verticalPositiveErrorDataValue` </td>
        <td> It refers to the formatted `verticalPositiveErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `verticalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$verticalNegativeErrorValue` </td>
        <td> It refers to the unformatted `verticalNegativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `verticalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>

    <tr>
        <td> `$verticalNegativeErrorDataValue` </td>
        <td> It refers to the formatted `verticalNegativeErrorValue` provided by the user for individual data plot. By default, this is inherited from `errorValue` / `verticalErrorValue` </td>
        <td> <li> Error Scatter chart </li> </td>
        <td> Left </td>
    </tr>
    <tr>
        <td> `$nodeValue` </td>
        <td> Gets the unformatted value from a node.</td>
        <td> <li>Chord</li> <li>Sankey</li> </td>
        <td> <li>`chart`: {`plotToolText`}</li> <li>`node`: {`plotToolText`}</li></td>
    </tr>
    <tr>
        <td> `$nodeDataValue` </td>
        <td> Gets the formatted value from a node.</td>
        <td> <li>Chord</li> <li>Sankey</li> </td>
        <td> <li>`chart`: {`plotToolText`}</li> <li>`node`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$plotFillColor` </td>
        <td> Gets the fill color of a node in hex format.</td>
        <td> <li>Chord</li> <li>Sankey</li> </td>
        <td> <li>`chart`: {`plotToolText`}</li> <li>`node`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$plotFillAlpha` </td>
        <td> Gets the fill alpha (transparency) of a node.</td>
        <td> <li>Chord</li> <li>Sankey</li> </td>
        <td> <li>`chart`: {`plotToolText`}</li> <li>`node`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$plotIdentifier` </td>
        <td> Gets the legend icon shape defined in the legend box.</td>
        <td> <li>Chord</li> <li>Sankey</li> </td>
        <td> <li>`chart`: {`plotToolText`}</li> <li>`node`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$dominantNode` </td>
        <td> Gets the label (name) of the dominant node.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>    
    <tr>
        <td> `$subservientNode` </td>
        <td> Gets the label (name) of the subservient node.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$dominantFlowValue` </td>
        <td> Gets the unformatted value of the dominant flow.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$dominantFlowDataValue` </td>
        <td> Gets the formatted value of the dominant flow.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$subservientFlowValue` </td>
        <td> Gets the unformatted value of the subservient flow.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$subservientFlowDataValue` </td>
        <td> Gets the formatted value of the subservient flow.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$dominantPlotIdentifier` </td>
        <td> Gets the legend icon shape of the dominant node.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>            
    <tr>
        <td> `$subservientPlotIdentifier` </td>
        <td> Gets the legend icon shape of the subservient node.</td>
        <td> <li>Chord</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$from` </td>
        <td> Gets the value of the "from" node label.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$to` </td>
        <td> Gets the value of the "to" node label.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$linkValue` </td>
        <td> Gets the unformatted value of the link.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$linkDataValue` </td>
        <td> Gets the formatted value of the link.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    <tr>
        <td> `$fromPlotIdentifier` </td>
        <td> Gets the legend icon shape of the "from" node.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
        <td> `$toPlotIdentifier` </td>
        <td> Gets the legend icon shape of the "to" node.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>
    </tr>
        <td> `$flowDirection` </td>
        <td> Gets the flow direction, an arrow shape from left to right.</td>
        <td> <li>Sankey</li></td>
        <td> <li>`chart`: {`linkToolText`}</li> <li>`link`: {`toolText`}</li></td>
    </tr>    
</table>
