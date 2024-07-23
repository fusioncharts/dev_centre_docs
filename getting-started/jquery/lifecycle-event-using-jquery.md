---
title: Lifecycle Events using Jquery | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using jquery-fusioncharts component.
heading: Lifecycle Events using Jquery
---

Events are signals that let you execute specific actions—such as sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, and events.

The sample in this article lists the basic lifestyle events at the time of rendering the chart using `jquery-fusioncharts` component.

A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

The code to render a chart using `require` is given below:

```
// Include fusioncharts
var FusionCharts = require('fusioncharts');

// Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');

// Resolve Charts as dependency for FusionCharts
Charts(FusionCharts); 

// Resolve Fusion theme as dependency for FusionCharts
FusionTheme(FusionCharts); 

// Resolve FusionCharts as dependency for jqueryFusionCharts
jQueryFusionCharts(FusionCharts);

$('document').ready(function () {
    // bind beforeDataUpdate and dataUpdated events
    $('#chart-container').bind('fusionchartsbeforedataupdate', function (event, args) {
        $('#message').append('beforeDataUpdate, ');
    });
    $('#chart-container').bind('fusionchartsdataupdated', function (event, args) {
        $('#message').append('dataUpdated, ');
    });

    $('#chart-container').insertFusionCharts({
        type: 'column2d',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            "data": [{
                  "label": "Venezuela",
                  "value": "290"
              }, {
                  "label": "Saudi",
                  "value": "260"
              }, {
                  "label": "Canada",
                  "value": "180"
              }, {
                  "label": "Iran",
                  "value": "140"
              }, {
                  "label": "Russia",
                  "value": "115"
              }, {
                  "label": "UAE",
                  "value": "100"
              }, {
                  "label": "US",
                  "value": "30"
              }, {
                  "label": "China",
                  "value": "30"
              }]
        }
    });

    // bind drawComplete and renderComplete events
    $('#chart-container').bind('fusionchartsdrawcomplete', function (event, args) {
        $('#message').append('drawComplete, ');
    });
    $('#chart-container').bind('fusionchartsrendercomplete', function (event, args) {
        $('#message').append('renderComplete');
    });
});
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<p style="padding: 10px; background: rgb(245, 242, 240);" id="message">
    <b>Status:</b>
</p>
```

## The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for FusionCharts, Fusion Theme and jquery-fusioncharts.

Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. Bind the `drawComplete` and `renderComplete` events.

5. Create an HTML template to render the chart.
