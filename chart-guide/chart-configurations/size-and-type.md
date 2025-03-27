---
title: Changing the Size and Type | FusionCharts
description: FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or in percentage. You can also create a chart which resizes automatically.
heading: Changing the Size and Type
---

Integrate multiple charts on a single page to get a consolidated view. To do this, modify the dimensions of each chart so that it fits on the page.

FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or percentage values, relative to the containers. If the size is specified in pixels, then the dimensions of a chart remain constant, no matter the viewing device or screen size. However, if the dimensions are set as a percentage of the container, the chart converts that `%` value into pixels while rendering. When the container size changes, the chart is automatically resized accordingly.

## Set Width and Height in Pixels

To set the `width` and `height` you just need to provide the numeric values, and not add "px" at the end of such values. Refer to the code  below:

```json
{
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500", //width of the chart
    "height": "300", //height of the chart
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            ...
        },
        "data": []
    }
}
```

## Set Width and Height in Percentage

If you want to create a chart that automatically resizes when its parent container (another `<div>` or the entire window) resizes, here's how you can set the `width` and `height` of the chart:

```json
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

Recreate the same chart you created earlier (as described in the [Your first chart](/getting-started/plain-javascript/your-first-chart-using-plain-javascript) article), using the same data. To resize the chart dynamically, invoke the `resizeTo()` method, specifying the new width and height of your chart (in pixels). You can call this method anytime after the chart has finished rendering.

Take a look at an example below, along with the code:

{% embed_chart chart-configurations-size-and-type-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/5Lpu0hrt/) to edit the above chart.

## Dynamically Change Chart Type 

You can convert a column chart to a line chart at the click of a button, to compare trends in the data. The standard approach for this would be to create an instance of a line chart, pass it the same JSON data, and then render it.

However, with FusionCharts Suite XT, you can change chart types quickly, with the `chartType()` method. The only constraint is that the new chart type must also consume the same type of data (such as single-series). This API is useful when you want users to be able to select the right view for their data, without you having to rebuild the entire chart.

Shown below is an example, along with the code:

{% embed_chart chart-configurations-size-and-type-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/txyb6ss4/) to edit the above chart.

You can also provide a new data source and format as an optional second parameter of `chartType (chartType, options)` method, to change the data along with the chart.

Now that you know how to configure the size of different charts to put them on a single page take a look at centralizing cosmetic properties of charts across the entire application.
