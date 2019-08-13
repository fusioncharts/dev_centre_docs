---
title: Change the Size | FusionCharts
description: FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or in percentage. You can also create a chart which resizes automatically.
heading: Change the Size
---

FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or percentage values, relative to the containers. If the size is specified in pixels, then the dimensions of a chart remain constant, no matter the viewing device or screen size. However, if the dimensions are set as a percentage of the container, the chart converts that `%` value into pixels while rendering. When the container size changes, the chart is automatically resized accordingly.

## Set Width and Height in Pixels

To set the `width` and `height` you just need to provide the numeric values, and not add `px` at the end of such values.

The code to render a column chart with `width: 500px` and `height 300px` is shown below:

```javascript
{
    type: 'column2d',
    renderAt: 'chart-container',
    width: 500, //width of the chart
    height: 300, //height of the chart
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue",
            "subCaption": "Last year",
            "xAxisName": "Month",
            "yAxisName": "Amount ($)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    }
}
```

## Set Width and Height in Percentage

If you want to create a chart that automatically resizes when its parent container (another `<div>` or the entire window) resizes, here's how you can set the `width` and `height` of the chart:

```javascript
{
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            ...
        },
        "data": []
    }
}
```

Ensure that you set the parent container of the chart in a way that allows its dimensions to change dynamically when the browser is resized or other changes take place on the page (like when an element is added or removed).

> In certain cases, if the HTML container element itself has not acquired proper width or height (due to an error in rendering by the browser), the chart might look squeezed, or it may not render in the first place. If this happens, then you have to specify the chart's dimensions in pixels.

## Dynamically Change Dimensions

After you initialize a chart, you can change the dimensions dynamically, at client-side, through the JavaScript API `resizeTo()`.

Recreate the same chart you created earlier (as described in the [Your first chart](/chart-guide/getting-started/building-your-first-chart) article), using the same data. To resize the chart dynamically, invoke the `resizeTo()` method, specifying the new width and height of your chart (in pixels). You can call this method anytime after the chart has finished rendering.

Take a look at an example below, along with the code:

{% embed_chart chart-configurations-size-and-type-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/5Lpu0hrt/) to edit the above chart.
