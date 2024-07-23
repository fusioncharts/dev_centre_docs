---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using `jquery-fusioncharts` component. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

## The code to render a chart using `require` is given below:

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
        id: 'change-chart',
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

    // Handlers for changing the chart type
    $('#radio1').click(function (e) {
        FusionCharts.items['change-chart'].chartType('column2d');
    });
    $('#radio2').click(function (e) {
        FusionCharts.items['change-chart'].chartType('bar2d');
    });
    $('#radio3').click(function (e) {
        FusionCharts.items['change-chart'].chartType('line');
    });
});
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
<div id="config-container">
    <span id="select-text">Choose a chart:</span>
    <div class="change-type">
        <div id="radio1">
            <input name="chart-selecter" id="radioButton1" type="radio" checked="checked"/>
            <label for="radioButton1">Column 2D Chart</label>
        </div>
        <div id="radio2">
            <input name="chart-selecter" id="radioButton2" type="radio"/>
            <label for="radioButton2">Bar 2D Chart</label>
        </div>
        <div id="radio3">
            <input name="chart-selecter" id="radioButton3" type="radio"/>
            <label for="radioButton3">Pie 2D Chart</label>
        </div>
    </div>
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

4. Add handlers to change the chart type using radio buttons.

5. Create an HTML template to render the chart.
