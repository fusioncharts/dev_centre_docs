---
title: Special Events using Angular | FusionCharts
description: This article showcases a draggable column chart with special events.
heading: Special Events using Angular
---

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `jquery-fusioncharts` component.

A dragabble column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The code to render a chart using `require` is given below:

```

```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for `fusioncharts`, `theme` file and `jquery-fusioncharts`. 

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. A chart container is created to render the chart. With that `fusionchartsdataplotdragend` event is used to get the current and previous value of the dragged column. 

5. The value of the column is saved in a variable (label) to display in the message.

6. Created an HTML template to render the chart.