---
title: Bind Event Listener | FusionCharts
description: Master event handling in FusionCharts with jQuery. Our tutorial covers everything for creating interactive charts for your web projects. Get started now!
heading: Bind Event Listener
---

## Take a look at the Column 2D chart shown below:

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the Column 2D chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the data label and the value) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Canada__ data plot, the following text is displayed below the chart:

**You are currently hovering over Canada whose value is 180**

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
    
    // Adding dataplotrollover event to chart
    $('#chart-container').bind('fusionchartsdataplotrollover', function (event, args) {
        $('#message').html('You are currently hovering over <b>' + args.categoryLabel +
            '</b> whose value is <b>' + args.displayValue + '</b>');
    });

    // Adding dataplotrollout event to chart
    $('#chart-container').bind('fusionchartsdataplotrollout', function (event, args) {
        $('#message').html('Hover on the plot to see the value along with the label');
    });
});
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<p style="padding: 10px; background: rgb(245, 242, 240);" id='message'>
    Hover on the plot to see the value along with the label
</p>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Resolve charts as dependency for FusionCharts, Fusion Theme and jquery-fusioncharts.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embedded as the value of the `dataSource`.

4. In the above sample:
    * `dataplotRollOver` event has been used which is triggered when the mouse pointer is rolled over a data plot.
    * `dataplotRollOut` event has been used which is triggered when the mouse pointer is rolled out of the data plot.

5. Created an HTML template to render the chart.
