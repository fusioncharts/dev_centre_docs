---
permalink: api/tutorials/reference-to-chart-object.html
title: Check out the comprehensive guide to FusionCharts' charts, providing detailed documentation on every aspect, from configuration options to customizations.
heading: Get Reference to Chart Object
chartPresent: true
layout: page
---

FusionCharts Suite XT supports 3 ways of getting references to the chart object at runtime. They are: 

* Using the FusionCharts constructor
* Using the items object

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
