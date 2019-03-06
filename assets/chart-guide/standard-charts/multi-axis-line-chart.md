---
title: Multi-axis Line Chart | FusionCharts
description: A multi-axis line chart, as the name suggests, is an interactive line chart that can be configured for multiple axes.
heading: Multi-axis Line Chart
---

> This chart type belongs to **PowerCharts XT**.

A multi-axis line chart, as the name suggests, is an interactive line chart that can be configured for multiple axes. It is a special type of chart that allows multiple y-axes to be rendered in the same chart. The advantage of using a multi-axis line chart is that you can plot multiple data sets with different types of units. For example, 1-100 on one axis, 1m - 100m on another axis, and 0 - 1 on yet another axis) on the same chart.

## Features

The FusionCharts Suite XT multi-axis line chart includes the following features:

* Multiple axes on the same chart.

* Interactive axis, which allows the end user to show or hide data sets (lines) plotted against that axis.

* Options to make the axis visible or imaginary.

* Options to draw the axis on left or right side of the chart.

* Interactive options, like dynamic sliding of the axis from one end to other upon clicking.

* Ability to plot multiple data-sets against the same axis.

* Options to configure axis-specific properties like:

    * Upper and lower limits

    * Cosmetic properties

    * Divisional Lines

    * Cosmetic properties of data-sets plotting against the particular axis

    * Number formatting

## Create a Multi-Axis Line Chart

Let's create our first multi-axis line which will showcase the revenue analysis Harry's SuperMart depending on the revenue, orders, and footfall for 12 weeks. 

To create a multi-axis line chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-axis line chart, set `multiaxisline`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

The attributes and the structure of the multi-axis line chart is a bit different from the multi-series charts. So there are some configurations and attributes which may help you in customizing your chart. They are:

* Specify the `title` attribute to set the title for an axis. This attribute belongs to the axis object. 

* Specify the `tickWidth` attribute to set the width between the tick marks protruding from the axis. This attribute belongs to the axis object.

* Specify whether the axis will be rendered on the left side of the canvas or the right side using `axisOnLeft` attribute. Setting this attribute to `0` will render the axis on the right, setting it to `1` (default) will render it on the left. This attribute belongs to the axis object.

* Specifying the `allowSelection` attribute will let you set the checkbox shown for each axis. Selecting/clearing this checkbox for an axis will show/hide the data set belonging to that axis.

* Specify the `allowAxisShift` attribute to set the dynamic shifting of an axis. If you click an axis that is not the primary (the first from the left of the canvas) or the secondary (the first from the right canvas) axis, the axis to the left of this axis will replace it. The axis that you clicked will be placed at the end, in case of multiple axes. Setting this attribute to `0` will disable the shifting of axes, setting it to `1` (default) will enable it.

* Set the `showAxis` attribute to specify whether the axis will be shown or hidden (referred to as an imaginary axis). Setting this attribute to `0` will hide the axis, setting it to `1` (default) will show it.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=MultiAxisLine) page of multi-axis line chart.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
            "category": [
            ]
        }],
    "axis": [{
    	"showAxis": "1",
    	"allowAxisShift": "1",
        "title": "Revenue",
        "tickWidth": "10",
        "numberPrefix": "$",
        "divlineDashed": "1",
        "dataset": [{
            ...
        }]
    }]
}
```

A multi-axis line chart rendered with three axes looks like this:

{% embed_all standard-charts-multi-axis-line-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/aPHB5/) to edit the multi-axis line chart.