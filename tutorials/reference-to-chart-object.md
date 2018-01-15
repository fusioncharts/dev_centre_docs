---
permalink: api/tutorials/reference-to-chart-object.html
title: Get Reference to Chart Object | FusionCharts
description: FusionCharts Suite XT supports 3 ways of getting references to the chart object at runtime. This reference comes in handy if you want to perform operations on the chart
heading: Get Reference to Chart Object
chartPresent: true
layout: page
---

FusionCharts Suite XT supports 3 ways of getting references to the chart object at runtime. They are: 

* [Using the FusionCharts constructor](/tutorials/reference-to-chart-object#using-the-fusioncharts-constructor)
* [Using the items object](/tutorials/reference-to-chart-object#using-the-items-object)
* [Using the getChartFromId function](/tutorials/reference-to-chart-object#using-the-getchartfromid-function)


This reference comes in handy if you want to perform operations on the chart like change its properties or chart type once the chart is rendered.

## Using the FusionCharts Constructor

The FusionCharts constructor returns a reference to the `id` of the chart passed to it when it is called without the `new` keyword.

The following code snippet shows how to get a reference of the chart using this method

```html
<html>
<head>
<script>
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        id: 'revenue-chart',
        type: 'column2d',
        renderAt: 'chart-container',
        dataFormat: 'json'
        dataSource: {
              // Chart data goes here
        }
        });
 
    revenueChart.render();
    revenueChart = FusionCharts('revenue-chart');
});
</script>
</head>
<body>
<div id="chart-container">FusionCharts will render here</div>
</body>
</html>
```

Here the `revenueChart` variable contains a reference to the chart object.

## Using the Items Object

When the FusionCharts library is used and charts are rendered on a page, an `items` object contains references to all the charts used in the page. The FusionCharts `items` object returns a reference to the `id` of the chart passed to it.

The following code snippet shows how to get a reference of the chart using this method. `revenueChart` contains the object reference we are looking at.

```html
<html>
<head>
<script>
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        id: 'revenue-chart',
        type: 'column2d',
        renderAt: 'chart-container',
        dataFormat: 'json'
        dataSource: {
             // Chart data goes here
      }
        });
    revenueChart.render();
    revenueChart = FusionCharts.items['revenue-chart'];
});
</script>
</head>
<body>
<div id="chart-container">FusionCharts will render here</div>
</body>
</html>
```

## Using the getChartFromId Function

The `getChartFromId` function returns an object reference to the `id` of the chart passed to it.

The following code snippet shows how to get a reference of the chart using this method


```html
<html>
<head>
<script>
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        id: 'revenue-chart',
        type: 'column2d',
        renderAt: 'chart-container',
        dataFormat: 'json'
        dataSource: {
              // Chart data goes here
        }
        });
    revenueChart.render();
    revenueChart = getChartFromId('revenue-chart');
});
</script>
</head>
<body>
<div id="chart-container">FusionCharts will render here</div>
</body>
</html>
```

Here the `revenueChart` variable contains a reference to the chart object.
