---
title: Dynamically Add Chart Event Listener using Jquery | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using jquery.
heading: Dynamically Add Chart Event Listener using Jquery
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using `jquery-fusioncharts` component.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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

    // Handlers for tracking click events
    $('#track').click(function () {
        $('#message').html('Click on the plot to see the value along with the label');
        $('#chart-container').bind('fusionchartsdataplotclick', function (event, data) {
            $('#message').html('You have clicked on plot <b>' + data.categoryLabel +
                '</b> which has a value of <b>' + data.displayValue + '</b>');
        });
        $('#track').attr('disabled', 'disabled');
        $('#reset').removeAttr('disabled');
    });
    $('#reset').click(function () {
        $('#chart-container').unbind('fusionchartsdataplotclick');
        $('#message').html('Click the below buttons to add an event dynamically to a chart');
        $('#track').removeAttr('disabled');
        $('#reset').attr('disabled', 'disabled');
    });
});
```

## The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<div style="padding: 0px; background: rgb(255, 255, 255);" id="message">
	Click the below buttons to add an event dynamically to the chart
</div>
<div style="display: flex; justify-content: center; margin: 0px">
    <button class="btn btn-outline-secondary btn-sm" id="track">ADD/LISTEN TO DATAPLOTCLICK EVENT</button>
    <button class="btn btn-outline-secondary btn-sm" id="reset" disabled="true">REMOVE DATAPLOTCLICK EVENT</button>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for `fusioncharts`, `theme` file and `jquery-fusioncharts`. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. Add event handlers to track the click events when the event is applied to the data plots and when the **Reset** button is clicked.

5. Create an HTML template to render the chart and the buttons using `<button>`.
