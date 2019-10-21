---
title: Multi-level Pie Chart | FusionCharts
description: The multi-level pie chart is a special type of chart that allows you to show symmetrical/asymmetrical tree structures in a consolidated pie-like structure
heading: Multi-level Pie Chart
---

> This chart type belongs to **PowerCharts XT**.

The multi-level pie chart is a special type of chart that allows you to show symmetrical and asymmetrical tree structures in a consolidated pie-like structure. It presents the entire hierarchical data in a single-screen snapshot, which makes it a preferred choice over a tree view. Also, the pie slices can assume numerical values and thereby divide the visual segments in a ratio based on the numerical values. The chart also offers advanced interactivity options like visual path tracing from any child to parent.

This chart can be used to show various types of data like:

- Organization structure

- Multi-tiered data presentation, e.g., keyword analysis

- Inter-linked tree data, e.g., friends of friends

- Sales breakup, e.g., for top product categories

As an example, we will create a multi-level pie chart that shows the sales breakup of top product categories for the last quarter at Harry's SuperMart.

To create a multi-level pie chart follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a multi-level pie chart, set `multilevelpie`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=multilevelpie) page of multi-level pie chart.

The multi-level pie chart thus rendered looks like this:

{% embed_all standard-charts-multi-level-pie-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/njjra2r4/) to edit the multi-level pie chart.

Now, let's customize the appearance and properties of the multi-level pie chart.

## Configure highlight effect

Set the direction of the highlight effect of the plots, when hovered over, using the `highlightParentPieSlices` and `highlightChildPieSlices` attributes. For instance:

- Set the value of `highlightParentPieSlices` to `0` to prevent child pie slices from getting highlighted, when you hover over the parent slices.

- Set the value of `highlightChildPieSlices` to `1` to automatically also highlight parent slices when you hover over the child pie slices.

Refer to the code below:

```json
{
    "chart": {
        "highlightParentPieSlices": "0",
        "highlightChildPieSlices": "1"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-multi-level-pie-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/xcjhaz28/) to edit the multi-level pie chart.

## Configure inner radius

Use the `InnerRadius` attribute to explicitly set the inner radius of the pie chart to a value of your choosing.

Refer to the code below:

```json
{
    "chart": {
        "innerRadius": "10"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-multi-level-pie-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/yw2mf0rj/) to edit the multi-level pie chart.

## Export Multi-level pie chart in CSV or XLSX formats

In version 3.13.0, you can export data from multi-level pie charts in CSV or XLSX formats. Set the value of the `enableExport` attribute to `1` to do so.

Refer to the code below:

```json
{
    "chart": {
        "exportEnabled": "1"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-multi-level-pie-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/pcmz12Lv/) to edit the multi-level pie chart.

## Show/Hide Category Label and Value

Starting version 3.13.5, you can enable or disable the visibility of labels and values categorically using `showLabel` and `showValue` respectively. For instance:

- Set the value of `showLabel` to `0` to hide a label of a particular category.
- Set the value of `showValue` to `0` to hide the value of a particular category.

Refer to the code below:

```json
"category": [{
    "showlabel": "0",
    "showvalue": "0"
}]
```

The chart will look like as shown below:

{% embed_chart standard-charts-multi-level-pie-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/n2ycfvas/) to edit the above chart.